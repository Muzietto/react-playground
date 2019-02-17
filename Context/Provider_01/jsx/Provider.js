import React from 'react';
import MediaQueryContext from './MediaQueryContext';
import Granpa from './Granpa';

class Provider extends React.Component {
  render() {
    return (
      <MediaQueryContext.Provider value={'tablet'}>
        {this.props.children}
      </MediaQueryContext.Provider>
    );
  }
}

export default Provider;
