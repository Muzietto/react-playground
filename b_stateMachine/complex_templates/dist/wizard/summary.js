define(['exports', 'react'], function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = summary;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // NB props.handlers[0] is meant for the wizard restart link
    function summary(props) {
        return _react2.default.createElement(
            'div',
            { className: 'summary' },
            _react2.default.createElement(
                'div',
                {
                    className: _class_name(1),
                    onClick: props.handlers && props.handlers[1] },
                '1'
            ),
            _react2.default.createElement(
                'div',
                {
                    className: _class_name(2),
                    onClick: props.handlers && props.handlers[2] },
                '2'
            ),
            _react2.default.createElement(
                'div',
                {
                    className: _class_name(3),
                    onClick: props.handlers && props.handlers[3] },
                '3'
            )
        );

        function _class_name(pos) {

            return dictionary(pos) + (props.step >= pos ? ' enabled' : '') + (props.handlers && props.handlers.length > pos ? ' cursor_pointer' : '');

            function dictionary(pos) {
                return ['zeroth', 'first', 'second', 'third'][pos];
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvc3VtbWFyeS5qcyJdLCJuYW1lcyI6WyJzdW1tYXJ5IiwicHJvcHMiLCJfY2xhc3NfbmFtZSIsImhhbmRsZXJzIiwicG9zIiwiZGljdGlvbmFyeSIsInN0ZXAiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBS3dCQSxPOzs7Ozs7Ozs7O0FBRHhCO0FBQ2UsYUFBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDbkMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSwrQkFBV0MsWUFBWSxDQUFaLENBRGY7QUFFSSw2QkFBU0QsTUFBTUUsUUFBTixJQUFrQkYsTUFBTUUsUUFBTixDQUFlLENBQWYsQ0FGL0I7QUFBQTtBQUFBLGFBREo7QUFNSTtBQUFBO0FBQUE7QUFDSSwrQkFBV0QsWUFBWSxDQUFaLENBRGY7QUFFSSw2QkFBU0QsTUFBTUUsUUFBTixJQUFrQkYsTUFBTUUsUUFBTixDQUFlLENBQWYsQ0FGL0I7QUFBQTtBQUFBLGFBTko7QUFXSTtBQUFBO0FBQUE7QUFDSSwrQkFBV0QsWUFBWSxDQUFaLENBRGY7QUFFSSw2QkFBU0QsTUFBTUUsUUFBTixJQUFrQkYsTUFBTUUsUUFBTixDQUFlLENBQWYsQ0FGL0I7QUFBQTtBQUFBO0FBWEosU0FESjs7QUFvQkEsaUJBQVNELFdBQVQsQ0FBcUJFLEdBQXJCLEVBQTBCOztBQUV0QixtQkFBT0MsV0FBV0QsR0FBWCxLQUNDSCxNQUFNSyxJQUFOLElBQWNGLEdBQWYsR0FBc0IsVUFBdEIsR0FBbUMsRUFEbkMsS0FFQ0gsTUFBTUUsUUFBTixJQUFrQkYsTUFBTUUsUUFBTixDQUFlSSxNQUFmLEdBQXdCSCxHQUEzQyxHQUFrRCxpQkFBbEQsR0FBc0UsRUFGdEUsQ0FBUDs7QUFJQSxxQkFBU0MsVUFBVCxDQUFvQkQsR0FBcEIsRUFBeUI7QUFDckIsdUJBQU8sQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixRQUFwQixFQUE4QixPQUE5QixFQUF1Q0EsR0FBdkMsQ0FBUDtBQUNIO0FBQ0o7QUFDSiIsImZpbGUiOiJzdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBOQiBwcm9wcy5oYW5kbGVyc1swXSBpcyBtZWFudCBmb3IgdGhlIHdpemFyZCByZXN0YXJ0IGxpbmtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1bW1hcnkocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc19uYW1lKDEpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZXJzICYmIHByb3BzLmhhbmRsZXJzWzFdfT5cbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc19uYW1lKDIpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZXJzICYmIHByb3BzLmhhbmRsZXJzWzJdfT5cbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc19uYW1lKDMpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZXJzICYmIHByb3BzLmhhbmRsZXJzWzNdfT5cbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc19uYW1lKHBvcykge1xuXG4gICAgICAgIHJldHVybiBkaWN0aW9uYXJ5KHBvcylcbiAgICAgICAgICAgICsgKChwcm9wcy5zdGVwID49IHBvcykgPyAnIGVuYWJsZWQnIDogJycpXG4gICAgICAgICAgICArICgocHJvcHMuaGFuZGxlcnMgJiYgcHJvcHMuaGFuZGxlcnMubGVuZ3RoID4gcG9zKSA/ICcgY3Vyc29yX3BvaW50ZXInIDogJycpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpY3Rpb25hcnkocG9zKSB7XG4gICAgICAgICAgICByZXR1cm4gWyd6ZXJvdGgnLCAnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJ11bcG9zXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==