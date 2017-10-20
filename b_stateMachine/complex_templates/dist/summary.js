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
                { className: 'first ' + (props.step > 0 ? 'enabled' : '') },
                '1'
            ),
            _react2.default.createElement(
                'div',
                { className: 'second ' + (props.step > 1 ? 'enabled' : '') },
                '2'
            ),
            _react2.default.createElement(
                'div',
                { className: 'third ' + (props.step > 2 ? 'enabled' : '') },
                '3'
            )
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zdW1tYXJ5LmpzIl0sIm5hbWVzIjpbInN1bW1hcnkiLCJwcm9wcyIsInN0ZXAiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBSXdCQSxPOzs7Ozs7Ozs7O0FBQVQsYUFBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDbkMsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVyxZQUFhQSxNQUFNQyxJQUFOLEdBQWEsQ0FBZCxHQUFtQixTQUFuQixHQUErQixFQUEzQyxDQUFoQjtBQUFBO0FBQUEsYUFESjtBQUlJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLGFBQWNELE1BQU1DLElBQU4sR0FBYSxDQUFkLEdBQW1CLFNBQW5CLEdBQStCLEVBQTVDLENBQWhCO0FBQUE7QUFBQSxhQUpKO0FBT0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsWUFBYUQsTUFBTUMsSUFBTixHQUFhLENBQWQsR0FBbUIsU0FBbkIsR0FBK0IsRUFBM0MsQ0FBaEI7QUFBQTtBQUFBO0FBUEosU0FESjtBQWFIIiwiZmlsZSI6InN1bW1hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1bW1hcnkocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmlyc3QgJyArICgocHJvcHMuc3RlcCA+IDApID8gJ2VuYWJsZWQnIDogJycpfT5cbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2Vjb25kICcgKyAoKHByb3BzLnN0ZXAgPiAxKSA/ICdlbmFibGVkJyA6ICcnKX0+XG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RoaXJkICcgKyAoKHByb3BzLnN0ZXAgPiAyKSA/ICdlbmFibGVkJyA6ICcnKX0+XG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0=