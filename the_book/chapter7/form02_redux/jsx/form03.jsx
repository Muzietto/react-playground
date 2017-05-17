class Form03 extends React.Component {
  handleRadio(event) {
    store.dispatch(ActionCreators.changedRadio(event));
  }
  handleCheckbox(event) {
    store.dispatch(ActionCreators.changedCheckbox(event));
  }
  handleSelect(event) {
    store.dispatch(ActionCreators.changedSelect(event));
  }
  render() {
    var state = store.getState();
    return <form>
      <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="angular" checked={state.frameworks.angular}/>
      <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="react" checked={state.frameworks.react}/>
      <Radio02 handler={this.handleRadio.bind(this)} name="frameworks" value="muziettos" checked={state.frameworks.muziettos}/>
      <br/>
      <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="pizza" checked={state.foods['pizza']}/>
      <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="spaghetti" checked={state.foods['spaghetti']}/>
      <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="steak" checked={state.foods['steak']}/>
      <Checkbox02 handler={this.handleCheckbox.bind(this)} name="foods" value="cauliflower" checked={state.foods['cauliflower']}/>
      <br/>
      <select name="language" value={state.selectedValue}
        onChange={this.handleSelect.bind(this)}>
        <option value="ruby">Ruby</option>
        <option value="node">Node.js</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
      </select>
      <br/>
      <textarea name="de_staat" 
        readOnly="true"
        style={{width:'400px',height:'220px'}} 
        value={JSON.stringify(state, null, 2)}/>
    </form>
  }
}