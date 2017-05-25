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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb2xsZWN0aW9ucy9pdGVtc0xpc3QuanN4Il0sIm5hbWVzIjpbIkl0ZW1zTGlzdCIsImNyZWF0ZUNsYXNzIiwiZ2V0RGVmYXVsdFByb3BzIiwiaXRlbXMiLCJpdGVtc01hcHBlciIsIngiLCJkaXNwbGF5TWFwcGVyIiwicmVuZGVyIiwic2VsZiIsInByb3BzIiwic29ydCIsImFzYyIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxRQUFNQSxZQUFZLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2xDQyxxQkFBaUIsWUFBVztBQUMxQixhQUFPO0FBQ0xDLGVBQU8sRUFERjtBQUVMQyxxQkFBYUMsS0FBS0EsQ0FGYjtBQUdMQyx1QkFBZUQsS0FBS0E7QUFIZixPQUFQO0FBS0QsS0FQaUM7O0FBU2xDRSxZQUFRLFlBQVc7QUFDakIsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUwsUUFBUSxLQUFLTSxLQUFMLENBQVdOLEtBQVgsQ0FDVE8sSUFEUyxDQUNKLGVBQUtDLEdBREQsRUFFVEMsR0FGUyxDQUVMSixLQUFLQyxLQUFMLENBQVdMLFdBRk4sRUFHVFEsR0FIUyxDQUdMLFVBQVNDLElBQVQsRUFBZTtBQUNwQixlQUFPO0FBQUE7QUFBQSxZQUFJLEtBQUtBLEtBQUtDLEVBQWQ7QUFDSk4sZUFBS0MsS0FBTCxDQUFXSCxhQUFYLENBQXlCTyxJQUF6QjtBQURJLFNBQVA7QUFHRCxPQVBXLENBQVo7O0FBU0EsYUFDRTtBQUFBO0FBQUE7QUFDR1Y7QUFESCxPQURGO0FBS0Q7QUF6QmlDLEdBQWxCLENBQWxCOztvQkE0QmVILFMiLCJmaWxlIjoiaXRlbXNMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcGxldGVseSBzdGF0ZWxlc3NcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHV0aWwgZnJvbSAnbWlzYy91dGlsJztcclxuXHJcbmNvbnN0IEl0ZW1zTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICBpdGVtc01hcHBlcjogeCA9PiB4LFxyXG4gICAgICBkaXNwbGF5TWFwcGVyOiB4ID0+IHgsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7IFxyXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5wcm9wcy5pdGVtc1xyXG4gICAgICAuc29ydCh1dGlsLmFzYylcclxuICAgICAgLm1hcChzZWxmLnByb3BzLml0ZW1zTWFwcGVyKVxyXG4gICAgICAubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgIHtzZWxmLnByb3BzLmRpc3BsYXlNYXBwZXIoaXRlbSl9XHJcbiAgICAgIDwvbGk+XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2l0ZW1zfVxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1zTGlzdDsiXX0=