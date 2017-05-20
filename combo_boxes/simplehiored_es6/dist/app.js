define(['react', 'react-dom', 'shell', './initStore'], function (_react, _reactDom, _shell, _initStore) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _shell2 = _interopRequireDefault(_shell);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const render = () => _reactDom2.default.render(_react2.default.createElement(_shell2.default, null), document.getElementById('container'));

  render();
  _initStore.store.subscribe(render);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9hcHAuanN4Il0sIm5hbWVzIjpbInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJzY3JpYmUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFPQSxRQUFNQSxTQUFTLE1BQU0sbUJBQVNBLE1BQVQsQ0FDbkIsb0RBRG1CLEVBRWpCQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBRmlCLENBQXJCOztBQUtBRjtBQUNBLG1CQUFNRyxTQUFOLENBQWdCSCxNQUFoQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFNoZWxsIGZyb20gJ3NoZWxsJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL2luaXRTdG9yZSc7XHJcblxyXG5jb25zdCByZW5kZXIgPSAoKSA9PiBSZWFjdERPTS5yZW5kZXIoXHJcbiAgPFNoZWxsLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcclxuKTtcclxuXHJcbnJlbmRlcigpO1xyXG5zdG9yZS5zdWJzY3JpYmUocmVuZGVyKTsiXX0=