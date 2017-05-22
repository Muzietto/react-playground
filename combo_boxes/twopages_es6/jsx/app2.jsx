'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import EntityAdder from 'controls/entityadder';
import { ActionCreators } from 'actions/actions';

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <EntityAdder type="user" collection={state.users} id="1" onAddEntityClick={entityAdder} />,
    document.getElementById('container')
  );
}

render();
store.subscribe(render);

function entityAdder(type, id, name) {
  return function() {
    store.dispatch(ActionCreators[type + 'IsCreated'](id, name));
  }
}