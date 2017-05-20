class User extends React.Component {
  render() {
    return <div id="userDiv{this.props.data.id}">
      <span className="separated-span">{this.props.data.id}</span>
      <span className="separated-span">{this.props.data.name}</span>
      <a onClick={this.props.callbacks.delete}>REMOVE</a>
    </div>
  }
}