webpackJsonp([6],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(13);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(12);
	
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
	
	var logger = function logger(store) {
	  var map = {};
	
	  var _loop = function _loop(name) {
	    map[name] = {};
	    var obj = store[name];
	
	    var _loop2 = function _loop2(key) {
	      var item = obj[key];
	      map[name][key] = typeof item === 'function' ? function () {
	        var e = arguments[arguments.length - 1];
	        var setStore = e.setStore;
	        if (!e.setStore.logger) {
	          e.setStore = function (obj) {
	            console.log(name + ' ' + key);
	            console.log(e.store);
	            setStore(obj);
	            console.log(e.store);
	          };
	          e.setStore.logger = true;
	        }
	        return item.apply(undefined, arguments);
	      } : item;
	    };
	
	    for (var key in obj) {
	      _loop2(key);
	    }
	  };
	
	  for (var name in store) {
	    _loop(name);
	  }
	  return map;
	};
	
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
	
	store = logger(store);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWxvZ2dlci5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU07Ozs7Ozs7Ozs7Ozs7O2dNQUNKLGNBQWMsWUFBTTtBQUNsQixhQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEtBQWxCLENBQXdCLENBQXhCLEVBRGtCO01BQU47OztnQkFEVjs7OEJBSUs7QUFDUCxjQUFPOzs7O1NBSUosS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQjtTQUVEOzthQUFRLFNBQVMsS0FBSyxXQUFMLEVBQWpCOztVQU5LO1FBQVAsQ0FETzs7OztVQUpMOzs7S0FxQkE7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FBTzs7OztTQUlKLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsQ0FBbEI7UUFKSCxDQURPOzs7O1VBREw7OztBQWNOLEtBQU0sU0FBUyxTQUFULE1BQVMsUUFBUztBQUN0QixPQUFNLE1BQU0sRUFBTixDQURnQjs7OEJBRVg7QUFDVCxTQUFJLElBQUosSUFBWSxFQUFaO0FBQ0EsU0FBTSxNQUFNLE1BQU0sSUFBTixDQUFOOztrQ0FDSztBQUNULFdBQU0sT0FBTyxJQUFJLEdBQUosQ0FBUDtBQUNOLFdBQUksSUFBSixFQUFVLEdBQVYsSUFBaUIsT0FBTyxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCLFlBQVc7QUFDckQsYUFBTSxJQUFJLFVBQVUsVUFBVSxNQUFWLEdBQW1CLENBQW5CLENBQWQsQ0FEK0M7QUFFckQsYUFBTSxXQUFXLEVBQUUsUUFBRixDQUZvQztBQUdyRCxhQUFJLENBQUMsRUFBRSxRQUFGLENBQVcsTUFBWCxFQUFtQjtBQUN0QixhQUFFLFFBQUYsR0FBYSxlQUFPO0FBQ2xCLHFCQUFRLEdBQVIsQ0FBWSxPQUFPLEdBQVAsR0FBYSxHQUFiLENBQVosQ0FEa0I7QUFFbEIscUJBQVEsR0FBUixDQUFZLEVBQUUsS0FBRixDQUFaLENBRmtCO0FBR2xCLHNCQUFTLEdBQVQsRUFIa0I7QUFJbEIscUJBQVEsR0FBUixDQUFZLEVBQUUsS0FBRixDQUFaLENBSmtCO1lBQVAsQ0FEUztBQU90QixhQUFFLFFBQUYsQ0FBVyxNQUFYLEdBQW9CLElBQXBCLENBUHNCO1VBQXhCO0FBU0EsZ0JBQU8sc0JBQVEsU0FBUixDQUFQLENBWnFEO1FBQVgsR0FheEMsSUFiVzs7O0FBRm5CLFVBQUssSUFBTSxHQUFOLElBQWEsR0FBbEIsRUFBc0I7Y0FBWCxLQUFXO01BQXRCO0tBTG9COztBQUV0QixRQUFLLElBQU0sSUFBTixJQUFjLEtBQW5CLEVBQTBCO1dBQWYsTUFBZTtJQUExQjtBQXFCQSxVQUFPLEdBQVAsQ0F2QnNCO0VBQVQ7O0FBMEJmLEtBQUksUUFBUTtBQUNWLFdBQVE7QUFDTixRQUFHLENBQUg7QUFDQSxZQUFPLGVBQUMsSUFBRCxFQUFPLENBQVA7Y0FBYztBQUNuQixZQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsR0FBWSxJQUFaOztNQURFO0lBRlQ7RUFERTs7QUFTSixTQUFRLE9BQU8sS0FBUCxDQUFSOztBQUVBLG9CQUFTLE1BQVQsQ0FBZ0I7OztHQUVkOztPQUFLLE9BQU8sS0FBUCxFQUFMO0tBQ0UsOEJBQUMsQ0FBRCxPQURGO0tBRUUsOEJBQUMsQ0FBRCxPQUZGO0lBRmM7R0FPZDs7T0FBSyxPQUFPLEtBQVAsRUFBTDtLQUNFLDhCQUFDLENBQUQsT0FERjtJQVBjO0VBQWhCLEVBYUEsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBYkEsRSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLWxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSY2YgZnJvbSAnaW5kZXguanMnO1xuXG5jbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zdG9yZTEubWludXMoMik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICBBOlxuXG4gICAgICB7dGhpcy5wcm9wcy5zdG9yZTEuYX1cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgY2xpY2tcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+O1xuICB9XG5cbn1cblxuXG5jbGFzcyBCIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICBCOlxuXG4gICAgICB7dGhpcy5wcm9wcy5zdG9yZTEuYX0gXG5cbiAgICA8L2Rpdj47XG4gIH1cblxufVxuXG5cbmNvbnN0IGxvZ2dlciA9IHN0b3JlID0+IHtcbiAgY29uc3QgbWFwID0ge307XG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdG9yZSkge1xuICAgIG1hcFtuYW1lXSA9IHt9O1xuICAgIGNvbnN0IG9iaiA9IHN0b3JlW25hbWVdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iail7XG4gICAgICBjb25zdCBpdGVtID0gb2JqW2tleV07XG4gICAgICBtYXBbbmFtZV1ba2V5XSA9IHR5cGVvZiBpdGVtID09PSAnZnVuY3Rpb24nID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgZSA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3Qgc2V0U3RvcmUgPSBlLnNldFN0b3JlOyAgIFxuICAgICAgICAgIGlmICghZS5zZXRTdG9yZS5sb2dnZXIpIHtcbiAgICAgICAgICAgIGUuc2V0U3RvcmUgPSBvYmogPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgJyAnICsga2V5KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5zdG9yZSk7XG4gICAgICAgICAgICAgIHNldFN0b3JlKG9iaik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuc3RvcmUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGUuc2V0U3RvcmUubG9nZ2VyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGl0ZW0oLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfSA6IGl0ZW07XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbmxldCBzdG9yZSA9IHtcbiAgc3RvcmUxOiB7XG4gICAgYTogMSxcbiAgICBtaW51czogKHN0ZXAsIGUpID0+ICh7XG4gICAgICBhOiBlLnN0b3JlLmEgLSBzdGVwLFxuICAgIH0pLFxuICB9LFxufTtcblxuc3RvcmUgPSBsb2dnZXIoc3RvcmUpO1xuXG5SZWFjdERPTS5yZW5kZXIoPGRpdj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEEgLz5cbiAgICA8QiAvPlxuICA8L1JjZj5cblxuICA8UmNmIHN0b3JlPXtzdG9yZX0+XG4gICAgPEIgLz5cbiAgPC9SY2Y+XG5cbjwvZGl2PiwgXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZXhhbXBsZS1sb2dnZXIubWRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9