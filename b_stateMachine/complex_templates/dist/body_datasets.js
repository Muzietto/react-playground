define(['exports', 'react', './summary'], function (exports, _react, _summary) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_datasets;

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

    function body_datasets(props) {
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(_summary2.default, props.summary),
            core_renderer(coreprops)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9ib2R5X2RhdGFzZXRzLmpzIl0sIm5hbWVzIjpbImJvZHlfZGF0YXNldHMiLCJwcm9wcyIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwiY29yZXByb3BzIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFNd0JBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQ3pDLDBCQUFvQ0EsTUFBTUMsSUFBMUM7QUFBQSxZQUFJLEVBQUNDLGFBQUQsRUFBSjtBQUFBLFlBQXVCQyxTQUF2QjtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0ksNkRBQWFILE1BQU1JLE9BQW5CLENBREo7QUFFS0YsMEJBQWNDLFNBQWQ7QUFGTCxTQURKO0FBTUgiLCJmaWxlIjoiYm9keV9kYXRhc2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFN1bW1hcnkgZnJvbSAnLi9zdW1tYXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9keV9kYXRhc2V0cyhwcm9wcykge1xuICAgIGxldCB7Y29yZV9yZW5kZXJlciwgLi4uY29yZXByb3BzfSA9IHByb3BzLmNvcmU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8U3VtbWFyeSB7Li4ucHJvcHMuc3VtbWFyeX0vPlxuICAgICAgICAgICAge2NvcmVfcmVuZGVyZXIoY29yZXByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==