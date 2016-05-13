webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(13);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(11);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var User = function (_Component) {
	  _inherits(User, _Component);
	
	  function User() {
	    _classCallCheck(this, User);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(User).apply(this, arguments));
	  }
	
	  _createClass(User, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'name: ',
	          this.props.name
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'age: ',
	          this.props.age
	        )
	      );
	    }
	  }]);
	
	  return User;
	}(_react.Component);
	
	var MyComponent = function (_Component2) {
	  _inherits(MyComponent, _Component2);
	
	  function MyComponent() {
	    _classCallCheck(this, MyComponent);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MyComponent).apply(this, arguments));
	  }
	
	  _createClass(MyComponent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(User, this.props.user)
	      );
	    }
	  }]);
	
	  return MyComponent;
	}(_react.Component);
	
	var App = function (_Component3) {
	  _inherits(App, _Component3);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this3.list = props.list || [{
	      name: 'lily',
	      age: 18
	    }, {
	      name: 'jack',
	      age: 17
	    }];
	    return _this3;
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'ul',
	        null,
	        this.list.map(function (item, index) {
	          return _react2.default.createElement(
	            _index2.default,
	            { store: { user: item }, key: index },
	            _react2.default.createElement(MyComponent, null)
	          );
	        })
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('react-content'));

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLW11dGlwbGVpbml0Lm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FHTTs7Ozs7Ozs7Ozs7OEJBQ0s7QUFDUCxjQUFPOzs7U0FDTDs7OztXQUFVLEtBQUssS0FBTCxDQUFXLElBQVg7VUFETDtTQUVMOzs7O1dBQVMsS0FBSyxLQUFMLENBQVcsR0FBWDtVQUZKO1FBQVAsQ0FETzs7OztVQURMOzs7S0FVQTs7Ozs7Ozs7Ozs7OEJBQ0s7QUFDUCxjQUFPOzs7U0FDSCw4QkFBQyxJQUFELEVBQVUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQURQO1FBQVAsQ0FETzs7OztVQURMOzs7S0FTQTs7O0FBQ0osWUFESSxHQUNKLENBQVksS0FBWixFQUFtQjsyQkFEZixLQUNlOzt5RUFEZixnQkFFSSxRQURXOztBQUVqQixZQUFLLElBQUwsR0FBWSxNQUFNLElBQU4sSUFBYyxDQUFDO0FBQ3pCLGFBQU0sTUFBTjtBQUNBLFlBQUssRUFBTDtNQUZ3QixFQUd2QjtBQUNELGFBQU0sTUFBTjtBQUNBLFlBQUssRUFBTDtNQUx3QixDQUFkLENBRks7O0lBQW5COztnQkFESTs7OEJBV0s7O0FBR1AsY0FBTzs7O1NBRUgsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLFVBQUMsSUFBRCxFQUFPLEtBQVA7a0JBQ1o7O2VBQUssT0FBTyxFQUFFLE1BQU0sSUFBTixFQUFULEVBQXVCLEtBQUssS0FBTCxFQUE1QjthQUNFLDhCQUFDLFdBQUQsT0FERjs7VUFEWSxDQUZYO1FBQVAsQ0FITzs7OztVQVhMOzs7QUE0Qk4sb0JBQVMsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBRUEsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBRkEsRSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLW11dGlwbGVpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJjZiBmcm9tICdpbmRleC5qcyc7XG5cblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj4gXG4gICAgICA8cD5uYW1lOiB7dGhpcy5wcm9wcy5uYW1lfTwvcD5cbiAgICAgIDxwPmFnZToge3RoaXMucHJvcHMuYWdlfTwvcD5cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGxpPlxuICAgICAgICA8VXNlciB7Li4udGhpcy5wcm9wcy51c2VyfSAvPlxuICAgIDwvbGk+O1xuICB9XG59XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5saXN0ID0gcHJvcHMubGlzdCB8fCBbe1xuICAgICAgbmFtZTogJ2xpbHknLFxuICAgICAgYWdlOiAxOCxcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnamFjaycsXG4gICAgICBhZ2U6IDE3LFxuICAgIH1dO1xuICB9XG4gIHJlbmRlcigpIHtcblxuXG4gICAgcmV0dXJuIDx1bD5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IFxuICAgICAgICAgIDxSY2Ygc3RvcmU9e3sgdXNlcjogaXRlbSB9fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxNeUNvbXBvbmVudCAvPlxuICAgICAgICAgIDwvUmNmPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC91bD47XG5cbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9leGFtcGxlLW11dGlwbGVpbml0Lm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==