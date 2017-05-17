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
    displayName: 'Repos',
    render: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Repos'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _NavLink2.default,
              { to: '/repos/reactjs/react-router' },
              'React Router'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _NavLink2.default,
              { to: '/repos/facebook/react' },
              'React'
            )
          )
        ),
        this.props.children
      );
    }
  });
});