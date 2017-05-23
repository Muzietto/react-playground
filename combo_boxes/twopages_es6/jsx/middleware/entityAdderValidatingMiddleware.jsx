'use strict';
import { ActionCreators } from 'actions/actions';
import { ActionTypes } from 'actions/actions';

const entityAdderValidatingMiddleware = ({ getState, dispatch }) => next => action => {
  var state = getState();
  switch (action.type) {
    case ActionTypes.USER_IS_CREATED:
      if (state.users.find(u => u.id === action.idUser)
          || state.users.find(u => u.name === action.name)) {
        dispatch(ActionCreators.alertUser('duplicate user - name=' + action.name + '; id=' + action.idUser));
        return;
      }
    case ActionTypes.GROUP_IS_CREATED:
      if (state.groups.find(u => u.id === action.idGroup)
          || state.groups.find(u => u.name === action.name)) {
        dispatch(ActionCreators.alertUser('duplicate group - name=' + action.name + '; id=' + action.idGroup));
        return;
      }
      break;
  }
  next(action);
};

export default entityAdderValidatingMiddleware;