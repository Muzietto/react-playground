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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvd2l6YXJkLmpzIl0sIm5hbWVzIjpbIndpemFyZCIsImZvb3RlciIsImJvZHlQcm9wcyIsImJvZHlfcmVuZGVyZXIiLCJib2R5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU13QkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsTUFBVCxPQUF3QztBQUFBLFlBQXhCLEVBQUNDLE1BQUQsRUFBd0I7QUFBQSxZQUFaQyxTQUFZOztBQUVuRCxZQUFJQyxnQkFBZ0JELFVBQVVFLElBQVYsQ0FBZUQsYUFBbkM7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFFBQWY7QUFDS0EsMEJBQWNELFNBQWQsQ0FETDtBQUVJLDREQUFZRCxNQUFaO0FBRkosU0FESjtBQU1IIiwiZmlsZSI6IndpemFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpemFyZCh7Zm9vdGVyLCAuLi5ib2R5UHJvcHN9KSB7XG5cbiAgICBsZXQgYm9keV9yZW5kZXJlciA9IGJvZHlQcm9wcy5ib2R5LmJvZHlfcmVuZGVyZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpemFyZFwiPlxuICAgICAgICAgICAge2JvZHlfcmVuZGVyZXIoYm9keVByb3BzKX1cbiAgICAgICAgICAgIDxGb290ZXIgey4uLmZvb3Rlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19