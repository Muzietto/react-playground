import React, {Component} from 'lib/react';
import ModalPopup from 'modalPopup.es6';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isOpen: props.popupVisible};
    }

    // instance member - requires Babel plugin "transform-class-properties"
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    kvListHandlers = {
        add: () => (alert('adding!')),
        save: this.toggleModal
    };

    kvPairDeleteCallback = id => () => (alert('deleting ' + id));

    render() {
        var theProps = Object.assign({}, this.props);
        theProps.deleteCallback = this.kvPairDeleteCallback;
        theProps.handlers = this.kvListHandlers;

        return <ModalPopup
            show={this.state.isOpen}
            {...theProps}/>;
    }
}

export default App;