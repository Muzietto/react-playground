define(['react', 'react-dom', './state_machine/steps', './wizard'], function (_react, _reactDom, _steps, _wizard) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _steps2 = _interopRequireDefault(_steps);

    var _wizard2 = _interopRequireDefault(_wizard);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let wizardProps = {
        summary: {
            step: 1
        },
        core: {},
        footer: {
            cancelButton: {
                disabled: false,
                onClick: () => {
                    alert('cancel button clicked');
                }
            },
            saveButton: {
                disabled: true,
                onClick: () => {
                    alert('SAVE button clicked');
                }
            }
        }
    };

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        ),
        _react2.default.createElement('div', { className: 'container', id: 'state_machine_container' })
    ), document.getElementById('root'));

    (0, _steps.startStep)();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aXphcmRQcm9wcyIsInN1bW1hcnkiLCJzdGVwIiwiY29yZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0Iiwic2F2ZUJ1dHRvbiIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLFFBQUlBLGNBQWM7QUFDZEMsaUJBQVM7QUFDTEMsa0JBQU07QUFERCxTQURLO0FBSWRDLGNBQU0sRUFKUTtBQUtkQyxnQkFBUTtBQUNKQywwQkFBYztBQUNWQywwQkFBVSxLQURBO0FBRVZDLHlCQUFTLE1BQU07QUFDWEMsMEJBQU0sdUJBQU47QUFDSDtBQUpTLGFBRFY7QUFPSkMsd0JBQVk7QUFDUkgsMEJBQVUsSUFERjtBQUVSQyx5QkFBUyxNQUFNO0FBQ1hDLDBCQUFNLHFCQUFOO0FBQ0g7QUFKTztBQVBSO0FBTE0sS0FBbEI7O0FBcUJBLHVCQUFTRSxNQUFULENBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9WLFdBQVA7QUFETCxTQURKO0FBSUksK0NBQUssV0FBVSxXQUFmLEVBQTJCLElBQUcseUJBQTlCO0FBSkosS0FESixFQU1ZVyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBTlo7O0FBUUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IGNob2ljZSwge3N0YXJ0U3RlcH0gZnJvbSAnLi9zdGF0ZV9tYWNoaW5lL3N0ZXBzJztcbmltcG9ydCBXaXphcmQgZnJvbSAnLi93aXphcmQnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgc3VtbWFyeToge1xuICAgICAgICBzdGVwOiAxLFxuICAgIH0sXG4gICAgY29yZToge30sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHdpemFyZFByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJzdGF0ZV9tYWNoaW5lX2NvbnRhaW5lclwiLz5cbiAgICA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5zdGFydFN0ZXAoKTsiXX0=