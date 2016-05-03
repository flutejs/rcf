webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _isPromise = __webpack_require__(32);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
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
	      _this.props.store1.asyncMinus(2);
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
	    asyncMinus: function asyncMinus(step, e) {
	      setTimeout(function () {
	        e.setStore({
	          a: e.store.a - step
	        });
	      }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWFzeW5jLXNldFN0b3JlLm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNOzs7Ozs7Ozs7Ozs7OztnTUFDSixjQUFjLFlBQU07QUFDbEIsYUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixVQUFsQixDQUE2QixDQUE3QixFQURrQjtNQUFOOzs7Z0JBRFY7OzhCQUlLO0FBQ1AsY0FBTzs7OztTQUlKLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsQ0FBbEI7U0FFRDs7YUFBUSxTQUFTLEtBQUssV0FBTCxFQUFqQjs7VUFOSztRQUFQLENBRE87Ozs7VUFKTDs7O0tBcUJBOzs7Ozs7Ozs7Ozs4QkFDSztBQUNQLGNBQU87Ozs7U0FJSixLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCO1FBSkgsQ0FETzs7OztVQURMOzs7QUFjTixLQUFNLFFBQVE7QUFDWixXQUFRO0FBQ04sUUFBRyxDQUFIO0FBQ0EsaUJBQVksb0JBQUMsSUFBRCxFQUFPLENBQVAsRUFBYTtBQUN2QixrQkFBVyxZQUFNO0FBQ2YsV0FBRSxRQUFGLENBQVc7QUFDVCxjQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsR0FBWSxJQUFaO1VBREwsRUFEZTtRQUFOLEVBSVIsSUFKSCxFQUR1QjtNQUFiO0lBRmQ7RUFESTs7QUFjTixvQkFBUyxNQUFULENBQWdCOzs7R0FFZDs7T0FBSyxPQUFPLEtBQVAsRUFBTDtLQUNFLDhCQUFDLENBQUQsT0FERjtLQUVFLDhCQUFDLENBQUQsT0FGRjtJQUZjO0dBT2Q7O09BQUssT0FBTyxLQUFQLEVBQUw7S0FDRSw4QkFBQyxDQUFELE9BREY7SUFQYztFQUFoQixFQWFBLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQWJBLEUiLCJmaWxlIjoiZXhhbXBsZXMvZXhhbXBsZS1hc3luYy1zZXRTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBpc1Byb21pc2UgZnJvbSAnaXMtcHJvbWlzZSc7XG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc3RvcmUxLmFzeW5jTWludXMoMik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICBBOlxuXG4gICAgICB7dGhpcy5wcm9wcy5zdG9yZTEuYX1cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgY2xpY2tcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+O1xuICB9XG5cbn1cblxuXG5jbGFzcyBCIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICBCOlxuXG4gICAgICB7dGhpcy5wcm9wcy5zdG9yZTEuYX0gXG5cbiAgICA8L2Rpdj47XG4gIH1cblxufVxuXG5cbmNvbnN0IHN0b3JlID0ge1xuICBzdG9yZTE6IHtcbiAgICBhOiAxLFxuICAgIGFzeW5jTWludXM6IChzdGVwLCBlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZS5zZXRTdG9yZSh7XG4gICAgICAgICAgYTogZS5zdG9yZS5hIC0gc3RlcCxcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LFxuICB9LFxufTtcblxuXG5SZWFjdERPTS5yZW5kZXIoPGRpdj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEEgLz5cbiAgICA8QiAvPlxuICA8L1JjZj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEIgLz5cbiAgPC9SY2Y+XG5cbjwvZGl2PiwgXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZXhhbXBsZS1hc3luYy1zZXRTdG9yZS5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=