webpackJsonp([8],[
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
	
	var UserStore = {
	  name: 'lily',
	  age: '18'
	};
	
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
	          this.props.user.name
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'age: ',
	          this.props.user.age
	        )
	      );
	    }
	  }]);
	
	  return User;
	}(_react.Component);
	
	var Age = function (_Component2) {
	  _inherits(Age, _Component2);
	
	  function Age() {
	    _classCallCheck(this, Age);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Age).apply(this, arguments));
	  }
	
	  _createClass(Age, [{
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        'age: ',
	        this.props.user.age,
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              return _this3.props.user.setStore({
	                age: _this3.props.user.age - 1
	              });
	            } },
	          'click'
	        )
	      );
	    }
	  }]);
	
	  return Age;
	}(_react.Component);
	
	var App = function (_Component3) {
	  _inherits(App, _Component3);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var store = {
	        user: UserStore
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _index2.default,
	          { store: store, className: 'rcf' },
	          'Put User in Rcf.',
	          _react2.default.createElement(User, null)
	        ),
	        _react2.default.createElement(
	          _index2.default,
	          { store: store, className: 'rcf' },
	          'Put Age in Rcf.',
	          _react2.default.createElement(Age, null)
	        ),
	        _react2.default.createElement(
	          _index2.default,
	          { store: store, className: 'rcf' },
	          'You can put then in Rcf too.',
	          _react2.default.createElement(User, null),
	          _react2.default.createElement(Age, null)
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('react-content'));

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWluZGV4Lm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxLQUFNLFlBQVk7QUFDaEIsU0FBTSxNQUFOO0FBQ0EsUUFBSyxJQUFMO0VBRkk7O0tBTUE7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FBTzs7O1NBQ0w7Ozs7V0FBVSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCO1VBREw7U0FFTDs7OztXQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsR0FBaEI7VUFGSjtRQUFQLENBRE87Ozs7VUFETDs7O0tBVUE7Ozs7Ozs7Ozs7OzhCQUNLOzs7QUFDUCxjQUFPOzs7O1NBQ0MsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUFoQjtTQUNOOzthQUFRLFNBQVM7c0JBQU0sT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUFoQixDQUF5QjtBQUM5QyxzQkFBSyxPQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLEdBQXNCLENBQXRCO2dCQURnQjtjQUFOLEVBQWpCOztVQUZLO1FBQVAsQ0FETzs7OztVQURMOzs7S0FZQTs7Ozs7Ozs7Ozs7OEJBQ0s7QUFDUCxXQUFNLFFBQVE7QUFDWixlQUFNLFNBQU47UUFESSxDQURDO0FBSVAsY0FBTzs7O1NBRUw7O2FBQUssT0FBTyxLQUFQLEVBQWMsV0FBVSxLQUFWLEVBQW5COztXQUVFLDhCQUFDLElBQUQsT0FGRjtVQUZLO1NBT0w7O2FBQUssT0FBTyxLQUFQLEVBQWMsV0FBVSxLQUFWLEVBQW5COztXQUVFLDhCQUFDLEdBQUQsT0FGRjtVQVBLO1NBWUw7O2FBQUssT0FBTyxLQUFQLEVBQWMsV0FBVSxLQUFWLEVBQW5COztXQUVFLDhCQUFDLElBQUQsT0FGRjtXQUdFLDhCQUFDLEdBQUQsT0FIRjtVQVpLO1FBQVAsQ0FKTzs7OztVQURMOzs7QUEwQk4sb0JBQVMsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBRUEsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBRkEsRSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLWluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJjZiBmcm9tICdpbmRleC5qcyc7XG5cblxuY29uc3QgVXNlclN0b3JlID0ge1xuICBuYW1lOiAnbGlseScsXG4gIGFnZTogJzE4Jyxcbn07XG5cblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxwPm5hbWU6IHt0aGlzLnByb3BzLnVzZXIubmFtZX08L3A+XG4gICAgICA8cD5hZ2U6IHt0aGlzLnByb3BzLnVzZXIuYWdlfTwvcD5cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuXG5jbGFzcyBBZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICBhZ2U6IHt0aGlzLnByb3BzLnVzZXIuYWdlfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnVzZXIuc2V0U3RvcmUoe1xuICAgICAgICBhZ2U6IHRoaXMucHJvcHMudXNlci5hZ2UgLSAxLFxuICAgICAgfSl9PmNsaWNrPC9idXR0b24+XG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0b3JlID0ge1xuICAgICAgdXNlcjogVXNlclN0b3JlLFxuICAgIH07XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxSY2Ygc3RvcmU9e3N0b3JlfSBjbGFzc05hbWU9XCJyY2ZcIj5cbiAgICAgICAgUHV0IFVzZXIgaW4gUmNmLlxuICAgICAgICA8VXNlciAvPlxuICAgICAgPC9SY2Y+XG5cbiAgICAgIDxSY2Ygc3RvcmU9e3N0b3JlfSBjbGFzc05hbWU9XCJyY2ZcIj5cbiAgICAgICAgUHV0IEFnZSBpbiBSY2YuXG4gICAgICAgIDxBZ2UgLz5cbiAgICAgIDwvUmNmPlxuXG4gICAgICA8UmNmIHN0b3JlPXtzdG9yZX0gY2xhc3NOYW1lPVwicmNmXCI+XG4gICAgICAgIFlvdSBjYW4gcHV0IHRoZW4gaW4gUmNmIHRvby5cbiAgICAgICAgPFVzZXIgLz5cbiAgICAgICAgPEFnZSAvPlxuICAgICAgPC9SY2Y+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIFxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2V4YW1wbGUtaW5kZXgubWRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9