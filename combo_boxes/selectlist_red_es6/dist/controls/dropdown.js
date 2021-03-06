define(['exports', 'react', 'misc/util'], function (exports, _react, _util) {
  // cfr. http://jsfiddle.net/davidwaterston/7a3xxLtw/
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Dropdown = _react2.default.createClass({
    displayName: 'Dropdown',

    propTypes: {
      id: _react2.default.PropTypes.string.isRequired,
      options: _react2.default.PropTypes.array.isRequired,
      value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
      valueField: _react2.default.PropTypes.string,
      labelField: _react2.default.PropTypes.string,
      onChange: _react2.default.PropTypes.func,
      optionsMapper: _react2.default.PropTypes.func
    },

    getDefaultProps: function () {
      return {
        value: null,
        valueField: 'value',
        labelField: 'label',
        onChange: null,
        optionsMapper: x => x
      };
    },

    getInitialState: function () {
      var selected = this.getSelectedFromProps(this.props);
      return { selected: selected }; // this is the state
    },

    componentWillReceiveProps: function (nextProps) {
      var selected = this.getSelectedFromProps(nextProps);
      this.setState({ selected: selected });
    },

    getSelectedFromProps(props) {
      var selected;
      if (props.value === null && props.options.length !== 0) {
        selected = props.options[0][props.valueField];
      } else {
        selected = props.value;
      }
      return selected;
    },

    run(value) {// do nothing;
    },

    render: function () {
      var self = this;
      var options = self.props.options.map(self.props.optionsMapper).sort(_util2.default.asc).map(function (option) {
        return _react2.default.createElement(
          'option',
          { key: option[self.props.valueField], value: option[self.props.valueField] },
          option[self.props.labelField]
        );
      });
      return _react2.default.createElement(
        'select',
        { id: this.props.id,
          className: 'form-control',
          value: this.state.selected,
          onChange: event => this.props.onChange(event.target.value) },
        _react2.default.createElement(
          'option',
          { value: '0' },
          'pick one'
        ),
        options
      );
    },

    handleChange: function (event) {
      if (this.props.onChange) {
        this.props.onChange(event);
      }
      this.setState({ selected: event.target.value });
    }
  });

  exports.default = Dropdown;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb250cm9scy9kcm9wZG93bi5qc3giXSwibmFtZXMiOlsiRHJvcGRvd24iLCJjcmVhdGVDbGFzcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9wdGlvbnMiLCJhcnJheSIsInZhbHVlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwidmFsdWVGaWVsZCIsImxhYmVsRmllbGQiLCJvbkNoYW5nZSIsImZ1bmMiLCJvcHRpb25zTWFwcGVyIiwiZ2V0RGVmYXVsdFByb3BzIiwieCIsImdldEluaXRpYWxTdGF0ZSIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0ZWRGcm9tUHJvcHMiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImxlbmd0aCIsInJ1biIsInJlbmRlciIsInNlbGYiLCJtYXAiLCJzb3J0IiwiYXNjIiwib3B0aW9uIiwic3RhdGUiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxRQUFNQSxXQUFXLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2pDQyxlQUFXO0FBQ1RDLFVBQUksZ0JBQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURsQjtBQUVUQyxlQUFTLGdCQUFNSCxTQUFOLENBQWdCSSxLQUFoQixDQUFzQkYsVUFGdEI7QUFHVEcsYUFBTyxnQkFBTUwsU0FBTixDQUFnQk0sU0FBaEIsQ0FDTCxDQUNFLGdCQUFNTixTQUFOLENBQWdCTyxNQURsQixFQUVFLGdCQUFNUCxTQUFOLENBQWdCQyxNQUZsQixDQURLLENBSEU7QUFTVE8sa0JBQVksZ0JBQU1SLFNBQU4sQ0FBZ0JDLE1BVG5CO0FBVVRRLGtCQUFZLGdCQUFNVCxTQUFOLENBQWdCQyxNQVZuQjtBQVdUUyxnQkFBVSxnQkFBTVYsU0FBTixDQUFnQlcsSUFYakI7QUFZVEMscUJBQWUsZ0JBQU1aLFNBQU4sQ0FBZ0JXO0FBWnRCLEtBRHNCOztBQWdCakNFLHFCQUFpQixZQUFXO0FBQzFCLGFBQU87QUFDTFIsZUFBTyxJQURGO0FBRUxHLG9CQUFZLE9BRlA7QUFHTEMsb0JBQVksT0FIUDtBQUlMQyxrQkFBVSxJQUpMO0FBS0xFLHVCQUFlRSxLQUFLQTtBQUxmLE9BQVA7QUFPRCxLQXhCZ0M7O0FBMEJqQ0MscUJBQWlCLFlBQVc7QUFDMUIsVUFBSUMsV0FBVyxLQUFLQyxvQkFBTCxDQUEwQixLQUFLQyxLQUEvQixDQUFmO0FBQ0EsYUFBTyxFQUFFRixVQUFVQSxRQUFaLEVBQVAsQ0FGMEIsQ0FFSztBQUNoQyxLQTdCZ0M7O0FBK0JqQ0csK0JBQTJCLFVBQVNDLFNBQVQsRUFBb0I7QUFDN0MsVUFBSUosV0FBVyxLQUFLQyxvQkFBTCxDQUEwQkcsU0FBMUIsQ0FBZjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFFTCxVQUFVQSxRQUFaLEVBQWQ7QUFDRCxLQWxDZ0M7O0FBb0NqQ0MseUJBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixVQUFJRixRQUFKO0FBQ0EsVUFBSUUsTUFBTWIsS0FBTixLQUFnQixJQUFoQixJQUF3QmEsTUFBTWYsT0FBTixDQUFjbUIsTUFBZCxLQUF5QixDQUFyRCxFQUF3RDtBQUN0RE4sbUJBQVdFLE1BQU1mLE9BQU4sQ0FBYyxDQUFkLEVBQWlCZSxNQUFNVixVQUF2QixDQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0xRLG1CQUFXRSxNQUFNYixLQUFqQjtBQUNEO0FBQ0gsYUFBT1csUUFBUDtBQUNDLEtBNUNnQzs7QUE4Q2pDTyxRQUFJbEIsS0FBSixFQUFXLENBQUU7QUFDWixLQS9DZ0M7O0FBaURqQ21CLFlBQVEsWUFBVztBQUNqQixVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJdEIsVUFBVXNCLEtBQUtQLEtBQUwsQ0FBV2YsT0FBWCxDQUNYdUIsR0FEVyxDQUNQRCxLQUFLUCxLQUFMLENBQVdOLGFBREosRUFFWGUsSUFGVyxDQUVOLGVBQUtDLEdBRkMsRUFHWEYsR0FIVyxDQUdQLFVBQVNHLE1BQVQsRUFBaUI7QUFDdEIsZUFDRTtBQUFBO0FBQUEsWUFBUSxLQUFLQSxPQUFPSixLQUFLUCxLQUFMLENBQVdWLFVBQWxCLENBQWIsRUFBNEMsT0FBT3FCLE9BQU9KLEtBQUtQLEtBQUwsQ0FBV1YsVUFBbEIsQ0FBbkQ7QUFDR3FCLGlCQUFPSixLQUFLUCxLQUFMLENBQVdULFVBQWxCO0FBREgsU0FERjtBQUtELE9BVGEsQ0FBZDtBQVVBLGFBQ0U7QUFBQTtBQUFBLFVBQVEsSUFBSSxLQUFLUyxLQUFMLENBQVduQixFQUF2QjtBQUNJLHFCQUFVLGNBRGQ7QUFFSSxpQkFBTyxLQUFLK0IsS0FBTCxDQUFXZCxRQUZ0QjtBQUdJLG9CQUFVZSxTQUFTLEtBQUtiLEtBQUwsQ0FBV1IsUUFBWCxDQUFvQnFCLE1BQU1DLE1BQU4sQ0FBYTNCLEtBQWpDLENBSHZCO0FBSUU7QUFBQTtBQUFBLFlBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxTQUpGO0FBS0dGO0FBTEgsT0FERjtBQVNELEtBdEVnQzs7QUF3RWpDOEIsa0JBQWMsVUFBU0YsS0FBVCxFQUFnQjtBQUM1QixVQUFJLEtBQUtiLEtBQUwsQ0FBV1IsUUFBZixFQUF5QjtBQUN2QixhQUFLUSxLQUFMLENBQVdSLFFBQVgsQ0FBb0JxQixLQUFwQjtBQUNEO0FBQ0QsV0FBS1YsUUFBTCxDQUFjLEVBQUNMLFVBQVVlLE1BQU1DLE1BQU4sQ0FBYTNCLEtBQXhCLEVBQWQ7QUFDRDtBQTdFZ0MsR0FBbEIsQ0FBakI7O29CQWdGZVQsUSIsImZpbGUiOiJkcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNmci4gaHR0cDovL2pzZmlkZGxlLm5ldC9kYXZpZHdhdGVyc3Rvbi83YTN4eEx0dy9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHV0aWwgZnJvbSAnbWlzYy91dGlsJztcclxuXHJcbmNvbnN0IERyb3Bkb3duID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHByb3BUeXBlczoge1xyXG4gICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoXHJcbiAgICAgIFtcclxuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICAgICAgXVxyXG4gICAgKSxcclxuICAgIHZhbHVlRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbEZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gICAgb3B0aW9uc01hcHBlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgfSxcclxuXHJcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxyXG4gICAgICBsYWJlbEZpZWxkOiAnbGFiZWwnLFxyXG4gICAgICBvbkNoYW5nZTogbnVsbCxcclxuICAgICAgb3B0aW9uc01hcHBlcjogeCA9PiB4LFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNlbGVjdGVkID0gdGhpcy5nZXRTZWxlY3RlZEZyb21Qcm9wcyh0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiB7IHNlbGVjdGVkOiBzZWxlY3RlZCB9OyAvLyB0aGlzIGlzIHRoZSBzdGF0ZVxyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xyXG4gICAgdmFyIHNlbGVjdGVkID0gdGhpcy5nZXRTZWxlY3RlZEZyb21Qcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBzZWxlY3RlZCB9KTtcclxuICB9LFxyXG5cclxuICBnZXRTZWxlY3RlZEZyb21Qcm9wcyhwcm9wcykge1xyXG4gICAgdmFyIHNlbGVjdGVkO1xyXG4gICAgaWYgKHByb3BzLnZhbHVlID09PSBudWxsICYmIHByb3BzLm9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMub3B0aW9uc1swXVtwcm9wcy52YWx1ZUZpZWxkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMudmFsdWU7XHJcbiAgICB9XHJcbiAgcmV0dXJuIHNlbGVjdGVkO1xyXG4gIH0sXHJcblxyXG4gIHJ1bih2YWx1ZSkgeyAvLyBkbyBub3RoaW5nO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHNlbGYucHJvcHMub3B0aW9uc1xyXG4gICAgICAubWFwKHNlbGYucHJvcHMub3B0aW9uc01hcHBlcilcclxuICAgICAgLnNvcnQodXRpbC5hc2MpXHJcbiAgICAgIC5tYXAoZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbltzZWxmLnByb3BzLnZhbHVlRmllbGRdfSB2YWx1ZT17b3B0aW9uW3NlbGYucHJvcHMudmFsdWVGaWVsZF19PlxyXG4gICAgICAgICAge29wdGlvbltzZWxmLnByb3BzLmxhYmVsRmllbGRdfVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWxlY3QgaWQ9e3RoaXMucHJvcHMuaWR9IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIFxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9IFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5waWNrIG9uZTwvb3B0aW9uPlxyXG4gICAgICAgIHtvcHRpb25zfVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIClcclxuICB9LFxyXG5cclxuICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247Il19