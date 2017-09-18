'use strict';

import React from 'react';
import Foo from './Foo';

class MyComponent extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return (
            <div className="my_component icon-star">
                <Foo myVar="cicciput"/>
                <Foo myVar="cicciputt"/>
                <Foo myVar="cicciputtt"/>
            </div>
        );
    }
}

export default MyComponent;
