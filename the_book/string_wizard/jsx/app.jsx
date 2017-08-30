'use strict';
import comms from 'comms.es6';
import wrapper from 'input_wrapper.es6';
import aggregator from 'aggregator.es6';

function blob(ev) {
    var communicating = comms(wrapper(ev.target));

    return {
        read: () => aggregator.decompose(communicating.read()),
        write: (baseUrl, kvList) => communicating
            .write(aggregator.compose(baseUrl, kvList)),
    }
}

function kvListHandler(ev) {
    var kvList = blob(ev);
    console.log(kvList.read());
    kvList.write('http://new.com/wizard', [['c',321],['d',432],['e',543]]);
    console.log(kvList.read());
}

document
    .getElementById('test_input')
    .addEventListener('click', kvListHandler);

