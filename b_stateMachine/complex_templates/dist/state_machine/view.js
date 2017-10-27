define(['exports', 'react', 'react-dom'], function (exports, _react, _reactDom) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = choice;

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function choice(choices, template) {
        _render(choices, template);
        return null;
    }

    function _render(handlers, template) {
        const root = document.getElementById('complex_templates_container');

        _reactDom2.default.render(template(handlers), root);
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3ZpZXcuanMiXSwibmFtZXMiOlsiY2hvaWNlIiwiY2hvaWNlcyIsInRlbXBsYXRlIiwiX3JlbmRlciIsImhhbmRsZXJzIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztzQkFHd0JBLE07Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLE1BQVQsQ0FBZ0JDLE9BQWhCLEVBQXlCQyxRQUF6QixFQUFtQztBQUM3Q0MsZ0JBQVFGLE9BQVIsRUFBaUJDLFFBQWpCO0FBQ0EsZUFBTyxJQUFQO0FBQ0o7O0FBRUQsYUFBU0MsT0FBVCxDQUFpQkMsUUFBakIsRUFBMkJGLFFBQTNCLEVBQXFDO0FBQ2pDLGNBQU1HLE9BQU9DLFNBQVNDLGNBQVQsQ0FBd0IsNkJBQXhCLENBQWI7O0FBRUEsMkJBQVNDLE1BQVQsQ0FBZ0JOLFNBQVNFLFFBQVQsQ0FBaEIsRUFBb0NDLElBQXBDO0FBQ0giLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hvaWNlKGNob2ljZXMsIHRlbXBsYXRlKSB7XG4gICAgIF9yZW5kZXIoY2hvaWNlcywgdGVtcGxhdGUpO1xuICAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gX3JlbmRlcihoYW5kbGVycywgdGVtcGxhdGUpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXhfdGVtcGxhdGVzX2NvbnRhaW5lcicpO1xuXG4gICAgUmVhY3RET00ucmVuZGVyKHRlbXBsYXRlKGhhbmRsZXJzKSwgcm9vdCk7XG59XG4iXX0=