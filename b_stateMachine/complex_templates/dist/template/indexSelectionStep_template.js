define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_index_selection', '../wizard/core/core_index_selection'], function (exports, _react, _wizard, _body_index_selection, _core_index_selection) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = indexSelectionStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_index_selection2 = _interopRequireDefault(_body_index_selection);

    var _core_index_selection2 = _interopRequireDefault(_core_index_selection);

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

    // NB this template renders both connectedStep and fixedStep
    function indexSelectionStep_template(props) {
        props = _extends({}, props, {
            body: _extends({}, props.body, {
                body_renderer: _body_index_selection2.default
            }),
            core: _extends({}, props.core, {
                core_renderer: _core_index_selection2.default,
                message: 'hello, ' + props.location + '!'
            }),
            summary: {
                step: 3,
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

        if (props.chosen_prop_with_index) {
            props.footer.saveButton.disabled = false;
            props.footer.saveButton.onClick = ev => alert('$(' + props.chosen_prop_with_index + ')');
        }

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9pbmRleFNlbGVjdGlvblN0ZXBfdGVtcGxhdGUuanMiXSwibmFtZXMiOlsiaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlIiwicHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic3VtbWFyeSIsInN0ZXAiLCJoYW5kbGVycyIsImJhY2t3YXJkIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJyZXN0YXJ0QnV0dG9uIiwib25DbGljayIsInNhdmVCdXR0b24iLCJjaG9zZW5fcHJvcF93aXRoX2luZGV4IiwiZXYiLCJhbGVydCJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFTd0JBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEeEI7QUFDZSxhQUFTQSwyQkFBVCxDQUFxQ0MsS0FBckMsRUFBNEM7QUFDdkRBLDZCQUNPQSxLQURQO0FBRUlDLCtCQUNPRCxNQUFNQyxJQURiO0FBRUlDO0FBRkosY0FGSjtBQU1JQywrQkFDT0gsTUFBTUcsSUFEYjtBQUVJQyw2REFGSjtBQUdJQyx5QkFBUyxZQUFZTCxNQUFNTSxRQUFsQixHQUE2QjtBQUgxQyxjQU5KO0FBV0lDLHFCQUFTO0FBQ0xDLHNCQUFNLENBREQ7QUFFTEMsMEJBQVVULE1BQU1TLFFBQU4sQ0FBZUM7QUFGcEIsYUFYYjtBQWVJQyxpQ0FDT1gsTUFBTVcsTUFEYjtBQUVJQywyQ0FDT1osTUFBTVcsTUFBTixDQUFhQyxZQURwQjtBQUVJQyw4QkFBVTtBQUZkLGtCQUZKO0FBTUlDLDRDQUNPZCxNQUFNVyxNQUFOLENBQWFHLGFBRHBCO0FBRUlELDhCQUFVLEtBRmQ7QUFHSUUsNkJBQVNmLE1BQU1TLFFBQU4sQ0FBZUMsUUFBZixDQUF3QixDQUF4QjtBQUhiLGtCQU5KO0FBV0lNLHlDQUNPaEIsTUFBTVcsTUFBTixDQUFhSyxVQURwQjtBQUVJSCw4QkFBVTtBQUZkO0FBWEo7QUFmSjs7QUFpQ0EsWUFBSWIsTUFBTWlCLHNCQUFWLEVBQWtDO0FBQzlCakIsa0JBQU1XLE1BQU4sQ0FBYUssVUFBYixDQUF3QkgsUUFBeEIsR0FBbUMsS0FBbkM7QUFDQWIsa0JBQU1XLE1BQU4sQ0FBYUssVUFBYixDQUF3QkQsT0FBeEIsR0FBa0NHLE1BQU1DLE1BQU0sT0FBT25CLE1BQU1pQixzQkFBYixHQUFzQyxHQUE1QyxDQUF4QztBQUNIOztBQUVELGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9qQixLQUFQO0FBREwsU0FESjtBQUtIIiwiZmlsZSI6ImluZGV4U2VsZWN0aW9uU3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFdpemFyZCBmcm9tICcuLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBib2R5X2luZGV4X3NlbGVjdGlvbiBmcm9tICcuLi93aXphcmQvYm9keS9ib2R5X2luZGV4X3NlbGVjdGlvbic7XG5pbXBvcnQgY29yZV9pbmRleF9zZWxlY3Rpb24gZnJvbSAnLi4vd2l6YXJkL2NvcmUvY29yZV9pbmRleF9zZWxlY3Rpb24nO1xuXG4vLyBOQiB0aGlzIHRlbXBsYXRlIHJlbmRlcnMgYm90aCBjb25uZWN0ZWRTdGVwIGFuZCBmaXhlZFN0ZXBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4U2VsZWN0aW9uU3RlcF90ZW1wbGF0ZShwcm9wcykge1xuICAgIHByb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgLi4ucHJvcHMuYm9keSxcbiAgICAgICAgICAgIGJvZHlfcmVuZGVyZXI6IGJvZHlfaW5kZXhfc2VsZWN0aW9uLFxuICAgICAgICB9LFxuICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5jb3JlLFxuICAgICAgICAgICAgY29yZV9yZW5kZXJlcjogY29yZV9pbmRleF9zZWxlY3Rpb24sXG4gICAgICAgICAgICBtZXNzYWdlOiAnaGVsbG8sICcgKyBwcm9wcy5sb2NhdGlvbiArICchJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VtbWFyeToge1xuICAgICAgICAgICAgc3RlcDogMyxcbiAgICAgICAgICAgIGhhbmRsZXJzOiBwcm9wcy5oYW5kbGVycy5iYWNrd2FyZCxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIuY2FuY2VsQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0YXJ0QnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLnJlc3RhcnRCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHByb3BzLmhhbmRsZXJzLmJhY2t3YXJkWzBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLmNob3Nlbl9wcm9wX3dpdGhfaW5kZXgpIHtcbiAgICAgICAgcHJvcHMuZm9vdGVyLnNhdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcHJvcHMuZm9vdGVyLnNhdmVCdXR0b24ub25DbGljayA9IGV2ID0+IGFsZXJ0KCckKCcgKyBwcm9wcy5jaG9zZW5fcHJvcF93aXRoX2luZGV4ICsgJyknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZChwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19