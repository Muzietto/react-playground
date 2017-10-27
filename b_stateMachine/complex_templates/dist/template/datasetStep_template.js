define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_dataset', '../wizard/core/core_dataset'], function (exports, _react, _wizard, _body_dataset, _core_dataset) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = datasetStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_dataset2 = _interopRequireDefault(_body_dataset);

    var _core_dataset2 = _interopRequireDefault(_core_dataset);

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

    function datasetStep_template(props) {
        props = _extends({}, props, {
            body: _extends({}, props.body, {
                body_renderer: _body_dataset2.default
            }),
            core: _extends({}, props.core, {
                core_renderer: _core_dataset2.default,
                message: 'hello, dataset!'
            }),
            summary: {
                step: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9kYXRhc2V0U3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJkYXRhc2V0U3RlcF90ZW1wbGF0ZSIsInByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJzdW1tYXJ5Iiwic3RlcCIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwicmVzdGFydEJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVycyIsImJhY2t3YXJkIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFRd0JBLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFDaERBLDZCQUNPQSxLQURQO0FBRUlDLCtCQUNPRCxNQUFNQyxJQURiO0FBRUlDO0FBRkosY0FGSjtBQU1JQywrQkFDT0gsTUFBTUcsSUFEYjtBQUVJQyxxREFGSjtBQUdJQyx5QkFBUztBQUhiLGNBTko7QUFXSUMscUJBQVM7QUFDTEMsc0JBQU07QUFERCxhQVhiO0FBY0lDLGlDQUNPUixNQUFNUSxNQURiO0FBRUlDLDJDQUNPVCxNQUFNUSxNQUFOLENBQWFDLFlBRHBCO0FBRUlDLDhCQUFVO0FBRmQsa0JBRko7QUFNSUMsNENBQ09YLE1BQU1RLE1BQU4sQ0FBYUcsYUFEcEI7QUFFSUQsOEJBQVUsS0FGZDtBQUdJRSw2QkFBU1osTUFBTWEsUUFBTixDQUFlQyxRQUFmLENBQXdCLENBQXhCO0FBSGIsa0JBTko7QUFXSUMseUNBQ09mLE1BQU1RLE1BQU4sQ0FBYU8sVUFEcEI7QUFFSUwsOEJBQVU7QUFGZDtBQVhKO0FBZEo7O0FBZ0NBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9WLEtBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoiZGF0YXNldFN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV9kYXRhc2V0IGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfZGF0YXNldCc7XG5pbXBvcnQgY29yZV9kYXRhc2V0IGZyb20gJy4uL3dpemFyZC9jb3JlL2NvcmVfZGF0YXNldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGFzZXRTdGVwX3RlbXBsYXRlKHByb3BzKSB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5ib2R5LFxuICAgICAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9kYXRhc2V0LFxuICAgICAgICB9LFxuICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5jb3JlLFxuICAgICAgICAgICAgY29yZV9yZW5kZXJlcjogY29yZV9kYXRhc2V0LFxuICAgICAgICAgICAgbWVzc2FnZTogJ2hlbGxvLCBkYXRhc2V0IScsXG4gICAgICAgIH0sXG4gICAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLmNhbmNlbEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5yZXN0YXJ0QnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5oYW5kbGVycy5iYWNrd2FyZFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLnNhdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0=