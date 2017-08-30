'use strict';

function displacedItem(from, to, item) {
  return {
    augmented: addedItemToSet(to, item),
    filtered: removedItemFromSet(from, item),
  };
}

function addedItemToSet(set, item) {
  return [...set, item];
}

function removedItemFromSet(set, item) {
  return set.filter(it => (it.id != item.id));
}

function asc(a, b) {
  return a.id - b.id;
}

function desc(a, b) {
  return b.id - a.id;
}

export default {
  displacedItem,
  addedItemToSet,
  removedItemFromSet,
  asc,
  desc,
};