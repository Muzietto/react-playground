// completely stateless
'use strict';

import React from 'lib/react';
import KvPair from 'kvPair.es6';
import util from 'util.es6';

class KvPairsList extends React.Component {
    render() {
        var self = this;
        var kvPairDeleteCallback = this.props.deleteCallback;
        var kvPairs = this.props.kvPairs
            .sort(util.asc)
            .map(kvPairObj => (<KvPair
                key={kvPairObj.id}
                data={kvPairObj} // kvPairObj = {id, key, value}
                onKeyChange={this.props.handlers.handleKeyChange(kvPairObj.id)}
                onValueChange={this.props.handlers.handleValueChange(kvPairObj.id)}
                onKvPairDeletion={this.props.handlers.handleKvPairDeletion(kvPairObj.id)}
            />));

        return (
            <div className="swiz_kvpairs">
                <div className="swiz_kvpairs__url">
                    <input
                        id="kvpairs_url"
                        type="text"
                        value={this.props.baseUrl}
                        className="swiz_kvpairs__url__input"
                        onChange={this.props.handlers.handleBaseUrlChange}
                    />
                </div>
                {kvPairs}
                <div className="swiz_kvpairs__buttons">
                    <button
                        onClick={this.props.handlers.add}
                        className="swiz_button swiz_kvpairs__button swiz_kvpairs__button--add">ADD
                    </button>
                    <button
                        onClick={this.props.handlers.save}
                        className="swiz_button swiz_kvpairs__button swiz_kvpairs__button--save">SAVE
                    </button>
                </div>
            </div>
        );
    }
}
;

export default KvPairsList;