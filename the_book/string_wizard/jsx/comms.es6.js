'use strict';
//TODO - make all this promise-based

function comms(wrapper) {
    return {
        read: () => wrapper.read(),
        write: (txt) => {
            wrapper.write(txt);
        }
    };
}

export default comms;