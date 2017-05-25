'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import EntityCrud from 'controls/entitycrud';
import EntityAdder from 'controls/entityadder';
import { ActionCreators } from 'actions/actions';

class Groups extends React.Component {
  render() {
    let state = store.getState();
    return (
    <div>
      <EntityCrud id="1"
        entityType="group" 
        collection={state.groups}
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