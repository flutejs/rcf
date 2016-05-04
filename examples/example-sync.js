webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(20);
	
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
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(A)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function () {
	      _this.props.store1.minus(2);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(A, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'A:',
	        this.props.store1.a,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClick },
	          'click'
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
	        this.props.store1.a
	      );
	    }
	  }]);
	
	  return B;
	}(_react.Component);
	
	var store = {
	  store1: {
	    a: 1,
	    minus: function minus(step, e) {
	      return {
	        a: e.store.a - step
	      };
	    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXN5bmMubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNOzs7Ozs7Ozs7Ozs7OztnTUFDSixjQUFjLFlBQU07QUFDbEIsYUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixLQUFsQixDQUF3QixDQUF4QixFQURrQjtNQUFOOzs7Z0JBRFY7OzhCQUlLO0FBQ1AsY0FBTzs7OztTQUlKLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsQ0FBbEI7U0FFRDs7YUFBUSxTQUFTLEtBQUssV0FBTCxFQUFqQjs7VUFOSztRQUFQLENBRE87Ozs7VUFKTDs7O0tBcUJBOzs7Ozs7Ozs7Ozs4QkFDSztBQUNQLGNBQU87Ozs7U0FJSixLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCO1FBSkgsQ0FETzs7OztVQURMOzs7QUFjTixLQUFNLFFBQVE7QUFDWixXQUFRO0FBQ04sUUFBRyxDQUFIO0FBQ0EsWUFBTyxlQUFDLElBQUQsRUFBTyxDQUFQO2NBQWM7QUFDbkIsWUFBRyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEdBQVksSUFBWjs7TUFERTtJQUZUO0VBREk7O0FBU04sb0JBQVMsTUFBVCxDQUFnQjs7O0dBRWQ7O09BQUssT0FBTyxLQUFQLEVBQUw7S0FDRSw4QkFBQyxDQUFELE9BREY7S0FFRSw4QkFBQyxDQUFELE9BRkY7SUFGYztHQU9kOztPQUFLLE9BQU8sS0FBUCxFQUFMO0tBQ0UsOEJBQUMsQ0FBRCxPQURGO0lBUGM7RUFBaEIsRUFhQSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FiQSxFIiwiZmlsZSI6ImV4YW1wbGVzL2V4YW1wbGUtc3luYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSY2YgZnJvbSAnaW5kZXguanMnO1xuXG5cbmNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnN0b3JlMS5taW51cygyKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIEE6XG5cbiAgICAgIHt0aGlzLnByb3BzLnN0b3JlMS5hfVxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICBjbGlja1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj47XG4gIH1cblxufVxuXG5cbmNsYXNzIEIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIEI6XG5cbiAgICAgIHt0aGlzLnByb3BzLnN0b3JlMS5hfSBcblxuICAgIDwvZGl2PjtcbiAgfVxuXG59XG5cblxuY29uc3Qgc3RvcmUgPSB7XG4gIHN0b3JlMToge1xuICAgIGE6IDEsXG4gICAgbWludXM6IChzdGVwLCBlKSA9PiAoe1xuICAgICAgYTogZS5zdG9yZS5hIC0gc3RlcFxuICAgIH0pXG4gIH0sXG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPGRpdj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEEgLz5cbiAgICA8QiAvPlxuICA8L1JjZj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEIgLz5cbiAgPC9SY2Y+XG5cbjwvZGl2PiwgXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZXhhbXBsZS1zeW5jLm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==