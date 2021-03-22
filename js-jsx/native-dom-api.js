'use strict';

const ce = document.createElement; // (type)
const eid = document.getElementById; // (id)
const ac = myDiv.appendChild; // childNode;
const qs = document.querySelector; // (cssSelector)

// not a pure function
function procedural(struct, parent) {

  const {
    type,
    id,
    className,
    style,
    innerText,
    children,
  } = struct;

  if (!type) throw 'Must always provide a type';

  const newElement = document.createElement(type);

  if (id) newElement.id = id;

  if (innerText) newElement.innerText = innerText;

  if (className) newElement.className = className;

  if (style) newElement.style = style;

  if (children) {
    children.forEach(child => {

      procedural(child, newElement);

    });
  }

  parent.appendChild(newElement); // side effect;
}

// pure function
function functional(type, attributes, ...children) {

  if (!type) throw 'Must always provide a type';

  const newElement = document.createElement(type);


  ['id', 'className', 'style'].forEach(attribute => {
    if (attributes[attribute]) newElement[attribute] = attributes[attribute];
  });

  children.forEach(child => {

    if (typeof child === 'string') newElement.innerText = child;

    else newElement.appendChild(child);

  });

  return newElement;
}
