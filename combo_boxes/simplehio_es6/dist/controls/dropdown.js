define(['exports', 'react', '../misc/util'], function (exports, _react, _util) {
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
      onChange: _react2.default.PropTypes.func
    },

    getDefaultProps: function () {
      return {
        value: null,
        valueField: 'value',
        labelField: 'label',
        onChange: null
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
      var options = self.props.options.sort(_util2.default.asc).map(function (option) {
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
          onChange: this.handleChange },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb250cm9scy9kcm9wZG93bi5qc3giXSwibmFtZXMiOlsiRHJvcGRvd24iLCJjcmVhdGVDbGFzcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9wdGlvbnMiLCJhcnJheSIsInZhbHVlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwidmFsdWVGaWVsZCIsImxhYmVsRmllbGQiLCJvbkNoYW5nZSIsImZ1bmMiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJzZWxlY3RlZCIsImdldFNlbGVjdGVkRnJvbVByb3BzIiwicHJvcHMiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJydW4iLCJyZW5kZXIiLCJzZWxmIiwic29ydCIsImFzYyIsIm1hcCIsIm9wdGlvbiIsInN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsUUFBTUEsV0FBVyxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUNqQ0MsZUFBVztBQUNUQyxVQUFJLGdCQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEbEI7QUFFVEMsZUFBUyxnQkFBTUgsU0FBTixDQUFnQkksS0FBaEIsQ0FBc0JGLFVBRnRCO0FBR1RHLGFBQU8sZ0JBQU1MLFNBQU4sQ0FBZ0JNLFNBQWhCLENBQ0wsQ0FDRSxnQkFBTU4sU0FBTixDQUFnQk8sTUFEbEIsRUFFRSxnQkFBTVAsU0FBTixDQUFnQkMsTUFGbEIsQ0FESyxDQUhFO0FBU1RPLGtCQUFZLGdCQUFNUixTQUFOLENBQWdCQyxNQVRuQjtBQVVUUSxrQkFBWSxnQkFBTVQsU0FBTixDQUFnQkMsTUFWbkI7QUFXVFMsZ0JBQVUsZ0JBQU1WLFNBQU4sQ0FBZ0JXO0FBWGpCLEtBRHNCOztBQWVqQ0MscUJBQWlCLFlBQVc7QUFDMUIsYUFBTztBQUNMUCxlQUFPLElBREY7QUFFTEcsb0JBQVksT0FGUDtBQUdMQyxvQkFBWSxPQUhQO0FBSUxDLGtCQUFVO0FBSkwsT0FBUDtBQU1ELEtBdEJnQzs7QUF3QmpDRyxxQkFBaUIsWUFBVztBQUMxQixVQUFJQyxXQUFXLEtBQUtDLG9CQUFMLENBQTBCLEtBQUtDLEtBQS9CLENBQWY7QUFDQSxhQUFPLEVBQUVGLFVBQVVBLFFBQVosRUFBUCxDQUYwQixDQUVLO0FBQ2hDLEtBM0JnQzs7QUE2QmpDRywrQkFBMkIsVUFBU0MsU0FBVCxFQUFvQjtBQUM3QyxVQUFJSixXQUFXLEtBQUtDLG9CQUFMLENBQTBCRyxTQUExQixDQUFmO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVMLFVBQVVBLFFBQVosRUFBZDtBQUNELEtBaENnQzs7QUFrQ2pDQyx5QkFBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFVBQUlGLFFBQUo7QUFDQSxVQUFJRSxNQUFNWCxLQUFOLEtBQWdCLElBQWhCLElBQXdCVyxNQUFNYixPQUFOLENBQWNpQixNQUFkLEtBQXlCLENBQXJELEVBQXdEO0FBQ3RETixtQkFBV0UsTUFBTWIsT0FBTixDQUFjLENBQWQsRUFBaUJhLE1BQU1SLFVBQXZCLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTE0sbUJBQVdFLE1BQU1YLEtBQWpCO0FBQ0Q7QUFDSCxhQUFPUyxRQUFQO0FBQ0MsS0ExQ2dDOztBQTRDakNPLFFBQUloQixLQUFKLEVBQVcsQ0FBRTtBQUNaLEtBN0NnQzs7QUErQ2pDaUIsWUFBUSxZQUFXO0FBQ2pCLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlwQixVQUFVb0IsS0FBS1AsS0FBTCxDQUFXYixPQUFYLENBQW1CcUIsSUFBbkIsQ0FBd0IsZUFBS0MsR0FBN0IsRUFBa0NDLEdBQWxDLENBQXNDLFVBQVNDLE1BQVQsRUFBaUI7QUFDbkUsZUFDRTtBQUFBO0FBQUEsWUFBUSxLQUFLQSxPQUFPSixLQUFLUCxLQUFMLENBQVdSLFVBQWxCLENBQWIsRUFBNEMsT0FBT21CLE9BQU9KLEtBQUtQLEtBQUwsQ0FBV1IsVUFBbEIsQ0FBbkQ7QUFDR21CLGlCQUFPSixLQUFLUCxLQUFMLENBQVdQLFVBQWxCO0FBREgsU0FERjtBQUtELE9BTmEsQ0FBZDtBQU9BLGFBQ0U7QUFBQTtBQUFBLFVBQVEsSUFBSSxLQUFLTyxLQUFMLENBQVdqQixFQUF2QjtBQUNJLHFCQUFVLGNBRGQ7QUFFSSxpQkFBTyxLQUFLNkIsS0FBTCxDQUFXZCxRQUZ0QjtBQUdJLG9CQUFVLEtBQUtlLFlBSG5CO0FBSUU7QUFBQTtBQUFBLFlBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxTQUpGO0FBS0cxQjtBQUxILE9BREY7QUFTRCxLQWpFZ0M7O0FBbUVqQzBCLGtCQUFjLFVBQVNDLEtBQVQsRUFBZ0I7QUFDNUIsVUFBSSxLQUFLZCxLQUFMLENBQVdOLFFBQWYsRUFBeUI7QUFDdkIsYUFBS00sS0FBTCxDQUFXTixRQUFYLENBQW9Cb0IsS0FBcEI7QUFDRDtBQUNELFdBQUtYLFFBQUwsQ0FBYyxFQUFDTCxVQUFVZ0IsTUFBTUMsTUFBTixDQUFhMUIsS0FBeEIsRUFBZDtBQUNEO0FBeEVnQyxHQUFsQixDQUFqQjs7b0JBMkVlVCxRIiwiZmlsZSI6ImRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2ZyLiBodHRwOi8vanNmaWRkbGUubmV0L2Rhdmlkd2F0ZXJzdG9uLzdhM3h4THR3L1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi9taXNjL3V0aWwnO1xyXG5cclxuY29uc3QgRHJvcGRvd24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcHJvcFR5cGVzOiB7XHJcbiAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShcclxuICAgICAgW1xyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgICBdXHJcbiAgICApLFxyXG4gICAgdmFsdWVGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuICB9LFxyXG5cclxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlRmllbGQ6ICd2YWx1ZScsXHJcbiAgICAgIGxhYmVsRmllbGQ6ICdsYWJlbCcsXHJcbiAgICAgIG9uQ2hhbmdlOiBudWxsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmdldFNlbGVjdGVkRnJvbVByb3BzKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIHsgc2VsZWN0ZWQ6IHNlbGVjdGVkIH07IC8vIHRoaXMgaXMgdGhlIHN0YXRlXHJcbiAgfSxcclxuICBcclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMpIHtcclxuICAgIHZhciBzZWxlY3RlZCA9IHRoaXMuZ2V0U2VsZWN0ZWRGcm9tUHJvcHMobmV4dFByb3BzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogc2VsZWN0ZWQgfSk7XHJcbiAgfSxcclxuICBcclxuICBnZXRTZWxlY3RlZEZyb21Qcm9wcyhwcm9wcykge1xyXG4gICAgdmFyIHNlbGVjdGVkO1xyXG4gICAgaWYgKHByb3BzLnZhbHVlID09PSBudWxsICYmIHByb3BzLm9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMub3B0aW9uc1swXVtwcm9wcy52YWx1ZUZpZWxkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMudmFsdWU7XHJcbiAgICB9XHJcbiAgcmV0dXJuIHNlbGVjdGVkO1xyXG4gIH0sXHJcblxyXG4gIHJ1bih2YWx1ZSkgeyAvLyBkbyBub3RoaW5nO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHNlbGYucHJvcHMub3B0aW9ucy5zb3J0KHV0aWwuYXNjKS5tYXAoZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbltzZWxmLnByb3BzLnZhbHVlRmllbGRdfSB2YWx1ZT17b3B0aW9uW3NlbGYucHJvcHMudmFsdWVGaWVsZF19PlxyXG4gICAgICAgICAge29wdGlvbltzZWxmLnByb3BzLmxhYmVsRmllbGRdfVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWxlY3QgaWQ9e3RoaXMucHJvcHMuaWR9IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIFxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9IFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPnBpY2sgb25lPC9vcHRpb24+XHJcbiAgICAgICAge29wdGlvbnN9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgKVxyXG4gIH0sXHJcblxyXG4gIGhhbmRsZUNoYW5nZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjsiXX0=