import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// cfr. https://codeburst.io/my-journey-to-make-styling-with-material-ui-right-6a44f7c68113

const useStyles = makeStyles(() => ({
  outlinedRoot: { // if the style the root, the fieldset inside will mess up things
    '&:hover': {
      border: '1px solid red',
    },
  },
}));

function PApp2() {
  const classes = useStyles();

  const InputProps = {
    classes: {
      root: classes.outlinedRoot,
    },
  };

  return (
    <TextField
      id='outlined-name'
      label='Name'
      className={classes.textField}
      margin='normal'
      variant='outlined'
      InputProps={InputProps}
    />
  );
}

export default PApp2;
