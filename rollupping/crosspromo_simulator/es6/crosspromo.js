import view from './view';

function crosspromo(aView) {

    return {
        crosspromos: slot => { crosspromos(slot); }
    };

    function crosspromos(slotNumber) {
        aView.fill(slotNumber);
    }
}

export default crosspromo(view);