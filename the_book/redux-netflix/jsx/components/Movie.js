const React = require('react');
const { connect } = require('react-redux');
const { Link } = require('react-router');
const {
  fetchMovie
} = require('reducers/movies');
//const styles = require('./Movie.css')

class Movie extends React.Component {
  componentWillMount() {
    // without magic: this.props.dispatch(fetchMovie(this.props.params.id))
    this.props.fetchMovie(this.props.params.id);
  }

  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovie(next.params.id);
    }
  }

  render() {
    const {
      movie = {
        starring: []
      }
    } = this.props;

    return (
      <div
        className="movie"
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
        <div
          className="cover"
          style={{backgroundImage: `url(${movie.cover})`}} />
        <div className="description">
          <div className="title">{movie.title}</div>
          <div className="year">{movie.year}</div>
          <div className="starring">
            {movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className="actor">
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className="closeButton"
          to="/movies">
          ←
        </Link>
      </div>
    )
  }
}

module.exports = connect(({movies}) => ({
  movie: movies.current
}), {
  fetchMovie
})(Movie);