import { PanelProps } from '@grafana/data';
import { getTemplateSrv } from '@grafana/runtime';
import { Button, HorizontalGroup, VerticalGroup } from '@grafana/ui';
import React from 'react';
import { ButtonOptions, Options } from 'types';

interface Props extends PanelProps<Options> {}

var nodes: string[] = [];
var node_dicts: object[] = []; //Array of dictionaries {constraints, properties}
var relations: object[] = []; //Array of arrays [[node,relation,node]]
var rel_dicts: object[] = []; //Array of dictionaries {constraints, properties}

function queryEditor(
  node1: string,
  relationship: string,
  node2: string,
  constraints: string,
  properties: string
) {
  console.log('Button Manager:');
  console.log(node1);
  console.log(relationship);
  console.log(node2);
  console.log(constraints);
  console.log(properties);

  // This action occurs when relationship (and presumable node2) are empty
  // It registers or overwrites a node, and adds to it its constraints for the query and properties to be displayed
  if (relationship === '') {
    if (node1 === '') {
      return;
    }

    if (!nodes.includes(node1)) {
      nodes.push(node1);
    }

    let index = nodes.indexOf(node1);

    let cons_dict = {};
    //Parse the constraints
    let constraint_arr = constraints.replace(/\s/g, '').split(',');
    constraint_arr.forEach(element => {
      if (element.length >= 3) {
        let key_val = element.split(':');
        cons_dict[key_val[0]] = key_val[1];
      }
    });

    //Parse the properties
    let prop_arr = [];
    if (properties.length > 0) {
      prop_arr = properties.replace(/\s/g, '').split(',');
    }

    let dict = {
      constraints: cons_dict,
      properties: prop_arr,
    };
    node_dicts[index] = dict;

    console.log(nodes);
    console.log(node_dicts);
  } else {
    // This action occurs when a relationship is specified
    // It registers or overwrites a relationship, and adds to it its constraints for the query and the properties to be displayed
    if (node1 === '' || node2 === '') {
      return;
    }

    if (!relations.includes([node1, relationship, node2])) {
      relations.push([node1, relationship, node2]);
    }

    let index = relations.length - 1;

    let cons_dict = {};
    //Parse the constraints
    let constraint_arr = constraints.replace(/\s/g, '').split(',');
    constraint_arr.forEach(element => {
      if (element.length >= 3) {
        let key_val = element.split(':');
        cons_dict[key_val[0]] = key_val[1];
      }
    });

    //Parse the properties
    let prop_arr = [];
    if (properties.length > 0) {
      prop_arr = properties.replace(/\s/g, '').split(',');
    }

    let dict = {
      constraints: cons_dict,
      properties: prop_arr,
    };
    rel_dicts[index] = dict;

    //Output some of the newly created/updated datafields
    console.log(relations);
    console.log(rel_dicts);
  }

  //Add the new query variables to the QueryBuilder SQL table
  var base = 'http://127.0.0.1:5000/Query/';

  var url = new URL(base);
  var params = {
    node_one: node1,
    relationship: relationship,
    node_two: node2,
    constraints: constraints,
    properties: properties,
  };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  console.log(url);
  fetch(url);

  return;
}

function createAndExecuteQuery() {
  var query = '';

  var node_repr: string[] = [];
  for (let i = 0; i < nodes.length; i++) {
    let node_str = '(' + nodes[i] + ':' + nodes[i] + '{';
    let cons_dict = node_dicts[i]['constraints'];
    let x = false;
    for (let key in cons_dict) {
      node_str += key + ':' + cons_dict[key] + ', ';
      x = true;
    }
    if (x) {
      node_str = node_str.substring(0, node_str.length - 2);
    }
    node_str += '})';

    node_repr.push(node_str);
  }

  var rel_repr: string[] = [];
  for (let i = 0; i < relations.length; i++) {
    let rel_str = '-[rel' + i + ':' + relations[i][1] + ' {';
    if (relations[i][1] === '*') {
      rel_str = '-[rel' + i + ' {';
    }
    let cons_dict = rel_dicts[i]['constraints'];
    let x = false;
    for (let key in cons_dict) {
      rel_str += key + ':' + cons_dict[key] + ', ';
      x = true;
    }
    if (x) {
      rel_str = rel_str.substring(0, rel_str.length - 2);
    }
    rel_str += '}]-';

    rel_repr.push(rel_str);
  }

  for (let i = 0; i < relations.length; i++) {
    let match_str = 'MATCH';
    let index_1 = nodes.indexOf(relations[i][0]);
    let index_2 = nodes.indexOf(relations[i][2]);

    match_str += node_repr[index_1] + rel_repr[i] + node_repr[index_2] + '\n';
    query += match_str;
  }

  var return_str = 'return ';
  let x = false;
  for (let i = 0; i < nodes.length; i++) {
    let prop_arr = node_dicts[i]['properties'];
    prop_arr.forEach(element => {
      return_str += nodes[i] + '.' + element + ', ';
      x = true;
    });
  }
  if (x) {
    return_str = return_str.substring(0, return_str.length - 2);
  }

  query += return_str;
  console.log(query);

  var base = 'http://127.0.0.1:5000/Neo4J/';

  var url = new URL(base);
  var params = { query: query };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  console.log(url);
  fetch(url);

  return;
}

function clearQuery() {
  nodes = [];
  node_dicts = [];
  relations = [];
  rel_dicts = [];

  // Send a request to clear out the table
  var base = 'http://127.0.0.1:5000/Query/';
  var url = new URL(base);
  var params = {};
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  console.log(url);
  fetch(url);
}

export const ButtonPanel: React.FC<Props> = ({ options }) => {
  const renderButtons = (buttons: ButtonOptions[]) => {
    return buttons.map((b: ButtonOptions, index: number) => {
      const text = b.text || 'Button';
      return (
        <Button
          key={index}
          variant={b.variant}
          onClick={async () => {
            switch (b.query) {
              case 'Execute Query':
                console.log('Execute Query');
                createAndExecuteQuery();
                break;
              case 'Update Query':
                console.log('Update Query');
                var variables = getTemplateSrv().getVariables();
                var node1 = variables[0]['query'];
                var relationship = variables[1]['query'];
                var node2 = variables[2]['query'];
                var constraints = variables[3]['query'];
                var properties = variables[4]['query'];

                queryEditor(
                  node1,
                  relationship,
                  node2,
                  constraints,
                  properties
                );
                break;
              case 'Clear Fields':
                console.log('Clear Query');
                clearQuery();
                break;
              default:
                console.log('Something has went wrong');
            }
          }}
        >
          {text}
        </Button>
      );
    });
  };

  return (
    (options.orientation === 'vertical' && (
      <VerticalGroup justify="center" align="center">
        {renderButtons(options.buttons)}
      </VerticalGroup>
    )) || (
      <HorizontalGroup justify="center" align="center">
        {renderButtons(options.buttons)}
      </HorizontalGroup>
    )
  );
};
