define(['exports', 'actions/actions'], function (exports, _actions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const entityAdderValidatingMiddleware = ({ getState, dispatch }) => next => action => {
    var state = getState();
    switch (action.type) {
      case _actions.ActionTypes.USER_IS_CREATED:
        if (state.users.find(u => u.id === action.idUser) || state.users.find(u => u.name === action.name)) {
          dispatch(_actions.ActionCreators.alertUser('duplicate user - name=' + action.name + '; id=' + action.idUser));
          return;
        }
      case _actions.ActionTypes.GROUP_IS_CREATED:
        if (state.groups.find(u => u.id === action.idGroup) || state.groups.find(u => u.name === action.name)) {
          dispatch(_actions.ActionCreators.alertUser('duplicate group - name=' + action.name + '; id=' + action.idGroup));
          return;
        }
        break;
    }
    next(action);
  };

  exports.default = entityAdderValidatingMiddleware;
});