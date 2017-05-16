
class Input01 extends React.Component {
  render() {
    return <input 
      type="text" 
      name="input02" 
      value="Mr." />
  }
}

class Input02 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {title: 'Misster'}
  }
  handleChange(event) {
    this.setState({title: event.target.value});
  }
  render() {
    return <input 
      type="text" 
      name="input02" 
      value={this.state.title}
      onChange={this.handleChange.bind(this)}/>
  }
}

ReactDOM.render(
  <div>
    <Input01/>
    <Input02/>
  </div>,
  document.getElementById('content')
);