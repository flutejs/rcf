webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	      _this.props.set({
	        a: _this.props.a - 1
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
	        this.props.a,
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
	
	var store = { a: 1 };
	
	var App = function (_Component2) {
	  _inherits(App, _Component2);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this2.state = {
	      a: 1
	    };
	    setInterval(function () {
	      _this2.setState({
	        a: _this2.state.a - 1
	      });
	    }, 1000);
	    return _this2;
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _index2.default,
	          { store: store },
	          _react2.default.createElement(A, null),
	          'this.state.a: ',
	          this.state.a
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('react-content'));

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWIubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNOzs7Ozs7Ozs7Ozs7OztnTUFDSixjQUFjLFlBQU07QUFDbEIsYUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlO0FBQ2IsWUFBRyxNQUFLLEtBQUwsQ0FBVyxDQUFYLEdBQWUsQ0FBZjtRQURMLEVBRGtCO01BQU47OztnQkFEVjs7OEJBTUs7QUFDUCxjQUFPOzs7O1NBSUosS0FBSyxLQUFMLENBQVcsQ0FBWDtTQUVEOzthQUFRLFNBQVMsS0FBSyxXQUFMLEVBQWpCOztVQU5LO1FBQVAsQ0FETzs7OztVQU5MOzs7QUF1Qk4sS0FBTSxRQUFRLEVBQUMsR0FBRyxDQUFILEVBQVQ7O0tBRUE7OztBQUVKLFlBRkksR0FFSixDQUFZLEtBQVosRUFBbUI7MkJBRmYsS0FFZTs7eUVBRmYsZ0JBR0ksUUFEVzs7QUFFakIsWUFBSyxLQUFMLEdBQWE7QUFDWCxVQUFHLENBQUg7TUFERixDQUZpQjtBQUtqQixpQkFBWSxZQUFJO0FBQ2QsY0FBSyxRQUFMLENBQWM7QUFDWixZQUFHLE9BQUssS0FBTCxDQUFXLENBQVgsR0FBZSxDQUFmO1FBREwsRUFEYztNQUFKLEVBSVYsSUFKRixFQUxpQjs7SUFBbkI7O2dCQUZJOzs4QkFjSzs7QUFFUCxjQUFPOzs7U0FFTDs7YUFBSyxPQUFPLEtBQVAsRUFBTDtXQUVFLDhCQUFDLENBQUQsT0FGRjs7V0FJaUIsS0FBSyxLQUFMLENBQVcsQ0FBWDtVQU5aO1FBQVAsQ0FGTzs7OztVQWRMOzs7QUFpQ04sb0JBQVMsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBRUEsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBRkEsRSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuXG5jbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXQoe1xuICAgICAgYTogdGhpcy5wcm9wcy5hIC0gMSxcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIEE6XG5cbiAgICAgIHt0aGlzLnByb3BzLmF9XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIGNsaWNrXG4gICAgICA8L2J1dHRvbj5cblxuICAgIDwvZGl2PjtcbiAgfVxuXG59XG5cblxuY29uc3Qgc3RvcmUgPSB7YTogMX07XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGE6IDEsXG4gICAgfVxuICAgIHNldEludGVydmFsKCgpPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYTogdGhpcy5zdGF0ZS5hIC0gMSxcbiAgICAgIH0pXG4gICAgfSwxMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICA8UmNmIHN0b3JlPXtzdG9yZX0+XG5cbiAgICAgICAgPEEgLz5cblxuICAgICAgICB0aGlzLnN0YXRlLmE6IHt0aGlzLnN0YXRlLmF9XG5cbiAgICAgIDwvUmNmPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIFxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2V4YW1wbGUtYi5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=