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

    // instance member - requires Babel plugin "transform-class-properties"
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    targetApi = this.props.targetApi;

    kvListHandlers = {
        add: () => {
            var newId = this.state.kvPairs.length; // 0-based
            this.setState({
                kvPairs: [{id: newId, key: '', value: ''}, ...this.state.kvPairs]
            });
        },
        save: this.toggleModal
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