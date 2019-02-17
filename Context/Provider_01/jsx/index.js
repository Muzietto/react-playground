'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './Provider';
import Granpa from './Granpa';

ReactDOM.render(
    <div className="large_container">
        <div className="container">
            <Provider>
              <Granpa />
            </Provider>
        </div>
    </div>, document.getElementById('root')
);
