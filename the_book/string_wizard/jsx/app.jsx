'use strict';

var handler = sampleHandler;

function sampleHandler(ev) {
    console.log('whatever');
    alert(ev.target.id);
}

document
    .getElementById('test_input')
    .addEventListener('click', handler);
