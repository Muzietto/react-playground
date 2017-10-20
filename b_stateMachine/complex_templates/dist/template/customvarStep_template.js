define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_customvar', '../wizard/core/core_customvar'], function (exports, _react, _wizard, _body_customvar, _core_customvar) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = startStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_customvar2 = _interopRequireDefault(_body_customvar);

    var _core_customvar2 = _interopRequireDefault(_core_customvar);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function startStep_template(wizardProps) {
        wizardProps.body = {
            body_renderer: _body_customvar2.default
        };
        wizardProps.core = {
            core_renderer: _core_customvar2.default
        };
        wizardProps.footer.cancelButton.disabled = false;
        wizardProps.footer.saveButton.disabled = true;

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcF90ZW1wbGF0ZSIsIndpemFyZFByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwic2F2ZUJ1dHRvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFRd0JBLGtCOzs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0Esa0JBQVQsQ0FBNEJDLFdBQTVCLEVBQXlDO0FBQ3BEQSxvQkFBWUMsSUFBWixHQUFtQjtBQUNmQztBQURlLFNBQW5CO0FBR0FGLG9CQUFZRyxJQUFaLEdBQW1CO0FBQ2ZDO0FBRGUsU0FBbkI7QUFHQUosb0JBQVlLLE1BQVosQ0FBbUJDLFlBQW5CLENBQWdDQyxRQUFoQyxHQUEyQyxLQUEzQztBQUNBUCxvQkFBWUssTUFBWixDQUFtQkcsVUFBbkIsQ0FBOEJELFFBQTlCLEdBQXlDLElBQXpDOztBQUVBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9QLFdBQVA7QUFETCxTQURKO0FBS0giLCJmaWxlIjoiY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFdpemFyZCBmcm9tICcuLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBib2R5X2N1c3RvbXZhciBmcm9tICcuLi93aXphcmQvYm9keS9ib2R5X2N1c3RvbXZhcic7XG5pbXBvcnQgY29yZV9jdXN0b212YXIgZnJvbSAnLi4vd2l6YXJkL2NvcmUvY29yZV9jdXN0b212YXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydFN0ZXBfdGVtcGxhdGUod2l6YXJkUHJvcHMpIHtcbiAgICB3aXphcmRQcm9wcy5ib2R5ID0ge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X2N1c3RvbXZhcixcbiAgICB9O1xuICAgIHdpemFyZFByb3BzLmNvcmUgPSB7XG4gICAgICAgIGNvcmVfcmVuZGVyZXI6IGNvcmVfY3VzdG9tdmFyLFxuICAgIH07XG4gICAgd2l6YXJkUHJvcHMuZm9vdGVyLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHdpemFyZFByb3BzLmZvb3Rlci5zYXZlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHdpemFyZFByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0=