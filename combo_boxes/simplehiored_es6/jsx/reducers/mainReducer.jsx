'use strict';

import { ActionTypes } from '../actions/actions'
import util from '../misc/util';

function mainReducer(state, action) {
  switch (action.type) {
    case ActionTypes.USER_ENTERS_GROUP:
      // put selected option inside state.selecteds
      var selectedItem = state.users
        .find(opt => (opt.id == action.idUser));
      var newSets = util.displacedItem(state.users, state.selecteds, selectedItem);
      return {
        selecteds: newSets.augmented,
        users: newSets.filtered
      };
    case ActionTypes.USER_LEAVES_GROUP:
      var newSets = util.displacedItem(state.selecteds, state.users, action.user);
      return {
        users: newSets.augmented,
        selecteds: newSets.filtered
      };
    default:
      return state;
  }
}

export { mainReducer };