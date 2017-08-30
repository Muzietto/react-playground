// completely stateless
'use strict';

import React from 'lib/react';
import KvPair from 'kvPair.es6';
import util from 'util.es6';

const KvPairsList = React.createClass({
    // TODO - insert here propTypes
    render: function () {
        var self = this;
        var callbacks = {
            add: () => (alert('adding')),
            save: () => (alert('saving')),
        };
        var kvPairs = this.props.kvPairs
            .sort(util.asc)
            .map(function (kvPairObj) {
                return <KvPair
                    key={kvPairObj.id}
                    data={kvPairObj} // kvPairObj = {id, key, value}
                    callbacks={callbacks}/>;
            });

        return (
            <div className="kvpairs">
                {kvPairs}
                <div className="kvpairs__buttons">
                    <button
                        onClick={this.props.callbacks.add}
                        className="button kvpairs__button kvpairs__button--add">ADD
                    </button>
                    <button
                        onClick={this.props.callbacks.save}
                        className="button kvpairs__button kvpairs__button--save">SAVE
                    </button>
                </div>
            </div>
        );
    },
});

export default KvPairsList;