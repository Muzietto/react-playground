'use strict';

import { createStore } from 'redux'
import { mainReducer } from 'reducers/mainReducer'
// resolved with Babel plugin inline-json-import
//import initialState from '../initialState.json';

var initialState = {
  users: [
    {name: 'Armando', id: 1},
    {name: 'Bruno', id: 2},
    {name: 'Carlo', id: 3},
    {name: 'Daniele', id: 4},
  ],
  groups: [
    {name: 'Music', id: 1},
    {name: 'Dance', id: 2},
    {name: 'Jogging', id: 3},
    {name: 'Cycling', id: 4},
  ],
  user_group: {
    0: [],
    1: [1,2],
    2: [],
    3: [3],
    4: [1,4]
  },
  group_user: {
    0: [],
    1: [1,4],
    2: [1],
    3: [3],
    4: [4]
  },
  group_no_user: {
    0: [],
    1: [2,3],
    2: [2,3,4],
    3: [1,2,4],
    4: [1,2,3]
  },
  mappers: {},
};

initialState.mappers.userFromId = (function(userId) {
  var user = this.users.find(u => (u.id == userId));
  return Object.assign({}, user);
}).bind(initialState);

const store = createStore(mainReducer, initialState);

export { store };