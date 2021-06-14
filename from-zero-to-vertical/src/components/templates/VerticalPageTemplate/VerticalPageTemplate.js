import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TopNavigation from '@src/components/molecules/TopNavigation/TopNavigation';
import Header from '@src/components/molecules/Header/Header';

const VerticalPageTemplate = ({
  userProfiles,
  currentPage = '',
  children,
}) => <Grid container direction='row' justify='center' alignItems='stretch'>
  <Grid item xs={12}>
    <TopNavigation />
  </Grid>
  <Grid item xs={12}>
    <Header userProfiles={userProfiles} currentPage={currentPage} />
  </Grid>
  <Grid item xs={12} style={{ border: '2px solid cyan' }}>
    VERTICAL CAROUSEL
  </Grid>
  <Grid item xs={10}>
    {children}
  </Grid>
  <Grid item xs={12} style={{ border: '2px solid blue' }}>
    FOOTER
  </Grid>
</Grid>;

VerticalPageTemplate.propTypes = {
  userProfiles: PropTypes.array,
  children: PropTypes.node,
  currentPage: PropTypes.string,
};

export default VerticalPageTemplate;
