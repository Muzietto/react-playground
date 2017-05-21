'use strict';

import React from 'react';
import Dropdown from 'controls/dropdown';
import ItemsList from 'collections/itemsList';
import User from 'user';
import DeletableComponent from 'high-order/deletableComponent';
import util from 'misc/util';
import { ActionCreators } from 'actions/actions';
import { store } from 'initStore';

const DeletableUser = DeletableComponent(User);

class Composite extends React.Component {
  constructor(params) {
    super(params);
    this.firstSelection = null;
  }
  dropDown1OnChange(event) {
    this.firstSelection = event.target.value;
  }
  dropDown2OnChange(event) {
    var selectedValue = event.target.value;
    store.dispatch(ActionCreators.userEntersGroup(this.firstSelection, selectedValue));
  }
  listItemToOptions(item) {
    store.dispatch(ActionCreators.userLeavesGroup(this.firstSelection, item.id));
  }
  deletableUserMapperFactory() {
    var self = this;
    return item => <DeletableUser data={item} callbacks={{delete: () => self.listItemToOptions(item)}}/>
  }
  render() {
    return <div id={'compositeDiv' + this.props.id} className="composite-div">
      <Dropdown id={'compositeDiv' + this.props.id + 'dropdown1'}
        options={this.props.options1}
        labelField={this.props.labelField1}
        valueField={this.props.valueField1}
        value="0"
        onChange={this.dropDown1OnChange.bind(this)}/>
      <Dropdown id={'compositeDiv' + this.props.id + 'dropdown2'}
        options={this.props.options2}
        labelField={this.props.labelField2}
        valueField={this.props.valueField2}
        value="0"
        onChange={this.dropDown2OnChange.bind(this)}/>
        optionsMapper={this.props.optionsMapper2}/>
      <ItemsList id={'compositeDiv' + this.props.id + 'itemsList'}
        items={this.props.listItems}
        itemsMapper={state.mappers.testMapper}
        displayMapper={this.deletableUserMapperFactory()}
        />
    </div>
  }
};

export default Composite;