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

    function typeStep_template(wizardProps) {
        wizardProps = _extends({}, wizardProps, {
            body: _extends({}, wizardProps.body, {
                body_renderer: _body_type2.default
            }),
            core: _extends({}, wizardProps.core, {
                core_renderer: _core_type2.default,
                message: 'hello, type!'
            }),
            summary: {
                step: 2
            },
            footer: _extends({}, wizardProps.footer, {
                cancelButton: _extends({}, wizardProps.footer.cancelButton, {
                    disabled: false
                }),
                saveButton: _extends({}, wizardProps.footer.saveButton, {
                    disabled: true
                })
            })
        });

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0eXBlU3RlcF90ZW1wbGF0ZSIsIndpemFyZFByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJzdW1tYXJ5Iiwic3RlcCIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFRd0JBLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxpQkFBVCxDQUEyQkMsV0FBM0IsRUFBd0M7QUFDbkRBLG1DQUNPQSxXQURQO0FBRUlDLCtCQUNPRCxZQUFZQyxJQURuQjtBQUVJQztBQUZKLGNBRko7QUFNSUMsK0JBQ09ILFlBQVlHLElBRG5CO0FBRUlDLGtEQUZKO0FBR0lDLHlCQUFTO0FBSGIsY0FOSjtBQVdJQyxxQkFBUztBQUNMQyxzQkFBTTtBQURELGFBWGI7QUFjSUMsaUNBQ09SLFlBQVlRLE1BRG5CO0FBRUlDLDJDQUNPVCxZQUFZUSxNQUFaLENBQW1CQyxZQUQxQjtBQUVJQyw4QkFBVTtBQUZkLGtCQUZKO0FBTUlDLHlDQUNPWCxZQUFZUSxNQUFaLENBQW1CRyxVQUQxQjtBQUVJRCw4QkFBVTtBQUZkO0FBTko7QUFkSjs7QUEyQkEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT1YsV0FBUDtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJ0eXBlU3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFdpemFyZCBmcm9tICcuLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBib2R5X3R5cGUgZnJvbSAnLi4vd2l6YXJkL2JvZHkvYm9keV90eXBlJztcbmltcG9ydCBjb3JlX3R5cGUgZnJvbSAnLi4vd2l6YXJkL2NvcmUvY29yZV90eXBlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHlwZVN0ZXBfdGVtcGxhdGUod2l6YXJkUHJvcHMpIHtcbiAgICB3aXphcmRQcm9wcyA9IHtcbiAgICAgICAgLi4ud2l6YXJkUHJvcHMsXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIC4uLndpemFyZFByb3BzLmJvZHksXG4gICAgICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X3R5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgIC4uLndpemFyZFByb3BzLmNvcmUsXG4gICAgICAgICAgICBjb3JlX3JlbmRlcmVyOiBjb3JlX3R5cGUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnaGVsbG8sIHR5cGUhJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VtbWFyeToge1xuICAgICAgICAgICAgc3RlcDogMixcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAuLi53aXphcmRQcm9wcy5mb290ZXIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi53aXphcmRQcm9wcy5mb290ZXIuY2FuY2VsQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ud2l6YXJkUHJvcHMuZm9vdGVyLnNhdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHdpemFyZFByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0=