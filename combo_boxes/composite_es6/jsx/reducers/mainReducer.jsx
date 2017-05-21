'use strict';

import { ActionTypes } from '../actions/actions'
import util from '../misc/util';

function mainReducer(state, action) {
  switch (action.type) {
    case ActionTypes.USER_ENTERS_GROUP:
      var updatedUserGroup = Object.assign(
        {},
        state.user_group,
        state.user_group[action.idUser].concat([action.idGroup])
      );
      var updatedGroupUser = Object.assign(
        {},
        state.group_user,
        state.group_user[action.idGroup].concat([action.idUser])
      );
      return { 
        user_group: updatedUserGroup,
        group_user: updatedGroupUser,
      };
    case ActionTypes.USER_LEAVES_GROUP:
      var updatedUserGroup = Object.assign(
        {},
        state.user_group,
        state.user_group[action.idUser].filter(gId => (gId !== action.idGroup))
      );
      var updatedGroupUser = Object.assign(
        {},
        state.group_user,
        state.group_user[action.idGroup].filter(uId => (uId !== action.idUser))
      );
      return { 
        user_group: updatedUserGroup,
        group_user: updatedGroupUser,
      };
    default:
      return state;
  }
}

export { mainReducer };