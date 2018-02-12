(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.rollupping = global.rollupping || {})));
}(this, (function (exports) { 'use strict';

var slots = {
    slot_1: document.getElementById('slot1'),
    slot_2: document.getElementById('slot2')
};

var view = {
    fill: function fill(slotNumber) {
        slots['slot_' + slotNumber].innerHTML = 'filled!!';
    }
};

function crosspromo(aView) {

    return {
        crosspromos: function crosspromos(slot) {
            _crosspromos(slot);
        }
    };

    function _crosspromos(slotNumber) {
        aView.fill(slotNumber);
    }
}

var crosspromo$1 = crosspromo(view);

exports.crosspromo = crosspromo$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
