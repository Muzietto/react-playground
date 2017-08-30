'use strict';

import React from 'lib/react';
import KvPairsList from 'kvPairsList.es6';

class ModalPopup extends React.Component {
    render() {
        var divStyle = {
            display: 'block',
        };

        return <div id="id01" className="modal" style={divStyle}>
            <div className="modal__content">
                <KvPairsList
                    {...this.props}
                />,
            </div>
        </div>;
    }
}

export default ModalPopup;