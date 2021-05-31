import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// cfr. https://codeburst.io/my-journey-to-make-styling-with-material-ui-right-6a44f7c68113

// We want to obtain this CSS:
// .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
//    border-color: rgba(0, 0, 0, 0.87);
// }

const useStyles = makeStyles(() => ({
  outlinedRoot: {
    // '&:hover': { // we don't touch the root, we act on the inner textfield
    //   border: '1px solid red',
    // },

    // in next line "notchedOutline" is a rule name
    '&:hover $notchedOutlinettt': { // we override the fieldset
      borderColor: 'red',
    },
  },
  notchedOutlinettt: {},

  // HOW TO OBTAIN SAME EFFECT USING MuiOutlinedInput-root ?
}));

function PApp3() {
  const classes = useStyles();

  const InputProps = {
    classes: {
      root: classes.outlinedRoot,
      notchedOutline: classes.notchedOutlinettt,
    },
  };

  return <Grid container direction='row'>
    <Grid item>
      <Typography>PApp3: red border on hover</Typography>
    </Grid>
    <Grid item>
      <TextField
        id='outlined-name'
        label='Name'
        className={classes.textField}
        margin='normal'
        variant='outlined'
        InputProps={InputProps}
      />
      <Typography>it is working</Typography>
    </Grid>
    <Grid item>
      <TextField
        id='outlined-name'
        label='Name'
        className={classes.textField}
        margin='normal'
        variant='outlined'
        classes={{
          root: classes.outlinedRoot,
          notchedOutline: classes.notchedOutline,
        }}
      />
      <Typography>it is NOT working</Typography>
    </Grid>
  </Grid>;
}

export default PApp3;

// const useStyles = makeStyles(theme => ({
//   outlinedRoot: {
//     '&:hover $notchedOutline': {
//       borderColor: 'red',
//     },
//   },
//   notchedOutline: {
//   }
// }));
// ...
// const InputProps = {
//     classes: {
//       root: classes.outlinedRoot,
//       notchedOutline: classes.notchedOutline
//     },
//   };
