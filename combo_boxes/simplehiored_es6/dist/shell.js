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
          onChange: this.dropDownOnChange.bind(this) }),
        _react2.default.createElement(_itemsList2.default, { id: 'list01', items: state.selecteds, mapper: this.deletableUserMapperFactory() })
      );
    }
  };
  ;

  exports.default = Shell;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zaGVsbC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlVXNlciIsIlNoZWxsIiwiQ29tcG9uZW50IiwiZHJvcERvd25PbkNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZGlzcGF0Y2giLCJ1c2VyRW50ZXJzR3JvdXAiLCJsaXN0SXRlbVRvT3B0aW9ucyIsIml0ZW0iLCJ1c2VyTGVhdmVzR3JvdXAiLCJkZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSIsInNlbGYiLCJkZWxldGUiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidXNlcnMiLCJiaW5kIiwic2VsZWN0ZWRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFFBQU1BLGdCQUFnQixpREFBdEI7O01BRU1DLEssR0FBTixNQUFNQSxLQUFOLFNBQW9CLGdCQUFNQyxTQUExQixDQUFvQztBQUNsQ0MscUJBQWlCQyxLQUFqQixFQUF3QjtBQUN0QixVQUFJQyxnQkFBZ0JELE1BQU1FLE1BQU4sQ0FBYUMsS0FBakM7QUFDQSx1QkFBTUMsUUFBTixDQUFlLHdCQUFlQyxlQUFmLENBQStCSixhQUEvQixDQUFmO0FBQ0Q7QUFDREssc0JBQWtCQyxJQUFsQixFQUF3QjtBQUN0Qix1QkFBTUgsUUFBTixDQUFlLHdCQUFlSSxlQUFmLENBQStCRCxJQUEvQixDQUFmO0FBQ0Q7QUFDREUsaUNBQTZCO0FBQzNCLFVBQUlDLE9BQU8sSUFBWDtBQUNBLGFBQU9ILFFBQVEsOEJBQUMsYUFBRCxJQUFlLE1BQU1BLElBQXJCLEVBQTJCLFdBQVcsRUFBQ0ksUUFBUSxNQUFNRCxLQUFLSixpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBZixFQUF0QyxHQUFmO0FBQ0Q7QUFDREssYUFBUztBQUNQLFVBQUlDLFFBQVEsaUJBQU1DLFFBQU4sRUFBWjtBQUNBLGFBQU87QUFBQTtBQUFBO0FBQ0wsNERBQVUsSUFBRyxZQUFiO0FBQ0UsbUJBQVNELE1BQU1FLEtBRGpCO0FBRUUsc0JBQVcsTUFGYjtBQUdFLHNCQUFXLElBSGI7QUFJRSxpQkFBTSxHQUpSO0FBS0Usb0JBQVUsS0FBS2hCLGdCQUFMLENBQXNCaUIsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FMWixHQURLO0FBT0wsNkRBQVcsSUFBRyxRQUFkLEVBQXVCLE9BQU9ILE1BQU1JLFNBQXBDLEVBQStDLFFBQVEsS0FBS1IsMEJBQUwsRUFBdkQ7QUFQSyxPQUFQO0FBU0Q7QUF2QmlDLEc7QUF3Qm5DOztvQkFFY1osSyIsImZpbGUiOiJzaGVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdjb250cm9scy9kcm9wZG93bic7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSAnY29sbGVjdGlvbnMvaXRlbXNMaXN0JztcclxuaW1wb3J0IFVzZXIgZnJvbSAndXNlcic7XHJcbmltcG9ydCBEZWxldGFibGVDb21wb25lbnQgZnJvbSAnaGlnaC1vcmRlci9kZWxldGFibGVDb21wb25lbnQnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICdtaXNjL3V0aWwnO1xyXG5pbXBvcnQgeyBBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ2FjdGlvbnMvYWN0aW9ucyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnaW5pdFN0b3JlJztcclxuXHJcbmNvbnN0IERlbGV0YWJsZVVzZXIgPSBEZWxldGFibGVDb21wb25lbnQoVXNlcik7XHJcblxyXG5jbGFzcyBTaGVsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgZHJvcERvd25PbkNoYW5nZShldmVudCkge1xyXG4gICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9ycy51c2VyRW50ZXJzR3JvdXAoc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gIH1cclxuICBsaXN0SXRlbVRvT3B0aW9ucyhpdGVtKSB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9ycy51c2VyTGVhdmVzR3JvdXAoaXRlbSkpO1xyXG4gIH1cclxuICBkZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBpdGVtID0+IDxEZWxldGFibGVVc2VyIGRhdGE9e2l0ZW19IGNhbGxiYWNrcz17e2RlbGV0ZTogKCkgPT4gc2VsZi5saXN0SXRlbVRvT3B0aW9ucyhpdGVtKX19Lz5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8RHJvcGRvd24gaWQ9XCJkcm9wZG93bjAxXCJcclxuICAgICAgICBvcHRpb25zPXtzdGF0ZS51c2Vyc31cclxuICAgICAgICBsYWJlbEZpZWxkPSduYW1lJ1xyXG4gICAgICAgIHZhbHVlRmllbGQ9J2lkJ1xyXG4gICAgICAgIHZhbHVlPVwiMFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuZHJvcERvd25PbkNoYW5nZS5iaW5kKHRoaXMpfS8+XHJcbiAgICAgIDxJdGVtc0xpc3QgaWQ9XCJsaXN0MDFcIiBpdGVtcz17c3RhdGUuc2VsZWN0ZWRzfSBtYXBwZXI9e3RoaXMuZGVsZXRhYmxlVXNlck1hcHBlckZhY3RvcnkoKX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hlbGw7Il19