define(['exports', 'react', 'composite'], function (exports, _react, _composite) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _composite2 = _interopRequireDefault(_composite);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let Shell = class Shell extends _react2.default.Component {
    constructor(params) {
      super(params);
      this.state = {
        options: [{ name: 'option A', id: 1 }, { name: 'option B', id: 2 }, { name: 'option C', id: 3 }, { name: 'option D', id: 4 }],
        selecteds: []
      };
    }
    dropDownOnChange(event) {
      // changes state
      var selectedValue = event.target.value;
      // put selected option inside this.state.selecteds
      var selectedItem = this.state.options.find(opt => opt.id == selectedValue);
      this.optionToList(selectedItem);
    }
    optionToList(item) {
      var newSets = util.displacedItem(this.state.options, this.state.selecteds, item);
      this.setState({
        selecteds: newSets.augmented,
        options: newSets.filtered
      });
    }
    listItemToOptions(item) {
      var newSets = util.displacedItem(this.state.selecteds, this.state.options, item);
      this.setState({
        options: newSets.augmented,
        selecteds: newSets.filtered
      });
    }
    userMapperFactory() {
      var self = this;
      return item => _react2.default.createElement(User, { data: item, callbacks: { delete: () => self.listItemToOptions(item) } });
    }
    render() {
      return _react2.default.createElement(
        'div',
        { id: 'shell01' },
        _react2.default.createElement(_composite2.default, { id: 'composite01',
          source: this.state.options,
          sink: this.state.selecteds }),
        _react2.default.createElement(Dropdown, { id: 'dropdown01',
          options: this.state.options,
          labelField: 'name',
          valueField: 'id',
          value: '0',
          onChange: this.dropDownOnChange.bind(this) }),
        _react2.default.createElement(ItemsList, { id: 'list01', items: this.state.selecteds, mapper: this.userMapperFactory() })
      );
    }
  };
  ;

  exports.default = Shell;
});