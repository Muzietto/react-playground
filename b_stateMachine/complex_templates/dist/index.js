define(['react', 'react-dom', './state_machine/steps', './wizard'], function (_react, _reactDom, _steps, _wizard) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

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
        _react2.default.createElement(
            'div',
            { className: 'container', id: 'state_machine_container' },
            (0, _steps.startStep)()
        )
    ), document.getElementById('root'));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aXphcmRQcm9wcyIsInN1bW1hcnkiLCJzdGVwIiwiY29yZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0Iiwic2F2ZUJ1dHRvbiIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFRQSxRQUFJQSxjQUFjO0FBQ2RDLGlCQUFTO0FBQ0xDLGtCQUFNO0FBREQsU0FESztBQUlkQyxjQUFNLEVBSlE7QUFLZEMsZ0JBQVE7QUFDSkMsMEJBQWM7QUFDVkMsMEJBQVUsS0FEQTtBQUVWQyx5QkFBUyxNQUFNO0FBQ1hDLDBCQUFNLHVCQUFOO0FBQ0g7QUFKUyxhQURWO0FBT0pDLHdCQUFZO0FBQ1JILDBCQUFVLElBREY7QUFFUkMseUJBQVMsTUFBTTtBQUNYQywwQkFBTSxxQkFBTjtBQUNIO0FBSk87QUFQUjtBQUxNLEtBQWxCOztBQXFCQSx1QkFBU0UsTUFBVCxDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPVixXQUFQO0FBREwsU0FESjtBQUlJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZixFQUEyQixJQUFHLHlCQUE5QjtBQUNLO0FBREw7QUFKSixLQURKLEVBUVlXLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FSWiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQge3N0YXJ0U3RlcH0gZnJvbSAnLi9zdGF0ZV9tYWNoaW5lL3N0ZXBzJztcbmltcG9ydCBXaXphcmQgZnJvbSAnLi93aXphcmQnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgc3VtbWFyeToge1xuICAgICAgICBzdGVwOiAxLFxuICAgIH0sXG4gICAgY29yZToge30sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHdpemFyZFByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJzdGF0ZV9tYWNoaW5lX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAge3N0YXJ0U3RlcCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyJdfQ==