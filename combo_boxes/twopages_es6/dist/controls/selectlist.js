define(['exports', 'react', 'controls/dropdown', 'collections/itemslist'], function (exports, _react, _dropdown, _itemslist) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdown2 = _interopRequireDefault(_dropdown);

  var _itemslist2 = _interopRequireDefault(_itemslist);

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
        _react2.default.createElement(_itemslist2.default, { id: 'selectlist' + this.props.id + 'List',
          items: this.props.listItems,
          itemsMapper: this.props.listItemsMapper,
          displayMapper: this.props.listItemsDisplayMapper })
      );
    }
  };
  exports.default = SelectList;
});
