webpackJsonp([4],[
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
	      var store1 = _this.props.store1;
	      store1.setStore({
	        a: store1.a - 2
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
	    a: 1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXNpbXBsZS5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBR007Ozs7Ozs7Ozs7Ozs7O2dNQUNKLGNBQWMsWUFBTTtBQUNsQixXQUFNLFNBQVMsTUFBSyxLQUFMLENBQVcsTUFBWCxDQURHO0FBRWxCLGNBQU8sUUFBUCxDQUFnQjtBQUNkLFlBQUcsT0FBTyxDQUFQLEdBQVcsQ0FBWDtRQURMLEVBRmtCO01BQU47OztnQkFEVjs7OEJBT0s7QUFDUCxjQUFPOzs7O1NBSUosS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQjtTQUVEOzthQUFRLFNBQVMsS0FBSyxXQUFMLEVBQWpCOztVQU5LO1FBQVAsQ0FETzs7OztVQVBMOzs7S0F3QkE7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FBTzs7OztTQUlKLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsQ0FBbEI7UUFKSCxDQURPOzs7O1VBREw7OztBQWNOLEtBQU0sUUFBUTtBQUNaLFdBQVE7QUFDTixRQUFHLENBQUg7SUFERjtFQURJOztBQU1OLG9CQUFTLE1BQVQsQ0FBZ0I7OztHQUVkOztPQUFLLE9BQU8sS0FBUCxFQUFMO0tBQ0UsOEJBQUMsQ0FBRCxPQURGO0tBRUUsOEJBQUMsQ0FBRCxPQUZGO0lBRmM7R0FPZDs7T0FBSyxPQUFPLEtBQVAsRUFBTDtLQUNFLDhCQUFDLENBQUQsT0FERjtJQVBjO0VBQWhCLEVBYUEsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBYkEsRSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLXNpbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSY2YgZnJvbSAnaW5kZXguanMnO1xuXG5cbmNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZTEgPSB0aGlzLnByb3BzLnN0b3JlMTtcbiAgICBzdG9yZTEuc2V0U3RvcmUoe1xuICAgICAgYTogc3RvcmUxLmEgLSAyLFxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgQTpcblxuICAgICAge3RoaXMucHJvcHMuc3RvcmUxLmF9XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIGNsaWNrXG4gICAgICA8L2J1dHRvbj5cblxuICAgIDwvZGl2PjtcbiAgfVxuXG59XG5cblxuY2xhc3MgQiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgQjpcblxuICAgICAge3RoaXMucHJvcHMuc3RvcmUxLmF9IFxuXG4gICAgPC9kaXY+O1xuICB9XG5cbn1cblxuXG5jb25zdCBzdG9yZSA9IHtcbiAgc3RvcmUxOiB7XG4gICAgYTogMSxcbiAgfSxcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8ZGl2PlxuXG4gIDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgICA8QSAvPlxuICAgIDxCIC8+XG4gIDwvUmNmPlxuXG4gIDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgICA8QiAvPlxuICA8L1JjZj5cblxuPC9kaXY+LCBcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9leGFtcGxlLXNpbXBsZS5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=