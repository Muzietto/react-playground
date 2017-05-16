let Volume = class Volume extends React.Component {
  constructor(params) {
    super(params);
    this.state = { volume: 0 };
  }
  render() {
    return React.createElement(
      "button",
      { onClick: (event => {
          this.setState({ volume: ++this.state.volume });
        }).bind(this) },
      "Increase Da Volume (currently ",
      this.state.volume,
      ")"
    );
  }
};
ReactDOM.render(React.createElement(Volume, null), document.getElementById('content'));
