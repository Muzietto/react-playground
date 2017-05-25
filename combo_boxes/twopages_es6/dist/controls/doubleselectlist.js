define(['exports', 'react', 'controls/dropdown', 'controls/selectlist'], function (exports, _react, _dropdown, _selectlist) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdown2 = _interopRequireDefault(_dropdown);

  var _selectlist2 = _interopRequireDefault(_selectlist);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let DoubleSelectList = class DoubleSelectList extends _react2.default.Component {
    constructor(params) {
      super(params);
      this.state = { firstSelection: 0 };
    }

    dropDownOnChange(value) {
      this.setState({ firstSelection: value });
    }

    dropDown2OnChange(value) {
      this.props.onSelectChange2(this.state.firstSelection)(value);
      //store.dispatch(ActionCreators.userEntersGroup(this.state.firstSelection, selectedValue));
    }

    listItemToOptions(item) {
      store.dispatch(ActionCreators.userLeavesGroup(this.state.firstSelection, item.id));
    }

    render() {
      return _react2.default.createElement(
        'div',
        { className: 'double-select-container', id: 'doubleSelectListDiv' + this.props.id },
        _react2.default.createElement(_dropdown2.default, { id: 'doubleSelectListDiv' + this.props.id + 'dropdown',
          options: this.props.selectOptions1,
          labelField: this.props.selectLabelField1,
          valueField: this.props.selectValueField1,
          value: this.state.firstSelection,
          onChange: this.dropDownOnChange.bind(this) }),
        _react2.default.createElement(_selectlist2.default, {
          id: 'doubleSelectListDiv' + this.props.id + 'selectList',
          options: this.props.selectOptions2.length ? this.props.selectOptions2 : this.props.selectOptions2[this.state.firstSelection],
          labelField: this.props.selectLabelField2,
          valueField: this.props.selectValueField2,
          optionsMapper: this.props.optionsMapper2,
          onSelectChange: this.dropDown2OnChange.bind(this)
          //onSelectChange={this.props.onSelectChange2(this.state.firstSelection)} // try this

          , listItems: this.props.listItems.length ? this.props.listItems : this.props.listItems[this.state.firstSelection],
          listItemsMapper: this.props.listItemsMapper,
          listItemsDisplayMapper: this.props.listItemsDisplayMapper(this.state.firstSelection)
        })
      );
    }
  };
  ;

  exports.default = DoubleSelectList;
});
