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

  let Composite = class Composite extends _react2.default.Component {
    constructor(params) {
      super(params);
      this.firstSelection = null;
    }
    dropDown1OnChange(event) {
      this.firstSelection = event.target.value;
    }
    dropDown2OnChange(event) {
      var selectedValue = event.target.value;
      _initStore.store.dispatch(_actions.ActionCreators.userEntersGroup(this.firstSelection, selectedValue));
    }
    listItemToOptions(item) {
      _initStore.store.dispatch(_actions.ActionCreators.userLeavesGroup(this.firstSelection, item.id));
    }
    deletableUserMapperFactory() {
      var self = this;
      return item => _react2.default.createElement(DeletableUser, { data: item, callbacks: { delete: () => self.listItemToOptions(item) } });
    }
    render() {
      return _react2.default.createElement(
        'div',
        { id: 'compositeDiv' + this.props.id, className: 'composite-div' },
        _react2.default.createElement(_dropdown2.default, { id: 'compositeDiv' + this.props.id + 'dropdown1',
          options: this.props.options1,
          labelField: this.props.labelField1,
          valueField: this.props.valueField1,
          value: '0',
          onChange: this.dropDown1OnChange.bind(this) }),
        _react2.default.createElement(_dropdown2.default, { id: 'compositeDiv' + this.props.id + 'dropdown2',
          options: this.props.options2,
          labelField: this.props.labelField2,
          valueField: this.props.valueField2,
          value: '0',
          onChange: this.dropDown2OnChange.bind(this) }),
        'optionsMapper=',
        this.props.optionsMapper2,
        '/>',
        _react2.default.createElement(_itemsList2.default, { id: 'compositeDiv' + this.props.id + 'itemsList',
          items: this.props.listItems,
          itemsMapper: state.mappers.testMapper,
          displayMapper: this.deletableUserMapperFactory()
        })
      );
    }
  };
  ;

  exports.default = Composite;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9jb21wb3NpdGUuanN4Il0sIm5hbWVzIjpbIkRlbGV0YWJsZVVzZXIiLCJDb21wb3NpdGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInBhcmFtcyIsImZpcnN0U2VsZWN0aW9uIiwiZHJvcERvd24xT25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZHJvcERvd24yT25DaGFuZ2UiLCJzZWxlY3RlZFZhbHVlIiwiZGlzcGF0Y2giLCJ1c2VyRW50ZXJzR3JvdXAiLCJsaXN0SXRlbVRvT3B0aW9ucyIsIml0ZW0iLCJ1c2VyTGVhdmVzR3JvdXAiLCJpZCIsImRlbGV0YWJsZVVzZXJNYXBwZXJGYWN0b3J5Iiwic2VsZiIsImRlbGV0ZSIsInJlbmRlciIsInByb3BzIiwib3B0aW9uczEiLCJsYWJlbEZpZWxkMSIsInZhbHVlRmllbGQxIiwiYmluZCIsIm9wdGlvbnMyIiwibGFiZWxGaWVsZDIiLCJ2YWx1ZUZpZWxkMiIsIm9wdGlvbnNNYXBwZXIyIiwibGlzdEl0ZW1zIiwic3RhdGUiLCJtYXBwZXJzIiwidGVzdE1hcHBlciJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxRQUFNQSxnQkFBZ0IsaURBQXRCOztNQUVNQyxTLEdBQU4sTUFBTUEsU0FBTixTQUF3QixnQkFBTUMsU0FBOUIsQ0FBd0M7QUFDdENDLGdCQUFZQyxNQUFaLEVBQW9CO0FBQ2xCLFlBQU1BLE1BQU47QUFDQSxXQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7QUFDREMsc0JBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixXQUFLRixjQUFMLEdBQXNCRSxNQUFNQyxNQUFOLENBQWFDLEtBQW5DO0FBQ0Q7QUFDREMsc0JBQWtCSCxLQUFsQixFQUF5QjtBQUN2QixVQUFJSSxnQkFBZ0JKLE1BQU1DLE1BQU4sQ0FBYUMsS0FBakM7QUFDQSx1QkFBTUcsUUFBTixDQUFlLHdCQUFlQyxlQUFmLENBQStCLEtBQUtSLGNBQXBDLEVBQW9ETSxhQUFwRCxDQUFmO0FBQ0Q7QUFDREcsc0JBQWtCQyxJQUFsQixFQUF3QjtBQUN0Qix1QkFBTUgsUUFBTixDQUFlLHdCQUFlSSxlQUFmLENBQStCLEtBQUtYLGNBQXBDLEVBQW9EVSxLQUFLRSxFQUF6RCxDQUFmO0FBQ0Q7QUFDREMsaUNBQTZCO0FBQzNCLFVBQUlDLE9BQU8sSUFBWDtBQUNBLGFBQU9KLFFBQVEsOEJBQUMsYUFBRCxJQUFlLE1BQU1BLElBQXJCLEVBQTJCLFdBQVcsRUFBQ0ssUUFBUSxNQUFNRCxLQUFLTCxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBZixFQUF0QyxHQUFmO0FBQ0Q7QUFDRE0sYUFBUztBQUNQLGFBQU87QUFBQTtBQUFBLFVBQUssSUFBSSxpQkFBaUIsS0FBS0MsS0FBTCxDQUFXTCxFQUFyQyxFQUF5QyxXQUFVLGVBQW5EO0FBQ0wsNERBQVUsSUFBSSxpQkFBaUIsS0FBS0ssS0FBTCxDQUFXTCxFQUE1QixHQUFpQyxXQUEvQztBQUNFLG1CQUFTLEtBQUtLLEtBQUwsQ0FBV0MsUUFEdEI7QUFFRSxzQkFBWSxLQUFLRCxLQUFMLENBQVdFLFdBRnpCO0FBR0Usc0JBQVksS0FBS0YsS0FBTCxDQUFXRyxXQUh6QjtBQUlFLGlCQUFNLEdBSlI7QUFLRSxvQkFBVSxLQUFLbkIsaUJBQUwsQ0FBdUJvQixJQUF2QixDQUE0QixJQUE1QixDQUxaLEdBREs7QUFPTCw0REFBVSxJQUFJLGlCQUFpQixLQUFLSixLQUFMLENBQVdMLEVBQTVCLEdBQWlDLFdBQS9DO0FBQ0UsbUJBQVMsS0FBS0ssS0FBTCxDQUFXSyxRQUR0QjtBQUVFLHNCQUFZLEtBQUtMLEtBQUwsQ0FBV00sV0FGekI7QUFHRSxzQkFBWSxLQUFLTixLQUFMLENBQVdPLFdBSHpCO0FBSUUsaUJBQU0sR0FKUjtBQUtFLG9CQUFVLEtBQUtuQixpQkFBTCxDQUF1QmdCLElBQXZCLENBQTRCLElBQTVCLENBTFosR0FQSztBQUFBO0FBYVksYUFBS0osS0FBTCxDQUFXUSxjQWJ2QjtBQUFBO0FBY0wsNkRBQVcsSUFBSSxpQkFBaUIsS0FBS1IsS0FBTCxDQUFXTCxFQUE1QixHQUFpQyxXQUFoRDtBQUNFLGlCQUFPLEtBQUtLLEtBQUwsQ0FBV1MsU0FEcEI7QUFFRSx1QkFBYUMsTUFBTUMsT0FBTixDQUFjQyxVQUY3QjtBQUdFLHlCQUFlLEtBQUtoQiwwQkFBTDtBQUhqQjtBQWRLLE9BQVA7QUFvQkQ7QUF4Q3FDLEc7QUF5Q3ZDOztvQkFFY2pCLFMiLCJmaWxlIjoiY29tcG9zaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbnRyb2xzL2Ryb3Bkb3duJztcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tICdjb2xsZWN0aW9ucy9pdGVtc0xpc3QnO1xyXG5pbXBvcnQgVXNlciBmcm9tICd1c2VyJztcclxuaW1wb3J0IERlbGV0YWJsZUNvbXBvbmVudCBmcm9tICdoaWdoLW9yZGVyL2RlbGV0YWJsZUNvbXBvbmVudCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ21pc2MvdXRpbCc7XHJcbmltcG9ydCB7IEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnYWN0aW9ucy9hY3Rpb25zJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdpbml0U3RvcmUnO1xyXG5cclxuY29uc3QgRGVsZXRhYmxlVXNlciA9IERlbGV0YWJsZUNvbXBvbmVudChVc2VyKTtcclxuXHJcbmNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgdGhpcy5maXJzdFNlbGVjdGlvbiA9IG51bGw7XHJcbiAgfVxyXG4gIGRyb3BEb3duMU9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpcnN0U2VsZWN0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gIH1cclxuICBkcm9wRG93bjJPbkNoYW5nZShldmVudCkge1xyXG4gICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9ycy51c2VyRW50ZXJzR3JvdXAodGhpcy5maXJzdFNlbGVjdGlvbiwgc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gIH1cclxuICBsaXN0SXRlbVRvT3B0aW9ucyhpdGVtKSB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9ycy51c2VyTGVhdmVzR3JvdXAodGhpcy5maXJzdFNlbGVjdGlvbiwgaXRlbS5pZCkpO1xyXG4gIH1cclxuICBkZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBpdGVtID0+IDxEZWxldGFibGVVc2VyIGRhdGE9e2l0ZW19IGNhbGxiYWNrcz17e2RlbGV0ZTogKCkgPT4gc2VsZi5saXN0SXRlbVRvT3B0aW9ucyhpdGVtKX19Lz5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9eydjb21wb3NpdGVEaXYnICsgdGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwiY29tcG9zaXRlLWRpdlwiPlxyXG4gICAgICA8RHJvcGRvd24gaWQ9eydjb21wb3NpdGVEaXYnICsgdGhpcy5wcm9wcy5pZCArICdkcm9wZG93bjEnfVxyXG4gICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMub3B0aW9uczF9XHJcbiAgICAgICAgbGFiZWxGaWVsZD17dGhpcy5wcm9wcy5sYWJlbEZpZWxkMX1cclxuICAgICAgICB2YWx1ZUZpZWxkPXt0aGlzLnByb3BzLnZhbHVlRmllbGQxfVxyXG4gICAgICAgIHZhbHVlPVwiMFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuZHJvcERvd24xT25DaGFuZ2UuYmluZCh0aGlzKX0vPlxyXG4gICAgICA8RHJvcGRvd24gaWQ9eydjb21wb3NpdGVEaXYnICsgdGhpcy5wcm9wcy5pZCArICdkcm9wZG93bjInfVxyXG4gICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMub3B0aW9uczJ9XHJcbiAgICAgICAgbGFiZWxGaWVsZD17dGhpcy5wcm9wcy5sYWJlbEZpZWxkMn1cclxuICAgICAgICB2YWx1ZUZpZWxkPXt0aGlzLnByb3BzLnZhbHVlRmllbGQyfVxyXG4gICAgICAgIHZhbHVlPVwiMFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuZHJvcERvd24yT25DaGFuZ2UuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgIG9wdGlvbnNNYXBwZXI9e3RoaXMucHJvcHMub3B0aW9uc01hcHBlcjJ9Lz5cclxuICAgICAgPEl0ZW1zTGlzdCBpZD17J2NvbXBvc2l0ZURpdicgKyB0aGlzLnByb3BzLmlkICsgJ2l0ZW1zTGlzdCd9XHJcbiAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMubGlzdEl0ZW1zfVxyXG4gICAgICAgIGl0ZW1zTWFwcGVyPXtzdGF0ZS5tYXBwZXJzLnRlc3RNYXBwZXJ9XHJcbiAgICAgICAgZGlzcGxheU1hcHBlcj17dGhpcy5kZWxldGFibGVVc2VyTWFwcGVyRmFjdG9yeSgpfVxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGU7Il19