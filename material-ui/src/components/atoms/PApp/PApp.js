import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// cfr. https://codeburst.io/my-journey-to-make-styling-with-material-ui-right-6a44f7c68113

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    border: '1px solid red',
  },
}));

function PApp() {
  const classes = useStyles();
  return (
    <TextField
      id='outlined-name'
      label='Name'
      className={classes.textField}
      margin='normal'
      variant='outlined'
    />
  );
}

export default PApp;
