// completely stateless
var ItemsList = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
    }).isRequired).isRequired,
    mapper: React.PropTypes.func.isRequired
  },
  render: function() {
    var self = this; 
    var items = this.props.items.sort((a,b) => a.id-b.id).map(function(item) {
      return <li key={item.id}>
        {self.props.mapper(item)}
      </li>
    });

    return (
      <ul>
        {items}
      </ul>
    );
  },
});