'use strict';
import { createStore } from 'redux'
import { initialState, ActionTypes } from './actions'

var store = createStore(statefulReducer);

function statefulReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_RADIO:
      state.frameworks = action.newValue.frameworks;
      return state;
    case ActionTypes.CHANGE_CHECKBOX:
      state.foods = Object.assign({}, state.foods, action.newValue.foods);
      return state;
    case ActionTypes.CHANGE_SELECT:
      state.selectedLanguage = action.newValue.selectedLanguage;
      return state;
    default:
      return state;
  }
}

export { store };