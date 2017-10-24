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

    function customvarStep_template(wizardProps) {
        wizardProps = _extends({}, wizardProps, {
            body: _extends({}, wizardProps.body, {
                body_renderer: _body_customvar2.default
            }),
            core: _extends({}, wizardProps.core, {
                core_renderer: _core_customvar2.default,
                message: 'hello, customvar!'
            }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUiLCJ3aXphcmRQcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJtZXNzYWdlIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQVF3QkEsc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLHNCQUFULENBQWdDQyxXQUFoQyxFQUE2QztBQUN4REEsbUNBQ09BLFdBRFA7QUFFSUMsK0JBQ09ELFlBQVlDLElBRG5CO0FBRUlDO0FBRkosY0FGSjtBQU1JQywrQkFDT0gsWUFBWUcsSUFEbkI7QUFFSUMsdURBRko7QUFHSUMseUJBQVM7QUFIYixjQU5KO0FBV0lDLGlDQUNPTixZQUFZTSxNQURuQjtBQUVJQywyQ0FDT1AsWUFBWU0sTUFBWixDQUFtQkMsWUFEMUI7QUFFSUMsOEJBQVU7QUFGZCxrQkFGSjtBQU1JQyx5Q0FDT1QsWUFBWU0sTUFBWixDQUFtQkcsVUFEMUI7QUFFSUQsOEJBQVU7QUFGZDtBQU5KO0FBWEo7O0FBd0JBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9SLFdBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoiY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFdpemFyZCBmcm9tICcuLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBib2R5X2N1c3RvbXZhciBmcm9tICcuLi93aXphcmQvYm9keS9ib2R5X2N1c3RvbXZhcic7XG5pbXBvcnQgY29yZV9jdXN0b212YXIgZnJvbSAnLi4vd2l6YXJkL2NvcmUvY29yZV9jdXN0b212YXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXN0b212YXJTdGVwX3RlbXBsYXRlKHdpemFyZFByb3BzKSB7XG4gICAgd2l6YXJkUHJvcHMgPSB7XG4gICAgICAgIC4uLndpemFyZFByb3BzLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAuLi53aXphcmRQcm9wcy5ib2R5LFxuICAgICAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9jdXN0b212YXIsXG4gICAgICAgIH0sXG4gICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgIC4uLndpemFyZFByb3BzLmNvcmUsXG4gICAgICAgICAgICBjb3JlX3JlbmRlcmVyOiBjb3JlX2N1c3RvbXZhcixcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgY3VzdG9tdmFyIScsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgLi4ud2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgLi4ud2l6YXJkUHJvcHMuZm9vdGVyLmNhbmNlbEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLndpemFyZFByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZCh3aXphcmRQcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19