define(['exports', 'react', 'controls/dropdown', 'controls/selectList'], function (exports, _react, _dropdown, _selectList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdown2 = _interopRequireDefault(_dropdown);

  var _selectList2 = _interopRequireDefault(_selectList);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let DoubleSelectList = class DoubleSelectList extends _react2.default.Component {
    constructor(params) {
      super(params);
      this.state = { firstSelection: 0 };
    }

    dropDownOnChange(value) {
      this.setState({ firstSelection: value });
    }

    dropDown2OnChange(value) {
      this.props.onSelectChange2(this.state.firstSelection)(value);
      //store.dispatch(ActionCreators.userEntersGroup(this.state.firstSelection, selectedValue));
    }

    listItemToOptions(item) {
      store.dispatch(ActionCreators.userLeavesGroup(this.state.firstSelection, item.id));
    }

    render() {
      return _react2.default.createElement(
        'div',
        { id: 'doubleSelectListDiv' + this.props.id },
        _react2.default.createElement(_dropdown2.default, { id: 'doubleSelectListDiv' + this.props.id + 'dropdown',
          options: this.props.selectOptions1,
          labelField: this.props.selectLabelField1,
          valueField: this.props.selectValueField1,
          value: this.state.firstSelection,
          onChange: this.dropDownOnChange.bind(this) }),
        _react2.default.createElement(_selectList2.default, {
          id: 'doubleSelectListDiv' + this.props.id + 'selectList',
          options: this.props.selectOptions2.length ? this.props.selectOptions2 : this.props.selectOptions2[this.state.firstSelection],
          labelField: this.props.selectLabelField2,
          valueField: this.props.selectValueField2,
          optionsMapper: this.props.optionsMapper2,
          onSelectChange: this.dropDown2OnChange.bind(this)
          //onSelectChange={this.props.onSelectChange2(this.state.firstSelection)} // try this

          , listItems: this.props.listItems.length ? this.props.listItems : this.props.listItems[this.state.firstSelection],
          listItemsMapper: this.props.listItemsMapper,
          listItemsDisplayMapper: this.props.listItemsDisplayMapper(this.state.firstSelection)
        })
      );
    }
  };
  ;

  exports.default = DoubleSelectList;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb250cm9scy9kb3VibGVzZWxlY3RsaXN0LmpzeCJdLCJuYW1lcyI6WyJEb3VibGVTZWxlY3RMaXN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwYXJhbXMiLCJzdGF0ZSIsImZpcnN0U2VsZWN0aW9uIiwiZHJvcERvd25PbkNoYW5nZSIsInZhbHVlIiwic2V0U3RhdGUiLCJkcm9wRG93bjJPbkNoYW5nZSIsInByb3BzIiwib25TZWxlY3RDaGFuZ2UyIiwibGlzdEl0ZW1Ub09wdGlvbnMiLCJpdGVtIiwic3RvcmUiLCJkaXNwYXRjaCIsIkFjdGlvbkNyZWF0b3JzIiwidXNlckxlYXZlc0dyb3VwIiwiaWQiLCJyZW5kZXIiLCJzZWxlY3RPcHRpb25zMSIsInNlbGVjdExhYmVsRmllbGQxIiwic2VsZWN0VmFsdWVGaWVsZDEiLCJiaW5kIiwic2VsZWN0T3B0aW9uczIiLCJsZW5ndGgiLCJzZWxlY3RMYWJlbEZpZWxkMiIsInNlbGVjdFZhbHVlRmllbGQyIiwib3B0aW9uc01hcHBlcjIiLCJsaXN0SXRlbXMiLCJsaXN0SXRlbXNNYXBwZXIiLCJsaXN0SXRlbXNEaXNwbGF5TWFwcGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQU1NQSxnQixHQUFOLE1BQU1BLGdCQUFOLFNBQStCLGdCQUFNQyxTQUFyQyxDQUErQztBQUM3Q0MsZ0JBQVlDLE1BQVosRUFBb0I7QUFDbEIsWUFBTUEsTUFBTjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxFQUFDQyxnQkFBZ0IsQ0FBakIsRUFBYjtBQUNEOztBQUVEQyxxQkFBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxnQkFBZ0JFLEtBQWpCLEVBQWQ7QUFDRDs7QUFFREUsc0JBQWtCRixLQUFsQixFQUF5QjtBQUN2QixXQUFLRyxLQUFMLENBQVdDLGVBQVgsQ0FBMkIsS0FBS1AsS0FBTCxDQUFXQyxjQUF0QyxFQUFzREUsS0FBdEQ7QUFDQTtBQUNEOztBQUVESyxzQkFBa0JDLElBQWxCLEVBQXdCO0FBQ3RCQyxZQUFNQyxRQUFOLENBQWVDLGVBQWVDLGVBQWYsQ0FBK0IsS0FBS2IsS0FBTCxDQUFXQyxjQUExQyxFQUEwRFEsS0FBS0ssRUFBL0QsQ0FBZjtBQUNEOztBQUVEQyxhQUFTO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBSyxJQUFJLHdCQUF3QixLQUFLVCxLQUFMLENBQVdRLEVBQTVDO0FBQ0wsNERBQVUsSUFBSSx3QkFBd0IsS0FBS1IsS0FBTCxDQUFXUSxFQUFuQyxHQUF3QyxVQUF0RDtBQUNFLG1CQUFTLEtBQUtSLEtBQUwsQ0FBV1UsY0FEdEI7QUFFRSxzQkFBWSxLQUFLVixLQUFMLENBQVdXLGlCQUZ6QjtBQUdFLHNCQUFZLEtBQUtYLEtBQUwsQ0FBV1ksaUJBSHpCO0FBSUUsaUJBQU8sS0FBS2xCLEtBQUwsQ0FBV0MsY0FKcEI7QUFLRSxvQkFBVSxLQUFLQyxnQkFBTCxDQUFzQmlCLElBQXRCLENBQTJCLElBQTNCLENBTFosR0FESztBQU9MO0FBQ0UsY0FBSSx3QkFBd0IsS0FBS2IsS0FBTCxDQUFXUSxFQUFuQyxHQUF3QyxZQUQ5QztBQUVFLG1CQUFVLEtBQUtSLEtBQUwsQ0FBV2MsY0FBWCxDQUEwQkMsTUFBM0IsR0FDTCxLQUFLZixLQUFMLENBQVdjLGNBRE4sR0FFTCxLQUFLZCxLQUFMLENBQVdjLGNBQVgsQ0FBMEIsS0FBS3BCLEtBQUwsQ0FBV0MsY0FBckMsQ0FKTjtBQUtFLHNCQUFZLEtBQUtLLEtBQUwsQ0FBV2dCLGlCQUx6QjtBQU1FLHNCQUFZLEtBQUtoQixLQUFMLENBQVdpQixpQkFOekI7QUFPRSx5QkFBZSxLQUFLakIsS0FBTCxDQUFXa0IsY0FQNUI7QUFRRSwwQkFBZ0IsS0FBS25CLGlCQUFMLENBQXVCYyxJQUF2QixDQUE0QixJQUE1QjtBQUNoQjs7QUFURixZQVdFLFdBQVksS0FBS2IsS0FBTCxDQUFXbUIsU0FBWCxDQUFxQkosTUFBdEIsR0FDUCxLQUFLZixLQUFMLENBQVdtQixTQURKLEdBRVAsS0FBS25CLEtBQUwsQ0FBV21CLFNBQVgsQ0FBcUIsS0FBS3pCLEtBQUwsQ0FBV0MsY0FBaEMsQ0FiTjtBQWNFLDJCQUFpQixLQUFLSyxLQUFMLENBQVdvQixlQWQ5QjtBQWVFLGtDQUF3QixLQUFLcEIsS0FBTCxDQUFXcUIsc0JBQVgsQ0FBa0MsS0FBSzNCLEtBQUwsQ0FBV0MsY0FBN0M7QUFmMUI7QUFQSyxPQUFQO0FBeUJEO0FBN0M0QyxHO0FBOEM5Qzs7b0JBRWNMLGdCIiwiZmlsZSI6ImRvdWJsZXNlbGVjdGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29udHJvbHMvZHJvcGRvd24nO1xyXG5pbXBvcnQgU2VsZWN0TGlzdCBmcm9tICdjb250cm9scy9zZWxlY3RMaXN0JztcclxuXHJcbmNsYXNzIERvdWJsZVNlbGVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgc3VwZXIocGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7Zmlyc3RTZWxlY3Rpb246IDB9O1xyXG4gIH1cclxuXHJcbiAgZHJvcERvd25PbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3RTZWxlY3Rpb246IHZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBkcm9wRG93bjJPbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdENoYW5nZTIodGhpcy5zdGF0ZS5maXJzdFNlbGVjdGlvbikodmFsdWUpO1xyXG4gICAgLy9zdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9ycy51c2VyRW50ZXJzR3JvdXAodGhpcy5zdGF0ZS5maXJzdFNlbGVjdGlvbiwgc2VsZWN0ZWRWYWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgbGlzdEl0ZW1Ub09wdGlvbnMoaXRlbSkge1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goQWN0aW9uQ3JlYXRvcnMudXNlckxlYXZlc0dyb3VwKHRoaXMuc3RhdGUuZmlyc3RTZWxlY3Rpb24sIGl0ZW0uaWQpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXsnZG91YmxlU2VsZWN0TGlzdERpdicgKyB0aGlzLnByb3BzLmlkfT5cclxuICAgICAgPERyb3Bkb3duIGlkPXsnZG91YmxlU2VsZWN0TGlzdERpdicgKyB0aGlzLnByb3BzLmlkICsgJ2Ryb3Bkb3duJ31cclxuICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLnNlbGVjdE9wdGlvbnMxfVxyXG4gICAgICAgIGxhYmVsRmllbGQ9e3RoaXMucHJvcHMuc2VsZWN0TGFiZWxGaWVsZDF9XHJcbiAgICAgICAgdmFsdWVGaWVsZD17dGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUZpZWxkMX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdFNlbGVjdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5kcm9wRG93bk9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cclxuICAgICAgPFNlbGVjdExpc3RcclxuICAgICAgICBpZD17J2RvdWJsZVNlbGVjdExpc3REaXYnICsgdGhpcy5wcm9wcy5pZCArICdzZWxlY3RMaXN0J31cclxuICAgICAgICBvcHRpb25zPXsodGhpcy5wcm9wcy5zZWxlY3RPcHRpb25zMi5sZW5ndGgpXHJcbiAgICAgICAgICA/IHRoaXMucHJvcHMuc2VsZWN0T3B0aW9uczJcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5zZWxlY3RPcHRpb25zMlt0aGlzLnN0YXRlLmZpcnN0U2VsZWN0aW9uXX1cclxuICAgICAgICBsYWJlbEZpZWxkPXt0aGlzLnByb3BzLnNlbGVjdExhYmVsRmllbGQyfVxyXG4gICAgICAgIHZhbHVlRmllbGQ9e3RoaXMucHJvcHMuc2VsZWN0VmFsdWVGaWVsZDJ9XHJcbiAgICAgICAgb3B0aW9uc01hcHBlcj17dGhpcy5wcm9wcy5vcHRpb25zTWFwcGVyMn1cclxuICAgICAgICBvblNlbGVjdENoYW5nZT17dGhpcy5kcm9wRG93bjJPbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIC8vb25TZWxlY3RDaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RDaGFuZ2UyKHRoaXMuc3RhdGUuZmlyc3RTZWxlY3Rpb24pfSAvLyB0cnkgdGhpc1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxpc3RJdGVtcz17KHRoaXMucHJvcHMubGlzdEl0ZW1zLmxlbmd0aClcclxuICAgICAgICAgID8gdGhpcy5wcm9wcy5saXN0SXRlbXNcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5saXN0SXRlbXNbdGhpcy5zdGF0ZS5maXJzdFNlbGVjdGlvbl19XHJcbiAgICAgICAgbGlzdEl0ZW1zTWFwcGVyPXt0aGlzLnByb3BzLmxpc3RJdGVtc01hcHBlcn1cclxuICAgICAgICBsaXN0SXRlbXNEaXNwbGF5TWFwcGVyPXt0aGlzLnByb3BzLmxpc3RJdGVtc0Rpc3BsYXlNYXBwZXIodGhpcy5zdGF0ZS5maXJzdFNlbGVjdGlvbil9XHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvdWJsZVNlbGVjdExpc3Q7Il19