'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import DoubleSelectList from 'controls/doubleselectList';
import { ActionCreators } from 'actions/actions';
import User from 'components/user';
import DeletableComponent from 'high-order/deletableComponent';
import util from 'misc/util';

const DeletableUser = DeletableComponent(User);

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <DoubleSelectList
      id='1'
      selectOptions1={state.groups}
      selectLabelField1='name'
      selectValueField1='id'

      selectOptions2={state.group_no_user}
      selectLabelField2='name'
      selectValueField2='id'
      optionsMapper2={state.mappers.userFromId}
      onSelectChange2={idGroup => idUser => store.dispatch(ActionCreators.userEntersGroup(idUser, idGroup))}
      
      listItems={state.group_user}
      itemsMapper={state.mappers.userFromId}
      listItemsDisplayMapper={listItemsDisplayMapper}
      />,
      document.getElementById('container')
  );
}

render();
store.subscribe(render);

function listItemsDisplayMapper(item) {
  return <DeletableUser
    id={item.id}
    callbacks={{delete: () => store.dispatch(ActionCreators.userLeavesGroup(item.id))}}/>
}