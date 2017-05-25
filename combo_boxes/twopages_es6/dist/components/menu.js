define(['exports', 'react', 'react-router'], function (exports, _react, _reactRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Menu = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _class, _temp;

  let Menu = (_temp = _class = class Menu extends _react2.default.Component {
    render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'menu-div' },
          _react2.default.createElement(
            'ul',
            { className: 'nav nav-pills navbar-nav' },
            _react2.default.createElement(
              'li',
              { className: this.context.router.isActive('/users') ? 'active' : '' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/users', activeClassName: 'active' },
                'Users'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: this.context.router.isActive('/groups') ? 'active' : '' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/groups', activeClassName: 'active' },
                'Groups'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: this.context.router.isActive('/memberships') ? 'active' : '' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/memberships', activeClassName: 'active' },
                'Memberships'
              )
            )
          )
        ),
        this.props.children
      );
    }
  }, _class.contextTypes = {
    router: _react2.default.PropTypes.object
  }, _temp);
  exports.Menu = Menu;
});