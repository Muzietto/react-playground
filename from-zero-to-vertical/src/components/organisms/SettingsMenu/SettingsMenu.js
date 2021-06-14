import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

export default function SettingsMenu({ children = '' }) {
  const classes = useStyles();

  const open = true;

  const menuAnchorRef = useRef(null);

  return <div className={classes.root}>
    <div>
      <Button
        ref={menuAnchorRef}
        className={classes.button}
      >
          Impostazioni
      </Button>
      <Popper
        open={open}
        anchorEl={menuAnchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={classes.popper}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <MenuList
                autoFocusItem={open}
                id='menu-list-grow'
              >
                {children &&
                        React.Children.map(children, child => (
                          <MenuItem onClick={() => {}}>
                            {React.cloneElement(child)}
                          </MenuItem>
                        ))}
              </MenuList>
            </Paper>
          </Grow>)}
      </Popper>
    </div>
  </div>;
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  button: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
  popper: {
    zIndex: 1101,
    '& li': {
      fontSize: 12,
      fontFamily: 'Raleway-Bold',
    },
  },
}));
