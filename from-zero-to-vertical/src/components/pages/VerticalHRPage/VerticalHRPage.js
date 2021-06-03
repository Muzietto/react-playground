import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const VerticalHRPage = () => {

  return <Grid container direction='column' justify='center'>
    <Grid item xs={12} style={{ border: '2px solid red' }}>
    TOP NAVIGATION
    </Grid>
    <Grid item xs={12} style={{ border: '2px solid blue' }}>
    HEADER
    </Grid>
    <Grid item xs={12} style={{ border: '2px solid cyan' }}>
    VERTICAL CAROUSEL
    </Grid>
    <Grid item xs={10} style={{ border: '2px solid pink' }}>
    PAGE BODY
    </Grid>
    <Grid item xs={12} style={{ border: '2px solid blue' }}>
    FOOTER
    </Grid>
  </Grid>;
};

export default VerticalHRPage;
