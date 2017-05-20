define(['exports', 'react', '../misc/util'], function (exports, _react, _util) {
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

    propTypes: {
      items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        id: _react2.default.PropTypes.number.isRequired
      }).isRequired).isRequired,
      mapper: _react2.default.PropTypes.func.isRequired
    },
    render: function () {
      var self = this;
      var items = this.props.items.sort(_util2.default.asc).map(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb2xsZWN0aW9ucy9pdGVtc0xpc3QuanN4Il0sIm5hbWVzIjpbIkl0ZW1zTGlzdCIsImNyZWF0ZUNsYXNzIiwicHJvcFR5cGVzIiwiaXRlbXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJpZCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJtYXBwZXIiLCJmdW5jIiwicmVuZGVyIiwic2VsZiIsInByb3BzIiwic29ydCIsImFzYyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsUUFBTUEsWUFBWSxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUNsQ0MsZUFBVztBQUNUQyxhQUFPLGdCQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QixnQkFBTUQsU0FBTixDQUFnQkUsS0FBaEIsQ0FBc0I7QUFDbkRDLFlBQUksZ0JBQU1ILFNBQU4sQ0FBZ0JJLE1BQWhCLENBQXVCQztBQUR3QixPQUF0QixFQUU1QkEsVUFGSSxFQUVRQSxVQUhOO0FBSVRDLGNBQVEsZ0JBQU1OLFNBQU4sQ0FBZ0JPLElBQWhCLENBQXFCRjtBQUpwQixLQUR1QjtBQU9sQ0csWUFBUSxZQUFXO0FBQ2pCLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlWLFFBQVEsS0FBS1csS0FBTCxDQUFXWCxLQUFYLENBQWlCWSxJQUFqQixDQUFzQixlQUFLQyxHQUEzQixFQUFnQ0MsR0FBaEMsQ0FBb0MsVUFBU0MsSUFBVCxFQUFlO0FBQzdELGVBQU87QUFBQTtBQUFBLFlBQUksS0FBS0EsS0FBS1gsRUFBZDtBQUNKTSxlQUFLQyxLQUFMLENBQVdKLE1BQVgsQ0FBa0JRLElBQWxCO0FBREksU0FBUDtBQUdELE9BSlcsQ0FBWjs7QUFNQSxhQUNFO0FBQUE7QUFBQTtBQUNHZjtBQURILE9BREY7QUFLRDtBQXBCaUMsR0FBbEIsQ0FBbEI7O29CQXVCZUgsUyIsImZpbGUiOiJpdGVtc0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wbGV0ZWx5IHN0YXRlbGVzc1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi9taXNjL3V0aWwnO1xyXG5cclxuY29uc3QgSXRlbXNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHByb3BUeXBlczoge1xyXG4gICAgaXRlbXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB9KS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gICAgbWFwcGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgfSxcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzOyBcclxuICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuaXRlbXMuc29ydCh1dGlsLmFzYykubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgIHtzZWxmLnByb3BzLm1hcHBlcihpdGVtKX1cclxuICAgICAgPC9saT5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7aXRlbXN9XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0OyJdfQ==