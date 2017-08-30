// NB - this one is STATEFUL!
import React from 'lib/react';
import ModalPopup from 'modalPopup.es6';

class App extends React.Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            isOpen: props.popupVisible,
            kvPairs: props.targetApi.read(),
        };
    }

    // instance members - require Babel plugin "transform-class-properties"
    targetApi = this.props.targetApi;

    saveToTarget = () => {
        this.targetApi.write(this.state.kvPairs);
        // close popup
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    kvListHandlers = {
        add: () => {
            var newId = this.state.kvPairs.length; // 0-based
            this.setState({
                kvPairs: [{id: newId, key: 'asd', value: '123'}, ...this.state.kvPairs]
            });
        },
        save: this.saveToTarget
    };

    kvPairDeleteCallback = id => () => (alert('deleting ' + id));

    render() {
        var theProps = Object.assign({}, this.props);
        theProps.deleteCallback = this.kvPairDeleteCallback;
        theProps.handlers = this.kvListHandlers;
        theProps.kvPairs = this.state.kvPairs;

        return <ModalPopup
            show={this.state.isOpen}
            {...theProps}/>;
    }
}

export default App;