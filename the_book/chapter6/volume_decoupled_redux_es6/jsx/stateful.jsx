'use strict';
import React from 'react';
import StatelessButton from './stateless';
import { ActionCreators } from './actions';
import { store } from './initStore';

class StatefulParent extends React.Component {
// redux takes care of state
//  constructor(params) {
//    super(params);
//    this.state = {volume:0};
//  }
  render() {
    var currentCounter = store.getState();
    return <div className="stateful">
        <StatelessButton
          className="stateless stateless--increase-volume"
          clicker={dispatcher(ActionCreators.increasedCounter)}
          labella={'Increase Volume'}
        />
        <label className="label">{'(currently ' + currentCounter + ')'}</label>
        <StatelessButton
          className="stateless stateless--decrease-volume"
          clicker={dispatcher(ActionCreators.decreasedCounter)}
          labella={'Decrease Volume'}
        />
      </div>
  }
}

function dispatcher(creator) {
  return () => store.dispatch(creator(store.getState()))
}

export default StatefulParent;
