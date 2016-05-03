webpackJsonp([6],[
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
	      return new Promise(function (resolve) {
	        setTimeout(function () {
	          return resolve({
	            a: e.store.a - step
	          });
	        }, 1000);
	      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWFzeW5jLXByb21pc2UubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU07Ozs7Ozs7Ozs7Ozs7O2dNQUNKLGNBQWMsWUFBTTtBQUNsQixhQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLFVBQWxCLENBQTZCLENBQTdCLEVBRGtCO01BQU47OztnQkFEVjs7OEJBSUs7QUFDUCxjQUFPOzs7O1NBSUosS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQjtTQUVEOzthQUFRLFNBQVMsS0FBSyxXQUFMLEVBQWpCOztVQU5LO1FBQVAsQ0FETzs7OztVQUpMOzs7S0FxQkE7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FBTzs7OztTQUlKLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsQ0FBbEI7UUFKSCxDQURPOzs7O1VBREw7OztBQWNOLEtBQU0sUUFBUTtBQUNaLFdBQVE7QUFDTixRQUFHLENBQUg7QUFDQSxpQkFBWSxvQkFBQyxJQUFELEVBQU8sQ0FBUDtjQUFhLElBQUksT0FBSixDQUFZLG1CQUFXO0FBQzlDLG9CQUFXO2tCQUFNLFFBQVE7QUFDdkIsZ0JBQUcsRUFBRSxLQUFGLENBQVEsQ0FBUixHQUFZLElBQVo7WUFEWTtVQUFOLEVBRVAsSUFGSixFQUQ4QztRQUFYO01BQXpCO0lBRmQ7RUFESTs7QUFZTixvQkFBUyxNQUFULENBQWdCOzs7R0FFZDs7T0FBSyxPQUFPLEtBQVAsRUFBTDtLQUNFLDhCQUFDLENBQUQsT0FERjtLQUVFLDhCQUFDLENBQUQsT0FGRjtJQUZjO0dBT2Q7O09BQUssT0FBTyxLQUFQLEVBQUw7S0FDRSw4QkFBQyxDQUFELE9BREY7SUFQYztFQUFoQixFQWFBLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQWJBLEUiLCJmaWxlIjoiZXhhbXBsZXMvZXhhbXBsZS1hc3luYy1wcm9taXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGlzUHJvbWlzZSBmcm9tICdpcy1wcm9taXNlJztcbmltcG9ydCBSY2YgZnJvbSAnaW5kZXguanMnO1xuXG5jbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zdG9yZTEuYXN5bmNNaW51cygyKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIEE6XG5cbiAgICAgIHt0aGlzLnByb3BzLnN0b3JlMS5hfVxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICBjbGlja1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj47XG4gIH1cblxufVxuXG5cbmNsYXNzIEIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIEI6XG5cbiAgICAgIHt0aGlzLnByb3BzLnN0b3JlMS5hfSBcblxuICAgIDwvZGl2PjtcbiAgfVxuXG59XG5cblxuY29uc3Qgc3RvcmUgPSB7XG4gIHN0b3JlMToge1xuICAgIGE6IDEsXG4gICAgYXN5bmNNaW51czogKHN0ZXAsIGUpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgYTogZS5zdG9yZS5hIC0gc3RlcCxcbiAgICAgIH0pLCAxMDAwKTtcbiAgICB9KSxcbiAgfSxcbn07XG5cblxuUmVhY3RET00ucmVuZGVyKDxkaXY+XG5cbiAgPFJjZiBzdG9yZT17c3RvcmV9PlxuICAgIDxBIC8+XG4gICAgPEIgLz5cbiAgPC9SY2Y+XG5cbiAgPFJjZiBzdG9yZT17c3RvcmV9PlxuICAgIDxCIC8+XG4gIDwvUmNmPlxuXG48L2Rpdj4sIFxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2V4YW1wbGUtYXN5bmMtcHJvbWlzZS5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=