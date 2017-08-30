// completely stateless
'use strict';

import React from 'lib/react';
import KvPair from 'kvPair.es6';
import util from 'util.es6';

class KvPairsList extends React.Component{
    render () {
        var self = this;
        var kvPairDeleteCallback = this.props.deleteCallback;
        var kvPairs = this.props.kvPairs
            .sort(util.asc)
            .map(kvPairObj => (<KvPair
                key={kvPairObj.id}
                data={kvPairObj} // kvPairObj = {id, key, value}
                deleteCallback={kvPairDeleteCallback(kvPairObj.id)}/>));

        return (
            <div className="kvpairs">
                {kvPairs}
                <div className="kvpairs__buttons">
                    <button
                        onClick={this.props.handlers.add}
                        className="button kvpairs__button kvpairs__button--add">ADD
                    </button>
                    <button
                        onClick={this.props.handlers.save}
                        className="button kvpairs__button kvpairs__button--save">SAVE
                    </button>
                </div>
            </div>
        );
    }
};

export default KvPairsList;