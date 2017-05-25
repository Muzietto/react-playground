define(['exports', 'react', 'misc/util'], function (exports, _react, _util) {
  // completely stateless
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const ItemsList = _react2.default.createClass({
    displayName: 'ItemsList',

    getDefaultProps: function () {
      return {
        items: [],
        itemsMapper: x => x,
        displayMapper: x => x
      };
    },

    render: function () {
      var self = this;
      var items = this.props.items.sort(_util2.default.asc).map(self.props.itemsMapper).map(function (item) {
        return _react2.default.createElement(
          'li',
          { key: item.id },
          self.props.displayMapper(item)
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