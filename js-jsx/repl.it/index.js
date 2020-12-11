// https://repl.it/@MarcoFaustinell/React-without-JSX#src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

const newElement = React.createElement(
  'div',
  {
    id: 'outerDiv3',
    style: {
      margin: 50,
      padding: 20,
      border: '1px solid red',
    },
  },
  React.createElement(
    'p',
    {
      style: {
        fontFamily: 'sans-serif',
      },
    },
    'Paragrafo Esterno3'
  ),
  React.createElement(
    'div',
    {
      id: 'innerDiv2',
      style: {
        width: '50%',
        padding: 5,
        border: '1px dashed blue',
      },
    },
    React.createElement(
      'p',
      {
        style: {
          fontSize: 18,
        },
      },
      'Paragrafo Interno3'
    ),
    React.createElement(
      'label',
      {
        className: 'green',
        style: {
          fontWeight: 'bold',
        },
      },
      'Label Interna3'
    )
  )
);

ReactDOM.render(newElement, document.getElementById('root'));

/*
const secondElement = <div
    id='outerDiv'
    style={{
      margin: 50,
      padding: 20,
      border: '1px solid red',
    }}
  >
    <p style={{
        fontFamily: 'sans-serif',
      }}
    >Paragrafo Esterno</p>
    <div
      id='innerDiv'
      style={{
        width: '50%',
        padding: 5,
        border: '1px dashed blue',
      }}
      >
      <p style={{
          fontSize: 18,
        }}
      >Paragrafo Interno</p>
      <label
        className='green'
        style={{
          fontWeight: 'bold',
        }}
      >Label Interna</label>
    </div>
  </div>;

ReactDOM.render(secondElement, document.getElementById('root2'));
*/
