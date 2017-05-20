define(['exports', 'react', 'controls/dropdown', 'collections/itemsList', 'user', 'high-order/deletableComponent', 'misc/util'], function (exports, _react, _dropdown, _itemsList, _user, _deletableComponent, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdown2 = _interopRequireDefault(_dropdown);

  var _itemsList2 = _interopRequireDefault(_itemsList);

  var _user2 = _interopRequireDefault(_user);

  var _deletableComponent2 = _interopRequireDefault(_deletableComponent);

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const DeletableUser = (0, _deletableComponent2.default)(_user2.default);

  let Shell = class Shell extends _react2.default.Component {
    constructor(params) {
      super(params);
      this.state = {
        users: [{ name: 'Armando', id: 1 }, { name: 'Bruno', id: 2 }, { name: 'Carlo', id: 3 }, { name: 'Daniele', id: 4 }],
        selecteds: []
      };
    }
    dropDownOnChange(event) {
      // changes state
      var selectedValue = event.target.value;
      // put selected option inside this.state.selecteds
      var selectedItem = this.state.users.find(opt => opt.id == selectedValue);
      this.optionToList(selectedItem);
    }
    optionToList(item) {
      var newSets = _util2.default.displacedItem(this.state.users, this.state.selecteds, item);
      this.setState({
        selecteds: newSets.augmented,
        users: newSets.filtered
      });
    }
    listItemToOptions(item) {
      var newSets = _util2.default.displacedItem(this.state.selecteds, this.state.users, item);
      this.setState({
        users: newSets.augmented,
        selecteds: newSets.filtered
      });
    }
    deletableUserMapperFactory() {
      var self = this;
      return item => _react2.default.createElement(DeletableUser, { data: item, callbacks: { delete: () => self.listItemToOptions(item) } });
    }
    render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_dropdown2.default, { id: 'dropdown01',
          options: this.state.users,
          labelField: 'name',
          valueField: 'id',
          value: '0',
          onChange: this.dropDownOnChange.bind(this) }),
        _react2.default.createElement(_itemsList2.default, { id: 'list01', items: this.state.selecteds, mapper: this.deletableUserMapperFactory() })
      );
    }
  };
  ;

  exports.default = Shell;
});