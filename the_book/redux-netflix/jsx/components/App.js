const React = require('react');
const { connect } = require('react-redux');
//const styles = require('./App.css');

class App extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <div className="app">
        {children}
      </div>
    )
  }
};

//module.exports = App;
module.exports = connect(/* state => state */)(App);