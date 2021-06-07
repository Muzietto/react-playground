import React from 'react';
import PropTypes from 'prop-types';

const svg = ({
  height = 14,
  width = 14,
  color = '#FFFFFF',
  marginTop = 10,
  marginBottom = 2,
}) =>
  <svg width={`${width}px`} height={`${height}px`} viewBox='0 0 14 14' version='1.1' style={{ marginTop, marginBottom }}>
    <g id='Revisione-header' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='square'>
      <g id='Analytics-Tool_01' transform='translate(-864.000000, -76.000000)' stroke={color}>
        <g id='Group' transform='translate(863.000000, 75.000000)'>
          <rect id='Rectangle' x='2' y='8' width='2' height='6'></rect>
          <rect id='Rectangle-Copy' x='7' y='5' width='2' height='9'></rect>
          <rect id='Rectangle-Copy-2' x='12' y='2' width='2' height='12'></rect>
        </g>
      </g>
    </g>
  </svg>;

svg.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};

export default svg;
