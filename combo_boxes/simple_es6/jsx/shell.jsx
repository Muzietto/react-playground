'use strict';

import React from 'react';
import Dropdown from 'dropdown';
import ItemsList from 'itemsList';
import User from 'user';

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
    var newSets = this.displacedItem(this.state.options, this.state.selecteds, item);
    this.setState({
      selecteds: newSets.augmented,
      options: newSets.filtered
    });
  }
  listItemToOptions(item) {
    var newSets = this.displacedItem(this.state.selecteds, this.state.options, item);
    this.setState({
      options: newSets.augmented,
      selecteds: newSets.filtered
    });
  }
  displacedItem(from, to, item) {
    return {
      augmented: this.addedItemToSet(to, item),
      filtered: this.removedItemFromSet(from, item),
    };
  }
  addedItemToSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.concat([item]);
  }
  removedItemFromSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.filter(it => (it.id != item.id));
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