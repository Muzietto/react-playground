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

  const ItemsList = _react2.default.createClass({
    displayName: 'ItemsList',

    propTypes: {
      items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        id: _react2.default.PropTypes.number.isRequired
      }).isRequired).isRequired,
      mapper: _react2.default.PropTypes.func.isRequired
    },
    render: function () {
      var self = this;
      var items = this.props.items.sort((a, b) => a.id - b.id).map(function (item) {
        return _react2.default.createElement(
          'li',
          { key: item.id },
          self.props.mapper(item)
        );
      });

      return _react2.default.createElement(
        'ul',
        null,
        items
      );
    }
  });

  exports.default = ItemsList;
});