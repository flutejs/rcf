webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(17);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(14);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var A = function (_Component) {
	  _inherits(A, _Component);
	
	  function A() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, A);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(A)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClickStore1 = function () {
	      var store1 = _this.props.store1;
	      store1.setStore({
	        a: store1.a - 2
	      });
	    }, _this.handleClickStore2 = function () {
	      var store2 = _this.props.store2;
	      store2.setStore({
	        a: store2.a - 2
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(A, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'A:',
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClickStore1 },
	          'store1'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClickStore2 },
	          'store2'
	        )
	      );
	    }
	  }]);
	
	  return A;
	}(_react.Component);
	
	var B = function (_Component2) {
	  _inherits(B, _Component2);
	
	  function B() {
	    _classCallCheck(this, B);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(B).apply(this, arguments));
	  }
	
	  _createClass(B, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'B:',
	        _react2.default.createElement(
	          'div',
	          null,
	          'store1.a ',
	          this.props.store1.a
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'store2.a ',
	          this.props.store2.a
	        )
	      );
	    }
	  }]);
	
	  return B;
	}(_react.Component);
	
	var store = {
	  store1: {
	    a: 1
	  },
	  store2: {
	    a: 2
	  }
	};
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(
	    _index2.default,
	    { store: store },
	    _react2.default.createElement(A, null),
	    _react2.default.createElement(B, null)
	  ),
	  _react2.default.createElement(
	    _index2.default,
	    { store: store },
	    _react2.default.createElement(B, null)
	  )
	), document.getElementById('react-content'));

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLW11bHRpcGxlLm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FHTTs7Ozs7Ozs7Ozs7Ozs7Z01BQ0osb0JBQW9CLFlBQU07QUFDeEIsV0FBTSxTQUFTLE1BQUssS0FBTCxDQUFXLE1BQVgsQ0FEUztBQUV4QixjQUFPLFFBQVAsQ0FBZ0I7QUFDZCxZQUFHLE9BQU8sQ0FBUCxHQUFXLENBQVg7UUFETCxFQUZ3QjtNQUFOLFFBTXBCLG9CQUFvQixZQUFNO0FBQ3hCLFdBQU0sU0FBUyxNQUFLLEtBQUwsQ0FBVyxNQUFYLENBRFM7QUFFeEIsY0FBTyxRQUFQLENBQWdCO0FBQ2QsWUFBRyxPQUFPLENBQVAsR0FBVyxDQUFYO1FBREwsRUFGd0I7TUFBTjs7O2dCQVBoQjs7OEJBYUs7QUFDUCxjQUFPOzs7O1NBSUw7O2FBQVEsU0FBUyxLQUFLLGlCQUFMLEVBQWpCOztVQUpLO1NBUUw7O2FBQVEsU0FBUyxLQUFLLGlCQUFMLEVBQWpCOztVQVJLO1FBQVAsQ0FETzs7OztVQWJMOzs7S0FnQ0E7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FBTzs7OztTQUlMOzs7O1dBQ1ksS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQjtVQUxQO1NBUUw7Ozs7V0FDWSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCO1VBVFA7UUFBUCxDQURPOzs7O1VBREw7OztBQW9CTixLQUFNLFFBQVE7QUFDWixXQUFRO0FBQ04sUUFBRyxDQUFIO0lBREY7QUFHQSxXQUFRO0FBQ04sUUFBRyxDQUFIO0lBREY7RUFKSTs7QUFTTixvQkFBUyxNQUFULENBQWdCOzs7R0FFZDs7T0FBSyxPQUFPLEtBQVAsRUFBTDtLQUNFLDhCQUFDLENBQUQsT0FERjtLQUVFLDhCQUFDLENBQUQsT0FGRjtJQUZjO0dBT2Q7O09BQUssT0FBTyxLQUFQLEVBQUw7S0FDRSw4QkFBQyxDQUFELE9BREY7SUFQYztFQUFoQixFQWFBLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQWJBLEUiLCJmaWxlIjoiZXhhbXBsZXMvZXhhbXBsZS1tdWx0aXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSY2YgZnJvbSAnaW5kZXguanMnO1xuXG5cbmNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGlja1N0b3JlMSA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZTEgPSB0aGlzLnByb3BzLnN0b3JlMTtcbiAgICBzdG9yZTEuc2V0U3RvcmUoe1xuICAgICAgYTogc3RvcmUxLmEgLSAyLFxuICAgIH0pO1xuICB9XG4gIGhhbmRsZUNsaWNrU3RvcmUyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlMiA9IHRoaXMucHJvcHMuc3RvcmUyO1xuICAgIHN0b3JlMi5zZXRTdG9yZSh7XG4gICAgICBhOiBzdG9yZTIuYSAtIDIsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICBBOlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTdG9yZTF9PlxuICAgICAgICBzdG9yZTFcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTdG9yZTJ9PlxuICAgICAgICBzdG9yZTJcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+O1xuICB9XG5cbn1cblxuXG5jbGFzcyBCIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICBCOlxuXG4gICAgICA8ZGl2PlxuICAgICAgICBzdG9yZTEuYSB7dGhpcy5wcm9wcy5zdG9yZTEuYX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICBzdG9yZTIuYSB7dGhpcy5wcm9wcy5zdG9yZTIuYX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+O1xuICB9XG5cbn1cblxuXG5jb25zdCBzdG9yZSA9IHtcbiAgc3RvcmUxOiB7XG4gICAgYTogMSxcbiAgfSxcbiAgc3RvcmUyOiB7XG4gICAgYTogMixcbiAgfSxcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8ZGl2PlxuXG4gIDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgICA8QSAvPlxuICAgIDxCIC8+XG4gIDwvUmNmPlxuXG4gIDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgICA8QiAvPlxuICA8L1JjZj5cblxuPC9kaXY+LCBcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9leGFtcGxlLW11bHRpcGxlLm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==