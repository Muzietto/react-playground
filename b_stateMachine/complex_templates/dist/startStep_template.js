define(['react', 'react-dom', './wizard', './body_startStep'], function (_react, _reactDom, _wizard, _body_startStep) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_startStep2 = _interopRequireDefault(_body_startStep);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let wizardProps = {
        body: {
            body_renderer: _body_startStep2.default
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zdGFydFN0ZXBfdGVtcGxhdGUuanMiXSwibmFtZXMiOlsid2l6YXJkUHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0Iiwic2F2ZUJ1dHRvbiIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLFFBQUlBLGNBQWM7QUFDZEMsY0FBTTtBQUNGQztBQURFLFNBRFE7QUFJZEMsZ0JBQVE7QUFDSkMsMEJBQWM7QUFDVkMsMEJBQVUsS0FEQTtBQUVWQyx5QkFBUyxNQUFNO0FBQ1hDLDBCQUFNLHVCQUFOO0FBQ0g7QUFKUyxhQURWO0FBT0pDLHdCQUFZO0FBQ1JILDBCQUFVLElBREY7QUFFUkMseUJBQVMsTUFBTTtBQUNYQywwQkFBTSxxQkFBTjtBQUNIO0FBSk87QUFQUjtBQUpNLEtBQWxCOztBQW9CQSx1QkFBU0UsTUFBVCxDQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPVCxXQUFQO0FBREwsU0FESjtBQUlJLCtDQUFLLFdBQVUsV0FBZixFQUEyQixJQUFHLHlCQUE5QjtBQUpKLEtBREosRUFNWVUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQU5aIiwiZmlsZSI6InN0YXJ0U3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgV2l6YXJkIGZyb20gJy4vd2l6YXJkJztcbmltcG9ydCBib2R5X3N0YXJ0U3RlcCBmcm9tICcuL2JvZHlfc3RhcnRTdGVwJztcblxubGV0IHdpemFyZFByb3BzID0ge1xuICAgIGJvZHk6IHtcbiAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9zdGFydFN0ZXAsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NhbmNlbCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHtXaXphcmQod2l6YXJkUHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cInN0YXRlX21hY2hpbmVfY29udGFpbmVyXCIvPlxuICAgIDwvZGl2PiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iXX0=