
class Form01 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      input01: {value: 'i1'},
      input02: {value: 'i2'},
    }
  }
  handleChange(event) {
    var newState = JSON.parse(JSON.stringify(this.state));
    newState[event.target.name].value = event.target.value;
    this.setState(newState);
  }
  render() {
    return <form>
        <StatelessInput 
          type="text" 
          name="input01" 
          value={this.state.input01.value}
          onChange={this.handleChange.bind(this)}/>
        <StatelessInput 
          type="text" 
          name="input02" 
          value={this.state.input02.value}
          onChange={this.handleChange.bind(this)}/>
      </form>
  }
}