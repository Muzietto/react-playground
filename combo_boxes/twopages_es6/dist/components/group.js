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

  let Group = class Group extends _react2.default.Component {
    render() {
      return _react2.default.createElement(
        'span',
        { id: 'groupDiv' + this.props.data.id },
        _react2.default.createElement(
          'span',
          { className: 'separated-span' },
          'Details group'
        ),
        _react2.default.createElement(
          'span',
          { className: 'separated-span' },
          this.props.data.id
        ),
        _react2.default.createElement(
          'span',
          { className: 'separated-span' },
          this.props.data.name
        )
      );
    }
  };
  exports.default = Group;
});