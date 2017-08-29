'use strict';

function inputWrapper(elem) {
    return {
        read: () => elem.value,
        write: (txt) => {
            elem.value = txt;
        }
    };
}

export default inputWrapper;