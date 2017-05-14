//import React from 'react'
//import PropTypes from 'prop-types'

//var TodoList = ({ todos, onTodoClick }) => (
var Shell = React.createClass({
  propTypes: {
    //items: React.PropTypes.arrayOf(React.PropTypes.shape({
    //  id: React.PropTypes.number.isRequired,
    //  name: React.PropTypes.string.isRequired,
    //}).isRequired).isRequired,
    //onItemClick: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  },
});
//export default Shell