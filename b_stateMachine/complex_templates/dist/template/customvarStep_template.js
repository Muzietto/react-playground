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

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUiLCJwcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJtZXNzYWdlIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJyZXN0YXJ0QnV0dG9uIiwib25DbGljayIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQVF3QkEsc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1QztBQUNsREEsNkJBQ09BLEtBRFA7QUFFSUMsK0JBQ09ELE1BQU1DLElBRGI7QUFFSUM7QUFGSixjQUZKO0FBTUlDLCtCQUNPSCxNQUFNRyxJQURiO0FBRUlDLHVEQUZKO0FBR0lDLHlCQUFTO0FBSGIsY0FOSjtBQVdJQyxpQ0FDT04sTUFBTU0sTUFEYjtBQUVJQywyQ0FDT1AsTUFBTU0sTUFBTixDQUFhQyxZQURwQjtBQUVJQyw4QkFBVTtBQUZkLGtCQUZKO0FBTUlDLDRDQUNPVCxNQUFNTSxNQUFOLENBQWFHLGFBRHBCO0FBRUlELDhCQUFVLEtBRmQ7QUFHSUUsNkJBQVNWLE1BQU1XLFFBQU4sQ0FBZUMsUUFBZixDQUF3QixDQUF4QjtBQUhiLGtCQU5KO0FBV0lDLHlDQUNPYixNQUFNTSxNQUFOLENBQWFPLFVBRHBCO0FBRUlMLDhCQUFVO0FBRmQ7QUFYSjtBQVhKOztBQTZCQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPUixLQUFQO0FBREwsU0FESjtBQUtIIiwiZmlsZSI6ImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV9jdXN0b212YXIgZnJvbSAnLi4vd2l6YXJkL2JvZHkvYm9keV9jdXN0b212YXInO1xuaW1wb3J0IGNvcmVfY3VzdG9tdmFyIGZyb20gJy4uL3dpemFyZC9jb3JlL2NvcmVfY3VzdG9tdmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZShwcm9wcykge1xuICAgIHByb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgLi4ucHJvcHMuYm9keSxcbiAgICAgICAgICAgIGJvZHlfcmVuZGVyZXI6IGJvZHlfY3VzdG9tdmFyLFxuICAgICAgICB9LFxuICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5jb3JlLFxuICAgICAgICAgICAgY29yZV9yZW5kZXJlcjogY29yZV9jdXN0b212YXIsXG4gICAgICAgICAgICBtZXNzYWdlOiAnaGVsbG8sIGN1c3RvbXZhciEnLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLmZvb3RlcixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5jYW5jZWxCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3RhcnRCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIucmVzdGFydEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25DbGljazogcHJvcHMuaGFuZGxlcnMuYmFja3dhcmRbMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZChwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19