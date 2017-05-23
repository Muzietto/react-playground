'use strict';
import { ActionCreators } from 'actions/actions';
import { ActionTypes } from 'actions/actions';

const entityDeleteValidatingMiddleware = ({ getState, dispatch }) => next => action => {
  var state = getState();
  switch (action.type) {
    case ActionTypes.USER_IS_DELETED:
      if (state.user_group[action.idUser].length > 0) {
        dispatch(ActionCreators.alertUser([
            'still member of groups ',
            JSON.stringify(state.user_group[action.idUser]),
            ': cannot delete user - id=',
            action.idUser,
          ].join('')));
        return;
      }
      break;
    case ActionTypes.GROUP_IS_DELETED:
      if (state.group_user[action.idGroup].length > 0) {
        dispatch(ActionCreators.alertUser([
            'members ',
            JSON.stringify(state.group_user[action.idGroup]),
            ' exists: cannot delete group - id=',
            action.idGroup,
          ].join('')));
        return;
      }
      break;
  }
  next(action);
};

export default entityDeleteValidatingMiddleware;