define(['react', 'react-dom', 'initStore', 'controls/doubleselectlist', 'actions/actions', 'components/user', 'high-order/deletableComponent', 'misc/util'], function (_react, _reactDom, _initStore, _doubleselectlist, _actions, _user, _deletableComponent, _util) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _doubleselectlist2 = _interopRequireDefault(_doubleselectlist);

  var _user2 = _interopRequireDefault(_user);

  var _deletableComponent2 = _interopRequireDefault(_deletableComponent);

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const DeletableUser = (0, _deletableComponent2.default)(_user2.default);

  const render = () => {
    const state = _initStore.store.getState();
    _reactDom2.default.render(_react2.default.createElement(_doubleselectlist2.default, {
      id: '1',
      selectOptions1: state.groups,
      selectLabelField1: 'name',
      selectValueField1: 'id',

      selectOptions2: state.group_no_user,
      selectLabelField2: 'name',
      selectValueField2: 'id',
      optionsMapper2: state.mappers.userFromId,
      onSelectChange2: idGroup => idUser => _initStore.store.dispatch(_actions.ActionCreators.userEntersGroup(idUser, idGroup)),

      listItems: state.group_user,
      listItemsMapper: state.mappers.userFromId,
      listItemsDisplayMapper: listItemsDisplayMapper
    }), document.getElementById('container'));
  };

  render();
  _initStore.store.subscribe(render);

  function listItemsDisplayMapper(idGroup) {
    return function (item) {
      return _react2.default.createElement(DeletableUser, {
        id: item.id,
        data: item,
        callbacks: { delete: () => _initStore.store.dispatch(_actions.ActionCreators.userLeavesGroup(item.id, idGroup)) } });
    };
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9hcHAuanN4Il0sIm5hbWVzIjpbIkRlbGV0YWJsZVVzZXIiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwiZ3JvdXBzIiwiZ3JvdXBfbm9fdXNlciIsIm1hcHBlcnMiLCJ1c2VyRnJvbUlkIiwiaWRHcm91cCIsImlkVXNlciIsImRpc3BhdGNoIiwidXNlckVudGVyc0dyb3VwIiwiZ3JvdXBfdXNlciIsImxpc3RJdGVtc0Rpc3BsYXlNYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3Vic2NyaWJlIiwiaXRlbSIsImlkIiwiZGVsZXRlIiwidXNlckxlYXZlc0dyb3VwIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsUUFBTUEsZ0JBQWdCLGlEQUF0Qjs7QUFFQSxRQUFNQyxTQUFTLE1BQU07QUFDbkIsVUFBTUMsUUFBUSxpQkFBTUMsUUFBTixFQUFkO0FBQ0EsdUJBQVNGLE1BQVQsQ0FDRTtBQUNFLFVBQUcsR0FETDtBQUVFLHNCQUFnQkMsTUFBTUUsTUFGeEI7QUFHRSx5QkFBa0IsTUFIcEI7QUFJRSx5QkFBa0IsSUFKcEI7O0FBTUUsc0JBQWdCRixNQUFNRyxhQU54QjtBQU9FLHlCQUFrQixNQVBwQjtBQVFFLHlCQUFrQixJQVJwQjtBQVNFLHNCQUFnQkgsTUFBTUksT0FBTixDQUFjQyxVQVRoQztBQVVFLHVCQUFpQkMsV0FBV0MsVUFBVSxpQkFBTUMsUUFBTixDQUFlLHdCQUFlQyxlQUFmLENBQStCRixNQUEvQixFQUF1Q0QsT0FBdkMsQ0FBZixDQVZ4Qzs7QUFZRSxpQkFBV04sTUFBTVUsVUFabkI7QUFhRSx1QkFBaUJWLE1BQU1JLE9BQU4sQ0FBY0MsVUFiakM7QUFjRSw4QkFBd0JNO0FBZDFCLE1BREYsRUFpQklDLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FqQko7QUFtQkQsR0FyQkQ7O0FBdUJBZDtBQUNBLG1CQUFNZSxTQUFOLENBQWdCZixNQUFoQjs7QUFFQSxXQUFTWSxzQkFBVCxDQUFnQ0wsT0FBaEMsRUFBeUM7QUFDdkMsV0FBTyxVQUFTUyxJQUFULEVBQWU7QUFDcEIsYUFBTyw4QkFBQyxhQUFEO0FBQ0wsWUFBSUEsS0FBS0MsRUFESjtBQUVMLGNBQU1ELElBRkQ7QUFHTCxtQkFBVyxFQUFDRSxRQUFRLE1BQU0saUJBQU1ULFFBQU4sQ0FBZSx3QkFBZVUsZUFBZixDQUErQkgsS0FBS0MsRUFBcEMsRUFBd0NWLE9BQXhDLENBQWYsQ0FBZixFQUhOLEdBQVA7QUFJRCxLQUxEO0FBTUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnaW5pdFN0b3JlJztcclxuaW1wb3J0IERvdWJsZVNlbGVjdExpc3QgZnJvbSAnY29udHJvbHMvZG91Ymxlc2VsZWN0bGlzdCc7XHJcbmltcG9ydCB7IEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnYWN0aW9ucy9hY3Rpb25zJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnY29tcG9uZW50cy91c2VyJztcclxuaW1wb3J0IERlbGV0YWJsZUNvbXBvbmVudCBmcm9tICdoaWdoLW9yZGVyL2RlbGV0YWJsZUNvbXBvbmVudCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ21pc2MvdXRpbCc7XHJcblxyXG5jb25zdCBEZWxldGFibGVVc2VyID0gRGVsZXRhYmxlQ29tcG9uZW50KFVzZXIpO1xyXG5cclxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8RG91YmxlU2VsZWN0TGlzdFxyXG4gICAgICBpZD0nMSdcclxuICAgICAgc2VsZWN0T3B0aW9uczE9e3N0YXRlLmdyb3Vwc31cclxuICAgICAgc2VsZWN0TGFiZWxGaWVsZDE9J25hbWUnXHJcbiAgICAgIHNlbGVjdFZhbHVlRmllbGQxPSdpZCdcclxuXHJcbiAgICAgIHNlbGVjdE9wdGlvbnMyPXtzdGF0ZS5ncm91cF9ub191c2VyfVxyXG4gICAgICBzZWxlY3RMYWJlbEZpZWxkMj0nbmFtZSdcclxuICAgICAgc2VsZWN0VmFsdWVGaWVsZDI9J2lkJ1xyXG4gICAgICBvcHRpb25zTWFwcGVyMj17c3RhdGUubWFwcGVycy51c2VyRnJvbUlkfVxyXG4gICAgICBvblNlbGVjdENoYW5nZTI9e2lkR3JvdXAgPT4gaWRVc2VyID0+IHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3JzLnVzZXJFbnRlcnNHcm91cChpZFVzZXIsIGlkR3JvdXApKX1cclxuICAgICAgXHJcbiAgICAgIGxpc3RJdGVtcz17c3RhdGUuZ3JvdXBfdXNlcn1cclxuICAgICAgbGlzdEl0ZW1zTWFwcGVyPXtzdGF0ZS5tYXBwZXJzLnVzZXJGcm9tSWR9XHJcbiAgICAgIGxpc3RJdGVtc0Rpc3BsYXlNYXBwZXI9e2xpc3RJdGVtc0Rpc3BsYXlNYXBwZXJ9XHJcbiAgICAgIC8+LFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcclxuICApO1xyXG59XHJcblxyXG5yZW5kZXIoKTtcclxuc3RvcmUuc3Vic2NyaWJlKHJlbmRlcik7XHJcblxyXG5mdW5jdGlvbiBsaXN0SXRlbXNEaXNwbGF5TWFwcGVyKGlkR3JvdXApIHtcclxuICByZXR1cm4gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgcmV0dXJuIDxEZWxldGFibGVVc2VyXHJcbiAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICBjYWxsYmFja3M9e3tkZWxldGU6ICgpID0+IHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3JzLnVzZXJMZWF2ZXNHcm91cChpdGVtLmlkLCBpZEdyb3VwKSl9fS8+XHJcbiAgfVxyXG59Il19