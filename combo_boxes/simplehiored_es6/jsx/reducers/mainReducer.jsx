'use strict';

import { ActionTypes } from '../actions/actions'
import util from '../misc/util';

function mainReducer(state, action) {
  switch (action.type) {
    case ActionTypes.USER_ENTERS_GROUP:
      // put selected option inside state.selecteds
      var selectedUser = state.users
        .find(opt => (opt.id == action.idUser));
      var newSets = util.displacedItem(state.users, state.selecteds, selectedUser);
      return Object.assign({}, state, {
        selecteds: newSets.augmented,
        users: newSets.filtered
      });
    case ActionTypes.USER_LEAVES_GROUP:
      var selectedUser = state.selecteds
        .find(opt => (opt.id == action.user.id));
      var newSets = util.displacedItem(state.selecteds, state.users, selectedUser);
      return Object.assign({}, state, {
        users: newSets.augmented,
        selecteds: newSets.filtered
      });
    default:
      return state;
  }
}

export { mainReducer };