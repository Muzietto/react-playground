define(['exports', 'react', 'controls/dropdown', 'collections/itemsList', 'user', 'high-order/deletableComponent', 'misc/util', 'actions/actions', 'initStore'], function (exports, _react, _dropdown, _itemsList, _user, _deletableComponent, _util, _actions, _initStore) {
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
    dropDownOnChange(event) {
      var selectedValue = event.target.value;
      _initStore.store.dispatch(_actions.ActionCreators.userEntersGroup(selectedValue));
    }
    listItemToOptions(item) {
      _initStore.store.dispatch(_actions.ActionCreators.userLeavesGroup(item));
    }
    deletableUserMapperFactory() {
      var self = this;
      return item => _react2.default.createElement(DeletableUser, { data: item, callbacks: { delete: () => self.listItemToOptions(item) } });
    }
    render() {
      var state = _initStore.store.getState();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_dropdown2.default, { id: 'dropdown01',
          options: state.users,
          labelField: 'name',
          valueField: 'id',
          value: '0',
          onChange: this.dropDownOnChange.bind(this),
          optionsMapper: state.mappers.testMapper }),
        _react2.default.createElement(_itemsList2.default, { id: 'list01', items: state.selecteds, mapper: this.deletableUserMapperFactory() })
      );
    }
  };
  ;

  exports.default = Shell;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zaGVsbC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlVXNlciIsIlNoZWxsIiwiQ29tcG9uZW50IiwiZHJvcERvd25PbkNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZGlzcGF0Y2giLCJ1c2VyRW50ZXJzR3JvdXAiLCJsaXN0SXRlbVRvT3B0aW9ucyIsIml0ZW0iLCJ1c2VyTGVhdmVzR3JvdXAiLCJkZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSIsInNlbGYiLCJkZWxldGUiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidXNlcnMiLCJiaW5kIiwibWFwcGVycyIsInRlc3RNYXBwZXIiLCJzZWxlY3RlZHMiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsUUFBTUEsZ0JBQWdCLGlEQUF0Qjs7TUFFTUMsSyxHQUFOLE1BQU1BLEtBQU4sU0FBb0IsZ0JBQU1DLFNBQTFCLENBQW9DO0FBQ2xDQyxxQkFBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLFVBQUlDLGdCQUFnQkQsTUFBTUUsTUFBTixDQUFhQyxLQUFqQztBQUNBLHVCQUFNQyxRQUFOLENBQWUsd0JBQWVDLGVBQWYsQ0FBK0JKLGFBQS9CLENBQWY7QUFDRDtBQUNESyxzQkFBa0JDLElBQWxCLEVBQXdCO0FBQ3RCLHVCQUFNSCxRQUFOLENBQWUsd0JBQWVJLGVBQWYsQ0FBK0JELElBQS9CLENBQWY7QUFDRDtBQUNERSxpQ0FBNkI7QUFDM0IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBT0gsUUFBUSw4QkFBQyxhQUFELElBQWUsTUFBTUEsSUFBckIsRUFBMkIsV0FBVyxFQUFDSSxRQUFRLE1BQU1ELEtBQUtKLGlCQUFMLENBQXVCQyxJQUF2QixDQUFmLEVBQXRDLEdBQWY7QUFDRDtBQUNESyxhQUFTO0FBQ1AsVUFBSUMsUUFBUSxpQkFBTUMsUUFBTixFQUFaO0FBQ0EsYUFBTztBQUFBO0FBQUE7QUFDTCw0REFBVSxJQUFHLFlBQWI7QUFDRSxtQkFBU0QsTUFBTUUsS0FEakI7QUFFRSxzQkFBVyxNQUZiO0FBR0Usc0JBQVcsSUFIYjtBQUlFLGlCQUFNLEdBSlI7QUFLRSxvQkFBVSxLQUFLaEIsZ0JBQUwsQ0FBc0JpQixJQUF0QixDQUEyQixJQUEzQixDQUxaO0FBTUUseUJBQWVILE1BQU1JLE9BQU4sQ0FBY0MsVUFOL0IsR0FESztBQVFMLDZEQUFXLElBQUcsUUFBZCxFQUF1QixPQUFPTCxNQUFNTSxTQUFwQyxFQUErQyxRQUFRLEtBQUtWLDBCQUFMLEVBQXZEO0FBUkssT0FBUDtBQVVEO0FBeEJpQyxHO0FBeUJuQzs7b0JBRWNaLEsiLCJmaWxlIjoic2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29udHJvbHMvZHJvcGRvd24nO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gJ2NvbGxlY3Rpb25zL2l0ZW1zTGlzdCc7XHJcbmltcG9ydCBVc2VyIGZyb20gJ3VzZXInO1xyXG5pbXBvcnQgRGVsZXRhYmxlQ29tcG9uZW50IGZyb20gJ2hpZ2gtb3JkZXIvZGVsZXRhYmxlQ29tcG9uZW50JztcclxuaW1wb3J0IHV0aWwgZnJvbSAnbWlzYy91dGlsJztcclxuaW1wb3J0IHsgQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdhY3Rpb25zL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ2luaXRTdG9yZSc7XHJcblxyXG5jb25zdCBEZWxldGFibGVVc2VyID0gRGVsZXRhYmxlQ29tcG9uZW50KFVzZXIpO1xyXG5cclxuY2xhc3MgU2hlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGRyb3BEb3duT25DaGFuZ2UoZXZlbnQpIHtcclxuICAgIHZhciBzZWxlY3RlZFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goQWN0aW9uQ3JlYXRvcnMudXNlckVudGVyc0dyb3VwKHNlbGVjdGVkVmFsdWUpKTtcclxuICB9XHJcbiAgbGlzdEl0ZW1Ub09wdGlvbnMoaXRlbSkge1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goQWN0aW9uQ3JlYXRvcnMudXNlckxlYXZlc0dyb3VwKGl0ZW0pKTtcclxuICB9XHJcbiAgZGVsZXRhYmxlVXNlck1hcHBlckZhY3RvcnkoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gaXRlbSA9PiA8RGVsZXRhYmxlVXNlciBkYXRhPXtpdGVtfSBjYWxsYmFja3M9e3tkZWxldGU6ICgpID0+IHNlbGYubGlzdEl0ZW1Ub09wdGlvbnMoaXRlbSl9fS8+XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPERyb3Bkb3duIGlkPVwiZHJvcGRvd24wMVwiXHJcbiAgICAgICAgb3B0aW9ucz17c3RhdGUudXNlcnN9XHJcbiAgICAgICAgbGFiZWxGaWVsZD0nbmFtZSdcclxuICAgICAgICB2YWx1ZUZpZWxkPSdpZCdcclxuICAgICAgICB2YWx1ZT1cIjBcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRyb3BEb3duT25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICBvcHRpb25zTWFwcGVyPXtzdGF0ZS5tYXBwZXJzLnRlc3RNYXBwZXJ9Lz5cclxuICAgICAgPEl0ZW1zTGlzdCBpZD1cImxpc3QwMVwiIGl0ZW1zPXtzdGF0ZS5zZWxlY3RlZHN9IG1hcHBlcj17dGhpcy5kZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSgpfS8+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGVsbDsiXX0=