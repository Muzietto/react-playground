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

    saveToTargetAndClosePopup = () => {
        this.targetApi.write(this.state.kvPairs);
        // close popup
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleKeyChange = id => ev => {
        var newKey = ev.target.value;
        var currentValue = this.state.kvPairs
            .find(kvp => (kvp.id === id)).value;
        this.setState({
            kvPairs: [
                {id: id, key: newKey, value: currentValue},
                ...this.state.kvPairs.filter(kvp => (kvp.id !== id)),
            ]
        });
    };

    handleValueChange = id => ev => {
        var newValue = ev.target.value;
        var currentKey = this.state.kvPairs
            .find(kvp => (kvp.id === id)).key;
        this.setState({
            kvPairs: [
                {id: id, key: currentKey, value: newValue},
                ...this.state.kvPairs.filter(kvp => (kvp.id !== id)),
            ]
        });
    };

    handleKvPairDeletion = id => () => {
        this.setState({
            kvPairs: this.state.kvPairs
                .filter(kvp => (kvp.id !== id))
                .map((kvp, index) => ({
                    id: index,
                    key: kvp.key,
                    value: kvp.value,
                })),
        });
    };

    kvListHandlers = {
        add: () => {
            var newId = this.state.kvPairs.length; // 0-based
            this.setState({
                kvPairs: [{id: newId, key: '', value: ''}, ...this.state.kvPairs]
            });
        },
        save: this.saveToTargetAndClosePopup,
        handleKeyChange: this.handleKeyChange.bind(this),
        handleValueChange: this.handleValueChange.bind(this),
        handleKvPairDeletion: this.handleKvPairDeletion.bind(this),
    };

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