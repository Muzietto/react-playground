define(['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let Jsone = props => {
        const { form, text } = props;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h3',
                null,
                form
            ),
            _react2.default.createElement(
                'pre',
                null,
                text ? Object.keys(text).map(key => key + ': ' + JSON.stringify(text[key]) + ';\n') : null
            )
        );
    };

    exports.default = Jsone;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Kc29uZS5qcyJdLCJuYW1lcyI6WyJKc29uZSIsInByb3BzIiwiZm9ybSIsInRleHQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztBQUlBLFFBQUlBLFFBQVFDLFNBQVM7QUFDakIsY0FBTSxFQUFDQyxJQUFELEVBQU9DLElBQVAsS0FBZUYsS0FBckI7O0FBRUEsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBS0M7QUFBTCxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0tDLG9CQUFELEdBQ01DLE9BQU9DLElBQVAsQ0FBWUYsSUFBWixFQUNERyxHQURDLENBQ0dDLE9BQU9BLE1BQU0sSUFBTixHQUNOQyxLQUFLQyxTQUFMLENBQWVOLEtBQUtJLEdBQUwsQ0FBZixDQURNLEdBQ3NCLEtBRmhDLENBRE4sR0FJTTtBQUxWO0FBRkosU0FESjtBQVlILEtBZkQ7O3NCQWlCZVAsSyIsImZpbGUiOiJKc29uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IEpzb25lID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtmb3JtLCB0ZXh0fSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz57Zm9ybX08L2gzPlxuICAgICAgICAgICAgPHByZT57XG4gICAgICAgICAgICAgICAgKHRleHQpXG4gICAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXModGV4dClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4ga2V5ICsgJzogJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyBKU09OLnN0cmluZ2lmeSh0ZXh0W2tleV0pICsgJztcXG4nKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpzb25lO1xuIl19