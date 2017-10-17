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
                    handler.name
                );
            })
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9kc2wuanMiXSwibmFtZXMiOlsiY2hvaWNlIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaG9pY2VzIiwidGVtcGxhdGUiLCJkZWZhdWx0VGVtcGxhdGUiLCJfcmVuZGVyIiwiaGFuZGxlcnMiLCJyZW5kZXIiLCJtYXAiLCJoYW5kbGVyIiwiaW5kZXgiLCJjdXJzb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU93QkEsTTs7Ozs7Ozs7Ozs7O0FBRnhCLFVBQU1DLE9BQU9DLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjs7QUFFZSxhQUFTSCxNQUFULENBQWdCSSxPQUFoQixFQUF5QkMsUUFBekIsRUFBbUM7QUFDOUNBLG1CQUFXQSxZQUFZQyxlQUF2Qjs7QUFFQUMsZ0JBQVFILE9BQVIsRUFBaUJDLFFBQWpCO0FBQ0g7O0FBRUQsYUFBU0UsT0FBVCxDQUFpQkMsUUFBakIsRUFBMkJILFFBQTNCLEVBQXFDO0FBQ2pDLDJCQUFTSSxNQUFULENBQWdCSixTQUFTRyxRQUFULENBQWhCLEVBQW9DUCxJQUFwQztBQUNIOztBQUVELGFBQVNLLGVBQVQsQ0FBeUJFLFFBQXpCLEVBQW1DO0FBQy9CLGVBQ0k7QUFBQTtBQUFBO0FBRVFBLHFCQUFTRSxHQUFULENBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQzdCLHVCQUFPO0FBQUE7QUFBQTtBQUNILCtCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgsNkJBQUtELEtBRkY7QUFHSCxpQ0FBU0QsT0FITjtBQUdnQkEsNEJBQVFHO0FBSHhCLGlCQUFQO0FBSUgsYUFMRDtBQUZSLFNBREo7QUFZSCIsImZpbGUiOiJkc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hvaWNlKGNob2ljZXMsIHRlbXBsYXRlKSB7XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGU7XG5cbiAgICBfcmVuZGVyKGNob2ljZXMsIHRlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gX3JlbmRlcihoYW5kbGVycywgdGVtcGxhdGUpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIodGVtcGxhdGUoaGFuZGxlcnMpLCByb290KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFRlbXBsYXRlKGhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5tYXAoKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJ9PntoYW5kbGVyLm5hbWV9PC9oMj47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0=