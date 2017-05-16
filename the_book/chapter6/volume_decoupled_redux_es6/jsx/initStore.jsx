'use strict';
import { createStore } from 'redux'
import { startCounterValue, ActionTypes } from './actions'

var store = createStore(statefulReducer);

function statefulReducer(state = startCounterValue, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
    case ActionTypes.DECREASE_COUNTER:
      return action.newValue;
    default:
      return state;
  }
}

export { store };