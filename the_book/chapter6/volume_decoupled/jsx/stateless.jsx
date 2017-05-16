class StatelessButton extends React.Component {
  render() {
    return <button onClick={this.props.clicker}>
        {this.props.labella}
      </button>
  }
}