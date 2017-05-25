define(['exports', 'react', './dropdown', 'collections/itemslist'], function (exports, _react, _dropdown, _itemslist) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdown2 = _interopRequireDefault(_dropdown);

  var _itemsList2 = _interopRequireDefault(_itemslist);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let SelectList = class SelectList extends _react2.default.Component {
    render() {
      return _react2.default.createElement(
        'div',
        { id: 'selectlistDiv' + this.props.id },
        _react2.default.createElement(_dropdown2.default, { id: 'selectlist' + this.props.id + 'Dropdown',
          options: this.props.options,
          labelField: this.props.labelField,
          valueField: this.props.valueField,
          value: '0',
          onChange: this.props.onSelectChange,
          optionsMapper: this.props.optionsMapper }),
        _react2.default.createElement(_itemsList2.default, { id: 'selectlist' + this.props.id + 'List',
          items: this.props.listItems,
          itemsMapper: this.props.listItemsMapper,
          displayMapper: this.props.listItemsDisplayMapper })
      );
    }
  };
  ;

  exports.default = SelectList;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb250cm9scy9zZWxlY3RsaXN0LmpzeCJdLCJuYW1lcyI6WyJTZWxlY3RMaXN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJpZCIsIm9wdGlvbnMiLCJsYWJlbEZpZWxkIiwidmFsdWVGaWVsZCIsIm9uU2VsZWN0Q2hhbmdlIiwib3B0aW9uc01hcHBlciIsImxpc3RJdGVtcyIsImxpc3RJdGVtc01hcHBlciIsImxpc3RJdGVtc0Rpc3BsYXlNYXBwZXIiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BTU1BLFUsR0FBTixNQUFNQSxVQUFOLFNBQXlCLGdCQUFNQyxTQUEvQixDQUF5QztBQUN2Q0MsYUFBUztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQUssSUFBSSxrQkFBa0IsS0FBS0MsS0FBTCxDQUFXQyxFQUF0QztBQUNMLDREQUFVLElBQUksZUFBZSxLQUFLRCxLQUFMLENBQVdDLEVBQTFCLEdBQStCLFVBQTdDO0FBQ0UsbUJBQVMsS0FBS0QsS0FBTCxDQUFXRSxPQUR0QjtBQUVFLHNCQUFZLEtBQUtGLEtBQUwsQ0FBV0csVUFGekI7QUFHRSxzQkFBWSxLQUFLSCxLQUFMLENBQVdJLFVBSHpCO0FBSUUsaUJBQU0sR0FKUjtBQUtFLG9CQUFVLEtBQUtKLEtBQUwsQ0FBV0ssY0FMdkI7QUFNRSx5QkFBZSxLQUFLTCxLQUFMLENBQVdNLGFBTjVCLEdBREs7QUFRTCw2REFBVyxJQUFJLGVBQWUsS0FBS04sS0FBTCxDQUFXQyxFQUExQixHQUErQixNQUE5QztBQUNFLGlCQUFPLEtBQUtELEtBQUwsQ0FBV08sU0FEcEI7QUFFRSx1QkFBYSxLQUFLUCxLQUFMLENBQVdRLGVBRjFCO0FBR0UseUJBQWUsS0FBS1IsS0FBTCxDQUFXUyxzQkFINUI7QUFSSyxPQUFQO0FBYUQ7QUFmc0MsRztBQWdCeEM7O29CQUVjWixVIiwiZmlsZSI6InNlbGVjdGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSAnY29sbGVjdGlvbnMvaXRlbXNMaXN0JztcclxuXHJcbmNsYXNzIFNlbGVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXsnc2VsZWN0bGlzdERpdicgKyB0aGlzLnByb3BzLmlkfT5cclxuICAgICAgPERyb3Bkb3duIGlkPXsnc2VsZWN0bGlzdCcgKyB0aGlzLnByb3BzLmlkICsgJ0Ryb3Bkb3duJ31cclxuICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLm9wdGlvbnN9XHJcbiAgICAgICAgbGFiZWxGaWVsZD17dGhpcy5wcm9wcy5sYWJlbEZpZWxkfVxyXG4gICAgICAgIHZhbHVlRmllbGQ9e3RoaXMucHJvcHMudmFsdWVGaWVsZH1cclxuICAgICAgICB2YWx1ZT1cIjBcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgIG9wdGlvbnNNYXBwZXI9e3RoaXMucHJvcHMub3B0aW9uc01hcHBlcn0vPlxyXG4gICAgICA8SXRlbXNMaXN0IGlkPXsnc2VsZWN0bGlzdCcgKyB0aGlzLnByb3BzLmlkICsgJ0xpc3QnfVxyXG4gICAgICAgIGl0ZW1zPXt0aGlzLnByb3BzLmxpc3RJdGVtc31cclxuICAgICAgICBpdGVtc01hcHBlcj17dGhpcy5wcm9wcy5saXN0SXRlbXNNYXBwZXJ9XHJcbiAgICAgICAgZGlzcGxheU1hcHBlcj17dGhpcy5wcm9wcy5saXN0SXRlbXNEaXNwbGF5TWFwcGVyfS8+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RMaXN0OyJdfQ==