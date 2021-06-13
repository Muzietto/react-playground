import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';

export default function SettingsMenu({ children = '' }) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const anchorRef = useRef(null);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          className={classes.button}
          onClick={() => { setIsOpen(!isOpen); }}
        >
          Impostazioni
        </Button>
        <Popper
          open={isOpen}
          anchorEl={anchorRef.current}
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
                <ClickAwayListener onClickAway={() => { setIsOpen(false); }}>
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
