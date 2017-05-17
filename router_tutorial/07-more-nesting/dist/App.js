define(['exports', 'react', './NavLink', './Home1'], function (exports, _react, _NavLink, _Home) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _NavLink2 = _interopRequireDefault(_NavLink);

  var _Home2 = _interopRequireDefault(_Home);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _react2.default.createClass({
    displayName: 'App',
    render: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'React Router Tutorial'
        ),
        _react2.default.createElement(
          'ul',
          { role: 'nav' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _NavLink2.default,
              { to: '/about' },
              'About'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _NavLink2.default,
              { to: '/repos' },
              'Repos'
            )
          )
        ),
        this.props.children || _react2.default.createElement(_Home2.default, { birillo: 'prillo' })
      );
    }
  });
});