const slots = {
    slot_1: document.getElementById('slot1'),
    slot_2: document.getElementById('slot2'),
};

const view = {
    fill: slotNumber => {
        slots['slot_' + slotNumber].innerHTML = 'filled!!';
    }
};

export default view;