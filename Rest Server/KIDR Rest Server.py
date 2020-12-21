from flask import Flask, abort
from flask_restful import Api, Resource, reqparse
from neo4j import GraphDatabase
import pyodbc
import pandas as pd


class Neo4jConnection:

    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self.driver.close()

    def run_query(self, query):
        with self.driver.session() as session:
            x = session.run(query)
            return x.data()


class SQLConnection:

    def __init__(self, server, database, table):
        self.server = server
        self.database = database
        self.table = table
        self.conn = pyodbc.connect('Driver={SQL Server};'
                                   'Server=' + server + ';'
                                   'Database=' + database + ';'
                                   'Trusted_Connection=yes;')
        self.cursor = self.conn.cursor()

    def run_query(self, query):
        self.cursor.execute(query)
        self.conn.commit()

    def read_query(self, query):
        return pd.read_sql_query(query, self.conn)

    def get_column_names(self):
        query = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '" + self.table + "'"
        sql_query = self.read_query(query)
        return sql_query['COLUMN_NAME'].to_list()

    # Can be modified to include type of column
    # data is a list of dictionaries, col_names is a list of strings
    def store_results(self, data, col_names):
        sql_query = self.get_column_names()
        # print(sql_query)
        # print(type(sql_query))

        # Remove all the rows from the table
        self.cursor.execute("DELETE FROM " + self.table)

        # Add the correct columns to the table
        columns = self.get_column_names()
        # Cannot have an empty SQL table
        self.cursor.execute("ALTER TABLE " + self.table + " \n ADD STANDIN text;")

        for i in columns:
            # print("ALTER TABLE " + self.table + " \nDROP COLUMN " + i + ";")
            self.cursor.execute("ALTER TABLE " + self.table + " \nDROP COLUMN \"" + i + "\";")

        for i in col_names:        
            if (isinstance(data[0][i], int)):
                self.cursor.execute("ALTER TABLE " + self.table + " \n ADD \"" + i + "\" int;")
            else:
                self.cursor.execute("ALTER TABLE " + self.table + " \n ADD \"" + i + "\" text;")

        self.cursor.execute("ALTER TABLE " + self.table + " \nDROP COLUMN STANDIN;")

        # Populate the table with rows
        # Each element in 'data' is a row in the SQL table
        for i in data:
            # Prepare to put together a valid SQL statement
            query = "INSERT INTO " + self.table + " ("
            for col in col_names:
                query += "\"" + col + "\", "
            query = query[0:len(query) - 2] + ")\n VALUES ("
            for key in col_names:
                if (isinstance(data[0][key], int)):
                    query += str(i.get(key)).replace('\'', '') + ", "
                else:
                    query += "'" + str(i.get(key)).replace('\'', '') + "', "
               
            query = query[0:len(query) - 2] + ");"
            # print(query)
            self.cursor.execute(query)

        self.conn.commit()


app = Flask(__name__)
api = Api(app)

arg_parser = reqparse.RequestParser()
arg_parser.add_argument("query", type=str, required=True)

neo4j_conn = Neo4jConnection("bolt://localhost:7687", "neo4j", "password")
sql_conn = SQLConnection("DESKTOP-DUMI2T3", "Neo4jResult", "Query")


class DatabaseManager(Resource):
    def get(self):
        print("Starting GET Response")
        args = arg_parser.parse_args()
        query = args["query"]
        print("Query Received: " + query)

        result = neo4j_conn.run_query(query)
        print("Neo4j Step complete")
        sql_conn.store_results(result, result[0].keys())

        print("Complete")

        return {"data": "Successfully Completed"}


api.add_resource(DatabaseManager, "/Neo4J/", )


query_arg_parser = reqparse.RequestParser()
query_arg_parser.add_argument("node_one", type=str, required=False)
query_arg_parser.add_argument("relationship", type=str, required=False)
query_arg_parser.add_argument("node_two", type=str, required=False)
query_arg_parser.add_argument("constraints", type=str, required=False)
query_arg_parser.add_argument("properties", type=str, required=False)

class QueryManager(Resource):
    def constructQuery(self, node_one, rel, node_two, cons, prop):
        query = "INSERT INTO QueryBuilder (\"Node_One\", \"Relationship\", \"Node_Two\", \"Constraints\", \"Properties\")"
        query += "\nVALUES (\'"
        query += node_one + "\', \'"
        if rel is None:
            query += "\', \'"
            query += "\', \'"
        else:
            query += rel + "\', \'"
            query += node_two + "\', \'"
        if cons is None:
            query += "\', \'"
        else:
            query += cons + "\', \'"
        if prop is None:
            query += "\')"
        else:
            query += prop + "\')"

        return query

    def get(self):
        print("Starting GET Response")
        args = query_arg_parser.parse_args()

        # Node_one will only be null when we want to reset the table, this is by design
        if args["node_one"] is None:
            print("Resetting the Query Table")
            query = "DELETE FROM QueryBuilder"
            sql_conn.run_query(query)
            return {"data": "Successfully Completed"}


        query = self.constructQuery(args["node_one"], args["relationship"], args["node_two"], args["constraints"], args["properties"])
        print("Query Received: \n" + query)

        print("Inserting into SQL QueryBuilder Table")
        sql_conn.run_query(query)
        print("Complete")

        return {"data": "Successfully Completed"}

api.add_resource(QueryManager, "/Query/", )

if __name__ == "__main__":
    app.run()