import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const FixedColumnLayout = withStyles(styles)(({ classes, width, singleHeader }) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={singleHeader ? 12 : width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      {!singleHeader && <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>}
    </Grid>
    <hr />
  </div>
));

export default FixedColumnLayout;

function styles(theme) {
  return {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  };
}
