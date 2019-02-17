import React from 'react';
import MediaQueryContext from './MediaQueryContext';

const DeviceAware = Component => props =>
  <MediaQueryContext.Consumer>
    {value => <Component {...props} device={value} />}
  </MediaQueryContext.Consumer>;

export default DeviceAware;
