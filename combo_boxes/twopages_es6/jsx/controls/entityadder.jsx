'use strict';

import React from 'react';

class EntityAdder extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      id: '123',
      name: 'asdasdasd',
    }
  }
  onStateChange(type) {
    return event => {
      var newVal = event.target.value;
      var newState = Object.assign({}, this.state);
      newState[type] = newVal;
      this.setState(newState);
    }
  }
  render() {
    return <div className="entity-adder-div" id={'selectlistDiv' + this.props.id}>
      <form onSubmit={() => false}>
        <div>
        <label>ID</label><br/>
        <input value={this.state.id}
          type="text" 
          id="input_id"
          onChange={this.onStateChange('id')}></input>
        </div>
        <div>
        <label>NAME</label><br/>
        <input value={this.state.name}
          type="text"
          id="input_name"
          onChange={this.onStateChange('name')}></input>
        </div>
        <input type="button" 
          id="input_button"
          onClick={this.props.onAddEntityClick(this.props.type, this.state.id, this.state.name)}
          value="ADD"></input>
      </form>
    </div>
  }
}

export default EntityAdder;