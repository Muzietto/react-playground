define(['exports', 'react', '../../template/components/Accordion'], function (exports, _react, _Accordion) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = core_dataset;

    var _react2 = _interopRequireDefault(_react);

    var _Accordion2 = _interopRequireDefault(_Accordion);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function core_dataset(props) {

        let state = props.state;

        return _react2.default.createElement(
            'div',
            { className: 'core' },
            _react2.default.createElement(
                'p',
                null,
                'This is the core dataset saying: ',
                props.core.message
            ),
            props.handlers.forward.map((handlerArray, index) => {

                let accordionChildren = handlerArray.map((handler, idx) => ({
                    name: state.dataset_keys[index][idx],
                    handler
                }));

                return _react2.default.createElement(_Accordion2.default, {
                    key: index,
                    accordion_name: state.dataset_name[index],
                    accordion_children: accordionChildren
                });
            })
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvY29yZS9jb3JlX2RhdGFzZXQuanMiXSwibmFtZXMiOlsiY29yZV9kYXRhc2V0IiwicHJvcHMiLCJzdGF0ZSIsImNvcmUiLCJtZXNzYWdlIiwiaGFuZGxlcnMiLCJmb3J3YXJkIiwibWFwIiwiaGFuZGxlckFycmF5IiwiaW5kZXgiLCJhY2NvcmRpb25DaGlsZHJlbiIsImhhbmRsZXIiLCJpZHgiLCJuYW1lIiwiZGF0YXNldF9rZXlzIiwiZGF0YXNldF9uYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU13QkEsWTs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7O0FBRXhDLFlBQUlDLFFBQVFELE1BQU1DLEtBQWxCOztBQUVBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBcUNELHNCQUFNRSxJQUFOLENBQVdDO0FBQWhELGFBREo7QUFHUUgsa0JBQU1JLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsR0FBdkIsQ0FBMkIsQ0FBQ0MsWUFBRCxFQUFlQyxLQUFmLEtBQXlCOztBQUVoRCxvQkFBSUMsb0JBQW9CRixhQUNuQkQsR0FEbUIsQ0FDZixDQUFDSSxPQUFELEVBQVVDLEdBQVYsTUFBbUI7QUFDcEJDLDBCQUFNWCxNQUFNWSxZQUFOLENBQW1CTCxLQUFuQixFQUEwQkcsR0FBMUIsQ0FEYztBQUVwQkQ7QUFGb0IsaUJBQW5CLENBRGUsQ0FBeEI7O0FBTUEsdUJBQU87QUFDSCx5QkFBS0YsS0FERjtBQUVILG9DQUFnQlAsTUFBTWEsWUFBTixDQUFtQk4sS0FBbkIsQ0FGYjtBQUdILHdDQUFvQkM7QUFIakIsa0JBQVA7QUFLSCxhQWJEO0FBSFIsU0FESjtBQXFCSCIsImZpbGUiOiJjb3JlX2RhdGFzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi4vLi4vdGVtcGxhdGUvY29tcG9uZW50cy9BY2NvcmRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3JlX2RhdGFzZXQocHJvcHMpIHtcblxuICAgIGxldCBzdGF0ZSA9IHByb3BzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3JlXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjb3JlIGRhdGFzZXQgc2F5aW5nOiB7cHJvcHMuY29yZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVycy5mb3J3YXJkLm1hcCgoaGFuZGxlckFycmF5LCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25DaGlsZHJlbiA9IGhhbmRsZXJBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaGFuZGxlciwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHN0YXRlLmRhdGFzZXRfa2V5c1tpbmRleF1baWR4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8QWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3JkaW9uX25hbWU9e3N0YXRlLmRhdGFzZXRfbmFtZVtpbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvcmRpb25fY2hpbGRyZW49e2FjY29yZGlvbkNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19