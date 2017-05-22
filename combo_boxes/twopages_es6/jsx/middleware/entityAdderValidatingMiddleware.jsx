'use strict';
import { ActionCreators } from 'actions/actions';

const entityAdderValidatingMiddleware = ({ getState, dispatch }) => next => action => {
  var state = getState();
  if (action.type.indexOf('USER') !== -1) {
    if (state.users.find(u => u.id === action.idUser)
        || state.users.find(u => u.name === action.name)) {
      dispatch(ActionCreators.alertUser('duplicate user - name=' + action.name + '; id=' + action.idUser));
      return;
    }
  }
  if (action.type.indexOf('GROUP') !== -1) {
    if (state.users.find(u => u.id === action.idUser)
        || state.users.find(u => u.name === action.name)) {
      dispatch(ActionCreators.alertUser('duplicate group - name=' + action.name + '; id=' + action.idGroup));
      return;
    }
  }
  next(action);
};

export default entityAdderValidatingMiddleware;