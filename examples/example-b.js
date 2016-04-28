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
	
	var A = function A(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'A:',
	    props.a,
	    _react2.default.createElement(
	      'button',
	      { onClick: function onClick() {
	          props.set({
	            a: props.a - 1
	          });
	        } },
	      'click'
	    )
	  );
	};
	
	var store = { a: 1 };
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.state = {
	      a: 1
	    };
	    setInterval(function () {
	      _this.setState({
	        a: _this.state.a - 1
	      });
	    }, 1000);
	    return _this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWIubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLEtBQU0sSUFBSSxTQUFKLENBQUk7VUFBUzs7OztLQUloQixNQUFNLENBQU47S0FFRDs7U0FBUSxTQUFTLG1CQUFNO0FBQ3JCLGlCQUFNLEdBQU4sQ0FBVTtBQUNSLGdCQUFHLE1BQU0sQ0FBTixHQUFVLENBQVY7WUFETCxFQURxQjtVQUFOLEVBQWpCOztNQU5pQjs7RUFBVDs7QUFrQlYsS0FBTSxRQUFRLEVBQUMsR0FBRyxDQUFILEVBQVQ7O0tBRUE7OztBQUVKLFlBRkksR0FFSixDQUFZLEtBQVosRUFBbUI7MkJBRmYsS0FFZTs7d0VBRmYsZ0JBR0ksUUFEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxVQUFHLENBQUg7TUFERixDQUZpQjtBQUtqQixpQkFBWSxZQUFJO0FBQ2QsYUFBSyxRQUFMLENBQWM7QUFDWixZQUFHLE1BQUssS0FBTCxDQUFXLENBQVgsR0FBZSxDQUFmO1FBREwsRUFEYztNQUFKLEVBSVYsSUFKRixFQUxpQjs7SUFBbkI7O2dCQUZJOzs4QkFjSzs7QUFFUCxjQUFPOzs7U0FFTDs7YUFBSyxPQUFPLEtBQVAsRUFBTDtXQUVFLDhCQUFDLENBQUQsT0FGRjs7V0FJaUIsS0FBSyxLQUFMLENBQVcsQ0FBWDtVQU5aO1FBQVAsQ0FGTzs7OztVQWRMOzs7QUFpQ04sb0JBQVMsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBRUEsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBRkEsRSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuY29uc3QgQSA9IHByb3BzID0+IDxkaXY+XG5cbiAgQTogXG5cbiAge3Byb3BzLmF9IFxuXG4gIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgIHByb3BzLnNldCh7XG4gICAgICBhOiBwcm9wcy5hIC0gMSxcbiAgICB9KTtcbiAgfX0+XG4gICAgY2xpY2tcbiAgPC9idXR0b24+XG5cbjwvZGl2PlxuXG5cblxuY29uc3Qgc3RvcmUgPSB7YTogMX07XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGE6IDEsXG4gICAgfVxuICAgIHNldEludGVydmFsKCgpPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYTogdGhpcy5zdGF0ZS5hIC0gMSxcbiAgICAgIH0pXG4gICAgfSwxMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICA8UmNmIHN0b3JlPXtzdG9yZX0+XG5cbiAgICAgICAgPEEgLz5cblxuICAgICAgICB0aGlzLnN0YXRlLmE6IHt0aGlzLnN0YXRlLmF9XG5cbiAgICAgIDwvUmNmPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIFxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2V4YW1wbGUtYi5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=