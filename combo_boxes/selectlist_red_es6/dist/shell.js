define(['exports', 'react', 'controls/dropdown', 'collections/itemslist', 'user', 'high-order/deletableComponent', 'misc/util', 'actions/actions', 'initStore'], function (exports, _react, _dropdown, _itemslist, _user, _deletableComponent, _util, _actions, _initStore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdown2 = _interopRequireDefault(_dropdown);

  var _itemsList2 = _interopRequireDefault(_itemslist);

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
        _react2.default.createElement(_itemsList2.default, { id: 'list01',
          items: state.selecteds,
          itemsMapper: state.mappers.testMapper,
          displayMapper: this.deletableUserMapperFactory() })
      );
    }
  };
  ;

  exports.default = Shell;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zaGVsbC5qc3giXSwibmFtZXMiOlsiRGVsZXRhYmxlVXNlciIsIlNoZWxsIiwiQ29tcG9uZW50IiwiZHJvcERvd25PbkNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZGlzcGF0Y2giLCJ1c2VyRW50ZXJzR3JvdXAiLCJsaXN0SXRlbVRvT3B0aW9ucyIsIml0ZW0iLCJ1c2VyTGVhdmVzR3JvdXAiLCJkZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSIsInNlbGYiLCJkZWxldGUiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidXNlcnMiLCJiaW5kIiwibWFwcGVycyIsInRlc3RNYXBwZXIiLCJzZWxlY3RlZHMiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsUUFBTUEsZ0JBQWdCLGlEQUF0Qjs7TUFFTUMsSyxHQUFOLE1BQU1BLEtBQU4sU0FBb0IsZ0JBQU1DLFNBQTFCLENBQW9DO0FBQ2xDQyxxQkFBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLFVBQUlDLGdCQUFnQkQsTUFBTUUsTUFBTixDQUFhQyxLQUFqQztBQUNBLHVCQUFNQyxRQUFOLENBQWUsd0JBQWVDLGVBQWYsQ0FBK0JKLGFBQS9CLENBQWY7QUFDRDtBQUNESyxzQkFBa0JDLElBQWxCLEVBQXdCO0FBQ3RCLHVCQUFNSCxRQUFOLENBQWUsd0JBQWVJLGVBQWYsQ0FBK0JELElBQS9CLENBQWY7QUFDRDtBQUNERSxpQ0FBNkI7QUFDM0IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBT0gsUUFBUSw4QkFBQyxhQUFELElBQWUsTUFBTUEsSUFBckIsRUFBMkIsV0FBVyxFQUFDSSxRQUFRLE1BQU1ELEtBQUtKLGlCQUFMLENBQXVCQyxJQUF2QixDQUFmLEVBQXRDLEdBQWY7QUFDRDtBQUNESyxhQUFTO0FBQ1AsVUFBSUMsUUFBUSxpQkFBTUMsUUFBTixFQUFaO0FBQ0EsYUFBTztBQUFBO0FBQUE7QUFDTCw0REFBVSxJQUFHLFlBQWI7QUFDRSxtQkFBU0QsTUFBTUUsS0FEakI7QUFFRSxzQkFBVyxNQUZiO0FBR0Usc0JBQVcsSUFIYjtBQUlFLGlCQUFNLEdBSlI7QUFLRSxvQkFBVSxLQUFLaEIsZ0JBQUwsQ0FBc0JpQixJQUF0QixDQUEyQixJQUEzQixDQUxaO0FBTUUseUJBQWVILE1BQU1JLE9BQU4sQ0FBY0MsVUFOL0IsR0FESztBQVFMLDZEQUFXLElBQUcsUUFBZDtBQUNFLGlCQUFPTCxNQUFNTSxTQURmO0FBRUUsdUJBQWFOLE1BQU1JLE9BQU4sQ0FBY0MsVUFGN0I7QUFHRSx5QkFBZSxLQUFLVCwwQkFBTCxFQUhqQjtBQVJLLE9BQVA7QUFhRDtBQTNCaUMsRztBQTRCbkM7O29CQUVjWixLIiwiZmlsZSI6InNoZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbnRyb2xzL2Ryb3Bkb3duJztcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tICdjb2xsZWN0aW9ucy9pdGVtc0xpc3QnO1xyXG5pbXBvcnQgVXNlciBmcm9tICd1c2VyJztcclxuaW1wb3J0IERlbGV0YWJsZUNvbXBvbmVudCBmcm9tICdoaWdoLW9yZGVyL2RlbGV0YWJsZUNvbXBvbmVudCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ21pc2MvdXRpbCc7XHJcbmltcG9ydCB7IEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnYWN0aW9ucy9hY3Rpb25zJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdpbml0U3RvcmUnO1xyXG5cclxuY29uc3QgRGVsZXRhYmxlVXNlciA9IERlbGV0YWJsZUNvbXBvbmVudChVc2VyKTtcclxuXHJcbmNsYXNzIFNoZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBkcm9wRG93bk9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3JzLnVzZXJFbnRlcnNHcm91cChzZWxlY3RlZFZhbHVlKSk7XHJcbiAgfVxyXG4gIGxpc3RJdGVtVG9PcHRpb25zKGl0ZW0pIHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3JzLnVzZXJMZWF2ZXNHcm91cChpdGVtKSk7XHJcbiAgfVxyXG4gIGRlbGV0YWJsZVVzZXJNYXBwZXJGYWN0b3J5KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIGl0ZW0gPT4gPERlbGV0YWJsZVVzZXIgZGF0YT17aXRlbX0gY2FsbGJhY2tzPXt7ZGVsZXRlOiAoKSA9PiBzZWxmLmxpc3RJdGVtVG9PcHRpb25zKGl0ZW0pfX0vPlxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxEcm9wZG93biBpZD1cImRyb3Bkb3duMDFcIlxyXG4gICAgICAgIG9wdGlvbnM9e3N0YXRlLnVzZXJzfVxyXG4gICAgICAgIGxhYmVsRmllbGQ9J25hbWUnXHJcbiAgICAgICAgdmFsdWVGaWVsZD0naWQnXHJcbiAgICAgICAgdmFsdWU9XCIwXCJcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5kcm9wRG93bk9uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgb3B0aW9uc01hcHBlcj17c3RhdGUubWFwcGVycy50ZXN0TWFwcGVyfS8+XHJcbiAgICAgIDxJdGVtc0xpc3QgaWQ9XCJsaXN0MDFcIlxyXG4gICAgICAgIGl0ZW1zPXtzdGF0ZS5zZWxlY3RlZHN9XHJcbiAgICAgICAgaXRlbXNNYXBwZXI9e3N0YXRlLm1hcHBlcnMudGVzdE1hcHBlcn1cclxuICAgICAgICBkaXNwbGF5TWFwcGVyPXt0aGlzLmRlbGV0YWJsZVVzZXJNYXBwZXJGYWN0b3J5KCl9Lz5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoZWxsOyJdfQ==