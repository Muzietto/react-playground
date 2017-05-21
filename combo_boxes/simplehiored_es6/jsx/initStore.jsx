'use strict';

import { createStore } from 'redux'
import { mainReducer } from 'reducers/mainReducer'
// resolved with Babel plugin inline-json-import
//import initialState from '../initialState.json';

const initialState = {
  users: [
    {name: 'Armando', id: 1},
    {name: 'Bruno', id: 2},
    {name: 'Carlo', id: 3},
    {name: 'Daniele', id: 4},
  ],
  nicknames: {
    1: 'Dando',
    2: 'Uno',
    3: 'Cacio',
    4: 'Dany',
  },
  selecteds: [],
  mappers: {}
};

initialState.mappers.testMapper = (function(user) {
  return Object.assign({}, user, {name:user.name + this.nicknames[user.id]});
}).bind(initialState);

const store = createStore(mainReducer, initialState);

export { store };