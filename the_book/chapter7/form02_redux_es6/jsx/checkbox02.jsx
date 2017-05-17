'use strict';
import React from 'react';

let Checkbox02 = (props) => <label>
    <input 
      type="checkbox" 
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.handler}/>{props.value}</label>

export default Checkbox02;