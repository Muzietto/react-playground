'use strict';

import React from 'react';
import Dropdown from 'controls/dropdown';
import ItemsList from 'collections/itemsList';
import User from 'user';
import DeletableComponent from 'high-order/deletableComponent';
import util from 'misc/util';

const DeletableUser = DeletableComponent(User);

class Composite extends React.Component {
  dropDown1OnChange(event) { // changes state
  }
  dropDown2OnChange(event) { // changes state
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
    return <div id={'compositeDiv' + this.props.data.id} className="composite-div">
      <Dropdown id={'compositeDiv' + this.props.data.id + 'dropdown1'}
        options={this.props.options1}
        labelField={this.props.labelField1}
        valueField={this.props.valueField1}
        value="0"
        onChange={this.dropDown1OnChange.bind(this)}/>
      <Dropdown id={'compositeDiv' + this.props.data.id + 'dropdown2'}
        options={this.props.options2}
        labelField={this.props.labelField2}
        valueField={this.props.valueField2}
        value="0"
        onChange={this.dropDown2OnChange.bind(this)}/>
      <ItemsList id={'compositeDiv' + this.props.data.id + 'itemsList'}
        items={this.state.selecteds} mapper={this.deletableUserMapperFactory()}/>
    </div>
  }
};

export default Shell;