webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(17);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _immutableData = __webpack_require__(49);
	
	__webpack_require__(80);
	
	var _reactAddonsPerf = __webpack_require__(57);
	
	var Perf = _interopRequireWildcard(_reactAddonsPerf);
	
	var _classnames = __webpack_require__(42);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reselect = __webpack_require__(78);
	
	var _index = __webpack_require__(14);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var ID = 0;
	var LIST = [];
	var SIZE = 5;
	for (var i = 0; i < SIZE; i++) {
	  LIST.push({
	    text: 'task ' + i,
	    completed: false,
	    id: ID++
	  });
	}
	
	var store = {
	  todolist: {
	    list: LIST,
	    add: function add(text, e) {
	      return {
	        list: [{
	          text: text,
	          completed: false,
	          id: ID++
	        }].concat(_toConsumableArray(e.store.list))
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
	    edit: function edit(todo, text, e) {
	      var index = e.store.list.indexOf(todo);
	      return {
	        list: (0, _immutableData.set)(e.store.list, _defineProperty({}, index + '.text', text))
	      };
	    },
	
	    filter: 'all',
	    changeFilter: function changeFilter(filter) {
	      return {
	        filter: filter
	      };
	    },
	    clearCompleted: function clearCompleted(e) {
	      return {
	        list: e.store.list.filter(function (item) {
	          return !item.completed;
	        })
	      };
	    },
	    toggle: function toggle(e) {
	      var activeTodosCount = getActiveTodosCount(e.store.list);
	      if (activeTodosCount === 0 || e.store.list.length === activeTodosCount) {
	        return {
	          list: e.store.list.map(function (todo) {
	            return _extends({}, todo, {
	              completed: !todo.completed
	            });
	          })
	        };
	      }
	      return {
	        list: e.store.list.map(function (todo) {
	          return todo.completed ? todo : _extends({}, todo, {
	            completed: true
	          });
	        })
	      };
	    }
	  }
	};
	
	var getVisibleTodos = (0, _reselect.createSelector)([function (obj) {
	  return obj;
	}], function (_ref) {
	  var list = _ref.list;
	  var filter = _ref.filter;
	
	  switch (filter) {
	    case 'all':
	      return list;
	    case 'active':
	      return list.filter(function (todo) {
	        return !todo.completed;
	      });
	    case 'completed':
	      return list.filter(function (todo) {
	        return todo.completed;
	      });
	  }
	});
	
	var getActiveTodosCount = (0, _reselect.createSelector)([function (obj) {
	  return obj;
	}], function (list) {
	  return list.filter(function (t) {
	    return !t.completed;
	  }).length;
	});
	
	var TodoList = function TodoList(_ref2) {
	  var todolist = _ref2.todolist;
	  var change = todolist.change;
	  var del = todolist.del;
	  var add = todolist.add;
	  var filter = todolist.filter;
	  var list = todolist.list;
	  var changeFilter = todolist.changeFilter;
	  var clearCompleted = todolist.clearCompleted;
	  var toggle = todolist.toggle;
	  var edit = todolist.edit;
	
	  var filterList = getVisibleTodos({
	    list: list,
	    filter: filter
	  });
	  var todoProps = { change: change, del: del, edit: edit };
	  var footerProps = { list: list, filter: filter, changeFilter: changeFilter, clearCompleted: clearCompleted };
	  var toggleAllProps = { list: list, toggle: toggle };
	  return _react2.default.createElement(
	    'div',
	    { className: 'todoapp' },
	    _react2.default.createElement(
	      'header',
	      { className: 'header' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'todos'
	      )
	    ),
	    _react2.default.createElement(TodoInput, {
	      type: 'new-todo',
	      onSave: function onSave(text) {
	        return add(text);
	      }
	    }),
	    _react2.default.createElement(
	      'div',
	      { className: 'main' },
	      _react2.default.createElement(ToggleAll, toggleAllProps),
	      _react2.default.createElement(
	        'ul',
	        { className: 'todo-list' },
	        filterList.map(function (todo) {
	          return _react2.default.createElement(Todo, _extends({ key: todo.id, todo: todo }, todoProps));
	        })
	      ),
	      _react2.default.createElement(Footer, footerProps)
	    )
	  );
	};
	
	var Todo = function (_Component) {
	  _inherits(Todo, _Component);
	
	  function Todo(props) {
	    _classCallCheck(this, Todo);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).call(this, props));
	
	    _this.handleDoubleClick = function () {
	      _this.setState({
	        type: 'edit'
	      });
	    };
	
	    _this.handleSave = function (text) {
	      _this.props.edit(_this.props.todo, text);
	      _this.setState({
	        type: 'text'
	      });
	    };
	
	    _this.state = {
	      type: 'text'
	    };
	    return _this;
	  }
	
	  _createClass(Todo, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return nextProps.todo !== this.props.todo || nextState.type !== this.state.type;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var todo = _props.todo;
	      var change = _props.change;
	      var del = _props.del;
	      var edit = _props.edit;
	
	      return _react2.default.createElement(
	        'li',
	        { className: (0, _classnames2.default)({
	            completed: todo.completed
	          }) },
	        this.state.type === 'edit' ? _react2.default.createElement(TodoInput, {
	          text: todo.text,
	          type: 'edit-todo',
	          onSave: this.handleSave
	        }) : _react2.default.createElement(
	          'div',
	          { className: 'view' },
	          _react2.default.createElement('input', {
	            className: 'toggle',
	            type: 'checkbox',
	            checked: todo.completed,
	            onChange: function onChange() {
	              return change(todo);
	            } }),
	          _react2.default.createElement(
	            'label',
	            { onDoubleClick: this.handleDoubleClick },
	            todo.text
	          ),
	          _react2.default.createElement('button', { className: 'destroy', onClick: function onClick() {
	              return del(todo);
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Todo;
	}(_react.Component);
	
	var TodoInput = function (_Component2) {
	  _inherits(TodoInput, _Component2);
	
	  function TodoInput(props) {
	    _classCallCheck(this, TodoInput);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoInput).call(this, props));
	
	    _this2.handleChange = function (e) {
	      _this2.setState({
	        text: e.target.value
	      });
	    };
	
	    _this2.handleSubmit = function (e) {
	      e.preventDefault();
	      var text = _this2.state.text;
	      if (!text) {
	        return;
	      }
	      _this2.props.onSave(text);
	      if (_this2.props.type === 'new-todo') {
	        _this2.setState({
	          text: ''
	        });
	      }
	    };
	
	    _this2.handleBlur = function (e) {
	      if (_this2.props.type === 'edit-todo') {
	        var text = _this2.state.text;
	        _this2.props.onSave(text);
	      }
	    };
	
	    _this2.state = {
	      text: '' || props.text
	    };
	    return _this2;
	  }
	
	  _createClass(TodoInput, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.state.text !== nextState.text;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.handleSubmit },
	        _react2.default.createElement('input', { type: 'text',
	          className: 'new-todo',
	          autoFocus: 'true',
	          placeholder: 'What needs to be done?',
	          value: this.state.text,
	          onChange: this.handleChange,
	          onBlur: this.handleBlur
	        })
	      );
	    }
	  }]);
	
	  return TodoInput;
	}(_react.Component);
	
	var Footer = function (_Component3) {
	  _inherits(Footer, _Component3);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var list = _props2.list;
	      var filter = _props2.filter;
	      var changeFilter = _props2.changeFilter;
	      var clearCompleted = _props2.clearCompleted;
	
	      var activeCount = getActiveTodosCount(list);
	      var completedCount = list.length - activeCount;
	      return _react2.default.createElement(
	        'footer',
	        { className: 'footer' },
	        _react2.default.createElement(
	          'span',
	          { className: 'todo-count' },
	          _react2.default.createElement(
	            'strong',
	            null,
	            activeCount || 'No'
	          ),
	          ' ',
	          activeCount === 1 ? 'item' : 'items',
	          ' left'
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'filters' },
	          ['all', 'active', 'completed'].map(function (item) {
	            return _react2.default.createElement(
	              'li',
	              { key: item },
	              _react2.default.createElement(
	                'a',
	                { className: (0, _classnames2.default)({ selected: item === filter }),
	                  style: { cursor: 'pointer' },
	                  onClick: function onClick() {
	                    return changeFilter(item);
	                  }
	                },
	                item
	              )
	            );
	          })
	        ),
	        completedCount > 0 && _react2.default.createElement(
	          'button',
	          { className: 'clear-completed',
	            onClick: function onClick() {
	              return clearCompleted();
	            } },
	          'Clear completed'
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	var ToggleAll = function ToggleAll(_ref3) {
	  var list = _ref3.list;
	  var toggle = _ref3.toggle;
	
	  var completedCount = list.length - getActiveTodosCount(list);
	  return list.length > 0 ? _react2.default.createElement('input', {
	    className: 'toggle-all',
	    type: 'checkbox',
	    checked: completedCount === list.length,
	    onChange: function onChange() {
	      return toggle();
	    }
	  }) : _react2.default.createElement('span', null);
	};
	
	_reactDom2.default.render(_react2.default.createElement(
	  _index2.default,
	  { store: store },
	  _react2.default.createElement(TodoList, null)
	), document.getElementById('react-content'));

/***/ },

/***/ 40:
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

/***/ 41:
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

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '\\276F';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\t-webkit-transition: color 0.4s;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\t-webkit-transition: color 0.2s ease-out;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '\\D7';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\t-ms-transform: rotate(90deg);\n\t\t    transform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\t     appearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n", "", {"version":3,"sources":["/./node_modules/todomvc-app-css/index.css"],"names":[],"mappings":"AAAA;;CAEC,UAAU;CACV,WAAW;CACX;;AAED;CACC,UAAU;CACV,WAAW;CACX,UAAU;CACV,iBAAiB;CACjB,gBAAgB;CAChB,yBAAyB;CACzB,qBAAqB;CACrB,qBAAqB;CACrB,eAAe;CACf,yBAAyB;CACzB,sBAAiB;MAAjB,iBAAiB;CACjB,oCAAoC;CACpC,mCAAmC;CACnC;;AAED;CACC,0DAA0D;CAC1D,mBAAmB;CACnB,oBAAoB;CACpB,eAAe;CACf,iBAAiB;CACjB,iBAAiB;CACjB,eAAe;CACf,oCAAoC;CACpC,mCAAmC;CACnC,iBAAiB;CACjB;;AAED;;CAEC,cAAc;CACd;;AAED;CACC,cAAc;CACd;;AAED;CACC,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB;8CAC6C;CAC7C;;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;;AAED;CACC,mBAAmB;CACnB,YAAY;CACZ,YAAY;CACZ,iBAAiB;CACjB,iBAAiB;CACjB,mBAAmB;CACnB,+BAA+B;CAC/B,2CAA2C;CAC3C,wCAAwC;CACxC,mCAAmC;CACnC;;AAED;;CAEC,mBAAmB;CACnB,UAAU;CACV,YAAY;CACZ,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB,mBAAmB;CACnB,UAAU;CACV,cAAc;CACd,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,kDAAkD;CAClD,uBAAuB;CACvB,oCAAoC;CACpC,mCAAmC;CACnC;;AAED;CACC,6BAA6B;CAC7B,aAAa;CACb,iCAAiC;CACjC,8CAA8C;CAC9C;;AAED;CACC,mBAAmB;CACnB,WAAW;CACX,8BAA8B;CAC9B;;AAED;CACC,cAAc;CACd;;AAED;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,aAAa,CAAC,mBAAmB;CACjC;;AAED;CACC,iBAAa;CACb,gBAAgB;CAChB,eAAe;CACf,6BAA6B;CAC7B;;AAED;CACC,eAAe;CACf;;AAED;CACC,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB;;AAED;CACC,mBAAmB;CACnB,gBAAgB;CAChB,iCAAiC;CACjC;;AAED;CACC,oBAAoB;CACpB;;AAED;CACC,oBAAoB;CACpB,WAAW;CACX;;AAED;CACC,eAAe;CACf,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB;;AAED;CACC,cAAc;CACd;;AAED;CACC,mBAAmB;CACnB,YAAY;CACZ,mEAAmE;CACnE,aAAa;CACb,mBAAmB;CACnB,OAAO;CACP,UAAU;CACV,eAAe;CACf,aAAa,CAAC,mBAAmB;CACjC,yBAAyB;CACzB,sBAAiB;MAAjB,iBAAiB;CACjB;;AAED;CACC,sNAAsN;CACtN;;AAED;CACC,qRAAqR;CACrR;;AAED;CACC,sBAAsB;CACtB,sBAAsB;CACtB,6BAA6B;CAC7B,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,+BAAuB;CAAvB,uBAAuB;CACvB;;AAED;CACC,eAAe;CACf,8BAA8B;CAC9B;;AAED;CACC,cAAc;CACd,mBAAmB;CACnB,OAAO;CACP,YAAY;CACZ,UAAU;CACV,YAAY;CACZ,aAAa;CACb,eAAe;CACf,gBAAgB;CAChB,eAAe;CACf,oBAAoB;CACpB,wCAAgC;CAAhC,gCAAgC;CAChC;;AAED;CACC,eAAe;CACf;;AAED;CACC,eAAa;CACb;;AAED;CACC,eAAe;CACf;;AAED;CACC,cAAc;CACd;;AAED;CACC,oBAAoB;CACpB;;AAED;CACC,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B;;AAED;CACC,YAAY;CACZ,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,QAAQ;CACR,aAAa;CACb,iBAAiB;CACjB;;;;gDAI+C;CAC/C;;AAED;CACC,YAAY;CACZ,iBAAiB;CACjB;;AAED;CACC,iBAAiB;CACjB;;AAED;CACC,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB,mBAAmB;CACnB,SAAS;CACT,QAAQ;CACR;;AAED;CACC,gBAAgB;CAChB;;AAED;CACC,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;CACnB;;AAED;;CAEC,qCAAqC;CACrC;;AAED;CACC,qCAAqC;CACrC;;AAED;;CAEC,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;CACtB,gBAAgB;CAChB;;AAED;CACC,2BAA2B;CAC3B;;AAED;CACC,oBAAoB;CACpB,eAAe;CACf,gBAAgB;CAChB,8CAA8C;CAC9C,mBAAmB;CACnB;;AAED;CACC,eAAe;CACf;;AAED;CACC,eAAe;CACf,sBAAsB;CACtB,iBAAiB;CACjB;;AAED;CACC,2BAA2B;CAC3B;;AAED;;;EAGE;AACF;CACC;;EAEC,iBAAiB;EACjB;;CAED;EACC,aAAa;EACb;;CAED;EACC,iCAAiC;EACjC,6BAAyB;MAAzB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAiB;OAAjB,iBAAiB;EACjB;CACD;;AAED;CACC;EACC,aAAa;EACb;;CAED;EACC,aAAa;EACb;CACD","file":"index.css","sourcesContent":["html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 44:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 49:
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
	
		module.exports = __webpack_require__(54);
	
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
	
		module.exports = __webpack_require__(41);
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(40);
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(50);
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(56);
	
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
	
		module.exports = __webpack_require__(51);
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(53);
	
	/***/ }
	/******/ ]);

/***/ },

/***/ 50:
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

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(55);
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

/***/ 55:
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

/***/ 56:
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
	    t.exports = __webpack_require__(81);
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

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);

/***/ },

/***/ 78:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createSelector = createSelector;
	exports.createStructuredSelector = createStructuredSelector;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function defaultEqualityCheck(a, b) {
	  return a === b;
	}
	
	function defaultMemoize(func) {
	  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];
	
	  var lastArgs = null;
	  var lastResult = null;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (lastArgs !== null && lastArgs.length === args.length && args.every(function (value, index) {
	      return equalityCheck(value, lastArgs[index]);
	    })) {
	      return lastResult;
	    }
	    lastArgs = args;
	    lastResult = func.apply(undefined, args);
	    return lastResult;
	  };
	}
	
	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
	
	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }
	
	  return dependencies;
	}
	
	function createSelectorCreator(memoize) {
	  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    memoizeOptions[_key2 - 1] = arguments[_key2];
	  }
	
	  return function () {
	    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      funcs[_key3] = arguments[_key3];
	    }
	
	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);
	
	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      return resultFunc.apply(undefined, arguments);
	    }].concat(memoizeOptions));
	
	    var selector = function selector(state, props) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        args[_key4 - 2] = arguments[_key4];
	      }
	
	      var params = dependencies.map(function (dependency) {
	        return dependency.apply(undefined, [state, props].concat(args));
	      });
	      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
	    };
	
	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}
	
	function createSelector() {
	  return createSelectorCreator(defaultMemoize).apply(undefined, arguments);
	}
	
	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];
	
	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      values[_key5] = arguments[_key5];
	    }
	
	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js?sourceMap&-restructuring!./../postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!./../css-loader/index.js?sourceMap&-restructuring!./../postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 81:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXRvZG9saXN0Lm1kIiwid2VicGFjazovLy8uL34vYXJyYXktZm9yZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LW1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbW11dGFibGUtZGF0YS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtcGF0aC1wYXJzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1hZGRvbnMtcGVyZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Jlc2VsZWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzPzJmMjUiLCJ3ZWJwYWNrOi8vLy4vfi90cmF2ZXJzZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7S0FBWTs7QUFDWjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxLQUFJLEtBQUssQ0FBTDtBQUNKLEtBQU0sT0FBTyxFQUFQO0FBQ04sS0FBTSxPQUFPLENBQVA7QUFDTixNQUFJLElBQUksSUFBRSxDQUFGLEVBQUksSUFBSSxJQUFKLEVBQVUsR0FBdEIsRUFBMkI7QUFDekIsUUFBSyxJQUFMLENBQVU7QUFDUixXQUFNLFVBQVUsQ0FBVjtBQUNOLGdCQUFXLEtBQVg7QUFDQSxTQUFJLElBQUo7SUFIRixFQUR5QjtFQUEzQjs7QUFRQSxLQUFNLFFBQVE7QUFDWixhQUFVO0FBQ1IsV0FBTSxJQUFOO0FBQ0EsdUJBQUksTUFBTSxHQUFHO0FBQ1gsY0FBTztBQUNMLGdCQUFPO0FBQ0wscUJBREs7QUFFTCxzQkFBVyxLQUFYO0FBQ0EsZUFBSSxJQUFKO3NDQUNJLEVBQUUsS0FBRixDQUFRLElBQVIsRUFKTjtRQURGLENBRFc7TUFGTDtBQVdSLHVCQUFJLE1BQU0sR0FBRztBQUNYLFdBQU0sUUFBUSxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFxQixJQUFyQixDQUFSLENBREs7QUFFWCxjQUFPO0FBQ0wsZUFBTSwyQkFBTyxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWMsS0FBckIsQ0FBTjtRQURGLENBRlc7TUFYTDtBQWlCUiw2QkFBTyxNQUFNLEdBQUc7QUFDZCxXQUFNLFFBQVEsRUFBRSxLQUFGLENBQVEsSUFBUixDQUFhLE9BQWIsQ0FBcUIsSUFBckIsQ0FBUixDQURRO0FBRWQsY0FBTztBQUNMLGVBQU0sd0JBQUksRUFBRSxLQUFGLENBQVEsSUFBUixzQkFDSixzQkFBb0IsQ0FBQyxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsS0FBYixFQUFvQixTQUFwQixDQURyQixDQUFOO1FBREYsQ0FGYztNQWpCUjtBQXlCUix5QkFBSyxNQUFNLE1BQU0sR0FBRztBQUNsQixXQUFNLFFBQVEsRUFBRSxLQUFGLENBQVEsSUFBUixDQUFhLE9BQWIsQ0FBcUIsSUFBckIsQ0FBUixDQURZO0FBRWxCLGNBQU87QUFDTCxlQUFNLHdCQUFJLEVBQUUsS0FBRixDQUFRLElBQVIsc0JBQ0osaUJBQWUsS0FEZixDQUFOO1FBREYsQ0FGa0I7TUF6Qlo7O0FBaUNSLGFBQVEsS0FBUjtBQUNBLHlDQUFhLFFBQVE7QUFDbkIsY0FBTztBQUNMLHVCQURLO1FBQVAsQ0FEbUI7TUFsQ2I7QUF1Q1IsNkNBQWUsR0FBRztBQUNoQixjQUFPO0FBQ0wsZUFBTSxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsTUFBYixDQUFvQjtrQkFBUSxDQUFDLEtBQUssU0FBTDtVQUFULENBQTFCO1FBREYsQ0FEZ0I7TUF2Q1Y7QUE0Q1IsNkJBQU8sR0FBRztBQUNSLFdBQU0sbUJBQW1CLG9CQUFvQixFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQXZDLENBREU7QUFFUixXQUFJLHFCQUFxQixDQUFyQixJQUEwQixFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsTUFBYixLQUF3QixnQkFBeEIsRUFBMEM7QUFDdEUsZ0JBQU87QUFDTCxpQkFBTSxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsR0FBYixDQUFpQjtpQ0FDbEI7QUFDSCwwQkFBVyxDQUFDLEtBQUssU0FBTDs7WUFGUyxDQUF2QjtVQURGLENBRHNFO1FBQXhFO0FBUUEsY0FBTztBQUNMLGVBQU0sRUFBRSxLQUFGLENBQVEsSUFBUixDQUFhLEdBQWIsQ0FBaUI7a0JBQVEsS0FBSyxTQUFMLEdBQWlCLElBQWpCLGdCQUMxQjtBQUNILHdCQUFXLElBQVg7YUFGNkI7VUFBUixDQUF2QjtRQURGLENBVlE7TUE1Q0Y7SUFBVjtFQURJOztBQWlFTixLQUFNLGtCQUFrQiw4QkFBZSxDQUNyQztVQUFPO0VBQVAsQ0FEc0IsRUFFckIsZ0JBQW9CO09BQWxCLGlCQUFrQjtPQUFaLHFCQUFZOztBQUNyQixXQUFRLE1BQVI7QUFDRSxVQUFLLEtBQUw7QUFDRSxjQUFPLElBQVAsQ0FERjtBQURGLFVBR08sUUFBTDtBQUNFLGNBQU8sS0FBSyxNQUFMLENBQVk7Z0JBQVEsQ0FBQyxLQUFLLFNBQUw7UUFBVCxDQUFuQixDQURGO0FBSEYsVUFLTyxXQUFMO0FBQ0UsY0FBTyxLQUFLLE1BQUwsQ0FBWTtnQkFBUSxLQUFLLFNBQUw7UUFBUixDQUFuQixDQURGO0FBTEYsSUFEcUI7RUFBcEIsQ0FGRzs7QUFhTixLQUFNLHNCQUFzQiw4QkFBZSxDQUN6QztVQUFPO0VBQVAsQ0FEMEIsRUFFekIsZ0JBQVE7QUFDVCxVQUFPLEtBQUssTUFBTCxDQUFZO1lBQUssQ0FBQyxFQUFFLFNBQUY7SUFBTixDQUFaLENBQStCLE1BQS9CLENBREU7RUFBUixDQUZHOztBQU9OLEtBQU0sV0FBVyxTQUFYLFFBQVcsUUFBa0I7T0FBZiwwQkFBZTtPQUN6QixTQUErRSxTQUEvRSxPQUR5QjtPQUNqQixNQUF1RSxTQUF2RSxJQURpQjtPQUNaLE1BQWtFLFNBQWxFLElBRFk7T0FDUCxTQUE2RCxTQUE3RCxPQURPO09BQ0MsT0FBcUQsU0FBckQsS0FERDtPQUNPLGVBQStDLFNBQS9DLGFBRFA7T0FDcUIsaUJBQWlDLFNBQWpDLGVBRHJCO09BQ3FDLFNBQWlCLFNBQWpCLE9BRHJDO09BQzZDLE9BQVMsU0FBVCxLQUQ3Qzs7QUFFakMsT0FBSSxhQUFhLGdCQUFnQjtBQUMvQixlQUQrQjtBQUUvQixtQkFGK0I7SUFBaEIsQ0FBYixDQUY2QjtBQU1qQyxPQUFNLFlBQVksRUFBRSxjQUFGLEVBQVUsUUFBVixFQUFlLFVBQWYsRUFBWixDQU4yQjtBQU9qQyxPQUFNLGNBQWMsRUFBRSxVQUFGLEVBQVEsY0FBUixFQUFnQiwwQkFBaEIsRUFBOEIsOEJBQTlCLEVBQWQsQ0FQMkI7QUFRakMsT0FBTSxpQkFBaUIsRUFBRSxVQUFGLEVBQVEsY0FBUixFQUFqQixDQVIyQjtBQVNqQyxVQUFPOztPQUFLLFdBQVUsU0FBVixFQUFMO0tBQ0w7O1NBQVEsV0FBVSxRQUFWLEVBQVI7T0FDRTs7OztRQURGO01BREs7S0FJTCw4QkFBQyxTQUFEO0FBQ0UsYUFBSyxVQUFMO0FBQ0EsZUFBUTtnQkFBUSxJQUFJLElBQUo7UUFBUjtNQUZWLENBSks7S0FRTDs7U0FBSyxXQUFVLE1BQVYsRUFBTDtPQUNFLDhCQUFDLFNBQUQsRUFBZSxjQUFmLENBREY7T0FFRTs7V0FBSSxXQUFVLFdBQVYsRUFBSjtTQUVJLFdBQVcsR0FBWCxDQUFlO2tCQUNiLDhCQUFDLElBQUQsYUFBTSxLQUFLLEtBQUssRUFBTCxFQUFTLE1BQU0sSUFBTixJQUFnQixVQUFwQztVQURhLENBRm5CO1FBRkY7T0FTRSw4QkFBQyxNQUFELEVBQVksV0FBWixDQVRGO01BUks7SUFBUCxDQVRpQztFQUFsQjs7S0FnQ1g7OztBQUNKLFlBREksSUFDSixDQUFZLEtBQVosRUFBbUI7MkJBRGYsTUFDZTs7d0VBRGYsaUJBRUksUUFEVzs7V0FNbkIsb0JBQW9CLFlBQU07QUFDeEIsYUFBSyxRQUFMLENBQWM7QUFDWixlQUFNLE1BQU47UUFERixFQUR3QjtNQUFOLENBTkQ7O1dBV25CLGFBQWEsZ0JBQVE7QUFDbkIsYUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLElBQWpDLEVBRG1CO0FBRW5CLGFBQUssUUFBTCxDQUFjO0FBQ1osZUFBTSxNQUFOO1FBREYsRUFGbUI7TUFBUixDQVhNOztBQUVqQixXQUFLLEtBQUwsR0FBYTtBQUNYLGFBQU0sTUFBTjtNQURGLENBRmlCOztJQUFuQjs7Z0JBREk7OzJDQWtCa0IsV0FBVyxXQUFXO0FBQzFDLGNBQU8sVUFBVSxJQUFWLEtBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsVUFBVSxJQUFWLEtBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FEdEI7Ozs7OEJBR25DO29CQUM2QixLQUFLLEtBQUwsQ0FEN0I7V0FDQyxtQkFERDtXQUNPLHVCQURQO1dBQ2UsaUJBRGY7V0FDb0IsbUJBRHBCOztBQUVQLGNBQU87O1dBQUksV0FBVywwQkFBVztBQUM3Qix3QkFBVyxLQUFLLFNBQUw7WUFETyxDQUFYLEVBQUo7U0FLSCxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE1BQXBCLEdBRUEsOEJBQUMsU0FBRDtBQUNFLGlCQUFNLEtBQUssSUFBTDtBQUNOLGlCQUFLLFdBQUw7QUFDQSxtQkFBUSxLQUFLLFVBQUw7VUFIVixDQUZBLEdBVUE7O2FBQUssV0FBVSxNQUFWLEVBQUw7V0FDRTtBQUNFLHdCQUFVLFFBQVY7QUFDQSxtQkFBSyxVQUFMO0FBQ0Esc0JBQVMsS0FBSyxTQUFMO0FBQ1QsdUJBQVU7c0JBQU0sT0FBTyxJQUFQO2NBQU4sRUFKWixDQURGO1dBTUU7O2VBQU8sZUFBZSxLQUFLLGlCQUFMLEVBQXRCO2FBQ0csS0FBSyxJQUFMO1lBUEw7V0FTRSwwQ0FBUSxXQUFVLFNBQVYsRUFBb0IsU0FBUztzQkFBTSxJQUFJLElBQUo7Y0FBTixFQUFyQyxDQVRGO1VBVkE7UUFMSixDQUZPOzs7O1VBckJMOzs7S0EwREE7OztBQUNKLFlBREksU0FDSixDQUFZLEtBQVosRUFBbUI7MkJBRGYsV0FDZTs7eUVBRGYsc0JBRUksUUFEVzs7WUFTbkIsZUFBZSxhQUFLO0FBQ2xCLGNBQUssUUFBTCxDQUFjO0FBQ1osZUFBTSxFQUFFLE1BQUYsQ0FBUyxLQUFUO1FBRFIsRUFEa0I7TUFBTCxDQVRJOztZQWNuQixlQUFlLGFBQUs7QUFDbEIsU0FBRSxjQUFGLEdBRGtCO0FBRWxCLFdBQU0sT0FBTyxPQUFLLEtBQUwsQ0FBVyxJQUFYLENBRks7QUFHbEIsV0FBSSxDQUFDLElBQUQsRUFBTTtBQUNSLGdCQURRO1FBQVY7QUFHQSxjQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLElBQWxCLEVBTmtCO0FBT2xCLFdBQUksT0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFwQixFQUFnQztBQUNsQyxnQkFBSyxRQUFMLENBQWM7QUFDWixpQkFBTSxFQUFOO1VBREYsRUFEa0M7UUFBcEM7TUFQYSxDQWRJOztZQTJCbkIsYUFBYSxhQUFLO0FBQ2hCLFdBQUksT0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixXQUFwQixFQUFpQztBQUNuQyxhQUFNLE9BQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQURzQjtBQUVuQyxnQkFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixJQUFsQixFQUZtQztRQUFyQztNQURXLENBM0JNOztBQUVqQixZQUFLLEtBQUwsR0FBYTtBQUNYLGFBQU0sTUFBTSxNQUFNLElBQU47TUFEZCxDQUZpQjs7SUFBbkI7O2dCQURJOzsyQ0FPa0IsV0FBVyxXQUFXO0FBQzFDLGNBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsQ0FEZTs7Ozs4QkEyQm5DO0FBQ1AsY0FBTzs7V0FBTSxVQUFVLEtBQUssWUFBTCxFQUFoQjtTQUNMLHlDQUFPLE1BQUssTUFBTDtBQUNMLHNCQUFVLFVBQVY7QUFDQSxzQkFBVSxNQUFWO0FBQ0Esd0JBQVksd0JBQVo7QUFDQSxrQkFBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ1AscUJBQVUsS0FBSyxZQUFMO0FBQ1YsbUJBQVEsS0FBSyxVQUFMO1VBTlYsQ0FESztRQUFQLENBRE87Ozs7VUFsQ0w7OztLQWlEQTs7Ozs7Ozs7Ozs7OEJBQ0s7cUJBQ2dELEtBQUssS0FBTCxDQURoRDtXQUNDLG9CQUREO1dBQ08sd0JBRFA7V0FDZSxvQ0FEZjtXQUM2Qix3Q0FEN0I7O0FBRVAsV0FBTSxjQUFjLG9CQUFvQixJQUFwQixDQUFkLENBRkM7QUFHUCxXQUFNLGlCQUFpQixLQUFLLE1BQUwsR0FBYyxXQUFkLENBSGhCO0FBSVAsY0FBTzs7V0FBUSxXQUFVLFFBQVYsRUFBUjtTQUNMOzthQUFNLFdBQVUsWUFBVixFQUFOO1dBQ0U7OzthQUFTLGVBQWUsSUFBZjtZQURYO1dBRUcsR0FGSDtXQUdHLGdCQUFnQixDQUFoQixHQUFvQixNQUFwQixHQUE2QixPQUE3QjtrQkFISDtVQURLO1NBTUw7O2FBQUksV0FBVSxTQUFWLEVBQUo7V0FDRyxDQUFFLEtBQUYsRUFBUyxRQUFULEVBQW1CLFdBQW5CLEVBQWlDLEdBQWpDLENBQXFDO29CQUNwQzs7aUJBQUksS0FBSyxJQUFMLEVBQUo7ZUFDRTs7bUJBQUcsV0FBVywwQkFBVyxFQUFFLFVBQVUsU0FBUyxNQUFULEVBQXZCLENBQVg7QUFDRCwwQkFBTyxFQUFFLFFBQVEsU0FBUixFQUFUO0FBQ0EsNEJBQVM7NEJBQU0sYUFBYSxJQUFiO29CQUFOO2tCQUZYO2lCQUlHLElBSkg7Z0JBREY7O1lBRG9DLENBRHhDO1VBTks7U0FtQkgsaUJBQWlCLENBQWpCLElBRUE7O2FBQVEsV0FBVSxpQkFBVjtBQUNOLHNCQUFTO3NCQUFNO2NBQU4sRUFEWDs7VUFGQTtRQW5CSixDQUpPOzs7O1VBREw7OztBQW9DTixLQUFNLFlBQVksU0FBWixTQUFZLFFBQXNCO09BQW5CLGtCQUFtQjtPQUFiLHNCQUFhOztBQUN0QyxPQUFNLGlCQUFpQixLQUFLLE1BQUwsR0FBYyxvQkFBb0IsSUFBcEIsQ0FBZCxDQURlO0FBRXRDLFVBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxHQUFrQjtBQUN2QixnQkFBVSxZQUFWO0FBQ0EsV0FBSyxVQUFMO0FBQ0EsY0FBUyxtQkFBbUIsS0FBSyxNQUFMO0FBQzVCLGVBQVU7Y0FBTTtNQUFOO0lBSmEsQ0FBbEIsR0FLRiwyQ0FMRSxDQUYrQjtFQUF0Qjs7QUFZbEIsb0JBQVMsTUFBVCxDQUFnQjs7S0FBSyxPQUFPLEtBQVAsRUFBTDtHQUNkLDhCQUFDLFFBQUQsT0FEYztFQUFoQixFQUdBLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUhBLEU7Ozs7Ozs7QUNyU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7O0FDL0NEO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXVDLGNBQWMsZUFBZSxHQUFHLFlBQVksY0FBYyxlQUFlLGNBQWMscUJBQXFCLG9CQUFvQiw2QkFBNkIseUJBQXlCLHlCQUF5QixtQkFBbUIsNkJBQTZCLDBCQUEwQiwwQkFBMEIsd0NBQXdDLHVDQUF1QyxHQUFHLFVBQVUsOERBQThELHVCQUF1Qix3QkFBd0IsbUJBQW1CLHFCQUFxQixxQkFBcUIsbUJBQW1CLHdDQUF3Qyx1Q0FBdUMscUJBQXFCLEdBQUcsdUNBQXVDLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsY0FBYyxxQkFBcUIsMkJBQTJCLHVCQUF1QixnR0FBZ0csR0FBRywrQ0FBK0MsdUJBQXVCLHFCQUFxQixtQkFBbUIsR0FBRyxzQ0FBc0MsdUJBQXVCLHFCQUFxQixtQkFBbUIsR0FBRyx1Q0FBdUMsdUJBQXVCLHFCQUFxQixtQkFBbUIsR0FBRyxpQkFBaUIsdUJBQXVCLGdCQUFnQixnQkFBZ0IscUJBQXFCLHFCQUFxQix1QkFBdUIsbUNBQW1DLCtDQUErQyw0Q0FBNEMsdUNBQXVDLEdBQUcsdUJBQXVCLHVCQUF1QixjQUFjLGdCQUFnQixvQkFBb0IseUJBQXlCLHlCQUF5Qix1QkFBdUIsY0FBYyxrQkFBa0IsbUJBQW1CLGlCQUFpQiwyQkFBMkIsc0RBQXNELDJCQUEyQix3Q0FBd0MsdUNBQXVDLEdBQUcsZUFBZSxpQ0FBaUMsaUJBQWlCLHFDQUFxQyxrREFBa0QsR0FBRyxXQUFXLHVCQUF1QixlQUFlLGtDQUFrQyxHQUFHLDZCQUE2QixrQkFBa0IsR0FBRyxpQkFBaUIsdUJBQXVCLGVBQWUsZ0JBQWdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGlCQUFpQix1QkFBdUIsd0JBQXdCLHNCQUFzQixvQkFBb0IsbUJBQW1CLGlDQUFpQyxHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxnQkFBZ0IsY0FBYyxlQUFlLHFCQUFxQixHQUFHLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFDQUFxQyxHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLGVBQWUsR0FBRyxpQ0FBaUMsbUJBQW1CLGlCQUFpQixpQ0FBaUMsdUJBQXVCLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLDJCQUEyQix1QkFBdUIsZ0JBQWdCLHdGQUF3Rix1QkFBdUIsV0FBVyxjQUFjLG1CQUFtQixpQkFBaUIsaURBQWlELDBCQUEwQiwwQkFBMEIsR0FBRyxpQ0FBaUMscUNBQXFDLHlNQUF5TSxHQUFHLHlDQUF5QyxxQ0FBcUMsNFFBQTRRLEdBQUcseUJBQXlCLDBCQUEwQiwwQkFBMEIsaUNBQWlDLHNCQUFzQixtQkFBbUIscUJBQXFCLG1DQUFtQywyQkFBMkIsR0FBRyxtQ0FBbUMsbUJBQW1CLGtDQUFrQyxHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLFdBQVcsZ0JBQWdCLGNBQWMsZ0JBQWdCLGlCQUFpQixtQkFBbUIsb0JBQW9CLG1CQUFtQix3QkFBd0IsNENBQTRDLG9DQUFvQyxHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxrQ0FBa0Msb0JBQW9CLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxzQ0FBc0Msd0JBQXdCLEdBQUcsYUFBYSxnQkFBZ0IsdUJBQXVCLGlCQUFpQix1QkFBdUIsa0NBQWtDLEdBQUcsb0JBQW9CLGdCQUFnQix1QkFBdUIsYUFBYSxjQUFjLFlBQVksaUJBQWlCLHFCQUFxQiw2TkFBNk4sR0FBRyxpQkFBaUIsZ0JBQWdCLHFCQUFxQixHQUFHLHdCQUF3QixxQkFBcUIsR0FBRyxjQUFjLGNBQWMsZUFBZSxxQkFBcUIsdUJBQXVCLGFBQWEsWUFBWSxHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxtQkFBbUIsbUJBQW1CLGdCQUFnQixxQkFBcUIsMEJBQTBCLGtDQUFrQyx1QkFBdUIsR0FBRyxrREFBa0QseUNBQXlDLEdBQUcsNEJBQTRCLHlDQUF5QyxHQUFHLHFEQUFxRCxpQkFBaUIsdUJBQXVCLHNCQUFzQiwwQkFBMEIsb0JBQW9CLEdBQUcsNEJBQTRCLCtCQUErQixHQUFHLFdBQVcsd0JBQXdCLG1CQUFtQixvQkFBb0Isa0RBQWtELHVCQUF1QixHQUFHLGFBQWEsbUJBQW1CLEdBQUcsYUFBYSxtQkFBbUIsMEJBQTBCLHFCQUFxQixHQUFHLG1CQUFtQiwrQkFBK0IsR0FBRyxvTEFBb0wsMkNBQTJDLHVCQUF1QixLQUFLLDZCQUE2QixtQkFBbUIsS0FBSyxtQkFBbUIsdUNBQXVDLG1DQUFtQyxtQ0FBbUMsK0JBQStCLDRCQUE0Qiw0QkFBNEIsS0FBSyxHQUFHLCtCQUErQixhQUFhLG1CQUFtQixLQUFLLGdCQUFnQixtQkFBbUIsS0FBSyxHQUFHLFVBQVUsaUdBQWlHLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSx1QkFBdUIsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsc0JBQXNCLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFNBQVMsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sS0FBSyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFV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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFvQjtBQUNwQix3QkFBdUI7QUFDdkIsMEJBQXlCO0FBQ3pCLHlCQUF3QjtBQUN4QiwyQkFBMEI7QUFDMUIsMEJBQXlCO0FBQ3pCLDBCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0EiLCJmaWxlIjoiZXhhbXBsZXMvZXhhbXBsZS10b2RvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHNldCwgcmVtb3ZlIH0gZnJvbSAnaW1tdXRhYmxlLWRhdGEnO1xuaW1wb3J0ICd0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzJ1xuaW1wb3J0ICogYXMgUGVyZiBmcm9tICdyZWFjdC1hZGRvbnMtcGVyZic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuXG5sZXQgSUQgPSAwO1xuY29uc3QgTElTVCA9IFtdO1xuY29uc3QgU0laRSA9IDU7XG5mb3IobGV0IGk9MDtpIDwgU0laRTsgaSsrKSB7XG4gIExJU1QucHVzaCh7XG4gICAgdGV4dDogJ3Rhc2sgJyArIGksXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpZDogSUQrKyxcbiAgfSk7XG59XG5cbmNvbnN0IHN0b3JlID0ge1xuICB0b2RvbGlzdDogeyBcbiAgICBsaXN0OiBMSVNULFxuICAgIGFkZCh0ZXh0LCBlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBpZDogSUQrKyxcbiAgICAgICAgfSwgLi4uZS5zdG9yZS5saXN0XSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBkZWwodG9kbywgZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnN0b3JlLmxpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IHJlbW92ZShlLnN0b3JlLmxpc3QsIGluZGV4KSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBjaGFuZ2UodG9kbywgZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnN0b3JlLmxpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IHNldChlLnN0b3JlLmxpc3QsIHtcbiAgICAgICAgICBbYCR7aW5kZXh9LmNvbXBsZXRlZGBdOiAhZS5zdG9yZS5saXN0W2luZGV4XS5jb21wbGV0ZWQsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGVkaXQodG9kbywgdGV4dCwgZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnN0b3JlLmxpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IHNldChlLnN0b3JlLmxpc3QsIHtcbiAgICAgICAgICBbYCR7aW5kZXh9LnRleHRgXTogdGV4dCxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH0sXG4gICAgZmlsdGVyOiAnYWxsJyxcbiAgICBjaGFuZ2VGaWx0ZXIoZmlsdGVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWx0ZXIsXG4gICAgICB9O1xuICAgIH0sXG4gICAgY2xlYXJDb21wbGV0ZWQoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdDogZS5zdG9yZS5saXN0LmZpbHRlcihpdGVtID0+ICFpdGVtLmNvbXBsZXRlZCksXG4gICAgICB9O1xuICAgIH0sXG4gICAgdG9nZ2xlKGUpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVRvZG9zQ291bnQgPSBnZXRBY3RpdmVUb2Rvc0NvdW50KGUuc3RvcmUubGlzdCk7XG4gICAgICBpZiAoYWN0aXZlVG9kb3NDb3VudCA9PT0gMCB8fCBlLnN0b3JlLmxpc3QubGVuZ3RoID09PSBhY3RpdmVUb2Rvc0NvdW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGlzdDogZS5zdG9yZS5saXN0Lm1hcCh0b2RvID0+ICh7XG4gICAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgICAgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdDogZS5zdG9yZS5saXN0Lm1hcCh0b2RvID0+IHRvZG8uY29tcGxldGVkID8gdG9kbyA6IHtcbiAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbn07XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9IGNyZWF0ZVNlbGVjdG9yKFtcbiAgb2JqID0+IG9iaixcbl0sICh7bGlzdCwgZmlsdGVyfSkgPT4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgJ2FsbCc6XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgcmV0dXJuIGxpc3QuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKTtcbiAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgcmV0dXJuIGxpc3QuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpO1xuICB9XG59KTtcblxuY29uc3QgZ2V0QWN0aXZlVG9kb3NDb3VudCA9IGNyZWF0ZVNlbGVjdG9yKFtcbiAgb2JqID0+IG9iaixcbl0sIGxpc3QgPT4ge1xuICByZXR1cm4gbGlzdC5maWx0ZXIodCA9PiAhdC5jb21wbGV0ZWQpLmxlbmd0aDtcbn0pO1xuXG5cbmNvbnN0IFRvZG9MaXN0ID0gKHsgdG9kb2xpc3QgfSkgPT4ge1xuICBjb25zdCB7IGNoYW5nZSwgZGVsLCBhZGQsIGZpbHRlciwgbGlzdCwgY2hhbmdlRmlsdGVyLCBjbGVhckNvbXBsZXRlZCwgdG9nZ2xlLCBlZGl0IH0gPSB0b2RvbGlzdDtcbiAgbGV0IGZpbHRlckxpc3QgPSBnZXRWaXNpYmxlVG9kb3Moe1xuICAgIGxpc3QsXG4gICAgZmlsdGVyLFxuICB9KTtcbiAgY29uc3QgdG9kb1Byb3BzID0geyBjaGFuZ2UsIGRlbCwgZWRpdCB9O1xuICBjb25zdCBmb290ZXJQcm9wcyA9IHsgbGlzdCwgZmlsdGVyLCBjaGFuZ2VGaWx0ZXIsIGNsZWFyQ29tcGxldGVkIH07XG4gIGNvbnN0IHRvZ2dsZUFsbFByb3BzID0geyBsaXN0LCB0b2dnbGUgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidG9kb2FwcFwiPlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+dG9kb3M8L2gxPlxuICAgIDwvaGVhZGVyPlxuICAgIDxUb2RvSW5wdXRcbiAgICAgIHR5cGU9J25ldy10b2RvJ1xuICAgICAgb25TYXZlPXt0ZXh0ID0+IGFkZCh0ZXh0KX1cbiAgICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUb2dnbGVBbGwgey4uLnRvZ2dsZUFsbFByb3BzfSAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyTGlzdC5tYXAodG9kbyA9PlxuICAgICAgICAgICAgPFRvZG8ga2V5PXt0b2RvLmlkfSB0b2RvPXt0b2RvfSB7Li4udG9kb1Byb3BzfSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxGb290ZXIgey4uLmZvb3RlclByb3BzfSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59O1xuXG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfTtcbiAgfVxuICBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICB0eXBlOiAnZWRpdCcsXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlU2F2ZSA9IHRleHQgPT4ge1xuICAgIHRoaXMucHJvcHMuZWRpdCh0aGlzLnByb3BzLnRvZG8sIHRleHQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH0pO1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiBuZXh0UHJvcHMudG9kbyAhPT0gdGhpcy5wcm9wcy50b2RvIHx8IG5leHRTdGF0ZS50eXBlICE9PSB0aGlzLnN0YXRlLnR5cGU7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG9kbywgY2hhbmdlLCBkZWwsIGVkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkLFxuICAgICAgfSl9PlxuXG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUudHlwZSA9PT0gJ2VkaXQnID9cblxuICAgICAgICA8VG9kb0lucHV0XG4gICAgICAgICAgdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgIHR5cGU9XCJlZGl0LXRvZG9cIlxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5oYW5kbGVTYXZlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDpcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZVwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gY2hhbmdlKHRvZG8pfSAvPlxuICAgICAgICAgIDxsYWJlbCBvbkRvdWJsZUNsaWNrPXt0aGlzLmhhbmRsZURvdWJsZUNsaWNrfT5cbiAgICAgICAgICAgIHt0b2RvLnRleHR9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlc3Ryb3lcIiBvbkNsaWNrPXsoKSA9PiBkZWwodG9kbyl9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICB9XG5cbiAgICA8L2xpPjtcbiAgfVxuXG59XG5cblxuY2xhc3MgVG9kb0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnIHx8IHByb3BzLnRleHQsXG4gICAgfTtcbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS50ZXh0ICE9PSBuZXh0U3RhdGUudGV4dDtcbiAgfVxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0YXRlLnRleHQ7XG4gICAgaWYgKCF0ZXh0KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vblNhdmUodGV4dCk7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ25ldy10b2RvJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUJsdXIgPSBlID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnZWRpdC10b2RvJykge1xuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc3RhdGUudGV4dDtcbiAgICAgIHRoaXMucHJvcHMub25TYXZlKHRleHQpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJuZXctdG9kb1wiXG4gICAgICAgIGF1dG9Gb2N1cz1cInRydWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgLz5cbiAgICA8L2Zvcm0+O1xuICB9XG59XG5cblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgZmlsdGVyLCBjaGFuZ2VGaWx0ZXIsIGNsZWFyQ29tcGxldGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gZ2V0QWN0aXZlVG9kb3NDb3VudChsaXN0KTtcbiAgICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IGxpc3QubGVuZ3RoIC0gYWN0aXZlQ291bnQ7XG4gICAgcmV0dXJuIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2RvLWNvdW50XCI+XG4gICAgICAgIDxzdHJvbmc+e2FjdGl2ZUNvdW50IHx8ICdObyd9PC9zdHJvbmc+XG4gICAgICAgIHsnICd9XG4gICAgICAgIHthY3RpdmVDb3VudCA9PT0gMSA/ICdpdGVtJyA6ICdpdGVtcyd9IGxlZnRcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgIHtbICdhbGwnLCAnYWN0aXZlJywgJ2NvbXBsZXRlZCcgXS5tYXAoaXRlbSA9PlxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgc2VsZWN0ZWQ6IGl0ZW0gPT09IGZpbHRlciB9KX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlRmlsdGVyKGl0ZW0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICAgIHtcbiAgICAgICAgY29tcGxldGVkQ291bnQgPiAwIFxuICAgICAgICAmJlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xlYXJDb21wbGV0ZWQoKX0gPlxuICAgICAgICAgIENsZWFyIGNvbXBsZXRlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICA8L2Zvb3Rlcj47XG4gIH1cbn1cblxuXG5jb25zdCBUb2dnbGVBbGwgPSAoeyBsaXN0LCB0b2dnbGUgfSkgPT4ge1xuICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IGxpc3QubGVuZ3RoIC0gZ2V0QWN0aXZlVG9kb3NDb3VudChsaXN0KTtcbiAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMCA/IDxpbnB1dFxuICAgIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIlxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgY2hlY2tlZD17Y29tcGxldGVkQ291bnQgPT09IGxpc3QubGVuZ3RofVxuICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGUoKX1cbiAgLz4gOiA8c3BhbiAvPjtcbn1cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8UmNmIHN0b3JlPXtzdG9yZX0+XG4gIDxUb2RvTGlzdCAvPlxuPC9SY2Y+LFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9leGFtcGxlLXRvZG9saXN0Lm1kXG4gKiovIiwiLyoqXG4gKiBhcnJheS1mb3JlYWNoXG4gKiAgIEFycmF5I2ZvckVhY2ggcG9ueWZpbGwgZm9yIG9sZGVyIGJyb3dzZXJzXG4gKiAgIChQb255ZmlsbDogQSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3Qgb3ZlcndyaXRlIHRoZSBuYXRpdmUgbWV0aG9kKVxuICogXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdHdhZGEvYXJyYXktZm9yZWFjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDE2IFRha3V0byBXYWRhXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90d2FkYS9hcnJheS1mb3JlYWNoL2Jsb2IvbWFzdGVyL01JVC1MSUNFTlNFXG4gKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JFYWNoIChhcnksIGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgaWYgKGFyeS5mb3JFYWNoKSB7XG4gICAgICAgIGFyeS5mb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrPTEpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBhcnlbaV0sIGksIGFyeSk7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FycmF5LWZvcmVhY2gvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4cywgZikge1xuICAgIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHggPSB4c1tpXTtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHhzLCBpKSkgcmVzLnB1c2goZih4LCBpLCB4cykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufTtcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hcnJheS1tYXAvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRsaW5lLWhlaWdodDogMS40ZW07XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRjb2xvcjogIzRkNGQ0ZDtcXG5cXHRtaW4td2lkdGg6IDIzMHB4O1xcblxcdG1heC13aWR0aDogNTUwcHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9hcHAge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0bWFyZ2luOiAxMzBweCAwIDQwcHggMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcblxcdCAgICAgICAgICAgIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLnRvZG9hcHAgaDEge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC0xNTVweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDEwMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcXG5cXHQtd2Via2l0LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuXFx0LW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcblxcdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxufVxcblxcbi5uZXctdG9kbyxcXG4uZWRpdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbjogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNGVtO1xcblxcdGJvcmRlcjogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHBhZGRpbmc6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcblxcdHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDYwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAxcHggcmdiYSgwLDAsMCwwLjAzKTtcXG59XFxuXFxuLm1haW4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAyO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbn1cXG5cXG5sYWJlbFtmb3I9J3RvZ2dsZS1hbGwnXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1hbGwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC01NXB4O1xcblxcdGxlZnQ6IC0xMnB4O1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogMzRweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXFxufVxcblxcbi50b2dnbGUtYWxsOmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFwyNzZGJztcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxuXFx0cGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcXG59XFxuXFxuLnRvZ2dsZS1hbGw6Y2hlY2tlZDpiZWZvcmUge1xcblxcdGNvbG9yOiAjNzM3MzczO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiA1MDZweDtcXG5cXHRwYWRkaW5nOiAxM3B4IDE3cHggMTJweCAxN3B4O1xcblxcdG1hcmdpbjogMCAwIDAgNDNweDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHQvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdG1hcmdpbjogYXV0byAwO1xcblxcdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGU6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiLTEwIC0xOCAxMDAgMTM1XFxcIj48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjZWRlZGVkXFxcIiBzdHJva2Utd2lkdGg9XFxcIjNcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmNoZWNrZWQ6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiLTEwIC0xOCAxMDAgMTM1XFxcIj48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjYmRkYWQ1XFxcIiBzdHJva2Utd2lkdGg9XFxcIjNcXFwiLz48cGF0aCBmaWxsPVxcXCIjNWRjMmFmXFxcIiBkPVxcXCJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnpcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XFxuXFx0d2hpdGUtc3BhY2U6IHByZS1saW5lO1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHRwYWRkaW5nOiAxNXB4IDYwcHggMTVweCAxNXB4O1xcblxcdG1hcmdpbi1sZWZ0OiA0NXB4O1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuY29tcGxldGVkIGxhYmVsIHtcXG5cXHRjb2xvcjogI2Q5ZDlkOTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdGJvdHRvbTogMDtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0bWFyZ2luOiBhdXRvIDA7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGNvbG9yOiAjY2M5YTlhO1xcblxcdG1hcmdpbi1ib3R0b206IDExcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xcblxcdGNvbG9yOiAjYWY1YjVlO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnXFxcXEQ3JztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaTpob3ZlciAuZGVzdHJveSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmVkaXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZzpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG5cXHRjb2xvcjogIzc3NztcXG5cXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG59XFxuXFxuLmZvb3RlcjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcblxcdCAgICAgICAgICAgIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxcblxcdCAgICAgICAgICAgIDAgOXB4IDFweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG5cXHQgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXFxuXFx0ICAgICAgICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnRvZG8tY291bnQge1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50b2RvLWNvdW50IHN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmZpbHRlcnMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi5maWx0ZXJzIGxpIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdG1hcmdpbjogM3B4O1xcblxcdHBhZGRpbmc6IDNweCA3cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYS5zZWxlY3RlZCxcXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4yKTtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZCxcXG5odG1sIC5jbGVhci1jb21wbGV0ZWQ6YWN0aXZlIHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW5mbyB7XFxuXFx0bWFyZ2luOiA2NXB4IGF1dG8gMDtcXG5cXHRjb2xvcjogI2JmYmZiZjtcXG5cXHRmb250LXNpemU6IDEwcHg7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gcCB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5pbmZvIGEge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaW5mbyBhOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLypcXG5cXHRIYWNrIHRvIHJlbW92ZSBiYWNrZ3JvdW5kIGZyb20gTW9iaWxlIFNhZmFyaS5cXG5cXHRDYW4ndCB1c2UgaXQgZ2xvYmFsbHkgc2luY2UgaXQgZGVzdHJveXMgY2hlY2tib3hlcyBpbiBGaXJlZm94XFxuKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcXG5cXHQudG9nZ2xlLWFsbCxcXG5cXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0fVxcblxcblxcdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdH1cXG5cXG5cXHQudG9nZ2xlLWFsbCB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXHRcXHQgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0ICAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuXFx0LmZvb3RlciB7XFxuXFx0XFx0aGVpZ2h0OiA1MHB4O1xcblxcdH1cXG5cXG5cXHQuZmlsdGVycyB7XFxuXFx0XFx0Ym90dG9tOiAxMHB4O1xcblxcdH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL25vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDLFVBQVU7Q0FDVixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsc0JBQWlCO01BQWpCLGlCQUFpQjtDQUNqQixvQ0FBb0M7Q0FDcEMsbUNBQW1DO0NBQ25DOztBQUVEO0NBQ0MsMERBQTBEO0NBQzFELG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLG9DQUFvQztDQUNwQyxtQ0FBbUM7Q0FDbkMsaUJBQWlCO0NBQ2pCOztBQUVEOztDQUVDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25COzhDQUM2QztDQUM3Qzs7QUFF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Qy9DOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsUUFBUTtDQUNSOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkI7O0FBRUQ7O0NBRUMscUNBQXFDO0NBQ3JDOztBQUVEO0NBQ0MscUNBQXFDO0NBQ3JDOztBQUVEOztDQUVDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0I7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQiw4Q0FBOEM7Q0FDOUMsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0MsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0I7O0FBRUQ7OztFQUdFO0FBQ0Y7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakI7O0NBRUQ7RUFDQyxhQUFhO0VBQ2I7O0NBRUQ7RUFDQyxpQ0FBaUM7RUFDakMsNkJBQXlCO01BQXpCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsc0JBQWlCO09BQWpCLGlCQUFpQjtFQUNqQjtDQUNEOztBQUVEO0NBQ0M7RUFDQyxhQUFhO0VBQ2I7O0NBRUQ7RUFDQyxhQUFhO0VBQ2I7Q0FDRFwiLFwiZmlsZVwiOlwiaW5kZXguY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250OiAxNHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNGVtO1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0Y29sb3I6ICM0ZDRkNGQ7XFxuXFx0bWluLXdpZHRoOiAyMzBweDtcXG5cXHRtYXgtd2lkdGg6IDU1MHB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvYXBwIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdG1hcmdpbjogMTMwcHggMCA0MHB4IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcXG5cXHQgICAgICAgICAgICAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGgxIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAtMTU1cHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAxMDBweDtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XFxuXFx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcblxcdC1tb3otdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG5cXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLmVkaXQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG5cXHRib3JkZXI6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG5cXHRwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA2MHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwwLDAsMC4wMyk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG59XFxuXFxubGFiZWxbZm9yPSd0b2dnbGUtYWxsJ10ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtYWxsIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAtNTVweDtcXG5cXHRsZWZ0OiAtMTJweDtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDM0cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xcbn1cXG5cXG4udG9nZ2xlLWFsbDpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICfina8nO1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRjb2xvcjogI2U2ZTZlNjtcXG5cXHRwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xcbn1cXG5cXG4udG9nZ2xlLWFsbDpjaGVja2VkOmJlZm9yZSB7XFxuXFx0Y29sb3I6ICM3MzczNzM7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGk6bGFzdC1jaGlsZCB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIHtcXG5cXHRib3JkZXItYm90dG9tOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyAuZWRpdCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0d2lkdGg6IDUwNnB4O1xcblxcdHBhZGRpbmc6IDEzcHggMTdweCAxMnB4IDE3cHg7XFxuXFx0bWFyZ2luOiAwIDAgMCA0M3B4O1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLnZpZXcge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdC8qIGF1dG8sIHNpbmNlIG5vbi1XZWJLaXQgYnJvd3NlcnMgZG9lc24ndCBzdXBwb3J0IGlucHV0IHN0eWxpbmcgKi9cXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0bWFyZ2luOiBhdXRvIDA7XFxuXFx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTphZnRlciB7XFxuXFx0Y29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB2aWV3Qm94PVxcXCItMTAgLTE4IDEwMCAxMzVcXFwiPjxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjUwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiNlZGVkZWRcXFwiIHN0cm9rZS13aWR0aD1cXFwiM1xcXCIvPjwvc3ZnPicpO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGU6Y2hlY2tlZDphZnRlciB7XFxuXFx0Y29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB2aWV3Qm94PVxcXCItMTAgLTE4IDEwMCAxMzVcXFwiPjxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjUwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiNiZGRhZDVcXFwiIHN0cm9rZS13aWR0aD1cXFwiM1xcXCIvPjxwYXRoIGZpbGw9XFxcIiM1ZGMyYWZcXFwiIGQ9XFxcIk03MiAyNUw0MiA3MSAyNyA1NmwtNCA0IDIwIDIwIDM0LTUyelxcXCIvPjwvc3ZnPicpO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIGxhYmVsIHtcXG5cXHR3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuXFx0d29yZC1icmVhazogYnJlYWstYWxsO1xcblxcdHBhZGRpbmc6IDE1cHggNjBweCAxNXB4IDE1cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDQ1cHg7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjtcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmNvbXBsZXRlZCBsYWJlbCB7XFxuXFx0Y29sb3I6ICNkOWQ5ZDk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMTBweDtcXG5cXHRib3R0b206IDA7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdG1hcmdpbjogYXV0byAwO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRjb2xvcjogI2NjOWE5YTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xcblxcdGNvbG9yOiAjYWY1YjVlO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnw5cnO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZWRpdCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nOmxhc3QtY2hpbGQge1xcblxcdG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcblxcbi5mb290ZXIge1xcblxcdGNvbG9yOiAjNzc3O1xcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbn1cXG5cXG4uZm9vdGVyOmJlZm9yZSB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogNTBweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuXFx0ICAgICAgICAgICAgMCA4cHggMCAtM3B4ICNmNmY2ZjYsXFxuXFx0ICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcblxcdCAgICAgICAgICAgIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcXG5cXHQgICAgICAgICAgICAwIDE3cHggMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udG9kby1jb3VudCB7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRvZG8tY291bnQgc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uZmlsdGVycyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmZpbHRlcnMgbGkge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYSB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0bWFyZ2luOiAzcHg7XFxuXFx0cGFkZGluZzogM3B4IDdweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkLFxcbi5maWx0ZXJzIGxpIGE6aG92ZXIge1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xKTtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYS5zZWxlY3RlZCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjIpO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkLFxcbmh0bWwgLmNsZWFyLWNvbXBsZXRlZDphY3RpdmUge1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5pbmZvIHtcXG5cXHRtYXJnaW46IDY1cHggYXV0byAwO1xcblxcdGNvbG9yOiAjYmZiZmJmO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5mbyBwIHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmluZm8gYSB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5pbmZvIGE6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKlxcblxcdEhhY2sgdG8gcmVtb3ZlIGJhY2tncm91bmQgZnJvbSBNb2JpbGUgU2FmYXJpLlxcblxcdENhbid0IHVzZSBpdCBnbG9iYWxseSBzaW5jZSBpdCBkZXN0cm95cyBjaGVja2JveGVzIGluIEZpcmVmb3hcXG4qL1xcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkge1xcblxcdC50b2dnbGUtYWxsLFxcblxcdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG5cXHRcXHRoZWlnaHQ6IDQwcHg7XFxuXFx0fVxcblxcblxcdC50b2dnbGUtYWxsIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFx0XFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcXG5cXHQuZm9vdGVyIHtcXG5cXHRcXHRoZWlnaHQ6IDUwcHg7XFxuXFx0fVxcblxcblxcdC5maWx0ZXJzIHtcXG5cXHRcXHRib3R0b206IDEwcHg7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJi1yZXN0cnVjdHVyaW5nIS4vfi9wb3N0Y3NzLWxvYWRlciEuL34vdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5zZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpOztcblx0ZXhwb3J0cy5tZXJnZSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdGV4cG9ydHMucmVtb3ZlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdC1rZXlzXCIpO1xuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgYXNzaWduID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBpc0FycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0dmFyIGZvckVhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHR2YXIgbWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdC8vIG5vZGUgc3RydWN0dXJlIHtrZXksIHZhbHVlLCBkYXRhLCBwYXJlbnROb2RlfVxuXG5cdHZhciBOb2RlID0gZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIE5vZGUoX3JlZikge1xuXHQgICAgdmFyIGtleSA9IF9yZWYua2V5O1xuXHQgICAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcblx0ICAgIHZhciBkYXRhID0gX3JlZi5kYXRhO1xuXHQgICAgdmFyIHBhcmVudE5vZGUgPSBfcmVmLnBhcmVudE5vZGU7XG5cblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuXHQgICAgdGhpcy5rZXkgPSBrZXk7XG5cdCAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cdCAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXHQgICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcblx0ICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcblx0ICB9XG5cblx0ICBfY3JlYXRlQ2xhc3MoTm9kZSwgW3tcblx0ICAgIGtleTogJ3NldENoaWxkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDaGlsZChrZXksIGNoaWxkKSB7XG5cdCAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IGNoaWxkO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2dldENoaWxkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZChrZXkpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5ba2V5XTtcblx0ICAgIH1cblx0ICB9XSk7XG5cblx0ICByZXR1cm4gTm9kZTtcblx0fSgpO1xuXG5cdC8vIEFzc2lnbiBkYXRhIHdpdGggYXJyYXk6IHtrZXksIHZhbHVlLCB0eXBlPSdzZXQnfVxuXHQvLyBkYXRhIDogYXJyYXkgPT4gcmVwbGFjZSB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgaW5kZXgob2JqLmtleSlcblx0Ly8gICAgICAgIG9iamVjdCA9PiBhc3NpZ24gb2JqZWN0XG5cdC8vIFxuXHQvLyBlZzpvYmoxOntrZXk6MSx2YWx1ZX0sb2JqMjp7a2V5OjMsdmFsdWV9XG5cdC8vXG5cdC8vIGFycmF5OlxuXHQvLyBbMCwgMSwgICAgICAgICAgMiwgMywgICAgICAgICAgNF0gPT5cblx0Ly8gWzAsIG9iajEudmFsdWUsIDIsIG9iajIudmFsdWUsIDRdXG5cdC8vXG5cdC8vIG9iamVjdDpcblx0Ly8ge1xuXHQvLyAgIFwiMVwiOjEsXG5cdC8vICAgXCIzXCI6M1xuXHQvLyB9ID0+XG5cdC8vIHtcblx0Ly8gICBcIjFcIjpvYmoxLnZhbHVlLFxuXHQvLyAgIFwiM1wiOm9iajIudmFsdWVcblx0Ly8gfVxuXG5cblx0ZnVuY3Rpb24gYXNzaWduRGF0YShub2RlLCBhcnJheSkge1xuXHQgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ3NldCcgOiBhcmd1bWVudHNbMl07XG5cblx0ICB2YXIgZGF0YSA9IG5vZGUuZGF0YTtcblx0ICBpZiAodHlwZSA9PT0gJ3JlbW92ZScgJiYgbm9kZS5zZWNvbmROb2RlKSB7XG5cdCAgICBpZiAoaXNBcnJheShkYXRhKSkge1xuXHQgICAgICBkYXRhID0gZGF0YS5jb25jYXQoKTtcblx0ICAgICAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKG9iaiwgaW5kZXgpIHtcblx0ICAgICAgICAvLyBzcGxpY2UgMSBpdGVtIGFuZCBpbmRleCAtIDFcblx0ICAgICAgICBkYXRhLnNwbGljZShvYmoua2V5IC0gaW5kZXgsIDEpO1xuXHQgICAgICB9KTtcblx0ICAgICAgcmV0dXJuIGRhdGE7XG5cdCAgICB9XG5cdCAgICBkYXRhID0gYXNzaWduKHt9LCBkYXRhKTtcblx0ICAgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgaWYgKG9iai5rZXkgaW4gZGF0YSkge1xuXHQgICAgICAgIGRlbGV0ZSBkYXRhW29iai5rZXldO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBkYXRhO1xuXHQgIH1cblxuXHQgIGlmIChpc0FycmF5KGRhdGEpKSB7XG5cdCAgICBkYXRhID0gZGF0YS5jb25jYXQoKTtcblx0ICAgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgZGF0YVtvYmoua2V5XSA9IG9iai52YWx1ZTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXHQgIHZhciBhc3NpZ25PYmplY3QgPSB7fTtcblx0ICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICBhc3NpZ25PYmplY3Rbb2JqLmtleV0gPSBvYmoudmFsdWU7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIGFzc2lnbih7fSwgZGF0YSwgYXNzaWduT2JqZWN0KTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIHRyZWUgdGhhdCBjYW4gYmUgdXNlZCB0byBoYW5kbGUgbXVsdGlwbGUgZGF0YVxuXHQvLyBAcGFyYW0gZGF0YSAoT2JqZWN0IG9yIEFycmF5KVxuXHQvLyBAcGFyYW0gYXJyYXkgKEFycmF5IG9mIFN0cnVjdHVyZSB7cGF0aCwgZGF0YX0pXG5cdC8vXG5cdC8vIGVnOlt7cGF0aDpbXCJhXCIsXCJiXCJdLGRhdGE6MX0se3BhdGg6W1wiYVwiLFwiY1wiXSxkYXRhOjJ9XSA9PlxuXHQvLyAgIGFcblx0Ly8gIC8gXFxcblx0Ly8gYiAgIGNcblx0Ly8gfCAgIHxcblx0Ly8gMSAgIDJcblx0ZnVuY3Rpb24gY3JlYXRlVHJlZShkYXRhLCBhcnJheSkge1xuXHQgIHZhciB0cmVlID0gbmV3IE5vZGUoe1xuXHQgICAgZGF0YTogZGF0YVxuXHQgIH0pO1xuXG5cdCAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgIHZhciBwb2ludGVyID0gdHJlZTtcblx0ICAgIHZhciBkYXRhUG9pbnRlciA9IGRhdGE7XG5cblx0ICAgIHZhciBsZW4gPSBpdGVtLnBhdGgubGVuZ3RoO1xuXG5cdCAgICBmb3JFYWNoKGl0ZW0ucGF0aCwgZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcblxuXHQgICAgICB2YXIgY2hpbGQgPSBwb2ludGVyLmdldENoaWxkKGtleSkgfHwgbmV3IE5vZGUoe1xuXHQgICAgICAgIC8vIG5vZGUgbmFtZVxuXHQgICAgICAgIGtleToga2V5LFxuXHQgICAgICAgIC8vIGxlYWYgbm9kZSB2YWx1ZVxuXHQgICAgICAgIHZhbHVlOiBsZW4gPT09IGluZGV4ICsgMSA/IGl0ZW0uZGF0YSA6IG51bGwsXG5cdCAgICAgICAgLy8gcmVhbCBkYXRhXG5cdCAgICAgICAgZGF0YTogZGF0YVBvaW50ZXJba2V5XSxcblx0ICAgICAgICAvLyBwYXJlbnQgbm9kZVxuXHQgICAgICAgIHBhcmVudE5vZGU6IHBvaW50ZXJcblx0ICAgICAgfSk7XG5cblx0ICAgICAgZGF0YVBvaW50ZXIgPSBkYXRhUG9pbnRlcltrZXldO1xuXHQgICAgICBwb2ludGVyLnNldENoaWxkKGtleSwgY2hpbGQpO1xuXHQgICAgICBwb2ludGVyID0gY2hpbGQ7XG5cdCAgICB9KTtcblx0ICB9KTtcblx0ICByZXR1cm4gdHJlZTtcblx0fVxuXG5cdC8vIFJlY3Vyc2l2ZSBhY2Nlc3Mgbm9kZSBhbmQgZ2V0IHRoZSBhc3NpZ25EYXRhLFxuXHQvLyBhbmQgdGhlbiByZXR1cm4gdGhlIHJvb3Qgbm9kZSB2YWx1ZVxuXHRmdW5jdGlvbiBnZXROb2RlVmFsdWUobm9kZSwgdHlwZSkge1xuXHQgIHZhciBhcnJheSA9IGtleXMobm9kZS5jaGlsZHJlbik7XG5cblx0ICAvLyBKdXN0IGdldCB0aGUgbGVhZiBub2RlIHZhbHVlLFxuXHQgIC8vIGlmIGEgbm9kZSBpcyBub3QgYSBsZWFmIG5vZGUgYW5kIGl0cyB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkLFxuXHQgIC8vIHRoZW4gdGhlIHZhbHVlIGlzIGlnbm9yZWQuXG5cdCAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgLy8gTWFyayB0aGUgcGFyZW50IG5vZGUgaXMgdGhlIHNlY29uZCBsYXN0IG5vZGUsXG5cdCAgICAvLyBzbyBpdCBpcyBjb252ZW5pZW50IHRvIGtub3cgaW4gd2hpY2ggbm9kZSBjYW4gcmVtb3ZlIGF0dHJpYnV0ZXNcblx0ICAgIG5vZGUucGFyZW50Tm9kZS5zZWNvbmROb2RlID0gdHJ1ZTtcblx0ICAgIHJldHVybiBub2RlLnZhbHVlO1xuXHQgIH1cblxuXHQgIHZhciBhc3NpZ25BcnJheSA9IG1hcChhcnJheSwgZnVuY3Rpb24gKGtleSkge1xuXHQgICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZHJlbltrZXldO1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAga2V5OiBjaGlsZC5rZXksXG5cdCAgICAgIHZhbHVlOiBnZXROb2RlVmFsdWUoY2hpbGQsIHR5cGUpXG5cdCAgICB9O1xuXHQgIH0pO1xuXG5cdCAgcmV0dXJuIGFzc2lnbkRhdGEobm9kZSwgYXNzaWduQXJyYXksIHR5cGUpO1xuXHR9XG5cblx0ZXhwb3J0cy5jcmVhdGVUcmVlID0gY3JlYXRlVHJlZTtcblx0ZXhwb3J0cy5nZXROb2RlVmFsdWUgPSBnZXROb2RlVmFsdWU7XG5cbi8qKiovIH0sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcnJheS1tYXBcIik7XG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcnJheS1mb3JlYWNoXCIpO1xuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXMtYXJyYXlcIik7XG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3QtcGF0aC1wYXJzZVwiKTtcblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuXHR2YXIgaXNQbGFpbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHR2YXIgZm9yRWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBjcmVhdGVUcmVlID0gX3JlcXVpcmUuY3JlYXRlVHJlZTtcblx0dmFyIGdldE5vZGVWYWx1ZSA9IF9yZXF1aXJlLmdldE5vZGVWYWx1ZTtcblxuXHQvLyBHZXQgdGhlIHRyZWUgcGF0aCBhcnJheVxuXHQvLyByZXR1cm4gQXJyYXkgb2YgU3RydWN0dXJlKHtwYXRoOiBBcnJheSBvZiBTdHJpbmcsIGRhdGE6IG5vZGUgdmFsdWV9KVxuXHQvL1xuXHQvLyBlZzpcblx0Ly8gdmFsdWU6XG5cdC8vICAgYVxuXHQvLyAgLyBcXFxuXHQvLyBiICAgY1xuXHQvLyB8ICAgfFxuXHQvLyAxICAgMlxuXHQvLyByZXR1cm46XG5cdC8vIFt7cGF0aDpbXCJhXCIsXCJiXCJdLCBkYXRhOjF9LCB7cGF0aDpbXCJhXCIsXCJjXCJdLCBkYXRhOjJ9XVxuXHQvL1xuXHQvLyBJZiB0aGUgZGF0YSBpcyBub3QgYSBwbGFpbiBvYmplY3QsIGFzc2lnbiBpdCB0byB0aGUgZWxlbWVudCxcblx0Ly9cblx0Ly8gZWc6XG5cdC8vIG1lcmdlKHtsaXN0OlsxLDJdfSwge2xpc3Q6WzBdfSkgPT4ge2xpc3Q6WzBdfVxuXHQvLyBtZXJnZSh7bGlzdDpbMSwyXX0sIHtsaXN0OntcIjBcIjowfX0pID0+IHtsaXN0OlswLDJdfVxuXG5cdGZ1bmN0aW9uIGdldE9iamVjdFBhdGgodmFsdWUpIHtcblx0ICB2YXIgbGlzdCA9IFtdO1xuXHQgIGZ1bmN0aW9uIHRyYXZlcnNlKGRhdGEpIHtcblx0ICAgIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgIGlmIChpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG5cdCAgICAgIGZvckVhY2goa2V5cyhkYXRhKSwgZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICAgIHRyYXZlcnNlKGRhdGFba2V5XSwgcGF0aC5jb25jYXQoa2V5KSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBsaXN0LnB1c2goe1xuXHQgICAgICBwYXRoOiBwYXRoLFxuXHQgICAgICBkYXRhOiBkYXRhXG5cdCAgICB9KTtcblx0ICB9XG5cdCAgdHJhdmVyc2UodmFsdWUpO1xuXHQgIHJldHVybiBsaXN0O1xuXHR9XG5cblx0Ly8gZGVlcCBtZXJnZSBkYXRhXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2UoZGF0YSwgb2JqKSB7XG5cdCAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpICE9PSAnb2JqZWN0Jykge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhIHNob3VsZCBiZSBPYmplY3Qgb3IgQXJyYXknKTtcblx0ICB9XG5cdCAgaWYgKCFvYmopIHtcblx0ICAgIHJldHVybiBkYXRhO1xuXHQgIH1cblx0ICB2YXIgYXJyYXkgPSBnZXRPYmplY3RQYXRoKG9iaik7XG5cdCAgdmFyIHRyZWUgPSBjcmVhdGVUcmVlKGRhdGEsIGFycmF5KTtcblx0ICB2YXIgdmFsdWUgPSBnZXROb2RlVmFsdWUodHJlZSk7XG5cdCAgcmV0dXJuIHZhbHVlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5cdHZhciBwYXJzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdHZhciBtYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzIHx8IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdHZhciBpc0FycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBjcmVhdGVUcmVlID0gX3JlcXVpcmUuY3JlYXRlVHJlZTtcblx0dmFyIGdldE5vZGVWYWx1ZSA9IF9yZXF1aXJlLmdldE5vZGVWYWx1ZTtcblxuXHQvLyByZW1vdmUoZGF0YSwgU3RyaW5nIG9yIEFycmF5KVxuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVtb3ZlKGRhdGEpIHtcblx0ICB2YXIgYXJyYXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSAhPT0gJ29iamVjdCcpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBzaG91bGQgYmUgT2JqZWN0IG9yIEFycmF5Jyk7XG5cdCAgfVxuXG5cdCAgaWYgKCFpc0FycmF5KGFycmF5KSkge1xuXHQgICAgYXJyYXkgPSBbYXJyYXldO1xuXHQgIH1cblxuXHQgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcblx0ICAgIHJldHVybiBkYXRhO1xuXHQgIH1cblxuXHQgIGFycmF5ID0gbWFwKGFycmF5LCBmdW5jdGlvbiAocGF0aCkge1xuXHQgICAgcGF0aCA9IFN0cmluZyhwYXRoKTtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIC8vIEp1c3QgdXNlIHNwbGl0IGlmIHRoZXJlIGlzIG5vICdbJyBpbiBwYXRoXG5cdCAgICAgIC8vIGVnOiBvYmpbXCJsaXN0XCJdID0+IHBhcnNlLCBvYmoubGlzdCA9PiBzcGxpdFxuXHQgICAgICBwYXRoOiBwYXRoLmluZGV4T2YoJ1snKSA+IC0xID8gcGFyc2UocGF0aCkgOiBwYXRoLnNwbGl0KCcuJyksXG5cdCAgICAgIGRhdGE6IG51bGxcblx0ICAgIH07XG5cdCAgfSk7XG5cblx0ICB2YXIgdHJlZSA9IGNyZWF0ZVRyZWUoZGF0YSwgYXJyYXkpO1xuXHQgIHZhciB2YWx1ZSA9IGdldE5vZGVWYWx1ZSh0cmVlLCAncmVtb3ZlJyk7XG5cdCAgcmV0dXJuIHZhbHVlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5cdHZhciBwYXJzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdHZhciBtYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzIHx8IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0dmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgY3JlYXRlVHJlZSA9IF9yZXF1aXJlLmNyZWF0ZVRyZWU7XG5cdHZhciBnZXROb2RlVmFsdWUgPSBfcmVxdWlyZS5nZXROb2RlVmFsdWU7XG5cblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldChkYXRhKSB7XG5cdCAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpICE9PSAnb2JqZWN0Jykge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhIHNob3VsZCBiZSBPYmplY3Qgb3IgQXJyYXknKTtcblx0ICB9XG5cdCAgdmFyIGFycmF5ID0ga2V5cyhvYmopO1xuXHQgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcblx0ICAgIHJldHVybiBkYXRhO1xuXHQgIH1cblx0ICBhcnJheSA9IG1hcChhcnJheSwgZnVuY3Rpb24gKHBhdGgpIHtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIC8vIEp1c3QgdXNlIHNwbGl0IGlmIHRoZXJlIGlzIG5vICdbJyBpbiBwYXRoXG5cdCAgICAgIC8vIGVnOiBvYmpbXCJsaXN0XCJdID0+IHBhcnNlLCBvYmoubGlzdCA9PiBzcGxpdFxuXHQgICAgICBwYXRoOiBwYXRoLmluZGV4T2YoJ1snKSA+IC0xID8gcGFyc2UocGF0aCkgOiBwYXRoLnNwbGl0KCcuJyksXG5cdCAgICAgIGRhdGE6IG9ialtwYXRoXVxuXHQgICAgfTtcblx0ICB9KTtcblx0ICB2YXIgdHJlZSA9IGNyZWF0ZVRyZWUoZGF0YSwgYXJyYXkpO1xuXHQgIHZhciB2YWx1ZSA9IGdldE5vZGVWYWx1ZSh0cmVlKTtcblx0ICByZXR1cm4gdmFsdWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXMtcGxhaW4tb2JqZWN0XCIpO1xuXG4vKioqLyB9LFxuLyogMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIik7XG5cbi8qKiovIH1cbi8qKioqKiovIF0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ltbXV0YWJsZS1kYXRhL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaXMtYXJyYXkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xudmFyIGhhc0RvbnRFbnVtQnVnID0gISh7IHRvU3RyaW5nOiBudWxsIH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xudmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGZ1bmN0aW9uICgpIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCdwcm90b3R5cGUnKTtcbnZhciBkb250RW51bXMgPSBbXG5cdCd0b1N0cmluZycsXG5cdCd0b0xvY2FsZVN0cmluZycsXG5cdCd2YWx1ZU9mJyxcblx0J2hhc093blByb3BlcnR5Jyxcblx0J2lzUHJvdG90eXBlT2YnLFxuXHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHQnY29uc3RydWN0b3InXG5dO1xudmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcbn07XG52YXIgYmxhY2tsaXN0ZWRLZXlzID0ge1xuXHQkY29uc29sZTogdHJ1ZSxcblx0JGZyYW1lOiB0cnVlLFxuXHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHQkZnJhbWVzOiB0cnVlLFxuXHQkcGFyZW50OiB0cnVlLFxuXHQkc2VsZjogdHJ1ZSxcblx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHQkd2luZG93OiB0cnVlXG59O1xudmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWJsYWNrbGlzdGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59KCkpO1xudmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdH1cblx0dHJ5IHtcblx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciBrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHR9XG5cblx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aGVLZXlzO1xufTtcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0cmV0dXJuIChPYmplY3Qua2V5cyhhcmd1bWVudHMpIHx8ICcnKS5sZW5ndGggPT09IDI7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1rZXlzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odCkge1xuICAgIGZ1bmN0aW9uIG4oaSkge1xuICAgICAgICBpZiAoZVtpXSkgcmV0dXJuIGVbaV0uZXhwb3J0cztcbiAgICAgICAgdmFyIHIgPSBlW2ldID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgIGxvYWRlZDogITFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRbaV0uY2FsbChyLmV4cG9ydHMsIHIsIHIuZXhwb3J0cywgbiksIHIubG9hZGVkID0gITAsIHIuZXhwb3J0cztcbiAgICB9XG4gICAgdmFyIGUgPSB7fTtcbiAgICByZXR1cm4gbi5tID0gdCwgbi5jID0gZSwgbi5wID0gXCJcIiwgbigwKTtcbn0oWyBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gaSh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQuX19lc01vZHVsZSA/IHQgOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogdFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiByKHQpIHtcbiAgICAgICAgcmV0dXJuICgwLCBvW1wiZGVmYXVsdFwiXSkoaFtcImRlZmF1bHRcIl0ucGFyc2UodCkpLnJlZHVjZShmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xlYWYgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgbiAmJiB0LnB1c2gobiksIHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgIH0pLCBuW1wiZGVmYXVsdFwiXSA9IHI7XG4gICAgdmFyIHMgPSBlKDEpLCBvID0gaShzKSwgbCA9IGUoMiksIGggPSBpKGwpO1xuICAgIHQuZXhwb3J0cyA9IG5bXCJkZWZhdWx0XCJdO1xufSwgZnVuY3Rpb24odCwgbikge1xuICAgIHQuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0cmF2ZXJzZVwiKTtcbn0sIGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICAoZnVuY3Rpb24odCwgaSkge1xuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnl5ID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbiA9IFsgMSwgMyBdLCBlID0gWyAxLCA0IF0sIGkgPSBbIDIsIDYgXSwgciA9IFsgMSwgNyBdLCBzID0gWyAxLCA4IF0sIG8gPSB7XG4gICAgICAgICAgICAgICAgdHJhY2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgeXk6IHt9LFxuICAgICAgICAgICAgICAgIHN5bWJvbHNfOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAyLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uczogMyxcbiAgICAgICAgICAgICAgICAgICAgZTogNCxcbiAgICAgICAgICAgICAgICAgICAgRU9GOiA1LFxuICAgICAgICAgICAgICAgICAgICBQUk9QRVJUWTogNixcbiAgICAgICAgICAgICAgICAgICAgcDogNyxcbiAgICAgICAgICAgICAgICAgICAgTlVNQkVSOiA4LFxuICAgICAgICAgICAgICAgICAgICBcIi5cIjogOSxcbiAgICAgICAgICAgICAgICAgICAgXCJbXCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICB0OiAxMSxcbiAgICAgICAgICAgICAgICAgICAgXCJdXCI6IDEyLFxuICAgICAgICAgICAgICAgICAgICBTVFJJTkc6IDEzLFxuICAgICAgICAgICAgICAgICAgICAkYWNjZXB0OiAwLFxuICAgICAgICAgICAgICAgICAgICAkZW5kOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbHNfOiB7XG4gICAgICAgICAgICAgICAgICAgIDI6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgNTogXCJFT0ZcIixcbiAgICAgICAgICAgICAgICAgICAgNjogXCJQUk9QRVJUWVwiLFxuICAgICAgICAgICAgICAgICAgICA4OiBcIk5VTUJFUlwiLFxuICAgICAgICAgICAgICAgICAgICA5OiBcIi5cIixcbiAgICAgICAgICAgICAgICAgICAgMTA6IFwiW1wiLFxuICAgICAgICAgICAgICAgICAgICAxMjogXCJdXCIsXG4gICAgICAgICAgICAgICAgICAgIDEzOiBcIlNUUklOR1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uc186IFsgMCwgWyAzLCAyIF0sIFsgNCwgMiBdLCBbIDQsIDIgXSwgWyA3LCAyIF0sIFsgNywgNCBdLCBbIDcsIDAgXSwgWyAxMSwgMSBdLCBbIDExLCAxIF0gXSxcbiAgICAgICAgICAgICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbih0LCBuLCBlLCBpLCByLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc1tsIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA6IHNbbCAtIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IHNbbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBzW2xdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcDogc1tsIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTogc1tsXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gc1tsXS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHNbbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhYmxlOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgMzogMSxcbiAgICAgICAgICAgICAgICAgICAgNDogMixcbiAgICAgICAgICAgICAgICAgICAgNjogbixcbiAgICAgICAgICAgICAgICAgICAgODogZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgMTogWyAzIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMSwgNSBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBpLFxuICAgICAgICAgICAgICAgICAgICA3OiA2LFxuICAgICAgICAgICAgICAgICAgICA5OiByLFxuICAgICAgICAgICAgICAgICAgICAxMDogc1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogaSxcbiAgICAgICAgICAgICAgICAgICAgNzogOSxcbiAgICAgICAgICAgICAgICAgICAgOTogcixcbiAgICAgICAgICAgICAgICAgICAgMTA6IHNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDE6IFsgMiwgMSBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDIgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNDogMTAsXG4gICAgICAgICAgICAgICAgICAgIDY6IG4sXG4gICAgICAgICAgICAgICAgICAgIDg6IGVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDg6IFsgMSwgMTMgXSxcbiAgICAgICAgICAgICAgICAgICAgMTE6IDExLFxuICAgICAgICAgICAgICAgICAgICAxMzogWyAxLCAxMiBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDMgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCA0IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDEsIDE0IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDIsIDcgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgMTI6IFsgMiwgOCBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBpLFxuICAgICAgICAgICAgICAgICAgICA3OiAxNSxcbiAgICAgICAgICAgICAgICAgICAgOTogcixcbiAgICAgICAgICAgICAgICAgICAgMTA6IHNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgNSBdXG4gICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgMSBdLFxuICAgICAgICAgICAgICAgICAgICA2OiBbIDIsIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgOTogWyAyLCAzIF0sXG4gICAgICAgICAgICAgICAgICAgIDEwOiBbIDIsIDQgXSxcbiAgICAgICAgICAgICAgICAgICAgMTI6IFsgMiwgNyBdLFxuICAgICAgICAgICAgICAgICAgICAxMzogWyAyLCA4IF0sXG4gICAgICAgICAgICAgICAgICAgIDE1OiBbIDIsIDUgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW4ucmVjb3ZlcmFibGUpIHRocm93IG5ldyBFcnJvcih0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFjZSh0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcnNlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gcC5sZXgoKSB8fCB5LCBcIm51bWJlclwiICE9IHR5cGVvZiB0ICYmICh0ID0gZS5zeW1ib2xzX1t0XSB8fCB0KSwgdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMsIGkgPSBbIDAgXSwgciA9IFsgbnVsbCBdLCBzID0gW10sIG8gPSB0aGlzLnRhYmxlLCBsID0gXCJcIiwgaCA9IDAsIGMgPSAwLCBhID0gMCwgdSA9IDIsIHkgPSAxLCBmID0gcy5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIHAgPSBPYmplY3QuY3JlYXRlKHRoaXMubGV4ZXIpLCBnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeXk6IHt9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gdGhpcy55eSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIG0pICYmIChnLnl5W21dID0gdGhpcy55eVttXSk7XG4gICAgICAgICAgICAgICAgICAgIHAuc2V0SW5wdXQodCwgZy55eSksIGcueXkubGV4ZXIgPSBwLCBnLnl5LnBhcnNlciA9IHRoaXMsIFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHAueXlsbG9jICYmIChwLnl5bGxvYyA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF8gPSBwLnl5bGxvYztcbiAgICAgICAgICAgICAgICAgICAgcy5wdXNoKF8pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHAub3B0aW9ucyAmJiBwLm9wdGlvbnMucmFuZ2VzO1xuICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGcueXkucGFyc2VFcnJvciA/IHRoaXMucGFyc2VFcnJvciA9IGcueXkucGFyc2VFcnJvciA6IHRoaXMucGFyc2VFcnJvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZUVycm9yO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB2LCBiLCBrLCB4LCB3LCBFLCBTLCBBLCBJLCBQID0ge307IDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID0gaVtpLmxlbmd0aCAtIDFdLCB0aGlzLmRlZmF1bHRBY3Rpb25zW2tdID8geCA9IHRoaXMuZGVmYXVsdEFjdGlvbnNba10gOiAoKG51bGwgPT09IHYgfHwgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgdikgJiYgKHYgPSBuKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBvW2tdICYmIG9ba11bdl0pLCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiB4IHx8ICF4Lmxlbmd0aCB8fCAheFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChFIGluIG9ba10pIHRoaXMudGVybWluYWxzX1tFXSAmJiBFID4gdSAmJiBJLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bRV0gKyBcIidcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCA9IHAuc2hvd1Bvc2l0aW9uID8gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKGggKyAxKSArIFwiOlxcblwiICsgcC5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgSS5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bdl0gfHwgdikgKyBcIidcIiA6IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChoICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArICh2ID09IHkgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3ZdIHx8IHYpICsgXCInXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoJCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwLm1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3ZdIHx8IHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHAueXlsaW5lbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IElcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4WzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgeC5sZW5ndGggPiAxKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBrICsgXCIsIHRva2VuOiBcIiArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh4WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2godiksIHIucHVzaChwLnl5dGV4dCksIHMucHVzaChwLnl5bGxvYyksIGkucHVzaCh4WzFdKSwgdiA9IG51bGwsIGIgPyAodiA9IGIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBudWxsKSA6IChjID0gcC55eWxlbmcsIGwgPSBwLnl5dGV4dCwgaCA9IHAueXlsaW5lbm8sIF8gPSBwLnl5bGxvYywgYSA+IDAgJiYgYS0tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFMgPSB0aGlzLnByb2R1Y3Rpb25zX1t4WzFdXVsxXSwgUC4kID0gcltyLmxlbmd0aCAtIFNdLCBQLl8kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiBzW3MubGVuZ3RoIC0gKFMgfHwgMSldLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogc1tzLmxlbmd0aCAtIDFdLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBzW3MubGVuZ3RoIC0gKFMgfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHNbcy5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGQgJiYgKFAuXyQucmFuZ2UgPSBbIHNbcy5sZW5ndGggLSAoUyB8fCAxKV0ucmFuZ2VbMF0sIHNbcy5sZW5ndGggLSAxXS5yYW5nZVsxXSBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHRoaXMucGVyZm9ybUFjdGlvbi5hcHBseShQLCBbIGwsIGMsIGgsIGcueXksIHhbMV0sIHIsIHMgXS5jb25jYXQoZikpLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3KSByZXR1cm4gdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTICYmIChpID0gaS5zbGljZSgwLCAtMSAqIFMgKiAyKSwgciA9IHIuc2xpY2UoMCwgLTEgKiBTKSwgcyA9IHMuc2xpY2UoMCwgLTEgKiBTKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1t4WzFdXVswXSksIHIucHVzaChQLiQpLCBzLnB1c2goUC5fJCksIEEgPSBvW2lbaS5sZW5ndGggLSAyXV1baVtpLmxlbmd0aCAtIDFdXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKEEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgRU9GOiAxLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMueXkucGFyc2VyKSB0aHJvdyBuZXcgRXJyb3IodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKHQsIG4pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dDogZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueXkgPSBuIHx8IHRoaXMueXkgfHwge30sIHRoaXMuX2lucHV0ID0gdCwgdGhpcy5fbW9yZSA9IHRoaXMuX2JhY2t0cmFjayA9IHRoaXMuZG9uZSA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDAsIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9IFwiXCIsIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbIFwiSU5JVElBTFwiIF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFsgMCwgMCBdKSwgdGhpcy5vZmZzZXQgPSAwLCB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuX2lucHV0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgKz0gdCwgdGhpcy55eWxlbmcrKywgdGhpcy5vZmZzZXQrKywgdGhpcy5tYXRjaCArPSB0LCB0aGlzLm1hdGNoZWQgKz0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA/ICh0aGlzLnl5bGluZW5vKyssIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrKSA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKyssIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVucHV0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQubGVuZ3RoLCBlID0gdC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSB0ICsgdGhpcy5faW5wdXQsIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIG4pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0IC09IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpLCB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmxlbmd0aCAtIDEgJiYgKHRoaXMueXlsaW5lbm8gLT0gZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBlID8gKGUubGVuZ3RoID09PSBpLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgaVtpLmxlbmd0aCAtIGUubGVuZ3RoXS5sZW5ndGggLSBlWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWyByWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBuIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb3JlID0gITAsIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciA/ICh0aGlzLl9iYWNrdHJhY2sgPSAhMCwgdGhpcykgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFlvdSBjYW4gb25seSBpbnZva2UgcmVqZWN0KCkgaW4gdGhlIGxleGVyIHdoZW4gdGhlIGxleGVyIGlzIG9mIHRoZSBiYWNrdHJhY2tpbmcgcGVyc3Vhc2lvbiAob3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPSB0cnVlKS5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZXNzOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UodCkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXN0SW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikgKyB0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBjb21pbmdJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5sZW5ndGggPCAyMCAmJiAodCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSB0Lmxlbmd0aCkpLCAodC5zdWJzdHIoMCwgMjApICsgKHQubGVuZ3RoID4gMjAgPyBcIi4uLlwiIDogXCJcIikpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5wYXN0SW5wdXQoKSwgbiA9IG5ldyBBcnJheSh0Lmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBuICsgXCJeXCI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRlc3RfbWF0Y2g6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlLCBpLCByO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgJiYgKHIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsaW5lbm86IHRoaXMueXlsaW5lbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsbG9jOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dGV4dDogdGhpcy55eXRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHRoaXMubWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlczogdGhpcy5tYXRjaGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxlbmc6IHRoaXMueXlsZW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX21vcmU6IHRoaXMuX21vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lucHV0OiB0aGlzLl9pbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eTogdGhpcy55eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25TdGFjazogdGhpcy5jb25kaXRpb25TdGFjay5zbGljZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lOiB0aGlzLmRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHIueXlsbG9jLnJhbmdlID0gdGhpcy55eWxsb2MucmFuZ2Uuc2xpY2UoMCkpKSwgaSA9IHRbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgJiYgKHRoaXMueXlsaW5lbm8gKz0gaS5sZW5ndGgpLCB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBpID8gaVtpLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGlbaS5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIHRbMF0ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnl5dGV4dCArPSB0WzBdLCB0aGlzLm1hdGNoICs9IHRbMF0sIHRoaXMubWF0Y2hlcyA9IHQsIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWyB0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmcgXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9ICExLCB0aGlzLl9iYWNrdHJhY2sgPSAhMSwgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSh0WzBdLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IHRbMF0sIGUgPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBuLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCAmJiAodGhpcy5kb25lID0gITEpLCBlKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIHIpIHRoaXNbc10gPSByW3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCB8fCAodGhpcy5kb25lID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQsIG4sIGUsIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3JlIHx8ICh0aGlzLnl5dGV4dCA9IFwiXCIsIHRoaXMubWF0Y2ggPSBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSB0aGlzLl9jdXJyZW50UnVsZXMoKSwgcyA9IDA7IHMgPCByLmxlbmd0aDsgcysrKSBpZiAoZSA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcltzXV0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgJiYgKCFuIHx8IGVbMF0ubGVuZ3RoID4gblswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPSBlLCBpID0gcywgdGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9IHRoaXMudGVzdF9tYXRjaChlLCByW3NdKSwgdCAhPT0gITEpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPyAodCA9IHRoaXMudGVzdF9tYXRjaChuLCByW2ldKSwgdCAhPT0gITEgPyB0IDogITEpIDogXCJcIiA9PT0gdGhpcy5faW5wdXQgPyB0aGlzLkVPRiA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gVW5yZWNvZ25pemVkIHRleHQuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGV4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA/IHQgOiB0aGlzLmxleCgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwb3BTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID4gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCkgOiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAmJiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0gPyB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcyA6IHRoaXMuY29uZGl0aW9ucy5JTklUSUFMLnJ1bGVzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b3BTdGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyh0IHx8IDApLCB0ID49IDAgPyB0aGlzLmNvbmRpdGlvblN0YWNrW3RdIDogXCJJTklUSUFMXCI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbih0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVTdGFja1NpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24odCwgbiwgZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA2O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gODtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSU5WQUxJRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBydWxlczogWyAvXig/OlwiKD86XFxcXFwifFteXFxcIl0pKlwifCcoPzpcXFxcJ3xbXlxcJ10pKicpLywgL14oPzpbYS16QS1aX1xcJF1bXFx3X1xcJF0qKS8sIC9eKD86MHxbMS05XVxcZCopLywgL14oPzpcXFspLywgL14oPzpcXF0pLywgL14oPzpcXC4pLywgL14oPzokKS8sIC9eKD86LikvIF0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIElOSVRJQUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogWyAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3IF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHJldHVybiBvLmxleGVyID0gbCwgdC5wcm90b3R5cGUgPSBvLCBvLlBhcnNlciA9IHQsIG5ldyB0KCk7XG4gICAgICAgIH0oKTtcbiAgICAgICAgbi5wYXJzZXIgPSByLCBuLlBhcnNlciA9IHIuUGFyc2VyLCBuLnBhcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gci5wYXJzZS5hcHBseShyLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBuLm1haW4gPSBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICBpWzFdIHx8IChjb25zb2xlLmxvZyhcIlVzYWdlOiBcIiArIGlbMF0gKyBcIiBGSUxFXCIpLCB0LmV4aXQoMSkpO1xuICAgICAgICAgICAgdmFyIHIgPSBlKDUpLnJlYWRGaWxlU3luYyhlKDYpLm5vcm1hbGl6ZShpWzFdKSwgXCJ1dGY4XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG4ucGFyc2VyLnBhcnNlKHIpO1xuICAgICAgICB9LCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBpICYmIGUuY1swXSA9PT0gaSAmJiBuLm1haW4odC5hcmd2LnNsaWNlKDEpKTtcbiAgICB9KS5jYWxsKG4sIGUoMyksIGUoNCkodCkpO1xufSwgZnVuY3Rpb24odCwgbikge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIGMgPSAhMSwgby5sZW5ndGggPyBoID0gby5jb25jYXQoaCkgOiBhID0gLTEsIGgubGVuZ3RoICYmIGkoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaSgpIHtcbiAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHNldFRpbWVvdXQoZSk7XG4gICAgICAgICAgICBjID0gITA7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gaC5sZW5ndGg7IG47ICkge1xuICAgICAgICAgICAgICAgIGZvciAobyA9IGgsIGggPSBbXTsgKythIDwgbjsgKSBvICYmIG9bYV0ucnVuKCk7XG4gICAgICAgICAgICAgICAgYSA9IC0xLCBuID0gaC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvID0gbnVsbCwgYyA9ICExLCBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcih0LCBuKSB7XG4gICAgICAgIHRoaXMuZnVuID0gdCwgdGhpcy5hcnJheSA9IG47XG4gICAgfVxuICAgIGZ1bmN0aW9uIHMoKSB7fVxuICAgIHZhciBvLCBsID0gdC5leHBvcnRzID0ge30sIGggPSBbXSwgYyA9ICExLCBhID0gLTE7XG4gICAgbC5uZXh0VGljayA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIG4gPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSBuW2UgLSAxXSA9IGFyZ3VtZW50c1tlXTtcbiAgICAgICAgaC5wdXNoKG5ldyByKHQsIG4pKSwgMSAhPT0gaC5sZW5ndGggfHwgYyB8fCBzZXRUaW1lb3V0KGksIDApO1xuICAgIH0sIHIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbiAgICB9LCBsLnRpdGxlID0gXCJicm93c2VyXCIsIGwuYnJvd3NlciA9ICEwLCBsLmVudiA9IHt9LCBsLmFyZ3YgPSBbXSwgbC52ZXJzaW9uID0gXCJcIiwgXG4gICAgbC52ZXJzaW9ucyA9IHt9LCBsLm9uID0gcywgbC5hZGRMaXN0ZW5lciA9IHMsIGwub25jZSA9IHMsIGwub2ZmID0gcywgbC5yZW1vdmVMaXN0ZW5lciA9IHMsIFxuICAgIGwucmVtb3ZlQWxsTGlzdGVuZXJzID0gcywgbC5lbWl0ID0gcywgbC5iaW5kaW5nID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9LCBsLmN3ZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCIvXCI7XG4gICAgfSwgbC5jaGRpciA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH0sIGwudW1hc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0LndlYnBhY2tQb2x5ZmlsbCB8fCAodC5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9LCB0LnBhdGhzID0gW10sIHQuY2hpbGRyZW4gPSBbXSwgXG4gICAgICAgIHQud2VicGFja1BvbHlmaWxsID0gMSksIHQ7XG4gICAgfTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHt9LCBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0LCBuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMCwgaSA9IHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRbaV07XG4gICAgICAgICAgICAgICAgXCIuXCIgPT09IHIgPyB0LnNwbGljZShpLCAxKSA6IFwiLi5cIiA9PT0gciA/ICh0LnNwbGljZShpLCAxKSwgZSsrKSA6IGUgJiYgKHQuc3BsaWNlKGksIDEpLCBcbiAgICAgICAgICAgICAgICBlLS0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4pIGZvciAoO2UtLTsgZSkgdC51bnNoaWZ0KFwiLi5cIik7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpKHQsIG4pIHtcbiAgICAgICAgICAgIGlmICh0LmZpbHRlcikgcmV0dXJuIHQuZmlsdGVyKG4pO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIG4odFtpXSwgaSwgdCkgJiYgZS5wdXNoKHRbaV0pO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSAvXihcXC8/fCkoW1xcc1xcU10qPykoKD86XFwuezEsMn18W15cXC9dKz98KShcXC5bXi5cXC9dKnwpKSg/OltcXC9dKikkLywgcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiByLmV4ZWModCkuc2xpY2UoMSk7XG4gICAgICAgIH07XG4gICAgICAgIG4ucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IFwiXCIsIHIgPSAhMSwgcyA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBzID49IC0xICYmICFyOyBzLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHMgPj0gMCA/IGFyZ3VtZW50c1tzXSA6IHQuY3dkKCk7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIG8pIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5nc1wiKTtcbiAgICAgICAgICAgICAgICBvICYmIChuID0gbyArIFwiL1wiICsgbiwgciA9IFwiL1wiID09PSBvLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbiA9IGUoaShuLnNwbGl0KFwiL1wiKSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXQ7XG4gICAgICAgICAgICB9KSwgIXIpLmpvaW4oXCIvXCIpLCAociA/IFwiL1wiIDogXCJcIikgKyBuIHx8IFwiLlwiO1xuICAgICAgICB9LCBuLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHZhciByID0gbi5pc0Fic29sdXRlKHQpLCBzID0gXCIvXCIgPT09IG8odCwgLTEpO1xuICAgICAgICAgICAgcmV0dXJuIHQgPSBlKGkodC5zcGxpdChcIi9cIiksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF0O1xuICAgICAgICAgICAgfSksICFyKS5qb2luKFwiL1wiKSwgdCB8fCByIHx8ICh0ID0gXCIuXCIpLCB0ICYmIHMgJiYgKHQgKz0gXCIvXCIpLCAociA/IFwiL1wiIDogXCJcIikgKyB0O1xuICAgICAgICB9LCBuLmlzQWJzb2x1dGUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCIvXCIgPT09IHQuY2hhckF0KDApO1xuICAgICAgICB9LCBuLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBuLm5vcm1hbGl6ZShpKHQsIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfSkuam9pbihcIi9cIikpO1xuICAgICAgICB9LCBuLnJlbGF0aXZlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaSh0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aCAmJiBcIlwiID09PSB0W25dOyBuKyspIDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gdC5sZW5ndGggLSAxOyBlID49IDAgJiYgXCJcIiA9PT0gdFtlXTsgZS0tKSA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4gPiBlID8gW10gOiB0LnNsaWNlKG4sIGUgLSBuICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ID0gbi5yZXNvbHZlKHQpLnN1YnN0cigxKSwgZSA9IG4ucmVzb2x2ZShlKS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gaSh0LnNwbGl0KFwiL1wiKSksIHMgPSBpKGUuc3BsaXQoXCIvXCIpKSwgbyA9IE1hdGgubWluKHIubGVuZ3RoLCBzLmxlbmd0aCksIGwgPSBvLCBoID0gMDsgbyA+IGg7IGgrKykgaWYgKHJbaF0gIT09IHNbaF0pIHtcbiAgICAgICAgICAgICAgICBsID0gaDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBbXSwgaCA9IGw7IGggPCByLmxlbmd0aDsgaCsrKSBjLnB1c2goXCIuLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBjID0gYy5jb25jYXQocy5zbGljZShsKSksIGMuam9pbihcIi9cIik7XG4gICAgICAgIH0sIG4uc2VwID0gXCIvXCIsIG4uZGVsaW1pdGVyID0gXCI6XCIsIG4uZGlybmFtZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gcyh0KSwgZSA9IG5bMF0sIGkgPSBuWzFdO1xuICAgICAgICAgICAgcmV0dXJuIGUgfHwgaSA/IChpICYmIChpID0gaS5zdWJzdHIoMCwgaS5sZW5ndGggLSAxKSksIGUgKyBpKSA6IFwiLlwiO1xuICAgICAgICB9LCBuLmJhc2VuYW1lID0gZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgdmFyIGUgPSBzKHQpWzJdO1xuICAgICAgICAgICAgcmV0dXJuIG4gJiYgZS5zdWJzdHIoLTEgKiBuLmxlbmd0aCkgPT09IG4gJiYgKGUgPSBlLnN1YnN0cigwLCBlLmxlbmd0aCAtIG4ubGVuZ3RoKSksIFxuICAgICAgICAgICAgZTtcbiAgICAgICAgfSwgbi5leHRuYW1lID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIHModClbM107XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvID0gXCJiXCIgPT09IFwiYWJcIi5zdWJzdHIoLTEpID8gZnVuY3Rpb24odCwgbiwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIHQuc3Vic3RyKG4sIGUpO1xuICAgICAgICB9IDogZnVuY3Rpb24odCwgbiwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIDAgPiBuICYmIChuID0gdC5sZW5ndGggKyBuKSwgdC5zdWJzdHIobiwgZSk7XG4gICAgICAgIH07XG4gICAgfSkuY2FsbChuLCBlKDMpKTtcbn0gXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LXBhdGgtcGFyc2UvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC9saWIvUmVhY3REZWZhdWx0UGVyZicpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWFkZG9ucy1wZXJmL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0TWVtb2l6ZSA9IGRlZmF1bHRNZW1vaXplO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3I7XG5leHBvcnRzLmNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3I7XG5leHBvcnRzLmNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRFcXVhbGl0eUNoZWNrKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRNZW1vaXplKGZ1bmMpIHtcbiAgdmFyIGVxdWFsaXR5Q2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBkZWZhdWx0RXF1YWxpdHlDaGVjayA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgbGFzdEFyZ3MgPSBudWxsO1xuICB2YXIgbGFzdFJlc3VsdCA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGxhc3RBcmdzICE9PSBudWxsICYmIGxhc3RBcmdzLmxlbmd0aCA9PT0gYXJncy5sZW5ndGggJiYgYXJncy5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICByZXR1cm4gZXF1YWxpdHlDaGVjayh2YWx1ZSwgbGFzdEFyZ3NbaW5kZXhdKTtcbiAgICB9KSkge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gYXJncztcbiAgICBsYXN0UmVzdWx0ID0gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdG9yIGNyZWF0b3JzIGV4cGVjdCBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgJyArICgnaW5zdGVhZCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHR5cGVzOiBbJyArIGRlcGVuZGVuY3lUeXBlcyArICddJykpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKG1lbW9pemUpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9ucyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBtZW1vaXplT3B0aW9uc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBmdW5jc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHZhciByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgdmFyIHJlc3VsdEZ1bmMgPSBmdW5jcy5wb3AoKTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcblxuICAgIHZhciBtZW1vaXplZFJlc3VsdEZ1bmMgPSBtZW1vaXplLmFwcGx5KHVuZGVmaW5lZCwgW2Z1bmN0aW9uICgpIHtcbiAgICAgIHJlY29tcHV0YXRpb25zKys7XG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KG1lbW9pemVPcHRpb25zKSk7XG5cbiAgICB2YXIgc2VsZWN0b3IgPSBmdW5jdGlvbiBzZWxlY3RvcihzdGF0ZSwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40ID4gMiA/IF9sZW40IC0gMiA6IDApLCBfa2V5NCA9IDI7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NCAtIDJdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmFtcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3kuYXBwbHkodW5kZWZpbmVkLCBbc3RhdGUsIHByb3BzXS5jb25jYXQoYXJncykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRSZXN1bHRGdW5jLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBzZWxlY3Rvci5yZXN1bHRGdW5jID0gcmVzdWx0RnVuYztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcigpIHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihkZWZhdWx0TWVtb2l6ZSkuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioc2VsZWN0b3JzKSB7XG4gIHZhciBzZWxlY3RvckNyZWF0b3IgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBjcmVhdGVTZWxlY3RvciA6IGFyZ3VtZW50c1sxXTtcblxuICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciBleHBlY3RzIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCAnICsgKCd3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSAnICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgcmV0dXJuIHNlbGVjdG9yQ3JlYXRvcihvYmplY3RLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1trZXldO1xuICB9KSwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgIHZhbHVlc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jlc2VsZWN0L2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJi1yZXN0cnVjdHVyaW5nIS4vLi4vcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmLXJlc3RydWN0dXJpbmchLi8uLi9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCYtcmVzdHJ1Y3R1cmluZyEuLy4uL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwidmFyIHRyYXZlcnNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG5ldyBUcmF2ZXJzZShvYmopO1xufTtcblxuZnVuY3Rpb24gVHJhdmVyc2UgKG9iaikge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG59XG5cblRyYXZlcnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocHMpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHBzW2ldO1xuICAgICAgICBpZiAoIW5vZGUgfHwgIWhhc093blByb3BlcnR5LmNhbGwobm9kZSwga2V5KSkge1xuICAgICAgICAgICAgbm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChwcykge1xuICAgIHZhciBub2RlID0gdGhpcy52YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArKykge1xuICAgICAgICB2YXIga2V5ID0gcHNbaV07XG4gICAgICAgIGlmICghbm9kZSB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHBzLCB2YWx1ZSkge1xuICAgIHZhciBub2RlID0gdGhpcy52YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aCAtIDE7IGkgKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHBzW2ldO1xuICAgICAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwobm9kZSwga2V5KSkgbm9kZVtrZXldID0ge307XG4gICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgfVxuICAgIG5vZGVbcHNbaV1dID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChjYikge1xuICAgIHJldHVybiB3YWxrKHRoaXMudmFsdWUsIGNiLCB0cnVlKTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgdGhpcy52YWx1ZSA9IHdhbGsodGhpcy52YWx1ZSwgY2IsIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoY2IsIGluaXQpIHtcbiAgICB2YXIgc2tpcCA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDE7XG4gICAgdmFyIGFjYyA9IHNraXAgPyB0aGlzLnZhbHVlIDogaW5pdDtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUm9vdCB8fCAhc2tpcCkge1xuICAgICAgICAgICAgYWNjID0gY2IuY2FsbCh0aGlzLCBhY2MsIHgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5wYXRocyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWNjID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGFjYy5wdXNoKHRoaXMucGF0aCk7IFxuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUubm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFjYyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICBhY2MucHVzaCh0aGlzLm5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudHMgPSBbXSwgbm9kZXMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gKGZ1bmN0aW9uIGNsb25lIChzcmMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50c1tpXSA9PT0gc3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgc3JjICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZHN0ID0gY29weShzcmMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJlbnRzLnB1c2goc3JjKTtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZHN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yRWFjaChvYmplY3RLZXlzKHNyYyksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGNsb25lKHNyY1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gZHN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH0pKHRoaXMudmFsdWUpO1xufTtcblxuZnVuY3Rpb24gd2FsayAocm9vdCwgY2IsIGltbXV0YWJsZSkge1xuICAgIHZhciBwYXRoID0gW107XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgYWxpdmUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiAoZnVuY3Rpb24gd2Fsa2VyIChub2RlXykge1xuICAgICAgICB2YXIgbm9kZSA9IGltbXV0YWJsZSA/IGNvcHkobm9kZV8pIDogbm9kZV87XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHZhciBrZWVwR29pbmcgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgbm9kZSA6IG5vZGUsXG4gICAgICAgICAgICBub2RlXyA6IG5vZGVfLFxuICAgICAgICAgICAgcGF0aCA6IFtdLmNvbmNhdChwYXRoKSxcbiAgICAgICAgICAgIHBhcmVudCA6IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHBhcmVudHMgOiBwYXJlbnRzLFxuICAgICAgICAgICAga2V5IDogcGF0aC5zbGljZSgtMSlbMF0sXG4gICAgICAgICAgICBpc1Jvb3QgOiBwYXRoLmxlbmd0aCA9PT0gMCxcbiAgICAgICAgICAgIGxldmVsIDogcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBjaXJjdWxhciA6IG51bGwsXG4gICAgICAgICAgICB1cGRhdGUgOiBmdW5jdGlvbiAoeCwgc3RvcEhlcmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmlzUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wYXJlbnQubm9kZVtzdGF0ZS5rZXldID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhdGUubm9kZSA9IHg7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3BIZXJlKSBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsZXRlJyA6IGZ1bmN0aW9uIChzdG9wSGVyZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5wYXJlbnQubm9kZVtzdGF0ZS5rZXldO1xuICAgICAgICAgICAgICAgIGlmIChzdG9wSGVyZSkga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24gKHN0b3BIZXJlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoc3RhdGUucGFyZW50Lm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnBhcmVudC5ub2RlLnNwbGljZShzdGF0ZS5rZXksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLnBhcmVudC5ub2RlW3N0YXRlLmtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdG9wSGVyZSkga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5cyA6IG51bGwsXG4gICAgICAgICAgICBiZWZvcmUgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMuYmVmb3JlID0gZiB9LFxuICAgICAgICAgICAgYWZ0ZXIgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMuYWZ0ZXIgPSBmIH0sXG4gICAgICAgICAgICBwcmUgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMucHJlID0gZiB9LFxuICAgICAgICAgICAgcG9zdCA6IGZ1bmN0aW9uIChmKSB7IG1vZGlmaWVycy5wb3N0ID0gZiB9LFxuICAgICAgICAgICAgc3RvcCA6IGZ1bmN0aW9uICgpIHsgYWxpdmUgPSBmYWxzZSB9LFxuICAgICAgICAgICAgYmxvY2sgOiBmdW5jdGlvbiAoKSB7IGtlZXBHb2luZyA9IGZhbHNlIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGlmICghYWxpdmUpIHJldHVybiBzdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZS5ub2RlID09PSAnb2JqZWN0JyAmJiBzdGF0ZS5ub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5rZXlzIHx8IHN0YXRlLm5vZGVfICE9PSBzdGF0ZS5ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmtleXMgPSBvYmplY3RLZXlzKHN0YXRlLm5vZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTGVhZiA9IHN0YXRlLmtleXMubGVuZ3RoID09IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldLm5vZGVfID09PSBub2RlXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2lyY3VsYXIgPSBwYXJlbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xlYWYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0YXRlLmtleXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0ZS5ub3RMZWFmID0gIXN0YXRlLmlzTGVhZjtcbiAgICAgICAgICAgIHN0YXRlLm5vdFJvb3QgPSAhc3RhdGUuaXNSb290O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gdXNlIHJldHVybiB2YWx1ZXMgdG8gdXBkYXRlIGlmIGRlZmluZWRcbiAgICAgICAgdmFyIHJldCA9IGNiLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQgJiYgc3RhdGUudXBkYXRlKSBzdGF0ZS51cGRhdGUocmV0KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChtb2RpZmllcnMuYmVmb3JlKSBtb2RpZmllcnMuYmVmb3JlLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFrZWVwR29pbmcpIHJldHVybiBzdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUubm9kZSA9PSAnb2JqZWN0J1xuICAgICAgICAmJiBzdGF0ZS5ub2RlICE9PSBudWxsICYmICFzdGF0ZS5jaXJjdWxhcikge1xuICAgICAgICAgICAgcGFyZW50cy5wdXNoKHN0YXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yRWFjaChzdGF0ZS5rZXlzLCBmdW5jdGlvbiAoa2V5LCBpKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmUpIG1vZGlmaWVycy5wcmUuY2FsbChzdGF0ZSwgc3RhdGUubm9kZVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHdhbGtlcihzdGF0ZS5ub2RlW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChpbW11dGFibGUgJiYgaGFzT3duUHJvcGVydHkuY2FsbChzdGF0ZS5ub2RlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm5vZGVba2V5XSA9IGNoaWxkLm5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoaWxkLmlzTGFzdCA9IGkgPT0gc3RhdGUua2V5cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGNoaWxkLmlzRmlyc3QgPSBpID09IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wb3N0KSBtb2RpZmllcnMucG9zdC5jYWxsKHN0YXRlLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyZW50cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG1vZGlmaWVycy5hZnRlcikgbW9kaWZpZXJzLmFmdGVyLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0pKHJvb3QpLm5vZGU7XG59XG5cbmZ1bmN0aW9uIGNvcHkgKHNyYykge1xuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiBzcmMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGRzdDtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc0FycmF5KHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRGF0ZShzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgRGF0ZShzcmMuZ2V0VGltZSA/IHNyYy5nZXRUaW1lKCkgOiBzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUmVnRXhwKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IG5ldyBSZWdFeHAoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Vycm9yKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IHsgbWVzc2FnZTogc3JjLm1lc3NhZ2UgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW4oc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IEJvb2xlYW4oc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bWJlcihzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgTnVtYmVyKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmcoc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IFN0cmluZyhzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE9iamVjdC5jcmVhdGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICBkc3QgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihzcmMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcmMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZHN0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPVxuICAgICAgICAgICAgICAgIChzcmMuY29uc3RydWN0b3IgJiYgc3JjLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICB8fCBzcmMuX19wcm90b19fXG4gICAgICAgICAgICAgICAgfHwge31cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHZhciBUID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICBULnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgICAgICAgZHN0ID0gbmV3IFQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvckVhY2gob2JqZWN0S2V5cyhzcmMpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRzdDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gc3JjO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMgKG9iaikge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSByZXMucHVzaChrZXkpXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIHRvUyAob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSB9XG5mdW5jdGlvbiBpc0RhdGUgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJyB9XG5mdW5jdGlvbiBpc1JlZ0V4cCAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgfVxuZnVuY3Rpb24gaXNFcnJvciAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4gKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJyB9XG5mdW5jdGlvbiBpc051bWJlciAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgfVxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nIH1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkgKHhzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICh4cywgZm4pIHtcbiAgICBpZiAoeHMuZm9yRWFjaCkgcmV0dXJuIHhzLmZvckVhY2goZm4pXG4gICAgZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZuKHhzW2ldLCBpLCB4cyk7XG4gICAgfVxufTtcblxuZm9yRWFjaChvYmplY3RLZXlzKFRyYXZlcnNlLnByb3RvdHlwZSksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0cmF2ZXJzZVtrZXldID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIHQgPSBuZXcgVHJhdmVyc2Uob2JqKTtcbiAgICAgICAgcmV0dXJuIHRba2V5XS5hcHBseSh0LCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG9iajtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90cmF2ZXJzZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=