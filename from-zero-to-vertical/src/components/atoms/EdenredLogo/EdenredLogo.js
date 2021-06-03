import React from 'react';
import PropTypes from 'prop-types';
import myEdenredLogo from './myEdenred.png';

const EdenredLogo = ({ height = 47, width = 108 }) => (
  <img
    src={myEdenredLogo}
    style={{ marginTop: '10px', marginLeft: '25px' }}
    alt='Edenred'
    width={width}
    height={height} />
);

EdenredLogo.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default EdenredLogo;
