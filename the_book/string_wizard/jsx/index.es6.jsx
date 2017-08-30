'use strict';
import wrapper from 'input_wrapper.es6';
import aggregator from 'aggregator.es6';
import App from 'app.es6';
import React from 'lib/react';
import ReactDOM from 'lib/react-dom';

function api(elem) {
    var elemWrapper = wrapper(elem);

    return {
        baseUrl: () => elemWrapper.read().split('?')[0],
        read: () => aggregator.decompose(elemWrapper.read()),
        write: (baseUrl, kvList) => elemWrapper
            .write(aggregator.compose(baseUrl, kvList)),
    };
}

function modalPopupHandler(ev) {
    var target = ev.target;
    var targetLeft = target.offsetLeft + 30;
    var targetTop = target.offsetTop - 70;

    var POPUP_ANCHOR = document.getElementById('horizon');
    POPUP_ANCHOR.innerHTML = ''; // wipe out any previous KvPairsList

    var targetApi = api(target);

    ReactDOM.render(
        <App
            popupLeft={targetLeft}
            popupTop={targetTop}
            popupVisible={true}
            targetApi={targetApi}
        />,
        POPUP_ANCHOR
    );
}

// Vladimir wanted to see the spread operator at work :-)
[...document.querySelectorAll('.url_input')]
    .forEach(elem => elem.addEventListener('click', modalPopupHandler));
