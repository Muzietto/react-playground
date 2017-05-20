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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zaGVsbC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlVXNlciIsIlNoZWxsIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwYXJhbXMiLCJzdGF0ZSIsInVzZXJzIiwibmFtZSIsImlkIiwic2VsZWN0ZWRzIiwiZHJvcERvd25PbkNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0ZWRJdGVtIiwiZmluZCIsIm9wdCIsIm9wdGlvblRvTGlzdCIsIml0ZW0iLCJuZXdTZXRzIiwiZGlzcGxhY2VkSXRlbSIsInNldFN0YXRlIiwiYXVnbWVudGVkIiwiZmlsdGVyZWQiLCJsaXN0SXRlbVRvT3B0aW9ucyIsImRlbGV0YWJsZVVzZXJNYXBwZXJGYWN0b3J5Iiwic2VsZiIsImRlbGV0ZSIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsUUFBTUEsZ0JBQWdCLGlEQUF0Qjs7TUFFTUMsSyxHQUFOLE1BQU1BLEtBQU4sU0FBb0IsZ0JBQU1DLFNBQTFCLENBQW9DO0FBQ2xDQyxnQkFBWUMsTUFBWixFQUFvQjtBQUNsQixZQUFNQSxNQUFOO0FBQ0EsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQU8sQ0FDTCxFQUFDQyxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFESyxFQUVMLEVBQUNELE1BQU0sT0FBUCxFQUFnQkMsSUFBSSxDQUFwQixFQUZLLEVBR0wsRUFBQ0QsTUFBTSxPQUFQLEVBQWdCQyxJQUFJLENBQXBCLEVBSEssRUFJTCxFQUFDRCxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFKSyxDQURJO0FBT1hDLG1CQUFXO0FBUEEsT0FBYjtBQVNEO0FBQ0RDLHFCQUFpQkMsS0FBakIsRUFBd0I7QUFBRTtBQUN4QixVQUFJQyxnQkFBZ0JELE1BQU1FLE1BQU4sQ0FBYUMsS0FBakM7QUFDQTtBQUNBLFVBQUlDLGVBQWUsS0FBS1YsS0FBTCxDQUFXQyxLQUFYLENBQ2hCVSxJQURnQixDQUNYQyxPQUFRQSxJQUFJVCxFQUFKLElBQVVJLGFBRFAsQ0FBbkI7QUFFQSxXQUFLTSxZQUFMLENBQWtCSCxZQUFsQjtBQUNEO0FBQ0RHLGlCQUFhQyxJQUFiLEVBQW1CO0FBQ2pCLFVBQUlDLFVBQVUsZUFBS0MsYUFBTCxDQUFtQixLQUFLaEIsS0FBTCxDQUFXQyxLQUE5QixFQUFxQyxLQUFLRCxLQUFMLENBQVdJLFNBQWhELEVBQTJEVSxJQUEzRCxDQUFkO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQ1piLG1CQUFXVyxRQUFRRyxTQURQO0FBRVpqQixlQUFPYyxRQUFRSTtBQUZILE9BQWQ7QUFJRDtBQUNEQyxzQkFBa0JOLElBQWxCLEVBQXdCO0FBQ3RCLFVBQUlDLFVBQVUsZUFBS0MsYUFBTCxDQUFtQixLQUFLaEIsS0FBTCxDQUFXSSxTQUE5QixFQUF5QyxLQUFLSixLQUFMLENBQVdDLEtBQXBELEVBQTJEYSxJQUEzRCxDQUFkO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQ1poQixlQUFPYyxRQUFRRyxTQURIO0FBRVpkLG1CQUFXVyxRQUFRSTtBQUZQLE9BQWQ7QUFJRDtBQUNERSxpQ0FBNkI7QUFDM0IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBT1IsUUFBUSw4QkFBQyxhQUFELElBQWUsTUFBTUEsSUFBckIsRUFBMkIsV0FBVyxFQUFDUyxRQUFRLE1BQU1ELEtBQUtGLGlCQUFMLENBQXVCTixJQUF2QixDQUFmLEVBQXRDLEdBQWY7QUFDRDtBQUNEVSxhQUFTO0FBQ1AsYUFBTztBQUFBO0FBQUE7QUFDTCw0REFBVSxJQUFHLFlBQWI7QUFDRSxtQkFBUyxLQUFLeEIsS0FBTCxDQUFXQyxLQUR0QjtBQUVFLHNCQUFXLE1BRmI7QUFHRSxzQkFBVyxJQUhiO0FBSUUsaUJBQU0sR0FKUjtBQUtFLG9CQUFVLEtBQUtJLGdCQUFMLENBQXNCb0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FMWixHQURLO0FBT0wsNkRBQVcsSUFBRyxRQUFkLEVBQXVCLE9BQU8sS0FBS3pCLEtBQUwsQ0FBV0ksU0FBekMsRUFBb0QsUUFBUSxLQUFLaUIsMEJBQUwsRUFBNUQ7QUFQSyxPQUFQO0FBU0Q7QUFoRGlDLEc7QUFpRG5DOztvQkFFY3pCLEsiLCJmaWxlIjoic2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29udHJvbHMvZHJvcGRvd24nO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gJ2NvbGxlY3Rpb25zL2l0ZW1zTGlzdCc7XHJcbmltcG9ydCBVc2VyIGZyb20gJ3VzZXInO1xyXG5pbXBvcnQgRGVsZXRhYmxlQ29tcG9uZW50IGZyb20gJ2hpZ2gtb3JkZXIvZGVsZXRhYmxlQ29tcG9uZW50JztcclxuaW1wb3J0IHV0aWwgZnJvbSAnbWlzYy91dGlsJztcclxuXHJcbmNvbnN0IERlbGV0YWJsZVVzZXIgPSBEZWxldGFibGVDb21wb25lbnQoVXNlcik7XHJcblxyXG5jbGFzcyBTaGVsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcnM6IFtcclxuICAgICAgICB7bmFtZTogJ0FybWFuZG8nLCBpZDogMX0sXHJcbiAgICAgICAge25hbWU6ICdCcnVubycsIGlkOiAyfSxcclxuICAgICAgICB7bmFtZTogJ0NhcmxvJywgaWQ6IDN9LFxyXG4gICAgICAgIHtuYW1lOiAnRGFuaWVsZScsIGlkOiA0fSxcclxuICAgICAgXSxcclxuICAgICAgc2VsZWN0ZWRzOiBbXSxcclxuICAgIH1cclxuICB9XHJcbiAgZHJvcERvd25PbkNoYW5nZShldmVudCkgeyAvLyBjaGFuZ2VzIHN0YXRlXHJcbiAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vIHB1dCBzZWxlY3RlZCBvcHRpb24gaW5zaWRlIHRoaXMuc3RhdGUuc2VsZWN0ZWRzXHJcbiAgICB2YXIgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS51c2Vyc1xyXG4gICAgICAuZmluZChvcHQgPT4gKG9wdC5pZCA9PSBzZWxlY3RlZFZhbHVlKSk7XHJcbiAgICB0aGlzLm9wdGlvblRvTGlzdChzZWxlY3RlZEl0ZW0pO1xyXG4gIH1cclxuICBvcHRpb25Ub0xpc3QoaXRlbSkge1xyXG4gICAgdmFyIG5ld1NldHMgPSB1dGlsLmRpc3BsYWNlZEl0ZW0odGhpcy5zdGF0ZS51c2VycywgdGhpcy5zdGF0ZS5zZWxlY3RlZHMsIGl0ZW0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkczogbmV3U2V0cy5hdWdtZW50ZWQsXHJcbiAgICAgIHVzZXJzOiBuZXdTZXRzLmZpbHRlcmVkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgbGlzdEl0ZW1Ub09wdGlvbnMoaXRlbSkge1xyXG4gICAgdmFyIG5ld1NldHMgPSB1dGlsLmRpc3BsYWNlZEl0ZW0odGhpcy5zdGF0ZS5zZWxlY3RlZHMsIHRoaXMuc3RhdGUudXNlcnMsIGl0ZW0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXJzOiBuZXdTZXRzLmF1Z21lbnRlZCxcclxuICAgICAgc2VsZWN0ZWRzOiBuZXdTZXRzLmZpbHRlcmVkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVsZXRhYmxlVXNlck1hcHBlckZhY3RvcnkoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gaXRlbSA9PiA8RGVsZXRhYmxlVXNlciBkYXRhPXtpdGVtfSBjYWxsYmFja3M9e3tkZWxldGU6ICgpID0+IHNlbGYubGlzdEl0ZW1Ub09wdGlvbnMoaXRlbSl9fS8+XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8RHJvcGRvd24gaWQ9XCJkcm9wZG93bjAxXCJcclxuICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnVzZXJzfVxyXG4gICAgICAgIGxhYmVsRmllbGQ9J25hbWUnXHJcbiAgICAgICAgdmFsdWVGaWVsZD0naWQnXHJcbiAgICAgICAgdmFsdWU9XCIwXCJcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5kcm9wRG93bk9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cclxuICAgICAgPEl0ZW1zTGlzdCBpZD1cImxpc3QwMVwiIGl0ZW1zPXt0aGlzLnN0YXRlLnNlbGVjdGVkc30gbWFwcGVyPXt0aGlzLmRlbGV0YWJsZVVzZXJNYXBwZXJGYWN0b3J5KCl9Lz5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoZWxsOyJdfQ==