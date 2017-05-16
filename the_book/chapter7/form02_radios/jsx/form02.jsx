
class Form02 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      frameworks: {
        angular: false,
        react: true,
        muziettos: false,
      },
      foods: {
        pizza: false,
        spaghetti: true,
        steak: false,
        cauliflower: false,
      }
    };
  }
  handleRadio(event) {
    var newStateMember = {};
    newStateMember[event.target.value] = true;
    this.setState({frameworks:newStateMember});
  }
  handleCheckbox(event) {
    var newStateMember = Object.assign({}, this.state.foods);
    newStateMember[event.target.value] = event.target.checked;
    this.setState({foods:newStateMember});
  }
  render() {
  return <form>
    <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="angular" checked={this.state.frameworks.angular}/>
    <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="react" checked={this.state.frameworks.react}/>
    <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="muziettos" checked={this.state.frameworks.muziettos}/>
    <br/>
    <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="pizza" checked={this.state.foods['pizza']}/>
    <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="spaghetti" checked={this.state.foods['spaghetti']}/>
    <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="steak" checked={this.state.foods['steak']}/>
    <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="cauliflower" checked={this.state.foods['cauliflower']}/>
  </form>
  }
}