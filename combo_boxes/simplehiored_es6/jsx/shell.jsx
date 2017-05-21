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

class Shell extends React.Component {
  dropDownOnChange(event) {
    var selectedValue = event.target.value;
    store.dispatch(ActionCreators.userEntersGroup(selectedValue));
  }
  listItemToOptions(item) {
    store.dispatch(ActionCreators.userLeavesGroup(item));
  }
  deletableUserMapperFactory() {
    var self = this;
    return item => <DeletableUser data={item} callbacks={{delete: () => self.listItemToOptions(item)}}/>
  }
  render() {
    var state = store.getState();
    return <div>
      <Dropdown id="dropdown01"
        options={state.users}
        labelField='name'
        valueField='id'
        value="0"
        onChange={this.dropDownOnChange.bind(this)}
        optionsMapper={state.mappers.testMapper}/>
      <ItemsList id="list01"
        items={state.selecteds}
        itemsMapper={state.mappers.testMapper}
        displayMapper={this.deletableUserMapperFactory()}/>
    </div>
  }
};

export default Shell;