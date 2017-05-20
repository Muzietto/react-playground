define(['exports', 'react'], function (exports, _react) {
  // completely stateless
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // ES6 arrow functions won't transpile correctly!!!
  function DeletableComponent(Component) {
    return class extends _react2.default.Component {
      render() {
        return _react2.default.createElement(
          'div',
          { id: 'deletableUserDiv' + this.props.data.id },
          _react2.default.createElement(Component, this.props),
          _react2.default.createElement(
            'a',
            { style: { cursor: "pointer" }, onClick: this.props.callbacks.delete },
            'REMOVE'
          )
        );
      }
    };
  }

  exports.default = DeletableComponent;
});