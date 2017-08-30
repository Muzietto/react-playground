'use strict';
import comms from 'comms.es6';
import wrapper from 'input_wrapper.es6';
import aggregator from 'aggregator.es6';
import KvPairsList from 'kvPairsList.es6';
import React from 'lib/react';
import ReactDOM from 'lib/react-dom';

function blob(ev) {
    var communicating = comms(wrapper(ev.target));

    return {
        read: () => aggregator.decompose(communicating.read()),
        write: (baseUrl, kvList) => communicating
            .write(aggregator.compose(baseUrl, kvList)),
    };
}

function kvListHandler2(ev) {

    var THE_ANCHOR = document.getElementById('anchor_div');

    var kvList = blob(ev);
    var kvListData = kvList.read();
    var kvListCallbacks = {
        add: () => (alert('adding!')),
        save: () => (alert('saving!'))
    };

    ReactDOM.render(
        <KvPairsList
            kvPairs={kvListData}
            callbacks={kvListCallbacks}
        />,
        THE_ANCHOR
    );
}

document
    .getElementById('test_input2')
    .addEventListener('click', kvListHandler2);
