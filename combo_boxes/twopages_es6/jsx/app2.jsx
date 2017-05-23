'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import EntityCrud from 'controls/entitycrud';
import EntityAdder from 'controls/entityadder';
import { ActionCreators } from 'actions/actions';

const render1 = () => {
  const state = store.getState();
  ReactDOM.render(
    <EntityAdder type="user" collection={state.users} id="1" onAddEntityClick={entityAdder} />,
    document.getElementById('container')
  );
}

const render2 = () => {
  const state = store.getState();
  ReactDOM.render(
    <div>
      <EntityCrud id="1"
        entityType="user" 
        collection={state.users}
        onAddEntityClick={entityAdder}
        onDeleteEntityClick={entityDeleter} />
      <EntityCrud id="2"
        entityType="group" 
        collection={state.groups}
        onAddEntityClick={entityAdder}
        onDeleteEntityClick={entityDeleter} />
    </div>,
    document.getElementById('container')
  );
}

render2();
store.subscribe(render2);
window.store = store;

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