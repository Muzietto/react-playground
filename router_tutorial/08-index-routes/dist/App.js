define(['exports', 'react', './NavLink'], function (exports, _react, _NavLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _NavLink2 = _interopRequireDefault(_NavLink);

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
        this.props.children /* || <Home/>*/
      );
    }
  });
});