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
	
	__webpack_require__(78);
	
	var _classnames = __webpack_require__(43);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reselect = __webpack_require__(75);
	
	var _index = __webpack_require__(14);
	
	var _index2 = _interopRequireDefault(_index);
	
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
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '\\276F';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\t-webkit-transition: color 0.4s;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\t-webkit-transition: color 0.2s ease-out;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '\\D7';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\t-ms-transform: rotate(90deg);\n\t\t    transform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\t     appearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n", "", {"version":3,"sources":["/./node_modules/todomvc-app-css/index.css"],"names":[],"mappings":"AAAA;;CAEC,UAAU;CACV,WAAW;CACX;;AAED;CACC,UAAU;CACV,WAAW;CACX,UAAU;CACV,iBAAiB;CACjB,gBAAgB;CAChB,yBAAyB;CACzB,qBAAqB;CACrB,qBAAqB;CACrB,eAAe;CACf,yBAAyB;CACzB,sBAAiB;MAAjB,iBAAiB;CACjB,oCAAoC;CACpC,mCAAmC;CACnC;;AAED;CACC,0DAA0D;CAC1D,mBAAmB;CACnB,oBAAoB;CACpB,eAAe;CACf,iBAAiB;CACjB,iBAAiB;CACjB,eAAe;CACf,oCAAoC;CACpC,mCAAmC;CACnC,iBAAiB;CACjB;;AAED;;CAEC,cAAc;CACd;;AAED;CACC,cAAc;CACd;;AAED;CACC,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB;8CAC6C;CAC7C;;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;;AAED;CACC,mBAAmB;CACnB,YAAY;CACZ,YAAY;CACZ,iBAAiB;CACjB,iBAAiB;CACjB,mBAAmB;CACnB,+BAA+B;CAC/B,2CAA2C;CAC3C,wCAAwC;CACxC,mCAAmC;CACnC;;AAED;;CAEC,mBAAmB;CACnB,UAAU;CACV,YAAY;CACZ,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB,mBAAmB;CACnB,UAAU;CACV,cAAc;CACd,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,kDAAkD;CAClD,uBAAuB;CACvB,oCAAoC;CACpC,mCAAmC;CACnC;;AAED;CACC,6BAA6B;CAC7B,aAAa;CACb,iCAAiC;CACjC,8CAA8C;CAC9C;;AAED;CACC,mBAAmB;CACnB,WAAW;CACX,8BAA8B;CAC9B;;AAED;CACC,cAAc;CACd;;AAED;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,aAAa,CAAC,mBAAmB;CACjC;;AAED;CACC,iBAAa;CACb,gBAAgB;CAChB,eAAe;CACf,6BAA6B;CAC7B;;AAED;CACC,eAAe;CACf;;AAED;CACC,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB;;AAED;CACC,mBAAmB;CACnB,gBAAgB;CAChB,iCAAiC;CACjC;;AAED;CACC,oBAAoB;CACpB;;AAED;CACC,oBAAoB;CACpB,WAAW;CACX;;AAED;CACC,eAAe;CACf,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB;;AAED;CACC,cAAc;CACd;;AAED;CACC,mBAAmB;CACnB,YAAY;CACZ,mEAAmE;CACnE,aAAa;CACb,mBAAmB;CACnB,OAAO;CACP,UAAU;CACV,eAAe;CACf,aAAa,CAAC,mBAAmB;CACjC,yBAAyB;CACzB,sBAAiB;MAAjB,iBAAiB;CACjB;;AAED;CACC,sNAAsN;CACtN;;AAED;CACC,qRAAqR;CACrR;;AAED;CACC,sBAAsB;CACtB,sBAAsB;CACtB,6BAA6B;CAC7B,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,+BAAuB;CAAvB,uBAAuB;CACvB;;AAED;CACC,eAAe;CACf,8BAA8B;CAC9B;;AAED;CACC,cAAc;CACd,mBAAmB;CACnB,OAAO;CACP,YAAY;CACZ,UAAU;CACV,YAAY;CACZ,aAAa;CACb,eAAe;CACf,gBAAgB;CAChB,eAAe;CACf,oBAAoB;CACpB,wCAAgC;CAAhC,gCAAgC;CAChC;;AAED;CACC,eAAe;CACf;;AAED;CACC,eAAa;CACb;;AAED;CACC,eAAe;CACf;;AAED;CACC,cAAc;CACd;;AAED;CACC,oBAAoB;CACpB;;AAED;CACC,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B;;AAED;CACC,YAAY;CACZ,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,QAAQ;CACR,aAAa;CACb,iBAAiB;CACjB;;;;gDAI+C;CAC/C;;AAED;CACC,YAAY;CACZ,iBAAiB;CACjB;;AAED;CACC,iBAAiB;CACjB;;AAED;CACC,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB,mBAAmB;CACnB,SAAS;CACT,QAAQ;CACR;;AAED;CACC,gBAAgB;CAChB;;AAED;CACC,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;CACnB;;AAED;;CAEC,qCAAqC;CACrC;;AAED;CACC,qCAAqC;CACrC;;AAED;;CAEC,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;CACtB,gBAAgB;CAChB;;AAED;CACC,2BAA2B;CAC3B;;AAED;CACC,oBAAoB;CACpB,eAAe;CACf,gBAAgB;CAChB,8CAA8C;CAC9C,mBAAmB;CACnB;;AAED;CACC,eAAe;CACf;;AAED;CACC,eAAe;CACf,sBAAsB;CACtB,iBAAiB;CACjB;;AAED;CACC,2BAA2B;CAC3B;;AAED;;;EAGE;AACF;CACC;;EAEC,iBAAiB;EACjB;;CAED;EACC,aAAa;EACb;;CAED;EACC,iCAAiC;EACjC,6BAAyB;MAAzB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAiB;OAAjB,iBAAiB;EACjB;CACD;;AAED;CACC;EACC,aAAa;EACb;;CAED;EACC,aAAa;EACb;CACD","file":"index.css","sourcesContent":["html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 41:
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

/***/ 42:
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

/***/ 43:
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
	
		module.exports = __webpack_require__(53);
	
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
	
		module.exports = __webpack_require__(42);
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(41);
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(50);
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(55);
	
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
	
		module.exports = __webpack_require__(52);
	
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

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(54);
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

/***/ 54:
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

/***/ 55:
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
	    t.exports = __webpack_require__(76);
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

/***/ 75:
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

/***/ 76:
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


/***/ },

/***/ 77:
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

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(77)(content, {});
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

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXRvZG9saXN0Lm1kIiwid2VicGFjazovLy8uL34vdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzcz84MjM3Iiwid2VicGFjazovLy8uL34vYXJyYXktZm9yZWFjaC9pbmRleC5qcz85NWQyIiwid2VicGFjazovLy8uL34vYXJyYXktbWFwL2luZGV4LmpzPzdiMDAiLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzPzQ4ZGMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcz85MDVmIiwid2VicGFjazovLy8uL34vaW1tdXRhYmxlLWRhdGEvbGliL2luZGV4LmpzPzQxMWYiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1hcnJheS9pbmRleC5qcz83OGU1Iiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanM/YzJjMSIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzPzI1NTAiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtcGF0aC1wYXJzZS9saWIvaW5kZXguanM/ZWM5MCIsIndlYnBhY2s6Ly8vLi9+L3Jlc2VsZWN0L2xpYi9pbmRleC5qcz9iODVhIiwid2VicGFjazovLy8uL34vdHJhdmVyc2UvaW5kZXguanM/ZDlkZiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanM/Yjk4MCIsIndlYnBhY2s6Ly8vLi9+L3RvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3M/MmYyNSoiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEtBQUksS0FBSyxDQUFMO0FBQ0osS0FBTSxPQUFPLEVBQVA7QUFDTixLQUFNLE9BQU8sQ0FBUDtBQUNOLE1BQUksSUFBSSxJQUFFLENBQUYsRUFBSSxJQUFJLElBQUosRUFBVSxHQUF0QixFQUEyQjtBQUN6QixRQUFLLElBQUwsQ0FBVTtBQUNSLFdBQU0sVUFBVSxDQUFWO0FBQ04sZ0JBQVcsS0FBWDtBQUNBLFNBQUksSUFBSjtJQUhGLEVBRHlCO0VBQTNCOztBQVFBLEtBQU0sUUFBUTtBQUNaLGFBQVU7QUFDUixXQUFNLElBQU47QUFDQSx1QkFBSSxNQUFNLEdBQUc7QUFDWCxjQUFPO0FBQ0wsZ0JBQU87QUFDTCxxQkFESztBQUVMLHNCQUFXLEtBQVg7QUFDQSxlQUFJLElBQUo7c0NBQ0ksRUFBRSxLQUFGLENBQVEsSUFBUixFQUpOO1FBREYsQ0FEVztNQUZMO0FBV1IsdUJBQUksTUFBTSxHQUFHO0FBQ1gsV0FBTSxRQUFRLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxPQUFiLENBQXFCLElBQXJCLENBQVIsQ0FESztBQUVYLGNBQU87QUFDTCxlQUFNLDJCQUFPLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYyxLQUFyQixDQUFOO1FBREYsQ0FGVztNQVhMO0FBaUJSLDZCQUFPLE1BQU0sR0FBRztBQUNkLFdBQU0sUUFBUSxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFxQixJQUFyQixDQUFSLENBRFE7QUFFZCxjQUFPO0FBQ0wsZUFBTSx3QkFBSSxFQUFFLEtBQUYsQ0FBUSxJQUFSLHNCQUNKLHNCQUFvQixDQUFDLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLFNBQXBCLENBRHJCLENBQU47UUFERixDQUZjO01BakJSO0FBeUJSLHlCQUFLLE1BQU0sTUFBTSxHQUFHO0FBQ2xCLFdBQU0sUUFBUSxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFxQixJQUFyQixDQUFSLENBRFk7QUFFbEIsY0FBTztBQUNMLGVBQU0sd0JBQUksRUFBRSxLQUFGLENBQVEsSUFBUixzQkFDSixpQkFBZSxLQURmLENBQU47UUFERixDQUZrQjtNQXpCWjs7QUFpQ1IsYUFBUSxLQUFSO0FBQ0EseUNBQWEsUUFBUTtBQUNuQixjQUFPO0FBQ0wsdUJBREs7UUFBUCxDQURtQjtNQWxDYjtBQXVDUiw2Q0FBZSxHQUFHO0FBQ2hCLGNBQU87QUFDTCxlQUFNLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxNQUFiLENBQW9CO2tCQUFRLENBQUMsS0FBSyxTQUFMO1VBQVQsQ0FBMUI7UUFERixDQURnQjtNQXZDVjtBQTRDUiw2QkFBTyxHQUFHO0FBQ1IsV0FBTSxtQkFBbUIsb0JBQW9CLEVBQUUsS0FBRixDQUF2QyxDQURFO0FBRVIsV0FBSSxxQkFBcUIsQ0FBckIsSUFBMEIsRUFBRSxLQUFGLENBQVEsSUFBUixDQUFhLE1BQWIsS0FBd0IsZ0JBQXhCLEVBQTBDO0FBQ3RFLGdCQUFPO0FBQ0wsaUJBQU0sRUFBRSxLQUFGLENBQVEsSUFBUixDQUFhLEdBQWIsQ0FBaUI7aUNBQ2xCO0FBQ0gsMEJBQVcsQ0FBQyxLQUFLLFNBQUw7O1lBRlMsQ0FBdkI7VUFERixDQURzRTtRQUF4RTtBQVFBLGNBQU87QUFDTCxlQUFNLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxHQUFiLENBQWlCO2tCQUFRLEtBQUssU0FBTCxHQUFpQixJQUFqQixnQkFDMUI7QUFDSCx3QkFBVyxJQUFYO2FBRjZCO1VBQVIsQ0FBdkI7UUFERixDQVZRO01BNUNGO0lBQVY7RUFESTs7QUFpRU4sS0FBTSxrQkFBa0IsOEJBQWUsQ0FDckM7VUFBUyxNQUFNLElBQU47RUFBVCxFQUNBO1VBQVMsTUFBTSxNQUFOO0VBQVQsQ0FGc0IsRUFHckIsVUFBQyxJQUFELEVBQU8sTUFBUCxFQUFrQjtBQUNuQixXQUFRLE1BQVI7QUFDRSxVQUFLLEtBQUw7QUFDRSxjQUFPLElBQVAsQ0FERjtBQURGLFVBR08sUUFBTDtBQUNFLGNBQU8sS0FBSyxNQUFMLENBQVk7Z0JBQVEsQ0FBQyxLQUFLLFNBQUw7UUFBVCxDQUFuQixDQURGO0FBSEYsVUFLTyxXQUFMO0FBQ0UsY0FBTyxLQUFLLE1BQUwsQ0FBWTtnQkFBUSxLQUFLLFNBQUw7UUFBUixDQUFuQixDQURGO0FBTEYsSUFEbUI7RUFBbEIsQ0FIRzs7QUFjTixLQUFNLHNCQUFzQiw4QkFBZSxDQUN6QztVQUFTLE1BQU0sSUFBTjtFQUFULENBRDBCLEVBRXpCLGdCQUFRO0FBQ1QsVUFBTyxLQUFLLE1BQUwsQ0FBWTtZQUFLLENBQUMsRUFBRSxTQUFGO0lBQU4sQ0FBWixDQUErQixNQUEvQixDQURFO0VBQVIsQ0FGRzs7QUFPTixLQUFNLFdBQVcsU0FBWCxRQUFXLE9BQWtCO09BQWYseUJBQWU7T0FDekIsU0FBK0UsU0FBL0UsT0FEeUI7T0FDakIsTUFBdUUsU0FBdkUsSUFEaUI7T0FDWixNQUFrRSxTQUFsRSxJQURZO09BQ1AsU0FBNkQsU0FBN0QsT0FETztPQUNDLE9BQXFELFNBQXJELEtBREQ7T0FDTyxlQUErQyxTQUEvQyxhQURQO09BQ3FCLGlCQUFpQyxTQUFqQyxlQURyQjtPQUNxQyxTQUFpQixTQUFqQixPQURyQztPQUM2QyxPQUFTLFNBQVQsS0FEN0M7O0FBRWpDLE9BQU0sYUFBYSxnQkFBZ0IsUUFBaEIsQ0FBYixDQUYyQjtBQUdqQyxPQUFNLFlBQVksRUFBRSxjQUFGLEVBQVUsUUFBVixFQUFlLFVBQWYsRUFBWixDQUgyQjtBQUlqQyxPQUFNLGNBQWMsRUFBRSxVQUFGLEVBQVEsY0FBUixFQUFnQiwwQkFBaEIsRUFBOEIsOEJBQTlCLEVBQWQsQ0FKMkI7QUFLakMsT0FBTSxpQkFBaUIsRUFBRSxVQUFGLEVBQVEsY0FBUixFQUFqQixDQUwyQjtBQU1qQyxVQUFPOztPQUFLLFdBQVUsU0FBVixFQUFMO0tBQ0w7O1NBQVEsV0FBVSxRQUFWLEVBQVI7T0FDRTs7OztRQURGO01BREs7S0FJTCw4QkFBQyxTQUFEO0FBQ0UsYUFBSyxVQUFMO0FBQ0EsZUFBUTtnQkFBUSxJQUFJLElBQUo7UUFBUjtNQUZWLENBSks7S0FRTDs7U0FBSyxXQUFVLE1BQVYsRUFBTDtPQUNFLDhCQUFDLFNBQUQsRUFBZSxjQUFmLENBREY7T0FFRTs7V0FBSSxXQUFVLFdBQVYsRUFBSjtTQUVJLFdBQVcsR0FBWCxDQUFlO2tCQUNiLDhCQUFDLElBQUQsYUFBTSxLQUFLLEtBQUssRUFBTCxFQUFTLE1BQU0sSUFBTixJQUFnQixVQUFwQztVQURhLENBRm5CO1FBRkY7T0FTRSw4QkFBQyxNQUFELEVBQVksV0FBWixDQVRGO01BUks7SUFBUCxDQU5pQztFQUFsQjs7S0E2Qlg7OztBQUNKLFlBREksSUFDSixDQUFZLEtBQVosRUFBbUI7MkJBRGYsTUFDZTs7d0VBRGYsaUJBRUksUUFEVzs7V0FNbkIsb0JBQW9CLFlBQU07QUFDeEIsYUFBSyxRQUFMLENBQWM7QUFDWixlQUFNLE1BQU47UUFERixFQUR3QjtNQUFOLENBTkQ7O1dBV25CLGFBQWEsZ0JBQVE7QUFDbkIsYUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLElBQWpDLEVBRG1CO0FBRW5CLGFBQUssUUFBTCxDQUFjO0FBQ1osZUFBTSxNQUFOO1FBREYsRUFGbUI7TUFBUixDQVhNOztBQUVqQixXQUFLLEtBQUwsR0FBYTtBQUNYLGFBQU0sTUFBTjtNQURGLENBRmlCOztJQUFuQjs7Z0JBREk7OzJDQWtCa0IsV0FBVyxXQUFXO0FBQzFDLGNBQU8sVUFBVSxJQUFWLEtBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsVUFBVSxJQUFWLEtBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FEdEI7Ozs7OEJBR25DO29CQUM2QixLQUFLLEtBQUwsQ0FEN0I7V0FDQyxtQkFERDtXQUNPLHVCQURQO1dBQ2UsaUJBRGY7V0FDb0IsbUJBRHBCOztBQUVQLGNBQU87O1dBQUksV0FBVywwQkFBVztBQUM3Qix3QkFBVyxLQUFLLFNBQUw7QUFDWCxzQkFBUyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE1BQXBCO1lBRlMsQ0FBWCxFQUFKO1NBTUgsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixNQUFwQixHQUVBLDhCQUFDLFNBQUQ7QUFDRSxpQkFBTSxLQUFLLElBQUw7QUFDTixpQkFBSyxXQUFMO0FBQ0EsbUJBQVEsS0FBSyxVQUFMO1VBSFYsQ0FGQSxHQVVBOzthQUFLLFdBQVUsTUFBVixFQUFMO1dBQ0U7QUFDRSx3QkFBVSxRQUFWO0FBQ0EsbUJBQUssVUFBTDtBQUNBLHNCQUFTLEtBQUssU0FBTDtBQUNULHVCQUFVO3NCQUFNLE9BQU8sSUFBUDtjQUFOLEVBSlosQ0FERjtXQU1FOztlQUFPLGVBQWUsS0FBSyxpQkFBTCxFQUF0QjthQUNHLEtBQUssSUFBTDtZQVBMO1dBU0UsMENBQVEsV0FBVSxTQUFWLEVBQW9CLFNBQVM7c0JBQU0sSUFBSSxJQUFKO2NBQU4sRUFBckMsQ0FURjtVQVZBO1FBTkosQ0FGTzs7OztVQXJCTDs7O0tBMkRBOzs7QUFDSixZQURJLFNBQ0osQ0FBWSxLQUFaLEVBQW1COzJCQURmLFdBQ2U7O3lFQURmLHNCQUVJLFFBRFc7O1lBU25CLGVBQWUsYUFBSztBQUNsQixjQUFLLFFBQUwsQ0FBYztBQUNaLGVBQU0sRUFBRSxNQUFGLENBQVMsS0FBVDtRQURSLEVBRGtCO01BQUwsQ0FUSTs7WUFjbkIsZUFBZSxhQUFLO0FBQ2xCLFNBQUUsY0FBRixHQURrQjtBQUVsQixXQUFNLE9BQU8sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUZLO0FBR2xCLFdBQUksQ0FBQyxJQUFELEVBQU07QUFDUixnQkFEUTtRQUFWO0FBR0EsY0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixJQUFsQixFQU5rQjtBQU9sQixXQUFJLE9BQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBcEIsRUFBZ0M7QUFDbEMsZ0JBQUssUUFBTCxDQUFjO0FBQ1osaUJBQU0sRUFBTjtVQURGLEVBRGtDO1FBQXBDO01BUGEsQ0FkSTs7WUEyQm5CLGFBQWEsYUFBSztBQUNoQixXQUFJLE9BQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsV0FBcEIsRUFBaUM7QUFDbkMsYUFBTSxPQUFPLE9BQUssS0FBTCxDQUFXLElBQVgsQ0FEc0I7QUFFbkMsZ0JBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsSUFBbEIsRUFGbUM7UUFBckM7TUFEVyxDQTNCTTs7QUFFakIsWUFBSyxLQUFMLEdBQWE7QUFDWCxhQUFNLE1BQU0sTUFBTSxJQUFOO01BRGQsQ0FGaUI7O0lBQW5COztnQkFESTs7MkNBT2tCLFdBQVcsV0FBVztBQUMxQyxjQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFWLENBRGU7Ozs7OEJBMkJuQztBQUNQLGNBQU87O1dBQU0sVUFBVSxLQUFLLFlBQUwsRUFBaEI7U0FDTCx5Q0FBTyxNQUFLLE1BQUw7QUFDTCxzQkFBVywwQkFBVztBQUNwQix5QkFBWSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFVBQXBCO0FBQ1oscUJBQVEsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixXQUFwQjtZQUZDLENBQVg7QUFJQSxzQkFBVSxNQUFWO0FBQ0Esd0JBQVksd0JBQVo7QUFDQSxrQkFBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ1AscUJBQVUsS0FBSyxZQUFMO0FBQ1YsbUJBQVEsS0FBSyxVQUFMO1VBVFYsQ0FESztRQUFQLENBRE87Ozs7VUFsQ0w7OztLQW9EQTs7Ozs7Ozs7Ozs7OEJBQ0s7cUJBQ2dELEtBQUssS0FBTCxDQURoRDtXQUNDLG9CQUREO1dBQ08sd0JBRFA7V0FDZSxvQ0FEZjtXQUM2Qix3Q0FEN0I7O0FBRVAsV0FBTSxjQUFjLG9CQUFvQixFQUFFLFVBQUYsRUFBcEIsQ0FBZCxDQUZDO0FBR1AsV0FBTSxpQkFBaUIsS0FBSyxNQUFMLEdBQWMsV0FBZCxDQUhoQjtBQUlQLGNBQU87O1dBQVEsV0FBVSxRQUFWLEVBQVI7U0FDTDs7YUFBTSxXQUFVLFlBQVYsRUFBTjtXQUNFOzs7YUFBUyxlQUFlLElBQWY7WUFEWDtXQUVHLEdBRkg7V0FHRyxnQkFBZ0IsQ0FBaEIsR0FBb0IsTUFBcEIsR0FBNkIsT0FBN0I7a0JBSEg7VUFESztTQU1MOzthQUFJLFdBQVUsU0FBVixFQUFKO1dBQ0csQ0FBRSxLQUFGLEVBQVMsUUFBVCxFQUFtQixXQUFuQixFQUFpQyxHQUFqQyxDQUFxQztvQkFDcEM7O2lCQUFJLEtBQUssSUFBTCxFQUFKO2VBQ0U7O21CQUFHLFdBQVcsMEJBQVcsRUFBRSxVQUFVLFNBQVMsTUFBVCxFQUF2QixDQUFYO0FBQ0QsMEJBQU8sRUFBRSxRQUFRLFNBQVIsRUFBVDtBQUNBLDRCQUFTOzRCQUFNLGFBQWEsSUFBYjtvQkFBTjtrQkFGWDtpQkFJRyxJQUpIO2dCQURGOztZQURvQyxDQUR4QztVQU5LO1NBbUJILGlCQUFpQixDQUFqQixJQUVBOzthQUFRLFdBQVUsaUJBQVY7QUFDTixzQkFBUztzQkFBTTtjQUFOLEVBRFg7O1VBRkE7UUFuQkosQ0FKTzs7OztVQURMOzs7QUFvQ04sS0FBTSxZQUFZLFNBQVosU0FBWSxRQUFzQjtPQUFuQixrQkFBbUI7T0FBYixzQkFBYTs7QUFDdEMsT0FBTSxpQkFBaUIsS0FBSyxNQUFMLEdBQWMsb0JBQW9CLEVBQUUsVUFBRixFQUFwQixDQUFkLENBRGU7QUFFdEMsVUFBTyxLQUFLLE1BQUwsR0FBYyxDQUFkLEdBQWtCO0FBQ3ZCLGdCQUFVLFlBQVY7QUFDQSxXQUFLLFVBQUw7QUFDQSxjQUFTLG1CQUFtQixLQUFLLE1BQUw7QUFDNUIsZUFBVTtjQUFNO01BQU47SUFKYSxDQUFsQixHQUtGLDJDQUxFLENBRitCO0VBQXRCOztBQVlsQixvQkFBUyxNQUFULENBQWdCOztLQUFLLE9BQU8sS0FBUCxFQUFMO0dBQ2QsOEJBQUMsUUFBRCxPQURjO0VBQWhCLEVBR0EsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBSEEsRTs7Ozs7OztBQ3RTQTtBQUNBOzs7QUFHQTtBQUNBLHdDQUF1QyxjQUFjLGVBQWUsR0FBRyxZQUFZLGNBQWMsZUFBZSxjQUFjLHFCQUFxQixvQkFBb0IsNkJBQTZCLHlCQUF5Qix5QkFBeUIsbUJBQW1CLDZCQUE2QiwwQkFBMEIsMEJBQTBCLHdDQUF3Qyx1Q0FBdUMsR0FBRyxVQUFVLDhEQUE4RCx1QkFBdUIsd0JBQXdCLG1CQUFtQixxQkFBcUIscUJBQXFCLG1CQUFtQix3Q0FBd0MsdUNBQXVDLHFCQUFxQixHQUFHLHVDQUF1QyxrQkFBa0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLGNBQWMscUJBQXFCLDJCQUEyQix1QkFBdUIsZ0dBQWdHLEdBQUcsK0NBQStDLHVCQUF1QixxQkFBcUIsbUJBQW1CLEdBQUcsc0NBQXNDLHVCQUF1QixxQkFBcUIsbUJBQW1CLEdBQUcsdUNBQXVDLHVCQUF1QixxQkFBcUIsbUJBQW1CLEdBQUcsaUJBQWlCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLHFCQUFxQixxQkFBcUIsdUJBQXVCLG1DQUFtQywrQ0FBK0MsNENBQTRDLHVDQUF1QyxHQUFHLHVCQUF1Qix1QkFBdUIsY0FBYyxnQkFBZ0Isb0JBQW9CLHlCQUF5Qix5QkFBeUIsdUJBQXVCLGNBQWMsa0JBQWtCLG1CQUFtQixpQkFBaUIsMkJBQTJCLHNEQUFzRCwyQkFBMkIsd0NBQXdDLHVDQUF1QyxHQUFHLGVBQWUsaUNBQWlDLGlCQUFpQixxQ0FBcUMsa0RBQWtELEdBQUcsV0FBVyx1QkFBdUIsZUFBZSxrQ0FBa0MsR0FBRyw2QkFBNkIsa0JBQWtCLEdBQUcsaUJBQWlCLHVCQUF1QixlQUFlLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsdUJBQXVCLHdCQUF3QixzQkFBc0Isb0JBQW9CLG1CQUFtQixpQ0FBaUMsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsZ0JBQWdCLGNBQWMsZUFBZSxxQkFBcUIsR0FBRyxtQkFBbUIsdUJBQXVCLG9CQUFvQixxQ0FBcUMsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixlQUFlLEdBQUcsaUNBQWlDLG1CQUFtQixpQkFBaUIsaUNBQWlDLHVCQUF1QixHQUFHLGlDQUFpQyxrQkFBa0IsR0FBRywyQkFBMkIsdUJBQXVCLGdCQUFnQix3RkFBd0YsdUJBQXVCLFdBQVcsY0FBYyxtQkFBbUIsaUJBQWlCLGlEQUFpRCwwQkFBMEIsMEJBQTBCLEdBQUcsaUNBQWlDLHFDQUFxQyx5TUFBeU0sR0FBRyx5Q0FBeUMscUNBQXFDLDRRQUE0USxHQUFHLHlCQUF5QiwwQkFBMEIsMEJBQTBCLGlDQUFpQyxzQkFBc0IsbUJBQW1CLHFCQUFxQixtQ0FBbUMsMkJBQTJCLEdBQUcsbUNBQW1DLG1CQUFtQixrQ0FBa0MsR0FBRyw0QkFBNEIsa0JBQWtCLHVCQUF1QixXQUFXLGdCQUFnQixjQUFjLGdCQUFnQixpQkFBaUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsd0JBQXdCLDRDQUE0QyxvQ0FBb0MsR0FBRyxrQ0FBa0MsbUJBQW1CLEdBQUcsa0NBQWtDLG9CQUFvQixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLGFBQWEsZ0JBQWdCLHVCQUF1QixpQkFBaUIsdUJBQXVCLGtDQUFrQyxHQUFHLG9CQUFvQixnQkFBZ0IsdUJBQXVCLGFBQWEsY0FBYyxZQUFZLGlCQUFpQixxQkFBcUIsNk5BQTZOLEdBQUcsaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsY0FBYyxjQUFjLGVBQWUscUJBQXFCLHVCQUF1QixhQUFhLFlBQVksR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsbUJBQW1CLG1CQUFtQixnQkFBZ0IscUJBQXFCLDBCQUEwQixrQ0FBa0MsdUJBQXVCLEdBQUcsa0RBQWtELHlDQUF5QyxHQUFHLDRCQUE0Qix5Q0FBeUMsR0FBRyxxREFBcUQsaUJBQWlCLHVCQUF1QixzQkFBc0IsMEJBQTBCLG9CQUFvQixHQUFHLDRCQUE0QiwrQkFBK0IsR0FBRyxXQUFXLHdCQUF3QixtQkFBbUIsb0JBQW9CLGtEQUFrRCx1QkFBdUIsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGFBQWEsbUJBQW1CLDBCQUEwQixxQkFBcUIsR0FBRyxtQkFBbUIsK0JBQStCLEdBQUcsb0xBQW9MLDJDQUEyQyx1QkFBdUIsS0FBSyw2QkFBNkIsbUJBQW1CLEtBQUssbUJBQW1CLHVDQUF1QyxtQ0FBbUMsbUNBQW1DLCtCQUErQiw0QkFBNEIsNEJBQTRCLEtBQUssR0FBRywrQkFBK0IsYUFBYSxtQkFBbUIsS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssR0FBRyxVQUFVLGlHQUFpRyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksdUJBQXVCLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLHNCQUFzQixhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcs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O0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SEFBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0QsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDclBBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFIiwiZmlsZSI6ImV4YW1wbGVzL2V4YW1wbGUtdG9kb2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBzZXQsIHJlbW92ZSB9IGZyb20gJ2ltbXV0YWJsZS1kYXRhJztcbmltcG9ydCAndG9kb212Yy1hcHAtY3NzL2luZGV4LmNzcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBSY2YgZnJvbSAnaW5kZXguanMnO1xuXG5cbmxldCBJRCA9IDA7XG5jb25zdCBMSVNUID0gW107XG5jb25zdCBTSVpFID0gNTtcbmZvcihsZXQgaT0wO2kgPCBTSVpFOyBpKyspIHtcbiAgTElTVC5wdXNoKHtcbiAgICB0ZXh0OiAndGFzayAnICsgaSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGlkOiBJRCsrLFxuICB9KTtcbn1cblxuY29uc3Qgc3RvcmUgPSB7XG4gIHRvZG9saXN0OiB7IFxuICAgIGxpc3Q6IExJU1QsXG4gICAgYWRkKHRleHQsIGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlkOiBJRCsrLFxuICAgICAgICB9LCAuLi5lLnN0b3JlLmxpc3RdLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGRlbCh0b2RvLCBlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGUuc3RvcmUubGlzdC5pbmRleE9mKHRvZG8pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdDogcmVtb3ZlKGUuc3RvcmUubGlzdCwgaW5kZXgpLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGNoYW5nZSh0b2RvLCBlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGUuc3RvcmUubGlzdC5pbmRleE9mKHRvZG8pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdDogc2V0KGUuc3RvcmUubGlzdCwge1xuICAgICAgICAgIFtgJHtpbmRleH0uY29tcGxldGVkYF06ICFlLnN0b3JlLmxpc3RbaW5kZXhdLmNvbXBsZXRlZCxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH0sXG4gICAgZWRpdCh0b2RvLCB0ZXh0LCBlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGUuc3RvcmUubGlzdC5pbmRleE9mKHRvZG8pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdDogc2V0KGUuc3RvcmUubGlzdCwge1xuICAgICAgICAgIFtgJHtpbmRleH0udGV4dGBdOiB0ZXh0LFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBmaWx0ZXI6ICdhbGwnLFxuICAgIGNoYW5nZUZpbHRlcihmaWx0ZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbHRlcixcbiAgICAgIH07XG4gICAgfSxcbiAgICBjbGVhckNvbXBsZXRlZChlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiBlLnN0b3JlLmxpc3QuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uY29tcGxldGVkKSxcbiAgICAgIH07XG4gICAgfSxcbiAgICB0b2dnbGUoZSkge1xuICAgICAgY29uc3QgYWN0aXZlVG9kb3NDb3VudCA9IGdldEFjdGl2ZVRvZG9zQ291bnQoZS5zdG9yZSk7XG4gICAgICBpZiAoYWN0aXZlVG9kb3NDb3VudCA9PT0gMCB8fCBlLnN0b3JlLmxpc3QubGVuZ3RoID09PSBhY3RpdmVUb2Rvc0NvdW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGlzdDogZS5zdG9yZS5saXN0Lm1hcCh0b2RvID0+ICh7XG4gICAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgICAgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdDogZS5zdG9yZS5saXN0Lm1hcCh0b2RvID0+IHRvZG8uY29tcGxldGVkID8gdG9kbyA6IHtcbiAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbn07XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9IGNyZWF0ZVNlbGVjdG9yKFtcbiAgc3RvcmUgPT4gc3RvcmUubGlzdCxcbiAgc3RvcmUgPT4gc3RvcmUuZmlsdGVyLFxuXSwgKGxpc3QsIGZpbHRlcikgPT4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgJ2FsbCc6XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgcmV0dXJuIGxpc3QuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKTtcbiAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgcmV0dXJuIGxpc3QuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpO1xuICB9XG59KTtcblxuY29uc3QgZ2V0QWN0aXZlVG9kb3NDb3VudCA9IGNyZWF0ZVNlbGVjdG9yKFtcbiAgc3RvcmUgPT4gc3RvcmUubGlzdCxcbl0sIGxpc3QgPT4ge1xuICByZXR1cm4gbGlzdC5maWx0ZXIodCA9PiAhdC5jb21wbGV0ZWQpLmxlbmd0aDtcbn0pO1xuXG5cbmNvbnN0IFRvZG9MaXN0ID0gKHsgdG9kb2xpc3QgfSkgPT4ge1xuICBjb25zdCB7IGNoYW5nZSwgZGVsLCBhZGQsIGZpbHRlciwgbGlzdCwgY2hhbmdlRmlsdGVyLCBjbGVhckNvbXBsZXRlZCwgdG9nZ2xlLCBlZGl0IH0gPSB0b2RvbGlzdDtcbiAgY29uc3QgZmlsdGVyTGlzdCA9IGdldFZpc2libGVUb2Rvcyh0b2RvbGlzdCk7XG4gIGNvbnN0IHRvZG9Qcm9wcyA9IHsgY2hhbmdlLCBkZWwsIGVkaXQgfTtcbiAgY29uc3QgZm9vdGVyUHJvcHMgPSB7IGxpc3QsIGZpbHRlciwgY2hhbmdlRmlsdGVyLCBjbGVhckNvbXBsZXRlZCB9O1xuICBjb25zdCB0b2dnbGVBbGxQcm9wcyA9IHsgbGlzdCwgdG9nZ2xlIH07XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRvZG9hcHBcIj5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICA8L2hlYWRlcj5cbiAgICA8VG9kb0lucHV0XG4gICAgICB0eXBlPSduZXctdG9kbydcbiAgICAgIG9uU2F2ZT17dGV4dCA9PiBhZGQodGV4dCl9XG4gICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8VG9nZ2xlQWxsIHsuLi50b2dnbGVBbGxQcm9wc30gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlckxpc3QubWFwKHRvZG8gPT5cbiAgICAgICAgICAgIDxUb2RvIGtleT17dG9kby5pZH0gdG9kbz17dG9kb30gey4uLnRvZG9Qcm9wc30gLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8Rm9vdGVyIHsuLi5mb290ZXJQcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufTtcblxuXG5jbGFzcyBUb2RvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH07XG4gIH1cbiAgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgdHlwZTogJ2VkaXQnLFxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVNhdmUgPSB0ZXh0ID0+IHtcbiAgICB0aGlzLnByb3BzLmVkaXQodGhpcy5wcm9wcy50b2RvLCB0ZXh0KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB9KTtcbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gbmV4dFByb3BzLnRvZG8gIT09IHRoaXMucHJvcHMudG9kbyB8fCBuZXh0U3RhdGUudHlwZSAhPT0gdGhpcy5zdGF0ZS50eXBlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvZG8sIGNoYW5nZSwgZGVsLCBlZGl0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCxcbiAgICAgICAgZWRpdGluZzogdGhpcy5zdGF0ZS50eXBlID09PSAnZWRpdCcsXG4gICAgICB9KX0+XG5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS50eXBlID09PSAnZWRpdCcgP1xuXG4gICAgICAgIDxUb2RvSW5wdXRcbiAgICAgICAgICB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgdHlwZT1cImVkaXQtdG9kb1wiXG4gICAgICAgICAgb25TYXZlPXt0aGlzLmhhbmRsZVNhdmV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgOlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9nZ2xlXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBjaGFuZ2UodG9kbyl9IC8+XG4gICAgICAgICAgPGxhYmVsIG9uRG91YmxlQ2xpY2s9e3RoaXMuaGFuZGxlRG91YmxlQ2xpY2t9PlxuICAgICAgICAgICAge3RvZG8udGV4dH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzdHJveVwiIG9uQ2xpY2s9eygpID0+IGRlbCh0b2RvKX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIH1cblxuICAgIDwvbGk+O1xuICB9XG5cbn1cblxuXG5jbGFzcyBUb2RvSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dDogJycgfHwgcHJvcHMudGV4dCxcbiAgICB9O1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRleHQgIT09IG5leHRTdGF0ZS50ZXh0O1xuICB9XG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGV4dDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuc3RhdGUudGV4dDtcbiAgICBpZiAoIXRleHQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uU2F2ZSh0ZXh0KTtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnbmV3LXRvZG8nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGV4dDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQmx1ciA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdlZGl0LXRvZG8nKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdGF0ZS50ZXh0O1xuICAgICAgdGhpcy5wcm9wcy5vblNhdmUodGV4dCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgJ25ldy10b2RvJzogdGhpcy5wcm9wcy50eXBlID09PSAnbmV3LXRvZG8nLFxuICAgICAgICAgICdlZGl0JzogdGhpcy5wcm9wcy50eXBlID09PSAnZWRpdC10b2RvJyxcbiAgICAgICAgfSl9XG4gICAgICAgIGF1dG9Gb2N1cz1cInRydWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgLz5cbiAgICA8L2Zvcm0+O1xuICB9XG59XG5cblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgZmlsdGVyLCBjaGFuZ2VGaWx0ZXIsIGNsZWFyQ29tcGxldGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gZ2V0QWN0aXZlVG9kb3NDb3VudCh7IGxpc3QgfSk7XG4gICAgY29uc3QgY29tcGxldGVkQ291bnQgPSBsaXN0Lmxlbmd0aCAtIGFjdGl2ZUNvdW50O1xuICAgIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9kby1jb3VudFwiPlxuICAgICAgICA8c3Ryb25nPnthY3RpdmVDb3VudCB8fCAnTm8nfTwvc3Ryb25nPlxuICAgICAgICB7JyAnfVxuICAgICAgICB7YWN0aXZlQ291bnQgPT09IDEgPyAnaXRlbScgOiAnaXRlbXMnfSBsZWZ0XG4gICAgICA8L3NwYW4+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICB7WyAnYWxsJywgJ2FjdGl2ZScsICdjb21wbGV0ZWQnIF0ubWFwKGl0ZW0gPT5cbiAgICAgICAgICA8bGkga2V5PXtpdGVtfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IHNlbGVjdGVkOiBpdGVtID09PSBmaWx0ZXIgfSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUZpbHRlcihpdGVtKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgICB7XG4gICAgICAgIGNvbXBsZXRlZENvdW50ID4gMCBcbiAgICAgICAgJiZcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbGVhci1jb21wbGV0ZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsZWFyQ29tcGxldGVkKCl9ID5cbiAgICAgICAgICBDbGVhciBjb21wbGV0ZWRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICB9XG4gICAgPC9mb290ZXI+O1xuICB9XG59XG5cblxuY29uc3QgVG9nZ2xlQWxsID0gKHsgbGlzdCwgdG9nZ2xlIH0pID0+IHtcbiAgY29uc3QgY29tcGxldGVkQ291bnQgPSBsaXN0Lmxlbmd0aCAtIGdldEFjdGl2ZVRvZG9zQ291bnQoeyBsaXN0IH0pO1xuICByZXR1cm4gbGlzdC5sZW5ndGggPiAwID8gPGlucHV0XG4gICAgY2xhc3NOYW1lPVwidG9nZ2xlLWFsbFwiXG4gICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICBjaGVja2VkPXtjb21wbGV0ZWRDb3VudCA9PT0gbGlzdC5sZW5ndGh9XG4gICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZSgpfVxuICAvPiA6IDxzcGFuIC8+O1xufVxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgPFRvZG9MaXN0IC8+XG48L1JjZj4sXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2V4YW1wbGUtdG9kb2xpc3QubWRcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHRsaW5lLWhlaWdodDogMS40ZW07XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRjb2xvcjogIzRkNGQ0ZDtcXG5cXHRtaW4td2lkdGg6IDIzMHB4O1xcblxcdG1heC13aWR0aDogNTUwcHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9hcHAge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0bWFyZ2luOiAxMzBweCAwIDQwcHggMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcblxcdCAgICAgICAgICAgIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLnRvZG9hcHAgaDEge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC0xNTVweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDEwMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcXG5cXHQtd2Via2l0LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuXFx0LW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcblxcdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxufVxcblxcbi5uZXctdG9kbyxcXG4uZWRpdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbjogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNGVtO1xcblxcdGJvcmRlcjogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHBhZGRpbmc6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcblxcdHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDYwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAxcHggcmdiYSgwLDAsMCwwLjAzKTtcXG59XFxuXFxuLm1haW4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAyO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbn1cXG5cXG5sYWJlbFtmb3I9J3RvZ2dsZS1hbGwnXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1hbGwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC01NXB4O1xcblxcdGxlZnQ6IC0xMnB4O1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogMzRweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXFxufVxcblxcbi50b2dnbGUtYWxsOmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFwyNzZGJztcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxuXFx0cGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcXG59XFxuXFxuLnRvZ2dsZS1hbGw6Y2hlY2tlZDpiZWZvcmUge1xcblxcdGNvbG9yOiAjNzM3MzczO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiA1MDZweDtcXG5cXHRwYWRkaW5nOiAxM3B4IDE3cHggMTJweCAxN3B4O1xcblxcdG1hcmdpbjogMCAwIDAgNDNweDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHQvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdG1hcmdpbjogYXV0byAwO1xcblxcdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGU6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiLTEwIC0xOCAxMDAgMTM1XFxcIj48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjZWRlZGVkXFxcIiBzdHJva2Utd2lkdGg9XFxcIjNcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmNoZWNrZWQ6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiLTEwIC0xOCAxMDAgMTM1XFxcIj48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjYmRkYWQ1XFxcIiBzdHJva2Utd2lkdGg9XFxcIjNcXFwiLz48cGF0aCBmaWxsPVxcXCIjNWRjMmFmXFxcIiBkPVxcXCJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnpcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XFxuXFx0d2hpdGUtc3BhY2U6IHByZS1saW5lO1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG5cXHRwYWRkaW5nOiAxNXB4IDYwcHggMTVweCAxNXB4O1xcblxcdG1hcmdpbi1sZWZ0OiA0NXB4O1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuY29tcGxldGVkIGxhYmVsIHtcXG5cXHRjb2xvcjogI2Q5ZDlkOTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdGJvdHRvbTogMDtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0bWFyZ2luOiBhdXRvIDA7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGNvbG9yOiAjY2M5YTlhO1xcblxcdG1hcmdpbi1ib3R0b206IDExcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xcblxcdGNvbG9yOiAjYWY1YjVlO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnXFxcXEQ3JztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaTpob3ZlciAuZGVzdHJveSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmVkaXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZzpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG5cXHRjb2xvcjogIzc3NztcXG5cXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG59XFxuXFxuLmZvb3RlcjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcblxcdCAgICAgICAgICAgIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxcblxcdCAgICAgICAgICAgIDAgOXB4IDFweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG5cXHQgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXFxuXFx0ICAgICAgICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnRvZG8tY291bnQge1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50b2RvLWNvdW50IHN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmZpbHRlcnMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi5maWx0ZXJzIGxpIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdG1hcmdpbjogM3B4O1xcblxcdHBhZGRpbmc6IDNweCA3cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYS5zZWxlY3RlZCxcXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4yKTtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZCxcXG5odG1sIC5jbGVhci1jb21wbGV0ZWQ6YWN0aXZlIHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW5mbyB7XFxuXFx0bWFyZ2luOiA2NXB4IGF1dG8gMDtcXG5cXHRjb2xvcjogI2JmYmZiZjtcXG5cXHRmb250LXNpemU6IDEwcHg7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gcCB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5pbmZvIGEge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaW5mbyBhOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLypcXG5cXHRIYWNrIHRvIHJlbW92ZSBiYWNrZ3JvdW5kIGZyb20gTW9iaWxlIFNhZmFyaS5cXG5cXHRDYW4ndCB1c2UgaXQgZ2xvYmFsbHkgc2luY2UgaXQgZGVzdHJveXMgY2hlY2tib3hlcyBpbiBGaXJlZm94XFxuKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcXG5cXHQudG9nZ2xlLWFsbCxcXG5cXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0fVxcblxcblxcdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdH1cXG5cXG5cXHQudG9nZ2xlLWFsbCB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXHRcXHQgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcblxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0ICAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuXFx0LmZvb3RlciB7XFxuXFx0XFx0aGVpZ2h0OiA1MHB4O1xcblxcdH1cXG5cXG5cXHQuZmlsdGVycyB7XFxuXFx0XFx0Ym90dG9tOiAxMHB4O1xcblxcdH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL25vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDLFVBQVU7Q0FDVixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsc0JBQWlCO01BQWpCLGlCQUFpQjtDQUNqQixvQ0FBb0M7Q0FDcEMsbUNBQW1DO0NBQ25DOztBQUVEO0NBQ0MsMERBQTBEO0NBQzFELG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLG9DQUFvQztDQUNwQyxtQ0FBbUM7Q0FDbkMsaUJBQWlCO0NBQ2pCOztBQUVEOztDQUVDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25COzhDQUM2QztDQUM3Qzs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLCtCQUErQjtDQUMvQiwyQ0FBMkM7Q0FDM0Msd0NBQXdDO0NBQ3hDLG1DQUFtQztDQUNuQzs7QUFFRDs7Q0FFQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrREFBa0Q7Q0FDbEQsdUJBQXVCO0NBQ3ZCLG9DQUFvQztDQUNwQyxtQ0FBbUM7Q0FDbkM7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0IsYUFBYTtDQUNiLGlDQUFpQztDQUNqQyw4Q0FBOEM7Q0FDOUM7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGFBQWEsQ0FBQyxtQkFBbUI7Q0FDakM7O0FBRUQ7Q0FDQyxpQkFBYTtDQUNiLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsNkJBQTZCO0NBQzdCOztBQUVEO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGlDQUFpQztDQUNqQzs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLG1FQUFtRTtDQUNuRSxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxVQUFVO0NBQ1YsZUFBZTtDQUNmLGFBQWEsQ0FBQyxtQkFBbUI7Q0FDakMseUJBQXlCO0NBQ3pCLHNCQUFpQjtNQUFqQixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxzTkFBc047Q0FDdE47O0FBRUQ7Q0FDQyxxUkFBcVI7Q0FDclI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiwrQkFBdUI7Q0FBdkIsdUJBQXVCO0NBQ3ZCOztBQUVEO0NBQ0MsZUFBZTtDQUNmLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsT0FBTztDQUNQLFlBQVk7Q0FDWixVQUFVO0NBQ1YsWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsd0NBQWdDO0NBQWhDLGdDQUFnQztDQUNoQzs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLGVBQWE7Q0FDYjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsUUFBUTtDQUNSLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakI7Ozs7Z0RBSStDO0NBQy9DOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsUUFBUTtDQUNSOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkI7O0FBRUQ7O0NBRUMscUNBQXFDO0NBQ3JDOztBQUVEO0NBQ0MscUNBQXFDO0NBQ3JDOztBQUVEOztDQUVDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0I7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQiw4Q0FBOEM7Q0FDOUMsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0MsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0I7O0FBRUQ7OztFQUdFO0FBQ0Y7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakI7O0NBRUQ7RUFDQyxhQUFhO0VBQ2I7O0NBRUQ7RUFDQyxpQ0FBaUM7RUFDakMsNkJBQXlCO01BQXpCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsc0JBQWlCO09BQWpCLGlCQUFpQjtFQUNqQjtDQUNEOztBQUVEO0NBQ0M7RUFDQyxhQUFhO0VBQ2I7O0NBRUQ7RUFDQyxhQUFhO0VBQ2I7Q0FDRFwiLFwiZmlsZVwiOlwiaW5kZXguY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250OiAxNHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNGVtO1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0Y29sb3I6ICM0ZDRkNGQ7XFxuXFx0bWluLXdpZHRoOiAyMzBweDtcXG5cXHRtYXgtd2lkdGg6IDU1MHB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvYXBwIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdG1hcmdpbjogMTMwcHggMCA0MHB4IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcXG5cXHQgICAgICAgICAgICAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Y29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi50b2RvYXBwIGgxIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAtMTU1cHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAxMDBweDtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XFxuXFx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcblxcdC1tb3otdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG5cXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLmVkaXQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG5cXHRib3JkZXI6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG5cXHRwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA2MHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwwLDAsMC4wMyk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG59XFxuXFxubGFiZWxbZm9yPSd0b2dnbGUtYWxsJ10ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtYWxsIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAtNTVweDtcXG5cXHRsZWZ0OiAtMTJweDtcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDM0cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xcbn1cXG5cXG4udG9nZ2xlLWFsbDpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICfina8nO1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRjb2xvcjogI2U2ZTZlNjtcXG5cXHRwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xcbn1cXG5cXG4udG9nZ2xlLWFsbDpjaGVja2VkOmJlZm9yZSB7XFxuXFx0Y29sb3I6ICM3MzczNzM7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGk6bGFzdC1jaGlsZCB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIHtcXG5cXHRib3JkZXItYm90dG9tOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyAuZWRpdCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0d2lkdGg6IDUwNnB4O1xcblxcdHBhZGRpbmc6IDEzcHggMTdweCAxMnB4IDE3cHg7XFxuXFx0bWFyZ2luOiAwIDAgMCA0M3B4O1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLnZpZXcge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdC8qIGF1dG8sIHNpbmNlIG5vbi1XZWJLaXQgYnJvd3NlcnMgZG9lc24ndCBzdXBwb3J0IGlucHV0IHN0eWxpbmcgKi9cXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0bWFyZ2luOiBhdXRvIDA7XFxuXFx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTphZnRlciB7XFxuXFx0Y29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB2aWV3Qm94PVxcXCItMTAgLTE4IDEwMCAxMzVcXFwiPjxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjUwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiNlZGVkZWRcXFwiIHN0cm9rZS13aWR0aD1cXFwiM1xcXCIvPjwvc3ZnPicpO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGU6Y2hlY2tlZDphZnRlciB7XFxuXFx0Y29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB2aWV3Qm94PVxcXCItMTAgLTE4IDEwMCAxMzVcXFwiPjxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjUwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiNiZGRhZDVcXFwiIHN0cm9rZS13aWR0aD1cXFwiM1xcXCIvPjxwYXRoIGZpbGw9XFxcIiM1ZGMyYWZcXFwiIGQ9XFxcIk03MiAyNUw0MiA3MSAyNyA1NmwtNCA0IDIwIDIwIDM0LTUyelxcXCIvPjwvc3ZnPicpO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIGxhYmVsIHtcXG5cXHR3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuXFx0d29yZC1icmVhazogYnJlYWstYWxsO1xcblxcdHBhZGRpbmc6IDE1cHggNjBweCAxNXB4IDE1cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDQ1cHg7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjtcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmNvbXBsZXRlZCBsYWJlbCB7XFxuXFx0Y29sb3I6ICNkOWQ5ZDk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMTBweDtcXG5cXHRib3R0b206IDA7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdG1hcmdpbjogYXV0byAwO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRjb2xvcjogI2NjOWE5YTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xcblxcdGNvbG9yOiAjYWY1YjVlO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnw5cnO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZWRpdCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nOmxhc3QtY2hpbGQge1xcblxcdG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcblxcbi5mb290ZXIge1xcblxcdGNvbG9yOiAjNzc3O1xcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbn1cXG5cXG4uZm9vdGVyOmJlZm9yZSB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogNTBweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuXFx0ICAgICAgICAgICAgMCA4cHggMCAtM3B4ICNmNmY2ZjYsXFxuXFx0ICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcblxcdCAgICAgICAgICAgIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcXG5cXHQgICAgICAgICAgICAwIDE3cHggMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udG9kby1jb3VudCB7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRvZG8tY291bnQgc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uZmlsdGVycyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0bGVmdDogMDtcXG59XFxuXFxuLmZpbHRlcnMgbGkge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYSB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0bWFyZ2luOiAzcHg7XFxuXFx0cGFkZGluZzogM3B4IDdweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkLFxcbi5maWx0ZXJzIGxpIGE6aG92ZXIge1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xKTtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYS5zZWxlY3RlZCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjIpO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkLFxcbmh0bWwgLmNsZWFyLWNvbXBsZXRlZDphY3RpdmUge1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5pbmZvIHtcXG5cXHRtYXJnaW46IDY1cHggYXV0byAwO1xcblxcdGNvbG9yOiAjYmZiZmJmO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5mbyBwIHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmluZm8gYSB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5pbmZvIGE6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKlxcblxcdEhhY2sgdG8gcmVtb3ZlIGJhY2tncm91bmQgZnJvbSBNb2JpbGUgU2FmYXJpLlxcblxcdENhbid0IHVzZSBpdCBnbG9iYWxseSBzaW5jZSBpdCBkZXN0cm95cyBjaGVja2JveGVzIGluIEZpcmVmb3hcXG4qL1xcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkge1xcblxcdC50b2dnbGUtYWxsLFxcblxcdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG5cXHRcXHRoZWlnaHQ6IDQwcHg7XFxuXFx0fVxcblxcblxcdC50b2dnbGUtYWxsIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuXFx0XFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcXG5cXHQuZm9vdGVyIHtcXG5cXHRcXHRoZWlnaHQ6IDUwcHg7XFxuXFx0fVxcblxcblxcdC5maWx0ZXJzIHtcXG5cXHRcXHRib3R0b206IDEwcHg7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJi1yZXN0cnVjdHVyaW5nIS4vfi9wb3N0Y3NzLWxvYWRlciEuL34vdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8qKlxuICogYXJyYXktZm9yZWFjaFxuICogICBBcnJheSNmb3JFYWNoIHBvbnlmaWxsIGZvciBvbGRlciBicm93c2Vyc1xuICogICAoUG9ueWZpbGw6IEEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG92ZXJ3cml0ZSB0aGUgbmF0aXZlIG1ldGhvZClcbiAqIFxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3YWRhL2FycmF5LWZvcmVhY2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAxNiBUYWt1dG8gV2FkYVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogICBodHRwczovL2dpdGh1Yi5jb20vdHdhZGEvYXJyYXktZm9yZWFjaC9ibG9iL21hc3Rlci9NSVQtTElDRU5TRVxuICovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9yRWFjaCAoYXJ5LCBjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGlmIChhcnkuZm9yRWFjaCkge1xuICAgICAgICBhcnkuZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyBpKz0xKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgYXJ5W2ldLCBpLCBhcnkpO1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hcnJheS1mb3JlYWNoL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeHMsIGYpIHtcbiAgICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0geHNbaV07XG4gICAgICAgIGlmIChoYXNPd24uY2FsbCh4cywgaSkpIHJlcy5wdXNoKGYoeCwgaSwgeHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXJyYXktbWFwL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLnNldCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7O1xuXHRleHBvcnRzLm1lcmdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0ZXhwb3J0cy5yZW1vdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LWtleXNcIik7XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBhc3NpZ24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHR2YXIgZm9yRWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdHZhciBtYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzIHx8IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0Ly8gbm9kZSBzdHJ1Y3R1cmUge2tleSwgdmFsdWUsIGRhdGEsIHBhcmVudE5vZGV9XG5cblx0dmFyIE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gTm9kZShfcmVmKSB7XG5cdCAgICB2YXIga2V5ID0gX3JlZi5rZXk7XG5cdCAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuXHQgICAgdmFyIGRhdGEgPSBfcmVmLmRhdGE7XG5cdCAgICB2YXIgcGFyZW50Tm9kZSA9IF9yZWYucGFyZW50Tm9kZTtcblxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdCAgICB0aGlzLmtleSA9IGtleTtcblx0ICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0ICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cdCAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuXHQgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuXHQgIH1cblxuXHQgIF9jcmVhdGVDbGFzcyhOb2RlLCBbe1xuXHQgICAga2V5OiAnc2V0Q2hpbGQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldENoaWxkKGtleSwgY2hpbGQpIHtcblx0ICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gY2hpbGQ7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZ2V0Q2hpbGQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkKGtleSkge1xuXHQgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuXHQgICAgfVxuXHQgIH1dKTtcblxuXHQgIHJldHVybiBOb2RlO1xuXHR9KCk7XG5cblx0Ly8gQXNzaWduIGRhdGEgd2l0aCBhcnJheToge2tleSwgdmFsdWUsIHR5cGU9J3NldCd9XG5cdC8vIGRhdGEgOiBhcnJheSA9PiByZXBsYWNlIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBpbmRleChvYmoua2V5KVxuXHQvLyAgICAgICAgb2JqZWN0ID0+IGFzc2lnbiBvYmplY3Rcblx0Ly8gXG5cdC8vIGVnOm9iajE6e2tleToxLHZhbHVlfSxvYmoyOntrZXk6Myx2YWx1ZX1cblx0Ly9cblx0Ly8gYXJyYXk6XG5cdC8vIFswLCAxLCAgICAgICAgICAyLCAzLCAgICAgICAgICA0XSA9PlxuXHQvLyBbMCwgb2JqMS52YWx1ZSwgMiwgb2JqMi52YWx1ZSwgNF1cblx0Ly9cblx0Ly8gb2JqZWN0OlxuXHQvLyB7XG5cdC8vICAgXCIxXCI6MSxcblx0Ly8gICBcIjNcIjozXG5cdC8vIH0gPT5cblx0Ly8ge1xuXHQvLyAgIFwiMVwiOm9iajEudmFsdWUsXG5cdC8vICAgXCIzXCI6b2JqMi52YWx1ZVxuXHQvLyB9XG5cblxuXHRmdW5jdGlvbiBhc3NpZ25EYXRhKG5vZGUsIGFycmF5KSB7XG5cdCAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyAnc2V0JyA6IGFyZ3VtZW50c1syXTtcblxuXHQgIHZhciBkYXRhID0gbm9kZS5kYXRhO1xuXHQgIGlmICh0eXBlID09PSAncmVtb3ZlJyAmJiBub2RlLnNlY29uZE5vZGUpIHtcblx0ICAgIGlmIChpc0FycmF5KGRhdGEpKSB7XG5cdCAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdCgpO1xuXHQgICAgICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAob2JqLCBpbmRleCkge1xuXHQgICAgICAgIC8vIHNwbGljZSAxIGl0ZW0gYW5kIGluZGV4IC0gMVxuXHQgICAgICAgIGRhdGEuc3BsaWNlKG9iai5rZXkgLSBpbmRleCwgMSk7XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXR1cm4gZGF0YTtcblx0ICAgIH1cblx0ICAgIGRhdGEgPSBhc3NpZ24oe30sIGRhdGEpO1xuXHQgICAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICBpZiAob2JqLmtleSBpbiBkYXRhKSB7XG5cdCAgICAgICAgZGVsZXRlIGRhdGFbb2JqLmtleV07XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXG5cdCAgaWYgKGlzQXJyYXkoZGF0YSkpIHtcblx0ICAgIGRhdGEgPSBkYXRhLmNvbmNhdCgpO1xuXHQgICAgZm9yRWFjaChhcnJheSwgZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICBkYXRhW29iai5rZXldID0gb2JqLnZhbHVlO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gZGF0YTtcblx0ICB9XG5cdCAgdmFyIGFzc2lnbk9iamVjdCA9IHt9O1xuXHQgIGZvckVhY2goYXJyYXksIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgIGFzc2lnbk9iamVjdFtvYmoua2V5XSA9IG9iai52YWx1ZTtcblx0ICB9KTtcblx0ICByZXR1cm4gYXNzaWduKHt9LCBkYXRhLCBhc3NpZ25PYmplY3QpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdHJlZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGhhbmRsZSBtdWx0aXBsZSBkYXRhXG5cdC8vIEBwYXJhbSBkYXRhIChPYmplY3Qgb3IgQXJyYXkpXG5cdC8vIEBwYXJhbSBhcnJheSAoQXJyYXkgb2YgU3RydWN0dXJlIHtwYXRoLCBkYXRhfSlcblx0Ly9cblx0Ly8gZWc6W3twYXRoOltcImFcIixcImJcIl0sZGF0YToxfSx7cGF0aDpbXCJhXCIsXCJjXCJdLGRhdGE6Mn1dID0+XG5cdC8vICAgYVxuXHQvLyAgLyBcXFxuXHQvLyBiICAgY1xuXHQvLyB8ICAgfFxuXHQvLyAxICAgMlxuXHRmdW5jdGlvbiBjcmVhdGVUcmVlKGRhdGEsIGFycmF5KSB7XG5cdCAgdmFyIHRyZWUgPSBuZXcgTm9kZSh7XG5cdCAgICBkYXRhOiBkYXRhXG5cdCAgfSk7XG5cblx0ICBmb3JFYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgdmFyIHBvaW50ZXIgPSB0cmVlO1xuXHQgICAgdmFyIGRhdGFQb2ludGVyID0gZGF0YTtcblxuXHQgICAgdmFyIGxlbiA9IGl0ZW0ucGF0aC5sZW5ndGg7XG5cblx0ICAgIGZvckVhY2goaXRlbS5wYXRoLCBmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xuXG5cdCAgICAgIHZhciBjaGlsZCA9IHBvaW50ZXIuZ2V0Q2hpbGQoa2V5KSB8fCBuZXcgTm9kZSh7XG5cdCAgICAgICAgLy8gbm9kZSBuYW1lXG5cdCAgICAgICAga2V5OiBrZXksXG5cdCAgICAgICAgLy8gbGVhZiBub2RlIHZhbHVlXG5cdCAgICAgICAgdmFsdWU6IGxlbiA9PT0gaW5kZXggKyAxID8gaXRlbS5kYXRhIDogbnVsbCxcblx0ICAgICAgICAvLyByZWFsIGRhdGFcblx0ICAgICAgICBkYXRhOiBkYXRhUG9pbnRlcltrZXldLFxuXHQgICAgICAgIC8vIHBhcmVudCBub2RlXG5cdCAgICAgICAgcGFyZW50Tm9kZTogcG9pbnRlclxuXHQgICAgICB9KTtcblxuXHQgICAgICBkYXRhUG9pbnRlciA9IGRhdGFQb2ludGVyW2tleV07XG5cdCAgICAgIHBvaW50ZXIuc2V0Q2hpbGQoa2V5LCBjaGlsZCk7XG5cdCAgICAgIHBvaW50ZXIgPSBjaGlsZDtcblx0ICAgIH0pO1xuXHQgIH0pO1xuXHQgIHJldHVybiB0cmVlO1xuXHR9XG5cblx0Ly8gUmVjdXJzaXZlIGFjY2VzcyBub2RlIGFuZCBnZXQgdGhlIGFzc2lnbkRhdGEsXG5cdC8vIGFuZCB0aGVuIHJldHVybiB0aGUgcm9vdCBub2RlIHZhbHVlXG5cdGZ1bmN0aW9uIGdldE5vZGVWYWx1ZShub2RlLCB0eXBlKSB7XG5cdCAgdmFyIGFycmF5ID0ga2V5cyhub2RlLmNoaWxkcmVuKTtcblxuXHQgIC8vIEp1c3QgZ2V0IHRoZSBsZWFmIG5vZGUgdmFsdWUsXG5cdCAgLy8gaWYgYSBub2RlIGlzIG5vdCBhIGxlYWYgbm9kZSBhbmQgaXRzIHZhbHVlIGlzIG5vdCB1bmRlZmluZWQsXG5cdCAgLy8gdGhlbiB0aGUgdmFsdWUgaXMgaWdub3JlZC5cblx0ICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG5cdCAgICAvLyBNYXJrIHRoZSBwYXJlbnQgbm9kZSBpcyB0aGUgc2Vjb25kIGxhc3Qgbm9kZSxcblx0ICAgIC8vIHNvIGl0IGlzIGNvbnZlbmllbnQgdG8ga25vdyBpbiB3aGljaCBub2RlIGNhbiByZW1vdmUgYXR0cmlidXRlc1xuXHQgICAgbm9kZS5wYXJlbnROb2RlLnNlY29uZE5vZGUgPSB0cnVlO1xuXHQgICAgcmV0dXJuIG5vZGUudmFsdWU7XG5cdCAgfVxuXG5cdCAgdmFyIGFzc2lnbkFycmF5ID0gbWFwKGFycmF5LCBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2tleV07XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBrZXk6IGNoaWxkLmtleSxcblx0ICAgICAgdmFsdWU6IGdldE5vZGVWYWx1ZShjaGlsZCwgdHlwZSlcblx0ICAgIH07XG5cdCAgfSk7XG5cblx0ICByZXR1cm4gYXNzaWduRGF0YShub2RlLCBhc3NpZ25BcnJheSwgdHlwZSk7XG5cdH1cblxuXHRleHBvcnRzLmNyZWF0ZVRyZWUgPSBjcmVhdGVUcmVlO1xuXHRleHBvcnRzLmdldE5vZGVWYWx1ZSA9IGdldE5vZGVWYWx1ZTtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFycmF5LW1hcFwiKTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFycmF5LWZvcmVhY2hcIik7XG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcy1hcnJheVwiKTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdC1wYXRoLXBhcnNlXCIpO1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5cdHZhciBpc1BsYWluT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdHZhciBmb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIGNyZWF0ZVRyZWUgPSBfcmVxdWlyZS5jcmVhdGVUcmVlO1xuXHR2YXIgZ2V0Tm9kZVZhbHVlID0gX3JlcXVpcmUuZ2V0Tm9kZVZhbHVlO1xuXG5cdC8vIEdldCB0aGUgdHJlZSBwYXRoIGFycmF5XG5cdC8vIHJldHVybiBBcnJheSBvZiBTdHJ1Y3R1cmUoe3BhdGg6IEFycmF5IG9mIFN0cmluZywgZGF0YTogbm9kZSB2YWx1ZX0pXG5cdC8vXG5cdC8vIGVnOlxuXHQvLyB2YWx1ZTpcblx0Ly8gICBhXG5cdC8vICAvIFxcXG5cdC8vIGIgICBjXG5cdC8vIHwgICB8XG5cdC8vIDEgICAyXG5cdC8vIHJldHVybjpcblx0Ly8gW3twYXRoOltcImFcIixcImJcIl0sIGRhdGE6MX0sIHtwYXRoOltcImFcIixcImNcIl0sIGRhdGE6Mn1dXG5cdC8vXG5cdC8vIElmIHRoZSBkYXRhIGlzIG5vdCBhIHBsYWluIG9iamVjdCwgYXNzaWduIGl0IHRvIHRoZSBlbGVtZW50LFxuXHQvL1xuXHQvLyBlZzpcblx0Ly8gbWVyZ2Uoe2xpc3Q6WzEsMl19LCB7bGlzdDpbMF19KSA9PiB7bGlzdDpbMF19XG5cdC8vIG1lcmdlKHtsaXN0OlsxLDJdfSwge2xpc3Q6e1wiMFwiOjB9fSkgPT4ge2xpc3Q6WzAsMl19XG5cblx0ZnVuY3Rpb24gZ2V0T2JqZWN0UGF0aCh2YWx1ZSkge1xuXHQgIHZhciBsaXN0ID0gW107XG5cdCAgZnVuY3Rpb24gdHJhdmVyc2UoZGF0YSkge1xuXHQgICAgdmFyIHBhdGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgaWYgKGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcblx0ICAgICAgZm9yRWFjaChrZXlzKGRhdGEpLCBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgICAgdHJhdmVyc2UoZGF0YVtrZXldLCBwYXRoLmNvbmNhdChrZXkpKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGxpc3QucHVzaCh7XG5cdCAgICAgIHBhdGg6IHBhdGgsXG5cdCAgICAgIGRhdGE6IGRhdGFcblx0ICAgIH0pO1xuXHQgIH1cblx0ICB0cmF2ZXJzZSh2YWx1ZSk7XG5cdCAgcmV0dXJuIGxpc3Q7XG5cdH1cblxuXHQvLyBkZWVwIG1lcmdlIGRhdGFcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZShkYXRhLCBvYmopIHtcblx0ICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgIT09ICdvYmplY3QnKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgc2hvdWxkIGJlIE9iamVjdCBvciBBcnJheScpO1xuXHQgIH1cblx0ICBpZiAoIW9iaikge1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXHQgIHZhciBhcnJheSA9IGdldE9iamVjdFBhdGgob2JqKTtcblx0ICB2YXIgdHJlZSA9IGNyZWF0ZVRyZWUoZGF0YSwgYXJyYXkpO1xuXHQgIHZhciB2YWx1ZSA9IGdldE5vZGVWYWx1ZSh0cmVlKTtcblx0ICByZXR1cm4gdmFsdWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cblx0dmFyIHBhcnNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0dmFyIG1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0dmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIGNyZWF0ZVRyZWUgPSBfcmVxdWlyZS5jcmVhdGVUcmVlO1xuXHR2YXIgZ2V0Tm9kZVZhbHVlID0gX3JlcXVpcmUuZ2V0Tm9kZVZhbHVlO1xuXG5cdC8vIHJlbW92ZShkYXRhLCBTdHJpbmcgb3IgQXJyYXkpXG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW1vdmUoZGF0YSkge1xuXHQgIHZhciBhcnJheSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzFdO1xuXG5cdCAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpICE9PSAnb2JqZWN0Jykge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhIHNob3VsZCBiZSBPYmplY3Qgb3IgQXJyYXknKTtcblx0ICB9XG5cblx0ICBpZiAoIWlzQXJyYXkoYXJyYXkpKSB7XG5cdCAgICBhcnJheSA9IFthcnJheV07XG5cdCAgfVxuXG5cdCAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXG5cdCAgYXJyYXkgPSBtYXAoYXJyYXksIGZ1bmN0aW9uIChwYXRoKSB7XG5cdCAgICBwYXRoID0gU3RyaW5nKHBhdGgpO1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLy8gSnVzdCB1c2Ugc3BsaXQgaWYgdGhlcmUgaXMgbm8gJ1snIGluIHBhdGhcblx0ICAgICAgLy8gZWc6IG9ialtcImxpc3RcIl0gPT4gcGFyc2UsIG9iai5saXN0ID0+IHNwbGl0XG5cdCAgICAgIHBhdGg6IHBhdGguaW5kZXhPZignWycpID4gLTEgPyBwYXJzZShwYXRoKSA6IHBhdGguc3BsaXQoJy4nKSxcblx0ICAgICAgZGF0YTogbnVsbFxuXHQgICAgfTtcblx0ICB9KTtcblxuXHQgIHZhciB0cmVlID0gY3JlYXRlVHJlZShkYXRhLCBhcnJheSk7XG5cdCAgdmFyIHZhbHVlID0gZ2V0Tm9kZVZhbHVlKHRyZWUsICdyZW1vdmUnKTtcblx0ICByZXR1cm4gdmFsdWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cblx0dmFyIHBhcnNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0dmFyIG1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBjcmVhdGVUcmVlID0gX3JlcXVpcmUuY3JlYXRlVHJlZTtcblx0dmFyIGdldE5vZGVWYWx1ZSA9IF9yZXF1aXJlLmdldE5vZGVWYWx1ZTtcblxuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0KGRhdGEpIHtcblx0ICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgIT09ICdvYmplY3QnKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgc2hvdWxkIGJlIE9iamVjdCBvciBBcnJheScpO1xuXHQgIH1cblx0ICB2YXIgYXJyYXkgPSBrZXlzKG9iaik7XG5cdCAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuIGRhdGE7XG5cdCAgfVxuXHQgIGFycmF5ID0gbWFwKGFycmF5LCBmdW5jdGlvbiAocGF0aCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLy8gSnVzdCB1c2Ugc3BsaXQgaWYgdGhlcmUgaXMgbm8gJ1snIGluIHBhdGhcblx0ICAgICAgLy8gZWc6IG9ialtcImxpc3RcIl0gPT4gcGFyc2UsIG9iai5saXN0ID0+IHNwbGl0XG5cdCAgICAgIHBhdGg6IHBhdGguaW5kZXhPZignWycpID4gLTEgPyBwYXJzZShwYXRoKSA6IHBhdGguc3BsaXQoJy4nKSxcblx0ICAgICAgZGF0YTogb2JqW3BhdGhdXG5cdCAgICB9O1xuXHQgIH0pO1xuXHQgIHZhciB0cmVlID0gY3JlYXRlVHJlZShkYXRhLCBhcnJheSk7XG5cdCAgdmFyIHZhbHVlID0gZ2V0Tm9kZVZhbHVlKHRyZWUpO1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcy1wbGFpbi1vYmplY3RcIik7XG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW1tdXRhYmxlLWRhdGEvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiXG4vKipcbiAqIGlzQXJyYXlcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogdG9TdHJpbmdcbiAqL1xuXG52YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYHZhbGBcbiAqIGlzIGFuIGFycmF5LlxuICpcbiAqIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGlzQXJyYXkoW10pO1xuICogICAgICAgIC8vID4gdHJ1ZVxuICogICAgICAgIGlzQXJyYXkoYXJndW1lbnRzKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKiAgICAgICAgaXNBcnJheSgnJyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7bWl4ZWR9IHZhbFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gISEgdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT0gc3RyLmNhbGwodmFsKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pcy1hcnJheS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLy8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG52YXIgaGFzRG9udEVudW1CdWcgPSAhKHsgdG9TdHJpbmc6IG51bGwgfSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG52YXIgaGFzUHJvdG9FbnVtQnVnID0gZnVuY3Rpb24gKCkge30ucHJvcGVydHlJc0VudW1lcmFibGUoJ3Byb3RvdHlwZScpO1xudmFyIGRvbnRFbnVtcyA9IFtcblx0J3RvU3RyaW5nJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCdjb25zdHJ1Y3Rvcidcbl07XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xufTtcbnZhciBibGFja2xpc3RlZEtleXMgPSB7XG5cdCRjb25zb2xlOiB0cnVlLFxuXHQkZnJhbWU6IHRydWUsXG5cdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdCRmcmFtZXM6IHRydWUsXG5cdCRwYXJlbnQ6IHRydWUsXG5cdCRzZWxmOiB0cnVlLFxuXHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdCR3aW5kb3c6IHRydWVcbn07XG52YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghYmxhY2tsaXN0ZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0oKSk7XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdHZhciB0aGVLZXlzID0gW107XG5cblx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoZUtleXM7XG59O1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHRyZXR1cm4gKE9iamVjdC5rZXlzKGFyZ3VtZW50cykgfHwgJycpLmxlbmd0aCA9PT0gMjtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdHZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmdzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3MpIHtcblx0XHRpc0FyZ3MgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHRcdHRvU3RyLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmdzO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gbihpKSB7XG4gICAgICAgIGlmIChlW2ldKSByZXR1cm4gZVtpXS5leHBvcnRzO1xuICAgICAgICB2YXIgciA9IGVbaV0gPSB7XG4gICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgIGlkOiBpLFxuICAgICAgICAgICAgbG9hZGVkOiAhMVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdFtpXS5jYWxsKHIuZXhwb3J0cywgciwgci5leHBvcnRzLCBuKSwgci5sb2FkZWQgPSAhMCwgci5leHBvcnRzO1xuICAgIH1cbiAgICB2YXIgZSA9IHt9O1xuICAgIHJldHVybiBuLm0gPSB0LCBuLmMgPSBlLCBuLnAgPSBcIlwiLCBuKDApO1xufShbIGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBpKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5fX2VzTW9kdWxlID8gdCA6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB0XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHIodCkge1xuICAgICAgICByZXR1cm4gKDAsIG9bXCJkZWZhdWx0XCJdKShoW1wiZGVmYXVsdFwiXS5wYXJzZSh0KSkucmVkdWNlKGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzTGVhZiAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBuICYmIHQucHVzaChuKSwgdDtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgfSksIG5bXCJkZWZhdWx0XCJdID0gcjtcbiAgICB2YXIgcyA9IGUoMSksIG8gPSBpKHMpLCBsID0gZSgyKSwgaCA9IGkobCk7XG4gICAgdC5leHBvcnRzID0gbltcImRlZmF1bHRcIl07XG59LCBmdW5jdGlvbih0LCBuKSB7XG4gICAgdC5leHBvcnRzID0gcmVxdWlyZShcInRyYXZlcnNlXCIpO1xufSwgZnVuY3Rpb24odCwgbiwgZSkge1xuICAgIChmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMueXkgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuID0gWyAxLCAzIF0sIGUgPSBbIDEsIDQgXSwgaSA9IFsgMiwgNiBdLCByID0gWyAxLCA3IF0sIHMgPSBbIDEsIDggXSwgbyA9IHtcbiAgICAgICAgICAgICAgICB0cmFjZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICB5eToge30sXG4gICAgICAgICAgICAgICAgc3ltYm9sc186IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IDIsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zOiAzLFxuICAgICAgICAgICAgICAgICAgICBlOiA0LFxuICAgICAgICAgICAgICAgICAgICBFT0Y6IDUsXG4gICAgICAgICAgICAgICAgICAgIFBST1BFUlRZOiA2LFxuICAgICAgICAgICAgICAgICAgICBwOiA3LFxuICAgICAgICAgICAgICAgICAgICBOVU1CRVI6IDgsXG4gICAgICAgICAgICAgICAgICAgIFwiLlwiOiA5LFxuICAgICAgICAgICAgICAgICAgICBcIltcIjogMTAsXG4gICAgICAgICAgICAgICAgICAgIHQ6IDExLFxuICAgICAgICAgICAgICAgICAgICBcIl1cIjogMTIsXG4gICAgICAgICAgICAgICAgICAgIFNUUklORzogMTMsXG4gICAgICAgICAgICAgICAgICAgICRhY2NlcHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICRlbmQ6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRlcm1pbmFsc186IHtcbiAgICAgICAgICAgICAgICAgICAgMjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICA1OiBcIkVPRlwiLFxuICAgICAgICAgICAgICAgICAgICA2OiBcIlBST1BFUlRZXCIsXG4gICAgICAgICAgICAgICAgICAgIDg6IFwiTlVNQkVSXCIsXG4gICAgICAgICAgICAgICAgICAgIDk6IFwiLlwiLFxuICAgICAgICAgICAgICAgICAgICAxMDogXCJbXCIsXG4gICAgICAgICAgICAgICAgICAgIDEyOiBcIl1cIixcbiAgICAgICAgICAgICAgICAgICAgMTM6IFwiU1RSSU5HXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25zXzogWyAwLCBbIDMsIDIgXSwgWyA0LCAyIF0sIFsgNCwgMiBdLCBbIDcsIDIgXSwgWyA3LCA0IF0sIFsgNywgMCBdLCBbIDExLCAxIF0sIFsgMTEsIDEgXSBdLFxuICAgICAgICAgICAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uKHQsIG4sIGUsIGksIHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzW2wgLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcDogc1tsIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZTogc1tsXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IHNbbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwOiBzW2wgLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBzW2xdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBzW2xdLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gc1tsXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFibGU6IFsge1xuICAgICAgICAgICAgICAgICAgICAzOiAxLFxuICAgICAgICAgICAgICAgICAgICA0OiAyLFxuICAgICAgICAgICAgICAgICAgICA2OiBuLFxuICAgICAgICAgICAgICAgICAgICA4OiBlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxOiBbIDMgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAxLCA1IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IGksXG4gICAgICAgICAgICAgICAgICAgIDc6IDYsXG4gICAgICAgICAgICAgICAgICAgIDk6IHIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBzXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBpLFxuICAgICAgICAgICAgICAgICAgICA3OiA5LFxuICAgICAgICAgICAgICAgICAgICA5OiByLFxuICAgICAgICAgICAgICAgICAgICAxMDogc1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgMTogWyAyLCAxIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgMiBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgNjogbixcbiAgICAgICAgICAgICAgICAgICAgODogZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgODogWyAxLCAxMyBdLFxuICAgICAgICAgICAgICAgICAgICAxMTogMTEsXG4gICAgICAgICAgICAgICAgICAgIDEzOiBbIDEsIDEyIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IFsgMiwgMyBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICA1OiBbIDIsIDQgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgMTI6IFsgMSwgMTQgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgMTI6IFsgMiwgNyBdXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAxMjogWyAyLCA4IF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIDU6IGksXG4gICAgICAgICAgICAgICAgICAgIDc6IDE1LFxuICAgICAgICAgICAgICAgICAgICA5OiByLFxuICAgICAgICAgICAgICAgICAgICAxMDogc1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCA1IF1cbiAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgNTogWyAyLCAxIF0sXG4gICAgICAgICAgICAgICAgICAgIDY6IFsgMiwgMiBdLFxuICAgICAgICAgICAgICAgICAgICA5OiBbIDIsIDMgXSxcbiAgICAgICAgICAgICAgICAgICAgMTA6IFsgMiwgNCBdLFxuICAgICAgICAgICAgICAgICAgICAxMjogWyAyLCA3IF0sXG4gICAgICAgICAgICAgICAgICAgIDEzOiBbIDIsIDggXSxcbiAgICAgICAgICAgICAgICAgICAgMTU6IFsgMiwgNSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbi5yZWNvdmVyYWJsZSkgdGhyb3cgbmV3IEVycm9yKHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWNlKHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPSBwLmxleCgpIHx8IHksIFwibnVtYmVyXCIgIT0gdHlwZW9mIHQgJiYgKHQgPSBlLnN5bWJvbHNfW3RdIHx8IHQpLCB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywgaSA9IFsgMCBdLCByID0gWyBudWxsIF0sIHMgPSBbXSwgbyA9IHRoaXMudGFibGUsIGwgPSBcIlwiLCBoID0gMCwgYyA9IDAsIGEgPSAwLCB1ID0gMiwgeSA9IDEsIGYgPSBzLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgcCA9IE9iamVjdC5jcmVhdGUodGhpcy5sZXhlciksIGcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5eToge31cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiB0aGlzLnl5KSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy55eSwgbSkgJiYgKGcueXlbbV0gPSB0aGlzLnl5W21dKTtcbiAgICAgICAgICAgICAgICAgICAgcC5zZXRJbnB1dCh0LCBnLnl5KSwgZy55eS5sZXhlciA9IHAsIGcueXkucGFyc2VyID0gdGhpcywgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgcC55eWxsb2MgJiYgKHAueXlsbG9jID0ge30pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IHAueXlsbG9jO1xuICAgICAgICAgICAgICAgICAgICBzLnB1c2goXyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gcC5vcHRpb25zICYmIHAub3B0aW9ucy5yYW5nZXM7XG4gICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZy55eS5wYXJzZUVycm9yID8gdGhpcy5wYXJzZUVycm9yID0gZy55eS5wYXJzZUVycm9yIDogdGhpcy5wYXJzZUVycm9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYsIGIsIGssIHgsIHcsIEUsIFMsIEEsIEksIFAgPSB7fTsgOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsgPSBpW2kubGVuZ3RoIC0gMV0sIHRoaXMuZGVmYXVsdEFjdGlvbnNba10gPyB4ID0gdGhpcy5kZWZhdWx0QWN0aW9uc1trXSA6ICgobnVsbCA9PT0gdiB8fCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiB2KSAmJiAodiA9IG4oKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IG9ba10gJiYgb1trXVt2XSksIFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHggfHwgIXgubGVuZ3RoIHx8ICF4WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKEUgaW4gb1trXSkgdGhpcy50ZXJtaW5hbHNfW0VdICYmIEUgPiB1ICYmIEkucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1tFXSArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkID0gcC5zaG93UG9zaXRpb24gPyBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoaCArIDEpICsgXCI6XFxuXCIgKyBwLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBJLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1t2XSB8fCB2KSArIFwiJ1wiIDogXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKGggKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHYgPT0geSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bdl0gfHwgdikgKyBcIidcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcigkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHAubWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bdl0gfHwgdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTogcC55eWxpbmVubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiBfLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhbMF0gaW5zdGFuY2VvZiBBcnJheSAmJiB4Lmxlbmd0aCA+IDEpIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIGsgKyBcIiwgdG9rZW46IFwiICsgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHhbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaCh2KSwgci5wdXNoKHAueXl0ZXh0KSwgcy5wdXNoKHAueXlsbG9jKSwgaS5wdXNoKHhbMV0pLCB2ID0gbnVsbCwgYiA/ICh2ID0gYiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IG51bGwpIDogKGMgPSBwLnl5bGVuZywgbCA9IHAueXl0ZXh0LCBoID0gcC55eWxpbmVubywgXyA9IHAueXlsbG9jLCBhID4gMCAmJiBhLS0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUyA9IHRoaXMucHJvZHVjdGlvbnNfW3hbMV1dWzFdLCBQLiQgPSByW3IubGVuZ3RoIC0gU10sIFAuXyQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHNbcy5sZW5ndGggLSAoUyB8fCAxKV0uZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiBzW3MubGVuZ3RoIC0gMV0ubGFzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHNbcy5sZW5ndGggLSAoUyB8fCAxKV0uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogc1tzLmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZCAmJiAoUC5fJC5yYW5nZSA9IFsgc1tzLmxlbmd0aCAtIChTIHx8IDEpXS5yYW5nZVswXSwgc1tzLmxlbmd0aCAtIDFdLnJhbmdlWzFdIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KFAsIFsgbCwgYywgaCwgZy55eSwgeFsxXSwgciwgcyBdLmNvbmNhdChmKSksIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHcpIHJldHVybiB3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgJiYgKGkgPSBpLnNsaWNlKDAsIC0xICogUyAqIDIpLCByID0gci5zbGljZSgwLCAtMSAqIFMpLCBzID0gcy5zbGljZSgwLCAtMSAqIFMpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW3hbMV1dWzBdKSwgci5wdXNoKFAuJCksIHMucHVzaChQLl8kKSwgQSA9IG9baVtpLmxlbmd0aCAtIDJdXVtpW2kubGVuZ3RoIC0gMV1dLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2goQSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0ge1xuICAgICAgICAgICAgICAgICAgICBFT0Y6IDEsXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy55eS5wYXJzZXIpIHRocm93IG5ldyBFcnJvcih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3IodCwgbik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0OiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55eSA9IG4gfHwgdGhpcy55eSB8fCB7fSwgdGhpcy5faW5wdXQgPSB0LCB0aGlzLl9tb3JlID0gdGhpcy5fYmFja3RyYWNrID0gdGhpcy5kb25lID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxpbmVubyA9IHRoaXMueXlsZW5nID0gMCwgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gXCJcIiwgdGhpcy5jb25kaXRpb25TdGFjayA9IFsgXCJJTklUSUFMXCIgXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5yYW5nZXMgJiYgKHRoaXMueXlsbG9jLnJhbmdlID0gWyAwLCAwIF0pLCB0aGlzLm9mZnNldCA9IDAsIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCArPSB0LCB0aGlzLnl5bGVuZysrLCB0aGlzLm9mZnNldCsrLCB0aGlzLm1hdGNoICs9IHQsIHRoaXMubWF0Y2hlZCArPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0Lm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuID8gKHRoaXMueXlsaW5lbm8rKywgdGhpcy55eWxsb2MubGFzdF9saW5lKyspIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKywgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucmFuZ2VzICYmIHRoaXMueXlsbG9jLnJhbmdlWzFdKyssIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdW5wdXQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5sZW5ndGgsIGUgPSB0LnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHQgKyB0aGlzLl9pbnB1dCwgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQgLT0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSksIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubGVuZ3RoIC0gMSAmJiAodGhpcy55eWxpbmVubyAtPSBlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGUgPyAoZS5sZW5ndGggPT09IGkubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBpW2kubGVuZ3RoIC0gZS5sZW5ndGhdLmxlbmd0aCAtIGVbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gblxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbIHJbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIG4gXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vcmUgPSAhMCwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyID8gKHRoaXMuX2JhY2t0cmFjayA9ICEwLCB0aGlzKSA6IHRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIiArICh0aGlzLnl5bGluZW5vICsgMSkgKyBcIi4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxcblwiICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZSh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSArIHQuc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0Lmxlbmd0aCA8IDIwICYmICh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIHQubGVuZ3RoKSksICh0LnN1YnN0cigwLCAyMCkgKyAodC5sZW5ndGggPiAyMCA/IFwiLi4uXCIgOiBcIlwiKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnBhc3RJbnB1dCgpLCBuID0gbmV3IEFycmF5KHQubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIG4gKyBcIl5cIjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGVzdF9tYXRjaDogZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUsIGksIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2t0cmFja19sZXhlciAmJiAociA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaDogdGhpcy5tYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzOiB0aGlzLm1hdGNoZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGVuZzogdGhpcy55eWxlbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW5wdXQ6IHRoaXMuX2lucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5OiB0aGlzLnl5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IHRoaXMuZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAoci55eWxsb2MucmFuZ2UgPSB0aGlzLnl5bGxvYy5yYW5nZS5zbGljZSgwKSkpLCBpID0gdFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAmJiAodGhpcy55eWxpbmVubyArPSBpLmxlbmd0aCksIHRoaXMueXlsbG9jID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGkgPyBpW2kubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gaVtpLmxlbmd0aCAtIDFdLm1hdGNoKC9cXHI/XFxuPy8pWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uICsgdFswXS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMueXl0ZXh0ICs9IHRbMF0sIHRoaXMubWF0Y2ggKz0gdFswXSwgdGhpcy5tYXRjaGVzID0gdCwgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJhbmdlcyAmJiAodGhpcy55eWxsb2MucmFuZ2UgPSBbIHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZyBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gITEsIHRoaXMuX2JhY2t0cmFjayA9ICExLCB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKHRbMF0ubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gdFswXSwgZSA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHRoaXMsIHRoaXMueXksIHRoaXMsIG4sIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lICYmIHRoaXMuX2lucHV0ICYmICh0aGlzLmRvbmUgPSAhMSksIGUpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gcikgdGhpc1tzXSA9IHJbc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0IHx8ICh0aGlzLmRvbmUgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCwgbiwgZSwgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgfHwgKHRoaXMueXl0ZXh0ID0gXCJcIiwgdGhpcy5tYXRjaCA9IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IHRoaXMuX2N1cnJlbnRSdWxlcygpLCBzID0gMDsgcyA8IHIubGVuZ3RoOyBzKyspIGlmIChlID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tyW3NdXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZSAmJiAoIW4gfHwgZVswXS5sZW5ndGggPiBuWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA9IGUsIGkgPSBzLCB0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID0gdGhpcy50ZXN0X21hdGNoKGUsIHJbc10pLCB0ICE9PSAhMSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrdHJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA/ICh0ID0gdGhpcy50ZXN0X21hdGNoKG4sIHJbaV0pLCB0ICE9PSAhMSA/IHQgOiAhMSkgOiBcIlwiID09PSB0aGlzLl9pbnB1dCA/IHRoaXMuRU9GIDogdGhpcy5wYXJzZUVycm9yKFwiTGV4aWNhbCBlcnJvciBvbiBsaW5lIFwiICsgKHRoaXMueXlsaW5lbm8gKyAxKSArIFwiLiBVbnJlY29nbml6ZWQgdGV4dC5cXG5cIiArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHRoaXMueXlsaW5lbm9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID8gdCA6IHRoaXMubGV4KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2godCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBvcFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPiAwID8gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKSA6IHRoaXMuY29uZGl0aW9uU3RhY2tbMF07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA/IHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzIDogdGhpcy5jb25kaXRpb25zLklOSVRJQUwucnVsZXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMSAtIE1hdGguYWJzKHQgfHwgMCksIHQgPj0gMCA/IHRoaXMuY29uZGl0aW9uU3RhY2tbdF0gOiBcIklOSVRJQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKHQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVN0YWNrU2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbih0LCBuLCBlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxMztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA1O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJTlZBTElEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbIC9eKD86XCIoPzpcXFxcXCJ8W15cXFwiXSkqXCJ8Jyg/OlxcXFwnfFteXFwnXSkqJykvLCAvXig/OlthLXpBLVpfXFwkXVtcXHdfXFwkXSopLywgL14oPzowfFsxLTldXFxkKikvLCAvXig/OlxcWykvLCAvXig/OlxcXSkvLCAvXig/OlxcLikvLCAvXig/OiQpLywgL14oPzouKS8gXSxcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgSU5JVElBTDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgcmV0dXJuIG8ubGV4ZXIgPSBsLCB0LnByb3RvdHlwZSA9IG8sIG8uUGFyc2VyID0gdCwgbmV3IHQoKTtcbiAgICAgICAgfSgpO1xuICAgICAgICBuLnBhcnNlciA9IHIsIG4uUGFyc2VyID0gci5QYXJzZXIsIG4ucGFyc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiByLnBhcnNlLmFwcGx5KHIsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIG4ubWFpbiA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgIGlbMV0gfHwgKGNvbnNvbGUubG9nKFwiVXNhZ2U6IFwiICsgaVswXSArIFwiIEZJTEVcIiksIHQuZXhpdCgxKSk7XG4gICAgICAgICAgICB2YXIgciA9IGUoNSkucmVhZEZpbGVTeW5jKGUoNikubm9ybWFsaXplKGlbMV0pLCBcInV0ZjhcIik7XG4gICAgICAgICAgICByZXR1cm4gbi5wYXJzZXIucGFyc2Uocik7XG4gICAgICAgIH0sIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGkgJiYgZS5jWzBdID09PSBpICYmIG4ubWFpbih0LmFyZ3Yuc2xpY2UoMSkpO1xuICAgIH0pLmNhbGwobiwgZSgzKSwgZSg0KSh0KSk7XG59LCBmdW5jdGlvbih0LCBuKSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgYyA9ICExLCBvLmxlbmd0aCA/IGggPSBvLmNvbmNhdChoKSA6IGEgPSAtMSwgaC5sZW5ndGggJiYgaSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpKCkge1xuICAgICAgICBpZiAoIWMpIHtcbiAgICAgICAgICAgIHZhciB0ID0gc2V0VGltZW91dChlKTtcbiAgICAgICAgICAgIGMgPSAhMDtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBoLmxlbmd0aDsgbjsgKSB7XG4gICAgICAgICAgICAgICAgZm9yIChvID0gaCwgaCA9IFtdOyArK2EgPCBuOyApIG8gJiYgb1thXS5ydW4oKTtcbiAgICAgICAgICAgICAgICBhID0gLTEsIG4gPSBoLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSBudWxsLCBjID0gITEsIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByKHQsIG4pIHtcbiAgICAgICAgdGhpcy5mdW4gPSB0LCB0aGlzLmFycmF5ID0gbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcygpIHt9XG4gICAgdmFyIG8sIGwgPSB0LmV4cG9ydHMgPSB7fSwgaCA9IFtdLCBjID0gITEsIGEgPSAtMTtcbiAgICBsLm5leHRUaWNrID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgbiA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgZm9yICh2YXIgZSA9IDE7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIG5bZSAtIDFdID0gYXJndW1lbnRzW2VdO1xuICAgICAgICBoLnB1c2gobmV3IHIodCwgbikpLCAxICE9PSBoLmxlbmd0aCB8fCBjIHx8IHNldFRpbWVvdXQoaSwgMCk7XG4gICAgfSwgci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xuICAgIH0sIGwudGl0bGUgPSBcImJyb3dzZXJcIiwgbC5icm93c2VyID0gITAsIGwuZW52ID0ge30sIGwuYXJndiA9IFtdLCBsLnZlcnNpb24gPSBcIlwiLCBcbiAgICBsLnZlcnNpb25zID0ge30sIGwub24gPSBzLCBsLmFkZExpc3RlbmVyID0gcywgbC5vbmNlID0gcywgbC5vZmYgPSBzLCBsLnJlbW92ZUxpc3RlbmVyID0gcywgXG4gICAgbC5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBzLCBsLmVtaXQgPSBzLCBsLmJpbmRpbmcgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH0sIGwuY3dkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIi9cIjtcbiAgICB9LCBsLmNoZGlyID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfSwgbC51bWFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xufSwgZnVuY3Rpb24odCwgbikge1xuICAgIHQuZXhwb3J0cyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQud2VicGFja1BvbHlmaWxsIHx8ICh0LmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge30sIHQucGF0aHMgPSBbXSwgdC5jaGlsZHJlbiA9IFtdLCBcbiAgICAgICAgdC53ZWJwYWNrUG9seWZpbGwgPSAxKSwgdDtcbiAgICB9O1xufSwgZnVuY3Rpb24odCwgbikge30sIGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICAoZnVuY3Rpb24odCkge1xuICAgICAgICBmdW5jdGlvbiBlKHQsIG4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwLCBpID0gdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciByID0gdFtpXTtcbiAgICAgICAgICAgICAgICBcIi5cIiA9PT0gciA/IHQuc3BsaWNlKGksIDEpIDogXCIuLlwiID09PSByID8gKHQuc3BsaWNlKGksIDEpLCBlKyspIDogZSAmJiAodC5zcGxpY2UoaSwgMSksIFxuICAgICAgICAgICAgICAgIGUtLSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobikgZm9yICg7ZS0tOyBlKSB0LnVuc2hpZnQoXCIuLlwiKTtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGkodCwgbikge1xuICAgICAgICAgICAgaWYgKHQuZmlsdGVyKSByZXR1cm4gdC5maWx0ZXIobik7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gW10sIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykgbih0W2ldLCBpLCB0KSAmJiBlLnB1c2godFtpXSk7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvLCBzID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIHIuZXhlYyh0KS5zbGljZSgxKTtcbiAgICAgICAgfTtcbiAgICAgICAgbi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gXCJcIiwgciA9ICExLCBzID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IHMgPj0gLTEgJiYgIXI7IHMtLSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gcyA+PSAwID8gYXJndW1lbnRzW3NdIDogdC5jd2QoKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgbykgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzXCIpO1xuICAgICAgICAgICAgICAgIG8gJiYgKG4gPSBvICsgXCIvXCIgKyBuLCByID0gXCIvXCIgPT09IG8uY2hhckF0KDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuID0gZShpKG4uc3BsaXQoXCIvXCIpLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhdDtcbiAgICAgICAgICAgIH0pLCAhcikuam9pbihcIi9cIiksIChyID8gXCIvXCIgOiBcIlwiKSArIG4gfHwgXCIuXCI7XG4gICAgICAgIH0sIG4ubm9ybWFsaXplID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgdmFyIHIgPSBuLmlzQWJzb2x1dGUodCksIHMgPSBcIi9cIiA9PT0gbyh0LCAtMSk7XG4gICAgICAgICAgICByZXR1cm4gdCA9IGUoaSh0LnNwbGl0KFwiL1wiKSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXQ7XG4gICAgICAgICAgICB9KSwgIXIpLmpvaW4oXCIvXCIpLCB0IHx8IHIgfHwgKHQgPSBcIi5cIiksIHQgJiYgcyAmJiAodCArPSBcIi9cIiksIChyID8gXCIvXCIgOiBcIlwiKSArIHQ7XG4gICAgICAgIH0sIG4uaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi9cIiA9PT0gdC5jaGFyQXQoMCk7XG4gICAgICAgIH0sIG4uam9pbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICAgICAgcmV0dXJuIG4ubm9ybWFsaXplKGkodCwgZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiB0KSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9KS5qb2luKFwiL1wiKSk7XG4gICAgICAgIH0sIG4ucmVsYXRpdmUgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpKHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoICYmIFwiXCIgPT09IHRbbl07IG4rKykgO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSB0Lmxlbmd0aCAtIDE7IGUgPj0gMCAmJiBcIlwiID09PSB0W2VdOyBlLS0pIDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbiA+IGUgPyBbXSA6IHQuc2xpY2UobiwgZSAtIG4gKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgPSBuLnJlc29sdmUodCkuc3Vic3RyKDEpLCBlID0gbi5yZXNvbHZlKGUpLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSBpKHQuc3BsaXQoXCIvXCIpKSwgcyA9IGkoZS5zcGxpdChcIi9cIikpLCBvID0gTWF0aC5taW4oci5sZW5ndGgsIHMubGVuZ3RoKSwgbCA9IG8sIGggPSAwOyBvID4gaDsgaCsrKSBpZiAocltoXSAhPT0gc1toXSkge1xuICAgICAgICAgICAgICAgIGwgPSBoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IFtdLCBoID0gbDsgaCA8IHIubGVuZ3RoOyBoKyspIGMucHVzaChcIi4uXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGMgPSBjLmNvbmNhdChzLnNsaWNlKGwpKSwgYy5qb2luKFwiL1wiKTtcbiAgICAgICAgfSwgbi5zZXAgPSBcIi9cIiwgbi5kZWxpbWl0ZXIgPSBcIjpcIiwgbi5kaXJuYW1lID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgdmFyIG4gPSBzKHQpLCBlID0gblswXSwgaSA9IG5bMV07XG4gICAgICAgICAgICByZXR1cm4gZSB8fCBpID8gKGkgJiYgKGkgPSBpLnN1YnN0cigwLCBpLmxlbmd0aCAtIDEpKSwgZSArIGkpIDogXCIuXCI7XG4gICAgICAgIH0sIG4uYmFzZW5hbWUgPSBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHModClbMl07XG4gICAgICAgICAgICByZXR1cm4gbiAmJiBlLnN1YnN0cigtMSAqIG4ubGVuZ3RoKSA9PT0gbiAmJiAoZSA9IGUuc3Vic3RyKDAsIGUubGVuZ3RoIC0gbi5sZW5ndGgpKSwgXG4gICAgICAgICAgICBlO1xuICAgICAgICB9LCBuLmV4dG5hbWUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICByZXR1cm4gcyh0KVszXTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG8gPSBcImJcIiA9PT0gXCJhYlwiLnN1YnN0cigtMSkgPyBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdC5zdWJzdHIobiwgZSk7XG4gICAgICAgIH0gOiBmdW5jdGlvbih0LCBuLCBlKSB7XG4gICAgICAgICAgICByZXR1cm4gMCA+IG4gJiYgKG4gPSB0Lmxlbmd0aCArIG4pLCB0LnN1YnN0cihuLCBlKTtcbiAgICAgICAgfTtcbiAgICB9KS5jYWxsKG4sIGUoMykpO1xufSBdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vYmplY3QtcGF0aC1wYXJzZS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHRNZW1vaXplID0gZGVmYXVsdE1lbW9pemU7XG5leHBvcnRzLmNyZWF0ZVNlbGVjdG9yQ3JlYXRvciA9IGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcjtcbmV4cG9ydHMuY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcjtcbmV4cG9ydHMuY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRFcXVhbGl0eUNoZWNrIDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBsYXN0QXJncyA9IG51bGw7XG4gIHZhciBsYXN0UmVzdWx0ID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEFyZ3MgIT09IG51bGwgJiYgbGFzdEFyZ3MubGVuZ3RoID09PSBhcmdzLmxlbmd0aCAmJiBhcmdzLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBlcXVhbGl0eUNoZWNrKHZhbHVlLCBsYXN0QXJnc1tpbmRleF0pO1xuICAgIH0pKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBhcmdzO1xuICAgIGxhc3RSZXN1bHQgPSBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llcyhmdW5jcykge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gQXJyYXkuaXNBcnJheShmdW5jc1swXSkgPyBmdW5jc1swXSA6IGZ1bmNzO1xuXG4gIGlmICghZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uIChkZXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSkpIHtcbiAgICB2YXIgZGVwZW5kZW5jeVR5cGVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlcDtcbiAgICB9KS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcignU2VsZWN0b3IgY3JlYXRvcnMgZXhwZWN0IGFsbCBpbnB1dC1zZWxlY3RvcnMgdG8gYmUgZnVuY3Rpb25zLCAnICsgKCdpbnN0ZWFkIHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdHlwZXM6IFsnICsgZGVwZW5kZW5jeVR5cGVzICsgJ10nKSk7XG4gIH1cblxuICByZXR1cm4gZGVwZW5kZW5jaWVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lbW9pemVPcHRpb25zID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIG1lbW9pemVPcHRpb25zW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGZ1bmNzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgdmFyIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuXG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodW5kZWZpbmVkLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmVjb21wdXRhdGlvbnMrKztcbiAgICAgIHJldHVybiByZXN1bHRGdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9XS5jb25jYXQobWVtb2l6ZU9wdGlvbnMpKTtcblxuICAgIHZhciBzZWxlY3RvciA9IGZ1bmN0aW9uIHNlbGVjdG9yKHN0YXRlLCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQgPiAyID8gX2xlbjQgLSAyIDogMCksIF9rZXk0ID0gMjsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0IC0gMl0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyYW1zID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwZW5kZW5jeSkge1xuICAgICAgICByZXR1cm4gZGVwZW5kZW5jeS5hcHBseSh1bmRlZmluZWQsIFtzdGF0ZSwgcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLnJlY29tcHV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY29tcHV0YXRpb25zO1xuICAgIH07XG4gICAgc2VsZWN0b3IucmVzZXRSZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKCkge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgdmFyIHNlbGVjdG9yQ3JlYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGNyZWF0ZVNlbGVjdG9yIDogYXJndW1lbnRzWzFdO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIGV4cGVjdHMgZmlyc3QgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0ICcgKyAoJ3doZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhICcgKyB0eXBlb2Ygc2VsZWN0b3JzKSk7XG4gIH1cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICByZXR1cm4gc2VsZWN0b3JDcmVhdG9yKG9iamVjdEtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzW2tleV07XG4gIH0pLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgdmFsdWVzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVzZWxlY3QvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwidmFyIHRyYXZlcnNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG5ldyBUcmF2ZXJzZShvYmopO1xufTtcblxuZnVuY3Rpb24gVHJhdmVyc2UgKG9iaikge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG59XG5cblRyYXZlcnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocHMpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHBzW2ldO1xuICAgICAgICBpZiAoIW5vZGUgfHwgIWhhc093blByb3BlcnR5LmNhbGwobm9kZSwga2V5KSkge1xuICAgICAgICAgICAgbm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChwcykge1xuICAgIHZhciBub2RlID0gdGhpcy52YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArKykge1xuICAgICAgICB2YXIga2V5ID0gcHNbaV07XG4gICAgICAgIGlmICghbm9kZSB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHBzLCB2YWx1ZSkge1xuICAgIHZhciBub2RlID0gdGhpcy52YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aCAtIDE7IGkgKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHBzW2ldO1xuICAgICAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwobm9kZSwga2V5KSkgbm9kZVtrZXldID0ge307XG4gICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgfVxuICAgIG5vZGVbcHNbaV1dID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuVHJhdmVyc2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChjYikge1xuICAgIHJldHVybiB3YWxrKHRoaXMudmFsdWUsIGNiLCB0cnVlKTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgdGhpcy52YWx1ZSA9IHdhbGsodGhpcy52YWx1ZSwgY2IsIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoY2IsIGluaXQpIHtcbiAgICB2YXIgc2tpcCA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDE7XG4gICAgdmFyIGFjYyA9IHNraXAgPyB0aGlzLnZhbHVlIDogaW5pdDtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUm9vdCB8fCAhc2tpcCkge1xuICAgICAgICAgICAgYWNjID0gY2IuY2FsbCh0aGlzLCBhY2MsIHgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbn07XG5cblRyYXZlcnNlLnByb3RvdHlwZS5wYXRocyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWNjID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGFjYy5wdXNoKHRoaXMucGF0aCk7IFxuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUubm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFjYyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICBhY2MucHVzaCh0aGlzLm5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59O1xuXG5UcmF2ZXJzZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudHMgPSBbXSwgbm9kZXMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gKGZ1bmN0aW9uIGNsb25lIChzcmMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50c1tpXSA9PT0gc3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgc3JjICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZHN0ID0gY29weShzcmMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJlbnRzLnB1c2goc3JjKTtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZHN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yRWFjaChvYmplY3RLZXlzKHNyYyksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGNsb25lKHNyY1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gZHN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH0pKHRoaXMudmFsdWUpO1xufTtcblxuZnVuY3Rpb24gd2FsayAocm9vdCwgY2IsIGltbXV0YWJsZSkge1xuICAgIHZhciBwYXRoID0gW107XG4gICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICB2YXIgYWxpdmUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiAoZnVuY3Rpb24gd2Fsa2VyIChub2RlXykge1xuICAgICAgICB2YXIgbm9kZSA9IGltbXV0YWJsZSA/IGNvcHkobm9kZV8pIDogbm9kZV87XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHZhciBrZWVwR29pbmcgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgbm9kZSA6IG5vZGUsXG4gICAgICAgICAgICBub2RlXyA6IG5vZGVfLFxuICAgICAgICAgICAgcGF0aCA6IFtdLmNvbmNhdChwYXRoKSxcbiAgICAgICAgICAgIHBhcmVudCA6IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHBhcmVudHMgOiBwYXJlbnRzLFxuICAgICAgICAgICAga2V5IDogcGF0aC5zbGljZSgtMSlbMF0sXG4gICAgICAgICAgICBpc1Jvb3QgOiBwYXRoLmxlbmd0aCA9PT0gMCxcbiAgICAgICAgICAgIGxldmVsIDogcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBjaXJjdWxhciA6IG51bGwsXG4gICAgICAgICAgICB1cGRhdGUgOiBmdW5jdGlvbiAoeCwgc3RvcEhlcmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmlzUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wYXJlbnQubm9kZVtzdGF0ZS5rZXldID0geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhdGUubm9kZSA9IHg7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3BIZXJlKSBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsZXRlJyA6IGZ1bmN0aW9uIChzdG9wSGVyZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5wYXJlbnQubm9kZVtzdGF0ZS5rZXldO1xuICAgICAgICAgICAgICAgIGlmIChzdG9wSGVyZSkga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24gKHN0b3BIZXJlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoc3RhdGUucGFyZW50Lm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnBhcmVudC5ub2RlLnNwbGljZShzdGF0ZS5rZXksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLnBhcmVudC5ub2RlW3N0YXRlLmtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdG9wSGVyZSkga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5cyA6IG51bGwsXG4gICAgICAgICAgICBiZWZvcmUgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMuYmVmb3JlID0gZiB9LFxuICAgICAgICAgICAgYWZ0ZXIgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMuYWZ0ZXIgPSBmIH0sXG4gICAgICAgICAgICBwcmUgOiBmdW5jdGlvbiAoZikgeyBtb2RpZmllcnMucHJlID0gZiB9LFxuICAgICAgICAgICAgcG9zdCA6IGZ1bmN0aW9uIChmKSB7IG1vZGlmaWVycy5wb3N0ID0gZiB9LFxuICAgICAgICAgICAgc3RvcCA6IGZ1bmN0aW9uICgpIHsgYWxpdmUgPSBmYWxzZSB9LFxuICAgICAgICAgICAgYmxvY2sgOiBmdW5jdGlvbiAoKSB7IGtlZXBHb2luZyA9IGZhbHNlIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGlmICghYWxpdmUpIHJldHVybiBzdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZS5ub2RlID09PSAnb2JqZWN0JyAmJiBzdGF0ZS5ub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5rZXlzIHx8IHN0YXRlLm5vZGVfICE9PSBzdGF0ZS5ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmtleXMgPSBvYmplY3RLZXlzKHN0YXRlLm5vZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTGVhZiA9IHN0YXRlLmtleXMubGVuZ3RoID09IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldLm5vZGVfID09PSBub2RlXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2lyY3VsYXIgPSBwYXJlbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xlYWYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0YXRlLmtleXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0ZS5ub3RMZWFmID0gIXN0YXRlLmlzTGVhZjtcbiAgICAgICAgICAgIHN0YXRlLm5vdFJvb3QgPSAhc3RhdGUuaXNSb290O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gdXNlIHJldHVybiB2YWx1ZXMgdG8gdXBkYXRlIGlmIGRlZmluZWRcbiAgICAgICAgdmFyIHJldCA9IGNiLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQgJiYgc3RhdGUudXBkYXRlKSBzdGF0ZS51cGRhdGUocmV0KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChtb2RpZmllcnMuYmVmb3JlKSBtb2RpZmllcnMuYmVmb3JlLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFrZWVwR29pbmcpIHJldHVybiBzdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUubm9kZSA9PSAnb2JqZWN0J1xuICAgICAgICAmJiBzdGF0ZS5ub2RlICE9PSBudWxsICYmICFzdGF0ZS5jaXJjdWxhcikge1xuICAgICAgICAgICAgcGFyZW50cy5wdXNoKHN0YXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yRWFjaChzdGF0ZS5rZXlzLCBmdW5jdGlvbiAoa2V5LCBpKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmUpIG1vZGlmaWVycy5wcmUuY2FsbChzdGF0ZSwgc3RhdGUubm9kZVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHdhbGtlcihzdGF0ZS5ub2RlW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChpbW11dGFibGUgJiYgaGFzT3duUHJvcGVydHkuY2FsbChzdGF0ZS5ub2RlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm5vZGVba2V5XSA9IGNoaWxkLm5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoaWxkLmlzTGFzdCA9IGkgPT0gc3RhdGUua2V5cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGNoaWxkLmlzRmlyc3QgPSBpID09IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wb3N0KSBtb2RpZmllcnMucG9zdC5jYWxsKHN0YXRlLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyZW50cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG1vZGlmaWVycy5hZnRlcikgbW9kaWZpZXJzLmFmdGVyLmNhbGwoc3RhdGUsIHN0YXRlLm5vZGUpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0pKHJvb3QpLm5vZGU7XG59XG5cbmZ1bmN0aW9uIGNvcHkgKHNyYykge1xuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiBzcmMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGRzdDtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc0FycmF5KHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRGF0ZShzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgRGF0ZShzcmMuZ2V0VGltZSA/IHNyYy5nZXRUaW1lKCkgOiBzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUmVnRXhwKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IG5ldyBSZWdFeHAoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Vycm9yKHNyYykpIHtcbiAgICAgICAgICAgIGRzdCA9IHsgbWVzc2FnZTogc3JjLm1lc3NhZ2UgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW4oc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IEJvb2xlYW4oc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bWJlcihzcmMpKSB7XG4gICAgICAgICAgICBkc3QgPSBuZXcgTnVtYmVyKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmcoc3JjKSkge1xuICAgICAgICAgICAgZHN0ID0gbmV3IFN0cmluZyhzcmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE9iamVjdC5jcmVhdGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICBkc3QgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihzcmMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcmMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZHN0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPVxuICAgICAgICAgICAgICAgIChzcmMuY29uc3RydWN0b3IgJiYgc3JjLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICB8fCBzcmMuX19wcm90b19fXG4gICAgICAgICAgICAgICAgfHwge31cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHZhciBUID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICBULnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgICAgICAgZHN0ID0gbmV3IFQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvckVhY2gob2JqZWN0S2V5cyhzcmMpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRzdDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gc3JjO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMgKG9iaikge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSByZXMucHVzaChrZXkpXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIHRvUyAob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSB9XG5mdW5jdGlvbiBpc0RhdGUgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJyB9XG5mdW5jdGlvbiBpc1JlZ0V4cCAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgfVxuZnVuY3Rpb24gaXNFcnJvciAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4gKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJyB9XG5mdW5jdGlvbiBpc051bWJlciAob2JqKSB7IHJldHVybiB0b1Mob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgfVxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikgeyByZXR1cm4gdG9TKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nIH1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkgKHhzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICh4cywgZm4pIHtcbiAgICBpZiAoeHMuZm9yRWFjaCkgcmV0dXJuIHhzLmZvckVhY2goZm4pXG4gICAgZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZuKHhzW2ldLCBpLCB4cyk7XG4gICAgfVxufTtcblxuZm9yRWFjaChvYmplY3RLZXlzKFRyYXZlcnNlLnByb3RvdHlwZSksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0cmF2ZXJzZVtrZXldID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIHQgPSBuZXcgVHJhdmVyc2Uob2JqKTtcbiAgICAgICAgcmV0dXJuIHRba2V5XS5hcHBseSh0LCBhcmdzKTtcbiAgICB9O1xufSk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG9iajtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90cmF2ZXJzZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJi1yZXN0cnVjdHVyaW5nIS4vLi4vcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmLXJlc3RydWN0dXJpbmchLi8uLi9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCYtcmVzdHJ1Y3R1cmluZyEuLy4uL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==