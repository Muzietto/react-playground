define([], function () {
  'use strict';

  define(['exports', 'react', 'dropdown', 'itemsList', 'user', 'util'], function (exports, _react, _dropdown, _itemsList, _user, _util) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _dropdown2 = _interopRequireDefault(_dropdown);

    var _itemsList2 = _interopRequireDefault(_itemsList);

    var _user2 = _interopRequireDefault(_user);

    var _util2 = _interopRequireDefault(_util);

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
        var newSets = _util2.default.displacedItem(this.state.options, this.state.selecteds, item);
        this.setState({
          selecteds: newSets.augmented,
          options: newSets.filtered
        });
      }
      listItemToOptions(item) {
        var newSets = _util2.default.displacedItem(this.state.selecteds, this.state.options, item);
        this.setState({
          options: newSets.augmented,
          selecteds: newSets.filtered
        });
      }
      userMapperFactory() {
        var self = this;
        return item => _react2.default.createElement(_user2.default, { data: item, callbacks: { delete: () => self.listItemToOptions(item) } });
      }
      render() {
        return _react2.default.createElement('div', null, _react2.default.createElement(_dropdown2.default, { id: 'dropdown01',
          options: this.state.options,
          labelField: 'name',
          valueField: 'id',
          value: '0',
          onChange: this.dropDownOnChange.bind(this) }), _react2.default.createElement(_itemsList2.default, { id: 'list01', items: this.state.selecteds, mapper: this.userMapperFactory() }));
      }
    };
    ;

    exports.default = Shell;
  });
});