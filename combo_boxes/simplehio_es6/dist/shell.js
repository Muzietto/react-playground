define(['exports', 'react', 'controls/dropdown', 'collections/itemsList', 'user', 'deletableComponent', 'misc/util'], function (exports, _react, _dropdown, _itemsList, _user, _deletableComponent, _util) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zaGVsbC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlVXNlciIsIlNoZWxsIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwYXJhbXMiLCJzdGF0ZSIsInVzZXJzIiwibmFtZSIsImlkIiwic2VsZWN0ZWRzIiwiZHJvcERvd25PbkNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0ZWRJdGVtIiwiZmluZCIsIm9wdCIsIm9wdGlvblRvTGlzdCIsIml0ZW0iLCJuZXdTZXRzIiwiZGlzcGxhY2VkSXRlbSIsInNldFN0YXRlIiwiYXVnbWVudGVkIiwiZmlsdGVyZWQiLCJsaXN0SXRlbVRvT3B0aW9ucyIsImRlbGV0YWJsZVVzZXJNYXBwZXJGYWN0b3J5Iiwic2VsZiIsImRlbGV0ZSIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsUUFBTUEsZ0JBQWdCLGlEQUF0Qjs7TUFFTUMsSyxHQUFOLE1BQU1BLEtBQU4sU0FBb0IsZ0JBQU1DLFNBQTFCLENBQW9DO0FBQ2xDQyxnQkFBWUMsTUFBWixFQUFvQjtBQUNsQixZQUFNQSxNQUFOO0FBQ0EsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQU8sQ0FDTCxFQUFDQyxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFESyxFQUVMLEVBQUNELE1BQU0sT0FBUCxFQUFnQkMsSUFBSSxDQUFwQixFQUZLLEVBR0wsRUFBQ0QsTUFBTSxPQUFQLEVBQWdCQyxJQUFJLENBQXBCLEVBSEssRUFJTCxFQUFDRCxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFKSyxDQURJO0FBT1hDLG1CQUFXO0FBUEEsT0FBYjtBQVNEO0FBQ0RDLHFCQUFpQkMsS0FBakIsRUFBd0I7QUFBRTtBQUN4QixVQUFJQyxnQkFBZ0JELE1BQU1FLE1BQU4sQ0FBYUMsS0FBakM7QUFDQTtBQUNBLFVBQUlDLGVBQWUsS0FBS1YsS0FBTCxDQUFXQyxLQUFYLENBQ2hCVSxJQURnQixDQUNYQyxPQUFRQSxJQUFJVCxFQUFKLElBQVVJLGFBRFAsQ0FBbkI7QUFFQSxXQUFLTSxZQUFMLENBQWtCSCxZQUFsQjtBQUNEO0FBQ0RHLGlCQUFhQyxJQUFiLEVBQW1CO0FBQ2pCLFVBQUlDLFVBQVUsZUFBS0MsYUFBTCxDQUFtQixLQUFLaEIsS0FBTCxDQUFXQyxLQUE5QixFQUFxQyxLQUFLRCxLQUFMLENBQVdJLFNBQWhELEVBQTJEVSxJQUEzRCxDQUFkO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQ1piLG1CQUFXVyxRQUFRRyxTQURQO0FBRVpqQixlQUFPYyxRQUFRSTtBQUZILE9BQWQ7QUFJRDtBQUNEQyxzQkFBa0JOLElBQWxCLEVBQXdCO0FBQ3RCLFVBQUlDLFVBQVUsZUFBS0MsYUFBTCxDQUFtQixLQUFLaEIsS0FBTCxDQUFXSSxTQUE5QixFQUF5QyxLQUFLSixLQUFMLENBQVdDLEtBQXBELEVBQTJEYSxJQUEzRCxDQUFkO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQ1poQixlQUFPYyxRQUFRRyxTQURIO0FBRVpkLG1CQUFXVyxRQUFRSTtBQUZQLE9BQWQ7QUFJRDtBQUNERSxpQ0FBNkI7QUFDM0IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBT1IsUUFBUSw4QkFBQyxhQUFELElBQWUsTUFBTUEsSUFBckIsRUFBMkIsV0FBVyxFQUFDUyxRQUFRLE1BQU1ELEtBQUtGLGlCQUFMLENBQXVCTixJQUF2QixDQUFmLEVBQXRDLEdBQWY7QUFDRDtBQUNEVSxhQUFTO0FBQ1AsYUFBTztBQUFBO0FBQUE7QUFDTCw0REFBVSxJQUFHLFlBQWI7QUFDRSxtQkFBUyxLQUFLeEIsS0FBTCxDQUFXQyxLQUR0QjtBQUVFLHNCQUFXLE1BRmI7QUFHRSxzQkFBVyxJQUhiO0FBSUUsaUJBQU0sR0FKUjtBQUtFLG9CQUFVLEtBQUtJLGdCQUFMLENBQXNCb0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FMWixHQURLO0FBT0wsNkRBQVcsSUFBRyxRQUFkLEVBQXVCLE9BQU8sS0FBS3pCLEtBQUwsQ0FBV0ksU0FBekMsRUFBb0QsUUFBUSxLQUFLaUIsMEJBQUwsRUFBNUQ7QUFQSyxPQUFQO0FBU0Q7QUFoRGlDLEc7QUFpRG5DOztvQkFFY3pCLEsiLCJmaWxlIjoic2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29udHJvbHMvZHJvcGRvd24nO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gJ2NvbGxlY3Rpb25zL2l0ZW1zTGlzdCc7XHJcbmltcG9ydCBVc2VyIGZyb20gJ3VzZXInO1xyXG5pbXBvcnQgRGVsZXRhYmxlQ29tcG9uZW50IGZyb20gJ2RlbGV0YWJsZUNvbXBvbmVudCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ21pc2MvdXRpbCc7XHJcblxyXG5jb25zdCBEZWxldGFibGVVc2VyID0gRGVsZXRhYmxlQ29tcG9uZW50KFVzZXIpO1xyXG5cclxuY2xhc3MgU2hlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgc3VwZXIocGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVzZXJzOiBbXHJcbiAgICAgICAge25hbWU6ICdBcm1hbmRvJywgaWQ6IDF9LFxyXG4gICAgICAgIHtuYW1lOiAnQnJ1bm8nLCBpZDogMn0sXHJcbiAgICAgICAge25hbWU6ICdDYXJsbycsIGlkOiAzfSxcclxuICAgICAgICB7bmFtZTogJ0RhbmllbGUnLCBpZDogNH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHNlbGVjdGVkczogW10sXHJcbiAgICB9XHJcbiAgfVxyXG4gIGRyb3BEb3duT25DaGFuZ2UoZXZlbnQpIHsgLy8gY2hhbmdlcyBzdGF0ZVxyXG4gICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyBwdXQgc2VsZWN0ZWQgb3B0aW9uIGluc2lkZSB0aGlzLnN0YXRlLnNlbGVjdGVkc1xyXG4gICAgdmFyIHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUudXNlcnNcclxuICAgICAgLmZpbmQob3B0ID0+IChvcHQuaWQgPT0gc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gICAgdGhpcy5vcHRpb25Ub0xpc3Qoc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcbiAgb3B0aW9uVG9MaXN0KGl0ZW0pIHtcclxuICAgIHZhciBuZXdTZXRzID0gdXRpbC5kaXNwbGFjZWRJdGVtKHRoaXMuc3RhdGUudXNlcnMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRzLCBpdGVtKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZHM6IG5ld1NldHMuYXVnbWVudGVkLFxyXG4gICAgICB1c2VyczogbmV3U2V0cy5maWx0ZXJlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxpc3RJdGVtVG9PcHRpb25zKGl0ZW0pIHtcclxuICAgIHZhciBuZXdTZXRzID0gdXRpbC5kaXNwbGFjZWRJdGVtKHRoaXMuc3RhdGUuc2VsZWN0ZWRzLCB0aGlzLnN0YXRlLnVzZXJzLCBpdGVtKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB1c2VyczogbmV3U2V0cy5hdWdtZW50ZWQsXHJcbiAgICAgIHNlbGVjdGVkczogbmV3U2V0cy5maWx0ZXJlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlbGV0YWJsZVVzZXJNYXBwZXJGYWN0b3J5KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIGl0ZW0gPT4gPERlbGV0YWJsZVVzZXIgZGF0YT17aXRlbX0gY2FsbGJhY2tzPXt7ZGVsZXRlOiAoKSA9PiBzZWxmLmxpc3RJdGVtVG9PcHRpb25zKGl0ZW0pfX0vPlxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPERyb3Bkb3duIGlkPVwiZHJvcGRvd24wMVwiXHJcbiAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS51c2Vyc31cclxuICAgICAgICBsYWJlbEZpZWxkPSduYW1lJ1xyXG4gICAgICAgIHZhbHVlRmllbGQ9J2lkJ1xyXG4gICAgICAgIHZhbHVlPVwiMFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuZHJvcERvd25PbkNoYW5nZS5iaW5kKHRoaXMpfS8+XHJcbiAgICAgIDxJdGVtc0xpc3QgaWQ9XCJsaXN0MDFcIiBpdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZHN9IG1hcHBlcj17dGhpcy5kZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSgpfS8+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGVsbDsiXX0=