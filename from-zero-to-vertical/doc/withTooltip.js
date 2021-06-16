import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const withTooltip = ({
  backgroundColor = 'white',
  color = '#8c8c8c',
  headerText = '',
  placement = 'top',
  arrowColor = 'white',
// eslint-disable-next-line react/display-name
}) => Component => props => {

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor,
      boxShadow: '0 2px 15px 0 rgba(0,0,0,0.1)',
      color,
      maxWidth: 180,
      padding: 15,
      fontSize: theme.typography.pxToRem(12),
    },
    arrow: {
      color: arrowColor,
    },
  }))(Tooltip);

  return <>
    <HtmlTooltip
      title={headerText}
      arrow
      placement={placement}
    ><div>
        <Component {...props} />
      </div>
    </HtmlTooltip>
  </>;
};

export default withTooltip;
