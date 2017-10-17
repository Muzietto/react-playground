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

    const root = document.getElementById('container');

    function choice(choices, template) {
        template = template || defaultTemplate;

        _render(choices, template);
    }

    function _render(handlers, template) {
        _reactDom2.default.render(template(handlers), root);
    }

    function defaultTemplate(handlers) {
        return _react2.default.createElement(
            'div',
            null,
            handlers.map((handler, index) => {
                return _react2.default.createElement(
                    'h2',
                    {
                        style: { cursor: 'pointer' },
                        key: index,
                        onClick: handler },
                    handler.name || 'noname'
                );
            })
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9kc2wuanMiXSwibmFtZXMiOlsiY2hvaWNlIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaG9pY2VzIiwidGVtcGxhdGUiLCJkZWZhdWx0VGVtcGxhdGUiLCJfcmVuZGVyIiwiaGFuZGxlcnMiLCJyZW5kZXIiLCJtYXAiLCJoYW5kbGVyIiwiaW5kZXgiLCJjdXJzb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU93QkEsTTs7Ozs7Ozs7Ozs7O0FBRnhCLFVBQU1DLE9BQU9DLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjs7QUFFZSxhQUFTSCxNQUFULENBQWdCSSxPQUFoQixFQUF5QkMsUUFBekIsRUFBbUM7QUFDOUNBLG1CQUFXQSxZQUFZQyxlQUF2Qjs7QUFFQUMsZ0JBQVFILE9BQVIsRUFBaUJDLFFBQWpCO0FBQ0g7O0FBRUQsYUFBU0UsT0FBVCxDQUFpQkMsUUFBakIsRUFBMkJILFFBQTNCLEVBQXFDO0FBQ2pDLDJCQUFTSSxNQUFULENBQWdCSixTQUFTRyxRQUFULENBQWhCLEVBQW9DUCxJQUFwQztBQUNIOztBQUVELGFBQVNLLGVBQVQsQ0FBeUJFLFFBQXpCLEVBQW1DO0FBQy9CLGVBQ0k7QUFBQTtBQUFBO0FBRVFBLHFCQUFTRSxHQUFULENBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQzdCLHVCQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgsNkJBQUtELEtBRkY7QUFHSCxpQ0FBU0QsT0FITjtBQUdnQkEsNEJBQVFHLElBQVIsSUFBZ0I7QUFIaEMsaUJBQVA7QUFJSCxhQUxEO0FBRlIsU0FESjtBQVlIIiwiZmlsZSI6ImRzbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaG9pY2UoY2hvaWNlcywgdGVtcGxhdGUpIHtcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZTtcblxuICAgIF9yZW5kZXIoY2hvaWNlcywgdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyKGhhbmRsZXJzLCB0ZW1wbGF0ZSkge1xuICAgIFJlYWN0RE9NLnJlbmRlcih0ZW1wbGF0ZShoYW5kbGVycyksIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0VGVtcGxhdGUoaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLm1hcCgoaGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlcn0+e2hhbmRsZXIubmFtZSB8fCAnbm9uYW1lJ308L2gyPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdfQ==