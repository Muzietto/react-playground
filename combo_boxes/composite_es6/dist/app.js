define(['react', 'react-dom', 'initStore', 'composite'], function (_react, _reactDom, _initStore, _composite) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _composite2 = _interopRequireDefault(_composite);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const state = _initStore.store.getState();

  const render = () => _reactDom2.default.render(_react2.default.createElement(_composite2.default, {
    id: '1',
    options1: state.groups,
    options2: state.group_user,
    labelField1: 'name',
    valueField1: 'id',
    labelField2: 'name',
    valueField2: 'id',
    optionsMapper2: state.mappers.userInGroup,

    listItems: state.group_user,
    itemsMapper: state.mappers.userInGroup
  }), document.getElementById('container'));

  render();
  _initStore.store.subscribe(render);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9hcHAuanN4Il0sIm5hbWVzIjpbInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJncm91cHMiLCJncm91cF91c2VyIiwibWFwcGVycyIsInVzZXJJbkdyb3VwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1YnNjcmliZSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztBQU9BLFFBQU1BLFFBQVEsaUJBQU1DLFFBQU4sRUFBZDs7QUFFQSxRQUFNQyxTQUFTLE1BQU0sbUJBQVNBLE1BQVQsQ0FDbkI7QUFDRSxRQUFHLEdBREw7QUFFRSxjQUFVRixNQUFNRyxNQUZsQjtBQUdFLGNBQVVILE1BQU1JLFVBSGxCO0FBSUUsaUJBQVksTUFKZDtBQUtFLGlCQUFZLElBTGQ7QUFNRSxpQkFBWSxNQU5kO0FBT0UsaUJBQVksSUFQZDtBQVFFLG9CQUFnQkosTUFBTUssT0FBTixDQUFjQyxXQVJoQzs7QUFVRSxlQUFXTixNQUFNSSxVQVZuQjtBQVdFLGlCQUFhSixNQUFNSyxPQUFOLENBQWNDO0FBWDdCLElBRG1CLEVBY2pCQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBZGlCLENBQXJCOztBQWlCQU47QUFDQSxtQkFBTU8sU0FBTixDQUFnQlAsTUFBaEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnaW5pdFN0b3JlJztcclxuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICdjb21wb3NpdGUnO1xyXG5cclxuY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG5cclxuY29uc3QgcmVuZGVyID0gKCkgPT4gUmVhY3RET00ucmVuZGVyKFxyXG4gIDxDb21wb3NpdGVcclxuICAgIGlkPScxJ1xyXG4gICAgb3B0aW9uczE9e3N0YXRlLmdyb3Vwc31cclxuICAgIG9wdGlvbnMyPXtzdGF0ZS5ncm91cF91c2VyfVxyXG4gICAgbGFiZWxGaWVsZDE9J25hbWUnXHJcbiAgICB2YWx1ZUZpZWxkMT0naWQnXHJcbiAgICBsYWJlbEZpZWxkMj0nbmFtZSdcclxuICAgIHZhbHVlRmllbGQyPSdpZCdcclxuICAgIG9wdGlvbnNNYXBwZXIyPXtzdGF0ZS5tYXBwZXJzLnVzZXJJbkdyb3VwfVxyXG4gICAgXHJcbiAgICBsaXN0SXRlbXM9e3N0YXRlLmdyb3VwX3VzZXJ9XHJcbiAgICBpdGVtc01hcHBlcj17c3RhdGUubWFwcGVycy51c2VySW5Hcm91cH1cclxuICAgIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXHJcbik7XHJcblxyXG5yZW5kZXIoKTtcclxuc3RvcmUuc3Vic2NyaWJlKHJlbmRlcik7Il19