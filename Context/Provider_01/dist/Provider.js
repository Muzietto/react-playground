define(['exports', 'react', './MediaQueryContext', './Granpa'], function (exports, _react, _MediaQueryContext, _Granpa) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _MediaQueryContext2 = _interopRequireDefault(_MediaQueryContext);

  var _Granpa2 = _interopRequireDefault(_Granpa);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let Provider = class Provider extends _react2.default.Component {
    render() {
      return _react2.default.createElement(
        _MediaQueryContext2.default.Provider,
        { value: 'tablet' },
        this.props.children
      );
    }
  };
  exports.default = Provider;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Qcm92aWRlci5qcyJdLCJuYW1lcyI6WyJQcm92aWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BTU1BLFEsR0FBTixNQUFNQSxRQUFOLFNBQXVCLGdCQUFNQyxTQUE3QixDQUF1QztBQUNyQ0MsYUFBUztBQUNQLGFBQ0U7QUFBQSxvQ0FBbUIsUUFBbkI7QUFBQSxVQUE0QixPQUFPLFFBQW5DO0FBQ0csYUFBS0MsS0FBTCxDQUFXQztBQURkLE9BREY7QUFLRDtBQVBvQyxHO29CQVV4QkosUSIsImZpbGUiOiJQcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWRpYVF1ZXJ5Q29udGV4dCBmcm9tICcuL01lZGlhUXVlcnlDb250ZXh0JztcbmltcG9ydCBHcmFucGEgZnJvbSAnLi9HcmFucGEnO1xuXG5jbGFzcyBQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lZGlhUXVlcnlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsndGFibGV0J30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9NZWRpYVF1ZXJ5Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyO1xuIl19