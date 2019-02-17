import React from 'react';
import DeviceAware from './DeviceAware';

const Child = ({ device }) => <React.Fragment>
  <div>{`Provider says: ${device}`}</div>
  <div>{'Resize the window to see the other values'}</div>
</React.Fragment>;

export default DeviceAware(Child);
