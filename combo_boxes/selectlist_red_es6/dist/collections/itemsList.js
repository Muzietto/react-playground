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

    propTypes: {
      items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        id: _react2.default.PropTypes.number.isRequired
      }).isRequired).isRequired,
      itemsMapper: _react2.default.PropTypes.func.isRequired,
      displayMapper: _react2.default.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
      return {
        items: [],
        itemsMapper: x => x,
        displayMapper: x => x
      };
    },

    render: function () {
      var self = this;
      var items = this.props.items.sort(_util2.default.asc).map(function (item) {
        return _react2.default.createElement(
          'li',
          { key: item.id },
          self.props.displayMapper(self.props.itemsMapper(item))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb2xsZWN0aW9ucy9pdGVtc0xpc3QuanN4Il0sIm5hbWVzIjpbIkl0ZW1zTGlzdCIsImNyZWF0ZUNsYXNzIiwicHJvcFR5cGVzIiwiaXRlbXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJpZCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJpdGVtc01hcHBlciIsImZ1bmMiLCJkaXNwbGF5TWFwcGVyIiwiZ2V0RGVmYXVsdFByb3BzIiwieCIsInJlbmRlciIsInNlbGYiLCJwcm9wcyIsInNvcnQiLCJhc2MiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLFFBQU1BLFlBQVksZ0JBQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLGVBQVc7QUFDVEMsYUFBTyxnQkFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0IsZ0JBQU1ELFNBQU4sQ0FBZ0JFLEtBQWhCLENBQXNCO0FBQ25EQyxZQUFJLGdCQUFNSCxTQUFOLENBQWdCSSxNQUFoQixDQUF1QkM7QUFEd0IsT0FBdEIsRUFFNUJBLFVBRkksRUFFUUEsVUFITjtBQUlUQyxtQkFBYSxnQkFBTU4sU0FBTixDQUFnQk8sSUFBaEIsQ0FBcUJGLFVBSnpCO0FBS1RHLHFCQUFlLGdCQUFNUixTQUFOLENBQWdCTyxJQUFoQixDQUFxQkY7QUFMM0IsS0FEdUI7O0FBU2xDSSxxQkFBaUIsWUFBVztBQUMxQixhQUFPO0FBQ0xWLGVBQU8sRUFERjtBQUVMTyxxQkFBYUksS0FBS0EsQ0FGYjtBQUdMRix1QkFBZUUsS0FBS0E7QUFIZixPQUFQO0FBS0QsS0FmaUM7O0FBaUJsQ0MsWUFBUSxZQUFXO0FBQ2pCLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUliLFFBQVEsS0FBS2MsS0FBTCxDQUFXZCxLQUFYLENBQ1RlLElBRFMsQ0FDSixlQUFLQyxHQURELEVBRVRDLEdBRlMsQ0FFTCxVQUFTQyxJQUFULEVBQWU7QUFDcEIsZUFBTztBQUFBO0FBQUEsWUFBSSxLQUFLQSxLQUFLZCxFQUFkO0FBQ0pTLGVBQUtDLEtBQUwsQ0FBV0wsYUFBWCxDQUF5QkksS0FBS0MsS0FBTCxDQUFXUCxXQUFYLENBQXVCVyxJQUF2QixDQUF6QjtBQURJLFNBQVA7QUFHRCxPQU5XLENBQVo7O0FBUUEsYUFDRTtBQUFBO0FBQUE7QUFDR2xCO0FBREgsT0FERjtBQUtEO0FBaENpQyxHQUFsQixDQUFsQjs7b0JBbUNlSCxTIiwiZmlsZSI6Iml0ZW1zTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBsZXRlbHkgc3RhdGVsZXNzXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ21pc2MvdXRpbCc7XHJcblxyXG5jb25zdCBJdGVtc0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcHJvcFR5cGVzOiB7XHJcbiAgICBpdGVtczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIH0pLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtc01hcHBlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGRpc3BsYXlNYXBwZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgfSxcclxuXHJcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgaXRlbXNNYXBwZXI6IHggPT4geCxcclxuICAgICAgZGlzcGxheU1hcHBlcjogeCA9PiB4LFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzOyBcclxuICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuaXRlbXNcclxuICAgICAgLnNvcnQodXRpbC5hc2MpXHJcbiAgICAgIC5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAge3NlbGYucHJvcHMuZGlzcGxheU1hcHBlcihzZWxmLnByb3BzLml0ZW1zTWFwcGVyKGl0ZW0pKX1cclxuICAgICAgPC9saT5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7aXRlbXN9XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0OyJdfQ==