'use strict';

import { ActionTypes } from '../actions/actions'
import util from '../misc/util';

function mainReducer(state, action) {
  switch (action.type) {
    case ActionTypes.ALERT_USER:
      alert('ALERT_USER: ' + action.message);
      return state;
    case ActionTypes.USER_IS_CREATED:
      state.users.push({
        name: action.name,
        id: action.idUser,
      });
      return state;
    case ActionTypes.GROUP_IS_CREATED:
      state.groups.push({
        name: action.name,
        id: action.idGroup,
      });
      return state;
    case ActionTypes.USER_ENTERS_GROUP:
      var updatedUserGroup = Object.assign(
        {},
        state.user_group,
        {[action.idUser]:  state.user_group[action.idUser].concat([action.idGroup])}
      );
      var updatedGroupUser = Object.assign(
        {},
        state.group_user,
        {[action.idGroup]:  state.group_user[action.idGroup].concat([action.idUser])}
      );
      var updatedGroupNoUser = Object.assign(
        {},
        state.group_no_user,
        {[action.idGroup]: state.group_no_user[action.idGroup].filter(uId => (uId !== action.idUser))}
      );
      return Object.assign({}, state, { 
        user_group: updatedUserGroup,
        group_user: updatedGroupUser,
        group_no_user: updatedGroupNoUser,
      });
    case ActionTypes.USER_LEAVES_GROUP:
      var updatedUserGroup = Object.assign(
        {},
        state.user_group,
        {[action.idUser]: state.user_group[action.idUser].filter(gId => (gId !== action.idGroup))}
      );
      var updatedGroupUser = Object.assign(
        {},
        state.group_user,
        {[action.idGroup]: state.group_user[action.idGroup].filter(uId => (uId !== action.idUser))}
      );
      var updatedGroupNoUser = Object.assign(
        {},
        state.group_no_user,
        {[action.idGroup]:  state.group_no_user[action.idGroup].concat([action.idUser])}
      );
      return Object.assign({}, state, { 
        user_group: updatedUserGroup,
        group_user: updatedGroupUser,
        group_no_user: updatedGroupNoUser,
      });
    default:
      return state;
  }
}

export { mainReducer };