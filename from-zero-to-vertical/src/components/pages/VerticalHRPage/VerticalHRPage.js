import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TopNavigation from '@src/components/molecules/TopNavigation/TopNavigation';
// import Header from '@src/components/molecules/Header/Header';

const VerticalHRPage = () => {

  // eslint-disable-next-line no-unused-vars
  const verticalHrPageBody = <Typography variant='h1'>
    Vertical HR Page
  </Typography>;

  // https://stackoverflow.com/questions/67833598/material-ui-4-11-4-grid-items-in-column-require-container-direction-row-to
  return <Grid container direction='row' justify='center' alignItems='stretch'>
    <Grid item xs={12} style={{ border: '2px solid red' }}>
     <TopNavigation />
    </Grid>
    <Grid item xs={12} style={{ border: '2px solid blue' }}>
      HEADER
    </Grid>
    <Grid item xs={12} style={{ border: '2px solid cyan' }}>
      VERTICAL CAROUSEL
    </Grid>
    <Grid item xs={1}/>
    <Grid item xs={10} style={{ border: '2px solid pink' }}>
      PAGE BODY
    </Grid>
    <Grid item xs={1}/>
    <Grid item xs={12} style={{ border: '2px solid blue' }}>
      FOOTER
    </Grid>
  </Grid>;
};

export default VerticalHRPage;
