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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9jb250cm9scy9kcm9wZG93bi5qc3giXSwibmFtZXMiOlsiRHJvcGRvd24iLCJjcmVhdGVDbGFzcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9wdGlvbnMiLCJhcnJheSIsInZhbHVlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwidmFsdWVGaWVsZCIsImxhYmVsRmllbGQiLCJvbkNoYW5nZSIsImZ1bmMiLCJvcHRpb25zTWFwcGVyIiwiZ2V0RGVmYXVsdFByb3BzIiwieCIsImdldEluaXRpYWxTdGF0ZSIsInNlbGVjdGVkIiwiZ2V0U2VsZWN0ZWRGcm9tUHJvcHMiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImxlbmd0aCIsInJ1biIsInJlbmRlciIsInNlbGYiLCJtYXAiLCJzb3J0IiwiYXNjIiwib3B0aW9uIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxRQUFNQSxXQUFXLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2pDQyxlQUFXO0FBQ1RDLFVBQUksZ0JBQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURsQjtBQUVUQyxlQUFTLGdCQUFNSCxTQUFOLENBQWdCSSxLQUFoQixDQUFzQkYsVUFGdEI7QUFHVEcsYUFBTyxnQkFBTUwsU0FBTixDQUFnQk0sU0FBaEIsQ0FDTCxDQUNFLGdCQUFNTixTQUFOLENBQWdCTyxNQURsQixFQUVFLGdCQUFNUCxTQUFOLENBQWdCQyxNQUZsQixDQURLLENBSEU7QUFTVE8sa0JBQVksZ0JBQU1SLFNBQU4sQ0FBZ0JDLE1BVG5CO0FBVVRRLGtCQUFZLGdCQUFNVCxTQUFOLENBQWdCQyxNQVZuQjtBQVdUUyxnQkFBVSxnQkFBTVYsU0FBTixDQUFnQlcsSUFYakI7QUFZVEMscUJBQWUsZ0JBQU1aLFNBQU4sQ0FBZ0JXO0FBWnRCLEtBRHNCOztBQWdCakNFLHFCQUFpQixZQUFXO0FBQzFCLGFBQU87QUFDTFIsZUFBTyxJQURGO0FBRUxHLG9CQUFZLE9BRlA7QUFHTEMsb0JBQVksT0FIUDtBQUlMQyxrQkFBVSxJQUpMO0FBS0xFLHVCQUFlRSxLQUFLQTtBQUxmLE9BQVA7QUFPRCxLQXhCZ0M7O0FBMEJqQ0MscUJBQWlCLFlBQVc7QUFDMUIsVUFBSUMsV0FBVyxLQUFLQyxvQkFBTCxDQUEwQixLQUFLQyxLQUEvQixDQUFmO0FBQ0EsYUFBTyxFQUFFRixVQUFVQSxRQUFaLEVBQVAsQ0FGMEIsQ0FFSztBQUNoQyxLQTdCZ0M7O0FBK0JqQ0csK0JBQTJCLFVBQVNDLFNBQVQsRUFBb0I7QUFDN0MsVUFBSUosV0FBVyxLQUFLQyxvQkFBTCxDQUEwQkcsU0FBMUIsQ0FBZjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFFTCxVQUFVQSxRQUFaLEVBQWQ7QUFDRCxLQWxDZ0M7O0FBb0NqQ0MseUJBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixVQUFJRixRQUFKO0FBQ0EsVUFBSUUsTUFBTWIsS0FBTixLQUFnQixJQUFoQixJQUF3QmEsTUFBTWYsT0FBTixDQUFjbUIsTUFBZCxLQUF5QixDQUFyRCxFQUF3RDtBQUN0RE4sbUJBQVdFLE1BQU1mLE9BQU4sQ0FBYyxDQUFkLEVBQWlCZSxNQUFNVixVQUF2QixDQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0xRLG1CQUFXRSxNQUFNYixLQUFqQjtBQUNEO0FBQ0gsYUFBT1csUUFBUDtBQUNDLEtBNUNnQzs7QUE4Q2pDTyxRQUFJbEIsS0FBSixFQUFXLENBQUU7QUFDWixLQS9DZ0M7O0FBaURqQ21CLFlBQVEsWUFBVztBQUNqQixVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJdEIsVUFBVXNCLEtBQUtQLEtBQUwsQ0FBV2YsT0FBWCxDQUNYdUIsR0FEVyxDQUNQRCxLQUFLUCxLQUFMLENBQVdOLGFBREosRUFFWGUsSUFGVyxDQUVOLGVBQUtDLEdBRkMsRUFHWEYsR0FIVyxDQUdQLFVBQVNHLE1BQVQsRUFBaUI7QUFDdEIsZUFDRTtBQUFBO0FBQUEsWUFBUSxLQUFLQSxPQUFPSixLQUFLUCxLQUFMLENBQVdWLFVBQWxCLENBQWIsRUFBNEMsT0FBT3FCLE9BQU9KLEtBQUtQLEtBQUwsQ0FBV1YsVUFBbEIsQ0FBbkQ7QUFDR3FCLGlCQUFPSixLQUFLUCxLQUFMLENBQVdULFVBQWxCO0FBREgsU0FERjtBQUtELE9BVGEsQ0FBZDtBQVVBLGFBQ0U7QUFBQTtBQUFBLFVBQVEsSUFBSSxLQUFLUyxLQUFMLENBQVduQixFQUF2QjtBQUNJLHFCQUFVLGNBRGQ7QUFFSSxpQkFBTyxLQUFLK0IsS0FBTCxDQUFXZCxRQUZ0QjtBQUdJLG9CQUFVLEtBQUtlLFlBSG5CO0FBSUU7QUFBQTtBQUFBLFlBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxTQUpGO0FBS0c1QjtBQUxILE9BREY7QUFTRCxLQXRFZ0M7O0FBd0VqQzRCLGtCQUFjLFVBQVNDLEtBQVQsRUFBZ0I7QUFDNUIsVUFBSSxLQUFLZCxLQUFMLENBQVdSLFFBQWYsRUFBeUI7QUFDdkIsYUFBS1EsS0FBTCxDQUFXUixRQUFYLENBQW9Cc0IsS0FBcEI7QUFDRDtBQUNELFdBQUtYLFFBQUwsQ0FBYyxFQUFDTCxVQUFVZ0IsTUFBTUMsTUFBTixDQUFhNUIsS0FBeEIsRUFBZDtBQUNEO0FBN0VnQyxHQUFsQixDQUFqQjs7b0JBZ0ZlVCxRIiwiZmlsZSI6ImRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2ZyLiBodHRwOi8vanNmaWRkbGUubmV0L2Rhdmlkd2F0ZXJzdG9uLzdhM3h4THR3L1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi9taXNjL3V0aWwnO1xyXG5cclxuY29uc3QgRHJvcGRvd24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcHJvcFR5cGVzOiB7XHJcbiAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShcclxuICAgICAgW1xyXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgICBdXHJcbiAgICApLFxyXG4gICAgdmFsdWVGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvcHRpb25zTWFwcGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICB9LFxyXG5cclxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlRmllbGQ6ICd2YWx1ZScsXHJcbiAgICAgIGxhYmVsRmllbGQ6ICdsYWJlbCcsXHJcbiAgICAgIG9uQ2hhbmdlOiBudWxsLFxyXG4gICAgICBvcHRpb25zTWFwcGVyOiB4ID0+IHgsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmdldFNlbGVjdGVkRnJvbVByb3BzKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIHsgc2VsZWN0ZWQ6IHNlbGVjdGVkIH07IC8vIHRoaXMgaXMgdGhlIHN0YXRlXHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmdldFNlbGVjdGVkRnJvbVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldFNlbGVjdGVkRnJvbVByb3BzKHByb3BzKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWQ7XHJcbiAgICBpZiAocHJvcHMudmFsdWUgPT09IG51bGwgJiYgcHJvcHMub3B0aW9ucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5vcHRpb25zWzBdW3Byb3BzLnZhbHVlRmllbGRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy52YWx1ZTtcclxuICAgIH1cclxuICByZXR1cm4gc2VsZWN0ZWQ7XHJcbiAgfSxcclxuXHJcbiAgcnVuKHZhbHVlKSB7IC8vIGRvIG5vdGhpbmc7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBvcHRpb25zID0gc2VsZi5wcm9wcy5vcHRpb25zXHJcbiAgICAgIC5tYXAoc2VsZi5wcm9wcy5vcHRpb25zTWFwcGVyKVxyXG4gICAgICAuc29ydCh1dGlsLmFzYylcclxuICAgICAgLm1hcChmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uW3NlbGYucHJvcHMudmFsdWVGaWVsZF19IHZhbHVlPXtvcHRpb25bc2VsZi5wcm9wcy52YWx1ZUZpZWxkXX0+XHJcbiAgICAgICAgICB7b3B0aW9uW3NlbGYucHJvcHMubGFiZWxGaWVsZF19XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgIClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlbGVjdCBpZD17dGhpcy5wcm9wcy5pZH0gXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+cGljayBvbmU8L29wdGlvbj5cclxuICAgICAgICB7b3B0aW9uc31cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICApXHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duOyJdfQ==