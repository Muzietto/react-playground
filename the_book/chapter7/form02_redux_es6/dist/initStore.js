define(['exports', 'redux', './actions'], function (exports, _redux, _actions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.store = undefined;


  var store = (0, _redux.createStore)(statefulReducer);

  function statefulReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _actions.initialState;
    var action = arguments[1];

    switch (action.type) {
      case _actions.ActionTypes.CHANGE_RADIO:
        state.frameworks = action.newValue.frameworks;
        return state;
      case _actions.ActionTypes.CHANGE_CHECKBOX:
        state.foods = Object.assign({}, state.foods, action.newValue.foods);
        return state;
      case _actions.ActionTypes.CHANGE_SELECT:
        state.selectedLanguage = action.newValue.selectedLanguage;
        return state;
      default:
        return state;
    }
  }

  exports.store = store;
});