'use strict';

let startCounterValue = 0;

const ActionTypes = {
  INCREASE_COUNTER: 'INCREASE_COUNTER',
  DECREASE_COUNTER: 'DECREASE_COUNTER',
};

let increasedCounter = value => {
  return {
    type: ActionTypes.INCREASE_COUNTER,
    newValue: ++value,
  };
};

let decreasedCounter = value => {
  return {
    type: ActionTypes.DECREASE_COUNTER,
    newValue: --value,
  };
};

const ActionCreators = {
  increasedCounter: increasedCounter,
  decreasedCounter: decreasedCounter,
};

export {
  startCounterValue,
  ActionTypes,
  ActionCreators,
};