import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

export default function SettingsMenu({ children = '' }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          className={classes.button}
        >
          Impostazioni
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                    {children &&
                        React.Children.map(children, child => (
                          <MenuItem onClick={handleClose}>
                            {React.cloneElement(child)}
                          </MenuItem>
                        ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>)}
        </Popper>
      </div>
    </div>
  );
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
