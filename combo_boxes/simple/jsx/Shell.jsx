var Shell = React.createClass({
  propTypes: {},
  getInitialState: function() {
    return {};
  },
  parentElement: function() {
    return this;
  },
  broadcast: function(value) {
    this.props.children.forEach(child => child.run(value));
  },
  render: function() {
    this.props.children.forEach(child => {
      if (!child.props.parentElement) {
        child.props.parentElement = this.parentElement;
        var dummy = 'dummy';
      }
    });
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  },
});