import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function UsingStateToRenderListItems() {

  const [items, setItems] = useState([
    { name: 'First Item', timestamp: new Date() },
    { name: 'Second Item', timestamp: new Date() },
    { name: 'Third Item', timestamp: new Date() },
  ]);
  return <List>
    {items.map((item, index) => (
      <ListItem key={index} button dense>
        <ListItemText
          primary={item.name}
          secondary={item.timestamp.toLocaleString()}
        />
      </ListItem>
    ))}
  </List>;
}
