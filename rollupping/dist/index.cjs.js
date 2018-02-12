'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slots = {
    slot_1: document.getElementById('slot_1'),
    slot_2: document.getElementById('slot_2')
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
//# sourceMappingURL=index.cjs.js.map
