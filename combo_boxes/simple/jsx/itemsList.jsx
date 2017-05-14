var ItemsList = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
    }).isRequired).isRequired,
    //onItemClick: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {items: this.props.items};
  },
  run(value) {
    this.setState(this.getState().concat(value));
  },
  render: function() {
    //debugger;
    var items = this.state.items.map(function(item) {
      return <li key={item.id}>
        {item.code},&nbsp;{item.name}
      </li>
    });

    return (
      <ul>
        {items}
      </ul>
    );
  },
});