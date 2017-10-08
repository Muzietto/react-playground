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
                text ? Object.keys(text).map(key => key + ': ' + text[key] + ';\n') : null
            )
        );
    };

    exports.default = Jsone;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Kc29uZS5qcyJdLCJuYW1lcyI6WyJKc29uZSIsInByb3BzIiwiZm9ybSIsInRleHQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBSUEsUUFBSUEsUUFBUUMsU0FBUztBQUNqQixjQUFNLEVBQUNDLElBQUQsRUFBT0MsSUFBUCxLQUFlRixLQUFyQjs7QUFFQSxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLQztBQUFMLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFDS0Msb0JBQUQsR0FDTUMsT0FBT0MsSUFBUCxDQUFZRixJQUFaLEVBQ0RHLEdBREMsQ0FDR0MsT0FBT0EsTUFBTSxJQUFOLEdBQWFKLEtBQUtJLEdBQUwsQ0FBYixHQUF5QixLQURuQyxDQUROLEdBR007QUFKVjtBQUZKLFNBREo7QUFXSCxLQWREOztzQkFnQmVQLEsiLCJmaWxlIjoiSnNvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCBKc29uZSA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7Zm9ybSwgdGV4dH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+e2Zvcm19PC9oMz5cbiAgICAgICAgICAgIDxwcmU+e1xuICAgICAgICAgICAgICAgICh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKHRleHQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGtleSArICc6ICcgKyB0ZXh0W2tleV0gKyAnO1xcbicpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSnNvbmU7XG4iXX0=