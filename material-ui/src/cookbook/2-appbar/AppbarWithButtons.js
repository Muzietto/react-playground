import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ScrollableAppbar from '@src/cookbook/2-appbar/ScrollableAppbar';

const AppbarWithButtons = withStyles(styles)(({ classes, title }) => (
  <div className={classes.root}>
    <ScrollableAppbar classes={classes} title={title} />
    <div className={classes.toolbarMargin} />
    <ul>
      {new Array(125).fill(null).map((v, i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
));

export default AppbarWithButtons;

function styles(theme) {
  return {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    toolbarMargin: theme.mixins.toolbar,
  };
}
