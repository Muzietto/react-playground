define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_customvar', '../wizard/core/core_customvar'], function (exports, _react, _wizard, _body_customvar, _core_customvar) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = customvarStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_customvar2 = _interopRequireDefault(_body_customvar);

    var _core_customvar2 = _interopRequireDefault(_core_customvar);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function customvarStep_template(props) {
        props = _extends({}, props, {
            body: _extends({}, props.body, {
                body_renderer: _body_customvar2.default
            }),
            core: _extends({}, props.core, {
                core_renderer: _core_customvar2.default,
                message: 'hello, customvar!'
            }),
            footer: _extends({}, props.footer, {
                cancelButton: _extends({}, props.footer.cancelButton, {
                    disabled: false
                }),
                restartButton: _extends({}, props.footer.restartButton, {
                    disabled: false,
                    onClick: props.handlers.backward[0]
                }),
                saveButton: _extends({}, props.footer.saveButton, {
                    disabled: true
                })
            })
        });

        if (props.chosen_var) {
            props.footer.saveButton.disabled = false;
            props.footer.saveButton.onClick = ev => {
                props.promiseCallback('(' + props.chosen_var + ')');
            };
        }

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUiLCJwcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJtZXNzYWdlIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJyZXN0YXJ0QnV0dG9uIiwib25DbGljayIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJzYXZlQnV0dG9uIiwiY2hvc2VuX3ZhciIsImV2IiwicHJvbWlzZUNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQVF3QkEsc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1QztBQUNsREEsNkJBQ09BLEtBRFA7QUFFSUMsK0JBQ09ELE1BQU1DLElBRGI7QUFFSUM7QUFGSixjQUZKO0FBTUlDLCtCQUNPSCxNQUFNRyxJQURiO0FBRUlDLHVEQUZKO0FBR0lDLHlCQUFTO0FBSGIsY0FOSjtBQVdJQyxpQ0FDT04sTUFBTU0sTUFEYjtBQUVJQywyQ0FDT1AsTUFBTU0sTUFBTixDQUFhQyxZQURwQjtBQUVJQyw4QkFBVTtBQUZkLGtCQUZKO0FBTUlDLDRDQUNPVCxNQUFNTSxNQUFOLENBQWFHLGFBRHBCO0FBRUlELDhCQUFVLEtBRmQ7QUFHSUUsNkJBQVNWLE1BQU1XLFFBQU4sQ0FBZUMsUUFBZixDQUF3QixDQUF4QjtBQUhiLGtCQU5KO0FBV0lDLHlDQUNPYixNQUFNTSxNQUFOLENBQWFPLFVBRHBCO0FBRUlMLDhCQUFVO0FBRmQ7QUFYSjtBQVhKOztBQTZCQSxZQUFJUixNQUFNYyxVQUFWLEVBQXNCO0FBQ2xCZCxrQkFBTU0sTUFBTixDQUFhTyxVQUFiLENBQXdCTCxRQUF4QixHQUFtQyxLQUFuQztBQUNBUixrQkFBTU0sTUFBTixDQUFhTyxVQUFiLENBQXdCSCxPQUF4QixHQUFrQ0ssTUFBTTtBQUNwQ2Ysc0JBQU1nQixlQUFOLENBQXNCLE1BQU1oQixNQUFNYyxVQUFaLEdBQXlCLEdBQS9DO0FBQ0gsYUFGRDtBQUdIOztBQUVELGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9kLEtBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoiY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFdpemFyZCBmcm9tICcuLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBib2R5X2N1c3RvbXZhciBmcm9tICcuLi93aXphcmQvYm9keS9ib2R5X2N1c3RvbXZhcic7XG5pbXBvcnQgY29yZV9jdXN0b212YXIgZnJvbSAnLi4vd2l6YXJkL2NvcmUvY29yZV9jdXN0b212YXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXN0b212YXJTdGVwX3RlbXBsYXRlKHByb3BzKSB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5ib2R5LFxuICAgICAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9jdXN0b212YXIsXG4gICAgICAgIH0sXG4gICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLmNvcmUsXG4gICAgICAgICAgICBjb3JlX3JlbmRlcmVyOiBjb3JlX2N1c3RvbXZhcixcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgY3VzdG9tdmFyIScsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLmNhbmNlbEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5yZXN0YXJ0QnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5oYW5kbGVycy5iYWNrd2FyZFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLnNhdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5jaG9zZW5fdmFyKSB7XG4gICAgICAgIHByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLm9uQ2xpY2sgPSBldiA9PiB7XG4gICAgICAgICAgICBwcm9wcy5wcm9taXNlQ2FsbGJhY2soJygnICsgcHJvcHMuY2hvc2VuX3ZhciArICcpJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZChwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19