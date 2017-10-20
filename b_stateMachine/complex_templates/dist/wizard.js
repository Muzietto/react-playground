define(['exports', 'react', './body', './footer'], function (exports, _react, _body, _footer) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = wizard;

    var _react2 = _interopRequireDefault(_react);

    var _body2 = _interopRequireDefault(_body);

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

        return _react2.default.createElement(
            'div',
            { className: 'wizard' },
            _react2.default.createElement(_body2.default, bodyProps),
            _react2.default.createElement(_footer2.default, footer)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC93aXphcmQuanMiXSwibmFtZXMiOlsid2l6YXJkIiwiZm9vdGVyIiwiYm9keVByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU93QkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxNQUFULE9BQXdDO0FBQUEsWUFBeEIsRUFBQ0MsTUFBRCxFQUF3QjtBQUFBLFlBQVpDLFNBQVk7O0FBQ25ELGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxRQUFmO0FBQ0ksMERBQVVBLFNBQVYsQ0FESjtBQUVJLDREQUFZRCxNQUFaO0FBRkosU0FESjtBQU1IIiwiZmlsZSI6IndpemFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJvZHkgZnJvbSAnLi9ib2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXphcmQoe2Zvb3RlciwgLi4uYm9keVByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2l6YXJkXCI+XG4gICAgICAgICAgICA8Qm9keSB7Li4uYm9keVByb3BzfS8+XG4gICAgICAgICAgICA8Rm9vdGVyIHsuLi5mb290ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==