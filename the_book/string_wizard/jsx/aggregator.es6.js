'use strict';

function aggregator() {

    var _compose = (baseUrl, kvList) => kvList
        .map(kv => [kv[0], encodeURIComponent(kv[1])])
        .reduce((acc, kvPair) => acc + kvPair
            .join('=') + '&', baseUrl + '?')
        .slice(0, -1); // remove last &

    var _decompose = url => url
        .split('?')[1]
        .split('&')
        .map(str => str.split('='))
        .map(kv => [kv[0], decodeURIComponent(kv[1])]);

    return {
        compose: _compose,
        decompose: _decompose,
    };
}

export default aggregator();