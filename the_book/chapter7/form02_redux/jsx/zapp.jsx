
var store = Redux.createStore(statefulReducer);

ReactDOM.render(
  <Form03/>,
  document.getElementById('content')
);

function statefulReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
    case ActionTypes.DECREASE_COUNTER:
      return action.newValue;
    default:
      return state;
  }
}