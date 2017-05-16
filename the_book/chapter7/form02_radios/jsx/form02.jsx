
class Form02 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      frameworks: {
        angular: false,
        react: true,
        muziettos: false,
      }
    };
  }
  handleRadio(event) {
    var newStateMember = {};
    newStateMember[event.target.value] = true;
    this.setState({frameworks:newStateMember});
  }
  render() {
  return <form>
    <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="angular" checked={this.state.frameworks.angular}/>
    <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="react" checked={this.state.frameworks.react}/>
    <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="muziettos" checked={this.state.frameworks.muziettos}/>
  </form>
  }
}