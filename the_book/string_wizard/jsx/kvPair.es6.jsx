// completely stateless
'use strict';

import React from 'lib/react';

class KvPair extends React.Component {

    render() {
        return <div className="swiz_kvpair">
            <input
                id={'kvpair_' + this.props.data.id + '_key'}
                type="text"
                className="swiz_kvpair__input swiz_kvpair__input--key"
                value={this.props.data.key}
                onChange={this.props.onKeyChange}
            />
            <label className="swiz_label swiz_kvpair__label--separator">:</label>
            <input
                id={'kvpair_' + this.props.data.id + '_value'}
                type="text"
                className="swiz_kvpair__input swiz_kvpair__input--value"
                value={this.props.data.value}
                onChange={this.props.onValueChange}
            />
            <button
                onClick={this.props.onKvPairDeletion}
                className="swiz_button swiz_kvpair__button">DEL
            </button>
        </div>;
    }
}

export default KvPair;