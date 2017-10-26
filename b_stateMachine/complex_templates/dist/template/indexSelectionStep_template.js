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
            props.footer.saveButton.onClick = ev => {
                props.promiseCallback('(' + props.chosen_prop_with_index + ')');
            };
        }

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9pbmRleFNlbGVjdGlvblN0ZXBfdGVtcGxhdGUuanMiXSwibmFtZXMiOlsiaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlIiwicHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic3VtbWFyeSIsInN0ZXAiLCJoYW5kbGVycyIsImJhY2t3YXJkIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJyZXN0YXJ0QnV0dG9uIiwib25DbGljayIsInNhdmVCdXR0b24iLCJjaG9zZW5fcHJvcF93aXRoX2luZGV4IiwiZXYiLCJwcm9taXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBU3dCQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRHhCO0FBQ2UsYUFBU0EsMkJBQVQsQ0FBcUNDLEtBQXJDLEVBQTRDO0FBQ3ZEQSw2QkFDT0EsS0FEUDtBQUVJQywrQkFDT0QsTUFBTUMsSUFEYjtBQUVJQztBQUZKLGNBRko7QUFNSUMsK0JBQ09ILE1BQU1HLElBRGI7QUFFSUMsNkRBRko7QUFHSUMseUJBQVMsWUFBWUwsTUFBTU0sUUFBbEIsR0FBNkI7QUFIMUMsY0FOSjtBQVdJQyxxQkFBUztBQUNMQyxzQkFBTSxDQUREO0FBRUxDLDBCQUFVVCxNQUFNUyxRQUFOLENBQWVDO0FBRnBCLGFBWGI7QUFlSUMsaUNBQ09YLE1BQU1XLE1BRGI7QUFFSUMsMkNBQ09aLE1BQU1XLE1BQU4sQ0FBYUMsWUFEcEI7QUFFSUMsOEJBQVU7QUFGZCxrQkFGSjtBQU1JQyw0Q0FDT2QsTUFBTVcsTUFBTixDQUFhRyxhQURwQjtBQUVJRCw4QkFBVSxLQUZkO0FBR0lFLDZCQUFTZixNQUFNUyxRQUFOLENBQWVDLFFBQWYsQ0FBd0IsQ0FBeEI7QUFIYixrQkFOSjtBQVdJTSx5Q0FDT2hCLE1BQU1XLE1BQU4sQ0FBYUssVUFEcEI7QUFFSUgsOEJBQVU7QUFGZDtBQVhKO0FBZko7O0FBaUNBLFlBQUliLE1BQU1pQixzQkFBVixFQUFrQztBQUM5QmpCLGtCQUFNVyxNQUFOLENBQWFLLFVBQWIsQ0FBd0JILFFBQXhCLEdBQW1DLEtBQW5DO0FBQ0FiLGtCQUFNVyxNQUFOLENBQWFLLFVBQWIsQ0FBd0JELE9BQXhCLEdBQWtDRyxNQUFNO0FBQ3BDbEIsc0JBQU1tQixlQUFOLENBQXNCLE1BQU1uQixNQUFNaUIsc0JBQVosR0FBcUMsR0FBM0Q7QUFDSCxhQUZEO0FBR0g7O0FBRUQsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT2pCLEtBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoiaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2l6YXJkIGZyb20gJy4uL3dpemFyZC93aXphcmQnO1xuaW1wb3J0IGJvZHlfaW5kZXhfc2VsZWN0aW9uIGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfaW5kZXhfc2VsZWN0aW9uJztcbmltcG9ydCBjb3JlX2luZGV4X3NlbGVjdGlvbiBmcm9tICcuLi93aXphcmQvY29yZS9jb3JlX2luZGV4X3NlbGVjdGlvbic7XG5cbi8vIE5CIHRoaXMgdGVtcGxhdGUgcmVuZGVycyBib3RoIGNvbm5lY3RlZFN0ZXAgYW5kIGZpeGVkU3RlcFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlKHByb3BzKSB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5ib2R5LFxuICAgICAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9pbmRleF9zZWxlY3Rpb24sXG4gICAgICAgIH0sXG4gICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLmNvcmUsXG4gICAgICAgICAgICBjb3JlX3JlbmRlcmVyOiBjb3JlX2luZGV4X3NlbGVjdGlvbixcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgJyArIHByb3BzLmxvY2F0aW9uICsgJyEnLFxuICAgICAgICB9LFxuICAgICAgICBzdW1tYXJ5OiB7XG4gICAgICAgICAgICBzdGVwOiAzLFxuICAgICAgICAgICAgaGFuZGxlcnM6IHByb3BzLmhhbmRsZXJzLmJhY2t3YXJkLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLmZvb3RlcixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5jYW5jZWxCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3RhcnRCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIucmVzdGFydEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25DbGljazogcHJvcHMuaGFuZGxlcnMuYmFja3dhcmRbMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocHJvcHMuY2hvc2VuX3Byb3Bfd2l0aF9pbmRleCkge1xuICAgICAgICBwcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBwcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbi5vbkNsaWNrID0gZXYgPT4ge1xuICAgICAgICAgICAgcHJvcHMucHJvbWlzZUNhbGxiYWNrKCcoJyArIHByb3BzLmNob3Nlbl9wcm9wX3dpdGhfaW5kZXggKyAnKScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0=