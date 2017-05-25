'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import EntityCrud from 'controls/entitycrud';
import EntityAdder from 'controls/entityadder';
import { ActionCreators } from 'actions/actions';

const state = store.getState();

class Groups extends React.Component {
  constructor() {
    this.state = state;
  }
  render() {
    return (
    <div>
      <EntityCrud id="1"
        entityType="group" 
        collection={this.state.groups}
        onAddEntityClick={entityAdder}
        onDeleteEntityClick={entityDeleter} />
    </div>
    );
  }
}

function entityAdder(type, id, name) {
  return function() {
    store.dispatch(ActionCreators[type + 'IsCreated'](id, name));
  }
}

function entityDeleter(type, id) {
  return function() {
    store.dispatch(ActionCreators[type + 'IsDeleted'](id));
  }
}

export { Groups };