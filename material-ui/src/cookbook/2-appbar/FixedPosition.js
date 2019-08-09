import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export const AppbarParameterisedPosition = ({ classes, position, title }) => {

  const [ anchor, setAnchor ] = useState(null);

  return <AppBar position={position}>
    <Toolbar>
      <IconButton
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={e => { setAnchor(e.currentTarget); }}>
        <MenuIcon />
      </IconButton>
      {/* param anchorEl causes a warning ("function components cannot be given refs").
        apparently we gotta make this explicitly stateful to avoid it */}
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={closeMenu}>
        <MenuItems closeMenu={closeMenu} />
      </Menu>
      <Typography
        variant='h4'
        color='inherit'
        className={classes.flex}>{title}</Typography>
      <Button color='inherit'>Login</Button>
    </Toolbar>
  </AppBar>;

  function closeMenu() {
    setAnchor(null);
  }
};


AppbarParameterisedPosition.propTypes = {
  classes: PropTypes.object,
  position: PropTypes.string,
  title: PropTypes.string,
};

const FixedPosition = withStyles(styles)(({ classes, title }) => (
  <div className={classes.root}>
    <AppbarParameterisedPosition classes={classes} title={title} position='fixed' />
    <div className={classes.toolbarMargin} />
    <ul>
      {new Array(500).fill(null).map((v, i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
));

export default FixedPosition;

function styles(theme) {
  return {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    toolbarMargin: theme.mixins.toolbar,
  };
}

function MenuItems({ closeMenu }) {
  return <Fragment>
    <MenuItem onClick={closeMenu}>Profile</MenuItem>
    <MenuItem onClick={closeMenu}>My account</MenuItem>
    <MenuItem onClick={closeMenu}>Logout</MenuItem>
  </Fragment>;
}

MenuItems.propTypes = {
  closeMenu: PropTypes.func,
};
