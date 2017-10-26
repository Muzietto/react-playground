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

    // NB this template renders both typeStep and randomStep
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
                step: props.location === 'typeStep' ? 2 : 3,
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

        if (props.location === 'randomStep') {
            props.footer.saveButton.disabled = false;
            props.footer.saveButton.onClick = ev => {
                props.promiseCallback('(' + props.chosen_dataset_property + ')');
            };
        }

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0eXBlU3RlcF90ZW1wbGF0ZSIsInByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJzdW1tYXJ5Iiwic3RlcCIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwicmVzdGFydEJ1dHRvbiIsIm9uQ2xpY2siLCJzYXZlQnV0dG9uIiwiZXYiLCJwcm9taXNlQ2FsbGJhY2siLCJjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFTd0JBLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEeEI7QUFDZSxhQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDN0NBLDZCQUNPQSxLQURQO0FBRUlDLCtCQUNPRCxNQUFNQyxJQURiO0FBRUlDO0FBRkosY0FGSjtBQU1JQywrQkFDT0gsTUFBTUcsSUFEYjtBQUVJQyxrREFGSjtBQUdJQyx5QkFBUztBQUhiLGNBTko7QUFXSUMscUJBQVM7QUFDTEMsc0JBQU9QLE1BQU1RLFFBQU4sS0FBbUIsVUFBcEIsR0FBa0MsQ0FBbEMsR0FBc0MsQ0FEdkM7QUFFTEMsMEJBQVVULE1BQU1TLFFBQU4sQ0FBZUM7QUFGcEIsYUFYYjtBQWVJQyxpQ0FDT1gsTUFBTVcsTUFEYjtBQUVJQywyQ0FDT1osTUFBTVcsTUFBTixDQUFhQyxZQURwQjtBQUVJQyw4QkFBVTtBQUZkLGtCQUZKO0FBTUlDLDRDQUNPZCxNQUFNVyxNQUFOLENBQWFHLGFBRHBCO0FBRUlELDhCQUFVLEtBRmQ7QUFHSUUsNkJBQVNmLE1BQU1TLFFBQU4sQ0FBZUMsUUFBZixDQUF3QixDQUF4QjtBQUhiLGtCQU5KO0FBV0lNLHlDQUNPaEIsTUFBTVcsTUFBTixDQUFhSyxVQURwQjtBQUVJSCw4QkFBVTtBQUZkO0FBWEo7QUFmSjs7QUFpQ0EsWUFBSWIsTUFBTVEsUUFBTixLQUFtQixZQUF2QixFQUFxQztBQUNqQ1Isa0JBQU1XLE1BQU4sQ0FBYUssVUFBYixDQUF3QkgsUUFBeEIsR0FBbUMsS0FBbkM7QUFDQWIsa0JBQU1XLE1BQU4sQ0FBYUssVUFBYixDQUF3QkQsT0FBeEIsR0FBa0NFLE1BQU07QUFDcENqQixzQkFBTWtCLGVBQU4sQ0FBc0IsTUFBTWxCLE1BQU1tQix1QkFBWixHQUFzQyxHQUE1RDtBQUNILGFBRkQ7QUFHSDs7QUFFRCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPbkIsS0FBUDtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJ0eXBlU3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFdpemFyZCBmcm9tICcuLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBib2R5X3R5cGUgZnJvbSAnLi4vd2l6YXJkL2JvZHkvYm9keV90eXBlJztcbmltcG9ydCBjb3JlX3R5cGUgZnJvbSAnLi4vd2l6YXJkL2NvcmUvY29yZV90eXBlJztcblxuLy8gTkIgdGhpcyB0ZW1wbGF0ZSByZW5kZXJzIGJvdGggdHlwZVN0ZXAgYW5kIHJhbmRvbVN0ZXBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR5cGVTdGVwX3RlbXBsYXRlKHByb3BzKSB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5ib2R5LFxuICAgICAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV90eXBlLFxuICAgICAgICB9LFxuICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5jb3JlLFxuICAgICAgICAgICAgY29yZV9yZW5kZXJlcjogY29yZV90eXBlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ2hlbGxvLCB0eXBlIScsXG4gICAgICAgIH0sXG4gICAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgICAgIHN0ZXA6IChwcm9wcy5sb2NhdGlvbiA9PT0gJ3R5cGVTdGVwJykgPyAyIDogMyxcbiAgICAgICAgICAgIGhhbmRsZXJzOiBwcm9wcy5oYW5kbGVycy5iYWNrd2FyZCxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIuY2FuY2VsQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0YXJ0QnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLnJlc3RhcnRCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHByb3BzLmhhbmRsZXJzLmJhY2t3YXJkWzBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLmxvY2F0aW9uID09PSAncmFuZG9tU3RlcCcpIHtcbiAgICAgICAgcHJvcHMuZm9vdGVyLnNhdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcHJvcHMuZm9vdGVyLnNhdmVCdXR0b24ub25DbGljayA9IGV2ID0+IHtcbiAgICAgICAgICAgIHByb3BzLnByb21pc2VDYWxsYmFjaygnKCcgKyBwcm9wcy5jaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSArICcpJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZChwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19