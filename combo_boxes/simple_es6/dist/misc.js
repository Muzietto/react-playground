define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function displacedItem(from, to, item) {
    return {
      augmented: this.addedItemToSet(to, item),
      filtered: this.removedItemFromSet(from, item)
    };
  }

  function addedItemToSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.concat([item]);
  }

  function removedItemFromSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.filter(it => it.id != item.id);
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