const React = require('react');
const { connect } = require('react-redux');
const { Link } = require('react-router');
const movies = require('json!../../movies.json');
const { fetchMovies } = require('reducers/movies');
//const styles = require('./Movies.css');

class Movies extends React.Component {
  componentWillMount() {
    // NB: fetchMovies is an action creator
    this.props.fetchMovies(movies);
  }
  // Comment componentWillMount() and uncomment componentDidMount to use async fetch

  // componentDidMount() {
  //   fetch('/src/movies.json', {method: 'GET'})
  //     .then((response)=>{return response.json()})
  //     .then((movies)=>{
  //       this.props.fetchMovies(movies)
  //     })
  // }
  render() {
    const {
      children,
      movies = [],
      params = {}
    } = this.props;

    return (
      <div className="movies">
        <div className={params.id ? "listHidden" : "list"}>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <div
                className="movie"
                style={{backgroundImage: `url(${movie.cover})`}} />
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}

// NB: connect is from react-redux
// { movies } = extract member movies from object state
// i.e. state => ({ movies: state.movies.all })
module.exports = connect(({ movies }) => ({
  movies: movies.all
}), { fetchMovies })(Movies);