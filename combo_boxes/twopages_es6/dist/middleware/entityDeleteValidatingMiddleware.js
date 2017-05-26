define(['exports', 'actions/actions'], function (exports, _actions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const entityDeleteValidatingMiddleware = ({ getState, dispatch }) => next => action => {
    var state = getState();
    switch (action.type) {
      case _actions.ActionTypes.USER_IS_DELETED:
        if (state.user_group[action.idUser].length > 0) {
          dispatch(_actions.ActionCreators.alertUser(['still member of groups ', JSON.stringify(state.user_group[action.idUser]), ': cannot delete user - id=', action.idUser].join('')));
          return;
        }
        break;
      case _actions.ActionTypes.GROUP_IS_DELETED:
        if (state.group_user[action.idGroup].length > 0) {
          dispatch(_actions.ActionCreators.alertUser(['members ', JSON.stringify(state.group_user[action.idGroup]), ' exist: cannot delete group - id=', action.idGroup].join('')));
          return;
        }
        break;
    }
    next(action);
  };

  exports.default = entityDeleteValidatingMiddleware;
});