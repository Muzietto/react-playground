'use strict';

import React from 'react';

const Foo = ({myVar, onButtonClick}) => {
    return (
        <div className="foo">foo {myVar}
            <button onClick={onButtonClick}>CLICCO</button>
        </div>
    );
};

export default Foo;
