import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line
function AppbarIntegration({ classes, width }) {
  const [ value, setValue ] = useState(0);

  return <div className={classes.root}>
    <AppBar position='static'>
      <Tabs
        value={value}
        centered={true}
        variant={['xs', 'sm'].includes(width) ? null : 'fullWidth'}
        onChange={onChange}>
        <Tab label='Item One' />
        <Tab label='Item Two' />
        <Tab label='Item Three' />
      </Tabs>
    </AppBar>
    {value === 0 && <Typography component='div' className={classes.tabContent}>Item One</Typography>}
    {value === 1 && <Typography component='div' className={classes.tabContent}>Item Two</Typography>}
    {value === 2 && <Typography component='div' className={classes.tabContent}>Item Three</Typography>}
  </div>;

  function onChange(e, value) {
    setValue(value);
  }
}

export default compose(withWidth(), withStyles(styles))(AppbarIntegration);

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
