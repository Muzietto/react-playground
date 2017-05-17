define(['module', 'redux-actions'], function (module, _require) {
  'use strict';

  var _handleActions;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var handleActions = _require.handleActions;


  var FETCH_MOVIES = 'movies/FETCH_MOVIES';
  var FETCH_MOVIE = 'movies/FETCH_MOVIE';

  module.exports = {
    // action creator
    fetchMovies: function fetchMovies(movies) {
      return {
        type: FETCH_MOVIES,
        movies: movies
      };
    },
    // action creator
    fetchMovie: function fetchMovie(id) {
      return {
        type: FETCH_MOVIE,
        id: id
      };
    },
    reducer: handleActions((_handleActions = {}, _defineProperty(_handleActions, FETCH_MOVIES, function (state, action) {
      return _extends({}, state, {
        all: action.movies
      });
    }), _defineProperty(_handleActions, FETCH_MOVIE, function (state, action) {
      return _extends({}, state, {
        current: state.all[action.index - 1]
      });
    }), _handleActions), {
      movies: [],
      movie: {}
    })
  };
});