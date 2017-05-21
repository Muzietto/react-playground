define(['exports', '../actions/actions', '../misc/util'], function (exports, _actions, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mainReducer = undefined;

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function mainReducer(state, action) {
    switch (action.type) {
      case _actions.ActionTypes.USER_ENTERS_GROUP:
        // put selected option inside state.selecteds
        var selectedUser = state.users.find(opt => opt.id == action.idUser);
        var newSets = _util2.default.displacedItem(state.users, state.selecteds, selectedUser);
        return Object.assign({}, state, {
          selecteds: newSets.augmented,
          users: newSets.filtered
        });
      case _actions.ActionTypes.USER_LEAVES_GROUP:
        var selectedUser = state.selecteds.find(opt => opt.id == action.user.id);
        var newSets = _util2.default.displacedItem(state.selecteds, state.users, selectedUser);
        return Object.assign({}, state, {
          users: newSets.augmented,
          selecteds: newSets.filtered
        });
      default:
        return state;
    }
  }

  exports.mainReducer = mainReducer;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9yZWR1Y2Vycy9tYWluUmVkdWNlci5qc3giXSwibmFtZXMiOlsibWFpblJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJVU0VSX0VOVEVSU19HUk9VUCIsInNlbGVjdGVkVXNlciIsInVzZXJzIiwiZmluZCIsIm9wdCIsImlkIiwiaWRVc2VyIiwibmV3U2V0cyIsImRpc3BsYWNlZEl0ZW0iLCJzZWxlY3RlZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJhdWdtZW50ZWQiLCJmaWx0ZXJlZCIsIlVTRVJfTEVBVkVTX0dST1VQIiwidXNlciJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFLQSxXQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbEMsWUFBUUEsT0FBT0MsSUFBZjtBQUNFLFdBQUsscUJBQVlDLGlCQUFqQjtBQUNFO0FBQ0EsWUFBSUMsZUFBZUosTUFBTUssS0FBTixDQUNoQkMsSUFEZ0IsQ0FDWEMsT0FBUUEsSUFBSUMsRUFBSixJQUFVUCxPQUFPUSxNQURkLENBQW5CO0FBRUEsWUFBSUMsVUFBVSxlQUFLQyxhQUFMLENBQW1CWCxNQUFNSyxLQUF6QixFQUFnQ0wsTUFBTVksU0FBdEMsRUFBaURSLFlBQWpELENBQWQ7QUFDQSxlQUFPUyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmQsS0FBbEIsRUFBeUI7QUFDOUJZLHFCQUFXRixRQUFRSyxTQURXO0FBRTlCVixpQkFBT0ssUUFBUU07QUFGZSxTQUF6QixDQUFQO0FBSUYsV0FBSyxxQkFBWUMsaUJBQWpCO0FBQ0UsWUFBSWIsZUFBZUosTUFBTVksU0FBTixDQUNoQk4sSUFEZ0IsQ0FDWEMsT0FBUUEsSUFBSUMsRUFBSixJQUFVUCxPQUFPaUIsSUFBUCxDQUFZVixFQURuQixDQUFuQjtBQUVBLFlBQUlFLFVBQVUsZUFBS0MsYUFBTCxDQUFtQlgsTUFBTVksU0FBekIsRUFBb0NaLE1BQU1LLEtBQTFDLEVBQWlERCxZQUFqRCxDQUFkO0FBQ0EsZUFBT1MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JkLEtBQWxCLEVBQXlCO0FBQzlCSyxpQkFBT0ssUUFBUUssU0FEZTtBQUU5QkgscUJBQVdGLFFBQVFNO0FBRlcsU0FBekIsQ0FBUDtBQUlGO0FBQ0UsZUFBT2hCLEtBQVA7QUFuQko7QUFxQkQ7O1VBRVFELFcsR0FBQUEsVyIsImZpbGUiOiJtYWluUmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zJ1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi9taXNjL3V0aWwnO1xyXG5cclxuZnVuY3Rpb24gbWFpblJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZXMuVVNFUl9FTlRFUlNfR1JPVVA6XHJcbiAgICAgIC8vIHB1dCBzZWxlY3RlZCBvcHRpb24gaW5zaWRlIHN0YXRlLnNlbGVjdGVkc1xyXG4gICAgICB2YXIgc2VsZWN0ZWRVc2VyID0gc3RhdGUudXNlcnNcclxuICAgICAgICAuZmluZChvcHQgPT4gKG9wdC5pZCA9PSBhY3Rpb24uaWRVc2VyKSk7XHJcbiAgICAgIHZhciBuZXdTZXRzID0gdXRpbC5kaXNwbGFjZWRJdGVtKHN0YXRlLnVzZXJzLCBzdGF0ZS5zZWxlY3RlZHMsIHNlbGVjdGVkVXNlcik7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIHNlbGVjdGVkczogbmV3U2V0cy5hdWdtZW50ZWQsXHJcbiAgICAgICAgdXNlcnM6IG5ld1NldHMuZmlsdGVyZWRcclxuICAgICAgfSk7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLlVTRVJfTEVBVkVTX0dST1VQOlxyXG4gICAgICB2YXIgc2VsZWN0ZWRVc2VyID0gc3RhdGUuc2VsZWN0ZWRzXHJcbiAgICAgICAgLmZpbmQob3B0ID0+IChvcHQuaWQgPT0gYWN0aW9uLnVzZXIuaWQpKTtcclxuICAgICAgdmFyIG5ld1NldHMgPSB1dGlsLmRpc3BsYWNlZEl0ZW0oc3RhdGUuc2VsZWN0ZWRzLCBzdGF0ZS51c2Vycywgc2VsZWN0ZWRVc2VyKTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgdXNlcnM6IG5ld1NldHMuYXVnbWVudGVkLFxyXG4gICAgICAgIHNlbGVjdGVkczogbmV3U2V0cy5maWx0ZXJlZFxyXG4gICAgICB9KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1haW5SZWR1Y2VyIH07Il19