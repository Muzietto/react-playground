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
    entityType: 'user',
    idUser: idUser,
    name: name,
  };
}

function userIsDeleted(idUser) {
  return {
    type: ActionTypes.USER_IS_DELETED,
    entityType: 'user',
    idUser: idUser,
  };
}

function groupIsCreated(idGroup, name) {
  return {
    type: ActionTypes.GROUP_IS_CREATED,
    entityType: 'group',
    idGroup: idGroup,
    name: name,
  };
}

function groupIsDeleted(idGroup) {
  return {
    type: ActionTypes.GROUP_IS_DELETED,
    entityType: 'group',
    idGroup: idGroup,
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
  userIsDeleted: userIsDeleted,
  groupIsCreated: groupIsCreated,
  groupIsDeleted: groupIsDeleted,
  alertUser: alertUser,
};

export {
  ActionTypes,
  ActionCreators,
};