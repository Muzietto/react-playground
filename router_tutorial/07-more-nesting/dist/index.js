define(['react', 'react-dom', 'react-router', './App', './About', './Repos', './Repo'], function (_react, _reactDom, _reactRouter, _App, _About, _Repos, _Repo) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _App2 = _interopRequireDefault(_App);

  var _About2 = _interopRequireDefault(_About);

  var _Repos2 = _interopRequireDefault(_Repos);

  var _Repo2 = _interopRequireDefault(_Repo);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* To render some default UI you could easily do {this.props.children || <Home2/>}
     inside App. Instead, this way now App can render {this.props.children} 
     and we have a first-class route for Home that can participate in routing.
     Notice how the IndexRoute has no path. It becomes this.props.children
     of the parent when no other child of the parent matches
     or, in other words, when the parent's route matches EXACTLY.
     https://github.com/reactjs/react-router/blob/master/docs/guides/IndexRoutes.md
  */
  (0, _reactDom.render)(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _App2.default },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/repos', component: _Repos2.default },
        _react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName/:repoName', component: _Repo2.default })
      ),
      _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
    )
  ), document.getElementById('app'));
});