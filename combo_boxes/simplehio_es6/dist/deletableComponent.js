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

  // ES6 arrow functions won't transpile correctly!!!
  function DeletableComponent(Component) {
    return class extends _react2.default.Component {
      render() {
        return _react2.default.createElement(
          'div',
          { id: 'deletableUserDiv{this.props.data.id}' },
          _react2.default.createElement(Component, this.props),
          _react2.default.createElement(
            'a',
            { style: { cursor: "pointer" }, onClick: this.props.callbacks.delete },
            'REMOVE'
          )
        );
      }
    };
  }

  exports.default = DeletableComponent;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9kZWxldGFibGVDb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkRlbGV0YWJsZUNvbXBvbmVudCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiY3Vyc29yIiwiY2FsbGJhY2tzIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBLFdBQVNBLGtCQUFULENBQTRCQyxTQUE1QixFQUF1QztBQUNyQyxXQUFPLGNBQWMsZ0JBQU1BLFNBQXBCLENBQThCO0FBQ25DQyxlQUFTO0FBQ1AsZUFBTztBQUFBO0FBQUEsWUFBSyxJQUFHLHNDQUFSO0FBQ0wsd0NBQUMsU0FBRCxFQUFlLEtBQUtDLEtBQXBCLENBREs7QUFFTDtBQUFBO0FBQUEsY0FBRyxPQUFPLEVBQUNDLFFBQU8sU0FBUixFQUFWLEVBQThCLFNBQVMsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLENBQXFCQyxNQUE1RDtBQUFBO0FBQUE7QUFGSyxTQUFQO0FBSUQ7QUFOa0MsS0FBckM7QUFRRDs7b0JBRWNOLGtCIiwiZmlsZSI6ImRlbGV0YWJsZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBsZXRlbHkgc3RhdGVsZXNzXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBFUzYgYXJyb3cgZnVuY3Rpb25zIHdvbid0IHRyYW5zcGlsZSBjb3JyZWN0bHkhISFcclxuZnVuY3Rpb24gRGVsZXRhYmxlQ29tcG9uZW50KENvbXBvbmVudCkge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2IGlkPVwiZGVsZXRhYmxlVXNlckRpdnt0aGlzLnByb3BzLmRhdGEuaWR9XCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICA8YSBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FsbGJhY2tzLmRlbGV0ZX0+UkVNT1ZFPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0YWJsZUNvbXBvbmVudDsiXX0=