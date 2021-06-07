import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useDeviceAware } from '@src/components/others/DeviceAware/DeviceAware';
import { useIsGold } from '@src/components/others/IsGold/IsGold';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Hidden from '@material-ui/core/Hidden';
import CircularProgress from '@material-ui/core/CircularProgress';
import EdenredLogo from '@src/components/atoms/EdenredLogo/EdenredLogo';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SettingsMenu from '@src/components/molecules/SettingsMenu/SettingsMenu';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import { once } from '@src/model/utils/functionUtils';
import { isUserAdmin, isUserSuperAdmin, hasUserProfile } from '@src/model/utils/pageUtils';
import auth from '@src/model/auth/auth';
import { useDictionary } from '@src/components/others/Dictionary/Dictionary';

const ROOT_URL = ENV.RESOURCE_ROOT_URL;
const onceLogout = isGold => once(auth.logout(isGold)); // for some reason, it tends to fire twice, so we make it just once

const TopNavigation = ({
  currentPage,
  user = { profiles: [] },
  isVerticalPage = false,
  circuitId = '',
}) => {

  const classes = useStyles();
  const _t = useDictionary();
  const device = useDeviceAware();
  const isGold = useIsGold();
  const [loggingOut, setLoggingOut] = useState(false);

  let separator = '';
  if (device !== 'mobile') {
    separator = '|';
  }

  // Here we can put all the static link, for settings menu
  const default_settings_menu_items =
    (currentPage !== 'ACCOUNT') ? [
      <Link
        key='account_page_link'
        color='inherit'
        component={RouterLink}
        to={`${ROOT_URL}/account${isVerticalPage ? '/' + circuitId : ''}`}>
        {_t('TOPNAVIGATION_ACCOUNT')}
      </Link>,
    ]
      : [];
  const settings_menu_items = ((isGold
    || isUserAdmin(user)
    || isUserSuperAdmin(user)) && (currentPage !== 'USER-ADMINISTRATION'))
    ? default_settings_menu_items.concat(<Link
      key='user_management_link'
      color='inherit'
      component={RouterLink}
      to={`${ROOT_URL}/user-administration${isVerticalPage ? '/' + circuitId : ''}`}
    >
      {_t('TOPNAVIGATION_USERMANAGEMENT')}
    </Link>)
    : default_settings_menu_items;

  return <Grid item xs={12} className={classes.root}>
    <div className={classes.wrap}>
      <Hidden xsDown>
        <EdenredLogo />
      </Hidden>
      <Breadcrumbs separator={separator} aria-label='breadcrumb' className={classes.breadcrumb}>
        {/* <Link color='inherit' href={linkHref} className={classes.link}>
          <ArrowBackIcon className={classes.icon} />
          {linkText}
        </Link> */}

        {isGold && <Button
          component={RouterLink}
          to={`${ROOT_URL}/?clear=1`}
          startIcon={<CompareArrowsIcon />}
          className={classes.buttonLow}>
          {_t('TOPNAVIGATION_CHANGEUSER')}
        </Button>}

        {isVerticalPage && hasUserProfile(user.profiles, 'GENERAL') && <Button
          component={RouterLink}
          to={`${ROOT_URL}/general`}
          startIcon={<ArrowBackIcon />}
          className={classes.buttonLow}>
          {_t('TOPNAVIGATION_BACKTOGENERAL')}
        </Button>}

        {(settings_menu_items.length > 0)
          && <SettingsMenu>
            {settings_menu_items}
          </SettingsMenu>}

        <Button onClick={() => setLoggingOut(true)} className={classes.buttonLow}>
          {_t('TOPNAVIGATION_EXIT')}
        </Button>
      </Breadcrumbs>
      {loggingOut && <LogoutAlert />}
    </div>
  </Grid>;

  function LogoutAlert() {

    setTimeout(onceLogout(isGold), 2000);

    return <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={loggingOut}>
      <Alert severity='info'>
        <Grid container spacing={6} style={{ width: '400px' }}>
          <Grid item xs={2}>
            <CircularProgress color='primary' />
          </Grid>
          <Grid item xs={10}>
            <Typography>
              {_t('TOPNAVIGATION_EXITING')}
            </Typography>
          </Grid>
        </Grid>
      </Alert>
    </Snackbar>;
  }
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
