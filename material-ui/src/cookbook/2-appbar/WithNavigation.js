import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Router>
      <Route
        exact
        path='/'
        render={() => (
          <Fragment>
            <NavigatingToolbar classes={classes} title='Home' />
            <Typography>Home</Typography>
          </Fragment>
        )}
      />
      <Route
        exact
        path='/page2'
        render={() => (
          <Fragment>
            <NavigatingToolbar classes={classes} title='Page 2' />
            <Typography>Page 2</Typography>
          </Fragment>
        )}
      />
      <Route
        exact
        path='/page3'
        render={() => (
          <Fragment>
            <NavigatingToolbar classes={classes} title='Page 3' />
            <Typography>Page 3</Typography>
          </Fragment>
        )}
      />
    </Router>
  </div>
));

class NavigatingToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = { anchor: null };
  }

  closeMenu() {
    this.setState({ anchor: null });
  }

  render() {
    const { classes, title } = this.props;
    return <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
            onClick={e =>
              this.setState({ anchor: e.currentTarget })
            }>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={this.state.anchor}
            open={Boolean(this.state.anchor)}
            onClose={this.closeMenu}>
            <MenuItems />
          </Menu>
          <Typography
            variant='title'
            color='inherit'
            className={classes.flex}>
            {title}
          </Typography>
          <RightButton />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>;
  }
}

NavigatingToolbar.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  MenuItems: PropTypes.func,
  RightButton: PropTypes.func,
};

function MenuItems() {
  return <Fragment>
    <MenuItem component={Link} to='/'>Home</MenuItem>
    <MenuItem component={Link} to='/page2'>Page 2</MenuItem>
    <MenuItem component={Link} to='/page3'>Page 3</MenuItem>
  </Fragment>;
}

function RightButton() {
  return <Button color="inherit">Login</Button>;
}

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
