define(['module', 'redux', './movies'], function (module, _require, _require2) {
  'use strict';

  var combineReducers = _require.combineReducers;
  var movies = _require2.reducer;


  module.exports = combineReducers({
    movies: movies
  });
});