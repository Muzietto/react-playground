import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

export default withStyles(styles)(UsingStateToRenderListItems);

function UsingStateToRenderListItems({ classes }) {

  const [items, setItems] = useState([
    { name: 'First Item', timestamp: new Date() },
    { name: 'Second Item', timestamp: new Date() },
    { name: 'Third Item', timestamp: 'qwe qwe qweqwe weqweqw eqwras aqec qcqwfqwca cqwq wdqxqqwwa sas asdasasacac a adawaa wawd fa  ca' },
  ]);

  return <List>
    {items.map((item, index) => (
      <ListItem
        key={index}
        button={true}
        dense={true}
        selected={item.selected}
        onClick={onClick(index)}>
        <ListItemIcon>
          <Badge
            color={item.selected ? 'secondary' : undefined}
            badgeContent={item.selected ? '1' : ''}>
            <Avatar className={item.selected ? classes.activeAvatar : ''}>
              <AccountCircleIcon />
            </Avatar>
          </Badge>
        </ListItemIcon>
        <ListItemText
          primary={item.name}
          secondary={item.timestamp.toLocaleString()}
        />
        <ListItemIcon>
          {item.selected
            ? <CheckCircleOutlineIcon />
            : <AccessAlarmIcon />}
        </ListItemIcon>
      </ListItem>
    ))}
  </List>;

  function onClick(index) {
    return () => {
      const item = items[index];
      const newItems = [...items];
      newItems[index] = {
        ...item,
        selected: !item.selected,
      };
      setItems(newItems);
    };
  }
}

UsingStateToRenderListItems.propTypes = {
  classes: PropTypes.object,
};

function styles(theme) {
  return {
    activeAvatar: {
      backgroundColor: theme.palette.primary[theme.palette.type],
    },
  };
}
