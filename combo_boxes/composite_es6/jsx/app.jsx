'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import Composite from 'composite';

const state = store.getState();

const render = () => ReactDOM.render(
  <Composite
    id='1'
    options1={state.groups}
    options2={state.group_user}
    labelField1='name'
    valueField1='id'
    labelField2='name'
    valueField2='id'
    optionsMapper2={state.mappers.userInGroup}
    
    listItems={state.group_user}
    itemsMapper={state.mappers.userInGroup}
    />,
    document.getElementById('container')
);

render();
store.subscribe(render);