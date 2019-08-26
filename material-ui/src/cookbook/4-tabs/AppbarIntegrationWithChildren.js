import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withWidth from '@material-ui/core/withWidth';

// eslint-disable-next-line
function AppbarIntegrationWithChildren({ classes, width, children }) {
  const [ value, setValue ] = useState(0);

  return <div className={classes.root}>
    <AppBar position='static'>
      <Tabs
        value={value}
        centered={true}
        variant={['xs', 'sm'].includes(width) ? null : 'fullWidth'}
        onChange={onChange}>
        {children.map((child, index) => {
          return <Tab key={index} label={child.props && child.props.label} />;
        })}
      </Tabs>
    </AppBar>
    {children[value]}
  </div>;

  function onChange(e, value) {
    setValue(value);
  }
}

export default compose(withWidth(), withStyles(styles))(AppbarIntegrationWithChildren);

function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabContent: {
      padding: theme.spacing.unit * 2,
    },
  };
}
