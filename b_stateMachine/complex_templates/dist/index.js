define(['react', 'react-dom', './state_machine/steps'], function (_react, _reactDom, _steps) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        { className: 'large_container' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement('input', { type: 'text', className: 'wizard-equipped', placeholder: 'type a $-sign in here' })
        ),
        _react2.default.createElement('div', { className: 'container hidden', id: 'complex_templates_container' })
    ), document.getElementById('root'));

    Array.prototype.forEach.call(document.getElementsByClassName('wizard-equipped'), elem => {
        elem.addEventListener('keyup', drawWizard);
    });

    function drawWizard(ev) {

        if (ev.key === '$') {

            document.getElementById('complex_templates_container').classList.remove('hidden');

            // complex templates
            (0, _steps.startStep)();
        }
        return false;
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdXaXphcmQiLCJldiIsImtleSIsImNsYXNzTGlzdCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7QUFPQSx1QkFBU0EsTUFBVCxDQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSSxxREFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxpQkFBN0IsRUFBK0MsYUFBWSx1QkFBM0Q7QUFESixTQURKO0FBSUksK0NBQUssV0FBVSxrQkFBZixFQUFrQyxJQUFHLDZCQUFyQztBQUpKLEtBREosRUFNWUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQU5aOztBQVNBQyxVQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJMLFNBQVNNLHNCQUFULENBQWdDLGlCQUFoQyxDQUE3QixFQUFpRkMsUUFBUTtBQUNyRkEsYUFBS0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JDLFVBQS9CO0FBQ0gsS0FGRDs7QUFJQSxhQUFTQSxVQUFULENBQW9CQyxFQUFwQixFQUF3Qjs7QUFFcEIsWUFBSUEsR0FBR0MsR0FBSCxLQUFXLEdBQWYsRUFBb0I7O0FBRWhCWCxxQkFBU0MsY0FBVCxDQUF3Qiw2QkFBeEIsRUFDS1csU0FETCxDQUNlQyxNQURmLENBQ3NCLFFBRHRCOztBQUdBO0FBQ0E7QUFDSDtBQUNELGVBQU8sS0FBUDtBQUNIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7c3RhcnRTdGVwfSBmcm9tICcuL3N0YXRlX21hY2hpbmUvc3RlcHMnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZV9jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cIndpemFyZC1lcXVpcHBlZFwiIHBsYWNlaG9sZGVyPVwidHlwZSBhICQtc2lnbiBpbiBoZXJlXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaGlkZGVuXCIgaWQ9XCJjb21wbGV4X3RlbXBsYXRlc19jb250YWluZXJcIi8+XG4gICAgPC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5BcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpemFyZC1lcXVpcHBlZCcpLCBlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZHJhd1dpemFyZCk7XG59KTtcblxuZnVuY3Rpb24gZHJhd1dpemFyZChldikge1xuXG4gICAgaWYgKGV2LmtleSA9PT0gJyQnKSB7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXhfdGVtcGxhdGVzX2NvbnRhaW5lcicpXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gY29tcGxleCB0ZW1wbGF0ZXNcbiAgICAgICAgc3RhcnRTdGVwKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn0iXX0=