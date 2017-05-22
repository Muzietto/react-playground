'use strict';

const ActionTypes = {
  USER_ENTERS_GROUP: 'USER_ENTERS_GROUP',
  USER_LEAVES_GROUP: 'USER_LEAVES_GROUP',
  USER_IS_CREATED: 'USER_IS_CREATED',
  USER_IS_DELETED: 'USER_IS_DELETED',
  GROUP_IS_CREATED: 'GROUP_IS_CREATED',
  GROUP_IS_DELETED: 'GROUP_IS_DELETED',
  ALERT_USER: 'ALERT_USER',
}

function userEntersGroup(idUser, idGroup) {
  return {
    type: ActionTypes.USER_ENTERS_GROUP,
    idUser: idUser,
    idGroup: idGroup,
  };
}

function userLeavesGroup(idUser, idGroup) {
  return {
    type: ActionTypes.USER_LEAVES_GROUP,
    idUser: idUser,
    idGroup: idGroup,
  };
}

function userIsCreated(idUser, name) {
  return {
    type: ActionTypes.USER_IS_CREATED,
    idUser: idUser,
    name: name,
  };
}

function alertUser(message) {
  return {
    type: ActionTypes.ALERT_USER,
    message: message,
  }
}

const ActionCreators = {
  userEntersGroup: userEntersGroup,
  userLeavesGroup: userLeavesGroup,
  userIsCreated: userIsCreated,
  alertUser: alertUser,
};

export {
  ActionTypes,
  ActionCreators,
};