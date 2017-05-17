const { combineReducers } = require('redux');
const {
  reducer: movies // that's [] in movies.js
} = require('./movies');

module.exports = combineReducers({
  movies
});