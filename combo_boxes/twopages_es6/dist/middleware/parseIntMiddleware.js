define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const parseIntMiddleware = ({ getState, dispatch }) => next => action => {
    if (action.idUser) action.idUser = parseInt(action.idUser, 10);
    if (action.idGroup) action.idGroup = parseInt(action.idGroup, 10);
    next(action);
  };

  exports.default = parseIntMiddleware;
});