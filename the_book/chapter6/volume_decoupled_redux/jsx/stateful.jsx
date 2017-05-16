class StatefulParent extends React.Component {
// redux takes care of state
//  constructor(params) {
//    super(params);
//    this.state = {volume:0};
//  }
  render() {
    var currentCounter = store.getState();
    return <div>
        <StatelessButton
          clicker={dispatcher(ActionCreators.increasedCounter).bind(this)}
          labella={'Increase Volume'}
        />
        <label>{'(currently ' + currentCounter + ')'}</label>
        <StatelessButton
          clicker={dispatcher(ActionCreators.decreasedCounter).bind(this)}
          labella={'Decrease Volume'}
        />
      </div>
  }
}

function dispatcher(creator) {
  return () => store.dispatch(creator(store.getState()))
}