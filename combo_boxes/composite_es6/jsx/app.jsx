'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Shell from 'shell';

var state = {
  users: [
    {name: 'Armando', id: 1},
    {name: 'Bruno', id: 2},
    {name: 'Carlo', id: 3},
    {name: 'Daniele', id: 4},
  ],
  groups: [
    {name: 'Music', id: 1},
    {name: 'Dance', id: 2},
    {name: 'Jogging', id: 3},
    {name: 'Cycling', id: 4},
  ],
  user_group: {
    1: [1,2],
    2: [],
    3: [3],
    4: [1,4]
  },
};

var mappers = {}

ReactDOM.render(
  <Composite
    id='1'
    options1={this.state.groups}
    options2={this.state.groups}
    labelField1='name'
    valueField1='id'
    labelField2='name'
    valueField2='id'
    />,
    document.getElementById('container')
);