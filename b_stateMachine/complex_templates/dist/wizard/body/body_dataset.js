define(['exports', 'react', '../summary'], function (exports, _react, _summary) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_dataset;

    var _react2 = _interopRequireDefault(_react);

    var _summary2 = _interopRequireDefault(_summary);

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

    function body_dataset(props) {
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
        props.summary = { step: 1 };
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            core_renderer(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X2RhdGFzZXQuanMiXSwibmFtZXMiOlsiYm9keV9kYXRhc2V0IiwicHJvcHMiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsImNvcmVwcm9wcyIsInN1bW1hcnkiLCJzdGVwIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU13QkEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDeEMsMEJBQW9DQSxNQUFNQyxJQUExQztBQUFBLFlBQUksRUFBQ0MsYUFBRCxFQUFKO0FBQUEsWUFBdUJDLFNBQXZCO0FBQ0FILGNBQU1JLE9BQU4sR0FBZ0IsRUFBQ0MsTUFBTSxDQUFQLEVBQWhCO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSSw2REFBYUwsTUFBTUksT0FBbkIsQ0FESjtBQUVLRiwwQkFBY0YsS0FBZDtBQUZMLFNBREo7QUFNSCIsImZpbGUiOiJib2R5X2RhdGFzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4uL3N1bW1hcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5X2RhdGFzZXQocHJvcHMpIHtcbiAgICBsZXQge2NvcmVfcmVuZGVyZXIsIC4uLmNvcmVwcm9wc30gPSBwcm9wcy5jb3JlO1xuICAgIHByb3BzLnN1bW1hcnkgPSB7c3RlcDogMSx9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPFN1bW1hcnkgey4uLnByb3BzLnN1bW1hcnl9Lz5cbiAgICAgICAgICAgIHtjb3JlX3JlbmRlcmVyKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==