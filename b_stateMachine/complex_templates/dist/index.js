define(['react', 'react-dom', './state_machine/steps', './wizard', './core_type', './core_index'], function (_react, _reactDom, _steps, _wizard, _core_type, _core_index) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _core_type2 = _interopRequireDefault(_core_type);

    var _core_index2 = _interopRequireDefault(_core_index);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let wizardProps = {
        summary: {
            step: 1
        },
        core: {
            corefun: _core_index2.default,
            message: 'hello, world!'
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aXphcmRQcm9wcyIsInN1bW1hcnkiLCJzdGVwIiwiY29yZSIsImNvcmVmdW4iLCJtZXNzYWdlIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiYWxlcnQiLCJzYXZlQnV0dG9uIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxRQUFJQSxjQUFjO0FBQ2RDLGlCQUFTO0FBQ0xDLGtCQUFNO0FBREQsU0FESztBQUlkQyxjQUFNO0FBQ0ZDLHlDQURFO0FBRUZDLHFCQUFTO0FBRlAsU0FKUTtBQVFkQyxnQkFBUTtBQUNKQywwQkFBYztBQUNWQywwQkFBVSxLQURBO0FBRVZDLHlCQUFTLE1BQU07QUFDWEMsMEJBQU0sdUJBQU47QUFDSDtBQUpTLGFBRFY7QUFPSkMsd0JBQVk7QUFDUkgsMEJBQVUsSUFERjtBQUVSQyx5QkFBUyxNQUFNO0FBQ1hDLDBCQUFNLHFCQUFOO0FBQ0g7QUFKTztBQVBSO0FBUk0sS0FBbEI7O0FBd0JBLHVCQUFTRSxNQUFULENBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9aLFdBQVA7QUFETCxTQURKO0FBSUksK0NBQUssV0FBVSxXQUFmLEVBQTJCLElBQUcseUJBQTlCO0FBSkosS0FESixFQU1ZYSxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBTlo7O0FBUUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHtzdGFydFN0ZXB9IGZyb20gJy4vc3RhdGVfbWFjaGluZS9zdGVwcyc7XG5pbXBvcnQgV2l6YXJkIGZyb20gJy4vd2l6YXJkJztcbmltcG9ydCBjb3JlX3R5cGUgZnJvbSAnLi9jb3JlX3R5cGUnO1xuaW1wb3J0IGNvcmVfaW5kZXggZnJvbSAnLi9jb3JlX2luZGV4JztcblxubGV0IHdpemFyZFByb3BzID0ge1xuICAgIHN1bW1hcnk6IHtcbiAgICAgICAgc3RlcDogMSxcbiAgICB9LFxuICAgIGNvcmU6IHtcbiAgICAgICAgY29yZWZ1bjogY29yZV9pbmRleCxcbiAgICAgICAgbWVzc2FnZTogJ2hlbGxvLCB3b3JsZCEnLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHdpemFyZFByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJzdGF0ZV9tYWNoaW5lX2NvbnRhaW5lclwiLz5cbiAgICA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5zdGFydFN0ZXAoKTsiXX0=