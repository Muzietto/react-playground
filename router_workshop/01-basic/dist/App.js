define(['exports', 'react', 'react-router-dom', './navigation', './home', './aboutus', './aboutus2', './notfound'], function (exports, _react, _reactRouterDom, _navigation, _home, _aboutus, _aboutus3, _notfound) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _navigation2 = _interopRequireDefault(_navigation);

  var _home2 = _interopRequireDefault(_home);

  var _aboutus2 = _interopRequireDefault(_aboutus);

  var _aboutus4 = _interopRequireDefault(_aboutus3);

  var _notfound2 = _interopRequireDefault(_notfound);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //import logo from './logo.svg';
  //import './App.css';

  var App = function App() {
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'div',
          { className: 'App-header' },
          _react2.default.createElement('img', { src: 'public/img/logo.svg', className: 'App-logo', alt: 'logo' }),
          _react2.default.createElement(
            'h2',
            null,
            'Welcome to React'
          )
        ),
        _react2.default.createElement(_navigation2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'App-intro' },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _aboutus2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/about2', component: _aboutus4.default }),
            _react2.default.createElement(_reactRouterDom.Route, { component: _notfound2.default })
          )
        )
      )
    );
  };

  exports.default = App;
});