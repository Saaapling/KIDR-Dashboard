define(["@grafana/data","@grafana/runtime","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./buttonPanel.tsx":
/*!*************************!*\
  !*** ./buttonPanel.tsx ***!
  \*************************/
/*! exports provided: ButtonPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPanel", function() { return ButtonPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var nodes = [];
var node_dicts = []; //Array of dictionaries {constraints, properties}

var relations = []; //Array of arrays [[node,relation,node]]

var rel_dicts = []; //Array of dictionaries {constraints, properties}

function queryEditor(node1, relationship, node2, constraints, properties) {
  console.log('Button Manager:');
  console.log(node1);
  console.log(relationship);
  console.log(node2);
  console.log(constraints);
  console.log(properties); // This action occurs when relationship (and presumable node2) are empty
  // It registers or overwrites a node, and adds to it its constraints for the query and properties to be displayed

  if (relationship === '') {
    if (node1 === '') {
      return;
    }

    if (!nodes.includes(node1)) {
      nodes.push(node1);
    }

    var index = nodes.indexOf(node1);
    var cons_dict_1 = {}; //Parse the constraints

    var constraint_arr = constraints.replace(/\s/g, '').split(',');
    constraint_arr.forEach(function (element) {
      if (element.length >= 3) {
        var key_val = element.split(':');
        cons_dict_1[key_val[0]] = key_val[1];
      }
    }); //Parse the properties

    var prop_arr = [];

    if (properties.length > 0) {
      prop_arr = properties.replace(/\s/g, '').split(',');
    }

    var dict = {
      constraints: cons_dict_1,
      properties: prop_arr
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

    var index = relations.length - 1;
    var cons_dict_2 = {}; //Parse the constraints

    var constraint_arr = constraints.replace(/\s/g, '').split(',');
    constraint_arr.forEach(function (element) {
      if (element.length >= 3) {
        var key_val = element.split(':');
        cons_dict_2[key_val[0]] = key_val[1];
      }
    }); //Parse the properties

    var prop_arr = [];

    if (properties.length > 0) {
      prop_arr = properties.replace(/\s/g, '').split(',');
    }

    var dict = {
      constraints: cons_dict_2,
      properties: prop_arr
    };
    rel_dicts[index] = dict; //Output some of the newly created/updated datafields

    console.log(relations);
    console.log(rel_dicts);
  } //Add the new query variables to the QueryBuilder SQL table


  var base = 'http://127.0.0.1:5000/Query/';
  var url = new URL(base);
  var params = {
    node_one: node1,
    relationship: relationship,
    node_two: node2,
    constraints: constraints,
    properties: properties
  };
  Object.keys(params).forEach(function (key) {
    return url.searchParams.append(key, params[key]);
  });
  console.log(url);
  fetch(url);
  return;
}

function createAndExecuteQuery() {
  var query = '';
  var node_repr = [];

  for (var i = 0; i < nodes.length; i++) {
    var node_str = '(' + nodes[i] + ':' + nodes[i] + '{';
    var cons_dict = node_dicts[i]['constraints'];
    var x_1 = false;

    for (var key in cons_dict) {
      node_str += key + ':' + cons_dict[key] + ', ';
      x_1 = true;
    }

    if (x_1) {
      node_str = node_str.substring(0, node_str.length - 2);
    }

    node_str += '})';
    node_repr.push(node_str);
  }

  var rel_repr = [];

  for (var i = 0; i < relations.length; i++) {
    var rel_str = '-[rel' + i + ':' + relations[i][1] + ' {';

    if (relations[i][1] === '--') {
      rel_str = '-[rel' + i + ' {';
    }

    var cons_dict = rel_dicts[i]['constraints'];
    var x_2 = false;

    for (var key in cons_dict) {
      rel_str += key + ':' + cons_dict[key] + ', ';
      x_2 = true;
    }

    if (x_2) {
      rel_str = rel_str.substring(0, rel_str.length - 2);
    }

    rel_str += '}]-';
    rel_repr.push(rel_str);
  }

  for (var i = 0; i < relations.length; i++) {
    var match_str = 'MATCH';
    var index_1 = nodes.indexOf(relations[i][0]);
    var index_2 = nodes.indexOf(relations[i][2]);
    match_str += node_repr[index_1] + rel_repr[i] + node_repr[index_2] + '\n';
    query += match_str;
  }

  var return_str = 'return ';
  var x = false;

  var _loop_1 = function _loop_1(i) {
    var prop_arr = node_dicts[i]['properties'];
    prop_arr.forEach(function (element) {
      return_str += nodes[i] + '.' + element + ', ';
      x = true;
    });
  };

  for (var i = 0; i < nodes.length; i++) {
    _loop_1(i);
  }

  if (x) {
    return_str = return_str.substring(0, return_str.length - 2);
  }

  query += return_str;
  console.log(query);
  var base = 'http://127.0.0.1:5000/Neo4J/';
  var url = new URL(base);
  var params = {
    query: query
  };
  Object.keys(params).forEach(function (key) {
    return url.searchParams.append(key, params[key]);
  });
  console.log(url);
  fetch(url);
  return;
}

function clearQuery() {
  nodes = [];
  node_dicts = [];
  relations = [];
  rel_dicts = []; // Send a request to clear out the table

  var base = 'http://127.0.0.1:5000/Query/';
  var url = new URL(base);
  var params = {};
  Object.keys(params).forEach(function (key) {
    return url.searchParams.append(key, params[key]);
  });
  console.log(url);
  fetch(url);
}

var ButtonPanel = function ButtonPanel(_a) {
  var options = _a.options;

  var renderButtons = function renderButtons(buttons) {
    return buttons.map(function (b, index) {
      var text = b.text || 'Button';
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        key: index,
        variant: b.variant,
        onClick: function onClick() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
            var variables, node1, relationship, node2, constraints, properties;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (b.query) {
                case 'Execute Query':
                  console.log('Execute Query');
                  createAndExecuteQuery();
                  break;

                case 'Update Query':
                  console.log('Update Query');
                  variables = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getTemplateSrv"])().getVariables();
                  node1 = variables[0]['query'];
                  relationship = variables[1]['query'];
                  node2 = variables[2]['query'];
                  constraints = variables[3]['query'];
                  properties = variables[4]['query'];
                  queryEditor(node1, relationship, node2, constraints, properties);
                  break;

                case 'Clear Fields':
                  console.log('Clear Query');
                  clearQuery();
                  break;

                default:
                  console.log('Something has went wrong');
              }

              return [2
              /*return*/
              ];
            });
          });
        }
      }, text);
    });
  };

  return options.orientation === 'vertical' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["VerticalGroup"], {
    justify: "center",
    align: "center"
  }, renderButtons(options.buttons)) || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["HorizontalGroup"], {
    justify: "center",
    align: "center"
  }, renderButtons(options.buttons));
};

/***/ }),

/***/ "./editor.tsx":
/*!********************!*\
  !*** ./editor.tsx ***!
  \********************/
/*! exports provided: Editor, addEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEditor", function() { return addEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var Editor = function Editor(_a) {
  var buttons = _a.buttons,
      onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(), 2),
      elems = _b[0],
      setElems = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(buttons.map(function (e) {
    return false;
  })), 2),
      isOpen = _c[0],
      setOpen = _c[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    var cancel = false;

    var fetchData = function fetchData() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
        var ds;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().get('/api/datasources')];

            case 1:
              ds = _a.sent();

              if (!cancel) {
                setElems(ds.map(function (i) {
                  return {
                    label: i.name,
                    value: i.name,
                    name: i.name
                  };
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    fetchData();
    return function () {
      cancel = true;
    };
  }, []);

  var updateButtons = function updateButtons(index, newButton) {
    var currentButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttons[index]);

    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(buttons.slice(0, index), [{
      text: newButton.text || currentButton.text,
      datasource: newButton.datasource || currentButton.datasource,
      query: newButton.query || currentButton.query,
      variant: newButton.variant || currentButton.variant
    }], buttons.slice(index + 1)));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, buttons.map(function (b, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      key: i,
      label: 'Button ' + (i + 1).toString(),
      isOpen: isOpen[i],
      collapsible: true,
      onToggle: function onToggle() {
        setOpen(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(isOpen.slice(0, i), [!isOpen[i]], isOpen.slice(i + 1)));
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      label: "Text",
      description: "Text to be displayed on the button"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      id: 't-' + i.toString(),
      value: b.text,
      placeholder: "Button",
      onChange: function onChange(e) {
        return updateButtons(i, {
          text: e.target.value
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      label: "Datasource",
      description: "Choose the Datasource for the query"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(e) {
        return updateButtons(i, {
          datasource: e.value
        });
      },
      value: b.datasource,
      options: elems
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      label: "Query",
      description: "JSON query to be triggered on Button Click"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TextArea"], {
      id: 'q-' + i.toString(),
      value: b.query,
      placeholder: "{ query: 'your query' }",
      rows: 5,
      onChange: function onChange(e) {
        return updateButtons(i, {
          query: e.target.value
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      label: "Color",
      description: "Color of the button"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["RadioButtonGroup"], {
      options: [{
        label: 'Primary',
        value: 'primary'
      }, {
        label: 'Secondary',
        value: 'secondary'
      }, {
        label: 'Destructive',
        value: 'destructive'
      }, {
        label: 'Link',
        value: 'link'
      }],
      value: b.variant || 'primary',
      fullWidth: true,
      onChange: function onChange(e) {
        return updateButtons(i, {
          variant: e
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      icon: "trash-alt",
      variant: "destructive",
      onClick: function onClick() {
        return onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(buttons.slice(0, i), buttons.slice(i + 1)));
      }
    }, "Delete")));
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary",
    icon: "plus",
    size: "sm",
    onClick: function onClick() {
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(buttons, [{
        text: '',
        datasource: '',
        query: ''
      }]));
    }
  }, "Add Button")));
};
function addEditor(builder) {
  builder.addRadio({
    path: 'orientation',
    name: 'Orientation',
    description: 'Stacking direction in case of multiple buttons',
    defaultValue: 'horizontal',
    settings: {
      options: [{
        value: 'horizontal',
        label: 'Horizontal'
      }, {
        value: 'vertical',
        label: 'Vertical'
      }]
    }
  }).addCustomEditor({
    id: 'buttons',
    path: 'buttons',
    name: 'Button Configuration',
    defaultValue: [{
      text: '',
      datasource: '',
      query: ''
    }],
    editor: function editor(props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Editor, {
        buttons: props.value,
        onChange: props.onChange
      });
    }
  });
}

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttonPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonPanel */ "./buttonPanel.tsx");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor */ "./editor.tsx");



var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_buttonPanel__WEBPACK_IMPORTED_MODULE_1__["ButtonPanel"]);
plugin.setPanelOptions(function (builder) {
  return Object(_editor__WEBPACK_IMPORTED_MODULE_2__["addEditor"])(builder);
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map