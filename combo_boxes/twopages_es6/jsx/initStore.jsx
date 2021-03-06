'use strict';

import { createStore, applyMiddleware } from 'redux';
import { mainReducer } from 'reducers/mainReducer'
import parseIntMiddleware from 'middleware/parseIntMiddleware';
import entityAdderValidatingMiddleware from 'middleware/entityAdderValidatingMiddleware';
import entityDeleteValidatingMiddleware from 'middleware/entityDeleteValidatingMiddleware';
// resolved with Babel plugin inline-json-import
//import initialState from '../initialState.json';

var initialState = {
  users: [
    {name: 'Armando Trovajoli', id: 1},
    {name: 'Bruno Carducci', id: 2},
    {name: 'Carlo Pedersoli', id: 3},
    {name: 'Daniele Luchetta', id: 4},
  ],
  groups: [
    {name: 'Classical Music', id: 1},
    {name: 'Modern Dance', id: 2},
    {name: 'Jogging', id: 3},
    {name: 'Cycling', id: 4},
  ],
  user_group: {
    0: [],
    1: [1,2],
    2: [],
    3: [],
    4: [1,4]
  },
  group_user: {
    0: [],
    1: [1,4],
    2: [1],
    3: [],
    4: [4]
  },
  group_no_user: {
    0: [],
    1: [2,3],
    2: [2,3,4],
    3: [1,2,3,4],
    4: [1,2,3]
  },
  mappers: {},
};

initialState.mappers.userFromId = (function(userId) {
  var user = this.users.find(u => (u.id == userId));
  return Object.assign({}, user);
}).bind(initialState);

const store = createStore(mainReducer, initialState, applyMiddleware(
  parseIntMiddleware,
  entityAdderValidatingMiddleware,
  entityDeleteValidatingMiddleware));

export { store };