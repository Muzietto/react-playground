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

  let Composite = class Composite extends _react2.default.Component {
    dropDown1OnChange(event) {// changes state
    }
    dropDown2OnChange(event) {// changes state
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
        { id: 'compositeDiv' + this.props.data.id, className: 'composite-div' },
        _react2.default.createElement(_dropdown2.default, { id: 'compositeDiv' + this.props.data.id + 'dropdown1',
          options: this.props.options1,
          labelField: this.props.labelField1,
          valueField: this.props.valueField1,
          value: '0',
          onChange: this.dropDown1OnChange.bind(this) }),
        _react2.default.createElement(_dropdown2.default, { id: 'compositeDiv' + this.props.data.id + 'dropdown2',
          options: this.props.options2,
          labelField: this.props.labelField2,
          valueField: this.props.valueField2,
          value: '0',
          onChange: this.dropDown2OnChange.bind(this) }),
        _react2.default.createElement(_itemsList2.default, { id: 'compositeDiv' + this.props.data.id + 'itemsList',
          items: this.state.selecteds, mapper: this.deletableUserMapperFactory() })
      );
    }
  };
  ;

  exports.default = Shell;
});