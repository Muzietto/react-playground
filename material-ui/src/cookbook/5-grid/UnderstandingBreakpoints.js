import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const UnderstandingBreakpoints = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>xs=12 sm=6 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>xs=12 sm=6 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>xs=12 sm=6 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>xs=12 sm=6 md=4</Paper>
      </Grid>
    </Grid>
    <hr />
    <Grid container spacing={4}>
      <Grid item xs={12} sm={9} md={4}>
        <Paper className={classes.paper}>xs=12 sm=9 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={9} md={4}>
        <Paper className={classes.paper}>xs=12 sm=9 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={9} md={4}>
        <Paper className={classes.paper}>xs=12 sm=9 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={9} md={4}>
        <Paper className={classes.paper}>xs=12 sm=9 md=4</Paper>
      </Grid>
    </Grid>
    <hr />
    <Grid container spacing={4}>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
    </Grid>
  </div>
));

export default UnderstandingBreakpoints;
