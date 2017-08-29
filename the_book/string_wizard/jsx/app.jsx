'use strict';
import wrapper from 'input_wrapper.es6';

function wrappingHandler(ev) {
    var wrapped = wrapper(ev.target);
    wrapped.write('changed_text');
}

document
    .getElementById('test_input')
    .addEventListener('click', wrappingHandler);

