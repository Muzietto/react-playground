define(['exports', 'react', './footer'], function (exports, _react, _footer) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = wizard;

    var _react2 = _interopRequireDefault(_react);

    var _footer2 = _interopRequireDefault(_footer);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    function wizard(_ref) {
        let { footer } = _ref,
            bodyProps = _objectWithoutProperties(_ref, ['footer']);

        let body_renderer = bodyProps.body.body_renderer;
        return _react2.default.createElement(
            'div',
            { className: 'wizard' },
            body_renderer(bodyProps),
            _react2.default.createElement(_footer2.default, footer)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC93aXphcmQuanMiXSwibmFtZXMiOlsid2l6YXJkIiwiZm9vdGVyIiwiYm9keVByb3BzIiwiYm9keV9yZW5kZXJlciIsImJvZHkiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBTXdCQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxNQUFULE9BQXdDO0FBQUEsWUFBeEIsRUFBQ0MsTUFBRCxFQUF3QjtBQUFBLFlBQVpDLFNBQVk7O0FBQ25ELFlBQUlDLGdCQUFnQkQsVUFBVUUsSUFBVixDQUFlRCxhQUFuQztBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxRQUFmO0FBQ0tBLDBCQUFjRCxTQUFkLENBREw7QUFFSSw0REFBWUQsTUFBWjtBQUZKLFNBREo7QUFNSCIsImZpbGUiOiJ3aXphcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXphcmQoe2Zvb3RlciwgLi4uYm9keVByb3BzfSkge1xuICAgIGxldCBib2R5X3JlbmRlcmVyID0gYm9keVByb3BzLmJvZHkuYm9keV9yZW5kZXJlcjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpemFyZFwiPlxuICAgICAgICAgICAge2JvZHlfcmVuZGVyZXIoYm9keVByb3BzKX1cbiAgICAgICAgICAgIDxGb290ZXIgey4uLmZvb3Rlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19