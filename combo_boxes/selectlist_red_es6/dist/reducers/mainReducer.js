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
        var selectedUser = state.selecteds.find(opt => opt.id == action.idUser);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9yZWR1Y2Vycy9tYWluUmVkdWNlci5qc3giXSwibmFtZXMiOlsibWFpblJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJVU0VSX0VOVEVSU19HUk9VUCIsInNlbGVjdGVkVXNlciIsInVzZXJzIiwiZmluZCIsIm9wdCIsImlkIiwiaWRVc2VyIiwibmV3U2V0cyIsImRpc3BsYWNlZEl0ZW0iLCJzZWxlY3RlZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJhdWdtZW50ZWQiLCJmaWx0ZXJlZCIsIlVTRVJfTEVBVkVTX0dST1VQIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUtBLFdBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxNQUE1QixFQUFvQztBQUNsQyxZQUFRQSxPQUFPQyxJQUFmO0FBQ0UsV0FBSyxxQkFBWUMsaUJBQWpCO0FBQ0U7QUFDQSxZQUFJQyxlQUFlSixNQUFNSyxLQUFOLENBQ2hCQyxJQURnQixDQUNYQyxPQUFRQSxJQUFJQyxFQUFKLElBQVVQLE9BQU9RLE1BRGQsQ0FBbkI7QUFFQSxZQUFJQyxVQUFVLGVBQUtDLGFBQUwsQ0FBbUJYLE1BQU1LLEtBQXpCLEVBQWdDTCxNQUFNWSxTQUF0QyxFQUFpRFIsWUFBakQsQ0FBZDtBQUNBLGVBQU9TLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZCxLQUFsQixFQUF5QjtBQUM5QlkscUJBQVdGLFFBQVFLLFNBRFc7QUFFOUJWLGlCQUFPSyxRQUFRTTtBQUZlLFNBQXpCLENBQVA7QUFJRixXQUFLLHFCQUFZQyxpQkFBakI7QUFDRSxZQUFJYixlQUFlSixNQUFNWSxTQUFOLENBQ2hCTixJQURnQixDQUNYQyxPQUFRQSxJQUFJQyxFQUFKLElBQVVQLE9BQU9RLE1BRGQsQ0FBbkI7QUFFQSxZQUFJQyxVQUFVLGVBQUtDLGFBQUwsQ0FBbUJYLE1BQU1ZLFNBQXpCLEVBQW9DWixNQUFNSyxLQUExQyxFQUFpREQsWUFBakQsQ0FBZDtBQUNBLGVBQU9TLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZCxLQUFsQixFQUF5QjtBQUM5QkssaUJBQU9LLFFBQVFLLFNBRGU7QUFFOUJILHFCQUFXRixRQUFRTTtBQUZXLFNBQXpCLENBQVA7QUFJRjtBQUNFLGVBQU9oQixLQUFQO0FBbkJKO0FBcUJEOztVQUVRRCxXLEdBQUFBLFciLCJmaWxlIjoibWFpblJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucydcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbWlzYy91dGlsJztcclxuXHJcbmZ1bmN0aW9uIG1haW5SZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLlVTRVJfRU5URVJTX0dST1VQOlxyXG4gICAgICAvLyBwdXQgc2VsZWN0ZWQgb3B0aW9uIGluc2lkZSBzdGF0ZS5zZWxlY3RlZHNcclxuICAgICAgdmFyIHNlbGVjdGVkVXNlciA9IHN0YXRlLnVzZXJzXHJcbiAgICAgICAgLmZpbmQob3B0ID0+IChvcHQuaWQgPT0gYWN0aW9uLmlkVXNlcikpO1xyXG4gICAgICB2YXIgbmV3U2V0cyA9IHV0aWwuZGlzcGxhY2VkSXRlbShzdGF0ZS51c2Vycywgc3RhdGUuc2VsZWN0ZWRzLCBzZWxlY3RlZFVzZXIpO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBzZWxlY3RlZHM6IG5ld1NldHMuYXVnbWVudGVkLFxyXG4gICAgICAgIHVzZXJzOiBuZXdTZXRzLmZpbHRlcmVkXHJcbiAgICAgIH0pO1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlcy5VU0VSX0xFQVZFU19HUk9VUDpcclxuICAgICAgdmFyIHNlbGVjdGVkVXNlciA9IHN0YXRlLnNlbGVjdGVkc1xyXG4gICAgICAgIC5maW5kKG9wdCA9PiAob3B0LmlkID09IGFjdGlvbi5pZFVzZXIpKTtcclxuICAgICAgdmFyIG5ld1NldHMgPSB1dGlsLmRpc3BsYWNlZEl0ZW0oc3RhdGUuc2VsZWN0ZWRzLCBzdGF0ZS51c2Vycywgc2VsZWN0ZWRVc2VyKTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgdXNlcnM6IG5ld1NldHMuYXVnbWVudGVkLFxyXG4gICAgICAgIHNlbGVjdGVkczogbmV3U2V0cy5maWx0ZXJlZFxyXG4gICAgICB9KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1haW5SZWR1Y2VyIH07Il19