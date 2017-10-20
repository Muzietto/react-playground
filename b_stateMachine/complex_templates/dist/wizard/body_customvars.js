define(['exports', 'react', './core_customvars'], function (exports, _react, _core_customvars) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_customvars;

    var _react2 = _interopRequireDefault(_react);

    var _core_customvars2 = _interopRequireDefault(_core_customvars);

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

    function body_customvars(props) {
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            (0, _core_customvars2.default)(coreprops)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvYm9keV9jdXN0b212YXJzLmpzIl0sIm5hbWVzIjpbImJvZHlfY3VzdG9tdmFycyIsInByb3BzIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJjb3JlcHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBTXdCQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUMzQywwQkFBb0NBLE1BQU1DLElBQTFDO0FBQUEsWUFBSSxFQUFDQyxhQUFELEVBQUo7QUFBQSxZQUF1QkMsU0FBdkI7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNLLDJDQUFnQkEsU0FBaEI7QUFETCxTQURKO0FBS0giLCJmaWxlIjoiYm9keV9jdXN0b212YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29yZV9jdXN0b212YXJzIGZyb20gJy4vY29yZV9jdXN0b212YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9keV9jdXN0b212YXJzKHByb3BzKSB7XG4gICAgbGV0IHtjb3JlX3JlbmRlcmVyLCAuLi5jb3JlcHJvcHN9ID0gcHJvcHMuY29yZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIHtjb3JlX2N1c3RvbXZhcnMoY29yZXByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==