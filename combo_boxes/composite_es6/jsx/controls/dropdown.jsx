// cfr. http://jsfiddle.net/davidwaterston/7a3xxLtw/
'use strict';

import React from 'react';
import util from '../misc/util';

const Dropdown = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.oneOfType(
      [
        React.PropTypes.number,
        React.PropTypes.string
      ]
    ),
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    onChange: React.PropTypes.func,
    optionsMapper: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      value: null,
      valueField: 'value',
      labelField: 'label',
      onChange: null,
      optionsMapper: x => x,
    };
  },

  getInitialState: function() {
    var selected = this.getSelectedFromProps(this.props);
    return { selected: selected }; // this is the state
  },
  
  componentWillReceiveProps: function(nextProps) {
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

  run(value) { // do nothing;
  },

  render: function() {
    var self = this;
    var options = self.props.options
      .map(self.props.optionsMapper)
      .sort(util.asc)
      .map(function(option) {
      return (
        <option key={option[self.props.valueField]} value={option[self.props.valueField]}>
          {option[self.props.labelField]}
        </option>
      )
    });
    return (
      <select id={this.props.id} 
          className='form-control' 
          value={this.state.selected} 
          onChange={this.handleChange}>
        <option value="0">pick one</option>
        {options}
      </select>
    )
  },

  handleChange: function(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({selected: event.target.value});
  }
});

export default Dropdown;