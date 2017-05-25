define(['react', 'react-router', 'react-dom', 'initStore', 'components/menu', 'components/users', 'components/user', 'components/groups', 'components/group', 'components/memberships'], function (_react, _reactRouter, _reactDom, _initStore, _menu, _users, _user, _groups, _group, _memberships) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const render = () => {
    const state = _initStore.store.getState();
    _reactDom2.default.render(_react2.default.createElement(
      _reactRouter.Router,
      { history: _reactRouter.hashHistory },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _menu.Menu },
        _react2.default.createElement(
          _reactRouter.Route,
          { path: '/users', component: _users.Users },
          _react2.default.createElement(_reactRouter.Route, { path: '/user/:id', component: _user.User })
        ),
        _react2.default.createElement(
          _reactRouter.Route,
          { path: '/groups', component: _groups.Groups },
          _react2.default.createElement(_reactRouter.Route, { path: '/group/:id', component: _group.Group })
        ),
        _react2.default.createElement(_reactRouter.Route, { path: '/memberships', component: _memberships.Memberships })
      )
    ), document.getElementById('container'));
  };

  render();
  _initStore.store.subscribe(render);
  window.store = _initStore.store;
});