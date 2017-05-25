define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function displacedItem(from, to, item) {
    return {
      augmented: addedItemToSet(to, item),
      filtered: removedItemFromSet(from, item)
    };
  }

  function addedItemToSet(set, item) {
    return [...set, item];
  }

  function removedItemFromSet(set, item) {
    return set.filter(it => it.id != item.id);
  }

  function asc(a, b) {
    if (a.id) return a.id - b.id;
    return a - b;
  }

  function desc(a, b) {
    if (a.id) return b.id - a.id;
    return b - a;
  }

  exports.default = {
    displacedItem,
    addedItemToSet,
    removedItemFromSet,
    asc,
    desc
  };
});