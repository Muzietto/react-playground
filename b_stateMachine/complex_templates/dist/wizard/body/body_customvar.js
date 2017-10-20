define(['exports', 'react', '../core/core_customvar'], function (exports, _react, _core_customvar) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_customvar;

    var _react2 = _interopRequireDefault(_react);

    var _core_customvar2 = _interopRequireDefault(_core_customvar);

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

    function body_customvar(props) {
        let handlers = props.handlers;
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            (0, _core_customvar2.default)(coreprops)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvYm9keS9ib2R5X2N1c3RvbXZhci5qcyJdLCJuYW1lcyI6WyJib2R5X2N1c3RvbXZhciIsInByb3BzIiwiaGFuZGxlcnMiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsImNvcmVwcm9wcyJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFNd0JBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzFDLFlBQUlDLFdBQVdELE1BQU1DLFFBQXJCO0FBQ0EsMEJBQW9DRCxNQUFNRSxJQUExQztBQUFBLFlBQUksRUFBQ0MsYUFBRCxFQUFKO0FBQUEsWUFBdUJDLFNBQXZCO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDSywwQ0FBZUEsU0FBZjtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJib2R5X2N1c3RvbXZhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvcmVfY3VzdG9tdmFyIGZyb20gJy4uL2NvcmUvY29yZV9jdXN0b212YXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5X2N1c3RvbXZhcihwcm9wcykge1xuICAgIGxldCBoYW5kbGVycyA9IHByb3BzLmhhbmRsZXJzO1xuICAgIGxldCB7Y29yZV9yZW5kZXJlciwgLi4uY29yZXByb3BzfSA9IHByb3BzLmNvcmU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICB7Y29yZV9jdXN0b212YXIoY29yZXByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==