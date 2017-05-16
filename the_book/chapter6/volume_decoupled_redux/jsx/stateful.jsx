class StatefulParent extends React.Component {
// redux takes care of state
//  constructor(params) {
//    super(params);
//    this.state = {volume:0};
//  }
  increaseCounter() {
    store.dispatch(ActionCreators.increasedCounter(store.getState()));
  }
  render() {
    var currentCounter = store.getState();
    return <StatelessButton
      clicker={this.increaseCounter.bind(this)}
      labella={'Increase Volume (currently ' + currentCounter + ')'}
      />
  }
}