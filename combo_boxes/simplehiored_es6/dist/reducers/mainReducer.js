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
        var selectedItem = state.users.find(opt => opt.id == action.idUser);
        var newSets = _util2.default.displacedItem(state.users, state.selecteds, selectedItem);
        return {
          selecteds: newSets.augmented,
          users: newSets.filtered
        };
      case _actions.ActionTypes.USER_LEAVES_GROUP:
        var newSets = _util2.default.displacedItem(state.selecteds, state.users, action.user);
        return {
          users: newSets.augmented,
          selecteds: newSets.filtered
        };
      default:
        return state;
    }
  }

  exports.mainReducer = mainReducer;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9yZWR1Y2Vycy9tYWluUmVkdWNlci5qc3giXSwibmFtZXMiOlsibWFpblJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJVU0VSX0VOVEVSU19HUk9VUCIsInNlbGVjdGVkSXRlbSIsInVzZXJzIiwiZmluZCIsIm9wdCIsImlkIiwiaWRVc2VyIiwibmV3U2V0cyIsImRpc3BsYWNlZEl0ZW0iLCJzZWxlY3RlZHMiLCJhdWdtZW50ZWQiLCJmaWx0ZXJlZCIsIlVTRVJfTEVBVkVTX0dST1VQIiwidXNlciJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFLQSxXQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbEMsWUFBUUEsT0FBT0MsSUFBZjtBQUNFLFdBQUsscUJBQVlDLGlCQUFqQjtBQUNFO0FBQ0EsWUFBSUMsZUFBZUosTUFBTUssS0FBTixDQUNoQkMsSUFEZ0IsQ0FDWEMsT0FBUUEsSUFBSUMsRUFBSixJQUFVUCxPQUFPUSxNQURkLENBQW5CO0FBRUEsWUFBSUMsVUFBVSxlQUFLQyxhQUFMLENBQW1CWCxNQUFNSyxLQUF6QixFQUFnQ0wsTUFBTVksU0FBdEMsRUFBaURSLFlBQWpELENBQWQ7QUFDQSxlQUFPO0FBQ0xRLHFCQUFXRixRQUFRRyxTQURkO0FBRUxSLGlCQUFPSyxRQUFRSTtBQUZWLFNBQVA7QUFJRixXQUFLLHFCQUFZQyxpQkFBakI7QUFDRSxZQUFJTCxVQUFVLGVBQUtDLGFBQUwsQ0FBbUJYLE1BQU1ZLFNBQXpCLEVBQW9DWixNQUFNSyxLQUExQyxFQUFpREosT0FBT2UsSUFBeEQsQ0FBZDtBQUNBLGVBQU87QUFDTFgsaUJBQU9LLFFBQVFHLFNBRFY7QUFFTEQscUJBQVdGLFFBQVFJO0FBRmQsU0FBUDtBQUlGO0FBQ0UsZUFBT2QsS0FBUDtBQWpCSjtBQW1CRDs7VUFFUUQsVyxHQUFBQSxXIiwiZmlsZSI6Im1haW5SZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMnXHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL21pc2MvdXRpbCc7XHJcblxyXG5mdW5jdGlvbiBtYWluUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlcy5VU0VSX0VOVEVSU19HUk9VUDpcclxuICAgICAgLy8gcHV0IHNlbGVjdGVkIG9wdGlvbiBpbnNpZGUgc3RhdGUuc2VsZWN0ZWRzXHJcbiAgICAgIHZhciBzZWxlY3RlZEl0ZW0gPSBzdGF0ZS51c2Vyc1xyXG4gICAgICAgIC5maW5kKG9wdCA9PiAob3B0LmlkID09IGFjdGlvbi5pZFVzZXIpKTtcclxuICAgICAgdmFyIG5ld1NldHMgPSB1dGlsLmRpc3BsYWNlZEl0ZW0oc3RhdGUudXNlcnMsIHN0YXRlLnNlbGVjdGVkcywgc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RlZHM6IG5ld1NldHMuYXVnbWVudGVkLFxyXG4gICAgICAgIHVzZXJzOiBuZXdTZXRzLmZpbHRlcmVkXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLlVTRVJfTEVBVkVTX0dST1VQOlxyXG4gICAgICB2YXIgbmV3U2V0cyA9IHV0aWwuZGlzcGxhY2VkSXRlbShzdGF0ZS5zZWxlY3RlZHMsIHN0YXRlLnVzZXJzLCBhY3Rpb24udXNlcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcnM6IG5ld1NldHMuYXVnbWVudGVkLFxyXG4gICAgICAgIHNlbGVjdGVkczogbmV3U2V0cy5maWx0ZXJlZFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgbWFpblJlZHVjZXIgfTsiXX0=