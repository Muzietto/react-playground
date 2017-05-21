// completely stateless
'use strict';

import React from 'react';

// ES6 arrow functions won't transpile correctly. Gotta use a standard function
function DeletableComponent(Component) {
  return class _deletableComponent extends React.Component {
    render() {
      return <div id={'deletableComponentDiv' + this.props.id}>
        <Component {...this.props} />
        <a style={{cursor:"pointer"}}
          onClick={this.props.callbacks.delete}>REMOVE</a>
      </div>
    }
  }
}

export default DeletableComponent;