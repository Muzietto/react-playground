import React from 'react';
import MediaQueryContext from './MediaQueryContext';

class Consumer extends React.Component {
  render() {
    return (
      <MediaQueryContext.Consumer>
        {device =>
          <div>
            Context says: {device}
          </div>
        }
      </MediaQueryContext.Consumer>
    );
  }
}

export default Consumer;
