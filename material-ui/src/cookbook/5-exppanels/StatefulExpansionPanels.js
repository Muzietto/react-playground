import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function StatefulExpansionPanels() {
  const [ panels ] = useState([
    { title: 'FirstPanel', content: 'content of First panel' },
    { title: 'SecondPanel', content: 'content of Second panel' },
    { title: 'ThirdPanel', content: 'content of Third panel', disabled: true },
    { title: 'FourthPanel', content: 'content of Fourth panel' },
  ]);

  return <React.Fragment>
    {panels
      .filter(panel => !panel.hidden)
      .map((panel, index) => <ExpansionPanel
        key={index}
        disabled={panel.disabled}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{panel.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{panel.content}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>)}
  </React.Fragment>;
}
