'use strict';

import React from 'react';
import Dropdown from 'controls/dropdown';
import ItemsList from 'collections/itemsList';
import User from 'user';
import util from 'misc/util';

class Shell extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      options: [
        {name: 'option A', id: 1},
        {name: 'option B', id: 2},
        {name: 'option C', id: 3},
        {name: 'option D', id: 4},
      ],
      selecteds: [],
    }
  }
  dropDownOnChange(event) { // changes state
    var selectedValue = event.target.value;
    // put selected option inside this.state.selecteds
    var selectedItem = this.state.options
      .find(opt => (opt.id == selectedValue));
    this.optionToList(selectedItem);
  }
  optionToList(item) {
    var newSets = util.displacedItem(this.state.options, this.state.selecteds, item);
    this.setState({
      selecteds: newSets.augmented,
      options: newSets.filtered
    });
  }
  listItemToOptions(item) {
    var newSets = util.displacedItem(this.state.selecteds, this.state.options, item);
    this.setState({
      options: newSets.augmented,
      selecteds: newSets.filtered
    });
  }
  userMapperFactory() {
    var self = this;
    return item => <User data={item} callbacks={{delete: () => self.listItemToOptions(item)}}/>
  }
  render() {
    return <div>
      <Dropdown id="dropdown01"
        options={this.state.options}
        labelField='name'
        valueField='id'
        value="0"
        onChange={this.dropDownOnChange.bind(this)}/>
      <ItemsList id="list01" items={this.state.selecteds} mapper={this.userMapperFactory()}/>
    </div>
  }
};

export default Shell;