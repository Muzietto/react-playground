import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import EdenredLogo from '@src/components/atoms/EdenredLogo/EdenredLogo';
import SettingsMenu from '@src/components/organisms/SettingsMenu/SettingsMenu';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import Link from '@material-ui/core/Link';

const TopNavigation = () => {
  const classes = useStyles();

  const settingsMenuItems = [
    <Link
      key='account_page_link'
      color='inherit'
    >
      Account
    </Link>,
    <Link
      key='user_management_link'
      color='inherit'
    >
      Gestione Utenti
    </Link>,
  ];

  return <Grid
    container
    direction='row'
    justify='space-between'
    alignItems='center'
  >
    <Grid item>
      <EdenredLogo />
    </Grid>
    <Grid item>
      <Breadcrumbs separator='|'>
        <Button
          startIcon={<CompareArrowsIcon />}
          className={classes.buttonLow}>
          Cambia Utente o Gruppo
        </Button>
        <Button
          startIcon={<ArrowBackIcon />}
          className={classes.buttonLow}>
          Torna alla vista GENERAL
        </Button>

        <SettingsMenu>
          {settingsMenuItems}
        </SettingsMenu>

        <Button
          onClick={() => { /* setLoggingOut(true); */ }}
          className={classes.buttonLow}
        >
          Esci
        </Button>
      </Breadcrumbs>
    </Grid>
  </Grid>;
};

TopNavigation.propTypes = {
  currentPage: PropTypes.string,
  user: PropTypes.object,
  isVerticalPage: PropTypes.bool,
  circuitId: PropTypes.string,
};

export default TopNavigation;

function useStyles() {
  return makeStyles(theme => ({
    root: {
      background: 'white',
    },
    logoutAlert: {
      with: '40%',
      marginTop: '20px',
      top: '20px !important',
    },
    wrap: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    breadcrumb: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        '& ol': {
          justifyContent: 'space-between',
        },
      },
      padding: theme.spacing(2, 4),
      '& li': {
        display: 'flex',
      },
    },
    buttonLow: {
      textTransform: 'none',
      fontSize: 12,
      minWidth: 'auto',
    },
    icon: {
      right: 8,
      position: 'relative',
      width: 20,
      height: 18,
    },
  }))();
}
