define(['module', 'react', 'react-redux', 'react-router', '../../movies.json', 'reducers/movies'], function (module, React, _require, _require2, movies, _require3) {
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
  var fetchMovies = _require3.fetchMovies;

  var Movies = function (_React$Component) {
    _inherits(Movies, _React$Component);

    function Movies() {
      _classCallCheck(this, Movies);

      return _possibleConstructorReturn(this, (Movies.__proto__ || Object.getPrototypeOf(Movies)).apply(this, arguments));
    }

    _createClass(Movies, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.props.fetchMovies(movies);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            _props$movies = _props.movies,
            movies = _props$movies === undefined ? [] : _props$movies,
            _props$params = _props.params,
            params = _props$params === undefined ? {} : _props$params;


        return React.createElement(
          'div',
          { className: 'movies' },
          React.createElement(
            'div',
            { className: params.id ? "listHidden" : "list" },
            movies.map(function (movie, index) {
              return React.createElement(
                Link,
                {
                  key: index,
                  to: '/movies/' + (index + 1) },
                React.createElement('div', {
                  className: 'movie',
                  style: { backgroundImage: 'url(' + movie.cover + ')' } })
              );
            })
          ),
          children
        );
      }
    }]);

    return Movies;
  }(React.Component);

  // NB: connect is from react-redux
  module.exports = connect(function (_ref) {
    var movies = _ref.movies;
    return {
      movies: movies.all
    };
  }, {
    fetchMovies: fetchMovies
  })(Movies);
});