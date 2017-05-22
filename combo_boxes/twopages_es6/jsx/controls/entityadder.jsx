'use strict';

import React from 'react';

class EntityAdder extends React.Component {
  render() {
    return <div className="entity-adder-div" id={'selectlistDiv' + this.props.id}>
      <form onSubmit={() => false}>
        <div>
        <label>ID</label><br/>
        <input type="text" id="input_id"></input>
        </div>
        <div>
        <label>NAME</label><br/>
        <input type="text" id="input_name"></input>
        </div>
        <input type="button" 
          id="input_button" 
          onClick={this.props.onAddEntityClick(this.props.type)}
          value="ADD"></input>
      </form>
    </div>
  }
}

export default EntityAdder;