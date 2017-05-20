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
          { id: 'deletableUserDiv' + this.props.data.id },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9oaWdoLW9yZGVyL2RlbGV0YWJsZUNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJkYXRhIiwiaWQiLCJjdXJzb3IiLCJjYWxsYmFja3MiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0EsV0FBU0Esa0JBQVQsQ0FBNEJDLFNBQTVCLEVBQXVDO0FBQ3JDLFdBQU8sY0FBYyxnQkFBTUEsU0FBcEIsQ0FBOEI7QUFDbkNDLGVBQVM7QUFDUCxlQUFPO0FBQUE7QUFBQSxZQUFLLElBQUkscUJBQXFCLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsRUFBOUM7QUFDTCx3Q0FBQyxTQUFELEVBQWUsS0FBS0YsS0FBcEIsQ0FESztBQUVMO0FBQUE7QUFBQSxjQUFHLE9BQU8sRUFBQ0csUUFBTyxTQUFSLEVBQVYsRUFBOEIsU0FBUyxLQUFLSCxLQUFMLENBQVdJLFNBQVgsQ0FBcUJDLE1BQTVEO0FBQUE7QUFBQTtBQUZLLFNBQVA7QUFJRDtBQU5rQyxLQUFyQztBQVFEOztvQkFFY1Isa0IiLCJmaWxlIjoiZGVsZXRhYmxlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcGxldGVseSBzdGF0ZWxlc3NcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEVTNiBhcnJvdyBmdW5jdGlvbnMgd29uJ3QgdHJhbnNwaWxlIGNvcnJlY3RseSEhIVxyXG5mdW5jdGlvbiBEZWxldGFibGVDb21wb25lbnQoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDxkaXYgaWQ9eydkZWxldGFibGVVc2VyRGl2JyArIHRoaXMucHJvcHMuZGF0YS5pZH0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICA8YSBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FsbGJhY2tzLmRlbGV0ZX0+UkVNT1ZFPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0YWJsZUNvbXBvbmVudDsiXX0=