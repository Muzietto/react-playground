'use strict';

const parseIntMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.idUser) action.idUser = parseInt(action.idUser, 10);
  if (action.idGroup) action.idGroup = parseInt(action.idGroup, 10);
  next(action);
};

export default parseIntMiddleware;