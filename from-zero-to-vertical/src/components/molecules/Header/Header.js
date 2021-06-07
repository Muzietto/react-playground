import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HrIcon from '@src/assets/Icons/Header/HrIcon';
import FinanceIcon from '@src/assets/Icons/Header/FinanceIcon';
import AnalyticsToolIcon from '@src/assets/Icons/Header/AnalyticsToolIcon';
import PayrollIcon from '@src/assets/Icons/Header/PayrollIcon';
import Link from '@material-ui/core/Link';

export default function Header({
  profiles = [],
}) {

  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  return <Box style={{ backgroundColor: '#313467', height: 100 }}>
    <Typography style={{ color: 'white' }}>Nuovo Portale Clienti</Typography>
    {profiles.map(() => {})}
  </Box>;
}

Header.propTypes = {
  profiles: PropTypes.array,
};

function useStyles() {
  return makeStyles((/* theme */) => ({
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
