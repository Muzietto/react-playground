import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const fetchData = () =>
  new Promise(resolve => {
    const items = [
      {
        id: 1,
        name: 'First Item',
        created: new Date(),
        high: 2935,
        low: 1924,
        average: 2429.5,
      },
      {
        id: 2,
        name: 'Second Item',
        created: new Date(),
        high: 439,
        low: 231,
        average: 335,
      },
      {
        id: 3,
        name: 'Third Item',
        created: new Date(),
        high: 8239,
        low: 5629,
        average: 6934,
      },
      {
        id: 4,
        name: 'Fourth Item',
        created: new Date(),
        high: 3203,
        low: 3127,
        average: 3165,
      },
      {
        id: 5,
        name: 'Fifth Item',
        created: new Date(),
        high: 981,
        low: 879,
        average: 930,
      },
    ];
    setTimeout(() => resolve(items), 1000);
  });

const styles = theme => ({
  root: { margin: theme.spacing(2) },
});

export default withStyles(styles)(StatefulTables);

function StatefulTables({ classes }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData().then(items => {
      setItems(items);
    });
  }, []);

  return <Paper className={classes.root}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Created</TableCell>
          <TableCell align="right">High</TableCell>
          <TableCell align="right">Low</TableCell>
          <TableCell align="right">Average</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>{item.created.toLocaleString()}</TableCell>
              <TableCell align="right">{item.high}</TableCell>
              <TableCell align="right">{item.low}</TableCell>
              <TableCell align="right">{item.average}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>;
}
