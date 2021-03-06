define(['react', 'react-dom', 'react-router', './App', './About', './Repos'], function (_react, _reactDom, _reactRouter, _App, _About, _Repos) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _App2 = _interopRequireDefault(_App);

  var _About2 = _interopRequireDefault(_About);

  var _Repos2 = _interopRequireDefault(_Repos);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _reactDom.render)(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/repos', component: _Repos2.default })
  ), document.getElementById('app'));
});