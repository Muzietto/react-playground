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
    1: [1,2],
    2: [],
    3: [3],
    4: [1,4]
  },
  group_user: {
    1: [1,4],
    2: [1],
    3: [3],
    4: [4]
  },
  mappers: {}
};

initialState.mappers.userInGroup = (function(userId) {
  debugger;
  return Object.assign({}, user, {name:user.name + this.nicknames[user.id]});
}).bind(initialState);

initialState.mappers.userNotInGroup = (function(userId) {
  debugger;
  return Object.assign({}, user, {name:user.name + this.nicknames[user.id]});
}).bind(initialState);

const store = createStore(mainReducer, initialState);

export { store };