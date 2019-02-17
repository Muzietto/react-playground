define(['exports', 'react', './MediaQueryContext'], function (exports, _react, _MediaQueryContext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _MediaQueryContext2 = _interopRequireDefault(_MediaQueryContext);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let Consumer = class Consumer extends _react2.default.Component {
    render() {
      return _react2.default.createElement(
        _MediaQueryContext2.default.Consumer,
        null,
        device => _react2.default.createElement(
          'div',
          null,
          'Context says: ',
          device
        )
      );
    }
  };
  exports.default = Consumer;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Db25zdW1lci5qcyJdLCJuYW1lcyI6WyJDb25zdW1lciIsIkNvbXBvbmVudCIsInJlbmRlciIsImRldmljZSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O01BS01BLFEsR0FBTixNQUFNQSxRQUFOLFNBQXVCLGdCQUFNQyxTQUE3QixDQUF1QztBQUNyQ0MsYUFBUztBQUNQLGFBQ0U7QUFBQSxvQ0FBbUIsUUFBbkI7QUFBQTtBQUNHQyxrQkFDQztBQUFBO0FBQUE7QUFBQTtBQUNpQkE7QUFEakI7QUFGSixPQURGO0FBU0Q7QUFYb0MsRztvQkFjeEJILFEiLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVkaWFRdWVyeUNvbnRleHQgZnJvbSAnLi9NZWRpYVF1ZXJ5Q29udGV4dCc7XG5cbmNsYXNzIENvbnN1bWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVkaWFRdWVyeUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHtkZXZpY2UgPT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQ29udGV4dCBzYXlzOiB7ZGV2aWNlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L01lZGlhUXVlcnlDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc3VtZXI7XG4iXX0=