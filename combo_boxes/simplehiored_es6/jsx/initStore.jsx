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
  selecteds: [],
};

const store = createStore(mainReducer, initialState);

export { store };