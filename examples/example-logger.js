webpackJsonp([4],[
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
	        e.setStore = function (obj) {
	          console.log(e.target);
	          console.log(name + ' ' + key);
	          console.log(e.store);
	          setStore(obj);
	          console.log(e.store);
	        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9leGFtcGxlLWxvZ2dlci5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTTs7Ozs7Ozs7Ozs7Ozs7Z01BQ0osY0FBYyxZQUFNO0FBQ2xCLGFBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFEa0I7TUFBTjs7O2dCQURWOzs4QkFJSztBQUNQLGNBQU87Ozs7U0FJSixLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCO1NBRUQ7O2FBQVEsU0FBUyxLQUFLLFdBQUwsRUFBakI7O1VBTks7UUFBUCxDQURPOzs7O1VBSkw7OztLQXFCQTs7Ozs7Ozs7Ozs7OEJBQ0s7QUFDUCxjQUFPOzs7O1NBSUosS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQjtRQUpILENBRE87Ozs7VUFETDs7O0FBY04sS0FBTSxTQUFTLFNBQVQsTUFBUyxRQUFTO0FBQ3RCLE9BQU0sTUFBTSxFQUFOLENBRGdCOzs4QkFFWDtBQUNULFNBQUksSUFBSixJQUFZLEVBQVo7QUFDQSxTQUFNLE1BQU0sTUFBTSxJQUFOLENBQU47O2tDQUNLO0FBQ1QsV0FBTSxPQUFPLElBQUksR0FBSixDQUFQO0FBQ04sV0FBSSxJQUFKLEVBQVUsR0FBVixJQUFpQixPQUFPLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkIsWUFBVztBQUNyRCxhQUFNLElBQUksVUFBVSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsQ0FBZCxDQUQrQztBQUVyRCxhQUFNLFdBQVcsRUFBRSxRQUFGLENBRm9DO0FBR3JELFdBQUUsUUFBRixHQUFhLGVBQU87QUFDbEIsbUJBQVEsR0FBUixDQUFZLEVBQUUsTUFBRixDQUFaLENBRGtCO0FBRWxCLG1CQUFRLEdBQVIsQ0FBWSxPQUFPLEdBQVAsR0FBYSxHQUFiLENBQVosQ0FGa0I7QUFHbEIsbUJBQVEsR0FBUixDQUFZLEVBQUUsS0FBRixDQUFaLENBSGtCO0FBSWxCLG9CQUFTLEdBQVQsRUFKa0I7QUFLbEIsbUJBQVEsR0FBUixDQUFZLEVBQUUsS0FBRixDQUFaLENBTGtCO1VBQVAsQ0FId0M7QUFVckQsZ0JBQU8sc0JBQVEsU0FBUixDQUFQLENBVnFEO1FBQVgsR0FXeEMsSUFYVzs7O0FBRm5CLFVBQUssSUFBTSxHQUFOLElBQWEsR0FBbEIsRUFBc0I7Y0FBWCxLQUFXO01BQXRCO0tBTG9COztBQUV0QixRQUFLLElBQU0sSUFBTixJQUFjLEtBQW5CLEVBQTBCO1dBQWYsTUFBZTtJQUExQjtBQW1CQSxVQUFPLEdBQVAsQ0FyQnNCO0VBQVQ7O0FBd0JmLEtBQUksUUFBUTtBQUNWLFdBQVE7QUFDTixRQUFHLENBQUg7QUFDQSxZQUFPLGVBQUMsSUFBRCxFQUFPLENBQVA7Y0FBYztBQUNuQixZQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsR0FBWSxJQUFaOztNQURFO0lBRlQ7RUFERTs7QUFTSixTQUFRLE9BQU8sS0FBUCxDQUFSOztBQUVBLG9CQUFTLE1BQVQsQ0FBZ0I7OztHQUVkOztPQUFLLE9BQU8sS0FBUCxFQUFMO0tBQ0UsOEJBQUMsQ0FBRCxPQURGO0tBRUUsOEJBQUMsQ0FBRCxPQUZGO0lBRmM7R0FPZDs7T0FBSyxPQUFPLEtBQVAsRUFBTDtLQUNFLDhCQUFDLENBQUQsT0FERjtJQVBjO0VBQWhCLEVBYUEsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBYkEsRSIsImZpbGUiOiJleGFtcGxlcy9leGFtcGxlLWxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBpc1Byb21pc2UgZnJvbSAnaXMtcHJvbWlzZSc7XG5pbXBvcnQgUmNmIGZyb20gJ2luZGV4LmpzJztcblxuY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc3RvcmUxLm1pbnVzKDIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgQTpcblxuICAgICAge3RoaXMucHJvcHMuc3RvcmUxLmF9XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIGNsaWNrXG4gICAgICA8L2J1dHRvbj5cblxuICAgIDwvZGl2PjtcbiAgfVxuXG59XG5cblxuY2xhc3MgQiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgQjpcblxuICAgICAge3RoaXMucHJvcHMuc3RvcmUxLmF9IFxuXG4gICAgPC9kaXY+O1xuICB9XG5cbn1cblxuXG5jb25zdCBsb2dnZXIgPSBzdG9yZSA9PiB7XG4gIGNvbnN0IG1hcCA9IHt9O1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3RvcmUpIHtcbiAgICBtYXBbbmFtZV0gPSB7fTtcbiAgICBjb25zdCBvYmogPSBzdG9yZVtuYW1lXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmope1xuICAgICAgY29uc3QgaXRlbSA9IG9ialtrZXldO1xuICAgICAgbWFwW25hbWVdW2tleV0gPSB0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJyA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGUgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IHNldFN0b3JlID0gZS5zZXRTdG9yZTtcbiAgICAgICAgICBlLnNldFN0b3JlID0gb2JqID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyAnICcgKyBrZXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5zdG9yZSk7XG4gICAgICAgICAgICBzZXRTdG9yZShvYmopO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5zdG9yZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaXRlbSguLi5hcmd1bWVudHMpO1xuICAgICAgICB9IDogaXRlbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxubGV0IHN0b3JlID0ge1xuICBzdG9yZTE6IHtcbiAgICBhOiAxLFxuICAgIG1pbnVzOiAoc3RlcCwgZSkgPT4gKHtcbiAgICAgIGE6IGUuc3RvcmUuYSAtIHN0ZXAsXG4gICAgfSksXG4gIH0sXG59O1xuXG5zdG9yZSA9IGxvZ2dlcihzdG9yZSk7XG5cblJlYWN0RE9NLnJlbmRlcig8ZGl2PlxuXG4gIDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgICA8QSAvPlxuICAgIDxCIC8+XG4gIDwvUmNmPlxuXG4gIDxSY2Ygc3RvcmU9e3N0b3JlfT5cbiAgICA8QiAvPlxuICA8L1JjZj5cblxuPC9kaXY+LCBcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9leGFtcGxlLWxvZ2dlci5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=