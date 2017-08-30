// completely stateless
'use strict';

import React from 'lib/react';

class KvPair extends React.Component {

    render() {
        return <div className="kvpair">
            <input
                id={'kvpair_' + this.props.data.id + '_key'}
                className="kvpair__input kvpair__input--key"
                value={this.props.data.key}
                onChange={this.props.onKeyChange}
            />
            <label className="label kvpair__label--separator">:</label>
            <input
                id={'kvpair_' + this.props.data.id + '_value'}
                className="kvpair__input kvpair__input--value"
                value={this.props.data.value}
                onChange={this.props.onValueChange}
            />
            <button
                onClick={this.props.deleteCallback}
                className="button kvpair__button">DEL
            </button>
        </div>;
    }
}

export default KvPair;