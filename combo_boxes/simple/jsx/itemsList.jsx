//import React from 'react'
//import PropTypes from 'prop-types'

//var TodoList = ({ todos, onTodoClick }) => (
var ItemsList = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onItemClick: React.PropTypes.func.isRequired
  },
  render: function() {
    var self = this;
    var items = this.props.items.map(function(item) {
      return <li>{item.id},{item.name}</li>
    });
    
    return (
      <ul>
        {items}
      </ul>
    );
  },
});
//export default ItemsList