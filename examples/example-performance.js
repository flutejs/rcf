webpackJsonp([2],{

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
	
	window.perfStart = function () {
	  Perf.start();
	};
	
	window.perfStop = function () {
	  Perf.stop();
	  Perf.printInclusive();
	  Perf.printWasted();
	};
	
	var ID = 0;
	var LIST = [];
	var SIZE = 10000;
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
	      var activeTodosCount = getActiveTodosCount(e.store);
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
	
	var getVisibleTodos = (0, _reselect.createSelector)([function (store) {
	  return store.list;
	}, function (store) {
	  return store.filter;
	}], function (list, filter) {
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
	
	var getActiveTodosCount = (0, _reselect.createSelector)([function (store) {
	  return store.list;
	}], function (list) {
	  return list.filter(function (t) {
	    return !t.completed;
	  }).length;
	});
	
	var TodoList = function TodoList(_ref) {
	  var todolist = _ref.todolist;
	  var change = todolist.change;
	  var del = todolist.del;
	  var add = todolist.add;
	  var filter = todolist.filter;
	  var list = todolist.list;
	  var changeFilter = todolist.changeFilter;
	  var clearCompleted = todolist.clearCompleted;
	  var toggle = todolist.toggle;
	  var edit = todolist.edit;
	
	  var filterList = getVisibleTodos(todolist);
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
	            completed: todo.completed,
	            editing: this.state.type === 'edit'
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
	          className: (0, _classnames2.default)({
	            'new-todo': this.props.type === 'new-todo',
	            'edit': this.props.type === 'edit-todo'
	          }),
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
	
	      var activeCount = getActiveTodosCount({ list: list });
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
	
	var ToggleAll = function ToggleAll(_ref2) {
	  var list = _ref2.list;
	  var toggle = _ref2.toggle;
	
	  var completedCount = list.length - getActiveTodosCount({ list: list });
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
	exports.push([module.id, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '\\276F';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\t-webkit-transition: color 0.4s;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\t-webkit-transition: color 0.2s ease-out;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '\\D7';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\t-ms-transform: rotate(90deg);\n\t\t    transform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\t     appearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n", "", {"version":3,"sources":["/./node_modules/todomvc-app-css/index.css"],"names":[],"mappings":"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D;CACC,gBAAgB;CAChB;;AAED;CACC,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;CACnB;;AAED;;CAEC,qCAAqC;CACrC;;AAED;CACC,qCAAqC;CACrC;;AAED;;CAEC,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;CACtB,gBAAgB;CAChB;;AAED;CACC,2BAA2B;CAC3B;;AAED;CACC,oBAAoB;CACpB,eAAe;CACf,gBAAgB;CAChB,8CAA8C;CAC9C,mBAAmB;CACnB;;AAED;CACC,eAAe;CACf;;AAED;CACC,eAAe;CACf,sBAAsB;CACtB,iBAAiB;CACjB;;AAED;CACC,2BAA2B;CAC3B;;AAED;;;EAGE;AACF;CACC;;EAEC,iBAAiB;EACjB;;CAED;EACC,aAAa;EACb;;CAED;EACC,iCAAiC;EACjC,6BAAyB;MAAzB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAiB;OAAjB,iBAAiB;EACjB;CACD;;AAED;CACC;EACC,aAAa;EACb;;CAED;EACC,aAAa;EACb;CACD","file":"index.css","sourcesContent":["html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n"],"sourceRoot":"webpack://"}]);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXBlcmZvcm1hbmNlLm1kIiwid2VicGFjazovLy8uL34vYXJyYXktZm9yZWFjaC9pbmRleC5qcz81NDQ5Iiwid2VicGFjazovLy8uL34vYXJyYXktbWFwL2luZGV4LmpzP2Y1ZGUiLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzPzhlNDMiLCJ3ZWJwYWNrOi8vLy4vfi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzPzgyMzciLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz9kYTA0Iiwid2VicGFjazovLy8uL34vaW1tdXRhYmxlLWRhdGEvbGliL2luZGV4LmpzPzg0MTEiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1hcnJheS9pbmRleC5qcz9iNGIxIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanM/YTUzYiIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzP2ZiOTQiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtcGF0aC1wYXJzZS9saWIvaW5kZXguanM/Y2RiNSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWFkZG9ucy1wZXJmL2luZGV4LmpzPzFhNjgiLCJ3ZWJwYWNrOi8vLy4vfi9yZXNlbGVjdC9saWIvaW5kZXguanM/NjQ2YiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanM/Yjk4MCIsIndlYnBhY2s6Ly8vLi9+L3RvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3M/MmYyNSoiLCJ3ZWJwYWNrOi8vLy4vfi90cmF2ZXJzZS9pbmRleC5qcz81MjdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztLQUFZOztBQUNaOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFFBQU8sU0FBUCxHQUFtQixZQUFXO0FB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WUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSx1QkFBdUIsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsc0JBQXNCLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFNBQVMsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZ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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHNldCwgcmVtb3ZlIH0gZnJvbSAnaW1tdXRhYmxlLWRhdGEnO1xuaW1wb3J0ICd0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzJ1xuaW1wb3J0ICogYXMgUGVyZiBmcm9tICdyZWFjdC1hZGRvbnMtcGVyZic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuXG53aW5kb3cucGVyZlN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIFBlcmYuc3RhcnQoKTtcbn1cblxud2luZG93LnBlcmZTdG9wID0gZnVuY3Rpb24oKSB7XG4gIFBlcmYuc3RvcCgpO1xuICBQZXJmLnByaW50SW5jbHVzaXZlKCk7XG4gIFBlcmYucHJpbnRXYXN0ZWQoKTtcbn1cblxuXG5sZXQgSUQgPSAwO1xuY29uc3QgTElTVCA9IFtdO1xuY29uc3QgU0laRSA9IDEwMDAwO1xuZm9yKGxldCBpPTA7aSA8IFNJWkU7IGkrKykge1xuICBMSVNULnB1c2goe1xuICAgIHRleHQ6ICd0YXNrICcgKyBpLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaWQ6IElEKyssXG4gIH0pO1xufVxuXG5jb25zdCBzdG9yZSA9IHtcbiAgdG9kb2xpc3Q6IHsgXG4gICAgbGlzdDogTElTVCxcbiAgICBhZGQodGV4dCwgZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgaWQ6IElEKyssXG4gICAgICAgIH0sIC4uLmUuc3RvcmUubGlzdF0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgZGVsKHRvZG8sIGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5zdG9yZS5saXN0LmluZGV4T2YodG9kbyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiByZW1vdmUoZS5zdG9yZS5saXN0LCBpbmRleCksXG4gICAgICB9O1xuICAgIH0sXG4gICAgY2hhbmdlKHRvZG8sIGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5zdG9yZS5saXN0LmluZGV4T2YodG9kbyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiBzZXQoZS5zdG9yZS5saXN0LCB7XG4gICAgICAgICAgW2Ake2luZGV4fS5jb21wbGV0ZWRgXTogIWUuc3RvcmUubGlzdFtpbmRleF0uY29tcGxldGVkLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBlZGl0KHRvZG8sIHRleHQsIGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5zdG9yZS5saXN0LmluZGV4T2YodG9kbyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiBzZXQoZS5zdG9yZS5saXN0LCB7XG4gICAgICAgICAgW2Ake2luZGV4fS50ZXh0YF06IHRleHQsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpbHRlcjogJ2FsbCcsXG4gICAgY2hhbmdlRmlsdGVyKGZpbHRlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsdGVyLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGNsZWFyQ29tcGxldGVkKGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IGUuc3RvcmUubGlzdC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5jb21wbGV0ZWQpLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHRvZ2dsZShlKSB7XG4gICAgICBjb25zdCBhY3RpdmVUb2Rvc0NvdW50ID0gZ2V0QWN0aXZlVG9kb3NDb3VudChlLnN0b3JlKTtcbiAgICAgIGlmIChhY3RpdmVUb2Rvc0NvdW50ID09PSAwIHx8IGUuc3RvcmUubGlzdC5sZW5ndGggPT09IGFjdGl2ZVRvZG9zQ291bnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaXN0OiBlLnN0b3JlLmxpc3QubWFwKHRvZG8gPT4gKHtcbiAgICAgICAgICAgIC4uLnRvZG8sXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICF0b2RvLmNvbXBsZXRlZCxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiBlLnN0b3JlLmxpc3QubWFwKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQgPyB0b2RvIDoge1xuICAgICAgICAgIC4uLnRvZG8sXG4gICAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgfVxuICB9LFxufTtcblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gY3JlYXRlU2VsZWN0b3IoW1xuICBzdG9yZSA9PiBzdG9yZS5saXN0LFxuICBzdG9yZSA9PiBzdG9yZS5maWx0ZXIsXG5dLCAobGlzdCwgZmlsdGVyKSA9PiB7XG4gIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgY2FzZSAnYWxsJzpcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIGNhc2UgJ2FjdGl2ZSc6XG4gICAgICByZXR1cm4gbGlzdC5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpO1xuICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICByZXR1cm4gbGlzdC5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZCk7XG4gIH1cbn0pO1xuXG5jb25zdCBnZXRBY3RpdmVUb2Rvc0NvdW50ID0gY3JlYXRlU2VsZWN0b3IoW1xuICBzdG9yZSA9PiBzdG9yZS5saXN0LFxuXSwgbGlzdCA9PiB7XG4gIHJldHVybiBsaXN0LmZpbHRlcih0ID0+ICF0LmNvbXBsZXRlZCkubGVuZ3RoO1xufSk7XG5cblxuY29uc3QgVG9kb0xpc3QgPSAoeyB0b2RvbGlzdCB9KSA9PiB7XG4gIGNvbnN0IHsgY2hhbmdlLCBkZWwsIGFkZCwgZmlsdGVyLCBsaXN0LCBjaGFuZ2VGaWx0ZXIsIGNsZWFyQ29tcGxldGVkLCB0b2dnbGUsIGVkaXQgfSA9IHRvZG9saXN0O1xuICBjb25zdCBmaWx0ZXJMaXN0ID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9saXN0KTtcbiAgY29uc3QgdG9kb1Byb3BzID0geyBjaGFuZ2UsIGRlbCwgZWRpdCB9O1xuICBjb25zdCBmb290ZXJQcm9wcyA9IHsgbGlzdCwgZmlsdGVyLCBjaGFuZ2VGaWx0ZXIsIGNsZWFyQ29tcGxldGVkIH07XG4gIGNvbnN0IHRvZ2dsZUFsbFByb3BzID0geyBsaXN0LCB0b2dnbGUgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidG9kb2FwcFwiPlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+dG9kb3M8L2gxPlxuICAgIDwvaGVhZGVyPlxuICAgIDxUb2RvSW5wdXRcbiAgICAgIHR5cGU9J25ldy10b2RvJ1xuICAgICAgb25TYXZlPXt0ZXh0ID0+IGFkZCh0ZXh0KX1cbiAgICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxUb2dnbGVBbGwgey4uLnRvZ2dsZUFsbFByb3BzfSAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyTGlzdC5tYXAodG9kbyA9PlxuICAgICAgICAgICAgPFRvZG8ga2V5PXt0b2RvLmlkfSB0b2RvPXt0b2RvfSB7Li4udG9kb1Byb3BzfSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxGb290ZXIgey4uLmZvb3RlclByb3BzfSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59O1xuXG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfTtcbiAgfVxuICBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICB0eXBlOiAnZWRpdCcsXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlU2F2ZSA9IHRleHQgPT4ge1xuICAgIHRoaXMucHJvcHMuZWRpdCh0aGlzLnByb3BzLnRvZG8sIHRleHQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH0pO1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiBuZXh0UHJvcHMudG9kbyAhPT0gdGhpcy5wcm9wcy50b2RvIHx8IG5leHRTdGF0ZS50eXBlICE9PSB0aGlzLnN0YXRlLnR5cGU7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG9kbywgY2hhbmdlLCBkZWwsIGVkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkLFxuICAgICAgICBlZGl0aW5nOiB0aGlzLnN0YXRlLnR5cGUgPT09ICdlZGl0JyxcbiAgICAgIH0pfT5cblxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnR5cGUgPT09ICdlZGl0JyA/XG5cbiAgICAgICAgPFRvZG9JbnB1dFxuICAgICAgICAgIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICB0eXBlPVwiZWRpdC10b2RvXCJcbiAgICAgICAgICBvblNhdmU9e3RoaXMuaGFuZGxlU2F2ZX1cbiAgICAgICAgLz5cblxuICAgICAgICA6XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2dnbGVcIlxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGNoYW5nZSh0b2RvKX0gLz5cbiAgICAgICAgICA8bGFiZWwgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVEb3VibGVDbGlja30+XG4gICAgICAgICAgICB7dG9kby50ZXh0fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXN0cm95XCIgb25DbGljaz17KCkgPT4gZGVsKHRvZG8pfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgfVxuXG4gICAgPC9saT47XG4gIH1cblxufVxuXG5cbmNsYXNzIFRvZG9JbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiAnJyB8fCBwcm9wcy50ZXh0LFxuICAgIH07XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudGV4dCAhPT0gbmV4dFN0YXRlLnRleHQ7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZXh0OiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdGF0ZS50ZXh0O1xuICAgIGlmICghdGV4dCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25TYXZlKHRleHQpO1xuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICduZXctdG9kbycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2VkaXQtdG9kbycpIHtcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0YXRlLnRleHQ7XG4gICAgICB0aGlzLnByb3BzLm9uU2F2ZSh0ZXh0KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAnbmV3LXRvZG8nOiB0aGlzLnByb3BzLnR5cGUgPT09ICduZXctdG9kbycsXG4gICAgICAgICAgJ2VkaXQnOiB0aGlzLnByb3BzLnR5cGUgPT09ICdlZGl0LXRvZG8nLFxuICAgICAgICB9KX1cbiAgICAgICAgYXV0b0ZvY3VzPVwidHJ1ZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAvPlxuICAgIDwvZm9ybT47XG4gIH1cbn1cblxuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaXN0LCBmaWx0ZXIsIGNoYW5nZUZpbHRlciwgY2xlYXJDb21wbGV0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlQ291bnQgPSBnZXRBY3RpdmVUb2Rvc0NvdW50KHsgbGlzdCB9KTtcbiAgICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IGxpc3QubGVuZ3RoIC0gYWN0aXZlQ291bnQ7XG4gICAgcmV0dXJuIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2RvLWNvdW50XCI+XG4gICAgICAgIDxzdHJvbmc+e2FjdGl2ZUNvdW50IHx8ICdObyd9PC9zdHJvbmc+XG4gICAgICAgIHsnICd9XG4gICAgICAgIHthY3RpdmVDb3VudCA9PT0gMSA/ICdpdGVtJyA6ICdpdGVtcyd9IGxlZnRcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgIHtbICdhbGwnLCAnYWN0aXZlJywgJ2NvbXBsZXRlZCcgXS5tYXAoaXRlbSA9PlxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgc2VsZWN0ZWQ6IGl0ZW0gPT09IGZpbHRlciB9KX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlRmlsdGVyKGl0ZW0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICAgIHtcbiAgICAgICAgY29tcGxldGVkQ291bnQgPiAwIFxuICAgICAgICAmJlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xlYXJDb21wbGV0ZWQoKX0gPlxuICAgICAgICAgIENsZWFyIGNvbXBsZXRlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICA8L2Zvb3Rlcj47XG4gIH1cbn1cblxuXG5jb25zdCBUb2dnbGVBbGwgPSAoeyBsaXN0LCB0b2dnbGUgfSkgPT4ge1xuICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IGxpc3QubGVuZ3RoIC0gZ2V0QWN0aXZlVG9kb3NDb3VudCh7IGxpc3QgfSk7XG4gIHJldHVybiBsaXN0Lmxlbmd0aCA+IDAgPyA8aW5wdXRcbiAgICBjbGFzc05hbWU9XCJ0b2dnbGUtYWxsXCJcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIGNoZWNrZWQ9e2NvbXBsZXRlZENvdW50ID09PSBsaXN0Lmxlbmd0aH1cbiAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlKCl9XG4gIC8+IDogPHNwYW4gLz47XG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPFJjZiBzdG9yZT17c3RvcmV9PlxuICA8VG9kb0xpc3QgLz5cbjwvUmNmPixcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZXhhbXBsZS1wZXJmb3JtYW5jZS5tZFxuICoqLyIsIi8qKlxuICogYXJyYXktZm9yZWFjaFxuICogICBBcnJheSNmb3JFYWNoIHBvbnlmaWxsIGZvciBvbGRlciBicm93c2Vyc1xuICogICAoUG9ueWZpbGw6IEEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG92ZXJ3cml0ZSB0aGUgbmF0aXZlIG1ldGhvZClcbiAqIFxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3YWRhL2FycmF5LWZvcmVhY2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAxNiBUYWt1dG8gV2FkYVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogICBodHRwczovL2dpdGh1Yi5jb20vdHdhZGEvYXJyYXktZm9yZWFjaC9ibG9iL21hc3Rlci9NSVQtTElDRU5TRVxuICovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9yRWFjaCAoYXJ5LCBjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGlmIChhcnkuZm9yRWFjaCkge1xuICAgICAgICBhcnkuZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyBpKz0xKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgYXJ5W2ldLCBpLCBhcnkpO1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hcnJheS1mb3JlYWNoL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeHMsIGYpIHtcbiAgICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0geHNbaV07XG4gICAgICAgIGlmIChoYXNPd24uY2FsbCh4cywgaSkpIHJlcy5wdXNoKGYoeCwgaSwgeHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXJyYXktbWFwL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250OiAxNHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNGVtO1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0Y29sb3I6ICM0ZDRkNGQ7XFxuXFx0bWluLXdpZHRoOiAyMzBweDtcXG5cXHRtYXgtd2lkdGg6IDU1MHB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvYXBwIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdG1hcmdpbjogMTMwcHggMCA0MHB4IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcXG5cXHQgICAgICAgICAgICAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGgxIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAtMTU1cHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAxMDBweDtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XFxuXFx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcblxcdC1tb3otdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG5cXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLmVkaXQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG5cXHRib3JkZXI6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG5cXHRwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA2MHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwwLDAsMC4wMyk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG59XFxuXFxubGFiZWxbZm9yPSd0b2dnbGUtYWxsJ10ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtYWxsIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAtNTVweDtcXG5cXHRsZWZ0OiAtMTJweDtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDM0cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xcbn1cXG5cXG4udG9nZ2xlLWFsbDpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICdcXFxcMjc2Ric7XFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcblxcdGNvbG9yOiAjZTZlNmU2O1xcblxcdHBhZGRpbmc6IDEwcHggMjdweCAxMHB4IDI3cHg7XFxufVxcblxcbi50b2dnbGUtYWxsOmNoZWNrZWQ6YmVmb3JlIHtcXG5cXHRjb2xvcjogIzczNzM3MztcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaTpsYXN0LWNoaWxkIHtcXG5cXHRib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC5lZGl0IHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogNTA2cHg7XFxuXFx0cGFkZGluZzogMTNweCAxN3B4IDEycHggMTdweDtcXG5cXHRtYXJnaW46IDAgMCAwIDQzcHg7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyAudmlldyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0LyogYXV0bywgc2luY2Ugbm9uLVdlYktpdCBicm93c2VycyBkb2Vzbid0IHN1cHBvcnQgaW5wdXQgc3R5bGluZyAqL1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRtYXJnaW46IGF1dG8gMDtcXG5cXHRib3JkZXI6IG5vbmU7IC8qIE1vYmlsZSBTYWZhcmkgKi9cXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmFmdGVyIHtcXG5cXHRjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIi0xMCAtMTggMTAwIDEzNVxcXCI+PGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiI2VkZWRlZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzXFxcIi8+PC9zdmc+Jyk7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTpjaGVja2VkOmFmdGVyIHtcXG5cXHRjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIi0xMCAtMTggMTAwIDEzNVxcXCI+PGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiI2JkZGFkNVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzXFxcIi8+PHBhdGggZmlsbD1cXFwiIzVkYzJhZlxcXCIgZD1cXFwiTTcyIDI1TDQyIDcxIDI3IDU2bC00IDQgMjAgMjAgMzQtNTJ6XFxcIi8+PC9zdmc+Jyk7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgbGFiZWwge1xcblxcdHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG5cXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuXFx0cGFkZGluZzogMTVweCA2MHB4IDE1cHggMTVweDtcXG5cXHRtYXJnaW4tbGVmdDogNDVweDtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRsaW5lLWhlaWdodDogMS4yO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmNvbXBsZXRlZCBsYWJlbCB7XFxuXFx0Y29sb3I6ICNkOWQ5ZDk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMTBweDtcXG5cXHRib3R0b206IDA7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdG1hcmdpbjogYXV0byAwO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRjb2xvcjogI2NjOWE5YTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmhvdmVyIHtcXG5cXHRjb2xvcjogI2FmNWI1ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTphZnRlciB7XFxuXFx0Y29udGVudDogJ1xcXFxENyc7XFxufVxcblxcbi50b2RvLWxpc3QgbGk6aG92ZXIgLmRlc3Ryb3kge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5lZGl0IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmc6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0Y29sb3I6ICM3Nzc7XFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdGhlaWdodDogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XFxufVxcblxcbi5mb290ZXI6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG5cXHQgICAgICAgICAgICAwIDhweCAwIC0zcHggI2Y2ZjZmNixcXG5cXHQgICAgICAgICAgICAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuXFx0ICAgICAgICAgICAgMCAxNnB4IDAgLTZweCAjZjZmNmY2LFxcblxcdCAgICAgICAgICAgIDAgMTdweCAycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi50b2RvLWNvdW50IHtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udG9kby1jb3VudCBzdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5maWx0ZXJzIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4uZmlsdGVycyBsaSB7XFxuXFx0ZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhIHtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRtYXJnaW46IDNweDtcXG5cXHRwYWRkaW5nOiAzcHggN3B4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQsXFxuLmZpbHRlcnMgbGkgYTpob3ZlciB7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjEpO1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkIHtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMik7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQsXFxuaHRtbCAuY2xlYXItY29tcGxldGVkOmFjdGl2ZSB7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsaW5lLWhlaWdodDogMjBweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmluZm8ge1xcblxcdG1hcmdpbjogNjVweCBhdXRvIDA7XFxuXFx0Y29sb3I6ICNiZmJmYmY7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcblxcdHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvIHAge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uaW5mbyBhIHtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmluZm8gYTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qXFxuXFx0SGFjayB0byByZW1vdmUgYmFja2dyb3VuZCBmcm9tIE1vYmlsZSBTYWZhcmkuXFxuXFx0Q2FuJ3QgdXNlIGl0IGdsb2JhbGx5IHNpbmNlIGl0IGRlc3Ryb3lzIGNoZWNrYm94ZXMgaW4gRmlyZWZveFxcbiovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKSB7XFxuXFx0LnRvZ2dsZS1hbGwsXFxuXFx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdH1cXG5cXG5cXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xcblxcdFxcdGhlaWdodDogNDBweDtcXG5cXHR9XFxuXFxuXFx0LnRvZ2dsZS1hbGwge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFx0XFx0ICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXHRcXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdCAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xcblxcdC5mb290ZXIge1xcblxcdFxcdGhlaWdodDogNTBweDtcXG5cXHR9XFxuXFxuXFx0LmZpbHRlcnMge1xcblxcdFxcdGJvdHRvbTogMTBweDtcXG5cXHR9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9ub2RlX21vZHVsZXMvdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQyxVQUFVO0NBQ1YsV0FBVztDQUNYOztBQUVEO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLHNCQUFpQjtNQUFqQixpQkFBaUI7Q0FDakIsb0NBQW9DO0NBQ3BDLG1DQUFtQztDQUNuQzs7QUFFRDtDQUNDLDBEQUEwRDtDQUMxRCxtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixvQ0FBb0M7Q0FDcEMsbUNBQW1DO0NBQ25DLGlCQUFpQjtDQUNqQjs7QUFFRDs7Q0FFQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQjs4Q0FDNkM7Q0FDN0M7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Y7O0FBRUQ7Q0FD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QUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25COztBQUVEOztDQUVDLHFDQUFxQztDQUNyQzs7QUFFRDtDQUNDLHFDQUFxQztDQUNyQzs7QUFFRDs7Q0FFQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsOENBQThDO0NBQzlDLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCOztBQUVEOzs7RUFHRTtBQUNGO0NBQ0M7O0VBRUMsaUJBQWlCO0VBQ2pCOztDQUVEO0VBQ0MsYUFBYTtFQUNiOztDQUVEO0VBQ0MsaUNBQWlDO0VBQ2pDLDZCQUF5QjtNQUF6Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHNCQUFpQjtPQUFqQixpQkFBaUI7RUFDakI7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsYUFBYTtFQUNiOztDQUVEO0VBQ0MsYUFBYTtFQUNiO0NBQ0RcIixcImZpbGVcIjpcImluZGV4LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udDogMTRweCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdGNvbG9yOiAjNGQ0ZDRkO1xcblxcdG1pbi13aWR0aDogMjMwcHg7XFxuXFx0bWF4LXdpZHRoOiA1NTBweDtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb2FwcCB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRtYXJnaW46IDEzMHB4IDAgNDBweCAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuXFx0ICAgICAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6aW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4udG9kb2FwcCBoMSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogLTE1NXB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtc2l6ZTogMTAwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xcblxcdC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG5cXHQtbW96LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuXFx0dGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG59XFxuXFxuLm5ldy10b2RvLFxcbi5lZGl0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXG5cXHRsaW5lLWhlaWdodDogMS40ZW07XFxuXFx0Ym9yZGVyOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0cGFkZGluZzogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5uZXctdG9kbyB7XFxuXFx0cGFkZGluZzogMTZweCAxNnB4IDE2cHggNjBweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAwMyk7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDFweCByZ2JhKDAsMCwwLDAuMDMpO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDI7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XFxufVxcblxcbmxhYmVsW2Zvcj0ndG9nZ2xlLWFsbCddIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlLWFsbCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogLTU1cHg7XFxuXFx0bGVmdDogLTEycHg7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0aGVpZ2h0OiAzNHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXI6IG5vbmU7IC8qIE1vYmlsZSBTYWZhcmkgKi9cXG59XFxuXFxuLnRvZ2dsZS1hbGw6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAn4p2vJztcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxuXFx0cGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcXG59XFxuXFxuLnRvZ2dsZS1hbGw6Y2hlY2tlZDpiZWZvcmUge1xcblxcdGNvbG9yOiAjNzM3MzczO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiA1MDZweDtcXG5cXHRwYWRkaW5nOiAxM3B4IDE3cHggMTJweCAxN3B4O1xcblxcdG1hcmdpbjogMCAwIDAgNDNweDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHQvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdG1hcmdpbjogYXV0byAwO1xcblxcdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGU6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiLTEwIC0xOCAxMDAgMTM1XFxcIj48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjZWRlZGVkXFxcIiBzdHJva2Utd2lkdGg9XFxcIjNcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmNoZWNrZWQ6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiLTEwIC0xOCAxMDAgMTM1XFxcIj48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjYmRkYWQ1XFxcIiBzdHJva2Utd2lkdGg9XFxcIjNcXFwiLz48cGF0aCBmaWxsPVxcXCIjNWRjMmFmXFxcIiBkPVxcXCJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnpcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XFxuXFx0d2hpdGUtc3BhY2U6IHByZS1saW5lO1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHRwYWRkaW5nOiAxNXB4IDYwcHggMTVweCAxNXB4O1xcblxcdG1hcmdpbi1sZWZ0OiA0NXB4O1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI7XFxuXFx0dHJhbnNpdGlvbjogY29sb3IgMC40cztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5jb21wbGV0ZWQgbGFiZWwge1xcblxcdGNvbG9yOiAjZDlkOWQ5O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRtYXJnaW46IGF1dG8gMDtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0Y29sb3I6ICNjYzlhOWE7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTFweDtcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmhvdmVyIHtcXG5cXHRjb2xvcjogI2FmNWI1ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTphZnRlciB7XFxuXFx0Y29udGVudDogJ8OXJztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaTpob3ZlciAuZGVzdHJveSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmVkaXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZzpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG5cXHRjb2xvcjogIzc3NztcXG5cXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG59XFxuXFxuLmZvb3RlcjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcblxcdCAgICAgICAgICAgIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxcblxcdCAgICAgICAgICAgIDAgOXB4IDFweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG5cXHQgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXFxuXFx0ICAgICAgICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnRvZG8tY291bnQge1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50b2RvLWNvdW50IHN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmZpbHRlcnMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi5maWx0ZXJzIGxpIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdG1hcmdpbjogM3B4O1xcblxcdHBhZGRpbmc6IDNweCA3cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYS5zZWxlY3RlZCxcXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4yKTtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZCxcXG5odG1sIC5jbGVhci1jb21wbGV0ZWQ6YWN0aXZlIHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW5mbyB7XFxuXFx0bWFyZ2luOiA2NXB4IGF1dG8gMDtcXG5cXHRjb2xvcjogI2JmYmZiZjtcXG5cXHRmb250LXNpemU6IDEwcHg7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gcCB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5pbmZvIGEge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaW5mbyBhOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLypcXG5cXHRIYWNrIHRvIHJlbW92ZSBiYWNrZ3JvdW5kIGZyb20gTW9iaWxlIFNhZmFyaS5cXG5cXHRDYW4ndCB1c2UgaXQgZ2xvYmFsbHkgc2luY2UgaXQgZGVzdHJveXMgY2hlY2tib3hlcyBpbiBGaXJlZm94XFxuKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcXG5cXHQudG9nZ2xlLWFsbCxcXG5cXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0fVxcblxcblxcdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdH1cXG5cXG5cXHQudG9nZ2xlLWFsbCB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuXFx0LmZvb3RlciB7XFxuXFx0XFx0aGVpZ2h0OiA1MHB4O1xcblxcdH1cXG5cXG5cXHQuZmlsdGVycyB7XFxuXFx0XFx0Ym90dG9tOiAxMHB4O1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCYtcmVzdHJ1Y3R1cmluZyEuL34vcG9zdGNzcy1sb2FkZXIhLi9+L3RvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuc2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTs7XG5cdGV4cG9ydHMubWVyZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRleHBvcnRzLnJlbW92ZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3Qta2V5c1wiKTtcblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIGFzc2lnbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHR2YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBmb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIG1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHQvLyBub2RlIHN0cnVjdHVyZSB7a2V5LCB2YWx1ZSwgZGF0YSwgcGFyZW50Tm9kZX1cblxuXHR2YXIgTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBOb2RlKF9yZWYpIHtcblx0ICAgIHZhciBrZXkgPSBfcmVmLmtleTtcblx0ICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG5cdCAgICB2YXIgZGF0YSA9IF9yZWYuZGF0YTtcblx0ICAgIHZhciBwYXJlbnROb2RlID0gX3JlZi5wYXJlbnROb2RlO1xuXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG5cblx0ICAgIHRoaXMua2V5ID0ga2V5O1xuXHQgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXHQgICAgdGhpcy5kYXRhID0gZGF0YTtcblx0ICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG5cdCAgICB0aGlzLmNoaWxkcmVuID0ge307XG5cdCAgfVxuXG5cdCAgX2NyZWF0ZUNsYXNzKE5vZGUsIFt7XG5cdCAgICBrZXk6ICdzZXRDaGlsZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q2hpbGQoa2V5LCBjaGlsZCkge1xuXHQgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBjaGlsZDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdnZXRDaGlsZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGQoa2V5KSB7XG5cdCAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XG5cdCAgICB9XG5cdCAgfV0pO1xuXG5cdCAgcmV0dXJuIE5vZGU7XG5cdH0oKTtcblxuXHQvLyBBc3NpZ24gZGF0YSB3aXRoIGFycmF5OiB7a2V5LCB2YWx1ZSwgdHlwZT0nc2V0J31cblx0Ly8gZGF0YSA6IGFycmF5ID0+IHJlcGxhY2UgdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGluZGV4KG9iai5rZXkpXG5cdC8vICAgICAgICBvYmplY3QgPT4gYXNzaWduIG9iamVjdFxuXHQvLyBcblx0Ly8gZWc6b2JqMTp7a2V5OjEsdmFsdWV9LG9iajI6e2tleTozLHZhbHVlfVxuXHQvL1xuXHQvLyBhcnJheTpcblx0Ly8gWzAsIDEsICAgICAgICAgIDIsIDMsICAgICAgICAgIDRdID0+XG5cdC8vIFswLCBvYmoxLnZhbHVlLCAyLCBvYmoyLnZhbHVlLCA0XVxuXHQvL1xuXHQvLyBvYmplY3Q6XG5cdC8vIHtcblx0Ly8gICBcIjFcIjoxLFxuXHQvLyAgIFwiM1wiOjNcblx0Ly8gfSA9PlxuXHQvLyB7XG5cdC8vICAgXCIxXCI6b2JqMS52YWx1ZSxcblx0Ly8gICBcIjNcIjpvYmoyLnZhbHVlXG5cdC8vIH1cblxuXG5cdGZ1bmN0aW9uIGFzc2lnbkRhdGEobm9kZSwgYXJyYXkpIHtcblx0ICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICdzZXQnIDogYXJndW1lbnRzWzJdO1xuXG5cdCAgdmFyIGRhdGEgPSBub2RlLmRhdGE7XG5cdCAgaWYgKHR5cGUgPT09ICdyZW1vdmUnICYmIG5vZGUuc2Vjb25kTm9kZSkge1xuXHQgICAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcblx0ICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KCk7XG5cdCAgICAgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChvYmosIGluZGV4KSB7XG5cdCAgICAgICAgLy8gc3BsaWNlIDEgaXRlbSBhbmQgaW5kZXggLSAxXG5cdCAgICAgICAgZGF0YS5zcGxpY2Uob2JqLmtleSAtIGluZGV4LCAxKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBkYXRhO1xuXHQgICAgfVxuXHQgICAgZGF0YSA9IGFzc2lnbih7fSwgZGF0YSk7XG5cdCAgICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgIGlmIChvYmoua2V5IGluIGRhdGEpIHtcblx0ICAgICAgICBkZWxldGUgZGF0YVtvYmoua2V5XTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cblx0ICBpZiAoaXNBcnJheShkYXRhKSkge1xuXHQgICAgZGF0YSA9IGRhdGEuY29uY2F0KCk7XG5cdCAgICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgIGRhdGFbb2JqLmtleV0gPSBvYmoudmFsdWU7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBkYXRhO1xuXHQgIH1cblx0ICB2YXIgYXNzaWduT2JqZWN0ID0ge307XG5cdCAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKG9iaikge1xuXHQgICAgYXNzaWduT2JqZWN0W29iai5rZXldID0gb2JqLnZhbHVlO1xuXHQgIH0pO1xuXHQgIHJldHVybiBhc3NpZ24oe30sIGRhdGEsIGFzc2lnbk9iamVjdCk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSB0cmVlIHRoYXQgY2FuIGJlIHVzZWQgdG8gaGFuZGxlIG11bHRpcGxlIGRhdGFcblx0Ly8gQHBhcmFtIGRhdGEgKE9iamVjdCBvciBBcnJheSlcblx0Ly8gQHBhcmFtIGFycmF5IChBcnJheSBvZiBTdHJ1Y3R1cmUge3BhdGgsIGRhdGF9KVxuXHQvL1xuXHQvLyBlZzpbe3BhdGg6W1wiYVwiLFwiYlwiXSxkYXRhOjF9LHtwYXRoOltcImFcIixcImNcIl0sZGF0YToyfV0gPT5cblx0Ly8gICBhXG5cdC8vICAvIFxcXG5cdC8vIGIgICBjXG5cdC8vIHwgICB8XG5cdC8vIDEgICAyXG5cdGZ1bmN0aW9uIGNyZWF0ZVRyZWUoZGF0YSwgYXJyYXkpIHtcblx0ICB2YXIgdHJlZSA9IG5ldyBOb2RlKHtcblx0ICAgIGRhdGE6IGRhdGFcblx0ICB9KTtcblxuXHQgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICB2YXIgcG9pbnRlciA9IHRyZWU7XG5cdCAgICB2YXIgZGF0YVBvaW50ZXIgPSBkYXRhO1xuXG5cdCAgICB2YXIgbGVuID0gaXRlbS5wYXRoLmxlbmd0aDtcblxuXHQgICAgZm9yRWFjaChpdGVtLnBhdGgsIGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG5cblx0ICAgICAgdmFyIGNoaWxkID0gcG9pbnRlci5nZXRDaGlsZChrZXkpIHx8IG5ldyBOb2RlKHtcblx0ICAgICAgICAvLyBub2RlIG5hbWVcblx0ICAgICAgICBrZXk6IGtleSxcblx0ICAgICAgICAvLyBsZWFmIG5vZGUgdmFsdWVcblx0ICAgICAgICB2YWx1ZTogbGVuID09PSBpbmRleCArIDEgPyBpdGVtLmRhdGEgOiBudWxsLFxuXHQgICAgICAgIC8vIHJlYWwgZGF0YVxuXHQgICAgICAgIGRhdGE6IGRhdGFQb2ludGVyW2tleV0sXG5cdCAgICAgICAgLy8gcGFyZW50IG5vZGVcblx0ICAgICAgICBwYXJlbnROb2RlOiBwb2ludGVyXG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIGRhdGFQb2ludGVyID0gZGF0YVBvaW50ZXJba2V5XTtcblx0ICAgICAgcG9pbnRlci5zZXRDaGlsZChrZXksIGNoaWxkKTtcblx0ICAgICAgcG9pbnRlciA9IGNoaWxkO1xuXHQgICAgfSk7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHRyZWU7XG5cdH1cblxuXHQvLyBSZWN1cnNpdmUgYWNjZXNzIG5vZGUgYW5kIGdldCB0aGUgYXNzaWduRGF0YSxcblx0Ly8gYW5kIHRoZW4gcmV0dXJuIHRoZSByb290IG5vZGUgdmFsdWVcblx0ZnVuY3Rpb24gZ2V0Tm9kZVZhbHVlKG5vZGUsIHR5cGUpIHtcblx0ICB2YXIgYXJyYXkgPSBrZXlzKG5vZGUuY2hpbGRyZW4pO1xuXG5cdCAgLy8gSnVzdCBnZXQgdGhlIGxlYWYgbm9kZSB2YWx1ZSxcblx0ICAvLyBpZiBhIG5vZGUgaXMgbm90IGEgbGVhZiBub2RlIGFuZCBpdHMgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCxcblx0ICAvLyB0aGVuIHRoZSB2YWx1ZSBpcyBpZ25vcmVkLlxuXHQgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcblx0ICAgIC8vIE1hcmsgdGhlIHBhcmVudCBub2RlIGlzIHRoZSBzZWNvbmQgbGFzdCBub2RlLFxuXHQgICAgLy8gc28gaXQgaXMgY29udmVuaWVudCB0byBrbm93IGluIHdoaWNoIG5vZGUgY2FuIHJlbW92ZSBhdHRyaWJ1dGVzXG5cdCAgICBub2RlLnBhcmVudE5vZGUuc2Vjb25kTm9kZSA9IHRydWU7XG5cdCAgICByZXR1cm4gbm9kZS52YWx1ZTtcblx0ICB9XG5cblx0ICB2YXIgYXNzaWduQXJyYXkgPSBtYXAoYXJyYXksIGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5ba2V5XTtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIGtleTogY2hpbGQua2V5LFxuXHQgICAgICB2YWx1ZTogZ2V0Tm9kZVZhbHVlKGNoaWxkLCB0eXBlKVxuXHQgICAgfTtcblx0ICB9KTtcblxuXHQgIHJldHVybiBhc3NpZ25EYXRhKG5vZGUsIGFzc2lnbkFycmF5LCB0eXBlKTtcblx0fVxuXG5cdGV4cG9ydHMuY3JlYXRlVHJlZSA9IGNyZWF0ZVRyZWU7XG5cdGV4cG9ydHMuZ2V0Tm9kZVZhbHVlID0gZ2V0Tm9kZVZhbHVlO1xuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJyYXktbWFwXCIpO1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJyYXktZm9yZWFjaFwiKTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLWFycmF5XCIpO1xuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LXBhdGgtcGFyc2VcIik7XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cblx0dmFyIGlzUGxhaW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0dmFyIGZvckVhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzIHx8IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0dmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgY3JlYXRlVHJlZSA9IF9yZXF1aXJlLmNyZWF0ZVRyZWU7XG5cdHZhciBnZXROb2RlVmFsdWUgPSBfcmVxdWlyZS5nZXROb2RlVmFsdWU7XG5cblx0Ly8gR2V0IHRoZSB0cmVlIHBhdGggYXJyYXlcblx0Ly8gcmV0dXJuIEFycmF5IG9mIFN0cnVjdHVyZSh7cGF0aDogQXJyYXkgb2YgU3RyaW5nLCBkYXRhOiBub2RlIHZhbHVlfSlcblx0Ly9cblx0Ly8gZWc6XG5cdC8vIHZhbHVlOlxuXHQvLyAgIGFcblx0Ly8gIC8gXFxcblx0Ly8gYiAgIGNcblx0Ly8gfCAgIHxcblx0Ly8gMSAgIDJcblx0Ly8gcmV0dXJuOlxuXHQvLyBbe3BhdGg6W1wiYVwiLFwiYlwiXSwgZGF0YToxfSwge3BhdGg6W1wiYVwiLFwiY1wiXSwgZGF0YToyfV1cblx0Ly9cblx0Ly8gSWYgdGhlIGRhdGEgaXMgbm90IGEgcGxhaW4gb2JqZWN0LCBhc3NpZ24gaXQgdG8gdGhlIGVsZW1lbnQsXG5cdC8vXG5cdC8vIGVnOlxuXHQvLyBtZXJnZSh7bGlzdDpbMSwyXX0sIHtsaXN0OlswXX0pID0+IHtsaXN0OlswXX1cblx0Ly8gbWVyZ2Uoe2xpc3Q6WzEsMl19LCB7bGlzdDp7XCIwXCI6MH19KSA9PiB7bGlzdDpbMCwyXX1cblxuXHRmdW5jdGlvbiBnZXRPYmplY3RQYXRoKHZhbHVlKSB7XG5cdCAgdmFyIGxpc3QgPSBbXTtcblx0ICBmdW5jdGlvbiB0cmF2ZXJzZShkYXRhKSB7XG5cdCAgICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICBpZiAoaXNQbGFpbk9iamVjdChkYXRhKSkge1xuXHQgICAgICBmb3JFYWNoKGtleXMoZGF0YSksIGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICB0cmF2ZXJzZShkYXRhW2tleV0sIHBhdGguY29uY2F0KGtleSkpO1xuXHQgICAgICB9KTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgbGlzdC5wdXNoKHtcblx0ICAgICAgcGF0aDogcGF0aCxcblx0ICAgICAgZGF0YTogZGF0YVxuXHQgICAgfSk7XG5cdCAgfVxuXHQgIHRyYXZlcnNlKHZhbHVlKTtcblx0ICByZXR1cm4gbGlzdDtcblx0fVxuXG5cdC8vIGRlZXAgbWVyZ2UgZGF0YVxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlKGRhdGEsIG9iaikge1xuXHQgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSAhPT0gJ29iamVjdCcpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBzaG91bGQgYmUgT2JqZWN0IG9yIEFycmF5Jyk7XG5cdCAgfVxuXHQgIGlmICghb2JqKSB7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cdCAgdmFyIGFycmF5ID0gZ2V0T2JqZWN0UGF0aChvYmopO1xuXHQgIHZhciB0cmVlID0gY3JlYXRlVHJlZShkYXRhLCBhcnJheSk7XG5cdCAgdmFyIHZhbHVlID0gZ2V0Tm9kZVZhbHVlKHRyZWUpO1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuXHR2YXIgcGFyc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHR2YXIgbWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHR2YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgY3JlYXRlVHJlZSA9IF9yZXF1aXJlLmNyZWF0ZVRyZWU7XG5cdHZhciBnZXROb2RlVmFsdWUgPSBfcmVxdWlyZS5nZXROb2RlVmFsdWU7XG5cblx0Ly8gcmVtb3ZlKGRhdGEsIFN0cmluZyBvciBBcnJheSlcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZShkYXRhKSB7XG5cdCAgdmFyIGFycmF5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbMV07XG5cblx0ICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgIT09ICdvYmplY3QnKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgc2hvdWxkIGJlIE9iamVjdCBvciBBcnJheScpO1xuXHQgIH1cblxuXHQgIGlmICghaXNBcnJheShhcnJheSkpIHtcblx0ICAgIGFycmF5ID0gW2FycmF5XTtcblx0ICB9XG5cblx0ICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cblx0ICBhcnJheSA9IG1hcChhcnJheSwgZnVuY3Rpb24gKHBhdGgpIHtcblx0ICAgIHBhdGggPSBTdHJpbmcocGF0aCk7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAvLyBKdXN0IHVzZSBzcGxpdCBpZiB0aGVyZSBpcyBubyAnWycgaW4gcGF0aFxuXHQgICAgICAvLyBlZzogb2JqW1wibGlzdFwiXSA9PiBwYXJzZSwgb2JqLmxpc3QgPT4gc3BsaXRcblx0ICAgICAgcGF0aDogcGF0aC5pbmRleE9mKCdbJykgPiAtMSA/IHBhcnNlKHBhdGgpIDogcGF0aC5zcGxpdCgnLicpLFxuXHQgICAgICBkYXRhOiBudWxsXG5cdCAgICB9O1xuXHQgIH0pO1xuXG5cdCAgdmFyIHRyZWUgPSBjcmVhdGVUcmVlKGRhdGEsIGFycmF5KTtcblx0ICB2YXIgdmFsdWUgPSBnZXROb2RlVmFsdWUodHJlZSwgJ3JlbW92ZScpO1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuXHR2YXIgcGFyc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHR2YXIgbWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIGNyZWF0ZVRyZWUgPSBfcmVxdWlyZS5jcmVhdGVUcmVlO1xuXHR2YXIgZ2V0Tm9kZVZhbHVlID0gX3JlcXVpcmUuZ2V0Tm9kZVZhbHVlO1xuXG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXQoZGF0YSkge1xuXHQgIHZhciBvYmogPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSAhPT0gJ29iamVjdCcpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBzaG91bGQgYmUgT2JqZWN0IG9yIEFycmF5Jyk7XG5cdCAgfVxuXHQgIHZhciBhcnJheSA9IGtleXMob2JqKTtcblx0ICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cdCAgYXJyYXkgPSBtYXAoYXJyYXksIGZ1bmN0aW9uIChwYXRoKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAvLyBKdXN0IHVzZSBzcGxpdCBpZiB0aGVyZSBpcyBubyAnWycgaW4gcGF0aFxuXHQgICAgICAvLyBlZzogb2JqW1wibGlzdFwiXSA9PiBwYXJzZSwgb2JqLmxpc3QgPT4gc3BsaXRcblx0ICAgICAgcGF0aDogcGF0aC5pbmRleE9mKCdbJykgPiAtMSA/IHBhcnNlKHBhdGgpIDogcGF0aC5zcGxpdCgnLicpLFxuXHQgICAgICBkYXRhOiBvYmpbcGF0aF1cblx0ICAgIH07XG5cdCAgfSk7XG5cdCAgdmFyIHRyZWUgPSBjcmVhdGVUcmVlKGRhdGEsIGFycmF5KTtcblx0ICB2YXIgdmFsdWUgPSBnZXROb2RlVmFsdWUodHJlZSk7XG5cdCAgcmV0dXJuIHZhbHVlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzLXBsYWluLW9iamVjdFwiKTtcblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpO1xuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbW11dGFibGUtZGF0YS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCJcbi8qKlxuICogaXNBcnJheVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiB0b1N0cmluZ1xuICovXG5cbnZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBgdmFsYFxuICogaXMgYW4gYXJyYXkuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgaXNBcnJheShbXSk7XG4gKiAgICAgICAgLy8gPiB0cnVlXG4gKiAgICAgICAgaXNBcnJheShhcmd1bWVudHMpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqICAgICAgICBpc0FycmF5KCcnKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKlxuICogQHBhcmFtIHttaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiAhISB2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PSBzdHIuY2FsbCh2YWwpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzLWFycmF5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcbnZhciBoYXNEb250RW51bUJ1ZyA9ICEoeyB0b1N0cmluZzogbnVsbCB9KS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbnZhciBoYXNQcm90b0VudW1CdWcgPSBmdW5jdGlvbiAoKSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgncHJvdG90eXBlJyk7XG52YXIgZG9udEVudW1zID0gW1xuXHQndG9TdHJpbmcnLFxuXHQndG9Mb2NhbGVTdHJpbmcnLFxuXHQndmFsdWVPZicsXG5cdCdoYXNPd25Qcm9wZXJ0eScsXG5cdCdpc1Byb3RvdHlwZU9mJyxcblx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0J2NvbnN0cnVjdG9yJ1xuXTtcbnZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG59O1xudmFyIGJsYWNrbGlzdGVkS2V5cyA9IHtcblx0JGNvbnNvbGU6IHRydWUsXG5cdCRmcmFtZTogdHJ1ZSxcblx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0JGZyYW1lczogdHJ1ZSxcblx0JHBhcmVudDogdHJ1ZSxcblx0JHNlbGY6IHRydWUsXG5cdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0JHdpbmRvdzogdHJ1ZVxufTtcbnZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHQvKiBnbG9iYWwgd2luZG93ICovXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFibGFja2xpc3RlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufSgpKTtcbnZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHQvKiBnbG9iYWwgd2luZG93ICovXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIga2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0fVxuXG5cdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGhlS2V5cztcbn07XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHJldHVybiAoT2JqZWN0LmtleXMoYXJndW1lbnRzKSB8fCAnJykubGVuZ3RoID09PSAyO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0dmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vYmplY3Qta2V5cy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBuKGkpIHtcbiAgICAgICAgaWYgKGVbaV0pIHJldHVybiBlW2ldLmV4cG9ydHM7XG4gICAgICAgIHZhciByID0gZVtpXSA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgaWQ6IGksXG4gICAgICAgICAgICBsb2FkZWQ6ICExXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0W2ldLmNhbGwoci5leHBvcnRzLCByLCByLmV4cG9ydHMsIG4pLCByLmxvYWRlZCA9ICEwLCByLmV4cG9ydHM7XG4gICAgfVxuICAgIHZhciBlID0ge307XG4gICAgcmV0dXJuIG4ubSA9IHQsIG4uYyA9IGUsIG4ucCA9IFwiXCIsIG4oMCk7XG59KFsgZnVuY3Rpb24odCwgbiwgZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGkodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Ll9fZXNNb2R1bGUgPyB0IDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcih0KSB7XG4gICAgICAgIHJldHVybiAoMCwgb1tcImRlZmF1bHRcIl0pKGhbXCJkZWZhdWx0XCJdLnBhcnNlKHQpKS5yZWR1Y2UoZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNMZWFmICYmIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIG4gJiYgdC5wdXNoKG4pLCB0O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICB2YWx1ZTogITBcbiAgICB9KSwgbltcImRlZmF1bHRcIl0gPSByO1xuICAgIHZhciBzID0gZSgxKSwgbyA9IGkocyksIGwgPSBlKDIpLCBoID0gaShsKTtcbiAgICB0LmV4cG9ydHMgPSBuW1wiZGVmYXVsdFwiXTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICB0LmV4cG9ydHMgPSByZXF1aXJlKFwidHJhdmVyc2VcIik7XG59LCBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgKGZ1bmN0aW9uKHQsIGkpIHtcbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55eSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG4gPSBbIDEsIDMgXSwgZSA9IFsgMSwgNCBdLCBpID0gWyAyLCA2IF0sIHIgPSBbIDEsIDcgXSwgcyA9IFsgMSwgOCBdLCBvID0ge1xuICAgICAgICAgICAgICAgIHRyYWNlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgIHl5OiB7fSxcbiAgICAgICAgICAgICAgICBzeW1ib2xzXzoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogMixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbnM6IDMsXG4gICAgICAgICAgICAgICAgICAgIGU6IDQsXG4gICAgICAgICAgICAgICAgICAgIEVPRjogNSxcbiAgICAgICAgICAgICAgICAgICAgUFJPUEVSVFk6IDYsXG4gICAgICAgICAgICAgICAgICAgIHA6IDcsXG4gICAgICAgICAgICAgICAgICAgIE5VTUJFUjogOCxcbiAgICAgICAgICAgICAgICAgICAgXCIuXCI6IDksXG4gICAgICAgICAgICAgICAgICAgIFwiW1wiOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgdDogMTEsXG4gICAgICAgICAgICAgICAgICAgIFwiXVwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgU1RSSU5HOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgJGFjY2VwdDogMCxcbiAgICAgICAgICAgICAgICAgICAgJGVuZDogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVybWluYWxzXzoge1xuICAgICAgICAgICAgICAgICAgICAyOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIDU6IFwiRU9GXCIsXG4gICAgICAgICAgICAgICAgICAgIDY6IFwiUFJPUEVSVFlcIixcbiAgICAgICAgICAgICAgICAgICAgODogXCJOVU1CRVJcIixcbiAgICAgICAgICAgICAgICAgICAgOTogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBcIltcIixcbiAgICAgICAgICAgICAgICAgICAgMTI6IFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICAxMzogXCJTVFJJTkdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbnNfOiBbIDAsIFsgMywgMiBdLCBbIDQsIDIgXSwgWyA0LCAyIF0sIFsgNywgMiBdLCBbIDcsIDQgXSwgWyA3LCAwIF0sIFsgMTEsIDEgXSwgWyAxMSwgMSBdIF0sXG4gICAgICAgICAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24odCwgbiwgZSwgaSwgciwgcywgbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNbbCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwOiBzW2wgLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBzW2xdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTogc1tsXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA6IHNbbCAtIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IHNbbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHNbbF0uc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBzW2xdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0YWJsZTogWyB7XG4gICAgICAgICAgICAgICAgICAgIDM6IDEsXG4gICAgICAgICAgICAgICAgICAgIDQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIDY6IG4sXG4gICAgICAgICAgICAgICAgICAgIDg6IGVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDE6IFsgMyBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDEsIDUgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogaSxcbiAgICAgICAgICAgICAgICAgICAgNzogNixcbiAgICAgICAgICAgICAgICAgICAgOTogcixcbiAgICAgICAgICAgICAgICAgICAgMTA6IHNcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IGksXG4gICAgICAgICAgICAgICAgICAgIDc6IDksXG4gICAgICAgICAgICAgICAgICAgIDk6IHIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBzXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxOiBbIDIsIDEgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCAyIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICA2OiBuLFxuICAgICAgICAgICAgICAgICAgICA4OiBlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA4OiBbIDEsIDEzIF0sXG4gICAgICAgICAgICAgICAgICAgIDExOiAxMSxcbiAgICAgICAgICAgICAgICAgICAgMTM6IFsgMSwgMTIgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCAzIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgNCBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxMjogWyAxLCAxNCBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxMjogWyAyLCA3IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDIsIDggXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogaSxcbiAgICAgICAgICAgICAgICAgICAgNzogMTUsXG4gICAgICAgICAgICAgICAgICAgIDk6IHIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBzXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDUgXVxuICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDEgXSxcbiAgICAgICAgICAgICAgICAgICAgNjogWyAyLCAyIF0sXG4gICAgICAgICAgICAgICAgICAgIDk6IFsgMiwgMyBdLFxuICAgICAgICAgICAgICAgICAgICAxMDogWyAyLCA0IF0sXG4gICAgICAgICAgICAgICAgICAgIDEyOiBbIDIsIDcgXSxcbiAgICAgICAgICAgICAgICAgICAgMTM6IFsgMiwgOCBdLFxuICAgICAgICAgICAgICAgICAgICAxNTogWyAyLCA1IF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuLnJlY292ZXJhYmxlKSB0aHJvdyBuZXcgRXJyb3IodCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2UodCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJzZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9IHAubGV4KCkgfHwgeSwgXCJudW1iZXJcIiAhPSB0eXBlb2YgdCAmJiAodCA9IGUuc3ltYm9sc19bdF0gfHwgdCksIHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLCBpID0gWyAwIF0sIHIgPSBbIG51bGwgXSwgcyA9IFtdLCBvID0gdGhpcy50YWJsZSwgbCA9IFwiXCIsIGggPSAwLCBjID0gMCwgYSA9IDAsIHUgPSAyLCB5ID0gMSwgZiA9IHMuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBwID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKSwgZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHl5OiB7fVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIHRoaXMueXkpIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnl5LCBtKSAmJiAoZy55eVttXSA9IHRoaXMueXlbbV0pO1xuICAgICAgICAgICAgICAgICAgICBwLnNldElucHV0KHQsIGcueXkpLCBnLnl5LmxleGVyID0gcCwgZy55eS5wYXJzZXIgPSB0aGlzLCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBwLnl5bGxvYyAmJiAocC55eWxsb2MgPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfID0gcC55eWxsb2M7XG4gICAgICAgICAgICAgICAgICAgIHMucHVzaChfKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBwLm9wdGlvbnMgJiYgcC5vcHRpb25zLnJhbmdlcztcbiAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBnLnl5LnBhcnNlRXJyb3IgPyB0aGlzLnBhcnNlRXJyb3IgPSBnLnl5LnBhcnNlRXJyb3IgOiB0aGlzLnBhcnNlRXJyb3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdiwgYiwgaywgeCwgdywgRSwgUywgQSwgSSwgUCA9IHt9OyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoayA9IGlbaS5sZW5ndGggLSAxXSwgdGhpcy5kZWZhdWx0QWN0aW9uc1trXSA/IHggPSB0aGlzLmRlZmF1bHRBY3Rpb25zW2tdIDogKChudWxsID09PSB2IHx8IFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHYpICYmICh2ID0gbigpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gb1trXSAmJiBvW2tdW3ZdKSwgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgeCB8fCAheC5sZW5ndGggfHwgIXhbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoRSBpbiBvW2tdKSB0aGlzLnRlcm1pbmFsc19bRV0gJiYgRSA+IHUgJiYgSS5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW0VdICsgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQgPSBwLnNob3dQb3NpdGlvbiA/IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArIChoICsgMSkgKyBcIjpcXG5cIiArIHAuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIEkuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3ZdIHx8IHYpICsgXCInXCIgOiBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoaCArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAodiA9PSB5ID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1t2XSB8fCB2KSArIFwiJ1wiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUVycm9yKCQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcC5tYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRoaXMudGVybWluYWxzX1t2XSB8fCB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiBwLnl5bGluZW5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IF8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFswXSBpbnN0YW5jZW9mIEFycmF5ICYmIHgubGVuZ3RoID4gMSkgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgayArIFwiLCB0b2tlbjogXCIgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoeFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKHYpLCByLnB1c2gocC55eXRleHQpLCBzLnB1c2gocC55eWxsb2MpLCBpLnB1c2goeFsxXSksIHYgPSBudWxsLCBiID8gKHYgPSBiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gbnVsbCkgOiAoYyA9IHAueXlsZW5nLCBsID0gcC55eXRleHQsIGggPSBwLnl5bGluZW5vLCBfID0gcC55eWxsb2MsIGEgPiAwICYmIGEtLSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTID0gdGhpcy5wcm9kdWN0aW9uc19beFsxXV1bMV0sIFAuJCA9IHJbci5sZW5ndGggLSBTXSwgUC5fJCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogc1tzLmxlbmd0aCAtIChTIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHNbcy5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogc1tzLmxlbmd0aCAtIChTIHx8IDEpXS5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBzW3MubGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkICYmIChQLl8kLnJhbmdlID0gWyBzW3MubGVuZ3RoIC0gKFMgfHwgMSldLnJhbmdlWzBdLCBzW3MubGVuZ3RoIC0gMV0ucmFuZ2VbMV0gXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0aGlzLnBlcmZvcm1BY3Rpb24uYXBwbHkoUCwgWyBsLCBjLCBoLCBnLnl5LCB4WzFdLCByLCBzIF0uY29uY2F0KGYpKSwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdykgcmV0dXJuIHc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUyAmJiAoaSA9IGkuc2xpY2UoMCwgLTEgKiBTICogMiksIHIgPSByLnNsaWNlKDAsIC0xICogUyksIHMgPSBzLnNsaWNlKDAsIC0xICogUykpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2godGhpcy5wcm9kdWN0aW9uc19beFsxXV1bMF0pLCByLnB1c2goUC4kKSwgcy5wdXNoKFAuXyQpLCBBID0gb1tpW2kubGVuZ3RoIC0gMl1dW2lbaS5sZW5ndGggLSAxXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIEVPRjogMSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnl5LnBhcnNlcikgdGhyb3cgbmV3IEVycm9yKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcih0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnl5ID0gbiB8fCB0aGlzLnl5IHx8IHt9LCB0aGlzLl9pbnB1dCA9IHQsIHRoaXMuX21vcmUgPSB0aGlzLl9iYWNrdHJhY2sgPSB0aGlzLmRvbmUgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwLCB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSBcIlwiLCB0aGlzLmNvbmRpdGlvblN0YWNrID0gWyBcIklOSVRJQUxcIiBdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbIDAsIDAgXSksIHRoaXMub2Zmc2V0ID0gMCwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IHQsIHRoaXMueXlsZW5nKyssIHRoaXMub2Zmc2V0KyssIHRoaXMubWF0Y2ggKz0gdCwgdGhpcy5tYXRjaGVkICs9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPyAodGhpcy55eWxpbmVubysrLCB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKykgOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgdGhpcy55eWxsb2MucmFuZ2VbMV0rKywgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1bnB1dDogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0Lmxlbmd0aCwgZSA9IHQuc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdCArIHRoaXMuX2lucHV0LCB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBuKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCAtPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKSwgdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5sZW5ndGggLSAxICYmICh0aGlzLnl5bGluZW5vIC09IGUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogZSA/IChlLmxlbmd0aCA9PT0gaS5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIGlbaS5sZW5ndGggLSBlLmxlbmd0aF0ubGVuZ3RoIC0gZVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFsgclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbiBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aCwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9yZSA9ICEwLCB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWplY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIgPyAodGhpcy5fYmFja3RyYWNrID0gITAsIHRoaXMpIDogdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBZb3UgY2FuIG9ubHkgaW52b2tlIHJlamVjdCgpIGluIHRoZSBsZXhlciB3aGVuIHRoZSBsZXhlciBpcyBvZiB0aGUgYmFja3RyYWNraW5nIHBlcnN1YXNpb24gKG9wdGlvbnMuYmFja3RyYWNrX2xleGVyID0gdHJ1ZSkuXFxuXCIgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVzczogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzdElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpICsgdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQubGVuZ3RoIDwgMjAgJiYgKHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gdC5sZW5ndGgpKSwgKHQuc3Vic3RyKDAsIDIwKSArICh0Lmxlbmd0aCA+IDIwID8gXCIuLi5cIiA6IFwiXCIpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMucGFzdElucHV0KCksIG4gPSBuZXcgQXJyYXkodC5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgbiArIFwiXlwiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0ZXN0X21hdGNoOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSwgaSwgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyICYmIChyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGluZW5vOiB0aGlzLnl5bGluZW5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGxvYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMubGFzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXRleHQ6IHRoaXMueXl0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiB0aGlzLm1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXM6IHRoaXMubWF0Y2hlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkOiB0aGlzLm1hdGNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsZW5nOiB0aGlzLnl5bGVuZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tb3JlOiB0aGlzLl9tb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbnB1dDogdGhpcy5faW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXk6IHRoaXMueXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uU3RhY2s6IHRoaXMuY29uZGl0aW9uU3RhY2suc2xpY2UoMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogdGhpcy5kb25lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIChyLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApKSksIGkgPSB0WzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpICYmICh0aGlzLnl5bGluZW5vICs9IGkubGVuZ3RoKSwgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogaSA/IGlbaS5sZW5ndGggLSAxXS5sZW5ndGggLSBpW2kubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyB0WzBdLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy55eXRleHQgKz0gdFswXSwgdGhpcy5tYXRjaCArPSB0WzBdLCB0aGlzLm1hdGNoZXMgPSB0LCB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucmFuZ2VzICYmICh0aGlzLnl5bGxvYy5yYW5nZSA9IFsgdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSAhMSwgdGhpcy5fYmFja3RyYWNrID0gITEsIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UodFswXS5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCArPSB0WzBdLCBlID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgbiwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQgJiYgKHRoaXMuZG9uZSA9ICExKSwgZSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBpbiByKSB0aGlzW3NdID0gcltzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkgcmV0dXJuIHRoaXMuRU9GO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgfHwgKHRoaXMuZG9uZSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0LCBuLCBlLCBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSB8fCAodGhpcy55eXRleHQgPSBcIlwiLCB0aGlzLm1hdGNoID0gXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gdGhpcy5fY3VycmVudFJ1bGVzKCksIHMgPSAwOyBzIDwgci5sZW5ndGg7IHMrKykgaWYgKGUgPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3Jbc11dKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlICYmICghbiB8fCBlWzBdLmxlbmd0aCA+IG5bMF0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID0gZSwgaSA9IHMsIHRoaXMub3B0aW9ucy5iYWNrdHJhY2tfbGV4ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPSB0aGlzLnRlc3RfbWF0Y2goZSwgcltzXSksIHQgIT09ICExKSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuID8gKHQgPSB0aGlzLnRlc3RfbWF0Y2gobiwgcltpXSksIHQgIT09ICExID8gdCA6ICExKSA6IFwiXCIgPT09IHRoaXMuX2lucHV0ID8gdGhpcy5FT0YgOiB0aGlzLnBhcnNlRXJyb3IoXCJMZXhpY2FsIGVycm9yIG9uIGxpbmUgXCIgKyAodGhpcy55eWxpbmVubyArIDEpICsgXCIuIFVucmVjb2duaXplZCB0ZXh0LlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxleDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPyB0IDogdGhpcy5sZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA+IDAgPyB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpIDogdGhpcy5jb25kaXRpb25TdGFja1swXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggJiYgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID8gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXMgOiB0aGlzLmNvbmRpdGlvbnMuSU5JVElBTC5ydWxlcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxIC0gTWF0aC5hYnModCB8fCAwKSwgdCA+PSAwID8gdGhpcy5jb25kaXRpb25TdGFja1t0XSA6IFwiSU5JVElBTFwiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4odCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlU3RhY2tTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge30sXG4gICAgICAgICAgICAgICAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uKHQsIG4sIGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gOTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklOVkFMSURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFsgL14oPzpcIig/OlxcXFxcInxbXlxcXCJdKSpcInwnKD86XFxcXCd8W15cXCddKSonKS8sIC9eKD86W2EtekEtWl9cXCRdW1xcd19cXCRdKikvLCAvXig/OjB8WzEtOV1cXGQqKS8sIC9eKD86XFxbKS8sIC9eKD86XFxdKS8sIC9eKD86XFwuKS8sIC9eKD86JCkvLCAvXig/Oi4pLyBdLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBJTklUSUFMOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNyBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICByZXR1cm4gby5sZXhlciA9IGwsIHQucHJvdG90eXBlID0gbywgby5QYXJzZXIgPSB0LCBuZXcgdCgpO1xuICAgICAgICB9KCk7XG4gICAgICAgIG4ucGFyc2VyID0gciwgbi5QYXJzZXIgPSByLlBhcnNlciwgbi5wYXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHIucGFyc2UuYXBwbHkociwgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbi5tYWluID0gZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgaVsxXSB8fCAoY29uc29sZS5sb2coXCJVc2FnZTogXCIgKyBpWzBdICsgXCIgRklMRVwiKSwgdC5leGl0KDEpKTtcbiAgICAgICAgICAgIHZhciByID0gZSg1KS5yZWFkRmlsZVN5bmMoZSg2KS5ub3JtYWxpemUoaVsxXSksIFwidXRmOFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuLnBhcnNlci5wYXJzZShyKTtcbiAgICAgICAgfSwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgaSAmJiBlLmNbMF0gPT09IGkgJiYgbi5tYWluKHQuYXJndi5zbGljZSgxKSk7XG4gICAgfSkuY2FsbChuLCBlKDMpLCBlKDQpKHQpKTtcbn0sIGZ1bmN0aW9uKHQsIG4pIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICBjID0gITEsIG8ubGVuZ3RoID8gaCA9IG8uY29uY2F0KGgpIDogYSA9IC0xLCBoLmxlbmd0aCAmJiBpKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGkoKSB7XG4gICAgICAgIGlmICghYykge1xuICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGUpO1xuICAgICAgICAgICAgYyA9ICEwO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IGgubGVuZ3RoOyBuOyApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG8gPSBoLCBoID0gW107ICsrYSA8IG47ICkgbyAmJiBvW2FdLnJ1bigpO1xuICAgICAgICAgICAgICAgIGEgPSAtMSwgbiA9IGgubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbyA9IG51bGwsIGMgPSAhMSwgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHIodCwgbikge1xuICAgICAgICB0aGlzLmZ1biA9IHQsIHRoaXMuYXJyYXkgPSBuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzKCkge31cbiAgICB2YXIgbywgbCA9IHQuZXhwb3J0cyA9IHt9LCBoID0gW10sIGMgPSAhMSwgYSA9IC0xO1xuICAgIGwubmV4dFRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBuID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykgbltlIC0gMV0gPSBhcmd1bWVudHNbZV07XG4gICAgICAgIGgucHVzaChuZXcgcih0LCBuKSksIDEgIT09IGgubGVuZ3RoIHx8IGMgfHwgc2V0VGltZW91dChpLCAwKTtcbiAgICB9LCByLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG4gICAgfSwgbC50aXRsZSA9IFwiYnJvd3NlclwiLCBsLmJyb3dzZXIgPSAhMCwgbC5lbnYgPSB7fSwgbC5hcmd2ID0gW10sIGwudmVyc2lvbiA9IFwiXCIsIFxuICAgIGwudmVyc2lvbnMgPSB7fSwgbC5vbiA9IHMsIGwuYWRkTGlzdGVuZXIgPSBzLCBsLm9uY2UgPSBzLCBsLm9mZiA9IHMsIGwucmVtb3ZlTGlzdGVuZXIgPSBzLCBcbiAgICBsLnJlbW92ZUFsbExpc3RlbmVycyA9IHMsIGwuZW1pdCA9IHMsIGwuYmluZGluZyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfSwgbC5jd2QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiL1wiO1xuICAgIH0sIGwuY2hkaXIgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9LCBsLnVtYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG59LCBmdW5jdGlvbih0LCBuKSB7XG4gICAgdC5leHBvcnRzID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdC53ZWJwYWNrUG9seWZpbGwgfHwgKHQuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fSwgdC5wYXRocyA9IFtdLCB0LmNoaWxkcmVuID0gW10sIFxuICAgICAgICB0LndlYnBhY2tQb2x5ZmlsbCA9IDEpLCB0O1xuICAgIH07XG59LCBmdW5jdGlvbih0LCBuKSB7fSwgZnVuY3Rpb24odCwgbiwgZSkge1xuICAgIChmdW5jdGlvbih0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUodCwgbikge1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IDAsIGkgPSB0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0W2ldO1xuICAgICAgICAgICAgICAgIFwiLlwiID09PSByID8gdC5zcGxpY2UoaSwgMSkgOiBcIi4uXCIgPT09IHIgPyAodC5zcGxpY2UoaSwgMSksIGUrKykgOiBlICYmICh0LnNwbGljZShpLCAxKSwgXG4gICAgICAgICAgICAgICAgZS0tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuKSBmb3IgKDtlLS07IGUpIHQudW5zaGlmdChcIi4uXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaSh0LCBuKSB7XG4gICAgICAgICAgICBpZiAodC5maWx0ZXIpIHJldHVybiB0LmZpbHRlcihuKTtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSBbXSwgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSBuKHRbaV0sIGksIHQpICYmIGUucHVzaCh0W2ldKTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC8sIHMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICByZXR1cm4gci5leGVjKHQpLnNsaWNlKDEpO1xuICAgICAgICB9O1xuICAgICAgICBuLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBcIlwiLCByID0gITEsIHMgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgcyA+PSAtMSAmJiAhcjsgcy0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBzID49IDAgPyBhcmd1bWVudHNbc10gOiB0LmN3ZCgpO1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBvKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3NcIik7XG4gICAgICAgICAgICAgICAgbyAmJiAobiA9IG8gKyBcIi9cIiArIG4sIHIgPSBcIi9cIiA9PT0gby5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG4gPSBlKGkobi5zcGxpdChcIi9cIiksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF0O1xuICAgICAgICAgICAgfSksICFyKS5qb2luKFwiL1wiKSwgKHIgPyBcIi9cIiA6IFwiXCIpICsgbiB8fCBcIi5cIjtcbiAgICAgICAgfSwgbi5ub3JtYWxpemUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB2YXIgciA9IG4uaXNBYnNvbHV0ZSh0KSwgcyA9IFwiL1wiID09PSBvKHQsIC0xKTtcbiAgICAgICAgICAgIHJldHVybiB0ID0gZShpKHQuc3BsaXQoXCIvXCIpLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhdDtcbiAgICAgICAgICAgIH0pLCAhcikuam9pbihcIi9cIiksIHQgfHwgciB8fCAodCA9IFwiLlwiKSwgdCAmJiBzICYmICh0ICs9IFwiL1wiKSwgKHIgPyBcIi9cIiA6IFwiXCIpICsgdDtcbiAgICAgICAgfSwgbi5pc0Fic29sdXRlID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiL1wiID09PSB0LmNoYXJBdCgwKTtcbiAgICAgICAgfSwgbi5qb2luID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgICAgICByZXR1cm4gbi5ub3JtYWxpemUoaSh0LCBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5nc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH0pLmpvaW4oXCIvXCIpKTtcbiAgICAgICAgfSwgbi5yZWxhdGl2ZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGkodCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGggJiYgXCJcIiA9PT0gdFtuXTsgbisrKSA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IHQubGVuZ3RoIC0gMTsgZSA+PSAwICYmIFwiXCIgPT09IHRbZV07IGUtLSkgO1xuICAgICAgICAgICAgICAgIHJldHVybiBuID4gZSA/IFtdIDogdC5zbGljZShuLCBlIC0gbiArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCA9IG4ucmVzb2x2ZSh0KS5zdWJzdHIoMSksIGUgPSBuLnJlc29sdmUoZSkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IGkodC5zcGxpdChcIi9cIikpLCBzID0gaShlLnNwbGl0KFwiL1wiKSksIG8gPSBNYXRoLm1pbihyLmxlbmd0aCwgcy5sZW5ndGgpLCBsID0gbywgaCA9IDA7IG8gPiBoOyBoKyspIGlmIChyW2hdICE9PSBzW2hdKSB7XG4gICAgICAgICAgICAgICAgbCA9IGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gW10sIGggPSBsOyBoIDwgci5sZW5ndGg7IGgrKykgYy5wdXNoKFwiLi5cIik7XG4gICAgICAgICAgICByZXR1cm4gYyA9IGMuY29uY2F0KHMuc2xpY2UobCkpLCBjLmpvaW4oXCIvXCIpO1xuICAgICAgICB9LCBuLnNlcCA9IFwiL1wiLCBuLmRlbGltaXRlciA9IFwiOlwiLCBuLmRpcm5hbWUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHModCksIGUgPSBuWzBdLCBpID0gblsxXTtcbiAgICAgICAgICAgIHJldHVybiBlIHx8IGkgPyAoaSAmJiAoaSA9IGkuc3Vic3RyKDAsIGkubGVuZ3RoIC0gMSkpLCBlICsgaSkgOiBcIi5cIjtcbiAgICAgICAgfSwgbi5iYXNlbmFtZSA9IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgIHZhciBlID0gcyh0KVsyXTtcbiAgICAgICAgICAgIHJldHVybiBuICYmIGUuc3Vic3RyKC0xICogbi5sZW5ndGgpID09PSBuICYmIChlID0gZS5zdWJzdHIoMCwgZS5sZW5ndGggLSBuLmxlbmd0aCkpLCBcbiAgICAgICAgICAgIGU7XG4gICAgICAgIH0sIG4uZXh0bmFtZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBzKHQpWzNdO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbyA9IFwiYlwiID09PSBcImFiXCIuc3Vic3RyKC0xKSA/IGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnN1YnN0cihuLCBlKTtcbiAgICAgICAgfSA6IGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICAgICAgICAgIHJldHVybiAwID4gbiAmJiAobiA9IHQubGVuZ3RoICsgbiksIHQuc3Vic3RyKG4sIGUpO1xuICAgICAgICB9O1xuICAgIH0pLmNhbGwobiwgZSgzKSk7XG59IF0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1wYXRoLXBhcnNlL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL1JlYWN0RGVmYXVsdFBlcmYnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1hZGRvbnMtcGVyZi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdE1lbW9pemUgPSBkZWZhdWx0TWVtb2l6ZTtcbmV4cG9ydHMuY3JlYXRlU2VsZWN0b3JDcmVhdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yO1xuZXhwb3J0cy5jcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgPSBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3I7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0TWVtb2l6ZShmdW5jKSB7XG4gIHZhciBlcXVhbGl0eUNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdEVxdWFsaXR5Q2hlY2sgOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChsYXN0QXJncyAhPT0gbnVsbCAmJiBsYXN0QXJncy5sZW5ndGggPT09IGFyZ3MubGVuZ3RoICYmIGFyZ3MuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGVxdWFsaXR5Q2hlY2sodmFsdWUsIGxhc3RBcmdzW2luZGV4XSk7XG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnMgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgZnVuY3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICB2YXIgcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG5cbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh1bmRlZmluZWQsIFtmdW5jdGlvbiAoKSB7XG4gICAgICByZWNvbXB1dGF0aW9ucysrO1xuICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChtZW1vaXplT3B0aW9ucykpO1xuXG4gICAgdmFyIHNlbGVjdG9yID0gZnVuY3Rpb24gc2VsZWN0b3Ioc3RhdGUsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCA+IDIgPyBfbGVuNCAtIDIgOiAwKSwgX2tleTQgPSAyOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTQgLSAyXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJhbXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXBlbmRlbmN5KSB7XG4gICAgICAgIHJldHVybiBkZXBlbmRlbmN5LmFwcGx5KHVuZGVmaW5lZCwgW3N0YXRlLCBwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgc2VsZWN0b3IucmVzdWx0RnVuYyA9IHJlc3VsdEZ1bmM7XG4gICAgc2VsZWN0b3IucmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnM7XG4gICAgfTtcbiAgICBzZWxlY3Rvci5yZXNldFJlY29tcHV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB9O1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3IoKSB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycykge1xuICB2YXIgc2VsZWN0b3JDcmVhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gY3JlYXRlU2VsZWN0b3IgOiBhcmd1bWVudHNbMV07XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArICgnd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgJyArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Iob2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICB2YWx1ZXNbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZXNlbGVjdC9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCYtcmVzdHJ1Y3R1cmluZyEuLy4uL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJi1yZXN0cnVjdHVyaW5nIS4vLi4vcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmLXJlc3RydWN0dXJpbmchLi8uLi9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsInZhciB0cmF2ZXJzZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBuZXcgVHJhdmVyc2Uob2JqKTtcbn07XG5cbmZ1bmN0aW9uIFRyYXZlcnNlIChvYmopIHtcbiAgICB0aGlzLnZhbHVlID0gb2JqO1xufVxuXG5UcmF2ZXJzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBzKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnZhbHVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBwc1tpXTtcbiAgICAgICAgaWYgKCFub2RlIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIGtleSkpIHtcbiAgICAgICAgICAgIG5vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAocHMpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHBzW2ldO1xuICAgICAgICBpZiAoIW5vZGUgfHwgIWhhc093blByb3BlcnR5LmNhbGwobm9kZSwga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChwcywgdmFsdWUpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcy5sZW5ndGggLSAxOyBpICsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBwc1tpXTtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIGtleSkpIG5vZGVba2V5XSA9IHt9O1xuICAgICAgICBub2RlID0gbm9kZVtrZXldO1xuICAgIH1cbiAgICBub2RlW3BzW2ldXSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICByZXR1cm4gd2Fsayh0aGlzLnZhbHVlLCBjYiwgdHJ1ZSk7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYikge1xuICAgIHRoaXMudmFsdWUgPSB3YWxrKHRoaXMudmFsdWUsIGNiLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGNiLCBpbml0KSB7XG4gICAgdmFyIHNraXAgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxO1xuICAgIHZhciBhY2MgPSBza2lwID8gdGhpcy52YWx1ZSA6IGluaXQ7XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Jvb3QgfHwgIXNraXApIHtcbiAgICAgICAgICAgIGFjYyA9IGNiLmNhbGwodGhpcywgYWNjLCB4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUucGF0aHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFjYyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICBhY2MucHVzaCh0aGlzLnBhdGgpOyBcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLm5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhY2MgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgYWNjLnB1c2godGhpcy5ub2RlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRzID0gW10sIG5vZGVzID0gW107XG4gICAgXG4gICAgcmV0dXJuIChmdW5jdGlvbiBjbG9uZSAoc3JjKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhcmVudHNbaV0gPT09IHNyYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIHNyYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGRzdCA9IGNvcHkoc3JjKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFyZW50cy5wdXNoKHNyYyk7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGRzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvckVhY2gob2JqZWN0S2V5cyhzcmMpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgZHN0W2tleV0gPSBjbG9uZShzcmNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9KSh0aGlzLnZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIHdhbGsgKHJvb3QsIGNiLCBpbW11dGFibGUpIHtcbiAgICB2YXIgcGF0aCA9IFtdO1xuICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgdmFyIGFsaXZlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gKGZ1bmN0aW9uIHdhbGtlciAobm9kZV8pIHtcbiAgICAgICAgdmFyIG5vZGUgPSBpbW11dGFibGUgPyBjb3B5KG5vZGVfKSA6IG5vZGVfO1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0ge307XG4gICAgICAgIFxuICAgICAgICB2YXIga2VlcEdvaW5nID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG5vZGUgOiBub2RlLFxuICAgICAgICAgICAgbm9kZV8gOiBub2RlXyxcbiAgICAgICAgICAgIHBhdGggOiBbXS5jb25jYXQocGF0aCksXG4gICAgICAgICAgICBwYXJlbnQgOiBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICBwYXJlbnRzIDogcGFyZW50cyxcbiAgICAgICAgICAgIGtleSA6IHBhdGguc2xpY2UoLTEpWzBdLFxuICAgICAgICAgICAgaXNSb290IDogcGF0aC5sZW5ndGggPT09IDAsXG4gICAgICAgICAgICBsZXZlbCA6IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgY2lyY3VsYXIgOiBudWxsLFxuICAgICAgICAgICAgdXBkYXRlIDogZnVuY3Rpb24gKHgsIHN0b3BIZXJlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5pc1Jvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucGFyZW50Lm5vZGVbc3RhdGUua2V5XSA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXRlLm5vZGUgPSB4O1xuICAgICAgICAgICAgICAgIGlmIChzdG9wSGVyZSkga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2RlbGV0ZScgOiBmdW5jdGlvbiAoc3RvcEhlcmUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUucGFyZW50Lm5vZGVbc3RhdGUua2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcEhlcmUpIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZSA6IGZ1bmN0aW9uIChzdG9wSGVyZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHN0YXRlLnBhcmVudC5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wYXJlbnQubm9kZS5zcGxpY2Uoc3RhdGUua2V5LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5wYXJlbnQubm9kZVtzdGF0ZS5rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RvcEhlcmUpIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleXMgOiBudWxsLFxuICAgICAgICAgICAgYmVmb3JlIDogZnVuY3Rpb24gKGYpIHsgbW9kaWZpZXJzLmJlZm9yZSA9IGYgfSxcbiAgICAgICAgICAgIGFmdGVyIDogZnVuY3Rpb24gKGYpIHsgbW9kaWZpZXJzLmFmdGVyID0gZiB9LFxuICAgICAgICAgICAgcHJlIDogZnVuY3Rpb24gKGYpIHsgbW9kaWZpZXJzLnByZSA9IGYgfSxcbiAgICAgICAgICAgIHBvc3QgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMucG9zdCA9IGYgfSxcbiAgICAgICAgICAgIHN0b3AgOiBmdW5jdGlvbiAoKSB7IGFsaXZlID0gZmFsc2UgfSxcbiAgICAgICAgICAgIGJsb2NrIDogZnVuY3Rpb24gKCkgeyBrZWVwR29pbmcgPSBmYWxzZSB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoIWFsaXZlKSByZXR1cm4gc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUubm9kZSA9PT0gJ29iamVjdCcgJiYgc3RhdGUubm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICghc3RhdGUua2V5cyB8fCBzdGF0ZS5ub2RlXyAhPT0gc3RhdGUubm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5rZXlzID0gb2JqZWN0S2V5cyhzdGF0ZS5ub2RlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xlYWYgPSBzdGF0ZS5rZXlzLmxlbmd0aCA9PSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50c1tpXS5ub2RlXyA9PT0gbm9kZV8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNpcmN1bGFyID0gcGFyZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMZWFmID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5rZXlzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3RhdGUubm90TGVhZiA9ICFzdGF0ZS5pc0xlYWY7XG4gICAgICAgICAgICBzdGF0ZS5ub3RSb290ID0gIXN0YXRlLmlzUm9vdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdXBkYXRlU3RhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHVzZSByZXR1cm4gdmFsdWVzIHRvIHVwZGF0ZSBpZiBkZWZpbmVkXG4gICAgICAgIHZhciByZXQgPSBjYi5jYWxsKHN0YXRlLCBzdGF0ZS5ub2RlKTtcbiAgICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkICYmIHN0YXRlLnVwZGF0ZSkgc3RhdGUudXBkYXRlKHJldCk7XG4gICAgICAgIFxuICAgICAgICBpZiAobW9kaWZpZXJzLmJlZm9yZSkgbW9kaWZpZXJzLmJlZm9yZS5jYWxsKHN0YXRlLCBzdGF0ZS5ub2RlKTtcbiAgICAgICAgXG4gICAgICAgIGlmICgha2VlcEdvaW5nKSByZXR1cm4gc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlLm5vZGUgPT0gJ29iamVjdCdcbiAgICAgICAgJiYgc3RhdGUubm9kZSAhPT0gbnVsbCAmJiAhc3RhdGUuY2lyY3VsYXIpIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaChzdGF0ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvckVhY2goc3RhdGUua2V5cywgZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChtb2RpZmllcnMucHJlKSBtb2RpZmllcnMucHJlLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGVba2V5XSwga2V5KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB3YWxrZXIoc3RhdGUubm9kZVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1tdXRhYmxlICYmIGhhc093blByb3BlcnR5LmNhbGwoc3RhdGUubm9kZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ub2RlW2tleV0gPSBjaGlsZC5ub2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjaGlsZC5pc0xhc3QgPSBpID09IHN0YXRlLmtleXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBjaGlsZC5pc0ZpcnN0ID0gaSA9PSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChtb2RpZmllcnMucG9zdCkgbW9kaWZpZXJzLnBvc3QuY2FsbChzdGF0ZSwgY2hpbGQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcmVudHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChtb2RpZmllcnMuYWZ0ZXIpIG1vZGlmaWVycy5hZnRlci5jYWxsKHN0YXRlLCBzdGF0ZS5ub2RlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9KShyb290KS5ub2RlO1xufVxuXG5mdW5jdGlvbiBjb3B5IChzcmMpIHtcbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgc3JjICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBkc3Q7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNBcnJheShzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0RhdGUoc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IERhdGUoc3JjLmdldFRpbWUgPyBzcmMuZ2V0VGltZSgpIDogc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1JlZ0V4cChzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgUmVnRXhwKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNFcnJvcihzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSB7IG1lc3NhZ2U6IHNyYy5tZXNzYWdlIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCb29sZWFuKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IG5ldyBCb29sZWFuKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNOdW1iZXIoc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IE51bWJlcihzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IG5ldyBTdHJpbmcoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChPYmplY3QuY3JlYXRlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgZHN0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3JjKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3JjLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRzdCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByb3RvID1cbiAgICAgICAgICAgICAgICAoc3JjLmNvbnN0cnVjdG9yICYmIHNyYy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgfHwgc3JjLl9fcHJvdG9fX1xuICAgICAgICAgICAgICAgIHx8IHt9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICB2YXIgVCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgVC5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgICAgICAgIGRzdCA9IG5ldyBUO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3JFYWNoKG9iamVjdEtleXMoc3JjKSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZHN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkc3Q7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIHNyYztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzIChvYmopIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgcmVzLnB1c2goa2V5KVxuICAgIHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiB0b1MgKG9iaikgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgfVxuZnVuY3Rpb24gaXNEYXRlIChvYmopIHsgcmV0dXJuIHRvUyhvYmopID09PSAnW29iamVjdCBEYXRlXScgfVxuZnVuY3Rpb24gaXNSZWdFeHAgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nIH1cbmZ1bmN0aW9uIGlzRXJyb3IgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IEVycm9yXScgfVxuZnVuY3Rpb24gaXNCb29sZWFuIChvYmopIHsgcmV0dXJuIHRvUyhvYmopID09PSAnW29iamVjdCBCb29sZWFuXScgfVxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nIH1cbmZ1bmN0aW9uIGlzU3RyaW5nIChvYmopIHsgcmV0dXJuIHRvUyhvYmopID09PSAnW29iamVjdCBTdHJpbmddJyB9XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5ICh4cykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoeHMsIGZuKSB7XG4gICAgaWYgKHhzLmZvckVhY2gpIHJldHVybiB4cy5mb3JFYWNoKGZuKVxuICAgIGVsc2UgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmbih4c1tpXSwgaSwgeHMpO1xuICAgIH1cbn07XG5cbmZvckVhY2gob2JqZWN0S2V5cyhUcmF2ZXJzZS5wcm90b3R5cGUpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdHJhdmVyc2Vba2V5XSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciB0ID0gbmV3IFRyYXZlcnNlKG9iaik7XG4gICAgICAgIHJldHVybiB0W2tleV0uYXBwbHkodCwgYXJncyk7XG4gICAgfTtcbn0pO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHkgfHwgZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmo7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdHJhdmVyc2UvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9