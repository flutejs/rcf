webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(56);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(102);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(95);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var B = function B(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'B:',
	    props.a
	  );
	};
	
	var store = { a: 1 };
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWEubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNLElBQUksU0FBSixDQUFJO1VBQVM7Ozs7S0FJaEIsTUFBTSxDQUFOO0tBRUQ7O1NBQVEsU0FBUyxtQkFBTTtBQUNyQixpQkFBTSxHQUFOLENBQVU7QUFDUixnQkFBRyxNQUFNLENBQU4sR0FBVSxDQUFWO1lBREwsRUFEcUI7VUFBTixFQUFqQjs7TUFOaUI7O0VBQVQ7O0FBZ0JWLEtBQU0sSUFBSSxTQUFKLENBQUk7VUFBUzs7OztLQUloQixNQUFNLENBQU47O0VBSk87O0FBU1YsS0FBTSxRQUFRLEVBQUMsR0FBRyxDQUFILEVBQVQ7O0FBRU4sb0JBQVMsTUFBVCxDQUFnQjs7O0dBRWQ7O09BQUssT0FBTyxLQUFQLEVBQUw7S0FDRSw4QkFBQyxDQUFELE9BREY7S0FFRSw4QkFBQyxDQUFELE9BRkY7SUFGYztHQU9kOztPQUFLLE9BQU8sS0FBUCxFQUFMO0tBQ0UsOEJBQUMsQ0FBRCxPQURGO0lBUGM7RUFBaEIsRUFhQSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FiQSxFIiwiZmlsZSI6ImV4YW1wbGVzL2V4YW1wbGUtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSY2YgZnJvbSAnaW5kZXguanMnO1xuXG5jb25zdCBBID0gcHJvcHMgPT4gPGRpdj5cblxuICBBOlxuXG4gIHtwcm9wcy5hfSBcblxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICBwcm9wcy5zZXQoe1xuICAgICAgYTogcHJvcHMuYSAtIDEsXG4gICAgfSk7XG4gIH19PlxuICAgIGNsaWNrXG4gIDwvYnV0dG9uPlxuXG48L2Rpdj5cblxuY29uc3QgQiA9IHByb3BzID0+IDxkaXY+XG5cbiAgQjpcblxuICB7cHJvcHMuYX0gXG5cbjwvZGl2PlxuXG5cbmNvbnN0IHN0b3JlID0ge2E6IDF9O1xuXG5SZWFjdERPTS5yZW5kZXIoPGRpdj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEEgLz5cbiAgICA8QiAvPlxuICA8L1JjZj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEIgLz5cbiAgPC9SY2Y+XG5cbjwvZGl2PiwgXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZXhhbXBsZS1hLm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==