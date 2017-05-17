
var store = Redux.createStore(statefulReducer);

const render = () => ReactDOM.render(
  <Form03/>,
  document.getElementById('content')
);

render();
store.subscribe(render);

function statefulReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_RADIO:
      state.frameworks = action.newValue.frameworks;
      return state;
    case ActionTypes.CHANGE_CHECKBOX:
      state.foods = Object.assign({}, state.foods, action.newValue.foods);
      return state;
    case ActionTypes.CHANGE_SELECT:
      state.selectedLanguage = action.newValue.selectedLanguage;
      return state;
    default:
      return state;
  }
}