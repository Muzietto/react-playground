'use strict';
import React from 'react';

let Radio02 = (props) => <label>
    <input 
      type="radio" 
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.handler}/>{props.value}</label>

export default Radio02;