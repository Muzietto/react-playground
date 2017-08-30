'use strict';
import comms from 'comms.es6';
import wrapper from 'input_wrapper.es6';

function communicatingHandler(ev) {
    var communicating = comms(wrapper(ev.target));
    console.log(communicating.read());
    communicating.write('changed_text');
    console.log(communicating.read());
}

document
    .getElementById('test_input')
    .addEventListener('click', communicatingHandler);

