'use strict';

const ActionTypes = {
  USER_ENTERS_GROUP: 'USER_ENTERS_GROUP',
  USER_LEAVES_GROUP: 'USER_LEAVES_GROUP',
}

function userEntersGroup(idUser) {
  return {
    type: ActionTypes.USER_ENTERS_GROUP,
    idUser: idUser,
  };
}

function userLeavesGroup(user) {
  return {
    type: ActionTypes.USER_LEAVES_GROUP,
    user: user,
  };
}

const ActionCreators = {
  userEntersGroup: userEntersGroup,
  userLeavesGroup: userLeavesGroup,
};

export {
  ActionTypes,
  ActionCreators,
};