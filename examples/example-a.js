webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(56);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(102);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(95);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var A = (_temp = _class = function (_Component) {
	  _inherits(A, _Component);
	
	  function A() {
	    _classCallCheck(this, A);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(A).apply(this, arguments));
	  }
	
	  _createClass(A, [{
	    key: 'onClick',
	    value: function onClick() {
	      this.context.set({
	        a: this.context.a - 1
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'this.context.a: ',
	        this.context.a,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.onClick.bind(this) },
	          'A'
	        )
	      );
	    }
	  }]);
	
	  return A;
	}(_react.Component), _class.contextTypes = {
	  a: _react.PropTypes.any,
	  set: _react.PropTypes.any
	}, _temp);
	
	
	var obj = {
	  a: 1
	};
	
	var App = function (_Component2) {
	  _inherits(App, _Component2);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this2.state = {
	      a: 1
	    };
	    return _this2;
	  }
	
	  _createClass(App, [{
	    key: 'onClick',
	    value: function onClick() {
	      var a = this.state.a;
	      this.setState({
	        a: a - 1
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _index2.default,
	          { context: obj },
	          _react2.default.createElement(A, null)
	        ),
	        _react2.default.createElement(
	          _index2.default,
	          { context: obj },
	          _react2.default.createElement(A, null)
	        ),
	        'this.state.a: ',
	        this.state.a,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.onClick.bind(this) },
	          'App'
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('react-content'));

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWEubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU07Ozs7Ozs7Ozs7OytCQUtNO0FBQ1IsWUFBSyxPQUFMLENBQWEsR0FBYixDQUFpQjtBQUNmLFlBQUcsS0FBSyxPQUFMLENBQWEsQ0FBYixHQUFpQixDQUFqQjtRQURMLEVBRFE7Ozs7OEJBS0Q7QUFDUCxjQUFPOzs7O1NBQ1ksS0FBSyxPQUFMLENBQWEsQ0FBYjtTQUNqQjs7YUFBUSxTQUFXLEtBQUssT0FBTCxXQUFYLEVBQVI7O1VBRks7UUFBUCxDQURPOzs7O1VBVkw7NkJBQ0csZUFBZTtBQUNwQixNQUFHLGlCQUFVLEdBQVY7QUFDSCxRQUFLLGlCQUFVLEdBQVY7Ozs7QUFlVCxLQUFNLE1BQU07QUFDVixNQUFHLENBQUg7RUFESTs7S0FJQTs7O0FBQ0osWUFESSxHQUNKLENBQVksS0FBWixFQUFtQjsyQkFEZixLQUNlOzt5RUFEZixnQkFFSSxRQURXOztBQUVqQixZQUFLLEtBQUwsR0FBYTtBQUNYLFVBQUcsQ0FBSDtNQURGLENBRmlCOztJQUFuQjs7Z0JBREk7OytCQU9NO0FBQ1IsV0FBTSxJQUFJLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FERjtBQUVSLFlBQUssUUFBTCxDQUFjO0FBQ1osWUFBRyxJQUFJLENBQUo7UUFETCxFQUZROzs7OzhCQU1EO0FBQ1AsY0FBTzs7O1NBQ0w7O2FBQUssU0FBUyxHQUFULEVBQUw7V0FDRSw4QkFBQyxDQUFELE9BREY7VUFESztTQUlMOzthQUFLLFNBQVMsR0FBVCxFQUFMO1dBQ0UsOEJBQUMsQ0FBRCxPQURGO1VBSks7O1NBT1UsS0FBSyxLQUFMLENBQVcsQ0FBWDtTQUNmOzthQUFRLFNBQVcsS0FBSyxPQUFMLFdBQVgsRUFBUjs7VUFSSztRQUFQLENBRE87Ozs7VUFiTDs7O0FBMkJOLG9CQUFTLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUVBLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUZBLEUiLCJmaWxlIjoiZXhhbXBsZXMvZXhhbXBsZS1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgYTogUHJvcFR5cGVzLmFueSxcbiAgICBzZXQ6IFByb3BUeXBlcy5hbnksXG4gIH1cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmNvbnRleHQuc2V0KHtcbiAgICAgIGE6IHRoaXMuY29udGV4dC5hIC0gMSxcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICB0aGlzLmNvbnRleHQuYToge3RoaXMuY29udGV4dC5hfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXs6OnRoaXMub25DbGlja30+QTwvYnV0dG9uPlxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG5jb25zdCBvYmogPSB7XG4gIGE6IDFcbn07XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhOiAxXG4gICAgfVxuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc3QgYSA9IHRoaXMuc3RhdGUuYTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGE6IGEgLSAxLFxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxSY2YgY29udGV4dD17b2JqfT5cbiAgICAgICAgPEEgLz5cbiAgICAgIDwvUmNmPlxuICAgICAgPFJjZiBjb250ZXh0PXtvYmp9PlxuICAgICAgICA8QSAvPlxuICAgICAgPC9SY2Y+XG4gICAgICB0aGlzLnN0YXRlLmE6IHt0aGlzLnN0YXRlLmF9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9ezo6dGhpcy5vbkNsaWNrfT5BcHA8L2J1dHRvbj5cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz5cbiAgLFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9leGFtcGxlLWEubWRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9