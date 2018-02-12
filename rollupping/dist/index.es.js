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

export { crosspromo$1 as crosspromo };
//# sourceMappingURL=index.es.js.map
