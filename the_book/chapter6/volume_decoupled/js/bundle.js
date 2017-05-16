let StatefulParent = class StatefulParent extends React.Component {
  constructor(params) {
    super(params);
    this.state = { volume: 0 };
  }
  render() {
    return React.createElement(StatelessButton, {
      clicker: (event => {
        this.setState({ volume: ++this.state.volume });
      }).bind(this),
      labella: 'Increase Volume (currently ' + this.state.volume + ')'
    });
  }
};
let StatelessButton = class StatelessButton extends React.Component {
  render() {
    return React.createElement(
      "button",
      { onClick: this.props.clicker },
      this.props.labella
    );
  }
};
ReactDOM.render(React.createElement(StatefulParent, null), document.getElementById('content'));
