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
                    className: 'second ' + (props.step > 1 ? 'enabled' : ''),
                    onClick: props.handlers && props.handlers[2] },
                '2'
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'third ' + (props.step > 2 ? 'enabled' : ''),
                    onClick: props.handlers && props.handlers[3] },
                '3'
            )
        );

        function _class_name(pos) {

            return dictionary(pos) + (props.step > 0 ? ' enabled' : '') + (props.handlers && props.handlers.length > pos ? ' cursor_pointer' : '');

            function dictionary(pos) {
                return ['first', 'second', 'third'][pos - 1];
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvc3VtbWFyeS5qcyJdLCJuYW1lcyI6WyJzdW1tYXJ5IiwicHJvcHMiLCJfY2xhc3NfbmFtZSIsImhhbmRsZXJzIiwic3RlcCIsInBvcyIsImRpY3Rpb25hcnkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBSXdCQSxPOzs7Ozs7Ozs7O0FBQVQsYUFBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDbkMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSSwrQkFBV0MsWUFBWSxDQUFaLENBRGY7QUFFSSw2QkFBU0QsTUFBTUUsUUFBTixJQUFrQkYsTUFBTUUsUUFBTixDQUFlLENBQWYsQ0FGL0I7QUFBQTtBQUFBLGFBREo7QUFNSTtBQUFBO0FBQUE7QUFDSSwrQkFBVyxhQUFjRixNQUFNRyxJQUFOLEdBQWEsQ0FBZCxHQUFtQixTQUFuQixHQUErQixFQUE1QyxDQURmO0FBRUksNkJBQVNILE1BQU1FLFFBQU4sSUFBa0JGLE1BQU1FLFFBQU4sQ0FBZSxDQUFmLENBRi9CO0FBQUE7QUFBQSxhQU5KO0FBV0k7QUFBQTtBQUFBO0FBQ0ksK0JBQVcsWUFBYUYsTUFBTUcsSUFBTixHQUFhLENBQWQsR0FBbUIsU0FBbkIsR0FBK0IsRUFBM0MsQ0FEZjtBQUVJLDZCQUFTSCxNQUFNRSxRQUFOLElBQWtCRixNQUFNRSxRQUFOLENBQWUsQ0FBZixDQUYvQjtBQUFBO0FBQUE7QUFYSixTQURKOztBQW9CQSxpQkFBU0QsV0FBVCxDQUFxQkcsR0FBckIsRUFBMEI7O0FBRXRCLG1CQUFPQyxXQUFXRCxHQUFYLEtBQ0NKLE1BQU1HLElBQU4sR0FBYSxDQUFkLEdBQW1CLFVBQW5CLEdBQWdDLEVBRGhDLEtBRUNILE1BQU1FLFFBQU4sSUFBa0JGLE1BQU1FLFFBQU4sQ0FBZUksTUFBZixHQUF3QkYsR0FBM0MsR0FBa0QsaUJBQWxELEdBQXNFLEVBRnRFLENBQVA7O0FBSUEscUJBQVNDLFVBQVQsQ0FBb0JELEdBQXBCLEVBQXlCO0FBQ3JCLHVCQUFPLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsRUFBNkJBLE1BQU0sQ0FBbkMsQ0FBUDtBQUNIO0FBQ0o7QUFDSiIsImZpbGUiOiJzdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdW1tYXJ5KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtfY2xhc3NfbmFtZSgxKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVycyAmJiBwcm9wcy5oYW5kbGVyc1sxXX0+XG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2Vjb25kICcgKyAoKHByb3BzLnN0ZXAgPiAxKSA/ICdlbmFibGVkJyA6ICcnKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVycyAmJiBwcm9wcy5oYW5kbGVyc1syXX0+XG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsndGhpcmQgJyArICgocHJvcHMuc3RlcCA+IDIpID8gJ2VuYWJsZWQnIDogJycpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZXJzICYmIHByb3BzLmhhbmRsZXJzWzNdfT5cbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc19uYW1lKHBvcykge1xuXG4gICAgICAgIHJldHVybiBkaWN0aW9uYXJ5KHBvcylcbiAgICAgICAgICAgICsgKChwcm9wcy5zdGVwID4gMCkgPyAnIGVuYWJsZWQnIDogJycpXG4gICAgICAgICAgICArICgocHJvcHMuaGFuZGxlcnMgJiYgcHJvcHMuaGFuZGxlcnMubGVuZ3RoID4gcG9zKSA/ICcgY3Vyc29yX3BvaW50ZXInIDogJycpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpY3Rpb25hcnkocG9zKSB7XG4gICAgICAgICAgICByZXR1cm4gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnXVtwb3MgLSAxXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==