define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var initialState = {
    frameworks: {
      angular: false,
      react: true,
      muziettos: false
    },
    foods: {
      pizza: false,
      spaghetti: true,
      steak: false,
      cauliflower: false
    },
    selectedLanguage: 'ruby'
  };

  var ActionTypes = {
    CHANGE_RADIO: 'CHANGE_RADIO',
    CHANGE_CHECKBOX: 'CHANGE_CHECKBOX',
    CHANGE_SELECT: 'CHANGE_SELECT'
  };

  var changedRadio = function changedRadio(event) {
    var newStateMember = {};
    newStateMember[event.target.value] = true;
    return {
      type: ActionTypes.CHANGE_RADIO,
      newValue: { frameworks: newStateMember }
    };
  };

  var changedCheckbox = function changedCheckbox(event) {
    var newStateMember = {};
    newStateMember[event.target.value] = event.target.checked;
    return {
      type: ActionTypes.CHANGE_CHECKBOX,
      newValue: { foods: newStateMember }
    };
  };

  var changedSelect = function changedSelect(event) {
    return {
      type: ActionTypes.CHANGE_SELECT,
      newValue: { selectedLanguage: event.target.value }
    };
  };

  var ActionCreators = {
    changedRadio: changedRadio,
    changedCheckbox: changedCheckbox,
    changedSelect: changedSelect
  };

  exports.initialState = initialState;
  exports.ActionTypes = ActionTypes;
  exports.ActionCreators = ActionCreators;
});