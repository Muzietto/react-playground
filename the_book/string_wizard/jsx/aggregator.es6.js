'use strict';

function aggregator() {
    var _compose = (baseUrl, kvList) => kvList
        .reduce((acc, kvPair) => acc + kvPair
            .join('=') + '&', baseUrl + '?')
        .slice(0, -1); // remove last &
    var _decompose = url => url
        .split('?')[1]
        .split('&')
        .map(str => str.split('='));
    return {
        compose: _compose,
        decompose: _decompose,
    }
}

export default aggregator();