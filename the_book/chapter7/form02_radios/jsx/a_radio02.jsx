
class Radio02 extends React.Component {
  constructor(params) {
    super(params);
    this.state = {title: 'Misster'}
  }
  handleChange(event) {
    this.setState({title: event.target.value});
  }
  render() {
    return <label><input 
      type="radio" 
      name={this.props.name}
      value={this.props.value}
      checked={this.props.checked}
      onChange={this.props.handler}/>{this.props.value}</label>
  }
}