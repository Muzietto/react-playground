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
            props.footer.saveButton.onClick = ev => alert('$(' + props.chosen_var + ')');
        }

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUiLCJwcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJtZXNzYWdlIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJyZXN0YXJ0QnV0dG9uIiwib25DbGljayIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJzYXZlQnV0dG9uIiwiY2hvc2VuX3ZhciIsImV2IiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBUXdCQSxzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0Esc0JBQVQsQ0FBZ0NDLEtBQWhDLEVBQXVDO0FBQ2xEQSw2QkFDT0EsS0FEUDtBQUVJQywrQkFDT0QsTUFBTUMsSUFEYjtBQUVJQztBQUZKLGNBRko7QUFNSUMsK0JBQ09ILE1BQU1HLElBRGI7QUFFSUMsdURBRko7QUFHSUMseUJBQVM7QUFIYixjQU5KO0FBV0lDLGlDQUNPTixNQUFNTSxNQURiO0FBRUlDLDJDQUNPUCxNQUFNTSxNQUFOLENBQWFDLFlBRHBCO0FBRUlDLDhCQUFVO0FBRmQsa0JBRko7QUFNSUMsNENBQ09ULE1BQU1NLE1BQU4sQ0FBYUcsYUFEcEI7QUFFSUQsOEJBQVUsS0FGZDtBQUdJRSw2QkFBU1YsTUFBTVcsUUFBTixDQUFlQyxRQUFmLENBQXdCLENBQXhCO0FBSGIsa0JBTko7QUFXSUMseUNBQ09iLE1BQU1NLE1BQU4sQ0FBYU8sVUFEcEI7QUFFSUwsOEJBQVU7QUFGZDtBQVhKO0FBWEo7O0FBNkJBLFlBQUlSLE1BQU1jLFVBQVYsRUFBc0I7QUFDbEJkLGtCQUFNTSxNQUFOLENBQWFPLFVBQWIsQ0FBd0JMLFFBQXhCLEdBQW1DLEtBQW5DO0FBQ0FSLGtCQUFNTSxNQUFOLENBQWFPLFVBQWIsQ0FBd0JILE9BQXhCLEdBQWtDSyxNQUFNQyxNQUFNLE9BQU9oQixNQUFNYyxVQUFiLEdBQTBCLEdBQWhDLENBQXhDO0FBQ0g7O0FBRUQsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT2QsS0FBUDtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJjdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2l6YXJkIGZyb20gJy4uL3dpemFyZC93aXphcmQnO1xuaW1wb3J0IGJvZHlfY3VzdG9tdmFyIGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfY3VzdG9tdmFyJztcbmltcG9ydCBjb3JlX2N1c3RvbXZhciBmcm9tICcuLi93aXphcmQvY29yZS9jb3JlX2N1c3RvbXZhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUocHJvcHMpIHtcbiAgICBwcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLmJvZHksXG4gICAgICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X2N1c3RvbXZhcixcbiAgICAgICAgfSxcbiAgICAgICAgY29yZToge1xuICAgICAgICAgICAgLi4ucHJvcHMuY29yZSxcbiAgICAgICAgICAgIGNvcmVfcmVuZGVyZXI6IGNvcmVfY3VzdG9tdmFyLFxuICAgICAgICAgICAgbWVzc2FnZTogJ2hlbGxvLCBjdXN0b212YXIhJyxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIuY2FuY2VsQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0YXJ0QnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuZm9vdGVyLnJlc3RhcnRCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHByb3BzLmhhbmRsZXJzLmJhY2t3YXJkWzBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLmNob3Nlbl92YXIpIHtcbiAgICAgICAgcHJvcHMuZm9vdGVyLnNhdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcHJvcHMuZm9vdGVyLnNhdmVCdXR0b24ub25DbGljayA9IGV2ID0+IGFsZXJ0KCckKCcgKyBwcm9wcy5jaG9zZW5fdmFyICsgJyknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZChwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19