// completely stateless
var ItemsList = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      //name: React.PropTypes.string.isRequired,
    }).isRequired).isRequired,
    //onItemClick: React.PropTypes.func.isRequired
  },
  render: function() {
    var self = this; 
    var items = this.props.items.sort((a,b) => a.id-b.id).map(function(item) {
      return <li key={item.id}>
        {item.id},&nbsp;{item.name}
      </li>
    });

    return (
      <ul>
        {items}
      </ul>
    );
  },
});