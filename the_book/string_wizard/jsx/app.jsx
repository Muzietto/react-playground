'use strict';
import wrapper from 'input_wrapper.es6';

function wrappingHandler(ev) {
    var wrapped = wrapper(ev.target);
    console.log(wrapped.read());
    wrapped.write('changed_text');
    console.log(wrapped.read());
}

document
    .getElementById('test_input')
    .addEventListener('click', wrappingHandler);

