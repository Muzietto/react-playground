'use strict';

import React from 'react';
import Dropdown from 'controls/dropdown';
import ItemsList from 'collections/itemsList';
import User from 'user';
import DeletableComponent from 'high-order/deletableComponent';
import util from 'misc/util';

const DeletableUser = DeletableComponent(User);

class Shell extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      users: [
        {name: 'Armando', id: 1},
        {name: 'Bruno', id: 2},
        {name: 'Carlo', id: 3},
        {name: 'Daniele', id: 4},
      ],
      selecteds: [],
    }
  }
  dropDownOnChange(event) { // changes state
    var selectedValue = event.target.value;
    // put selected option inside this.state.selecteds
    var selectedItem = this.state.users
      .find(opt => (opt.id == selectedValue));
    this.optionToList(selectedItem);
  }
  optionToList(item) {
    var newSets = util.displacedItem(this.state.users, this.state.selecteds, item);
    this.setState({
      selecteds: newSets.augmented,
      users: newSets.filtered
    });
  }
  listItemToOptions(item) {
    var newSets = util.displacedItem(this.state.selecteds, this.state.users, item);
    this.setState({
      users: newSets.augmented,
      selecteds: newSets.filtered
    });
  }
  deletableUserMapperFactory() {
    var self = this;
    return item => <DeletableUser data={item} callbacks={{delete: () => self.listItemToOptions(item)}}/>
  }
  render() {
    return <div>
      <Dropdown id="dropdown01"
        options={this.state.users}
        labelField='name'
        valueField='id'
        value="0"
        onChange={this.dropDownOnChange.bind(this)}/>
      <ItemsList id="list01" items={this.state.selecteds} mapper={this.deletableUserMapperFactory()}/>
    </div>
  }
};

export default Shell;