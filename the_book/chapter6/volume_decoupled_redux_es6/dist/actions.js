define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var startCounterValue = 0;

  var ActionTypes = {
    INCREASE_COUNTER: 'INCREASE_COUNTER',
    DECREASE_COUNTER: 'DECREASE_COUNTER'
  };

  var increasedCounter = function increasedCounter(value) {
    return {
      type: ActionTypes.INCREASE_COUNTER,
      newValue: ++value
    };
  };

  var decreasedCounter = function decreasedCounter(value) {
    return {
      type: ActionTypes.DECREASE_COUNTER,
      newValue: --value
    };
  };

  var ActionCreators = {
    increasedCounter: increasedCounter,
    decreasedCounter: decreasedCounter
  };

  exports.startCounterValue = startCounterValue;
  exports.ActionTypes = ActionTypes;
  exports.ActionCreators = ActionCreators;
});