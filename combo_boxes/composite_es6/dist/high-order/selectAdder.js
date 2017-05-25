define(['exports', 'react', 'controls/dropdown'], function (exports, _react, _dropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _dropdown2 = _interopRequireDefault(_dropdown);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // ES6 arrow functions won't transpile correctly. Gotta use a standard function
  function SelectAdder(Component) {
    return class extends _react2.default.Component {
      constructor(params) {
        super(params);
        this.firstSelection = null;
      }

      dropDownOnChange(event) {
        this.firstSelection = event.target.value;
      }
      dropDown2OnChange(event) {
        var selectedValue = event.target.value;
        store.dispatch(ActionCreators.userEntersGroup(this.firstSelection, selectedValue));
      }
      listItemToOptions(item) {
        store.dispatch(ActionCreators.userLeavesGroup(this.firstSelection, item.id));
      }
      render() {
        return _react2.default.createElement(
          'div',
          { id: 'selectAdderDiv' + this.props.id },
          _react2.default.createElement(_dropdown2.default, { id: 'selectAdderDiv' + this.props.id + 'dropdown1',
            options: this.props.addedSelectOptions,
            labelField: this.props.labelField1,
            valueField: this.props.valueField1,
            value: '0',
            onChange: this.dropDownOnChange.bind(this) }),
          _react2.default.createElement(Component, this.props)
        );
      }
    };
  };

  exports.default = SelectAdder;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9oaWdoLW9yZGVyL3NlbGVjdEFkZGVyLmpzeCJdLCJuYW1lcyI6WyJTZWxlY3RBZGRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicGFyYW1zIiwiZmlyc3RTZWxlY3Rpb24iLCJkcm9wRG93bk9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRyb3BEb3duMk9uQ2hhbmdlIiwic2VsZWN0ZWRWYWx1ZSIsInN0b3JlIiwiZGlzcGF0Y2giLCJBY3Rpb25DcmVhdG9ycyIsInVzZXJFbnRlcnNHcm91cCIsImxpc3RJdGVtVG9PcHRpb25zIiwiaXRlbSIsInVzZXJMZWF2ZXNHcm91cCIsImlkIiwicmVuZGVyIiwicHJvcHMiLCJhZGRlZFNlbGVjdE9wdGlvbnMiLCJsYWJlbEZpZWxkMSIsInZhbHVlRmllbGQxIiwiYmluZCJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQSxXQUFTQSxXQUFULENBQXFCQyxTQUFyQixFQUFnQztBQUM5QixXQUFPLGNBQWMsZ0JBQU1BLFNBQXBCLENBQThCO0FBQ25DQyxrQkFBWUMsTUFBWixFQUFvQjtBQUNsQixjQUFNQSxNQUFOO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNEOztBQUVEQyx1QkFBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLGFBQUtGLGNBQUwsR0FBc0JFLE1BQU1DLE1BQU4sQ0FBYUMsS0FBbkM7QUFDRDtBQUNEQyx3QkFBa0JILEtBQWxCLEVBQXlCO0FBQ3ZCLFlBQUlJLGdCQUFnQkosTUFBTUMsTUFBTixDQUFhQyxLQUFqQztBQUNBRyxjQUFNQyxRQUFOLENBQWVDLGVBQWVDLGVBQWYsQ0FBK0IsS0FBS1YsY0FBcEMsRUFBb0RNLGFBQXBELENBQWY7QUFDRDtBQUNESyx3QkFBa0JDLElBQWxCLEVBQXdCO0FBQ3RCTCxjQUFNQyxRQUFOLENBQWVDLGVBQWVJLGVBQWYsQ0FBK0IsS0FBS2IsY0FBcEMsRUFBb0RZLEtBQUtFLEVBQXpELENBQWY7QUFDRDtBQUNEQyxlQUFTO0FBQ1AsZUFBTztBQUFBO0FBQUEsWUFBSyxJQUFJLG1CQUFtQixLQUFLQyxLQUFMLENBQVdGLEVBQXZDO0FBQ0wsOERBQVUsSUFBSSxtQkFBbUIsS0FBS0UsS0FBTCxDQUFXRixFQUE5QixHQUFtQyxXQUFqRDtBQUNFLHFCQUFTLEtBQUtFLEtBQUwsQ0FBV0Msa0JBRHRCO0FBRUUsd0JBQVksS0FBS0QsS0FBTCxDQUFXRSxXQUZ6QjtBQUdFLHdCQUFZLEtBQUtGLEtBQUwsQ0FBV0csV0FIekI7QUFJRSxtQkFBTSxHQUpSO0FBS0Usc0JBQVUsS0FBS2xCLGdCQUFMLENBQXNCbUIsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FMWixHQURLO0FBT0wsd0NBQUMsU0FBRCxFQUFlLEtBQUtKLEtBQXBCO0FBUEssU0FBUDtBQVNEO0FBMUJrQyxLQUFyQztBQTRCRDs7b0JBRWNwQixXIiwiZmlsZSI6InNlbGVjdEFkZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbnRyb2xzL2Ryb3Bkb3duJztcclxuXHJcbi8vIEVTNiBhcnJvdyBmdW5jdGlvbnMgd29uJ3QgdHJhbnNwaWxlIGNvcnJlY3RseS4gR290dGEgdXNlIGEgc3RhbmRhcmQgZnVuY3Rpb25cclxuZnVuY3Rpb24gU2VsZWN0QWRkZXIoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgICB0aGlzLmZpcnN0U2VsZWN0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZHJvcERvd25PbkNoYW5nZShldmVudCkge1xyXG4gICAgICB0aGlzLmZpcnN0U2VsZWN0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgZHJvcERvd24yT25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3JzLnVzZXJFbnRlcnNHcm91cCh0aGlzLmZpcnN0U2VsZWN0aW9uLCBzZWxlY3RlZFZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBsaXN0SXRlbVRvT3B0aW9ucyhpdGVtKSB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3JzLnVzZXJMZWF2ZXNHcm91cCh0aGlzLmZpcnN0U2VsZWN0aW9uLCBpdGVtLmlkKSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2IGlkPXsnc2VsZWN0QWRkZXJEaXYnICsgdGhpcy5wcm9wcy5pZH0+XHJcbiAgICAgICAgPERyb3Bkb3duIGlkPXsnc2VsZWN0QWRkZXJEaXYnICsgdGhpcy5wcm9wcy5pZCArICdkcm9wZG93bjEnfVxyXG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5wcm9wcy5hZGRlZFNlbGVjdE9wdGlvbnN9XHJcbiAgICAgICAgICBsYWJlbEZpZWxkPXt0aGlzLnByb3BzLmxhYmVsRmllbGQxfVxyXG4gICAgICAgICAgdmFsdWVGaWVsZD17dGhpcy5wcm9wcy52YWx1ZUZpZWxkMX1cclxuICAgICAgICAgIHZhbHVlPVwiMFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kcm9wRG93bk9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0QWRkZXI7Il19