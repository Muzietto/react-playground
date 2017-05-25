define(['exports', 'react'], function (exports, _react) {
  // completely stateless
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // ES6 arrow functions won't transpile correctly. Gotta use a standard function
  function DeletableComponent(Component) {
    return class _deletableComponent extends _react2.default.Component {
      render() {
        return _react2.default.createElement(
          'div',
          { id: 'deletableComponentDiv' + this.props.data.id },
          _react2.default.createElement(Component, this.props),
          _react2.default.createElement(
            'a',
            { style: { cursor: "pointer" },
              onClick: this.props.callbacks.delete },
            'REMOVE'
          )
        );
      }
    };
  }

  exports.default = DeletableComponent;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9oaWdoLW9yZGVyL2RlbGV0YWJsZUNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiX2RlbGV0YWJsZUNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiZGF0YSIsImlkIiwiY3Vyc29yIiwiY2FsbGJhY2tzIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBLFdBQVNBLGtCQUFULENBQTRCQyxTQUE1QixFQUF1QztBQUNyQyxXQUFPLE1BQU1DLG1CQUFOLFNBQWtDLGdCQUFNRCxTQUF4QyxDQUFrRDtBQUN2REUsZUFBUztBQUNQLGVBQU87QUFBQTtBQUFBLFlBQUssSUFBSSwwQkFBMEIsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxFQUFuRDtBQUNMLHdDQUFDLFNBQUQsRUFBZSxLQUFLRixLQUFwQixDQURLO0FBRUw7QUFBQTtBQUFBLGNBQUcsT0FBTyxFQUFDRyxRQUFPLFNBQVIsRUFBVjtBQUNFLHVCQUFTLEtBQUtILEtBQUwsQ0FBV0ksU0FBWCxDQUFxQkMsTUFEaEM7QUFBQTtBQUFBO0FBRkssU0FBUDtBQUtEO0FBUHNELEtBQXpEO0FBU0Q7O29CQUVjVCxrQiIsImZpbGUiOiJkZWxldGFibGVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wbGV0ZWx5IHN0YXRlbGVzc1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gRVM2IGFycm93IGZ1bmN0aW9ucyB3b24ndCB0cmFuc3BpbGUgY29ycmVjdGx5LiBHb3R0YSB1c2UgYSBzdGFuZGFyZCBmdW5jdGlvblxyXG5mdW5jdGlvbiBEZWxldGFibGVDb21wb25lbnQoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGNsYXNzIF9kZWxldGFibGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPGRpdiBpZD17J2RlbGV0YWJsZUNvbXBvbmVudERpdicgKyB0aGlzLnByb3BzLmRhdGEuaWR9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICAgICAgPGEgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jYWxsYmFja3MuZGVsZXRlfT5SRU1PVkU8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRhYmxlQ29tcG9uZW50OyJdfQ==