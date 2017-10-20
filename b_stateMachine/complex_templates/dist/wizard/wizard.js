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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvd2l6YXJkLmpzIl0sIm5hbWVzIjpbIndpemFyZCIsImZvb3RlciIsImJvZHlQcm9wcyIsImJvZHlfcmVuZGVyZXIiLCJib2R5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU13QkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsTUFBVCxPQUF3QztBQUFBLFlBQXhCLEVBQUNDLE1BQUQsRUFBd0I7QUFBQSxZQUFaQyxTQUFZOztBQUNuRCxZQUFJQyxnQkFBZ0JELFVBQVVFLElBQVYsQ0FBZUQsYUFBbkM7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsUUFBZjtBQUNLQSwwQkFBY0QsU0FBZCxDQURMO0FBRUksNERBQVlELE1BQVo7QUFGSixTQURKO0FBTUgiLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l6YXJkKHtmb290ZXIsIC4uLmJvZHlQcm9wc30pIHtcbiAgICBsZXQgYm9keV9yZW5kZXJlciA9IGJvZHlQcm9wcy5ib2R5LmJvZHlfcmVuZGVyZXI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXphcmRcIj5cbiAgICAgICAgICAgIHtib2R5X3JlbmRlcmVyKGJvZHlQcm9wcyl9XG4gICAgICAgICAgICA8Rm9vdGVyIHsuLi5mb290ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==