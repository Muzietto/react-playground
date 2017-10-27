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
        let wizardContainer = document.getElementById('complex_templates_container');

        if (ev.key === '$') {

            let promise = new Promise(function (resolve, reject) {

                Object.defineProperty(resolve, 'name', { value: 'resolveCallback' });

                wizardContainer.classList.remove('hidden');

                (0, _steps.startStep)(resolve, true); // REPLACE_CALLBACK
            });

            promise.then(wizardResult => {
                ev.target.value += wizardResult;
                _reactDom2.default.render(null, wizardContainer);
            }).catch(err => alert('Wizard failure: ' + err));

            return false;
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdXaXphcmQiLCJldiIsIndpemFyZENvbnRhaW5lciIsImtleSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0aGVuIiwid2l6YXJkUmVzdWx0IiwidGFyZ2V0IiwiY2F0Y2giLCJlcnIiLCJhbGVydCJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7QUFPQSx1QkFBU0EsTUFBVCxDQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSSxxREFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxpQkFBN0IsRUFBK0MsYUFBWSx1QkFBM0Q7QUFESixTQURKO0FBSUksK0NBQUssV0FBVSxrQkFBZixFQUFrQyxJQUFHLDZCQUFyQztBQUpKLEtBREosRUFNWUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQU5aOztBQVNBQyxVQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJMLFNBQVNNLHNCQUFULENBQWdDLGlCQUFoQyxDQUE3QixFQUFpRkMsUUFBUTtBQUNyRkEsYUFBS0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JDLFVBQS9CO0FBQ0gsS0FGRDs7QUFJQSxhQUFTQSxVQUFULENBQW9CQyxFQUFwQixFQUF3QjtBQUNwQixZQUFJQyxrQkFBa0JYLFNBQVNDLGNBQVQsQ0FBd0IsNkJBQXhCLENBQXRCOztBQUVBLFlBQUlTLEdBQUdFLEdBQUgsS0FBVyxHQUFmLEVBQW9COztBQUVoQixnQkFBSUMsVUFBVSxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7O0FBRWpEQyx1QkFBT0MsY0FBUCxDQUFzQkgsT0FBdEIsRUFBK0IsTUFBL0IsRUFBdUMsRUFBQ0ksT0FBTyxpQkFBUixFQUF2Qzs7QUFFQVIsZ0NBQWdCUyxTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsUUFBakM7O0FBRUEsc0NBQVVOLE9BQVYsRUFBbUIsSUFBbkIsRUFOaUQsQ0FNdkI7QUFDN0IsYUFQYSxDQUFkOztBQVNBRixvQkFDS1MsSUFETCxDQUNVQyxnQkFBZ0I7QUFDbEJiLG1CQUFHYyxNQUFILENBQVVMLEtBQVYsSUFBbUJJLFlBQW5CO0FBQ0EsbUNBQVN4QixNQUFULENBQWdCLElBQWhCLEVBQXNCWSxlQUF0QjtBQUNILGFBSkwsRUFLS2MsS0FMTCxDQUtXQyxPQUFPQyxNQUFNLHFCQUFxQkQsR0FBM0IsQ0FMbEI7O0FBT0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0oiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHtzdGFydFN0ZXB9IGZyb20gJy4vc3RhdGVfbWFjaGluZS9zdGVwcyc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlX2NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwid2l6YXJkLWVxdWlwcGVkXCIgcGxhY2Vob2xkZXI9XCJ0eXBlIGEgJC1zaWduIGluIGhlcmVcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoaWRkZW5cIiBpZD1cImNvbXBsZXhfdGVtcGxhdGVzX2NvbnRhaW5lclwiLz5cbiAgICA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cbkFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2l6YXJkLWVxdWlwcGVkJyksIGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkcmF3V2l6YXJkKTtcbn0pO1xuXG5mdW5jdGlvbiBkcmF3V2l6YXJkKGV2KSB7XG4gICAgbGV0IHdpemFyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV4X3RlbXBsYXRlc19jb250YWluZXInKTtcblxuICAgIGlmIChldi5rZXkgPT09ICckJykge1xuXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgJ25hbWUnLCB7dmFsdWU6ICdyZXNvbHZlQ2FsbGJhY2snfSk7XG5cbiAgICAgICAgICAgIHdpemFyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgc3RhcnRTdGVwKHJlc29sdmUsIHRydWUpOyAvLyBSRVBMQUNFX0NBTExCQUNLXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKHdpemFyZFJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgZXYudGFyZ2V0LnZhbHVlICs9IHdpemFyZFJlc3VsdDtcbiAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIobnVsbCwgd2l6YXJkQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGFsZXJ0KCdXaXphcmQgZmFpbHVyZTogJyArIGVycikpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59Il19