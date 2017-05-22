'use strict';

const ActionTypes = {
  USER_ENTERS_GROUP: 'USER_ENTERS_GROUP',
  USER_LEAVES_GROUP: 'USER_LEAVES_GROUP',
  USER_IS_CREATED: 'USER_IS_CREATED',
  USER_IS_DELETED: 'USER_IS_DELETED',
  GROUP_IS_CREATED: 'GROUP_IS_CREATED',
  GROUP_IS_DELETED: 'GROUP_IS_DELETED',
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

const ActionCreators = {
  userEntersGroup: userEntersGroup,
  userLeavesGroup: userLeavesGroup,
  userIsCreated: userIsCreated,
};

export {
  ActionTypes,
  ActionCreators,
};