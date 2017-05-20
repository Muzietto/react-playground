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
    return a.id - b.id;
  }

  function desc(a, b) {
    return b.id - a.id;
  }

  exports.default = {
    displacedItem,
    addedItemToSet,
    removedItemFromSet,
    asc,
    desc
  };
});