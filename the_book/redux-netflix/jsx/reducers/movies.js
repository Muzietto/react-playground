const { handleActions } = require('redux-actions');

const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

module.exports = {
  // action creator
  fetchMovies: (movies) => ({
    type: FETCH_MOVIES,
    movies
  }),
  // action creator
  fetchMovie: (id) => ({
    type: FETCH_MOVIE,
    id
  }),
  reducer: handleActions({
    [FETCH_MOVIES]: (state, action) => ({
      ...state,
      all: action.movies
    }),
    [FETCH_MOVIE]: (state, action) => ({
      ...state,
      current: state.all[action.index - 1]
    })
  }, {
    movies: [],
    movie: {}
  })
};