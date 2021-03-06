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
    var newUg, newGu, newGnu;
    switch (action.type) {
      case _actions.ActionTypes.ALERT_USER:
        alert('ALERT_USER: ' + action.message);
        return state;
      case _actions.ActionTypes.USER_IS_CREATED:
        state.users.push({
          name: action.name,
          id: action.idUser
        });
        state.user_group[action.idUser] = [];
        newGnu = Object.assign({}, state.group_no_user);
        Object.keys(newGnu).forEach(key => {
          newGnu[key].push(action.idUser);
        });
        state.group_no_user = newGnu;
        return state;
      case _actions.ActionTypes.GROUP_IS_CREATED:
        state.groups.push({
          name: action.name,
          id: action.idGroup
        });
        state.group_user[action.idGroup] = [];
        state.group_no_user[action.idGroup] = state.users.map(u => u.id);
        return state;
      case _actions.ActionTypes.USER_IS_DELETED:
        state.users = state.users.filter(u => u.id !== action.idUser);
        newUg = Object.assign({}, state.user_group);
        delete newUg[action.idUser];
        state.user_group = newUg;
        newGnu = Object.assign({}, state.group_no_user);
        Object.keys(newGnu).forEach(key => {
          newGnu[key] = newGnu[key].filter(id => id !== action.idUser);
        });
        state.group_no_user = newGnu;
        return state;
      case _actions.ActionTypes.GROUP_IS_DELETED:
        state.groups = state.groups.filter(g => g.id !== action.idGroup);
        newGu = Object.assign({}, state.group_user);
        delete newGu[action.idGroup];
        state.group_user = newGu;
        newGnu = Object.assign({}, state.group_no_user);
        delete newGnu[action.idGroup];
        state.group_no_user = newGnu;
        return state;
      case _actions.ActionTypes.USER_ENTERS_GROUP:
        var updatedUserGroup = Object.assign({}, state.user_group, { [action.idUser]: state.user_group[action.idUser].concat([action.idGroup]) });
        var updatedGroupUser = Object.assign({}, state.group_user, { [action.idGroup]: state.group_user[action.idGroup].concat([action.idUser]) });
        var updatedGroupNoUser = Object.assign({}, state.group_no_user, { [action.idGroup]: state.group_no_user[action.idGroup].filter(uId => uId !== action.idUser) });
        return Object.assign({}, state, {
          user_group: updatedUserGroup,
          group_user: updatedGroupUser,
          group_no_user: updatedGroupNoUser
        });
      case _actions.ActionTypes.USER_LEAVES_GROUP:
        var updatedUserGroup = Object.assign({}, state.user_group, { [action.idUser]: state.user_group[action.idUser].filter(gId => gId !== action.idGroup) });
        var updatedGroupUser = Object.assign({}, state.group_user, { [action.idGroup]: state.group_user[action.idGroup].filter(uId => uId !== action.idUser) });
        var updatedGroupNoUser = Object.assign({}, state.group_no_user, { [action.idGroup]: state.group_no_user[action.idGroup].concat([action.idUser]) });
        return Object.assign({}, state, {
          user_group: updatedUserGroup,
          group_user: updatedGroupUser,
          group_no_user: updatedGroupNoUser
        });
      default:
        return state;
    }
  }

  exports.mainReducer = mainReducer;
});