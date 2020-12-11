'use strict';

const ce = document.createElement; // (type)
const eid = document.getElementById; // (id)
const ac = document.appendChild; // childNode;
const qs = document.querySelector; // (cssSelector)


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
