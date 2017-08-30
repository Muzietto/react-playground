'use strict';
import comms from 'comms.es6';
import wrapper from 'input_wrapper.es6';
import aggregator from 'aggregator.es6';
import ModalPopup from 'modalPopup.es6';
import React from 'lib/react';
import ReactDOM from 'lib/react-dom';

function api(elem) {
    var communicating = comms(wrapper(elem));

    return {
        read: () => aggregator.decompose(communicating.read()),
        write: (baseUrl, kvList) => communicating
            .write(aggregator.compose(baseUrl, kvList)),
    };
}

function modalPopupHandler(ev) {
    var target = ev.target;
    var targetLeft = target.offsetLeft + 30;
    var targetTop = target.offsetTop - 70;

    var THE_ANCHOR = document.getElementById('horizon');

    var kvList = api(target);
    var kvListData = kvList.read();
    var kvListHandlers = {
        add: () => (alert('adding!')),
        save: () => (alert('saving!'))
    };

    var kvPairDeleteCallback = id => () => (alert('deleting ' + id));

    ReactDOM.render(
        <ModalPopup
            popupLeft={targetLeft}
            popupTop={targetTop}
            kvPairs={kvListData}
            deleteCallback={kvPairDeleteCallback}
            handlers={kvListHandlers}
        />,
        THE_ANCHOR
    );
}

// Vladimir wanted to see the spread operator at work :-)
[...document.querySelectorAll('.url_input')]
    .forEach(elem => elem.addEventListener('click', modalPopupHandler));
