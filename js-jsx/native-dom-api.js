'use strict';

const ce = document.createElement;
const eid = document.getElementById;

function procedural(struct, parent) {
  const {
    type,
    id,
    style,
    innerText,
    children,
  } = struct;

  const newElement = document.createElement(type);

  newElement.id = id;

  if (innerText) newElement.innerText = innerText;

  if (style) {
    Object.keys(style)
      .forEach(attribute => {
        newElement.style[attribute] = style[attribute];
      });
  }

  if (children) {
    children.forEach(child => {
      procedural(child, newElement);
    });
  }

  parent.appendChild(newElement);
}


// var paragrafo = document.createElement('p');
// paragrafo.style.textDecoration = 'underline';
// paragrafo.style.color = 'blue';
// paragrafo.style.marginLeft = '30px';
// paragrafo.innerText = 'il mattino ha l\'oro in bocca';
// var palla = document.getElementById('palla');
// palla.appendChild(paragrafo);
