'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Shell from 'shell';
import { store } from 'initStore';
import { ActionCreators } from 'actions/actions';
import User from 'user';
import SelectList from 'controls/selectlist';
import DeletableComponent from 'high-order/deletableComponent';
import util from 'misc/util';

const DeletableUser = DeletableComponent(User);

const render = () => {
  var state = store.getState();
  ReactDOM.render(
    <SelectList
      id="1"
      options={state.users}
      labelField='name'
      valueField='id'
      optionsMapper={state.mappers.testMapper}
      onSelectChange={id => store.dispatch(ActionCreators.userEntersGroup(id))}

      listItems={state.selecteds}
      itemsMapper={state.mappers.testMapper}
      listItemsDisplayMapper={listItemsDisplayMapper}
    />,
    document.getElementById('container')
  );
}

render();
store.subscribe(render);

function listItemsDisplayMapper(item) {
  return <DeletableUser
    data={item}
    callbacks={{delete: () => store.dispatch(ActionCreators.userLeavesGroup(item.id))}}/>
}