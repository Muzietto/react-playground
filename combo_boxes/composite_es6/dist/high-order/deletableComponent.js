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
    return class extends _react2.default.Component {
      render() {
        //return <div id={'deletableComponentDiv' + this.props.data.id}}>
        return _react2.default.createElement(
          'div',
          null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9oaWdoLW9yZGVyL2RlbGV0YWJsZUNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJjdXJzb3IiLCJjYWxsYmFja3MiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0EsV0FBU0Esa0JBQVQsQ0FBNEJDLFNBQTVCLEVBQXVDO0FBQ3JDLFdBQU8sY0FBYyxnQkFBTUEsU0FBcEIsQ0FBOEI7QUFDbkNDLGVBQVM7QUFDUDtBQUNBLGVBQU87QUFBQTtBQUFBO0FBQ0wsd0NBQUMsU0FBRCxFQUFlLEtBQUtDLEtBQXBCLENBREs7QUFFTDtBQUFBO0FBQUEsY0FBRyxPQUFPLEVBQUNDLFFBQU8sU0FBUixFQUFWO0FBQ0UsdUJBQVMsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLENBQXFCQyxNQURoQztBQUFBO0FBQUE7QUFGSyxTQUFQO0FBS0Q7QUFSa0MsS0FBckM7QUFVRDs7b0JBRWNOLGtCIiwiZmlsZSI6ImRlbGV0YWJsZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBsZXRlbHkgc3RhdGVsZXNzXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBFUzYgYXJyb3cgZnVuY3Rpb25zIHdvbid0IHRyYW5zcGlsZSBjb3JyZWN0bHkuIEdvdHRhIHVzZSBhIHN0YW5kYXJkIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIERlbGV0YWJsZUNvbXBvbmVudChDb21wb25lbnQpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAvL3JldHVybiA8ZGl2IGlkPXsnZGVsZXRhYmxlQ29tcG9uZW50RGl2JyArIHRoaXMucHJvcHMuZGF0YS5pZH19PlxyXG4gICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICAgIDxhIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FsbGJhY2tzLmRlbGV0ZX0+UkVNT1ZFPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0YWJsZUNvbXBvbmVudDsiXX0=