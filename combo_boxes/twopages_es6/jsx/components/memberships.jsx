'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import DoubleSelectList from 'controls/doubleselectlist';
import { ActionCreators } from 'actions/actions';
import User from 'components/user';
import DeletableComponent from 'high-order/deletableComponent';
import util from 'misc/util';

const DeletableUser = DeletableComponent(User);

class Memberships extends React.Component {
  constructor(params) {
    super(params);
  }
  render() {
    let state = store.getState();
    return (
      <div>
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
          listItemsMapper={state.mappers.userFromId}
          listItemsDisplayMapper={listItemsDisplayMapper}
          />
      </div>
    );
  }
}

function listItemsDisplayMapper(idGroup) {
  return function(item) {
    return <DeletableUser
      id={item.id}
      data={item}
      callbacks={{delete: () => store.dispatch(ActionCreators.userLeavesGroup(item.id, idGroup))}}/>
  }
}

export { Memberships };