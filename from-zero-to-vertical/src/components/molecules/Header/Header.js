import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HrIcon from '@src/assets/Icons/Header/HrIcon';
import FinanceIcon from '@src/assets/Icons/Header/FinanceIcon';
import AnalyticsToolIcon from '@src/assets/Icons/Header/AnalyticsToolIcon';
import PayrollIcon from '@src/assets/Icons/Header/PayrollIcon';
import Link from '@material-ui/core/Link';

export default function Header({
  userProfiles = [],
}) {

  const classes = useStyles();

  return <Grid
    container
    direction='row'
    justify='space-between'
    alignItems='center'
    className={classes.header}
  >
    <Grid item>
      <Typography
        variant='h4'
        className={classes.headerTitle}
      >Nuovo Portale Clienti</Typography>
    </Grid>
    <Grid
      item
      xs={3}
      container
      direction='row'
    >
      {userProfiles.map(profile => {
        const THE_ICON = ProfileIcon(profile.iconName);
        return <Grid
          item
          key={Math.random()}
          className={classes.headerLink}
        >
          <Link
            color='inherit'
            onClick={() => { alert(`You clicked ${profile.name}`); }}
          >
            <THE_ICON />
            <Typography>
              {profile.name}
            </Typography>
          </Link>
        </Grid>;
      })}
    </Grid>
  </Grid>;
}

Header.propTypes = {
  userProfiles: PropTypes.array,
};

function useStyles() {
  return makeStyles(theme => ({
    header: {
      backgroundColor: '#313467',
      color: 'white',
    },
    headerTitle: {
      marginLeft: 16,
    },
    headerLink: {
      margin: 5,
      width: 80,
      height: 90,
      cursor: 'pointer',
      // border: '1px solid white',
      textAlign: 'center',
      paddingTop: theme.spacing(1),
    },
  }))();
}

function ProfileIcon(name) {
  const dict = {
    hr: HrIcon,
    payroll: PayrollIcon,
    finance: FinanceIcon,
    analytics: AnalyticsToolIcon,
  };
  return dict[name] || null;
}

// eslint-disable-next-line no-unused-vars
const mapper = profile => {
  const THE_ICON = ProfileIcon(profile.iconName);
  return <Link key={Math.random()}
    color='inherit'
  >
    <THE_ICON />
    <Typography>
      {profile.name}
    </Typography>
  </Link>;
};
