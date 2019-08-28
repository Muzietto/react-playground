import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DevicesIcon from '@material-ui/icons/Devices';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import StorageIcon from '@material-ui/icons/Storage';
import LinearProgress from '@material-ui/core/LinearProgress';

export default withStyles(styles)(StatefulExpansionPanelsWithIcons);

function StatefulExpansionPanelsWithIcons({ classes }) {
  const [ panels, setPanels ] = useState([
    { title: 'Devices', icon: DevicesIcon },
    { title: 'Networks', icon: NetworkWifiIcon },
    { title: 'Storage', disabled: true, icon: StorageIcon },
  ]);

  const onChange = index => (e, expanded) => {
    if (!panels[index].content && expanded) {
      fetchPanelContent(index)
        .then(content => {
          const newPanels = [...panels];
          newPanels[index] = { ...newPanels[index], content };
          setPanels(newPanels);
        });
    }
  };

  return <React.Fragment>
    {panels
      .filter(panel => !panel.hidden)
      .map((panel, index) => <ExpansionPanel
        key={index}
        onChange={onChange(index)}
        disabled={panel.disabled}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {/* next line (impossible in portal-ui) is possible thanks to Babel improvements in this repo */}
          <panel.icon className={classes.icon} />
          <Typography variant='subtitle1'>{panel.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
          <MaybeProgress loading={!panel.content} />
          {/* eslint-disable-next-line no-nested-ternary */}
          {(panel.content)
            ? ((typeof panel.content === 'string')
              ? <Typography>{panel.content}</Typography>
              // next line (impossible in portal-ui) is possible thanks to Babel improvements in this repo
              : <panel.content/>)
            : <Typography />}
        </ExpansionPanelDetails>
      </ExpansionPanel>)}
  </React.Fragment>;
}

StatefulExpansionPanelsWithIcons.propTypes = {
  classes: PropTypes.object,
};

function styles(theme) {
  return {
    icon: {
      marginRight: theme.spacing(1),
    },
    panelDetails: {
      flexDirection: 'column',
      height: 150,
      overflow: 'auto',
    },
  };
}

function MaybeProgress({ loading }) {
  return (loading) ? <LinearProgress /> : null;
}

function fetchPanelContent(index) {
  return new Promise(resolve =>
    setTimeout(() =>
      resolve([
        'First panel content...',
        IpsumContent,
        'Third panel content...',
        'Fourth panel content...',
      ][index]), 1000));
}

function IpsumContent() {
  return <React.Fragment>
    <Typography paragraph>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
ultricies nibh ut ipsum placerat, eget egestas leo imperdiet.
Etiam consectetur mollis ultrices. Fusce eu eros a dui maximus
rutrum. Aenean at dolor eu nunc ultricies placerat. Sed finibus
porta sapien eget euismod. Donec eget tortor non turpis
hendrerit euismod. Phasellus at commodo augue. Maecenas
scelerisque augue at mattis pharetra. Aenean fermentum sed neque
id feugiat.
    </Typography>
    <Typography paragraph>
Aliquam erat volutpat. Donec sit amet venenatis leo. Nullam
tincidunt diam in nisi pretium, sit amet tincidunt nisi aliquet.
Proin quis justo consectetur, congue nisi nec, pharetra erat. Ut
volutpat pulvinar neque vitae vestibulum. Phasellus nisl risus,
dapibus at sapien in, aliquam tempus tellus. Integer accumsan
tortor id dolor lacinia, et pulvinar est porttitor. Mauris a est
vitae arcu iaculis dictum. Sed posuere suscipit ultricies.
Vivamus a lacus in dui vehicula tincidunt.
    </Typography>
    <Typography paragraph>
In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
in turpis vel tempor. Vivamus tincidunt turpis vitae porta
dignissim. Quisque condimentum augue arcu, quis tincidunt erat
luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
nec, molestie tellus. Donec commodo consequat gravida. Mauris in
rhoncus tellus, eget posuere risus. Pellentesque eget lectus
lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer condimentum, sapien varius vulputate lobortis, urna elit
vestibulum ligula, sit amet interdum lectus augue ac eros.
Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
ipsum ex, fermentum eu pretium quis, posuere et velit.
    </Typography>
  </React.Fragment>;
}
