define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_start'], function (exports, _react, _wizard, _body_start) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = startStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_start2 = _interopRequireDefault(_body_start);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function startStep_template(wizardProps) {
        wizardProps.body = {
            body_renderer: _body_start2.default
        };

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUuanMiXSwibmFtZXMiOlsic3RhcnRTdGVwX3RlbXBsYXRlIiwid2l6YXJkUHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFPd0JBLGtCOzs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLGtCQUFULENBQTRCQyxXQUE1QixFQUF5QztBQUNwREEsb0JBQVlDLElBQVosR0FBbUI7QUFDZkM7QUFEZSxTQUFuQjs7QUFJQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPRixXQUFQO0FBREwsU0FESjtBQUtIIiwiZmlsZSI6InN0YXJ0U3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFdpemFyZCBmcm9tICcuLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBib2R5X3N0YXJ0IGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfc3RhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydFN0ZXBfdGVtcGxhdGUod2l6YXJkUHJvcHMpIHtcbiAgICB3aXphcmRQcm9wcy5ib2R5ID0ge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X3N0YXJ0LFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZCh3aXphcmRQcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19