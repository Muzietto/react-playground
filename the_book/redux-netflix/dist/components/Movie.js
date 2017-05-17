define(['module', 'react', 'react-redux', 'react-router', 'reducers/movies'], function (module, React, _require, _require2, _require3) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var connect = _require.connect;
  var Link = _require2.Link;
  var fetchMovie = _require3.fetchMovie;

  var Movie = function (_React$Component) {
    _inherits(Movie, _React$Component);

    function Movie() {
      _classCallCheck(this, Movie);

      return _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).apply(this, arguments));
    }

    _createClass(Movie, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.props.fetchMovie(this.props.params.id);
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(next) {
        if (this.props.params.id !== next.params.id) {
          this.props.fetchMovie(next.params.id);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props$movie = this.props.movie,
            movie = _props$movie === undefined ? {
          starring: []
        } : _props$movie;


        return React.createElement(
          'div',
          {
            className: 'movie',
            style: { backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(' + movie.cover + ')' } },
          React.createElement('div', {
            className: 'cover',
            style: { backgroundImage: 'url(' + movie.cover + ')' } }),
          React.createElement(
            'div',
            { className: 'description' },
            React.createElement(
              'div',
              { className: 'title' },
              movie.title
            ),
            React.createElement(
              'div',
              { className: 'year' },
              movie.year
            ),
            React.createElement(
              'div',
              { className: 'starring' },
              movie.starring.map(function () {
                var actor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var index = arguments[1];
                return React.createElement(
                  'div',
                  {
                    key: index,
                    className: 'actor' },
                  actor.name
                );
              })
            )
          ),
          React.createElement(
            Link,
            {
              className: 'closeButton',
              to: '/movies' },
            '\u2190'
          )
        );
      }
    }]);

    return Movie;
  }(React.Component);

  module.exports = connect(function (_ref) {
    var movies = _ref.movies;
    return {
      movie: movies.current
    };
  }, {
    fetchMovie: fetchMovie
  })(Movie);
});