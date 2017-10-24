define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_type', '../wizard/core/core_type'], function (exports, _react, _wizard, _body_type, _core_type) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = typeStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_type2 = _interopRequireDefault(_body_type);

    var _core_type2 = _interopRequireDefault(_core_type);

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

    function typeStep_template(props) {
        props = _extends({}, props, {
            body: _extends({}, props.body, {
                body_renderer: _body_type2.default
            }),
            core: _extends({}, props.core, {
                core_renderer: _core_type2.default,
                message: 'hello, type!'
            }),
            summary: {
                step: 2,
                handlers: props.handlers.backward
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0eXBlU3RlcF90ZW1wbGF0ZSIsInByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJzdW1tYXJ5Iiwic3RlcCIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb290ZXIiLCJjYW5jZWxCdXR0b24iLCJkaXNhYmxlZCIsInJlc3RhcnRCdXR0b24iLCJvbkNsaWNrIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFRd0JBLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDN0NBLDZCQUNPQSxLQURQO0FBRUlDLCtCQUNPRCxNQUFNQyxJQURiO0FBRUlDO0FBRkosY0FGSjtBQU1JQywrQkFDT0gsTUFBTUcsSUFEYjtBQUVJQyxrREFGSjtBQUdJQyx5QkFBUztBQUhiLGNBTko7QUFXSUMscUJBQVM7QUFDTEMsc0JBQU0sQ0FERDtBQUVMQywwQkFBVVIsTUFBTVEsUUFBTixDQUFlQztBQUZwQixhQVhiO0FBZUlDLGlDQUNPVixNQUFNVSxNQURiO0FBRUlDLDJDQUNPWCxNQUFNVSxNQUFOLENBQWFDLFlBRHBCO0FBRUlDLDhCQUFVO0FBRmQsa0JBRko7QUFNSUMsNENBQ09iLE1BQU1VLE1BQU4sQ0FBYUcsYUFEcEI7QUFFSUQsOEJBQVUsS0FGZDtBQUdJRSw2QkFBU2QsTUFBTVEsUUFBTixDQUFlQyxRQUFmLENBQXdCLENBQXhCO0FBSGIsa0JBTko7QUFXSU0seUNBQ09mLE1BQU1VLE1BQU4sQ0FBYUssVUFEcEI7QUFFSUgsOEJBQVU7QUFGZDtBQVhKO0FBZko7O0FBaUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9aLEtBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoidHlwZVN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV90eXBlIGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfdHlwZSc7XG5pbXBvcnQgY29yZV90eXBlIGZyb20gJy4uL3dpemFyZC9jb3JlL2NvcmVfdHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR5cGVTdGVwX3RlbXBsYXRlKHByb3BzKSB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5ib2R5LFxuICAgICAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV90eXBlLFxuICAgICAgICB9LFxuICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5jb3JlLFxuICAgICAgICAgICAgY29yZV9yZW5kZXJlcjogY29yZV90eXBlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ2hlbGxvLCB0eXBlIScsXG4gICAgICAgIH0sXG4gICAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgICAgIHN0ZXA6IDIsXG4gICAgICAgICAgICBoYW5kbGVyczogcHJvcHMuaGFuZGxlcnMuYmFja3dhcmQsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLmNhbmNlbEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5yZXN0YXJ0QnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5oYW5kbGVycy5iYWNrd2FyZFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLnNhdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0=