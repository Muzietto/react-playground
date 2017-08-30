import React, { Component } from 'lib/react';
import Modal from 'modal.es6';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  // instance member - requires Babel plugin "transform-class-properties"
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // static member - requires same Babel plugin as above
  static membroStatico = () => (console.log('static member talking'))

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default App;