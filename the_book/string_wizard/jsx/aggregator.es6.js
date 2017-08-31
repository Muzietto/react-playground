'use strict';

function aggregator() {

    var _validate = kvObj => (
        kvObj.key !== ''
        && kvObj.value !== ''
    );

    var _compose = (baseUrl, kvList) => kvList
        .filter(_validate)
        .map(kvObj => [
            encodeURIComponent(kvObj.key),
            encodeURIComponent(kvObj.value),
        ])
        .reduce((acc, kvPair) => acc + kvPair
            .join('=') + '&', baseUrl + '?')
        .slice(0, -1); // remove last &

    var _decompose = url => {
        if (url.indexOf('?') === -1) {
            return [];
        }
        return url
            .split('?')[1]
            .split('&')
            .map(str => str.split('='))
            .map((kvString, index) => ({
                id: index,
                key: decodeURIComponent(kvString[0]),
                value: decodeURIComponent(kvString[1]),
            }));
    };

    return {
        compose: _compose,
        decompose: _decompose,
    };
}

export default aggregator();