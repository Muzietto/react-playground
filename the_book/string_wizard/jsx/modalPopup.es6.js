'use strict';

import React from 'lib/react';
import KvPairsList from 'kvPairsList.es6';

class ModalPopup extends React.Component {
    render() {
        var {popupTop, popupLeft, ...childProps} = this.props;

        var divStyle = {
            display: 'block',
        };

        var popupStyle = {
            top: popupTop,
            left: popupLeft
        };

        return <div id="id01" className="modal" style={divStyle}>
            <div className="modal__content" style={popupStyle}>
                <KvPairsList
                    {...childProps}
                />,
            </div>
        </div>;
    }
}

export default ModalPopup;