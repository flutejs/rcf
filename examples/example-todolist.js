webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(56);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(102);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(95);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// TodoList.jsx
	
	var TodoList = function TodoList(props, context) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    context.list.map(function (item) {
	      return _react2.default.createElement(
	        _index2.default,
	        { context: item },
	        _react2.default.createElement(Todo, null)
	      );
	    }),
	    _react2.default.createElement(AddTodo, null),
	    _react2.default.createElement(Footer, null)
	  );
	};
	
	TodoList.contextTypes = {
	  list: _react.PropTypes.array
	};
	
	// Todo.jsx
	
	var Todo = function Todo(props, context) {
	  return _react2.default.createElement(
	    'div',
	    { style: {
	        textDecoration: context.completed ? 'line-through' : 'none',
	        cursor: 'pointer'
	      }, onClick: function onClick() {
	        handleTodoClick(context);
	      } },
	    context.text
	  );
	};
	
	Todo.contextTypes = {
	  set: _react.PropTypes.func,
	  text: _react.PropTypes.string,
	  completed: _react.PropTypes.bool
	};
	
	var handleTodoClick = function handleTodoClick(context) {
	  context.set(_extends({}, context, {
	    completed: !context.completed
	  }));
	};
	
	// AddTodo.jsx
	
	var AddTodo = function AddTodo(props, context) {
	  return _react2.default.createElement(
	    'form',
	    { onSubmit: function onSubmit(e) {
	        e.preventDefault();
	        var node = document.querySelector('input', e.target);
	        var text = node.value.trim();
	        if (!text) {
	          return;
	        }
	        handleAddTodoSubmit(context, text);
	        node.value = '';
	        node.focus();
	      } },
	    _react2.default.createElement('input', { type: 'text' }),
	    _react2.default.createElement(
	      'button',
	      { type: 'submit' },
	      'Add'
	    )
	  );
	};
	
	AddTodo.contextTypes = {
	  set: _react.PropTypes.func,
	  list: _react.PropTypes.array
	};
	
	var handleAddTodoSubmit = function handleAddTodoSubmit(context, text) {
	  context.set({
	    list: [].concat(_toConsumableArray(context.list), [{
	      text: text,
	      completed: false
	    }])
	  });
	};
	
	// Footer.jsx
	
	var Footer = function Footer(props, context) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'all active completed'
	  );
	};
	
	Footer.contextTypes = {
	  list: _react.PropTypes.array
	};
	
	// App.jsx
	
	var context = {
	  list: [{
	    text: 'todo1',
	    completed: true
	  }]
	};
	
	var App = function App() {
	  return _react2.default.createElement(
	    _index2.default,
	    { context: context },
	    _react2.default.createElement(TodoList, null)
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('react-content'));

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLXRvZG9saXN0Lm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBTUEsS0FBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLEtBQUQsRUFBUSxPQUFSO1VBRWpCOzs7S0FFSSxRQUFRLElBQVIsQ0FBYSxHQUFiLENBQWlCO2NBQ2Y7O1dBQUssU0FBUyxJQUFULEVBQUw7U0FDRSw4QkFBQyxJQUFELE9BREY7O01BRGUsQ0FGckI7S0FRRSw4QkFBQyxPQUFELE9BUkY7S0FTRSw4QkFBQyxNQUFELE9BVEY7O0VBRmlCOztBQWNqQixVQUFTLFlBQVQsR0FBd0I7QUFDdEIsU0FBTSxpQkFBVSxLQUFWO0VBRFI7Ozs7QUFRQSxLQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsS0FBRCxFQUFRLE9BQVI7VUFFYjs7T0FBSyxPQUFPO0FBQ1YseUJBQWdCLFFBQVEsU0FBUixHQUFvQixjQUFwQixHQUFxQyxNQUFyQztBQUNoQixpQkFBTyxTQUFQO1FBRkcsRUFHQSxTQUFTLG1CQUFNO0FBQ2hCLHlCQUFnQixPQUFoQixFQURnQjtRQUFOLEVBSGQ7S0FPRyxRQUFRLElBQVI7O0VBVFU7O0FBYWIsTUFBSyxZQUFMLEdBQW9CO0FBQ2xCLFFBQUssaUJBQVUsSUFBVjtBQUNMLFNBQU0saUJBQVUsTUFBVjtBQUNOLGNBQVcsaUJBQVUsSUFBVjtFQUhiOztBQU1BLEtBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsT0FBRCxFQUFhO0FBQ25DLFdBQVEsR0FBUixjQUNLO0FBQ0gsZ0JBQVcsQ0FBQyxRQUFRLFNBQVI7S0FGZCxFQURtQztFQUFiOzs7O0FBV3hCLEtBQU0sVUFBVSxTQUFWLE9BQVUsQ0FBQyxLQUFELEVBQVEsT0FBUjtVQUVoQjs7T0FBTSxVQUFVLHFCQUFLO0FBQ25CLFdBQUUsY0FBRixHQURtQjtBQUVuQixhQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLEVBQUUsTUFBRixDQUF2QyxDQUZhO0FBR25CLGFBQU0sT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQVAsQ0FIYTtBQUluQixhQUFJLENBQUMsSUFBRCxFQUFNO0FBQ1Isa0JBRFE7VUFBVjtBQUdBLDZCQUFvQixPQUFwQixFQUE2QixJQUE3QixFQVBtQjtBQVFuQixjQUFLLEtBQUwsR0FBYSxFQUFiLENBUm1CO0FBU25CLGNBQUssS0FBTCxHQVRtQjtRQUFMLEVBQWhCO0tBV0UseUNBQU8sTUFBSyxNQUFMLEVBQVAsQ0FYRjtLQVlFOztTQUFRLE1BQUssUUFBTCxFQUFSOztNQVpGOztFQUZnQjs7QUFtQmhCLFNBQVEsWUFBUixHQUF1QjtBQUNyQixRQUFLLGlCQUFVLElBQVY7QUFDTCxTQUFNLGlCQUFVLEtBQVY7RUFGUjs7QUFLQSxLQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFtQjtBQUM3QyxXQUFRLEdBQVIsQ0FBWTtBQUNWLHdDQUFVLFFBQVEsSUFBUixJQUFjO0FBQ3RCLGlCQURzQjtBQUV0QixrQkFBVyxLQUFYO1FBRkY7SUFERixFQUQ2QztFQUFuQjs7OztBQWE1QixLQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsS0FBRCxFQUFRLE9BQVI7VUFFZjs7Ozs7RUFGZTs7QUFVZixRQUFPLFlBQVAsR0FBc0I7QUFDcEIsU0FBTSxpQkFBVSxLQUFWO0VBRFI7Ozs7QUFRQSxLQUFNLFVBQVU7QUFDZCxTQUFNLENBQUM7QUFDTCxXQUFLLE9BQUw7QUFDQSxnQkFBVyxJQUFYO0lBRkksQ0FBTjtFQURJOztBQU9OLEtBQU0sTUFBTSxTQUFOLEdBQU07VUFBTTs7T0FBSyxTQUFTLE9BQVQsRUFBTDtLQUNoQiw4QkFBQyxRQUFELE9BRGdCOztFQUFOOztBQUlaLG9CQUFTLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUVBLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUZBLEUiLCJmaWxlIjoiZXhhbXBsZXMvZXhhbXBsZS10b2RvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJjZiBmcm9tICdpbmRleC5qcyc7XG5cblxuXG4vLyBUb2RvTGlzdC5qc3hcblxuY29uc3QgVG9kb0xpc3QgPSAocHJvcHMsIGNvbnRleHQpID0+IFxuXG48ZGl2PlxuICB7XG4gICAgY29udGV4dC5saXN0Lm1hcChpdGVtID0+IFxuICAgICAgPFJjZiBjb250ZXh0PXtpdGVtfT5cbiAgICAgICAgPFRvZG8gLz5cbiAgICAgIDwvUmNmPlxuICAgIClcbiAgfVxuICA8QWRkVG9kbyAvPlxuICA8Rm9vdGVyIC8+XG48L2Rpdj5cblxuVG9kb0xpc3QuY29udGV4dFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXksXG59O1xuXG5cblxuLy8gVG9kby5qc3hcblxuY29uc3QgVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4gXG5cbjxkaXYgc3R5bGU9e3tcbiAgdGV4dERlY29yYXRpb246IGNvbnRleHQuY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZScsXG4gIGN1cnNvcjoncG9pbnRlcidcbiAgfX0gb25DbGljaz17KCkgPT4ge1xuICAgIGhhbmRsZVRvZG9DbGljayhjb250ZXh0KTtcbiAgfX0+XG5cbiAge2NvbnRleHQudGV4dH1cblxuPC9kaXY+XG5cblRvZG8uY29udGV4dFR5cGVzID0ge1xuICBzZXQ6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuY29uc3QgaGFuZGxlVG9kb0NsaWNrID0gKGNvbnRleHQpID0+IHtcbiAgY29udGV4dC5zZXQoe1xuICAgIC4uLmNvbnRleHQsXG4gICAgY29tcGxldGVkOiAhY29udGV4dC5jb21wbGV0ZWQsXG4gIH0pO1xufTtcblxuXG5cbi8vIEFkZFRvZG8uanN4XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IFxuXG48Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JywgZS50YXJnZXQpO1xuICBjb25zdCB0ZXh0ID0gbm9kZS52YWx1ZS50cmltKClcbiAgaWYgKCF0ZXh0KXtcbiAgICByZXR1cm47XG4gIH1cbiAgaGFuZGxlQWRkVG9kb1N1Ym1pdChjb250ZXh0LCB0ZXh0KTtcbiAgbm9kZS52YWx1ZSA9ICcnO1xuICBub2RlLmZvY3VzKCk7XG59fT5cbiAgPGlucHV0IHR5cGU9J3RleHQnIC8+XG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgIEFkZFxuICA8L2J1dHRvbj5cbjwvZm9ybT5cblxuQWRkVG9kby5jb250ZXh0VHlwZXMgPSB7XG4gIHNldDogUHJvcFR5cGVzLmZ1bmMsXG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cbmNvbnN0IGhhbmRsZUFkZFRvZG9TdWJtaXQgPSAoY29udGV4dCwgdGV4dCkgPT4ge1xuICBjb250ZXh0LnNldCh7XG4gICAgbGlzdDogWy4uLmNvbnRleHQubGlzdCwge1xuICAgICAgdGV4dCxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfV0sXG4gIH0pO1xufTtcblxuXG5cbi8vIEZvb3Rlci5qc3hcblxuY29uc3QgRm9vdGVyID0gKHByb3BzLCBjb250ZXh0KSA9PiBcblxuPGRpdj5cblxuICBhbGxcbiAgYWN0aXZlXG4gIGNvbXBsZXRlZFxuXG48L2Rpdj5cblxuRm9vdGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuXG5cbi8vIEFwcC5qc3hcblxuY29uc3QgY29udGV4dCA9IHtcbiAgbGlzdDogW3tcbiAgICB0ZXh0Oid0b2RvMScsXG4gICAgY29tcGxldGVkOiB0cnVlLFxuICB9XSxcbn07XG5cbmNvbnN0IEFwcCA9ICgpID0+IDxSY2YgY29udGV4dD17Y29udGV4dH0+XG4gIDxUb2RvTGlzdCAvPlxuPC9SY2Y+XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+XG4gICxcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZXhhbXBsZS10b2RvbGlzdC5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=