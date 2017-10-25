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
            props.footer.saveButton.onClick = ev => alert('$(' + props.chosen_dataset_property + ')');
        }

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0eXBlU3RlcF90ZW1wbGF0ZSIsInByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJzdW1tYXJ5Iiwic3RlcCIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwicmVzdGFydEJ1dHRvbiIsIm9uQ2xpY2siLCJzYXZlQnV0dG9uIiwiZXYiLCJhbGVydCIsImNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQVN3QkEsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUR4QjtBQUNlLGFBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUM3Q0EsNkJBQ09BLEtBRFA7QUFFSUMsK0JBQ09ELE1BQU1DLElBRGI7QUFFSUM7QUFGSixjQUZKO0FBTUlDLCtCQUNPSCxNQUFNRyxJQURiO0FBRUlDLGtEQUZKO0FBR0lDLHlCQUFTO0FBSGIsY0FOSjtBQVdJQyxxQkFBUztBQUNMQyxzQkFBT1AsTUFBTVEsUUFBTixLQUFtQixVQUFwQixHQUFrQyxDQUFsQyxHQUFzQyxDQUR2QztBQUVMQywwQkFBVVQsTUFBTVMsUUFBTixDQUFlQztBQUZwQixhQVhiO0FBZUlDLGlDQUNPWCxNQUFNVyxNQURiO0FBRUlDLDJDQUNPWixNQUFNVyxNQUFOLENBQWFDLFlBRHBCO0FBRUlDLDhCQUFVO0FBRmQsa0JBRko7QUFNSUMsNENBQ09kLE1BQU1XLE1BQU4sQ0FBYUcsYUFEcEI7QUFFSUQsOEJBQVUsS0FGZDtBQUdJRSw2QkFBU2YsTUFBTVMsUUFBTixDQUFlQyxRQUFmLENBQXdCLENBQXhCO0FBSGIsa0JBTko7QUFXSU0seUNBQ09oQixNQUFNVyxNQUFOLENBQWFLLFVBRHBCO0FBRUlILDhCQUFVO0FBRmQ7QUFYSjtBQWZKOztBQWlDQSxZQUFJYixNQUFNUSxRQUFOLEtBQW1CLFlBQXZCLEVBQXFDO0FBQ2pDUixrQkFBTVcsTUFBTixDQUFhSyxVQUFiLENBQXdCSCxRQUF4QixHQUFtQyxLQUFuQztBQUNBYixrQkFBTVcsTUFBTixDQUFhSyxVQUFiLENBQXdCRCxPQUF4QixHQUFrQ0UsTUFBTUMsTUFBTSxPQUFPbEIsTUFBTW1CLHVCQUFiLEdBQXVDLEdBQTdDLENBQXhDO0FBQ0g7O0FBRUQsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT25CLEtBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoidHlwZVN0ZXBfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBXaXphcmQgZnJvbSAnLi4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgYm9keV90eXBlIGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfdHlwZSc7XG5pbXBvcnQgY29yZV90eXBlIGZyb20gJy4uL3dpemFyZC9jb3JlL2NvcmVfdHlwZSc7XG5cbi8vIE5CIHRoaXMgdGVtcGxhdGUgcmVuZGVycyBib3RoIHR5cGVTdGVwIGFuZCByYW5kb21TdGVwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0eXBlU3RlcF90ZW1wbGF0ZShwcm9wcykge1xuICAgIHByb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgLi4ucHJvcHMuYm9keSxcbiAgICAgICAgICAgIGJvZHlfcmVuZGVyZXI6IGJvZHlfdHlwZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29yZToge1xuICAgICAgICAgICAgLi4ucHJvcHMuY29yZSxcbiAgICAgICAgICAgIGNvcmVfcmVuZGVyZXI6IGNvcmVfdHlwZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgdHlwZSEnLFxuICAgICAgICB9LFxuICAgICAgICBzdW1tYXJ5OiB7XG4gICAgICAgICAgICBzdGVwOiAocHJvcHMubG9jYXRpb24gPT09ICd0eXBlU3RlcCcpID8gMiA6IDMsXG4gICAgICAgICAgICBoYW5kbGVyczogcHJvcHMuaGFuZGxlcnMuYmFja3dhcmQsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLmNhbmNlbEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5yZXN0YXJ0QnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5oYW5kbGVycy5iYWNrd2FyZFswXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLnNhdmVCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5sb2NhdGlvbiA9PT0gJ3JhbmRvbVN0ZXAnKSB7XG4gICAgICAgIHByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLm9uQ2xpY2sgPSBldiA9PiBhbGVydCgnJCgnICsgcHJvcHMuY2hvc2VuX2RhdGFzZXRfcHJvcGVydHkgKyAnKScpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0=