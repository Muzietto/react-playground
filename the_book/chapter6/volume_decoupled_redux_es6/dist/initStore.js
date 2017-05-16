define(['exports', 'redux', './actions'], function (exports, _redux, _actions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.store = undefined;


  var store = (0, _redux.createStore)(statefulReducer);

  function statefulReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _actions.startCounterValue;
    var action = arguments[1];

    switch (action.type) {
      case _actions.ActionTypes.INCREASE_COUNTER:
      case _actions.ActionTypes.DECREASE_COUNTER:
        return action.newValue;
      default:
        return state;
    }
  }

  exports.store = store;
});