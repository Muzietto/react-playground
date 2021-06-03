import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import EdenredLogo from '@src/components/atoms/EdenredLogo/EdenredLogo';
import CircularProgress from '@material-ui/core/CircularProgress';

const SplashPage = ({ message = '' }) => {

  const classes = useStyles();

  return <div className={classes.flexContainer}>
    <EdenredLogo />
    <h1>Portale Clienti</h1>
    {(message === '')
      ? <CircularProgress color='primary' />
      : message}
  </div>;
};

SplashPage.propTypes = {
  message: PropTypes.string,
};

export default SplashPage;

const useStyles = makeStyles(() => ({

  flexContainer : {
    width: '100%',
    paddingTop: '300px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flexStart',
    alignContent: 'stretch',
    alignItems: 'center',
  },
}));
