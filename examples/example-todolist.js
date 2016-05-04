webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(16);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(18);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _immutableData = __webpack_require__(156);
	
	var _index = __webpack_require__(17);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var store = {
	  todolist: {
	    list: [{
	      text: 'task 1',
	      completed: true
	    }],
	    add: function add(text, e) {
	      return {
	        list: [].concat(_toConsumableArray(e.store.list), [{
	          text: text,
	          completed: false
	        }])
	      };
	    },
	    del: function del(todo, e) {
	      var index = e.store.list.indexOf(todo);
	      return {
	        list: (0, _immutableData.remove)(e.store.list, index)
	      };
	    },
	    change: function change(todo, e) {
	      var index = e.store.list.indexOf(todo);
	      return {
	        list: (0, _immutableData.set)(e.store.list, _defineProperty({}, index + '.completed', !e.store.list[index].completed))
	      };
	    },
	
	    filter: 'all',
	    changeFilter: function changeFilter(filter) {
	      return {
	        filter: filter
	      };
	    }
	  }
	};
	
	var TodoList = function TodoList(_ref) {
	  var todolist = _ref.todolist;
	  var change = todolist.change;
	  var del = todolist.del;
	  var add = todolist.add;
	  var filter = todolist.filter;
	  var list = todolist.list;
	  var changeFilter = todolist.changeFilter;
	
	  var filterList = void 0;
	  switch (filter) {
	    case "all":
	      filterList = list;
	      break;
	    case "completed":
	      filterList = list.filter(function (todo) {
	        return todo.completed;
	      });
	      break;
	    case "active":
	      filterList = list.filter(function (todo) {
	        return !todo.completed;
	      });
	      break;
	    default:
	      break;
	  }
	  var todoProps = { change: change, del: del };
	  var addTodoProps = { add: add };
	  var footerProps = { filter: filter, changeFilter: changeFilter };
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'ul',
	      null,
	      filterList.map(function (todo, index) {
	        return _react2.default.createElement(Todo, _extends({ key: index, todo: todo }, todoProps));
	      })
	    ),
	    _react2.default.createElement(AddTodo, addTodoProps),
	    _react2.default.createElement(Footer, footerProps)
	  );
	};
	
	var Todo = function Todo(_ref2) {
	  var todo = _ref2.todo;
	
	  return _react2.default.createElement(
	    'li',
	    null,
	    _react2.default.createElement(
	      'span',
	      { onClick: function onClick() {
	          return undefined.props.change(undefined.props.todo);
	        }, className: todo.completed ? 'completed' : 'not-completed' },
	      todo.text
	    ),
	    _react2.default.createElement(
	      'span',
	      { onClick: function onClick() {
	          return undefined.props.del(undefined.props.todo);
	        }, className: 'del' },
	      'x'
	    )
	  );
	};
	
	var AddTodo = function (_Component) {
	  _inherits(AddTodo, _Component);
	
	  function AddTodo() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AddTodo);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AddTodo)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleSubmit = function (e) {
	      e.preventDefault();
	      var node = _reactDom2.default.findDOMNode(_this.refs.input);
	      var text = node.value.trim();
	      if (!text) {
	        return;
	      }
	      _this.props.add(text);
	      node.value = "";
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AddTodo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.handleSubmit },
	        _react2.default.createElement('input', { type: 'text', ref: 'input' }),
	        _react2.default.createElement(
	          'button',
	          { type: 'submit' },
	          'Add'
	        )
	      );
	    }
	  }]);
	
	  return AddTodo;
	}(_react.Component);
	
	var Footer = function (_Component2) {
	  _inherits(Footer, _Component2);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          'current:',
	          this.props.filter
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              return _this3.props.changeFilter('all');
	            } },
	          'all'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              return _this3.props.changeFilter('active');
	            } },
	          'active'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              return _this3.props.changeFilter('completed');
	            } },
	          'completed'
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(
	  _index2.default,
	  { store: store },
	  _react2.default.createElement(TodoList, null)
	), document.getElementById('react-content'));

/***/ },

/***/ 106:
/***/ function(module, exports) {

	/**
	 * array-foreach
	 *   Array#forEach ponyfill for older browsers
	 *   (Ponyfill: A polyfill that doesn't overwrite the native method)
	 * 
	 * https://github.com/twada/array-foreach
	 *
	 * Copyright (c) 2015-2016 Takuto Wada
	 * Licensed under the MIT license.
	 *   https://github.com/twada/array-foreach/blob/master/MIT-LICENSE
	 */
	'use strict';
	
	module.exports = function forEach (ary, callback, thisArg) {
	    if (ary.forEach) {
	        ary.forEach(callback, thisArg);
	        return;
	    }
	    for (var i = 0; i < ary.length; i+=1) {
	        callback.call(thisArg, ary[i], i, ary);
	    }
	};


/***/ },

/***/ 107:
/***/ function(module, exports) {

	module.exports = function (xs, f) {
	    if (xs.map) return xs.map(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        var x = xs[i];
	        if (hasOwn.call(xs, i)) res.push(f(x, i, xs));
	    }
	    return res;
	};
	
	var hasOwn = Object.prototype.hasOwnProperty;


/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.set = __webpack_require__(9);;
		exports.merge = __webpack_require__(7);
		exports.remove = __webpack_require__(8);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(159);
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		var assign = __webpack_require__(11);
		var isArray = __webpack_require__(5);
		var forEach = __webpack_require__(4);
		var map = __webpack_require__(3);
		var keys = Object.keys || __webpack_require__(1);
	
		// node structure {key, value, data, parentNode}
	
		var Node = function () {
		  function Node(_ref) {
		    var key = _ref.key;
		    var value = _ref.value;
		    var data = _ref.data;
		    var parentNode = _ref.parentNode;
	
		    _classCallCheck(this, Node);
	
		    this.key = key;
		    this.value = value;
		    this.data = data;
		    this.parentNode = parentNode;
		    this.children = {};
		  }
	
		  _createClass(Node, [{
		    key: 'setChild',
		    value: function setChild(key, child) {
		      this.children[key] = child;
		    }
		  }, {
		    key: 'getChild',
		    value: function getChild(key) {
		      return this.children[key];
		    }
		  }]);
	
		  return Node;
		}();
	
		// Assign data with array: {key, value, type='set'}
		// data : array => replace the same value as the index(obj.key)
		//        object => assign object
		// 
		// eg:obj1:{key:1,value},obj2:{key:3,value}
		//
		// array:
		// [0, 1,          2, 3,          4] =>
		// [0, obj1.value, 2, obj2.value, 4]
		//
		// object:
		// {
		//   "1":1,
		//   "3":3
		// } =>
		// {
		//   "1":obj1.value,
		//   "3":obj2.value
		// }
	
	
		function assignData(node, array) {
		  var type = arguments.length <= 2 || arguments[2] === undefined ? 'set' : arguments[2];
	
		  var data = node.data;
		  if (type === 'remove' && node.secondNode) {
		    if (isArray(data)) {
		      data = data.concat();
		      forEach(array, function (obj, index) {
		        // splice 1 item and index - 1
		        data.splice(obj.key - index, 1);
		      });
		      return data;
		    }
		    data = assign({}, data);
		    forEach(array, function (obj) {
		      if (obj.key in data) {
		        delete data[obj.key];
		      }
		    });
		    return data;
		  }
	
		  if (isArray(data)) {
		    data = data.concat();
		    forEach(array, function (obj) {
		      data[obj.key] = obj.value;
		    });
		    return data;
		  }
		  var assignObject = {};
		  forEach(array, function (obj) {
		    assignObject[obj.key] = obj.value;
		  });
		  return assign({}, data, assignObject);
		}
	
		// Create a tree that can be used to handle multiple data
		// @param data (Object or Array)
		// @param array (Array of Structure {path, data})
		//
		// eg:[{path:["a","b"],data:1},{path:["a","c"],data:2}] =>
		//   a
		//  / \
		// b   c
		// |   |
		// 1   2
		function createTree(data, array) {
		  var tree = new Node({
		    data: data
		  });
	
		  forEach(array, function (item) {
		    var pointer = tree;
		    var dataPointer = data;
	
		    var len = item.path.length;
	
		    forEach(item.path, function (key, index) {
	
		      var child = pointer.getChild(key) || new Node({
		        // node name
		        key: key,
		        // leaf node value
		        value: len === index + 1 ? item.data : null,
		        // real data
		        data: dataPointer[key],
		        // parent node
		        parentNode: pointer
		      });
	
		      dataPointer = dataPointer[key];
		      pointer.setChild(key, child);
		      pointer = child;
		    });
		  });
		  return tree;
		}
	
		// Recursive access node and get the assignData,
		// and then return the root node value
		function getNodeValue(node, type) {
		  var array = keys(node.children);
	
		  // Just get the leaf node value,
		  // if a node is not a leaf node and its value is not undefined,
		  // then the value is ignored.
		  if (array.length === 0) {
		    // Mark the parent node is the second last node,
		    // so it is convenient to know in which node can remove attributes
		    node.parentNode.secondNode = true;
		    return node.value;
		  }
	
		  var assignArray = map(array, function (key) {
		    var child = node.children[key];
		    return {
		      key: child.key,
		      value: getNodeValue(child, type)
		    };
		  });
	
		  return assignData(node, assignArray, type);
		}
	
		exports.createTree = createTree;
		exports.getNodeValue = getNodeValue;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(107);
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(106);
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(157);
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(161);
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
		var isPlainObject = __webpack_require__(10);
		var forEach = __webpack_require__(4);
		var keys = Object.keys || __webpack_require__(1);
	
		var _require = __webpack_require__(2);
	
		var createTree = _require.createTree;
		var getNodeValue = _require.getNodeValue;
	
		// Get the tree path array
		// return Array of Structure({path: Array of String, data: node value})
		//
		// eg:
		// value:
		//   a
		//  / \
		// b   c
		// |   |
		// 1   2
		// return:
		// [{path:["a","b"], data:1}, {path:["a","c"], data:2}]
		//
		// If the data is not a plain object, assign it to the element,
		//
		// eg:
		// merge({list:[1,2]}, {list:[0]}) => {list:[0]}
		// merge({list:[1,2]}, {list:{"0":0}}) => {list:[0,2]}
	
		function getObjectPath(value) {
		  var list = [];
		  function traverse(data) {
		    var path = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
		    if (isPlainObject(data)) {
		      forEach(keys(data), function (key) {
		        traverse(data[key], path.concat(key));
		      });
		      return;
		    }
		    list.push({
		      path: path,
		      data: data
		    });
		  }
		  traverse(value);
		  return list;
		}
	
		// deep merge data
		module.exports = function merge(data, obj) {
		  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
		    throw new Error('data should be Object or Array');
		  }
		  if (!obj) {
		    return data;
		  }
		  var array = getObjectPath(obj);
		  var tree = createTree(data, array);
		  var value = getNodeValue(tree);
		  return value;
		};
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
		var parse = __webpack_require__(6);
		var map = __webpack_require__(3);
		var keys = Object.keys || __webpack_require__(1);
		var isArray = __webpack_require__(5);
	
		var _require = __webpack_require__(2);
	
		var createTree = _require.createTree;
		var getNodeValue = _require.getNodeValue;
	
		// remove(data, String or Array)
	
		module.exports = function remove(data) {
		  var array = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
		  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
		    throw new Error('data should be Object or Array');
		  }
	
		  if (!isArray(array)) {
		    array = [array];
		  }
	
		  if (array.length === 0) {
		    return data;
		  }
	
		  array = map(array, function (path) {
		    path = String(path);
		    return {
		      // Just use split if there is no '[' in path
		      // eg: obj["list"] => parse, obj.list => split
		      path: path.indexOf('[') > -1 ? parse(path) : path.split('.'),
		      data: null
		    };
		  });
	
		  var tree = createTree(data, array);
		  var value = getNodeValue(tree, 'remove');
		  return value;
		};
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
		var parse = __webpack_require__(6);
		var map = __webpack_require__(3);
		var keys = Object.keys || __webpack_require__(1);
	
		var _require = __webpack_require__(2);
	
		var createTree = _require.createTree;
		var getNodeValue = _require.getNodeValue;
	
	
		module.exports = function set(data) {
		  var obj = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
		    throw new Error('data should be Object or Array');
		  }
		  var array = keys(obj);
		  if (array.length === 0) {
		    return data;
		  }
		  array = map(array, function (path) {
		    return {
		      // Just use split if there is no '[' in path
		      // eg: obj["list"] => parse, obj.list => split
		      path: path.indexOf('[') > -1 ? parse(path) : path.split('.'),
		      data: obj[path]
		    };
		  });
		  var tree = createTree(data, array);
		  var value = getNodeValue(tree);
		  return value;
		};
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(76);
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(77);
	
	/***/ }
	/******/ ]);

/***/ },

/***/ 157:
/***/ function(module, exports) {

	
	/**
	 * isArray
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * toString
	 */
	
	var str = Object.prototype.toString;
	
	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */
	
	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(160);
	var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
	var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var blacklistedKeys = {
		$console: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$parent: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!blacklistedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};
	
	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];
	
		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}
	
		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}
	
		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}
	
		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;


/***/ },

/***/ 160:
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(t) {
	    function n(i) {
	        if (e[i]) return e[i].exports;
	        var r = e[i] = {
	            exports: {},
	            id: i,
	            loaded: !1
	        };
	        return t[i].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports;
	    }
	    var e = {};
	    return n.m = t, n.c = e, n.p = "", n(0);
	}([ function(t, n, e) {
	    "use strict";
	    function i(t) {
	        return t && t.__esModule ? t : {
	            "default": t
	        };
	    }
	    function r(t) {
	        return (0, o["default"])(h["default"].parse(t)).reduce(function(t, n) {
	            return this.isLeaf && "undefined" != typeof n && t.push(n), t;
	        }, []);
	    }
	    Object.defineProperty(n, "__esModule", {
	        value: !0
	    }), n["default"] = r;
	    var s = e(1), o = i(s), l = e(2), h = i(l);
	    t.exports = n["default"];
	}, function(t, n) {
	    t.exports = __webpack_require__(219);
	}, function(t, n, e) {
	    (function(t, i) {
	        var r = function() {
	            function t() {
	                this.yy = {};
	            }
	            var n = [ 1, 3 ], e = [ 1, 4 ], i = [ 2, 6 ], r = [ 1, 7 ], s = [ 1, 8 ], o = {
	                trace: function() {},
	                yy: {},
	                symbols_: {
	                    error: 2,
	                    expressions: 3,
	                    e: 4,
	                    EOF: 5,
	                    PROPERTY: 6,
	                    p: 7,
	                    NUMBER: 8,
	                    ".": 9,
	                    "[": 10,
	                    t: 11,
	                    "]": 12,
	                    STRING: 13,
	                    $accept: 0,
	                    $end: 1
	                },
	                terminals_: {
	                    2: "error",
	                    5: "EOF",
	                    6: "PROPERTY",
	                    8: "NUMBER",
	                    9: ".",
	                    10: "[",
	                    12: "]",
	                    13: "STRING"
	                },
	                productions_: [ 0, [ 3, 2 ], [ 4, 2 ], [ 4, 2 ], [ 7, 2 ], [ 7, 4 ], [ 7, 0 ], [ 11, 1 ], [ 11, 1 ] ],
	                performAction: function(t, n, e, i, r, s, o) {
	                    var l = s.length - 1;
	                    switch (r) {
	                      case 1:
	                        return s[l - 1];
	
	                      case 2:
	                      case 3:
	                        this.$ = {
	                            p: s[l - 1],
	                            e: s[l]
	                        };
	                        break;
	
	                      case 4:
	                        this.$ = {
	                            e: s[l]
	                        };
	                        break;
	
	                      case 5:
	                        this.$ = {
	                            p: s[l - 2],
	                            e: s[l]
	                        };
	                        break;
	
	                      case 7:
	                        this.$ = s[l].slice(1, -1);
	                        break;
	
	                      case 8:
	                        this.$ = s[l];
	                    }
	                },
	                table: [ {
	                    3: 1,
	                    4: 2,
	                    6: n,
	                    8: e
	                }, {
	                    1: [ 3 ]
	                }, {
	                    5: [ 1, 5 ]
	                }, {
	                    5: i,
	                    7: 6,
	                    9: r,
	                    10: s
	                }, {
	                    5: i,
	                    7: 9,
	                    9: r,
	                    10: s
	                }, {
	                    1: [ 2, 1 ]
	                }, {
	                    5: [ 2, 2 ]
	                }, {
	                    4: 10,
	                    6: n,
	                    8: e
	                }, {
	                    8: [ 1, 13 ],
	                    11: 11,
	                    13: [ 1, 12 ]
	                }, {
	                    5: [ 2, 3 ]
	                }, {
	                    5: [ 2, 4 ]
	                }, {
	                    12: [ 1, 14 ]
	                }, {
	                    12: [ 2, 7 ]
	                }, {
	                    12: [ 2, 8 ]
	                }, {
	                    5: i,
	                    7: 15,
	                    9: r,
	                    10: s
	                }, {
	                    5: [ 2, 5 ]
	                } ],
	                defaultActions: {
	                    5: [ 2, 1 ],
	                    6: [ 2, 2 ],
	                    9: [ 2, 3 ],
	                    10: [ 2, 4 ],
	                    12: [ 2, 7 ],
	                    13: [ 2, 8 ],
	                    15: [ 2, 5 ]
	                },
	                parseError: function(t, n) {
	                    if (!n.recoverable) throw new Error(t);
	                    this.trace(t);
	                },
	                parse: function(t) {
	                    function n() {
	                        var t;
	                        return t = p.lex() || y, "number" != typeof t && (t = e.symbols_[t] || t), t;
	                    }
	                    var e = this, i = [ 0 ], r = [ null ], s = [], o = this.table, l = "", h = 0, c = 0, a = 0, u = 2, y = 1, f = s.slice.call(arguments, 1), p = Object.create(this.lexer), g = {
	                        yy: {}
	                    };
	                    for (var m in this.yy) Object.prototype.hasOwnProperty.call(this.yy, m) && (g.yy[m] = this.yy[m]);
	                    p.setInput(t, g.yy), g.yy.lexer = p, g.yy.parser = this, "undefined" == typeof p.yylloc && (p.yylloc = {});
	                    var _ = p.yylloc;
	                    s.push(_);
	                    var d = p.options && p.options.ranges;
	                    "function" == typeof g.yy.parseError ? this.parseError = g.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
	                    for (var v, b, k, x, w, E, S, A, I, P = {}; ;) {
	                        if (k = i[i.length - 1], this.defaultActions[k] ? x = this.defaultActions[k] : ((null === v || "undefined" == typeof v) && (v = n()), 
	                        x = o[k] && o[k][v]), "undefined" == typeof x || !x.length || !x[0]) {
	                            var $ = "";
	                            I = [];
	                            for (E in o[k]) this.terminals_[E] && E > u && I.push("'" + this.terminals_[E] + "'");
	                            $ = p.showPosition ? "Parse error on line " + (h + 1) + ":\n" + p.showPosition() + "\nExpecting " + I.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : "Parse error on line " + (h + 1) + ": Unexpected " + (v == y ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), 
	                            this.parseError($, {
	                                text: p.match,
	                                token: this.terminals_[v] || v,
	                                line: p.yylineno,
	                                loc: _,
	                                expected: I
	                            });
	                        }
	                        if (x[0] instanceof Array && x.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + k + ", token: " + v);
	                        switch (x[0]) {
	                          case 1:
	                            i.push(v), r.push(p.yytext), s.push(p.yylloc), i.push(x[1]), v = null, b ? (v = b, 
	                            b = null) : (c = p.yyleng, l = p.yytext, h = p.yylineno, _ = p.yylloc, a > 0 && a--);
	                            break;
	
	                          case 2:
	                            if (S = this.productions_[x[1]][1], P.$ = r[r.length - S], P._$ = {
	                                first_line: s[s.length - (S || 1)].first_line,
	                                last_line: s[s.length - 1].last_line,
	                                first_column: s[s.length - (S || 1)].first_column,
	                                last_column: s[s.length - 1].last_column
	                            }, d && (P._$.range = [ s[s.length - (S || 1)].range[0], s[s.length - 1].range[1] ]), 
	                            w = this.performAction.apply(P, [ l, c, h, g.yy, x[1], r, s ].concat(f)), "undefined" != typeof w) return w;
	                            S && (i = i.slice(0, -1 * S * 2), r = r.slice(0, -1 * S), s = s.slice(0, -1 * S)), 
	                            i.push(this.productions_[x[1]][0]), r.push(P.$), s.push(P._$), A = o[i[i.length - 2]][i[i.length - 1]], 
	                            i.push(A);
	                            break;
	
	                          case 3:
	                            return !0;
	                        }
	                    }
	                    return !0;
	                }
	            }, l = function() {
	                var t = {
	                    EOF: 1,
	                    parseError: function(t, n) {
	                        if (!this.yy.parser) throw new Error(t);
	                        this.yy.parser.parseError(t, n);
	                    },
	                    setInput: function(t, n) {
	                        return this.yy = n || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, 
	                        this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [ "INITIAL" ], 
	                        this.yylloc = {
	                            first_line: 1,
	                            first_column: 0,
	                            last_line: 1,
	                            last_column: 0
	                        }, this.options.ranges && (this.yylloc.range = [ 0, 0 ]), this.offset = 0, this;
	                    },
	                    input: function() {
	                        var t = this._input[0];
	                        this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t;
	                        var n = t.match(/(?:\r\n?|\n).*/g);
	                        return n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, 
	                        this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), 
	                        t;
	                    },
	                    unput: function(t) {
	                        var n = t.length, e = t.split(/(?:\r\n?|\n)/g);
	                        this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - n), 
	                        this.offset -= n;
	                        var i = this.match.split(/(?:\r\n?|\n)/g);
	                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), 
	                        e.length - 1 && (this.yylineno -= e.length - 1);
	                        var r = this.yylloc.range;
	                        return this.yylloc = {
	                            first_line: this.yylloc.first_line,
	                            last_line: this.yylineno + 1,
	                            first_column: this.yylloc.first_column,
	                            last_column: e ? (e.length === i.length ? this.yylloc.first_column : 0) + i[i.length - e.length].length - e[0].length : this.yylloc.first_column - n
	                        }, this.options.ranges && (this.yylloc.range = [ r[0], r[0] + this.yyleng - n ]), 
	                        this.yyleng = this.yytext.length, this;
	                    },
	                    more: function() {
	                        return this._more = !0, this;
	                    },
	                    reject: function() {
	                        return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
	                            text: "",
	                            token: null,
	                            line: this.yylineno
	                        });
	                    },
	                    less: function(t) {
	                        this.unput(this.match.slice(t));
	                    },
	                    pastInput: function() {
	                        var t = this.matched.substr(0, this.matched.length - this.match.length);
	                        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
	                    },
	                    upcomingInput: function() {
	                        var t = this.match;
	                        return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
	                    },
	                    showPosition: function() {
	                        var t = this.pastInput(), n = new Array(t.length + 1).join("-");
	                        return t + this.upcomingInput() + "\n" + n + "^";
	                    },
	                    test_match: function(t, n) {
	                        var e, i, r;
	                        if (this.options.backtrack_lexer && (r = {
	                            yylineno: this.yylineno,
	                            yylloc: {
	                                first_line: this.yylloc.first_line,
	                                last_line: this.last_line,
	                                first_column: this.yylloc.first_column,
	                                last_column: this.yylloc.last_column
	                            },
	                            yytext: this.yytext,
	                            match: this.match,
	                            matches: this.matches,
	                            matched: this.matched,
	                            yyleng: this.yyleng,
	                            offset: this.offset,
	                            _more: this._more,
	                            _input: this._input,
	                            yy: this.yy,
	                            conditionStack: this.conditionStack.slice(0),
	                            done: this.done
	                        }, this.options.ranges && (r.yylloc.range = this.yylloc.range.slice(0))), i = t[0].match(/(?:\r\n?|\n).*/g), 
	                        i && (this.yylineno += i.length), this.yylloc = {
	                            first_line: this.yylloc.last_line,
	                            last_line: this.yylineno + 1,
	                            first_column: this.yylloc.last_column,
	                            last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
	                        }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, 
	                        this.options.ranges && (this.yylloc.range = [ this.offset, this.offset += this.yyleng ]), 
	                        this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), 
	                        this.matched += t[0], e = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), 
	                        this.done && this._input && (this.done = !1), e) return e;
	                        if (this._backtrack) {
	                            for (var s in r) this[s] = r[s];
	                            return !1;
	                        }
	                        return !1;
	                    },
	                    next: function() {
	                        if (this.done) return this.EOF;
	                        this._input || (this.done = !0);
	                        var t, n, e, i;
	                        this._more || (this.yytext = "", this.match = "");
	                        for (var r = this._currentRules(), s = 0; s < r.length; s++) if (e = this._input.match(this.rules[r[s]]), 
	                        e && (!n || e[0].length > n[0].length)) {
	                            if (n = e, i = s, this.options.backtrack_lexer) {
	                                if (t = this.test_match(e, r[s]), t !== !1) return t;
	                                if (this._backtrack) {
	                                    n = !1;
	                                    continue;
	                                }
	                                return !1;
	                            }
	                            if (!this.options.flex) break;
	                        }
	                        return n ? (t = this.test_match(n, r[i]), t !== !1 ? t : !1) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
	                            text: "",
	                            token: null,
	                            line: this.yylineno
	                        });
	                    },
	                    lex: function() {
	                        var t = this.next();
	                        return t ? t : this.lex();
	                    },
	                    begin: function(t) {
	                        this.conditionStack.push(t);
	                    },
	                    popState: function() {
	                        var t = this.conditionStack.length - 1;
	                        return t > 0 ? this.conditionStack.pop() : this.conditionStack[0];
	                    },
	                    _currentRules: function() {
	                        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
	                    },
	                    topState: function(t) {
	                        return t = this.conditionStack.length - 1 - Math.abs(t || 0), t >= 0 ? this.conditionStack[t] : "INITIAL";
	                    },
	                    pushState: function(t) {
	                        this.begin(t);
	                    },
	                    stateStackSize: function() {
	                        return this.conditionStack.length;
	                    },
	                    options: {},
	                    performAction: function(t, n, e, i) {
	                        switch (e) {
	                          case 0:
	                            return 13;
	
	                          case 1:
	                            return 6;
	
	                          case 2:
	                            return 8;
	
	                          case 3:
	                            return 10;
	
	                          case 4:
	                            return 12;
	
	                          case 5:
	                            return 9;
	
	                          case 6:
	                            return 5;
	
	                          case 7:
	                            return "INVALID";
	                        }
	                    },
	                    rules: [ /^(?:"(?:\\"|[^\"])*"|'(?:\\'|[^\'])*')/, /^(?:[a-zA-Z_\$][\w_\$]*)/, /^(?:0|[1-9]\d*)/, /^(?:\[)/, /^(?:\])/, /^(?:\.)/, /^(?:$)/, /^(?:.)/ ],
	                    conditions: {
	                        INITIAL: {
	                            rules: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
	                            inclusive: !0
	                        }
	                    }
	                };
	                return t;
	            }();
	            return o.lexer = l, t.prototype = o, o.Parser = t, new t();
	        }();
	        n.parser = r, n.Parser = r.Parser, n.parse = function() {
	            return r.parse.apply(r, arguments);
	        }, n.main = function(i) {
	            i[1] || (console.log("Usage: " + i[0] + " FILE"), t.exit(1));
	            var r = e(5).readFileSync(e(6).normalize(i[1]), "utf8");
	            return n.parser.parse(r);
	        }, "undefined" != typeof i && e.c[0] === i && n.main(t.argv.slice(1));
	    }).call(n, e(3), e(4)(t));
	}, function(t, n) {
	    function e() {
	        c = !1, o.length ? h = o.concat(h) : a = -1, h.length && i();
	    }
	    function i() {
	        if (!c) {
	            var t = setTimeout(e);
	            c = !0;
	            for (var n = h.length; n; ) {
	                for (o = h, h = []; ++a < n; ) o && o[a].run();
	                a = -1, n = h.length;
	            }
	            o = null, c = !1, clearTimeout(t);
	        }
	    }
	    function r(t, n) {
	        this.fun = t, this.array = n;
	    }
	    function s() {}
	    var o, l = t.exports = {}, h = [], c = !1, a = -1;
	    l.nextTick = function(t) {
	        var n = new Array(arguments.length - 1);
	        if (arguments.length > 1) for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
	        h.push(new r(t, n)), 1 !== h.length || c || setTimeout(i, 0);
	    }, r.prototype.run = function() {
	        this.fun.apply(null, this.array);
	    }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", 
	    l.versions = {}, l.on = s, l.addListener = s, l.once = s, l.off = s, l.removeListener = s, 
	    l.removeAllListeners = s, l.emit = s, l.binding = function(t) {
	        throw new Error("process.binding is not supported");
	    }, l.cwd = function() {
	        return "/";
	    }, l.chdir = function(t) {
	        throw new Error("process.chdir is not supported");
	    }, l.umask = function() {
	        return 0;
	    };
	}, function(t, n) {
	    t.exports = function(t) {
	        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], 
	        t.webpackPolyfill = 1), t;
	    };
	}, function(t, n) {}, function(t, n, e) {
	    (function(t) {
	        function e(t, n) {
	            for (var e = 0, i = t.length - 1; i >= 0; i--) {
	                var r = t[i];
	                "." === r ? t.splice(i, 1) : ".." === r ? (t.splice(i, 1), e++) : e && (t.splice(i, 1), 
	                e--);
	            }
	            if (n) for (;e--; e) t.unshift("..");
	            return t;
	        }
	        function i(t, n) {
	            if (t.filter) return t.filter(n);
	            for (var e = [], i = 0; i < t.length; i++) n(t[i], i, t) && e.push(t[i]);
	            return e;
	        }
	        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, s = function(t) {
	            return r.exec(t).slice(1);
	        };
	        n.resolve = function() {
	            for (var n = "", r = !1, s = arguments.length - 1; s >= -1 && !r; s--) {
	                var o = s >= 0 ? arguments[s] : t.cwd();
	                if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
	                o && (n = o + "/" + n, r = "/" === o.charAt(0));
	            }
	            return n = e(i(n.split("/"), function(t) {
	                return !!t;
	            }), !r).join("/"), (r ? "/" : "") + n || ".";
	        }, n.normalize = function(t) {
	            var r = n.isAbsolute(t), s = "/" === o(t, -1);
	            return t = e(i(t.split("/"), function(t) {
	                return !!t;
	            }), !r).join("/"), t || r || (t = "."), t && s && (t += "/"), (r ? "/" : "") + t;
	        }, n.isAbsolute = function(t) {
	            return "/" === t.charAt(0);
	        }, n.join = function() {
	            var t = Array.prototype.slice.call(arguments, 0);
	            return n.normalize(i(t, function(t, n) {
	                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
	                return t;
	            }).join("/"));
	        }, n.relative = function(t, e) {
	            function i(t) {
	                for (var n = 0; n < t.length && "" === t[n]; n++) ;
	                for (var e = t.length - 1; e >= 0 && "" === t[e]; e--) ;
	                return n > e ? [] : t.slice(n, e - n + 1);
	            }
	            t = n.resolve(t).substr(1), e = n.resolve(e).substr(1);
	            for (var r = i(t.split("/")), s = i(e.split("/")), o = Math.min(r.length, s.length), l = o, h = 0; o > h; h++) if (r[h] !== s[h]) {
	                l = h;
	                break;
	            }
	            for (var c = [], h = l; h < r.length; h++) c.push("..");
	            return c = c.concat(s.slice(l)), c.join("/");
	        }, n.sep = "/", n.delimiter = ":", n.dirname = function(t) {
	            var n = s(t), e = n[0], i = n[1];
	            return e || i ? (i && (i = i.substr(0, i.length - 1)), e + i) : ".";
	        }, n.basename = function(t, n) {
	            var e = s(t)[2];
	            return n && e.substr(-1 * n.length) === n && (e = e.substr(0, e.length - n.length)), 
	            e;
	        }, n.extname = function(t) {
	            return s(t)[3];
	        };
	        var o = "b" === "ab".substr(-1) ? function(t, n, e) {
	            return t.substr(n, e);
	        } : function(t, n, e) {
	            return 0 > n && (n = t.length + n), t.substr(n, e);
	        };
	    }).call(n, e(3));
	} ]);

/***/ },

/***/ 219:
/***/ function(module, exports) {

	var traverse = module.exports = function (obj) {
	    return new Traverse(obj);
	};
	
	function Traverse (obj) {
	    this.value = obj;
	}
	
	Traverse.prototype.get = function (ps) {
	    var node = this.value;
	    for (var i = 0; i < ps.length; i ++) {
	        var key = ps[i];
	        if (!node || !hasOwnProperty.call(node, key)) {
	            node = undefined;
	            break;
	        }
	        node = node[key];
	    }
	    return node;
	};
	
	Traverse.prototype.has = function (ps) {
	    var node = this.value;
	    for (var i = 0; i < ps.length; i ++) {
	        var key = ps[i];
	        if (!node || !hasOwnProperty.call(node, key)) {
	            return false;
	        }
	        node = node[key];
	    }
	    return true;
	};
	
	Traverse.prototype.set = function (ps, value) {
	    var node = this.value;
	    for (var i = 0; i < ps.length - 1; i ++) {
	        var key = ps[i];
	        if (!hasOwnProperty.call(node, key)) node[key] = {};
	        node = node[key];
	    }
	    node[ps[i]] = value;
	    return value;
	};
	
	Traverse.prototype.map = function (cb) {
	    return walk(this.value, cb, true);
	};
	
	Traverse.prototype.forEach = function (cb) {
	    this.value = walk(this.value, cb, false);
	    return this.value;
	};
	
	Traverse.prototype.reduce = function (cb, init) {
	    var skip = arguments.length === 1;
	    var acc = skip ? this.value : init;
	    this.forEach(function (x) {
	        if (!this.isRoot || !skip) {
	            acc = cb.call(this, acc, x);
	        }
	    });
	    return acc;
	};
	
	Traverse.prototype.paths = function () {
	    var acc = [];
	    this.forEach(function (x) {
	        acc.push(this.path); 
	    });
	    return acc;
	};
	
	Traverse.prototype.nodes = function () {
	    var acc = [];
	    this.forEach(function (x) {
	        acc.push(this.node);
	    });
	    return acc;
	};
	
	Traverse.prototype.clone = function () {
	    var parents = [], nodes = [];
	    
	    return (function clone (src) {
	        for (var i = 0; i < parents.length; i++) {
	            if (parents[i] === src) {
	                return nodes[i];
	            }
	        }
	        
	        if (typeof src === 'object' && src !== null) {
	            var dst = copy(src);
	            
	            parents.push(src);
	            nodes.push(dst);
	            
	            forEach(objectKeys(src), function (key) {
	                dst[key] = clone(src[key]);
	            });
	            
	            parents.pop();
	            nodes.pop();
	            return dst;
	        }
	        else {
	            return src;
	        }
	    })(this.value);
	};
	
	function walk (root, cb, immutable) {
	    var path = [];
	    var parents = [];
	    var alive = true;
	    
	    return (function walker (node_) {
	        var node = immutable ? copy(node_) : node_;
	        var modifiers = {};
	        
	        var keepGoing = true;
	        
	        var state = {
	            node : node,
	            node_ : node_,
	            path : [].concat(path),
	            parent : parents[parents.length - 1],
	            parents : parents,
	            key : path.slice(-1)[0],
	            isRoot : path.length === 0,
	            level : path.length,
	            circular : null,
	            update : function (x, stopHere) {
	                if (!state.isRoot) {
	                    state.parent.node[state.key] = x;
	                }
	                state.node = x;
	                if (stopHere) keepGoing = false;
	            },
	            'delete' : function (stopHere) {
	                delete state.parent.node[state.key];
	                if (stopHere) keepGoing = false;
	            },
	            remove : function (stopHere) {
	                if (isArray(state.parent.node)) {
	                    state.parent.node.splice(state.key, 1);
	                }
	                else {
	                    delete state.parent.node[state.key];
	                }
	                if (stopHere) keepGoing = false;
	            },
	            keys : null,
	            before : function (f) { modifiers.before = f },
	            after : function (f) { modifiers.after = f },
	            pre : function (f) { modifiers.pre = f },
	            post : function (f) { modifiers.post = f },
	            stop : function () { alive = false },
	            block : function () { keepGoing = false }
	        };
	        
	        if (!alive) return state;
	        
	        function updateState() {
	            if (typeof state.node === 'object' && state.node !== null) {
	                if (!state.keys || state.node_ !== state.node) {
	                    state.keys = objectKeys(state.node)
	                }
	                
	                state.isLeaf = state.keys.length == 0;
	                
	                for (var i = 0; i < parents.length; i++) {
	                    if (parents[i].node_ === node_) {
	                        state.circular = parents[i];
	                        break;
	                    }
	                }
	            }
	            else {
	                state.isLeaf = true;
	                state.keys = null;
	            }
	            
	            state.notLeaf = !state.isLeaf;
	            state.notRoot = !state.isRoot;
	        }
	        
	        updateState();
	        
	        // use return values to update if defined
	        var ret = cb.call(state, state.node);
	        if (ret !== undefined && state.update) state.update(ret);
	        
	        if (modifiers.before) modifiers.before.call(state, state.node);
	        
	        if (!keepGoing) return state;
	        
	        if (typeof state.node == 'object'
	        && state.node !== null && !state.circular) {
	            parents.push(state);
	            
	            updateState();
	            
	            forEach(state.keys, function (key, i) {
	                path.push(key);
	                
	                if (modifiers.pre) modifiers.pre.call(state, state.node[key], key);
	                
	                var child = walker(state.node[key]);
	                if (immutable && hasOwnProperty.call(state.node, key)) {
	                    state.node[key] = child.node;
	                }
	                
	                child.isLast = i == state.keys.length - 1;
	                child.isFirst = i == 0;
	                
	                if (modifiers.post) modifiers.post.call(state, child);
	                
	                path.pop();
	            });
	            parents.pop();
	        }
	        
	        if (modifiers.after) modifiers.after.call(state, state.node);
	        
	        return state;
	    })(root).node;
	}
	
	function copy (src) {
	    if (typeof src === 'object' && src !== null) {
	        var dst;
	        
	        if (isArray(src)) {
	            dst = [];
	        }
	        else if (isDate(src)) {
	            dst = new Date(src.getTime ? src.getTime() : src);
	        }
	        else if (isRegExp(src)) {
	            dst = new RegExp(src);
	        }
	        else if (isError(src)) {
	            dst = { message: src.message };
	        }
	        else if (isBoolean(src)) {
	            dst = new Boolean(src);
	        }
	        else if (isNumber(src)) {
	            dst = new Number(src);
	        }
	        else if (isString(src)) {
	            dst = new String(src);
	        }
	        else if (Object.create && Object.getPrototypeOf) {
	            dst = Object.create(Object.getPrototypeOf(src));
	        }
	        else if (src.constructor === Object) {
	            dst = {};
	        }
	        else {
	            var proto =
	                (src.constructor && src.constructor.prototype)
	                || src.__proto__
	                || {}
	            ;
	            var T = function () {};
	            T.prototype = proto;
	            dst = new T;
	        }
	        
	        forEach(objectKeys(src), function (key) {
	            dst[key] = src[key];
	        });
	        return dst;
	    }
	    else return src;
	}
	
	var objectKeys = Object.keys || function keys (obj) {
	    var res = [];
	    for (var key in obj) res.push(key)
	    return res;
	};
	
	function toS (obj) { return Object.prototype.toString.call(obj) }
	function isDate (obj) { return toS(obj) === '[object Date]' }
	function isRegExp (obj) { return toS(obj) === '[object RegExp]' }
	function isError (obj) { return toS(obj) === '[object Error]' }
	function isBoolean (obj) { return toS(obj) === '[object Boolean]' }
	function isNumber (obj) { return toS(obj) === '[object Number]' }
	function isString (obj) { return toS(obj) === '[object String]' }
	
	var isArray = Array.isArray || function isArray (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};
	
	var forEach = function (xs, fn) {
	    if (xs.forEach) return xs.forEach(fn)
	    else for (var i = 0; i < xs.length; i++) {
	        fn(xs[i], i, xs);
	    }
	};
	
	forEach(objectKeys(Traverse.prototype), function (key) {
	    traverse[key] = function (obj) {
	        var args = [].slice.call(arguments, 1);
	        var t = new Traverse(obj);
	        return t[key].apply(t, args);
	    };
	});
	
	var hasOwnProperty = Object.hasOwnProperty || function (obj, key) {
	    return key in obj;
	};


/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXRvZG9saXN0Lm1kIiwid2VicGFjazovLy8uL34vYXJyYXktZm9yZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LW1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ltbXV0YWJsZS1kYXRhL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1wYXRoLXBhcnNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RyYXZlcnNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTSxRQUFRO0FBQ1osYUFBVTtBQUNSLFdBQU0sQ0FBQztBQUNMLGFBQU0sUUFBTjtBQUNBLGtCQUFXLElBQVg7TUFGSSxDQUFOO0FBSUEsdUJBQUksTUFBTSxHQUFHO0FBQ1gsY0FBTztBQUNMLDRDQUFVLEVBQUUsS0FBRixDQUFRLElBQVIsSUFBYztBQUN0QixxQkFEc0I7QUFFdEIsc0JBQVcsS0FBWDtZQUZGO1FBREYsQ0FEVztNQUxMO0FBYVIsdUJBQUksTUFBTSxHQUFHO0FBQ1gsV0FBTSxRQUFRLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxPQUFiLENBQXFCLElBQXJCLENBQVIsQ0FESztBQUVYLGNBQU87QUFDTCxlQUFNLDJCQUFPLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYyxLQUFyQixDQUFOO1FBREYsQ0FGVztNQWJMO0FBbUJSLDZCQUFPLE1BQU0sR0FBRztBQUNkLFdBQU0sUUFBUSxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFx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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEhBQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStELEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ3hCLDJCQUEwQjtBQUMxQiwwQkFBeUI7QUFDekIsMEJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLXRvZG9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgc2V0LCByZW1vdmUgfSBmcm9tICdpbW11dGFibGUtZGF0YSc7XG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuXG5jb25zdCBzdG9yZSA9IHtcbiAgdG9kb2xpc3Q6IHsgXG4gICAgbGlzdDogW3tcbiAgICAgIHRleHQ6ICd0YXNrIDEnLFxuICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgIH1dLFxuICAgIGFkZCh0ZXh0LCBlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiBbLi4uZS5zdG9yZS5saXN0LCB7XG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBkZWwodG9kbywgZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnN0b3JlLmxpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IHJlbW92ZShlLnN0b3JlLmxpc3QsIGluZGV4KSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBjaGFuZ2UodG9kbywgZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnN0b3JlLmxpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IHNldChlLnN0b3JlLmxpc3QsIHtcbiAgICAgICAgICBbYCR7aW5kZXh9LmNvbXBsZXRlZGBdOiAhZS5zdG9yZS5saXN0W2luZGV4XS5jb21wbGV0ZWQsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpbHRlcjogJ2FsbCcsXG4gICAgY2hhbmdlRmlsdGVyKGZpbHRlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsdGVyLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufTtcblxuXG5jb25zdCBUb2RvTGlzdCA9ICh7dG9kb2xpc3R9KSA9PiB7XG4gIGNvbnN0IHsgY2hhbmdlLCBkZWwsIGFkZCwgZmlsdGVyLCBsaXN0LCBjaGFuZ2VGaWx0ZXIgfSA9IHRvZG9saXN0O1xuICBsZXQgZmlsdGVyTGlzdDtcbiAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICBjYXNlIFwiYWxsXCI6XG4gICAgICBmaWx0ZXJMaXN0ID0gbGlzdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICAgIGZpbHRlckxpc3QgPSBsaXN0LmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgICAgIGZpbHRlckxpc3QgPSBsaXN0LmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc3QgdG9kb1Byb3BzID0geyBjaGFuZ2UsIGRlbCB9O1xuICBjb25zdCBhZGRUb2RvUHJvcHMgPSB7IGFkZCB9O1xuICBjb25zdCBmb290ZXJQcm9wcyA9IHsgZmlsdGVyLCBjaGFuZ2VGaWx0ZXIgfTtcbiAgcmV0dXJuIDxkaXY+XG4gICAgPHVsPlxuICAgICAge1xuICAgICAgICBmaWx0ZXJMaXN0Lm1hcCgodG9kbyxpbmRleCk9PlxuICAgICAgICAgIDxUb2RvIGtleT17aW5kZXh9IHRvZG89e3RvZG99IHsuLi50b2RvUHJvcHN9IC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L3VsPlxuICAgIDxBZGRUb2RvIHsuLi5hZGRUb2RvUHJvcHN9IC8+XG4gICAgPEZvb3RlciB7Li4uZm9vdGVyUHJvcHN9IC8+XG4gIDwvZGl2Pjtcbn1cblxuXG5jb25zdCBUb2RvID0gKHt0b2RvfSkgPT4ge1xuICByZXR1cm4gPGxpPlxuICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2hhbmdlKHRoaXMucHJvcHMudG9kbyl9IGNsYXNzTmFtZT17dG9kby5jb21wbGV0ZWQgPyAnY29tcGxldGVkJyA6ICdub3QtY29tcGxldGVkJ30+XG4gICAgICB7dG9kby50ZXh0fSBcbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWwodGhpcy5wcm9wcy50b2RvKX0gY2xhc3NOYW1lPSdkZWwnPng8L3NwYW4+XG4gIDwvbGk+IFxufVxuXG5cbmNsYXNzIEFkZFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcbiAgICBjb25zdCB0ZXh0ID0gbm9kZS52YWx1ZS50cmltKClcbiAgICBpZiAoIXRleHQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmFkZCh0ZXh0KTtcbiAgICBub2RlLnZhbHVlID0gXCJcIlxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9J2lucHV0JyAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPjtcbiAgfVxufVxuXG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxkaXY+Y3VycmVudDp7dGhpcy5wcm9wcy5maWx0ZXJ9PC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKCdhbGwnKX0+YWxsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKCdhY3RpdmUnKX0+YWN0aXZlPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKCdjb21wbGV0ZWQnKX0+Y29tcGxldGVkPC9idXR0b24+XG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgPFRvZG9MaXN0IC8+XG48L1JjZj4sXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2V4YW1wbGUtdG9kb2xpc3QubWRcbiAqKi8iLCIvKipcbiAqIGFycmF5LWZvcmVhY2hcbiAqICAgQXJyYXkjZm9yRWFjaCBwb255ZmlsbCBmb3Igb2xkZXIgYnJvd3NlcnNcbiAqICAgKFBvbnlmaWxsOiBBIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBvdmVyd3JpdGUgdGhlIG5hdGl2ZSBtZXRob2QpXG4gKiBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2FkYS9hcnJheS1mb3JlYWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMTYgVGFrdXRvIFdhZGFcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3R3YWRhL2FycmF5LWZvcmVhY2gvYmxvYi9tYXN0ZXIvTUlULUxJQ0VOU0VcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2ggKGFyeSwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBpZiAoYXJ5LmZvckVhY2gpIHtcbiAgICAgICAgYXJ5LmZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSs9MSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGFyeVtpXSwgaSwgYXJ5KTtcbiAgICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXJyYXktZm9yZWFjaC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeHMsIGYpIHtcbiAgICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0geHNbaV07XG4gICAgICAgIGlmIChoYXNPd24uY2FsbCh4cywgaSkpIHJlcy5wdXNoKGYoeCwgaSwgeHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXJyYXktbWFwL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuc2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTs7XG5cdGV4cG9ydHMubWVyZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRleHBvcnRzLnJlbW92ZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3Qta2V5c1wiKTtcblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIGFzc2lnbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHR2YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBmb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIG1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHQvLyBub2RlIHN0cnVjdHVyZSB7a2V5LCB2YWx1ZSwgZGF0YSwgcGFyZW50Tm9kZX1cblxuXHR2YXIgTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBOb2RlKF9yZWYpIHtcblx0ICAgIHZhciBrZXkgPSBfcmVmLmtleTtcblx0ICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG5cdCAgICB2YXIgZGF0YSA9IF9yZWYuZGF0YTtcblx0ICAgIHZhciBwYXJlbnROb2RlID0gX3JlZi5wYXJlbnROb2RlO1xuXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG5cblx0ICAgIHRoaXMua2V5ID0ga2V5O1xuXHQgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXHQgICAgdGhpcy5kYXRhID0gZGF0YTtcblx0ICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG5cdCAgICB0aGlzLmNoaWxkcmVuID0ge307XG5cdCAgfVxuXG5cdCAgX2NyZWF0ZUNsYXNzKE5vZGUsIFt7XG5cdCAgICBrZXk6ICdzZXRDaGlsZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q2hpbGQoa2V5LCBjaGlsZCkge1xuXHQgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBjaGlsZDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdnZXRDaGlsZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGQoa2V5KSB7XG5cdCAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XG5cdCAgICB9XG5cdCAgfV0pO1xuXG5cdCAgcmV0dXJuIE5vZGU7XG5cdH0oKTtcblxuXHQvLyBBc3NpZ24gZGF0YSB3aXRoIGFycmF5OiB7a2V5LCB2YWx1ZSwgdHlwZT0nc2V0J31cblx0Ly8gZGF0YSA6IGFycmF5ID0+IHJlcGxhY2UgdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGluZGV4KG9iai5rZXkpXG5cdC8vICAgICAgICBvYmplY3QgPT4gYXNzaWduIG9iamVjdFxuXHQvLyBcblx0Ly8gZWc6b2JqMTp7a2V5OjEsdmFsdWV9LG9iajI6e2tleTozLHZhbHVlfVxuXHQvL1xuXHQvLyBhcnJheTpcblx0Ly8gWzAsIDEsICAgICAgICAgIDIsIDMsICAgICAgICAgIDRdID0+XG5cdC8vIFswLCBvYmoxLnZhbHVlLCAyLCBvYmoyLnZhbHVlLCA0XVxuXHQvL1xuXHQvLyBvYmplY3Q6XG5cdC8vIHtcblx0Ly8gICBcIjFcIjoxLFxuXHQvLyAgIFwiM1wiOjNcblx0Ly8gfSA9PlxuXHQvLyB7XG5cdC8vICAgXCIxXCI6b2JqMS52YWx1ZSxcblx0Ly8gICBcIjNcIjpvYmoyLnZhbHVlXG5cdC8vIH1cblxuXG5cdGZ1bmN0aW9uIGFzc2lnbkRhdGEobm9kZSwgYXJyYXkpIHtcblx0ICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICdzZXQnIDogYXJndW1lbnRzWzJdO1xuXG5cdCAgdmFyIGRhdGEgPSBub2RlLmRhdGE7XG5cdCAgaWYgKHR5cGUgPT09ICdyZW1vdmUnICYmIG5vZGUuc2Vjb25kTm9kZSkge1xuXHQgICAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcblx0ICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KCk7XG5cdCAgICAgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChvYmosIGluZGV4KSB7XG5cdCAgICAgICAgLy8gc3BsaWNlIDEgaXRlbSBhbmQgaW5kZXggLSAxXG5cdCAgICAgICAgZGF0YS5zcGxpY2Uob2JqLmtleSAtIGluZGV4LCAxKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBkYXRhO1xuXHQgICAgfVxuXHQgICAgZGF0YSA9IGFzc2lnbih7fSwgZGF0YSk7XG5cdCAgICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgIGlmIChvYmoua2V5IGluIGRhdGEpIHtcblx0ICAgICAgICBkZWxldGUgZGF0YVtvYmoua2V5XTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cblx0ICBpZiAoaXNBcnJheShkYXRhKSkge1xuXHQgICAgZGF0YSA9IGRhdGEuY29uY2F0KCk7XG5cdCAgICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgIGRhdGFbb2JqLmtleV0gPSBvYmoudmFsdWU7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBkYXRhO1xuXHQgIH1cblx0ICB2YXIgYXNzaWduT2JqZWN0ID0ge307XG5cdCAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKG9iaikge1xuXHQgICAgYXNzaWduT2JqZWN0W29iai5rZXldID0gb2JqLnZhbHVlO1xuXHQgIH0pO1xuXHQgIHJldHVybiBhc3NpZ24oe30sIGRhdGEsIGFzc2lnbk9iamVjdCk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSB0cmVlIHRoYXQgY2FuIGJlIHVzZWQgdG8gaGFuZGxlIG11bHRpcGxlIGRhdGFcblx0Ly8gQHBhcmFtIGRhdGEgKE9iamVjdCBvciBBcnJheSlcblx0Ly8gQHBhcmFtIGFycmF5IChBcnJheSBvZiBTdHJ1Y3R1cmUge3BhdGgsIGRhdGF9KVxuXHQvL1xuXHQvLyBlZzpbe3BhdGg6W1wiYVwiLFwiYlwiXSxkYXRhOjF9LHtwYXRoOltcImFcIixcImNcIl0sZGF0YToyfV0gPT5cblx0Ly8gICBhXG5cdC8vICAvIFxcXG5cdC8vIGIgICBjXG5cdC8vIHwgICB8XG5cdC8vIDEgICAyXG5cdGZ1bmN0aW9uIGNyZWF0ZVRyZWUoZGF0YSwgYXJyYXkpIHtcblx0ICB2YXIgdHJlZSA9IG5ldyBOb2RlKHtcblx0ICAgIGRhdGE6IGRhdGFcblx0ICB9KTtcblxuXHQgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICB2YXIgcG9pbnRlciA9IHRyZWU7XG5cdCAgICB2YXIgZGF0YVBvaW50ZXIgPSBkYXRhO1xuXG5cdCAgICB2YXIgbGVuID0gaXRlbS5wYXRoLmxlbmd0aDtcblxuXHQgICAgZm9yRWFjaChpdGVtLnBhdGgsIGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG5cblx0ICAgICAgdmFyIGNoaWxkID0gcG9pbnRlci5nZXRDaGlsZChrZXkpIHx8IG5ldyBOb2RlKHtcblx0ICAgICAgICAvLyBub2RlIG5hbWVcblx0ICAgICAgICBrZXk6IGtleSxcblx0ICAgICAgICAvLyBsZWFmIG5vZGUgdmFsdWVcblx0ICAgICAgICB2YWx1ZTogbGVuID09PSBpbmRleCArIDEgPyBpdGVtLmRhdGEgOiBudWxsLFxuXHQgICAgICAgIC8vIHJlYWwgZGF0YVxuXHQgICAgICAgIGRhdGE6IGRhdGFQb2ludGVyW2tleV0sXG5cdCAgICAgICAgLy8gcGFyZW50IG5vZGVcblx0ICAgICAgICBwYXJlbnROb2RlOiBwb2ludGVyXG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIGRhdGFQb2ludGVyID0gZGF0YVBvaW50ZXJba2V5XTtcblx0ICAgICAgcG9pbnRlci5zZXRDaGlsZChrZXksIGNoaWxkKTtcblx0ICAgICAgcG9pbnRlciA9IGNoaWxkO1xuXHQgICAgfSk7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHRyZWU7XG5cdH1cblxuXHQvLyBSZWN1cnNpdmUgYWNjZXNzIG5vZGUgYW5kIGdldCB0aGUgYXNzaWduRGF0YSxcblx0Ly8gYW5kIHRoZW4gcmV0dXJuIHRoZSByb290IG5vZGUgdmFsdWVcblx0ZnVuY3Rpb24gZ2V0Tm9kZVZhbHVlKG5vZGUsIHR5cGUpIHtcblx0ICB2YXIgYXJyYXkgPSBrZXlzKG5vZGUuY2hpbGRyZW4pO1xuXG5cdCAgLy8gSnVzdCBnZXQgdGhlIGxlYWYgbm9kZSB2YWx1ZSxcblx0ICAvLyBpZiBhIG5vZGUgaXMgbm90IGEgbGVhZiBub2RlIGFuZCBpdHMgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCxcblx0ICAvLyB0aGVuIHRoZSB2YWx1ZSBpcyBpZ25vcmVkLlxuXHQgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcblx0ICAgIC8vIE1hcmsgdGhlIHBhcmVudCBub2RlIGlzIHRoZSBzZWNvbmQgbGFzdCBub2RlLFxuXHQgICAgLy8gc28gaXQgaXMgY29udmVuaWVudCB0byBrbm93IGluIHdoaWNoIG5vZGUgY2FuIHJlbW92ZSBhdHRyaWJ1dGVzXG5cdCAgICBub2RlLnBhcmVudE5vZGUuc2Vjb25kTm9kZSA9IHRydWU7XG5cdCAgICByZXR1cm4gbm9kZS52YWx1ZTtcblx0ICB9XG5cblx0ICB2YXIgYXNzaWduQXJyYXkgPSBtYXAoYXJyYXksIGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5ba2V5XTtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIGtleTogY2hpbGQua2V5LFxuXHQgICAgICB2YWx1ZTogZ2V0Tm9kZVZhbHVlKGNoaWxkLCB0eXBlKVxuXHQgICAgfTtcblx0ICB9KTtcblxuXHQgIHJldHVybiBhc3NpZ25EYXRhKG5vZGUsIGFzc2lnbkFycmF5LCB0eXBlKTtcblx0fVxuXG5cdGV4cG9ydHMuY3JlYXRlVHJlZSA9IGNyZWF0ZVRyZWU7XG5cdGV4cG9ydHMuZ2V0Tm9kZVZhbHVlID0gZ2V0Tm9kZVZhbHVlO1xuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJyYXktbWFwXCIpO1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJyYXktZm9yZWFjaFwiKTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLWFycmF5XCIpO1xuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LXBhdGgtcGFyc2VcIik7XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cblx0dmFyIGlzUGxhaW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0dmFyIGZvckVhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzIHx8IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0dmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgY3JlYXRlVHJlZSA9IF9yZXF1aXJlLmNyZWF0ZVRyZWU7XG5cdHZhciBnZXROb2RlVmFsdWUgPSBfcmVxdWlyZS5nZXROb2RlVmFsdWU7XG5cblx0Ly8gR2V0IHRoZSB0cmVlIHBhdGggYXJyYXlcblx0Ly8gcmV0dXJuIEFycmF5IG9mIFN0cnVjdHVyZSh7cGF0aDogQXJyYXkgb2YgU3RyaW5nLCBkYXRhOiBub2RlIHZhbHVlfSlcblx0Ly9cblx0Ly8gZWc6XG5cdC8vIHZhbHVlOlxuXHQvLyAgIGFcblx0Ly8gIC8gXFxcblx0Ly8gYiAgIGNcblx0Ly8gfCAgIHxcblx0Ly8gMSAgIDJcblx0Ly8gcmV0dXJuOlxuXHQvLyBbe3BhdGg6W1wiYVwiLFwiYlwiXSwgZGF0YToxfSwge3BhdGg6W1wiYVwiLFwiY1wiXSwgZGF0YToyfV1cblx0Ly9cblx0Ly8gSWYgdGhlIGRhdGEgaXMgbm90IGEgcGxhaW4gb2JqZWN0LCBhc3NpZ24gaXQgdG8gdGhlIGVsZW1lbnQsXG5cdC8vXG5cdC8vIGVnOlxuXHQvLyBtZXJnZSh7bGlzdDpbMSwyXX0sIHtsaXN0OlswXX0pID0+IHtsaXN0OlswXX1cblx0Ly8gbWVyZ2Uoe2xpc3Q6WzEsMl19LCB7bGlzdDp7XCIwXCI6MH19KSA9PiB7bGlzdDpbMCwyXX1cblxuXHRmdW5jdGlvbiBnZXRPYmplY3RQYXRoKHZhbHVlKSB7XG5cdCAgdmFyIGxpc3QgPSBbXTtcblx0ICBmdW5jdGlvbiB0cmF2ZXJzZShkYXRhKSB7XG5cdCAgICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICBpZiAoaXNQbGFpbk9iamVjdChkYXRhKSkge1xuXHQgICAgICBmb3JFYWNoKGtleXMoZGF0YSksIGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICB0cmF2ZXJzZShkYXRhW2tleV0sIHBhdGguY29uY2F0KGtleSkpO1xuXHQgICAgICB9KTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgbGlzdC5wdXNoKHtcblx0ICAgICAgcGF0aDogcGF0aCxcblx0ICAgICAgZGF0YTogZGF0YVxuXHQgICAgfSk7XG5cdCAgfVxuXHQgIHRyYXZlcnNlKHZhbHVlKTtcblx0ICByZXR1cm4gbGlzdDtcblx0fVxuXG5cdC8vIGRlZXAgbWVyZ2UgZGF0YVxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlKGRhdGEsIG9iaikge1xuXHQgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSAhPT0gJ29iamVjdCcpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBzaG91bGQgYmUgT2JqZWN0IG9yIEFycmF5Jyk7XG5cdCAgfVxuXHQgIGlmICghb2JqKSB7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cdCAgdmFyIGFycmF5ID0gZ2V0T2JqZWN0UGF0aChvYmopO1xuXHQgIHZhciB0cmVlID0gY3JlYXRlVHJlZShkYXRhLCBhcnJheSk7XG5cdCAgdmFyIHZhbHVlID0gZ2V0Tm9kZVZhbHVlKHRyZWUpO1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuXHR2YXIgcGFyc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHR2YXIgbWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHR2YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgY3JlYXRlVHJlZSA9IF9yZXF1aXJlLmNyZWF0ZVRyZWU7XG5cdHZhciBnZXROb2RlVmFsdWUgPSBfcmVxdWlyZS5nZXROb2RlVmFsdWU7XG5cblx0Ly8gcmVtb3ZlKGRhdGEsIFN0cmluZyBvciBBcnJheSlcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZShkYXRhKSB7XG5cdCAgdmFyIGFycmF5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbMV07XG5cblx0ICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgIT09ICdvYmplY3QnKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgc2hvdWxkIGJlIE9iamVjdCBvciBBcnJheScpO1xuXHQgIH1cblxuXHQgIGlmICghaXNBcnJheShhcnJheSkpIHtcblx0ICAgIGFycmF5ID0gW2FycmF5XTtcblx0ICB9XG5cblx0ICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cblx0ICBhcnJheSA9IG1hcChhcnJheSwgZnVuY3Rpb24gKHBhdGgpIHtcblx0ICAgIHBhdGggPSBTdHJpbmcocGF0aCk7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAvLyBKdXN0IHVzZSBzcGxpdCBpZiB0aGVyZSBpcyBubyAnWycgaW4gcGF0aFxuXHQgICAgICAvLyBlZzogb2JqW1wibGlzdFwiXSA9PiBwYXJzZSwgb2JqLmxpc3QgPT4gc3BsaXRcblx0ICAgICAgcGF0aDogcGF0aC5pbmRleE9mKCdbJykgPiAtMSA/IHBhcnNlKHBhdGgpIDogcGF0aC5zcGxpdCgnLicpLFxuXHQgICAgICBkYXRhOiBudWxsXG5cdCAgICB9O1xuXHQgIH0pO1xuXG5cdCAgdmFyIHRyZWUgPSBjcmVhdGVUcmVlKGRhdGEsIGFycmF5KTtcblx0ICB2YXIgdmFsdWUgPSBnZXROb2RlVmFsdWUodHJlZSwgJ3JlbW92ZScpO1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuXHR2YXIgcGFyc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHR2YXIgbWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIGNyZWF0ZVRyZWUgPSBfcmVxdWlyZS5jcmVhdGVUcmVlO1xuXHR2YXIgZ2V0Tm9kZVZhbHVlID0gX3JlcXVpcmUuZ2V0Tm9kZVZhbHVlO1xuXG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXQoZGF0YSkge1xuXHQgIHZhciBvYmogPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSAhPT0gJ29iamVjdCcpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBzaG91bGQgYmUgT2JqZWN0IG9yIEFycmF5Jyk7XG5cdCAgfVxuXHQgIHZhciBhcnJheSA9IGtleXMob2JqKTtcblx0ICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cdCAgYXJyYXkgPSBtYXAoYXJyYXksIGZ1bmN0aW9uIChwYXRoKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAvLyBKdXN0IHVzZSBzcGxpdCBpZiB0aGVyZSBpcyBubyAnWycgaW4gcGF0aFxuXHQgICAgICAvLyBlZzogb2JqW1wibGlzdFwiXSA9PiBwYXJzZSwgb2JqLmxpc3QgPT4gc3BsaXRcblx0ICAgICAgcGF0aDogcGF0aC5pbmRleE9mKCdbJykgPiAtMSA/IHBhcnNlKHBhdGgpIDogcGF0aC5zcGxpdCgnLicpLFxuXHQgICAgICBkYXRhOiBvYmpbcGF0aF1cblx0ICAgIH07XG5cdCAgfSk7XG5cdCAgdmFyIHRyZWUgPSBjcmVhdGVUcmVlKGRhdGEsIGFycmF5KTtcblx0ICB2YXIgdmFsdWUgPSBnZXROb2RlVmFsdWUodHJlZSk7XG5cdCAgcmV0dXJuIHZhbHVlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLXBsYWluLW9iamVjdFwiKTtcblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpO1xuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbW11dGFibGUtZGF0YS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaXMtYXJyYXkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLy8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG52YXIgaGFzRG9udEVudW1CdWcgPSAhKHsgdG9TdHJpbmc6IG51bGwgfSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG52YXIgaGFzUHJvdG9FbnVtQnVnID0gZnVuY3Rpb24gKCkge30ucHJvcGVydHlJc0VudW1lcmFibGUoJ3Byb3RvdHlwZScpO1xudmFyIGRvbnRFbnVtcyA9IFtcblx0J3RvU3RyaW5nJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCdjb25zdHJ1Y3Rvcidcbl07XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xufTtcbnZhciBibGFja2xpc3RlZEtleXMgPSB7XG5cdCRjb25zb2xlOiB0cnVlLFxuXHQkZnJhbWU6IHRydWUsXG5cdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdCRmcmFtZXM6IHRydWUsXG5cdCRwYXJlbnQ6IHRydWUsXG5cdCRzZWxmOiB0cnVlLFxuXHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdCR3aW5kb3c6IHRydWVcbn07XG52YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghYmxhY2tsaXN0ZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0oKSk7XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdHZhciB0aGVLZXlzID0gW107XG5cblx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoZUtleXM7XG59O1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHRyZXR1cm4gKE9iamVjdC5rZXlzKGFyZ3VtZW50cykgfHwgJycpLmxlbmd0aCA9PT0gMjtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdHZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odCkge1xuICAgIGZ1bmN0aW9uIG4oaSkge1xuICAgICAgICBpZiAoZVtpXSkgcmV0dXJuIGVbaV0uZXhwb3J0cztcbiAgICAgICAgdmFyIHIgPSBlW2ldID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgIGxvYWRlZDogITFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRbaV0uY2FsbChyLmV4cG9ydHMsIHIsIHIuZXhwb3J0cywgbiksIHIubG9hZGVkID0gITAsIHIuZXhwb3J0cztcbiAgICB9XG4gICAgdmFyIGUgPSB7fTtcbiAgICByZXR1cm4gbi5tID0gdCwgbi5jID0gZSwgbi5wID0gXCJcIiwgbigwKTtcbn0oWyBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gaSh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQuX19lc01vZHVsZSA/IHQgOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogdFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiByKHQpIHtcbiAgICAgICAgcmV0dXJuICgwLCBvW1wiZGVmYXVsdFwiXSkoaFtcImRlZmF1bHRcIl0ucGFyc2UodCkpLnJlZHVjZShmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xlYWYgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgbiAmJiB0LnB1c2gobiksIHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgIH0pLCBuW1wiZGVmYXVsdFwiXSA9IHI7XG4gICAgdmFyIHMgPSBlKDEpLCBvID0gaShzKSwgbCA9IGUoMiksIGggPSBpKGwpO1xuICAgIHQuZXhwb3J0cyA9IG5bXCJkZWZhdWx0XCJdO1xufSwgZnVuY3Rpb24odCwgbikge1xuICAgIHQuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0cmF2ZXJzZVwiKTtcbn0sIGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICAoZnVuY3Rpb24odCwgaSkge1xuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnl5ID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbiA9IFsgMSwgMyBdLCBlID0gWyAxLCA0IF0sIGkgPSBbIDIsIDYgXSwgciA9IFsgMSwgNyBdLCBzID0gWyAxLCA4IF0sIG8gPSB7XG4gICAgICAgICAgICAgICAgdHJhY2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgeXk6IHt9LFxuICAgICAgICAgICAgICAgIHN5bWJvbHNfOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAyLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uczogMyxcbiAgICAgICAgICAgICAgICAgICAgZTogNCxcbiAgICAgICAgICAgICAgICAgICAgRU9GOiA1LFxuICAgICAgICAgICAgICAgICAgICBQUk9QRVJUWTogNixcbiAgICAgICAgICAgICAgICAgICAgcDogNyxcbiAgICAgICAgICAgICAgICAgICAgTlVNQkVSOiA4LFxuICAgICAgICAgICAgICAgICAgICBcIi5cIjogOSxcbiAgICAgICAgICAgICAgICAgICAgXCJbXCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICB0OiAxMSxcbiAgICAgICAgICAgICAgICAgICAgXCJdXCI6IDEyLFxuICAgICAgICAgICAgICAgICAgICBTVFJJTkc6IDEzLFxuICAgICAgICAgICAgICAgICAgICAkYWNjZXB0OiAwLFxuICAgICAgICAgICAgICAgICAgICAkZW5kOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbHNfOiB7XG4gICAgICAgICAgICAgICAgICAgIDI6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgNTogXCJFT0ZcIixcbiAgICAgICAgICAgICAgICAgICAgNjogXCJQUk9QRVJUWVwiLFxuICAgICAgICAgICAgICAgICAgICA4OiBcIk5VTUJFUlwiLFxuICAgICAgICAgICAgICAgICAgICA5OiBcIi5cIixcbiAgICAgICAgICAgICAgICAgICAgMTA6IFwiW1wiLFxuICAgICAgICAgICAgICAgICAgICAxMjogXCJdXCIsXG4gICAgICAgICAgICAgICAgICAgIDEzOiBcIlNUUklOR1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uc186IFsgMCwgWyAzLCAyIF0sIFsgNCwgMiBdLCBbIDQsIDIgXSwgWyA3LCAyIF0sIFsgNywgNCBdLCBbIDcsIDAgXSwgWyAxMSwgMSBdLCBbIDExLCAxIF0gXSxcbiAgICAgICAgICAgICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbih0LCBuLCBlLCBpLCByLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc1tsIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA6IHNbbCAtIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IHNbbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBzW2xdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcDogc1tsIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTogc1tsXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gc1tsXS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHNbbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhYmxlOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgMzogMSxcbiAgICAgICAgICAgICAgICAgICAgNDogMixcbiAgICAgICAgICAgICAgICAgICAgNjogbixcbiAgICAgICAgICAgICAgICAgICAgODogZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgMTogWyAzIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMSwgNSBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBpLFxuICAgICAgICAgICAgICAgICAgICA3OiA2LFxuICAgICAgICAgICAgICAgICAgICA5OiByLFxuICAgICAgICAgICAgICAgICAgICAxMDogc1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogaSxcbiAgICAgICAgICAgICAgICAgICAgNzogOSxcbiAgICAgICAgICAgICAgICAgICAgOTogcixcbiAgICAgICAgICAgICAgICAgICAgMTA6IHNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDE6IFsgMiwgMSBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDIgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNDogMTAsXG4gICAgICAgICAgICAgICAgICAgIDY6IG4sXG4gICAgICAgICAgICAgICAgICAgIDg6IGVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDg6IFsgMSwgMTMgXSxcbiAgICAgICAgICAgICAgICAgICAgMTE6IDExLFxuICAgICAgICAgICAgICAgICAgICAxMzogWyAxLCAxMiBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDMgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCA0IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDEsIDE0IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDIsIDcgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgMTI6IFsgMiwgOCBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBpLFxuICAgICAgICAgICAgICAgICAgICA3OiAxNSxcbiAgICAgICAgICAgICAgICAgICAgOTogcixcbiAgICAgICAgICAgICAgICAgICAgMTA6IHNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgNSBdXG4gICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgMSBdLFxuICAgICAgICAgICAgICAgICAgICA2OiBbIDIsIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgOTogWyAyLCAzIF0sXG4gICAgICAgICAgICAgICAgICAgIDEwOiBbIDIsIDQgXSxcbiAgICAgICAgICAgICAgICAgICAgMTI6IFsgMiwgNyBdLFxuICAgICAgICAgICAgICAgICAgICAxMzogWyAyLCA4IF0sXG4gICAgICAgICAgICAgICAgICAgIDE1OiBbIDIsIDUgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW4ucmVjb3ZlcmFibGUpIHRocm93IG5ldyBFcnJvcih0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFjZSh0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcnNlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gcC5sZXgoKSB8fCB5LCBcIm51bWJlclwiICE9IHR5cGVvZiB0ICYmICh0ID0gZS5zeW1ib2xzX1t0XSB8fCB0KSwgdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMsIGkgPSBbIDAgXSwgciA9IFsgbnVsbCBdLCBzID0gW10sIG8gPSB0aGlzLnRhYmxlLCBsID0gXCJcIiwgaCA9IDAsIGMgPSAwLCBhID0gMCwgdSA9IDIsIHkgPSAxLCBmID0gcy5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIHAgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCBnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeXk6IHt9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gdGhpcy55eSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIG0pICYmIChnLnl5W21dID0gdGhpcy55eVttXSk7XG4gICAgICAgICAgICAgICAgICAgIHAuc2V0SW5wdXQodCwgZy55eSksIGcueXkubGV4ZXIgPSBwLCBnLnl5LnBhcnNlciA9IHRoaXMsIFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHAueXlsbG9jICYmIChwLnl5bGxvYyA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF8gPSBwLnl5bGxvYztcbiAgICAgICAgICAgICAgICAgICAgcy5wdXNoKF8pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHAub3B0aW9ucyAmJiBwLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGcueXkucGFyc2VFcnJvciA/IHRoaXMucGFyc2VFcnJvciA9IGcueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2LCBiLCBrLCB4LCB3LCBFLCBTLCBBLCBJLCBQID0ge307IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID0gaVtpLmxlbmd0aCAtIDFdLCB0aGlzLmRlZmF1bHRBY3Rpb25zW2tdID8geCA9IHRoaXMuZGVmYXVsdEFjdGlvbnNba10gOiAoKG51bGwgPT09IHYgfHwgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgdikgJiYgKHYgPSBuKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBvW2tdICYmIG9ba11bdl0pLCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiB4IHx8ICF4Lmxlbmd0aCB8fCAheFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChFIGluIG9ba10pIHRoaXMudGVybWluYWxzX1tFXSAmJiBFID4gdSAmJiBJLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bRV0gKyBcIidcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCA9IHAuc2hvd1Bvc2l0aW9uID8gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKGggKyAxKSArIFwiOlxcblwiICsgcC5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgSS5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bdl0gfHwgdikgKyBcIidcIiA6IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChoICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArICh2ID09IHkgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3ZdIHx8IHYpICsgXCInXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoJCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwLm1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3ZdIHx8IHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHAueXlsaW5lbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IElcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4WzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgeC5sZW5ndGggPiAxKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBrICsgXCIsIHRva2VuOiBcIiArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh4WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2godiksIHIucHVzaChwLnl5dGV4dCksIHMucHVzaChwLnl5bGxvYyksIGkucHVzaCh4WzFdKSwgdiA9IG51bGwsIGIgPyAodiA9IGIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBudWxsKSA6IChjID0gcC55eWxlbmcsIGwgPSBwLnl5dGV4dCwgaCA9IHAueXlsaW5lbm8sIF8gPSBwLnl5bGxvYywgYSA+IDAgJiYgYS0tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFMgPSB0aGlzLnByb2R1Y3Rpb25zX1t4WzFdXVsxXSwgUC4kID0gcltyLmxlbmd0aCAtIFNdLCBQLl8kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiBzW3MubGVuZ3RoIC0gKFMgfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogc1tzLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBzW3MubGVuZ3RoIC0gKFMgfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHNbcy5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGQgJiYgKFAuXyQucmFuZ2UgPSBbIHNbcy5sZW5ndGggLSAoUyB8fCAxKV0ucmFuZ2VbMF0sIHNbcy5sZW5ndGggLSAxXS5yYW5nZVsxXSBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseShQLCBbIGwsIGMsIGgsIGcueXksIHhbMV0sIHIsIHMgXS5jb25jYXQoZikpLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3KSByZXR1cm4gdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTICYmIChpID0gaS5zbGljZSgwLCAtMSAqIFMgKiAyKSwgciA9IHIuc2xpY2UoMCwgLTEgKiBTKSwgcyA9IHMuc2xpY2UoMCwgLTEgKiBTKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1t4WzFdXVswXSksIHIucHVzaChQLiQpLCBzLnB1c2goUC5fJCksIEEgPSBvW2lbaS5sZW5ndGggLSAyXV1baVtpLmxlbmd0aCAtIDFdXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKEEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgRU9GOiAxLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMueXkucGFyc2VyKSB0aHJvdyBuZXcgRXJyb3IodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKHQsIG4pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dDogZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueXkgPSBuIHx8IHRoaXMueXkgfHwge30sIHRoaXMuX2lucHV0ID0gdCwgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDAsIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCIsIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbIFwiSU5JVElBTFwiIF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFsgMCwgMCBdKSwgdGhpcy5vZmZzZXQgPSAwLCB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgKz0gdCwgdGhpcy55eWxlbmcrKywgdGhpcy5vZmZzZXQrKywgdGhpcy5tYXRjaCArPSB0LCB0aGlzLm1hdGNoZWQgKz0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA/ICh0aGlzLnl5bGluZW5vKyssIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrKSA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKyssIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVucHV0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQubGVuZ3RoLCBlID0gdC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSB0ICsgdGhpcy5faW5wdXQsIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIG4pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0IC09IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpLCB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmxlbmd0aCAtIDEgJiYgKHRoaXMueXlsaW5lbm8gLT0gZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBlID8gKGUubGVuZ3RoID09PSBpLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgaVtpLmxlbmd0aCAtIGUubGVuZ3RoXS5sZW5ndGggLSBlWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWyByWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBuIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb3JlID0gITAsIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciA/ICh0aGlzLl9iYWNrdHJhY2sgPSAhMCwgdGhpcykgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZXNzOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UodCkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXN0SW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyB0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBjb21pbmdJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5sZW5ndGggPCAyMCAmJiAodCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSB0Lmxlbmd0aCkpLCAodC5zdWJzdHIoMCwgMjApICsgKHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5wYXN0SW5wdXQoKSwgbiA9IG5ldyBBcnJheSh0Lmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBuICsgXCJeXCI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRlc3RfbWF0Y2g6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlLCBpLCByO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgJiYgKHIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHIueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCkpKSwgaSA9IHRbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgJiYgKHRoaXMueXlsaW5lbm8gKz0gaS5sZW5ndGgpLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBpID8gaVtpLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGlbaS5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIHRbMF0ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnl5dGV4dCArPSB0WzBdLCB0aGlzLm1hdGNoICs9IHRbMF0sIHRoaXMubWF0Y2hlcyA9IHQsIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWyB0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmcgXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9ICExLCB0aGlzLl9iYWNrdHJhY2sgPSAhMSwgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSh0WzBdLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IHRbMF0sIGUgPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBuLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCAmJiAodGhpcy5kb25lID0gITEpLCBlKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHIpIHRoaXNbc10gPSByW3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCB8fCAodGhpcy5kb25lID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQsIG4sIGUsIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3JlIHx8ICh0aGlzLnl5dGV4dCA9IFwiXCIsIHRoaXMubWF0Y2ggPSBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSB0aGlzLl9jdXJyZW50UnVsZXMoKSwgcyA9IDA7IHMgPCByLmxlbmd0aDsgcysrKSBpZiAoZSA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcltzXV0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgJiYgKCFuIHx8IGVbMF0ubGVuZ3RoID4gblswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPSBlLCBpID0gcywgdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9IHRoaXMudGVzdF9tYXRjaChlLCByW3NdKSwgdCAhPT0gITEpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPyAodCA9IHRoaXMudGVzdF9tYXRjaChuLCByW2ldKSwgdCAhPT0gITEgPyB0IDogITEpIDogXCJcIiA9PT0gdGhpcy5faW5wdXQgPyB0aGlzLkVPRiA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gVW5yZWNvZ25pemVkIHRleHQuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGV4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA/IHQgOiB0aGlzLmxleCgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwb3BTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID4gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCkgOiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAmJiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0gPyB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcyA6IHRoaXMuY29uZGl0aW9ucy5JTklUSUFMLnJ1bGVzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b3BTdGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyh0IHx8IDApLCB0ID49IDAgPyB0aGlzLmNvbmRpdGlvblN0YWNrW3RdIDogXCJJTklUSUFMXCI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbih0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVTdGFja1NpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24odCwgbiwgZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA2O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gODtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSU5WQUxJRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBydWxlczogWyAvXig/OlwiKD86XFxcXFwifFteXFxcIl0pKlwifCcoPzpcXFxcJ3xbXlxcJ10pKicpLywgL14oPzpbYS16QS1aX1xcJF1bXFx3X1xcJF0qKS8sIC9eKD86MHxbMS05XVxcZCopLywgL14oPzpcXFspLywgL14oPzpcXF0pLywgL14oPzpcXC4pLywgL14oPzokKS8sIC9eKD86LikvIF0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIElOSVRJQUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogWyAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3IF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHJldHVybiBvLmxleGVyID0gbCwgdC5wcm90b3R5cGUgPSBvLCBvLlBhcnNlciA9IHQsIG5ldyB0KCk7XG4gICAgICAgIH0oKTtcbiAgICAgICAgbi5wYXJzZXIgPSByLCBuLlBhcnNlciA9IHIuUGFyc2VyLCBuLnBhcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gci5wYXJzZS5hcHBseShyLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBuLm1haW4gPSBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICBpWzFdIHx8IChjb25zb2xlLmxvZyhcIlVzYWdlOiBcIiArIGlbMF0gKyBcIiBGSUxFXCIpLCB0LmV4aXQoMSkpO1xuICAgICAgICAgICAgdmFyIHIgPSBlKDUpLnJlYWRGaWxlU3luYyhlKDYpLm5vcm1hbGl6ZShpWzFdKSwgXCJ1dGY4XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG4ucGFyc2VyLnBhcnNlKHIpO1xuICAgICAgICB9LCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBpICYmIGUuY1swXSA9PT0gaSAmJiBuLm1haW4odC5hcmd2LnNsaWNlKDEpKTtcbiAgICB9KS5jYWxsKG4sIGUoMyksIGUoNCkodCkpO1xufSwgZnVuY3Rpb24odCwgbikge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIGMgPSAhMSwgby5sZW5ndGggPyBoID0gby5jb25jYXQoaCkgOiBhID0gLTEsIGgubGVuZ3RoICYmIGkoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaSgpIHtcbiAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHNldFRpbWVvdXQoZSk7XG4gICAgICAgICAgICBjID0gITA7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gaC5sZW5ndGg7IG47ICkge1xuICAgICAgICAgICAgICAgIGZvciAobyA9IGgsIGggPSBbXTsgKythIDwgbjsgKSBvICYmIG9bYV0ucnVuKCk7XG4gICAgICAgICAgICAgICAgYSA9IC0xLCBuID0gaC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvID0gbnVsbCwgYyA9ICExLCBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcih0LCBuKSB7XG4gICAgICAgIHRoaXMuZnVuID0gdCwgdGhpcy5hcnJheSA9IG47XG4gICAgfVxuICAgIGZ1bmN0aW9uIHMoKSB7fVxuICAgIHZhciBvLCBsID0gdC5leHBvcnRzID0ge30sIGggPSBbXSwgYyA9ICExLCBhID0gLTE7XG4gICAgbC5uZXh0VGljayA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIG4gPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSBuW2UgLSAxXSA9IGFyZ3VtZW50c1tlXTtcbiAgICAgICAgaC5wdXNoKG5ldyByKHQsIG4pKSwgMSAhPT0gaC5sZW5ndGggfHwgYyB8fCBzZXRUaW1lb3V0KGksIDApO1xuICAgIH0sIHIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbiAgICB9LCBsLnRpdGxlID0gXCJicm93c2VyXCIsIGwuYnJvd3NlciA9ICEwLCBsLmVudiA9IHt9LCBsLmFyZ3YgPSBbXSwgbC52ZXJzaW9uID0gXCJcIiwgXG4gICAgbC52ZXJzaW9ucyA9IHt9LCBsLm9uID0gcywgbC5hZGRMaXN0ZW5lciA9IHMsIGwub25jZSA9IHMsIGwub2ZmID0gcywgbC5yZW1vdmVMaXN0ZW5lciA9IHMsIFxuICAgIGwucmVtb3ZlQWxsTGlzdGVuZXJzID0gcywgbC5lbWl0ID0gcywgbC5iaW5kaW5nID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9LCBsLmN3ZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCIvXCI7XG4gICAgfSwgbC5jaGRpciA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH0sIGwudW1hc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0LndlYnBhY2tQb2x5ZmlsbCB8fCAodC5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9LCB0LnBhdGhzID0gW10sIHQuY2hpbGRyZW4gPSBbXSwgXG4gICAgICAgIHQud2VicGFja1BvbHlmaWxsID0gMSksIHQ7XG4gICAgfTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHt9LCBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0LCBuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMCwgaSA9IHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRbaV07XG4gICAgICAgICAgICAgICAgXCIuXCIgPT09IHIgPyB0LnNwbGljZShpLCAxKSA6IFwiLi5cIiA9PT0gciA/ICh0LnNwbGljZShpLCAxKSwgZSsrKSA6IGUgJiYgKHQuc3BsaWNlKGksIDEpLCBcbiAgICAgICAgICAgICAgICBlLS0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4pIGZvciAoO2UtLTsgZSkgdC51bnNoaWZ0KFwiLi5cIik7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpKHQsIG4pIHtcbiAgICAgICAgICAgIGlmICh0LmZpbHRlcikgcmV0dXJuIHQuZmlsdGVyKG4pO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIG4odFtpXSwgaSwgdCkgJiYgZS5wdXNoKHRbaV0pO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSAvXihcXC8/fCkoW1xcc1xcU10qPykoKD86XFwuezEsMn18W15cXC9dKz98KShcXC5bXi5cXC9dKnwpKSg/OltcXC9dKikkLywgcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiByLmV4ZWModCkuc2xpY2UoMSk7XG4gICAgICAgIH07XG4gICAgICAgIG4ucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IFwiXCIsIHIgPSAhMSwgcyA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBzID49IC0xICYmICFyOyBzLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHMgPj0gMCA/IGFyZ3VtZW50c1tzXSA6IHQuY3dkKCk7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIG8pIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5nc1wiKTtcbiAgICAgICAgICAgICAgICBvICYmIChuID0gbyArIFwiL1wiICsgbiwgciA9IFwiL1wiID09PSBvLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbiA9IGUoaShuLnNwbGl0KFwiL1wiKSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXQ7XG4gICAgICAgICAgICB9KSwgIXIpLmpvaW4oXCIvXCIpLCAociA/IFwiL1wiIDogXCJcIikgKyBuIHx8IFwiLlwiO1xuICAgICAgICB9LCBuLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHZhciByID0gbi5pc0Fic29sdXRlKHQpLCBzID0gXCIvXCIgPT09IG8odCwgLTEpO1xuICAgICAgICAgICAgcmV0dXJuIHQgPSBlKGkodC5zcGxpdChcIi9cIiksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF0O1xuICAgICAgICAgICAgfSksICFyKS5qb2luKFwiL1wiKSwgdCB8fCByIHx8ICh0ID0gXCIuXCIpLCB0ICYmIHMgJiYgKHQgKz0gXCIvXCIpLCAociA/IFwiL1wiIDogXCJcIikgKyB0O1xuICAgICAgICB9LCBuLmlzQWJzb2x1dGUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCIvXCIgPT09IHQuY2hhckF0KDApO1xuICAgICAgICB9LCBuLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBuLm5vcm1hbGl6ZShpKHQsIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfSkuam9pbihcIi9cIikpO1xuICAgICAgICB9LCBuLnJlbGF0aXZlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaSh0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aCAmJiBcIlwiID09PSB0W25dOyBuKyspIDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gdC5sZW5ndGggLSAxOyBlID49IDAgJiYgXCJcIiA9PT0gdFtlXTsgZS0tKSA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4gPiBlID8gW10gOiB0LnNsaWNlKG4sIGUgLSBuICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ID0gbi5yZXNvbHZlKHQpLnN1YnN0cigxKSwgZSA9IG4ucmVzb2x2ZShlKS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gaSh0LnNwbGl0KFwiL1wiKSksIHMgPSBpKGUuc3BsaXQoXCIvXCIpKSwgbyA9IE1hdGgubWluKHIubGVuZ3RoLCBzLmxlbmd0aCksIGwgPSBvLCBoID0gMDsgbyA+IGg7IGgrKykgaWYgKHJbaF0gIT09IHNbaF0pIHtcbiAgICAgICAgICAgICAgICBsID0gaDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBbXSwgaCA9IGw7IGggPCByLmxlbmd0aDsgaCsrKSBjLnB1c2goXCIuLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBjID0gYy5jb25jYXQocy5zbGljZShsKSksIGMuam9pbihcIi9cIik7XG4gICAgICAgIH0sIG4uc2VwID0gXCIvXCIsIG4uZGVsaW1pdGVyID0gXCI6XCIsIG4uZGlybmFtZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gcyh0KSwgZSA9IG5bMF0sIGkgPSBuWzFdO1xuICAgICAgICAgICAgcmV0dXJuIGUgfHwgaSA/IChpICYmIChpID0gaS5zdWJzdHIoMCwgaS5sZW5ndGggLSAxKSksIGUgKyBpKSA6IFwiLlwiO1xuICAgICAgICB9LCBuLmJhc2VuYW1lID0gZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgdmFyIGUgPSBzKHQpWzJdO1xuICAgICAgICAgICAgcmV0dXJuIG4gJiYgZS5zdWJzdHIoLTEgKiBuLmxlbmd0aCkgPT09IG4gJiYgKGUgPSBlLnN1YnN0cigwLCBlLmxlbmd0aCAtIG4ubGVuZ3RoKSksIFxuICAgICAgICAgICAgZTtcbiAgICAgICAgfSwgbi5leHRuYW1lID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIHModClbM107XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvID0gXCJiXCIgPT09IFwiYWJcIi5zdWJzdHIoLTEpID8gZnVuY3Rpb24odCwgbiwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIHQuc3Vic3RyKG4sIGUpO1xuICAgICAgICB9IDogZnVuY3Rpb24odCwgbiwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIDAgPiBuICYmIChuID0gdC5sZW5ndGggKyBuKSwgdC5zdWJzdHIobiwgZSk7XG4gICAgICAgIH07XG4gICAgfSkuY2FsbChuLCBlKDMpKTtcbn0gXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LXBhdGgtcGFyc2UvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgdHJhdmVyc2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gbmV3IFRyYXZlcnNlKG9iaik7XG59O1xuXG5mdW5jdGlvbiBUcmF2ZXJzZSAob2JqKSB7XG4gICAgdGhpcy52YWx1ZSA9IG9iajtcbn1cblxuVHJhdmVyc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwcykge1xuICAgIHZhciBub2RlID0gdGhpcy52YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArKykge1xuICAgICAgICB2YXIga2V5ID0gcHNbaV07XG4gICAgICAgIGlmICghbm9kZSB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBrZXkpKSB7XG4gICAgICAgICAgICBub2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHBzKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnZhbHVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBwc1tpXTtcbiAgICAgICAgaWYgKCFub2RlIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocHMsIHZhbHVlKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnZhbHVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHMubGVuZ3RoIC0gMTsgaSArKykge1xuICAgICAgICB2YXIga2V5ID0gcHNbaV07XG4gICAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBrZXkpKSBub2RlW2tleV0gPSB7fTtcbiAgICAgICAgbm9kZSA9IG5vZGVba2V5XTtcbiAgICB9XG4gICAgbm9kZVtwc1tpXV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIHdhbGsodGhpcy52YWx1ZSwgY2IsIHRydWUpO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgICB0aGlzLnZhbHVlID0gd2Fsayh0aGlzLnZhbHVlLCBjYiwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIChjYiwgaW5pdCkge1xuICAgIHZhciBza2lwID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMTtcbiAgICB2YXIgYWNjID0gc2tpcCA/IHRoaXMudmFsdWUgOiBpbml0O1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSb290IHx8ICFza2lwKSB7XG4gICAgICAgICAgICBhY2MgPSBjYi5jYWxsKHRoaXMsIGFjYywgeCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLnBhdGhzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhY2MgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgYWNjLnB1c2godGhpcy5wYXRoKTsgXG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5ub2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWNjID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGFjYy5wdXNoKHRoaXMubm9kZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50cyA9IFtdLCBub2RlcyA9IFtdO1xuICAgIFxuICAgIHJldHVybiAoZnVuY3Rpb24gY2xvbmUgKHNyYykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldID09PSBzcmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiBzcmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBkc3QgPSBjb3B5KHNyYyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhcmVudHMucHVzaChzcmMpO1xuICAgICAgICAgICAgbm9kZXMucHVzaChkc3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3JFYWNoKG9iamVjdEtleXMoc3JjKSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGRzdFtrZXldID0gY2xvbmUoc3JjW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgICAgIHJldHVybiBkc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICB9XG4gICAgfSkodGhpcy52YWx1ZSk7XG59O1xuXG5mdW5jdGlvbiB3YWxrIChyb290LCBjYiwgaW1tdXRhYmxlKSB7XG4gICAgdmFyIHBhdGggPSBbXTtcbiAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgIHZhciBhbGl2ZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIChmdW5jdGlvbiB3YWxrZXIgKG5vZGVfKSB7XG4gICAgICAgIHZhciBub2RlID0gaW1tdXRhYmxlID8gY29weShub2RlXykgOiBub2RlXztcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdmFyIGtlZXBHb2luZyA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgICAgICBub2RlIDogbm9kZSxcbiAgICAgICAgICAgIG5vZGVfIDogbm9kZV8sXG4gICAgICAgICAgICBwYXRoIDogW10uY29uY2F0KHBhdGgpLFxuICAgICAgICAgICAgcGFyZW50IDogcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgcGFyZW50cyA6IHBhcmVudHMsXG4gICAgICAgICAgICBrZXkgOiBwYXRoLnNsaWNlKC0xKVswXSxcbiAgICAgICAgICAgIGlzUm9vdCA6IHBhdGgubGVuZ3RoID09PSAwLFxuICAgICAgICAgICAgbGV2ZWwgOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIGNpcmN1bGFyIDogbnVsbCxcbiAgICAgICAgICAgIHVwZGF0ZSA6IGZ1bmN0aW9uICh4LCBzdG9wSGVyZSkge1xuICAgICAgICAgICAgICAgIGlmICghc3RhdGUuaXNSb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnBhcmVudC5ub2RlW3N0YXRlLmtleV0gPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0ZS5ub2RlID0geDtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcEhlcmUpIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdkZWxldGUnIDogZnVuY3Rpb24gKHN0b3BIZXJlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLnBhcmVudC5ub2RlW3N0YXRlLmtleV07XG4gICAgICAgICAgICAgICAgaWYgKHN0b3BIZXJlKSBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmUgOiBmdW5jdGlvbiAoc3RvcEhlcmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShzdGF0ZS5wYXJlbnQubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucGFyZW50Lm5vZGUuc3BsaWNlKHN0YXRlLmtleSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUucGFyZW50Lm5vZGVbc3RhdGUua2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0b3BIZXJlKSBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXlzIDogbnVsbCxcbiAgICAgICAgICAgIGJlZm9yZSA6IGZ1bmN0aW9uIChmKSB7IG1vZGlmaWVycy5iZWZvcmUgPSBmIH0sXG4gICAgICAgICAgICBhZnRlciA6IGZ1bmN0aW9uIChmKSB7IG1vZGlmaWVycy5hZnRlciA9IGYgfSxcbiAgICAgICAgICAgIHByZSA6IGZ1bmN0aW9uIChmKSB7IG1vZGlmaWVycy5wcmUgPSBmIH0sXG4gICAgICAgICAgICBwb3N0IDogZnVuY3Rpb24gKGYpIHsgbW9kaWZpZXJzLnBvc3QgPSBmIH0sXG4gICAgICAgICAgICBzdG9wIDogZnVuY3Rpb24gKCkgeyBhbGl2ZSA9IGZhbHNlIH0sXG4gICAgICAgICAgICBibG9jayA6IGZ1bmN0aW9uICgpIHsga2VlcEdvaW5nID0gZmFsc2UgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCFhbGl2ZSkgcmV0dXJuIHN0YXRlO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlLm5vZGUgPT09ICdvYmplY3QnICYmIHN0YXRlLm5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmtleXMgfHwgc3RhdGUubm9kZV8gIT09IHN0YXRlLm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUua2V5cyA9IG9iamVjdEtleXMoc3RhdGUubm9kZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMZWFmID0gc3RhdGUua2V5cy5sZW5ndGggPT0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudHNbaV0ubm9kZV8gPT09IG5vZGVfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaXJjdWxhciA9IHBhcmVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzTGVhZiA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3RhdGUua2V5cyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXRlLm5vdExlYWYgPSAhc3RhdGUuaXNMZWFmO1xuICAgICAgICAgICAgc3RhdGUubm90Um9vdCA9ICFzdGF0ZS5pc1Jvb3Q7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyB1c2UgcmV0dXJuIHZhbHVlcyB0byB1cGRhdGUgaWYgZGVmaW5lZFxuICAgICAgICB2YXIgcmV0ID0gY2IuY2FsbChzdGF0ZSwgc3RhdGUubm9kZSk7XG4gICAgICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZS51cGRhdGUpIHN0YXRlLnVwZGF0ZShyZXQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1vZGlmaWVycy5iZWZvcmUpIG1vZGlmaWVycy5iZWZvcmUuY2FsbChzdGF0ZSwgc3RhdGUubm9kZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWtlZXBHb2luZykgcmV0dXJuIHN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZS5ub2RlID09ICdvYmplY3QnXG4gICAgICAgICYmIHN0YXRlLm5vZGUgIT09IG51bGwgJiYgIXN0YXRlLmNpcmN1bGFyKSB7XG4gICAgICAgICAgICBwYXJlbnRzLnB1c2goc3RhdGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3JFYWNoKHN0YXRlLmtleXMsIGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXJzLnByZSkgbW9kaWZpZXJzLnByZS5jYWxsKHN0YXRlLCBzdGF0ZS5ub2RlW2tleV0sIGtleSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gd2Fsa2VyKHN0YXRlLm5vZGVba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKGltbXV0YWJsZSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLm5vZGUsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubm9kZVtrZXldID0gY2hpbGQubm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2hpbGQuaXNMYXN0ID0gaSA9PSBzdGF0ZS5rZXlzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgY2hpbGQuaXNGaXJzdCA9IGkgPT0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXJzLnBvc3QpIG1vZGlmaWVycy5wb3N0LmNhbGwoc3RhdGUsIGNoaWxkKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwYXJlbnRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobW9kaWZpZXJzLmFmdGVyKSBtb2RpZmllcnMuYWZ0ZXIuY2FsbChzdGF0ZSwgc3RhdGUubm9kZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSkocm9vdCkubm9kZTtcbn1cblxuZnVuY3Rpb24gY29weSAoc3JjKSB7XG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIHNyYyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgZHN0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzQXJyYXkoc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNEYXRlKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IG5ldyBEYXRlKHNyYy5nZXRUaW1lID8gc3JjLmdldFRpbWUoKSA6IHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNSZWdFeHAoc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IFJlZ0V4cChzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRXJyb3Ioc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0geyBtZXNzYWdlOiBzcmMubWVzc2FnZSB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbihzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgQm9vbGVhbihzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTnVtYmVyKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IG5ldyBOdW1iZXIoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZyhzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgU3RyaW5nKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmNyZWF0ZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICAgIGRzdCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHNyYykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNyYy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkc3QgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcm90byA9XG4gICAgICAgICAgICAgICAgKHNyYy5jb25zdHJ1Y3RvciAmJiBzcmMuY29uc3RydWN0b3IucHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHx8IHNyYy5fX3Byb3RvX19cbiAgICAgICAgICAgICAgICB8fCB7fVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgdmFyIFQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIFQucHJvdG90eXBlID0gcHJvdG87XG4gICAgICAgICAgICBkc3QgPSBuZXcgVDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yRWFjaChvYmplY3RLZXlzKHNyYyksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRzdFtrZXldID0gc3JjW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZHN0O1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBzcmM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyAob2JqKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHJlcy5wdXNoKGtleSlcbiAgICByZXR1cm4gcmVzO1xufTtcblxuZnVuY3Rpb24gdG9TIChvYmopIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopIH1cbmZ1bmN0aW9uIGlzRGF0ZSAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nIH1cbmZ1bmN0aW9uIGlzUmVnRXhwIChvYmopIHsgcmV0dXJuIHRvUyhvYmopID09PSAnW29iamVjdCBSZWdFeHBdJyB9XG5mdW5jdGlvbiBpc0Vycm9yIChvYmopIHsgcmV0dXJuIHRvUyhvYmopID09PSAnW29iamVjdCBFcnJvcl0nIH1cbmZ1bmN0aW9uIGlzQm9vbGVhbiAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nIH1cbmZ1bmN0aW9uIGlzTnVtYmVyIChvYmopIHsgcmV0dXJuIHRvUyhvYmopID09PSAnW29iamVjdCBOdW1iZXJdJyB9XG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgfVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheSAoeHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBmb3JFYWNoID0gZnVuY3Rpb24gKHhzLCBmbikge1xuICAgIGlmICh4cy5mb3JFYWNoKSByZXR1cm4geHMuZm9yRWFjaChmbilcbiAgICBlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm4oeHNbaV0sIGksIHhzKTtcbiAgICB9XG59O1xuXG5mb3JFYWNoKG9iamVjdEtleXMoVHJhdmVyc2UucHJvdG90eXBlKSwgZnVuY3Rpb24gKGtleSkge1xuICAgIHRyYXZlcnNlW2tleV0gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICB2YXIgdCA9IG5ldyBUcmF2ZXJzZShvYmopO1xuICAgICAgICByZXR1cm4gdFtrZXldLmFwcGx5KHQsIGFyZ3MpO1xuICAgIH07XG59KTtcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gb2JqO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RyYXZlcnNlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9