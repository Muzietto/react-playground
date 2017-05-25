define(['react', 'react-dom', 'shell', 'initStore', 'actions/actions', 'user', 'controls/selectlist', 'high-order/deletableComponent', 'misc/util'], function (_react, _reactDom, _shell, _initStore, _actions, _user, _selectlist, _deletableComponent, _util) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _shell2 = _interopRequireDefault(_shell);

  var _user2 = _interopRequireDefault(_user);

  var _selectList2 = _interopRequireDefault(_selectlist);

  var _deletableComponent2 = _interopRequireDefault(_deletableComponent);

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const DeletableUser = (0, _deletableComponent2.default)(_user2.default);

  const render = () => {
    var state = _initStore.store.getState();
    _reactDom2.default.render(_react2.default.createElement(_selectList2.default, {
      id: '1',
      options: state.users,
      labelField: 'name',
      valueField: 'id',
      optionsMapper: state.mappers.testMapper,
      onSelectChange: id => _initStore.store.dispatch(_actions.ActionCreators.userEntersGroup(id)),

      listItems: state.selecteds,
      itemsMapper: state.mappers.testMapper,
      listItemsDisplayMapper: listItemsDisplayMapper
    }), document.getElementById('container'));
  };

  render();
  _initStore.store.subscribe(render);

  function listItemsDisplayMapper(item) {
    return _react2.default.createElement(DeletableUser, {
      data: item,
      callbacks: { delete: () => _initStore.store.dispatch(_actions.ActionCreators.userLeavesGroup(item.id)) } });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9hcHAuanN4Il0sIm5hbWVzIjpbIkRlbGV0YWJsZVVzZXIiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidXNlcnMiLCJtYXBwZXJzIiwidGVzdE1hcHBlciIsImlkIiwiZGlzcGF0Y2giLCJ1c2VyRW50ZXJzR3JvdXAiLCJzZWxlY3RlZHMiLCJsaXN0SXRlbXNEaXNwbGF5TWFwcGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1YnNjcmliZSIsIml0ZW0iLCJkZWxldGUiLCJ1c2VyTGVhdmVzR3JvdXAiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLFFBQU1BLGdCQUFnQixpREFBdEI7O0FBRUEsUUFBTUMsU0FBUyxNQUFNO0FBQ25CLFFBQUlDLFFBQVEsaUJBQU1DLFFBQU4sRUFBWjtBQUNBLHVCQUFTRixNQUFULENBQ0U7QUFDRSxVQUFHLEdBREw7QUFFRSxlQUFTQyxNQUFNRSxLQUZqQjtBQUdFLGtCQUFXLE1BSGI7QUFJRSxrQkFBVyxJQUpiO0FBS0UscUJBQWVGLE1BQU1HLE9BQU4sQ0FBY0MsVUFML0I7QUFNRSxzQkFBZ0JDLE1BQU0saUJBQU1DLFFBQU4sQ0FBZSx3QkFBZUMsZUFBZixDQUErQkYsRUFBL0IsQ0FBZixDQU54Qjs7QUFRRSxpQkFBV0wsTUFBTVEsU0FSbkI7QUFTRSxtQkFBYVIsTUFBTUcsT0FBTixDQUFjQyxVQVQ3QjtBQVVFLDhCQUF3Qks7QUFWMUIsTUFERixFQWFFQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBYkY7QUFlRCxHQWpCRDs7QUFtQkFaO0FBQ0EsbUJBQU1hLFNBQU4sQ0FBZ0JiLE1BQWhCOztBQUVBLFdBQVNVLHNCQUFULENBQWdDSSxJQUFoQyxFQUFzQztBQUNwQyxXQUFPLDhCQUFDLGFBQUQ7QUFDTCxZQUFNQSxJQUREO0FBRUwsaUJBQVcsRUFBQ0MsUUFBUSxNQUFNLGlCQUFNUixRQUFOLENBQWUsd0JBQWVTLGVBQWYsQ0FBK0JGLEtBQUtSLEVBQXBDLENBQWYsQ0FBZixFQUZOLEdBQVA7QUFHRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFNoZWxsIGZyb20gJ3NoZWxsJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdpbml0U3RvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ2FjdGlvbnMvYWN0aW9ucyc7XHJcbmltcG9ydCBVc2VyIGZyb20gJ3VzZXInO1xyXG5pbXBvcnQgU2VsZWN0TGlzdCBmcm9tICdjb250cm9scy9zZWxlY3RMaXN0JztcclxuaW1wb3J0IERlbGV0YWJsZUNvbXBvbmVudCBmcm9tICdoaWdoLW9yZGVyL2RlbGV0YWJsZUNvbXBvbmVudCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ21pc2MvdXRpbCc7XHJcblxyXG5jb25zdCBEZWxldGFibGVVc2VyID0gRGVsZXRhYmxlQ29tcG9uZW50KFVzZXIpO1xyXG5cclxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPFNlbGVjdExpc3RcclxuICAgICAgaWQ9XCIxXCJcclxuICAgICAgb3B0aW9ucz17c3RhdGUudXNlcnN9XHJcbiAgICAgIGxhYmVsRmllbGQ9J25hbWUnXHJcbiAgICAgIHZhbHVlRmllbGQ9J2lkJ1xyXG4gICAgICBvcHRpb25zTWFwcGVyPXtzdGF0ZS5tYXBwZXJzLnRlc3RNYXBwZXJ9XHJcbiAgICAgIG9uU2VsZWN0Q2hhbmdlPXtpZCA9PiBzdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9ycy51c2VyRW50ZXJzR3JvdXAoaWQpKX1cclxuICAgICAgXHJcbiAgICAgIGxpc3RJdGVtcz17c3RhdGUuc2VsZWN0ZWRzfVxyXG4gICAgICBpdGVtc01hcHBlcj17c3RhdGUubWFwcGVycy50ZXN0TWFwcGVyfVxyXG4gICAgICBsaXN0SXRlbXNEaXNwbGF5TWFwcGVyPXtsaXN0SXRlbXNEaXNwbGF5TWFwcGVyfVxyXG4gICAgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcclxuICApO1xyXG59XHJcblxyXG5yZW5kZXIoKTtcclxuc3RvcmUuc3Vic2NyaWJlKHJlbmRlcik7XHJcblxyXG5mdW5jdGlvbiBsaXN0SXRlbXNEaXNwbGF5TWFwcGVyKGl0ZW0pIHtcclxuICByZXR1cm4gPERlbGV0YWJsZVVzZXJcclxuICAgIGRhdGE9e2l0ZW19XHJcbiAgICBjYWxsYmFja3M9e3tkZWxldGU6ICgpID0+IHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3JzLnVzZXJMZWF2ZXNHcm91cChpdGVtLmlkKSl9fS8+XHJcbn0iXX0=