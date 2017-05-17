'use strict';

const ActionTypes = {
  CHANGE_RADIO: 'CHANGE_RADIO',
  CHANGE_CHECKBOX: 'CHANGE_CHECKBOX',
  CHANGE_SELECT: 'CHANGE_SELECT',
}

let changedRadio = event => {
  var newStateMember = {};
  newStateMember[event.target.value] = true;
  return {
    type: ActionTypes.CHANGE_RADIO,
    newValue: {frameworks:newStateMember},
  };
};

let changedCheckbox = event => {
  var newStateMember = {};
  newStateMember[event.target.value] = event.target.checked;
  return {
    type: ActionTypes.CHANGE_CHECKBOX,
    newValue: {foods:newStateMember},
  };
};

let changedSelect = event => {
  return {
    type: ActionTypes.CHANGE_SELECT,
    newValue: {selectedLanguage:event.target.value},
  };
};

const ActionCreators = {
  changedRadio: changedRadio,
  changedCheckbox: changedCheckbox,
  changedSelect: changedSelect,
};

export {
  ActionTypes,
  ActionCreators,
};