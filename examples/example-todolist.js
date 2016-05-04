webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	
	function selectTodos(todos, filter) {
	  switch (filter) {
	    case "all":
	      return todos;
	    case "completed":
	      return todos.filter(function (todo) {
	        return todo.completed;
	      });
	    case "active":
	      return todos.filter(function (todo) {
	        return !todo.completed;
	      });
	  }
	}
	
	var TodoList = function (_Component) {
	  _inherits(TodoList, _Component);
	
	  function TodoList() {
	    _classCallCheck(this, TodoList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).apply(this, arguments));
	  }
	
	  _createClass(TodoList, [{
	    key: 'render',
	    value: function render() {
	      var _props$todolist = this.props.todolist;
	      var change = _props$todolist.change;
	      var del = _props$todolist.del;
	      var add = _props$todolist.add;
	      var filter = _props$todolist.filter;
	      var changeFilter = _props$todolist.changeFilter;
	
	      var list = selectTodos(this.props.todolist.list, filter);
	      var todoProps = { change: change, del: del };
	      var addTodoProps = { add: add };
	      var footerProps = { filter: filter, changeFilter: changeFilter };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'ul',
	          null,
	          list.map(function (todo, index) {
	            return _react2.default.createElement(Todo, _extends({ key: index, todo: todo }, todoProps));
	          })
	        ),
	        _react2.default.createElement(AddTodo, addTodoProps),
	        _react2.default.createElement(Footer, footerProps)
	      );
	    }
	  }]);
	
	  return TodoList;
	}(_react.Component);
	
	var Todo = function (_Component2) {
	  _inherits(Todo, _Component2);
	
	  function Todo() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this2, _ret;
	
	    _classCallCheck(this, Todo);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Todo)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.handleChange = function () {
	      _this2.props.change(_this2.props.todo);
	    }, _this2.handleDel = function () {
	      _this2.props.del(_this2.props.todo);
	    }, _temp), _possibleConstructorReturn(_this2, _ret);
	  }
	
	  _createClass(Todo, [{
	    key: 'render',
	    value: function render() {
	      var todo = this.props.todo;
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'span',
	          { onClick: this.handleChange, className: todo.completed ? 'completed' : 'not-completed' },
	          todo.text
	        ),
	        _react2.default.createElement(
	          'span',
	          { onClick: this.handleDel, className: 'del' },
	          'x'
	        )
	      );
	    }
	  }]);
	
	  return Todo;
	}(_react.Component);
	
	var AddTodo = function (_Component3) {
	  _inherits(AddTodo, _Component3);
	
	  function AddTodo() {
	    var _Object$getPrototypeO2;
	
	    var _temp2, _this3, _ret2;
	
	    _classCallCheck(this, AddTodo);
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(AddTodo)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3.handleSubmit = function (e) {
	      e.preventDefault();
	      var node = _reactDom2.default.findDOMNode(_this3.refs.input);
	      var text = node.value.trim();
	      if (!text) {
	        return;
	      }
	      _this3.props.add(text);
	      node.value = "";
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
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
	
	var Footer = function (_Component4) {
	  _inherits(Footer, _Component4);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
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
	          'a',
	          { href: '#', onClick: function onClick() {
	              return _this5.props.changeFilter('all');
	            } },
	          'all'
	        ),
	        ' ',
	        _react2.default.createElement(
	          'a',
	          { href: '#', onClick: function onClick() {
	              return _this5.props.changeFilter('active');
	            } },
	          'active'
	        ),
	        ' ',
	        _react2.default.createElement(
	          'a',
	          { href: '#', onClick: function onClick() {
	              return _this5.props.changeFilter('completed');
	            } },
	          'completed'
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(
	    _index2.default,
	    { store: store },
	    _react2.default.createElement(TodoList, null)
	  )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXRvZG9saXN0Lm1kIiwid2VicGFjazovLy8uL34vYXJyYXktZm9yZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LW1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ltbXV0YWJsZS1kYXRhL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1wYXRoLXBhcnNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RyYXZlcnNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTSxRQUFROztBQUVaLGFBQVU7O0FBRVIsV0FBTSxDQUFDO0FBQ0wsYUFBTSxRQUFOO0FBQ0Esa0JBQVcsSUFBWDtNQUZJLENBQU47O0FBS0EsdUJBQUksTUFBTSxHQUFHO0FBQ1gsY0FBTztBQUNMLDRDQUFVLEVBQUUsS0FBRixDQUFRLElBQVIsSUFBYztBQUN0QixxQkFEc0I7QUFFdEIsc0JBQVcsS0FBWDtZQUZGO1FBREYsQ0FEVztNQVBMO0FBZ0JSLHVCQUFJLE1BQU0sR0FBRztBQUNYLFdBQU0sUUFBUSxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFxQixJQUFyQixDQUFSLENBREs7QUFFWCxjQUFPO0FBQ0wsZUFBTSwyQkFBTyxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWMsS0FBckIsQ0FBTjtRQURGLENBRlc7TUFoQkw7QUF1QlIsNkJBQU8sTUFBTSxHQUFHO0FBQ2QsV0FBTSxRQUFRLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxPQUFi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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEhBQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStELEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQW9CO0FBQ3BCLHdCQUF1QjtBQUN2QiwwQkFBeUI7QUFDekIseUJBQXdCO0FBQ3hCLDJCQUEwQjtBQUMxQiwwQkFBeUI7QUFDekIsMEJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLXRvZG9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgc2V0LCByZW1vdmUgfSBmcm9tICdpbW11dGFibGUtZGF0YSc7XG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuXG5jb25zdCBzdG9yZSA9IHtcblxuICB0b2RvbGlzdDoge1xuXG4gICAgbGlzdDogW3tcbiAgICAgIHRleHQ6ICd0YXNrIDEnLFxuICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgIH1dLFxuXG4gICAgYWRkKHRleHQsIGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IFsuLi5lLnN0b3JlLmxpc3QsIHtcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZGVsKHRvZG8sIGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5zdG9yZS5saXN0LmluZGV4T2YodG9kbyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiByZW1vdmUoZS5zdG9yZS5saXN0LCBpbmRleCksXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjaGFuZ2UodG9kbywgZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnN0b3JlLmxpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IHNldChlLnN0b3JlLmxpc3QsIHtcbiAgICAgICAgICBbYCR7aW5kZXh9LmNvbXBsZXRlZGBdOiAhZS5zdG9yZS5saXN0W2luZGV4XS5jb21wbGV0ZWQsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZmlsdGVyOiAnYWxsJyxcblxuICAgIGNoYW5nZUZpbHRlcihmaWx0ZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbHRlcixcbiAgICAgIH07XG4gICAgfSxcblxuICB9LFxufTtcblxuXG5cbmZ1bmN0aW9uIHNlbGVjdFRvZG9zKHRvZG9zLCBmaWx0ZXIpIHtcbiAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgY2FzZSBcImFsbFwiOlxuICAgIHJldHVybiB0b2RvcztcbiAgY2FzZSBcImNvbXBsZXRlZFwiOlxuICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZCk7XG4gIGNhc2UgXCJhY3RpdmVcIjpcbiAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKTtcbiAgfVxufVxuXG5cblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7ICBcbiAgICBjb25zdCB7IGNoYW5nZSwgZGVsLCBhZGQsIGZpbHRlciwgY2hhbmdlRmlsdGVyIH0gPSB0aGlzLnByb3BzLnRvZG9saXN0O1xuICAgIGNvbnN0IGxpc3QgPSBzZWxlY3RUb2Rvcyh0aGlzLnByb3BzLnRvZG9saXN0Lmxpc3QsIGZpbHRlcik7XG4gICAgY29uc3QgdG9kb1Byb3BzID0geyBjaGFuZ2UsIGRlbCB9O1xuICAgIGNvbnN0IGFkZFRvZG9Qcm9wcyA9IHsgYWRkIH07XG4gICAgY29uc3QgZm9vdGVyUHJvcHMgPSB7IGZpbHRlciwgY2hhbmdlRmlsdGVyIH07XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBsaXN0Lm1hcCgodG9kbyxpbmRleCk9PlxuICAgICAgICAgICAgPFRvZG8ga2V5PXtpbmRleH0gdG9kbz17dG9kb30gey4uLnRvZG9Qcm9wc30gLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8QWRkVG9kbyB7Li4uYWRkVG9kb1Byb3BzfSAvPlxuICAgICAgPEZvb3RlciB7Li4uZm9vdGVyUHJvcHN9IC8+XG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuY2xhc3MgVG9kbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZSh0aGlzLnByb3BzLnRvZG8pO1xuICB9XG4gIGhhbmRsZURlbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmRlbCh0aGlzLnByb3BzLnRvZG8pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b2RvID0gdGhpcy5wcm9wcy50b2RvO1xuICAgIHJldHVybiA8bGk+XG4gICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPXt0b2RvLmNvbXBsZXRlZCA/ICdjb21wbGV0ZWQnIDogJ25vdC1jb21wbGV0ZWQnfT5cbiAgICAgICAge3RvZG8udGV4dH0gXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbH0gY2xhc3NOYW1lPSdkZWwnPng8L3NwYW4+XG4gICAgPC9saT5cbiAgfSAgXG59XG5cbmNsYXNzIEFkZFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcbiAgICBjb25zdCB0ZXh0ID0gbm9kZS52YWx1ZS50cmltKClcbiAgICBpZiAoIXRleHQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmFkZCh0ZXh0KTtcbiAgICBub2RlLnZhbHVlID0gXCJcIlxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9J2lucHV0JyAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPjtcbiAgfVxufVxuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXY+Y3VycmVudDp7dGhpcy5wcm9wcy5maWx0ZXJ9PC9kaXY+XG5cbiAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoJ2FsbCcpfT5hbGw8L2E+XG4gICAgICB7JyAnfVxuICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNoYW5nZUZpbHRlcignYWN0aXZlJyl9PmFjdGl2ZTwvYT5cbiAgICAgIHsnICd9XG4gICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKCdjb21wbGV0ZWQnKX0+Y29tcGxldGVkPC9hPlxuXG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxkaXY+XG5cbiAgPFJjZiBzdG9yZT17c3RvcmV9PlxuICAgIDxUb2RvTGlzdCAvPlxuICA8L1JjZj5cblxuPC9kaXY+LCBcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9leGFtcGxlLXRvZG9saXN0Lm1kXG4gKiovIiwiLyoqXG4gKiBhcnJheS1mb3JlYWNoXG4gKiAgIEFycmF5I2ZvckVhY2ggcG9ueWZpbGwgZm9yIG9sZGVyIGJyb3dzZXJzXG4gKiAgIChQb255ZmlsbDogQSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3Qgb3ZlcndyaXRlIHRoZSBuYXRpdmUgbWV0aG9kKVxuICogXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdHdhZGEvYXJyYXktZm9yZWFjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDE2IFRha3V0byBXYWRhXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90d2FkYS9hcnJheS1mb3JlYWNoL2Jsb2IvbWFzdGVyL01JVC1MSUNFTlNFXG4gKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JFYWNoIChhcnksIGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgaWYgKGFyeS5mb3JFYWNoKSB7XG4gICAgICAgIGFyeS5mb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrPTEpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBhcnlbaV0sIGksIGFyeSk7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FycmF5LWZvcmVhY2gvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHhzLCBmKSB7XG4gICAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IHhzW2ldO1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwoeHMsIGkpKSByZXMucHVzaChmKHgsIGksIHhzKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FycmF5LW1hcC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLnNldCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7O1xuXHRleHBvcnRzLm1lcmdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0ZXhwb3J0cy5yZW1vdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LWtleXNcIik7XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBhc3NpZ24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHR2YXIgZm9yRWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdHZhciBtYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzIHx8IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0Ly8gbm9kZSBzdHJ1Y3R1cmUge2tleSwgdmFsdWUsIGRhdGEsIHBhcmVudE5vZGV9XG5cblx0dmFyIE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gTm9kZShfcmVmKSB7XG5cdCAgICB2YXIga2V5ID0gX3JlZi5rZXk7XG5cdCAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuXHQgICAgdmFyIGRhdGEgPSBfcmVmLmRhdGE7XG5cdCAgICB2YXIgcGFyZW50Tm9kZSA9IF9yZWYucGFyZW50Tm9kZTtcblxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdCAgICB0aGlzLmtleSA9IGtleTtcblx0ICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0ICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cdCAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuXHQgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuXHQgIH1cblxuXHQgIF9jcmVhdGVDbGFzcyhOb2RlLCBbe1xuXHQgICAga2V5OiAnc2V0Q2hpbGQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldENoaWxkKGtleSwgY2hpbGQpIHtcblx0ICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gY2hpbGQ7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZ2V0Q2hpbGQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkKGtleSkge1xuXHQgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuXHQgICAgfVxuXHQgIH1dKTtcblxuXHQgIHJldHVybiBOb2RlO1xuXHR9KCk7XG5cblx0Ly8gQXNzaWduIGRhdGEgd2l0aCBhcnJheToge2tleSwgdmFsdWUsIHR5cGU9J3NldCd9XG5cdC8vIGRhdGEgOiBhcnJheSA9PiByZXBsYWNlIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBpbmRleChvYmoua2V5KVxuXHQvLyAgICAgICAgb2JqZWN0ID0+IGFzc2lnbiBvYmplY3Rcblx0Ly8gXG5cdC8vIGVnOm9iajE6e2tleToxLHZhbHVlfSxvYmoyOntrZXk6Myx2YWx1ZX1cblx0Ly9cblx0Ly8gYXJyYXk6XG5cdC8vIFswLCAxLCAgICAgICAgICAyLCAzLCAgICAgICAgICA0XSA9PlxuXHQvLyBbMCwgb2JqMS52YWx1ZSwgMiwgb2JqMi52YWx1ZSwgNF1cblx0Ly9cblx0Ly8gb2JqZWN0OlxuXHQvLyB7XG5cdC8vICAgXCIxXCI6MSxcblx0Ly8gICBcIjNcIjozXG5cdC8vIH0gPT5cblx0Ly8ge1xuXHQvLyAgIFwiMVwiOm9iajEudmFsdWUsXG5cdC8vICAgXCIzXCI6b2JqMi52YWx1ZVxuXHQvLyB9XG5cblxuXHRmdW5jdGlvbiBhc3NpZ25EYXRhKG5vZGUsIGFycmF5KSB7XG5cdCAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyAnc2V0JyA6IGFyZ3VtZW50c1syXTtcblxuXHQgIHZhciBkYXRhID0gbm9kZS5kYXRhO1xuXHQgIGlmICh0eXBlID09PSAncmVtb3ZlJyAmJiBub2RlLnNlY29uZE5vZGUpIHtcblx0ICAgIGlmIChpc0FycmF5KGRhdGEpKSB7XG5cdCAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdCgpO1xuXHQgICAgICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAob2JqLCBpbmRleCkge1xuXHQgICAgICAgIC8vIHNwbGljZSAxIGl0ZW0gYW5kIGluZGV4IC0gMVxuXHQgICAgICAgIGRhdGEuc3BsaWNlKG9iai5rZXkgLSBpbmRleCwgMSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXR1cm4gZGF0YTtcblx0ICAgIH1cblx0ICAgIGRhdGEgPSBhc3NpZ24oe30sIGRhdGEpO1xuXHQgICAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICBpZiAob2JqLmtleSBpbiBkYXRhKSB7XG5cdCAgICAgICAgZGVsZXRlIGRhdGFbb2JqLmtleV07XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXG5cdCAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcblx0ICAgIGRhdGEgPSBkYXRhLmNvbmNhdCgpO1xuXHQgICAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICBkYXRhW29iai5rZXldID0gb2JqLnZhbHVlO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cdCAgdmFyIGFzc2lnbk9iamVjdCA9IHt9O1xuXHQgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgIGFzc2lnbk9iamVjdFtvYmoua2V5XSA9IG9iai52YWx1ZTtcblx0ICB9KTtcblx0ICByZXR1cm4gYXNzaWduKHt9LCBkYXRhLCBhc3NpZ25PYmplY3QpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdHJlZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGhhbmRsZSBtdWx0aXBsZSBkYXRhXG5cdC8vIEBwYXJhbSBkYXRhIChPYmplY3Qgb3IgQXJyYXkpXG5cdC8vIEBwYXJhbSBhcnJheSAoQXJyYXkgb2YgU3RydWN0dXJlIHtwYXRoLCBkYXRhfSlcblx0Ly9cblx0Ly8gZWc6W3twYXRoOltcImFcIixcImJcIl0sZGF0YToxfSx7cGF0aDpbXCJhXCIsXCJjXCJdLGRhdGE6Mn1dID0+XG5cdC8vICAgYVxuXHQvLyAgLyBcXFxuXHQvLyBiICAgY1xuXHQvLyB8ICAgfFxuXHQvLyAxICAgMlxuXHRmdW5jdGlvbiBjcmVhdGVUcmVlKGRhdGEsIGFycmF5KSB7XG5cdCAgdmFyIHRyZWUgPSBuZXcgTm9kZSh7XG5cdCAgICBkYXRhOiBkYXRhXG5cdCAgfSk7XG5cblx0ICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgdmFyIHBvaW50ZXIgPSB0cmVlO1xuXHQgICAgdmFyIGRhdGFQb2ludGVyID0gZGF0YTtcblxuXHQgICAgdmFyIGxlbiA9IGl0ZW0ucGF0aC5sZW5ndGg7XG5cblx0ICAgIGZvckVhY2goaXRlbS5wYXRoLCBmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xuXG5cdCAgICAgIHZhciBjaGlsZCA9IHBvaW50ZXIuZ2V0Q2hpbGQoa2V5KSB8fCBuZXcgTm9kZSh7XG5cdCAgICAgICAgLy8gbm9kZSBuYW1lXG5cdCAgICAgICAga2V5OiBrZXksXG5cdCAgICAgICAgLy8gbGVhZiBub2RlIHZhbHVlXG5cdCAgICAgICAgdmFsdWU6IGxlbiA9PT0gaW5kZXggKyAxID8gaXRlbS5kYXRhIDogbnVsbCxcblx0ICAgICAgICAvLyByZWFsIGRhdGFcblx0ICAgICAgICBkYXRhOiBkYXRhUG9pbnRlcltrZXldLFxuXHQgICAgICAgIC8vIHBhcmVudCBub2RlXG5cdCAgICAgICAgcGFyZW50Tm9kZTogcG9pbnRlclxuXHQgICAgICB9KTtcblxuXHQgICAgICBkYXRhUG9pbnRlciA9IGRhdGFQb2ludGVyW2tleV07XG5cdCAgICAgIHBvaW50ZXIuc2V0Q2hpbGQoa2V5LCBjaGlsZCk7XG5cdCAgICAgIHBvaW50ZXIgPSBjaGlsZDtcblx0ICAgIH0pO1xuXHQgIH0pO1xuXHQgIHJldHVybiB0cmVlO1xuXHR9XG5cblx0Ly8gUmVjdXJzaXZlIGFjY2VzcyBub2RlIGFuZCBnZXQgdGhlIGFzc2lnbkRhdGEsXG5cdC8vIGFuZCB0aGVuIHJldHVybiB0aGUgcm9vdCBub2RlIHZhbHVlXG5cdGZ1bmN0aW9uIGdldE5vZGVWYWx1ZShub2RlLCB0eXBlKSB7XG5cdCAgdmFyIGFycmF5ID0ga2V5cyhub2RlLmNoaWxkcmVuKTtcblxuXHQgIC8vIEp1c3QgZ2V0IHRoZSBsZWFmIG5vZGUgdmFsdWUsXG5cdCAgLy8gaWYgYSBub2RlIGlzIG5vdCBhIGxlYWYgbm9kZSBhbmQgaXRzIHZhbHVlIGlzIG5vdCB1bmRlZmluZWQsXG5cdCAgLy8gdGhlbiB0aGUgdmFsdWUgaXMgaWdub3JlZC5cblx0ICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdCAgICAvLyBNYXJrIHRoZSBwYXJlbnQgbm9kZSBpcyB0aGUgc2Vjb25kIGxhc3Qgbm9kZSxcblx0ICAgIC8vIHNvIGl0IGlzIGNvbnZlbmllbnQgdG8ga25vdyBpbiB3aGljaCBub2RlIGNhbiByZW1vdmUgYXR0cmlidXRlc1xuXHQgICAgbm9kZS5wYXJlbnROb2RlLnNlY29uZE5vZGUgPSB0cnVlO1xuXHQgICAgcmV0dXJuIG5vZGUudmFsdWU7XG5cdCAgfVxuXG5cdCAgdmFyIGFzc2lnbkFycmF5ID0gbWFwKGFycmF5LCBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2tleV07XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBrZXk6IGNoaWxkLmtleSxcblx0ICAgICAgdmFsdWU6IGdldE5vZGVWYWx1ZShjaGlsZCwgdHlwZSlcblx0ICAgIH07XG5cdCAgfSk7XG5cblx0ICByZXR1cm4gYXNzaWduRGF0YShub2RlLCBhc3NpZ25BcnJheSwgdHlwZSk7XG5cdH1cblxuXHRleHBvcnRzLmNyZWF0ZVRyZWUgPSBjcmVhdGVUcmVlO1xuXHRleHBvcnRzLmdldE5vZGVWYWx1ZSA9IGdldE5vZGVWYWx1ZTtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFycmF5LW1hcFwiKTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFycmF5LWZvcmVhY2hcIik7XG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcy1hcnJheVwiKTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdC1wYXRoLXBhcnNlXCIpO1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5cdHZhciBpc1BsYWluT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdHZhciBmb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIGNyZWF0ZVRyZWUgPSBfcmVxdWlyZS5jcmVhdGVUcmVlO1xuXHR2YXIgZ2V0Tm9kZVZhbHVlID0gX3JlcXVpcmUuZ2V0Tm9kZVZhbHVlO1xuXG5cdC8vIEdldCB0aGUgdHJlZSBwYXRoIGFycmF5XG5cdC8vIHJldHVybiBBcnJheSBvZiBTdHJ1Y3R1cmUoe3BhdGg6IEFycmF5IG9mIFN0cmluZywgZGF0YTogbm9kZSB2YWx1ZX0pXG5cdC8vXG5cdC8vIGVnOlxuXHQvLyB2YWx1ZTpcblx0Ly8gICBhXG5cdC8vICAvIFxcXG5cdC8vIGIgICBjXG5cdC8vIHwgICB8XG5cdC8vIDEgICAyXG5cdC8vIHJldHVybjpcblx0Ly8gW3twYXRoOltcImFcIixcImJcIl0sIGRhdGE6MX0sIHtwYXRoOltcImFcIixcImNcIl0sIGRhdGE6Mn1dXG5cdC8vXG5cdC8vIElmIHRoZSBkYXRhIGlzIG5vdCBhIHBsYWluIG9iamVjdCwgYXNzaWduIGl0IHRvIHRoZSBlbGVtZW50LFxuXHQvL1xuXHQvLyBlZzpcblx0Ly8gbWVyZ2Uoe2xpc3Q6WzEsMl19LCB7bGlzdDpbMF19KSA9PiB7bGlzdDpbMF19XG5cdC8vIG1lcmdlKHtsaXN0OlsxLDJdfSwge2xpc3Q6e1wiMFwiOjB9fSkgPT4ge2xpc3Q6WzAsMl19XG5cblx0ZnVuY3Rpb24gZ2V0T2JqZWN0UGF0aCh2YWx1ZSkge1xuXHQgIHZhciBsaXN0ID0gW107XG5cdCAgZnVuY3Rpb24gdHJhdmVyc2UoZGF0YSkge1xuXHQgICAgdmFyIHBhdGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgaWYgKGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcblx0ICAgICAgZm9yRWFjaChrZXlzKGRhdGEpLCBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgICAgdHJhdmVyc2UoZGF0YVtrZXldLCBwYXRoLmNvbmNhdChrZXkpKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGxpc3QucHVzaCh7XG5cdCAgICAgIHBhdGg6IHBhdGgsXG5cdCAgICAgIGRhdGE6IGRhdGFcblx0ICAgIH0pO1xuXHQgIH1cblx0ICB0cmF2ZXJzZSh2YWx1ZSk7XG5cdCAgcmV0dXJuIGxpc3Q7XG5cdH1cblxuXHQvLyBkZWVwIG1lcmdlIGRhdGFcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZShkYXRhLCBvYmopIHtcblx0ICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgIT09ICdvYmplY3QnKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgc2hvdWxkIGJlIE9iamVjdCBvciBBcnJheScpO1xuXHQgIH1cblx0ICBpZiAoIW9iaikge1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXHQgIHZhciBhcnJheSA9IGdldE9iamVjdFBhdGgob2JqKTtcblx0ICB2YXIgdHJlZSA9IGNyZWF0ZVRyZWUoZGF0YSwgYXJyYXkpO1xuXHQgIHZhciB2YWx1ZSA9IGdldE5vZGVWYWx1ZSh0cmVlKTtcblx0ICByZXR1cm4gdmFsdWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cblx0dmFyIHBhcnNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0dmFyIG1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0dmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIGNyZWF0ZVRyZWUgPSBfcmVxdWlyZS5jcmVhdGVUcmVlO1xuXHR2YXIgZ2V0Tm9kZVZhbHVlID0gX3JlcXVpcmUuZ2V0Tm9kZVZhbHVlO1xuXG5cdC8vIHJlbW92ZShkYXRhLCBTdHJpbmcgb3IgQXJyYXkpXG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW1vdmUoZGF0YSkge1xuXHQgIHZhciBhcnJheSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzFdO1xuXG5cdCAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpICE9PSAnb2JqZWN0Jykge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhIHNob3VsZCBiZSBPYmplY3Qgb3IgQXJyYXknKTtcblx0ICB9XG5cblx0ICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG5cdCAgICBhcnJheSA9IFthcnJheV07XG5cdCAgfVxuXG5cdCAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXG5cdCAgYXJyYXkgPSBtYXAoYXJyYXksIGZ1bmN0aW9uIChwYXRoKSB7XG5cdCAgICBwYXRoID0gU3RyaW5nKHBhdGgpO1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLy8gSnVzdCB1c2Ugc3BsaXQgaWYgdGhlcmUgaXMgbm8gJ1snIGluIHBhdGhcblx0ICAgICAgLy8gZWc6IG9ialtcImxpc3RcIl0gPT4gcGFyc2UsIG9iai5saXN0ID0+IHNwbGl0XG5cdCAgICAgIHBhdGg6IHBhdGguaW5kZXhPZignWycpID4gLTEgPyBwYXJzZShwYXRoKSA6IHBhdGguc3BsaXQoJy4nKSxcblx0ICAgICAgZGF0YTogbnVsbFxuXHQgICAgfTtcblx0ICB9KTtcblxuXHQgIHZhciB0cmVlID0gY3JlYXRlVHJlZShkYXRhLCBhcnJheSk7XG5cdCAgdmFyIHZhbHVlID0gZ2V0Tm9kZVZhbHVlKHRyZWUsICdyZW1vdmUnKTtcblx0ICByZXR1cm4gdmFsdWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cblx0dmFyIHBhcnNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0dmFyIG1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBjcmVhdGVUcmVlID0gX3JlcXVpcmUuY3JlYXRlVHJlZTtcblx0dmFyIGdldE5vZGVWYWx1ZSA9IF9yZXF1aXJlLmdldE5vZGVWYWx1ZTtcblxuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0KGRhdGEpIHtcblx0ICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgIT09ICdvYmplY3QnKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgc2hvdWxkIGJlIE9iamVjdCBvciBBcnJheScpO1xuXHQgIH1cblx0ICB2YXIgYXJyYXkgPSBrZXlzKG9iaik7XG5cdCAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXHQgIGFycmF5ID0gbWFwKGFycmF5LCBmdW5jdGlvbiAocGF0aCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLy8gSnVzdCB1c2Ugc3BsaXQgaWYgdGhlcmUgaXMgbm8gJ1snIGluIHBhdGhcblx0ICAgICAgLy8gZWc6IG9ialtcImxpc3RcIl0gPT4gcGFyc2UsIG9iai5saXN0ID0+IHNwbGl0XG5cdCAgICAgIHBhdGg6IHBhdGguaW5kZXhPZignWycpID4gLTEgPyBwYXJzZShwYXRoKSA6IHBhdGguc3BsaXQoJy4nKSxcblx0ICAgICAgZGF0YTogb2JqW3BhdGhdXG5cdCAgICB9O1xuXHQgIH0pO1xuXHQgIHZhciB0cmVlID0gY3JlYXRlVHJlZShkYXRhLCBhcnJheSk7XG5cdCAgdmFyIHZhbHVlID0gZ2V0Tm9kZVZhbHVlKHRyZWUpO1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcy1wbGFpbi1vYmplY3RcIik7XG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW1tdXRhYmxlLWRhdGEvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbi8qKlxuICogaXNBcnJheVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiB0b1N0cmluZ1xuICovXG5cbnZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBgdmFsYFxuICogaXMgYW4gYXJyYXkuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgaXNBcnJheShbXSk7XG4gKiAgICAgICAgLy8gPiB0cnVlXG4gKiAgICAgICAgaXNBcnJheShhcmd1bWVudHMpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqICAgICAgICBpc0FycmF5KCcnKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKlxuICogQHBhcmFtIHttaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiAhISB2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PSBzdHIuY2FsbCh2YWwpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzLWFycmF5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xudmFyIGhhc0RvbnRFbnVtQnVnID0gISh7IHRvU3RyaW5nOiBudWxsIH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xudmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGZ1bmN0aW9uICgpIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCdwcm90b3R5cGUnKTtcbnZhciBkb250RW51bXMgPSBbXG5cdCd0b1N0cmluZycsXG5cdCd0b0xvY2FsZVN0cmluZycsXG5cdCd2YWx1ZU9mJyxcblx0J2hhc093blByb3BlcnR5Jyxcblx0J2lzUHJvdG90eXBlT2YnLFxuXHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHQnY29uc3RydWN0b3InXG5dO1xudmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcbn07XG52YXIgYmxhY2tsaXN0ZWRLZXlzID0ge1xuXHQkY29uc29sZTogdHJ1ZSxcblx0JGZyYW1lOiB0cnVlLFxuXHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHQkZnJhbWVzOiB0cnVlLFxuXHQkcGFyZW50OiB0cnVlLFxuXHQkc2VsZjogdHJ1ZSxcblx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHQkd2luZG93OiB0cnVlXG59O1xudmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWJsYWNrbGlzdGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59KCkpO1xudmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdH1cblx0dHJ5IHtcblx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciBrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHR9XG5cblx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aGVLZXlzO1xufTtcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0cmV0dXJuIChPYmplY3Qua2V5cyhhcmd1bWVudHMpIHx8ICcnKS5sZW5ndGggPT09IDI7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1rZXlzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmdzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3MpIHtcblx0XHRpc0FyZ3MgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHRcdHRvU3RyLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmdzO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBuKGkpIHtcbiAgICAgICAgaWYgKGVbaV0pIHJldHVybiBlW2ldLmV4cG9ydHM7XG4gICAgICAgIHZhciByID0gZVtpXSA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgaWQ6IGksXG4gICAgICAgICAgICBsb2FkZWQ6ICExXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0W2ldLmNhbGwoci5leHBvcnRzLCByLCByLmV4cG9ydHMsIG4pLCByLmxvYWRlZCA9ICEwLCByLmV4cG9ydHM7XG4gICAgfVxuICAgIHZhciBlID0ge307XG4gICAgcmV0dXJuIG4ubSA9IHQsIG4uYyA9IGUsIG4ucCA9IFwiXCIsIG4oMCk7XG59KFsgZnVuY3Rpb24odCwgbiwgZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGkodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Ll9fZXNNb2R1bGUgPyB0IDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcih0KSB7XG4gICAgICAgIHJldHVybiAoMCwgb1tcImRlZmF1bHRcIl0pKGhbXCJkZWZhdWx0XCJdLnBhcnNlKHQpKS5yZWR1Y2UoZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNMZWFmICYmIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIG4gJiYgdC5wdXNoKG4pLCB0O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICB2YWx1ZTogITBcbiAgICB9KSwgbltcImRlZmF1bHRcIl0gPSByO1xuICAgIHZhciBzID0gZSgxKSwgbyA9IGkocyksIGwgPSBlKDIpLCBoID0gaShsKTtcbiAgICB0LmV4cG9ydHMgPSBuW1wiZGVmYXVsdFwiXTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSByZXF1aXJlKFwidHJhdmVyc2VcIik7XG59LCBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgKGZ1bmN0aW9uKHQsIGkpIHtcbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55eSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG4gPSBbIDEsIDMgXSwgZSA9IFsgMSwgNCBdLCBpID0gWyAyLCA2IF0sIHIgPSBbIDEsIDcgXSwgcyA9IFsgMSwgOCBdLCBvID0ge1xuICAgICAgICAgICAgICAgIHRyYWNlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgIHl5OiB7fSxcbiAgICAgICAgICAgICAgICBzeW1ib2xzXzoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogMixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbnM6IDMsXG4gICAgICAgICAgICAgICAgICAgIGU6IDQsXG4gICAgICAgICAgICAgICAgICAgIEVPRjogNSxcbiAgICAgICAgICAgICAgICAgICAgUFJPUEVSVFk6IDYsXG4gICAgICAgICAgICAgICAgICAgIHA6IDcsXG4gICAgICAgICAgICAgICAgICAgIE5VTUJFUjogOCxcbiAgICAgICAgICAgICAgICAgICAgXCIuXCI6IDksXG4gICAgICAgICAgICAgICAgICAgIFwiW1wiOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgdDogMTEsXG4gICAgICAgICAgICAgICAgICAgIFwiXVwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgU1RSSU5HOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgJGFjY2VwdDogMCxcbiAgICAgICAgICAgICAgICAgICAgJGVuZDogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVybWluYWxzXzoge1xuICAgICAgICAgICAgICAgICAgICAyOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIDU6IFwiRU9GXCIsXG4gICAgICAgICAgICAgICAgICAgIDY6IFwiUFJPUEVSVFlcIixcbiAgICAgICAgICAgICAgICAgICAgODogXCJOVU1CRVJcIixcbiAgICAgICAgICAgICAgICAgICAgOTogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBcIltcIixcbiAgICAgICAgICAgICAgICAgICAgMTI6IFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICAxMzogXCJTVFJJTkdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbnNfOiBbIDAsIFsgMywgMiBdLCBbIDQsIDIgXSwgWyA0LCAyIF0sIFsgNywgMiBdLCBbIDcsIDQgXSwgWyA3LCAwIF0sIFsgMTEsIDEgXSwgWyAxMSwgMSBdIF0sXG4gICAgICAgICAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24odCwgbiwgZSwgaSwgciwgcywgbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNbbCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwOiBzW2wgLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBzW2xdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTogc1tsXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA6IHNbbCAtIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IHNbbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHNbbF0uc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBzW2xdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YWJsZTogWyB7XG4gICAgICAgICAgICAgICAgICAgIDM6IDEsXG4gICAgICAgICAgICAgICAgICAgIDQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIDY6IG4sXG4gICAgICAgICAgICAgICAgICAgIDg6IGVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDE6IFsgMyBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDEsIDUgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogaSxcbiAgICAgICAgICAgICAgICAgICAgNzogNixcbiAgICAgICAgICAgICAgICAgICAgOTogcixcbiAgICAgICAgICAgICAgICAgICAgMTA6IHNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IGksXG4gICAgICAgICAgICAgICAgICAgIDc6IDksXG4gICAgICAgICAgICAgICAgICAgIDk6IHIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBzXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxOiBbIDIsIDEgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCAyIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICA2OiBuLFxuICAgICAgICAgICAgICAgICAgICA4OiBlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA4OiBbIDEsIDEzIF0sXG4gICAgICAgICAgICAgICAgICAgIDExOiAxMSxcbiAgICAgICAgICAgICAgICAgICAgMTM6IFsgMSwgMTIgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCAzIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgNCBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxMjogWyAxLCAxNCBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxMjogWyAyLCA3IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDIsIDggXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogaSxcbiAgICAgICAgICAgICAgICAgICAgNzogMTUsXG4gICAgICAgICAgICAgICAgICAgIDk6IHIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBzXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDUgXVxuICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDEgXSxcbiAgICAgICAgICAgICAgICAgICAgNjogWyAyLCAyIF0sXG4gICAgICAgICAgICAgICAgICAgIDk6IFsgMiwgMyBdLFxuICAgICAgICAgICAgICAgICAgICAxMDogWyAyLCA0IF0sXG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDIsIDcgXSxcbiAgICAgICAgICAgICAgICAgICAgMTM6IFsgMiwgOCBdLFxuICAgICAgICAgICAgICAgICAgICAxNTogWyAyLCA1IF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuLnJlY292ZXJhYmxlKSB0aHJvdyBuZXcgRXJyb3IodCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2UodCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJzZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9IHAubGV4KCkgfHwgeSwgXCJudW1iZXJcIiAhPSB0eXBlb2YgdCAmJiAodCA9IGUuc3ltYm9sc19bdF0gfHwgdCksIHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLCBpID0gWyAwIF0sIHIgPSBbIG51bGwgXSwgcyA9IFtdLCBvID0gdGhpcy50YWJsZSwgbCA9IFwiXCIsIGggPSAwLCBjID0gMCwgYSA9IDAsIHUgPSAyLCB5ID0gMSwgZiA9IHMuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBwID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKSwgZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHl5OiB7fVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIHRoaXMueXkpIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBtKSAmJiAoZy55eVttXSA9IHRoaXMueXlbbV0pO1xuICAgICAgICAgICAgICAgICAgICBwLnNldElucHV0KHQsIGcueXkpLCBnLnl5LmxleGVyID0gcCwgZy55eS5wYXJzZXIgPSB0aGlzLCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBwLnl5bGxvYyAmJiAocC55eWxsb2MgPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfID0gcC55eWxsb2M7XG4gICAgICAgICAgICAgICAgICAgIHMucHVzaChfKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBwLm9wdGlvbnMgJiYgcC5vcHRpb25zLnJhbmdlcztcbiAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBnLnl5LnBhcnNlRXJyb3IgPyB0aGlzLnBhcnNlRXJyb3IgPSBnLnl5LnBhcnNlRXJyb3IgOiB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdiwgYiwgaywgeCwgdywgRSwgUywgQSwgSSwgUCA9IHt9OyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoayA9IGlbaS5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1trXSA/IHggPSB0aGlzLmRlZmF1bHRBY3Rpb25zW2tdIDogKChudWxsID09PSB2IHx8IFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHYpICYmICh2ID0gbigpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gb1trXSAmJiBvW2tdW3ZdKSwgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgeCB8fCAheC5sZW5ndGggfHwgIXhbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoRSBpbiBvW2tdKSB0aGlzLnRlcm1pbmFsc19bRV0gJiYgRSA+IHUgJiYgSS5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW0VdICsgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQgPSBwLnNob3dQb3NpdGlvbiA/IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChoICsgMSkgKyBcIjpcXG5cIiArIHAuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIEkuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3ZdIHx8IHYpICsgXCInXCIgOiBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoaCArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAodiA9PSB5ID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1t2XSB8fCB2KSArIFwiJ1wiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUVycm9yKCQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcC5tYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1t2XSB8fCB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiBwLnl5bGluZW5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IF8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFswXSBpbnN0YW5jZW9mIEFycmF5ICYmIHgubGVuZ3RoID4gMSkgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgayArIFwiLCB0b2tlbjogXCIgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoeFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKHYpLCByLnB1c2gocC55eXRleHQpLCBzLnB1c2gocC55eWxsb2MpLCBpLnB1c2goeFsxXSksIHYgPSBudWxsLCBiID8gKHYgPSBiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gbnVsbCkgOiAoYyA9IHAueXlsZW5nLCBsID0gcC55eXRleHQsIGggPSBwLnl5bGluZW5vLCBfID0gcC55eWxsb2MsIGEgPiAwICYmIGEtLSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTID0gdGhpcy5wcm9kdWN0aW9uc19beFsxXV1bMV0sIFAuJCA9IHJbci5sZW5ndGggLSBTXSwgUC5fJCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogc1tzLmxlbmd0aCAtIChTIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHNbcy5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogc1tzLmxlbmd0aCAtIChTIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBzW3MubGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkICYmIChQLl8kLnJhbmdlID0gWyBzW3MubGVuZ3RoIC0gKFMgfHwgMSldLnJhbmdlWzBdLCBzW3MubGVuZ3RoIC0gMV0ucmFuZ2VbMV0gXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoUCwgWyBsLCBjLCBoLCBnLnl5LCB4WzFdLCByLCBzIF0uY29uY2F0KGYpKSwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdykgcmV0dXJuIHc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUyAmJiAoaSA9IGkuc2xpY2UoMCwgLTEgKiBTICogMiksIHIgPSByLnNsaWNlKDAsIC0xICogUyksIHMgPSBzLnNsaWNlKDAsIC0xICogUykpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2godGhpcy5wcm9kdWN0aW9uc19beFsxXV1bMF0pLCByLnB1c2goUC4kKSwgcy5wdXNoKFAuXyQpLCBBID0gb1tpW2kubGVuZ3RoIC0gMl1dW2lbaS5sZW5ndGggLSAxXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIEVPRjogMSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnl5LnBhcnNlcikgdGhyb3cgbmV3IEVycm9yKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcih0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnl5ID0gbiB8fCB0aGlzLnl5IHx8IHt9LCB0aGlzLl9pbnB1dCA9IHQsIHRoaXMuX21vcmUgPSB0aGlzLl9iYWNrdHJhY2sgPSB0aGlzLmRvbmUgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwLCB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiLCB0aGlzLmNvbmRpdGlvblN0YWNrID0gWyBcIklOSVRJQUxcIiBdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbIDAsIDAgXSksIHRoaXMub2Zmc2V0ID0gMCwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IHQsIHRoaXMueXlsZW5nKyssIHRoaXMub2Zmc2V0KyssIHRoaXMubWF0Y2ggKz0gdCwgdGhpcy5tYXRjaGVkICs9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPyAodGhpcy55eWxpbmVubysrLCB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKykgOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgdGhpcy55eWxsb2MucmFuZ2VbMV0rKywgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1bnB1dDogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0Lmxlbmd0aCwgZSA9IHQuc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdCArIHRoaXMuX2lucHV0LCB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBuKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCAtPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKSwgdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5sZW5ndGggLSAxICYmICh0aGlzLnl5bGluZW5vIC09IGUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogZSA/IChlLmxlbmd0aCA9PT0gaS5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIGlbaS5sZW5ndGggLSBlLmxlbmd0aF0ubGVuZ3RoIC0gZVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFsgclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbiBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aCwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9yZSA9ICEwLCB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPyAodGhpcy5fYmFja3RyYWNrID0gITAsIHRoaXMpIDogdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVzczogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzdElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQubGVuZ3RoIDwgMjAgJiYgKHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gdC5sZW5ndGgpKSwgKHQuc3Vic3RyKDAsIDIwKSArICh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMucGFzdElucHV0KCksIG4gPSBuZXcgQXJyYXkodC5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgbiArIFwiXlwiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSwgaSwgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyICYmIChyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGluZW5vOiB0aGlzLnl5bGluZW5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIChyLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApKSksIGkgPSB0WzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpICYmICh0aGlzLnl5bGluZW5vICs9IGkubGVuZ3RoKSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogaSA/IGlbaS5sZW5ndGggLSAxXS5sZW5ndGggLSBpW2kubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyB0WzBdLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy55eXRleHQgKz0gdFswXSwgdGhpcy5tYXRjaCArPSB0WzBdLCB0aGlzLm1hdGNoZXMgPSB0LCB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFsgdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSAhMSwgdGhpcy5fYmFja3RyYWNrID0gITEsIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UodFswXS5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCArPSB0WzBdLCBlID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgbiwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQgJiYgKHRoaXMuZG9uZSA9ICExKSwgZSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBpbiByKSB0aGlzW3NdID0gcltzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgfHwgKHRoaXMuZG9uZSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0LCBuLCBlLCBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSB8fCAodGhpcy55eXRleHQgPSBcIlwiLCB0aGlzLm1hdGNoID0gXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gdGhpcy5fY3VycmVudFJ1bGVzKCksIHMgPSAwOyBzIDwgci5sZW5ndGg7IHMrKykgaWYgKGUgPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3Jbc11dKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlICYmICghbiB8fCBlWzBdLmxlbmd0aCA+IG5bMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID0gZSwgaSA9IHMsIHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPSB0aGlzLnRlc3RfbWF0Y2goZSwgcltzXSksIHQgIT09ICExKSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuID8gKHQgPSB0aGlzLnRlc3RfbWF0Y2gobiwgcltpXSksIHQgIT09ICExID8gdCA6ICExKSA6IFwiXCIgPT09IHRoaXMuX2lucHV0ID8gdGhpcy5FT0YgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxleDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPyB0IDogdGhpcy5sZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA+IDAgPyB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpIDogdGhpcy5jb25kaXRpb25TdGFja1swXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID8gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXMgOiB0aGlzLmNvbmRpdGlvbnMuSU5JVElBTC5ydWxlcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnModCB8fCAwKSwgdCA+PSAwID8gdGhpcy5jb25kaXRpb25TdGFja1t0XSA6IFwiSU5JVElBTFwiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4odCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge30sXG4gICAgICAgICAgICAgICAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uKHQsIG4sIGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gOTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFsgL14oPzpcIig/OlxcXFxcInxbXlxcXCJdKSpcInwnKD86XFxcXCd8W15cXCddKSonKS8sIC9eKD86W2EtekEtWl9cXCRdW1xcd19cXCRdKikvLCAvXig/OjB8WzEtOV1cXGQqKS8sIC9eKD86XFxbKS8sIC9eKD86XFxdKS8sIC9eKD86XFwuKS8sIC9eKD86JCkvLCAvXig/Oi4pLyBdLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBJTklUSUFMOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNyBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICByZXR1cm4gby5sZXhlciA9IGwsIHQucHJvdG90eXBlID0gbywgby5QYXJzZXIgPSB0LCBuZXcgdCgpO1xuICAgICAgICB9KCk7XG4gICAgICAgIG4ucGFyc2VyID0gciwgbi5QYXJzZXIgPSByLlBhcnNlciwgbi5wYXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHIucGFyc2UuYXBwbHkociwgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbi5tYWluID0gZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgaVsxXSB8fCAoY29uc29sZS5sb2coXCJVc2FnZTogXCIgKyBpWzBdICsgXCIgRklMRVwiKSwgdC5leGl0KDEpKTtcbiAgICAgICAgICAgIHZhciByID0gZSg1KS5yZWFkRmlsZVN5bmMoZSg2KS5ub3JtYWxpemUoaVsxXSksIFwidXRmOFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuLnBhcnNlci5wYXJzZShyKTtcbiAgICAgICAgfSwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgaSAmJiBlLmNbMF0gPT09IGkgJiYgbi5tYWluKHQuYXJndi5zbGljZSgxKSk7XG4gICAgfSkuY2FsbChuLCBlKDMpLCBlKDQpKHQpKTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICBjID0gITEsIG8ubGVuZ3RoID8gaCA9IG8uY29uY2F0KGgpIDogYSA9IC0xLCBoLmxlbmd0aCAmJiBpKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGkoKSB7XG4gICAgICAgIGlmICghYykge1xuICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGUpO1xuICAgICAgICAgICAgYyA9ICEwO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IGgubGVuZ3RoOyBuOyApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG8gPSBoLCBoID0gW107ICsrYSA8IG47ICkgbyAmJiBvW2FdLnJ1bigpO1xuICAgICAgICAgICAgICAgIGEgPSAtMSwgbiA9IGgubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbyA9IG51bGwsIGMgPSAhMSwgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHIodCwgbikge1xuICAgICAgICB0aGlzLmZ1biA9IHQsIHRoaXMuYXJyYXkgPSBuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzKCkge31cbiAgICB2YXIgbywgbCA9IHQuZXhwb3J0cyA9IHt9LCBoID0gW10sIGMgPSAhMSwgYSA9IC0xO1xuICAgIGwubmV4dFRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBuID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykgbltlIC0gMV0gPSBhcmd1bWVudHNbZV07XG4gICAgICAgIGgucHVzaChuZXcgcih0LCBuKSksIDEgIT09IGgubGVuZ3RoIHx8IGMgfHwgc2V0VGltZW91dChpLCAwKTtcbiAgICB9LCByLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG4gICAgfSwgbC50aXRsZSA9IFwiYnJvd3NlclwiLCBsLmJyb3dzZXIgPSAhMCwgbC5lbnYgPSB7fSwgbC5hcmd2ID0gW10sIGwudmVyc2lvbiA9IFwiXCIsIFxuICAgIGwudmVyc2lvbnMgPSB7fSwgbC5vbiA9IHMsIGwuYWRkTGlzdGVuZXIgPSBzLCBsLm9uY2UgPSBzLCBsLm9mZiA9IHMsIGwucmVtb3ZlTGlzdGVuZXIgPSBzLCBcbiAgICBsLnJlbW92ZUFsbExpc3RlbmVycyA9IHMsIGwuZW1pdCA9IHMsIGwuYmluZGluZyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfSwgbC5jd2QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiL1wiO1xuICAgIH0sIGwuY2hkaXIgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9LCBsLnVtYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG59LCBmdW5jdGlvbih0LCBuKSB7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdC53ZWJwYWNrUG9seWZpbGwgfHwgKHQuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fSwgdC5wYXRocyA9IFtdLCB0LmNoaWxkcmVuID0gW10sIFxuICAgICAgICB0LndlYnBhY2tQb2x5ZmlsbCA9IDEpLCB0O1xuICAgIH07XG59LCBmdW5jdGlvbih0LCBuKSB7fSwgZnVuY3Rpb24odCwgbiwgZSkge1xuICAgIChmdW5jdGlvbih0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUodCwgbikge1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IDAsIGkgPSB0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0W2ldO1xuICAgICAgICAgICAgICAgIFwiLlwiID09PSByID8gdC5zcGxpY2UoaSwgMSkgOiBcIi4uXCIgPT09IHIgPyAodC5zcGxpY2UoaSwgMSksIGUrKykgOiBlICYmICh0LnNwbGljZShpLCAxKSwgXG4gICAgICAgICAgICAgICAgZS0tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuKSBmb3IgKDtlLS07IGUpIHQudW5zaGlmdChcIi4uXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaSh0LCBuKSB7XG4gICAgICAgICAgICBpZiAodC5maWx0ZXIpIHJldHVybiB0LmZpbHRlcihuKTtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSBbXSwgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSBuKHRbaV0sIGksIHQpICYmIGUucHVzaCh0W2ldKTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC8sIHMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICByZXR1cm4gci5leGVjKHQpLnNsaWNlKDEpO1xuICAgICAgICB9O1xuICAgICAgICBuLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBcIlwiLCByID0gITEsIHMgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgcyA+PSAtMSAmJiAhcjsgcy0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBzID49IDAgPyBhcmd1bWVudHNbc10gOiB0LmN3ZCgpO1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBvKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3NcIik7XG4gICAgICAgICAgICAgICAgbyAmJiAobiA9IG8gKyBcIi9cIiArIG4sIHIgPSBcIi9cIiA9PT0gby5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG4gPSBlKGkobi5zcGxpdChcIi9cIiksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF0O1xuICAgICAgICAgICAgfSksICFyKS5qb2luKFwiL1wiKSwgKHIgPyBcIi9cIiA6IFwiXCIpICsgbiB8fCBcIi5cIjtcbiAgICAgICAgfSwgbi5ub3JtYWxpemUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB2YXIgciA9IG4uaXNBYnNvbHV0ZSh0KSwgcyA9IFwiL1wiID09PSBvKHQsIC0xKTtcbiAgICAgICAgICAgIHJldHVybiB0ID0gZShpKHQuc3BsaXQoXCIvXCIpLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhdDtcbiAgICAgICAgICAgIH0pLCAhcikuam9pbihcIi9cIiksIHQgfHwgciB8fCAodCA9IFwiLlwiKSwgdCAmJiBzICYmICh0ICs9IFwiL1wiKSwgKHIgPyBcIi9cIiA6IFwiXCIpICsgdDtcbiAgICAgICAgfSwgbi5pc0Fic29sdXRlID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiL1wiID09PSB0LmNoYXJBdCgwKTtcbiAgICAgICAgfSwgbi5qb2luID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgICAgICByZXR1cm4gbi5ub3JtYWxpemUoaSh0LCBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5nc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH0pLmpvaW4oXCIvXCIpKTtcbiAgICAgICAgfSwgbi5yZWxhdGl2ZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGkodCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGggJiYgXCJcIiA9PT0gdFtuXTsgbisrKSA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IHQubGVuZ3RoIC0gMTsgZSA+PSAwICYmIFwiXCIgPT09IHRbZV07IGUtLSkgO1xuICAgICAgICAgICAgICAgIHJldHVybiBuID4gZSA/IFtdIDogdC5zbGljZShuLCBlIC0gbiArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCA9IG4ucmVzb2x2ZSh0KS5zdWJzdHIoMSksIGUgPSBuLnJlc29sdmUoZSkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IGkodC5zcGxpdChcIi9cIikpLCBzID0gaShlLnNwbGl0KFwiL1wiKSksIG8gPSBNYXRoLm1pbihyLmxlbmd0aCwgcy5sZW5ndGgpLCBsID0gbywgaCA9IDA7IG8gPiBoOyBoKyspIGlmIChyW2hdICE9PSBzW2hdKSB7XG4gICAgICAgICAgICAgICAgbCA9IGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gW10sIGggPSBsOyBoIDwgci5sZW5ndGg7IGgrKykgYy5wdXNoKFwiLi5cIik7XG4gICAgICAgICAgICByZXR1cm4gYyA9IGMuY29uY2F0KHMuc2xpY2UobCkpLCBjLmpvaW4oXCIvXCIpO1xuICAgICAgICB9LCBuLnNlcCA9IFwiL1wiLCBuLmRlbGltaXRlciA9IFwiOlwiLCBuLmRpcm5hbWUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHModCksIGUgPSBuWzBdLCBpID0gblsxXTtcbiAgICAgICAgICAgIHJldHVybiBlIHx8IGkgPyAoaSAmJiAoaSA9IGkuc3Vic3RyKDAsIGkubGVuZ3RoIC0gMSkpLCBlICsgaSkgOiBcIi5cIjtcbiAgICAgICAgfSwgbi5iYXNlbmFtZSA9IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgIHZhciBlID0gcyh0KVsyXTtcbiAgICAgICAgICAgIHJldHVybiBuICYmIGUuc3Vic3RyKC0xICogbi5sZW5ndGgpID09PSBuICYmIChlID0gZS5zdWJzdHIoMCwgZS5sZW5ndGggLSBuLmxlbmd0aCkpLCBcbiAgICAgICAgICAgIGU7XG4gICAgICAgIH0sIG4uZXh0bmFtZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBzKHQpWzNdO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbyA9IFwiYlwiID09PSBcImFiXCIuc3Vic3RyKC0xKSA/IGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnN1YnN0cihuLCBlKTtcbiAgICAgICAgfSA6IGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICAgICAgICAgIHJldHVybiAwID4gbiAmJiAobiA9IHQubGVuZ3RoICsgbiksIHQuc3Vic3RyKG4sIGUpO1xuICAgICAgICB9O1xuICAgIH0pLmNhbGwobiwgZSgzKSk7XG59IF0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1wYXRoLXBhcnNlL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHRyYXZlcnNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG5ldyBUcmF2ZXJzZShvYmopO1xufTtcblxuZnVuY3Rpb24gVHJhdmVyc2UgKG9iaikge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG59XG5cblRyYXZlcnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocHMpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHBzW2ldO1xuICAgICAgICBpZiAoIW5vZGUgfHwgIWhhc093blByb3BlcnR5LmNhbGwobm9kZSwga2V5KSkge1xuICAgICAgICAgICAgbm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChwcykge1xuICAgIHZhciBub2RlID0gdGhpcy52YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArKykge1xuICAgICAgICB2YXIga2V5ID0gcHNbaV07XG4gICAgICAgIGlmICghbm9kZSB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHBzLCB2YWx1ZSkge1xuICAgIHZhciBub2RlID0gdGhpcy52YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aCAtIDE7IGkgKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHBzW2ldO1xuICAgICAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwobm9kZSwga2V5KSkgbm9kZVtrZXldID0ge307XG4gICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgfVxuICAgIG5vZGVbcHNbaV1dID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChjYikge1xuICAgIHJldHVybiB3YWxrKHRoaXMudmFsdWUsIGNiLCB0cnVlKTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgdGhpcy52YWx1ZSA9IHdhbGsodGhpcy52YWx1ZSwgY2IsIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoY2IsIGluaXQpIHtcbiAgICB2YXIgc2tpcCA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDE7XG4gICAgdmFyIGFjYyA9IHNraXAgPyB0aGlzLnZhbHVlIDogaW5pdDtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUm9vdCB8fCAhc2tpcCkge1xuICAgICAgICAgICAgYWNjID0gY2IuY2FsbCh0aGlzLCBhY2MsIHgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5wYXRocyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWNjID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGFjYy5wdXNoKHRoaXMucGF0aCk7IFxuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUubm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFjYyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICBhY2MucHVzaCh0aGlzLm5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudHMgPSBbXSwgbm9kZXMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gKGZ1bmN0aW9uIGNsb25lIChzcmMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50c1tpXSA9PT0gc3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgc3JjICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZHN0ID0gY29weShzcmMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJlbnRzLnB1c2goc3JjKTtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZHN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yRWFjaChvYmplY3RLZXlzKHNyYyksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGNsb25lKHNyY1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gZHN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH0pKHRoaXMudmFsdWUpO1xufTtcblxuZnVuY3Rpb24gd2FsayAocm9vdCwgY2IsIGltbXV0YWJsZSkge1xuICAgIHZhciBwYXRoID0gW107XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgYWxpdmUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiAoZnVuY3Rpb24gd2Fsa2VyIChub2RlXykge1xuICAgICAgICB2YXIgbm9kZSA9IGltbXV0YWJsZSA/IGNvcHkobm9kZV8pIDogbm9kZV87XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHZhciBrZWVwR29pbmcgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgbm9kZSA6IG5vZGUsXG4gICAgICAgICAgICBub2RlXyA6IG5vZGVfLFxuICAgICAgICAgICAgcGF0aCA6IFtdLmNvbmNhdChwYXRoKSxcbiAgICAgICAgICAgIHBhcmVudCA6IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHBhcmVudHMgOiBwYXJlbnRzLFxuICAgICAgICAgICAga2V5IDogcGF0aC5zbGljZSgtMSlbMF0sXG4gICAgICAgICAgICBpc1Jvb3QgOiBwYXRoLmxlbmd0aCA9PT0gMCxcbiAgICAgICAgICAgIGxldmVsIDogcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBjaXJjdWxhciA6IG51bGwsXG4gICAgICAgICAgICB1cGRhdGUgOiBmdW5jdGlvbiAoeCwgc3RvcEhlcmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmlzUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wYXJlbnQubm9kZVtzdGF0ZS5rZXldID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhdGUubm9kZSA9IHg7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3BIZXJlKSBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsZXRlJyA6IGZ1bmN0aW9uIChzdG9wSGVyZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5wYXJlbnQubm9kZVtzdGF0ZS5rZXldO1xuICAgICAgICAgICAgICAgIGlmIChzdG9wSGVyZSkga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24gKHN0b3BIZXJlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoc3RhdGUucGFyZW50Lm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnBhcmVudC5ub2RlLnNwbGljZShzdGF0ZS5rZXksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLnBhcmVudC5ub2RlW3N0YXRlLmtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdG9wSGVyZSkga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5cyA6IG51bGwsXG4gICAgICAgICAgICBiZWZvcmUgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMuYmVmb3JlID0gZiB9LFxuICAgICAgICAgICAgYWZ0ZXIgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMuYWZ0ZXIgPSBmIH0sXG4gICAgICAgICAgICBwcmUgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMucHJlID0gZiB9LFxuICAgICAgICAgICAgcG9zdCA6IGZ1bmN0aW9uIChmKSB7IG1vZGlmaWVycy5wb3N0ID0gZiB9LFxuICAgICAgICAgICAgc3RvcCA6IGZ1bmN0aW9uICgpIHsgYWxpdmUgPSBmYWxzZSB9LFxuICAgICAgICAgICAgYmxvY2sgOiBmdW5jdGlvbiAoKSB7IGtlZXBHb2luZyA9IGZhbHNlIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGlmICghYWxpdmUpIHJldHVybiBzdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZS5ub2RlID09PSAnb2JqZWN0JyAmJiBzdGF0ZS5ub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5rZXlzIHx8IHN0YXRlLm5vZGVfICE9PSBzdGF0ZS5ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmtleXMgPSBvYmplY3RLZXlzKHN0YXRlLm5vZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTGVhZiA9IHN0YXRlLmtleXMubGVuZ3RoID09IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldLm5vZGVfID09PSBub2RlXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2lyY3VsYXIgPSBwYXJlbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xlYWYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0YXRlLmtleXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0ZS5ub3RMZWFmID0gIXN0YXRlLmlzTGVhZjtcbiAgICAgICAgICAgIHN0YXRlLm5vdFJvb3QgPSAhc3RhdGUuaXNSb290O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gdXNlIHJldHVybiB2YWx1ZXMgdG8gdXBkYXRlIGlmIGRlZmluZWRcbiAgICAgICAgdmFyIHJldCA9IGNiLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQgJiYgc3RhdGUudXBkYXRlKSBzdGF0ZS51cGRhdGUocmV0KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChtb2RpZmllcnMuYmVmb3JlKSBtb2RpZmllcnMuYmVmb3JlLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFrZWVwR29pbmcpIHJldHVybiBzdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUubm9kZSA9PSAnb2JqZWN0J1xuICAgICAgICAmJiBzdGF0ZS5ub2RlICE9PSBudWxsICYmICFzdGF0ZS5jaXJjdWxhcikge1xuICAgICAgICAgICAgcGFyZW50cy5wdXNoKHN0YXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yRWFjaChzdGF0ZS5rZXlzLCBmdW5jdGlvbiAoa2V5LCBpKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmUpIG1vZGlmaWVycy5wcmUuY2FsbChzdGF0ZSwgc3RhdGUubm9kZVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHdhbGtlcihzdGF0ZS5ub2RlW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChpbW11dGFibGUgJiYgaGFzT3duUHJvcGVydHkuY2FsbChzdGF0ZS5ub2RlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm5vZGVba2V5XSA9IGNoaWxkLm5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoaWxkLmlzTGFzdCA9IGkgPT0gc3RhdGUua2V5cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGNoaWxkLmlzRmlyc3QgPSBpID09IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wb3N0KSBtb2RpZmllcnMucG9zdC5jYWxsKHN0YXRlLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyZW50cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG1vZGlmaWVycy5hZnRlcikgbW9kaWZpZXJzLmFmdGVyLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0pKHJvb3QpLm5vZGU7XG59XG5cbmZ1bmN0aW9uIGNvcHkgKHNyYykge1xuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiBzcmMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGRzdDtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc0FycmF5KHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRGF0ZShzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgRGF0ZShzcmMuZ2V0VGltZSA/IHNyYy5nZXRUaW1lKCkgOiBzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUmVnRXhwKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IG5ldyBSZWdFeHAoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Vycm9yKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IHsgbWVzc2FnZTogc3JjLm1lc3NhZ2UgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW4oc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IEJvb2xlYW4oc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bWJlcihzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgTnVtYmVyKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmcoc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IFN0cmluZyhzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE9iamVjdC5jcmVhdGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICBkc3QgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihzcmMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcmMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZHN0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPVxuICAgICAgICAgICAgICAgIChzcmMuY29uc3RydWN0b3IgJiYgc3JjLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICB8fCBzcmMuX19wcm90b19fXG4gICAgICAgICAgICAgICAgfHwge31cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHZhciBUID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICBULnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgICAgICAgZHN0ID0gbmV3IFQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvckVhY2gob2JqZWN0S2V5cyhzcmMpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRzdDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gc3JjO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMgKG9iaikge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSByZXMucHVzaChrZXkpXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIHRvUyAob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSB9XG5mdW5jdGlvbiBpc0RhdGUgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJyB9XG5mdW5jdGlvbiBpc1JlZ0V4cCAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgfVxuZnVuY3Rpb24gaXNFcnJvciAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4gKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJyB9XG5mdW5jdGlvbiBpc051bWJlciAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgfVxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nIH1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkgKHhzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICh4cywgZm4pIHtcbiAgICBpZiAoeHMuZm9yRWFjaCkgcmV0dXJuIHhzLmZvckVhY2goZm4pXG4gICAgZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZuKHhzW2ldLCBpLCB4cyk7XG4gICAgfVxufTtcblxuZm9yRWFjaChvYmplY3RLZXlzKFRyYXZlcnNlLnByb3RvdHlwZSksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0cmF2ZXJzZVtrZXldID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIHQgPSBuZXcgVHJhdmVyc2Uob2JqKTtcbiAgICAgICAgcmV0dXJuIHRba2V5XS5hcHBseSh0LCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG9iajtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90cmF2ZXJzZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==