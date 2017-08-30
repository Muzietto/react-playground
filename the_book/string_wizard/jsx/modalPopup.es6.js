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

        return <div
            className="modal"
            style={divStyle}
            onClick={(ev) => {
                ev.target.innerHTML = '';
                ev.target.style.display = '';
            }}
        >
            <div className="modal__content" style={popupStyle}>
                <KvPairsList
                    {...childProps}
                />,
            </div>
        </div>;
    }
}

export default ModalPopup;