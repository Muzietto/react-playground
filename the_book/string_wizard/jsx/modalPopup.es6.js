// completely stateless
'use strict';

import React from 'lib/react';
import KvPairsList from 'kvPairsList.es6';

class ModalPopup extends React.Component {
    render() {
        var {show, popupTop, popupLeft, ...childProps} = this.props;

        if (!show) {
            return null;
        }

        var divStyle = {
            display: 'block',
        };

        var popupStyle = {
            top: popupTop,
            left: popupLeft
        };

        return <div
            className="swiz_modal"
            style={divStyle}>
            <div className="swiz_modal__content" style={popupStyle}>
                <KvPairsList
                    {...childProps}
                />
            </div>
        </div>;
    }
}

export default ModalPopup;