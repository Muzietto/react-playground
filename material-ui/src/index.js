import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import UnderstandingBreakpoints from '@src/cookbook/5-grid/UnderstandingBreakpoints';
import FillingSpace from '@src/cookbook/5-grid/FillingSpace';
import FixedColumnLayout from '@src/cookbook/5-grid/FixedColumnLayout';
import ColumnDirection from '@src/cookbook/5-grid/ColumnDirection';
import FixedPosition from '@src/cookbook/2-appbar/FixedPosition';
import AppbarWithButtons from '@src/cookbook/2-appbar/AppbarWithButtons2';
import WithNavigation from '@src/cookbook/2-appbar/WithNavigation';
import AppbarIntegration from '@src/cookbook/4-tabs/AppbarIntegration';
import AppbarIntegrationWithChildren from '@src/cookbook/4-tabs/AppbarIntegrationWithChildren';
import StatefulExpansionPanels from '@src/cookbook/5-exppanels/StatefulExpansionPanels';
import StatefulExpansionPanelsWithIcons from '@src/cookbook/5-exppanels/StatefulExpansionPanelsWithIcons';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarIntegrationWithChildren>
        <StatefulExpansionPanels label='StatefulExpansionPanels' />
        <StatefulExpansionPanelsWithIcons label='StatefulExpansionPanels with Icons' />
        <div label='Layouts'>
          <h3>ColumnDirection</h3>
          <ColumnDirection />
          <hr />
          <h3>FixedColumnLayout</h3>
          <h5>Only xs (&gt; 0px) is specified.</h5>
          <h5>4 cols (xs=3/12)</h5>
          <FixedColumnLayout width={3} />
          <h5>2 cols (xs=6/12)</h5>
          <FixedColumnLayout width={6} />
          <h5>Header one col - rest is 2 cols</h5>
          <FixedColumnLayout width={6} singleHeader={true} />
          <hr />
          <h3>FillingSpace</h3>
          <FillingSpace justify='space-around' />
          <hr />
          <h3>UnderstandingBreakpoints</h3>
          <UnderstandingBreakpoints />
        </div>
        <AppbarWithButtons label='AppbarWithButtons' title='AppbarWithButtons - fading on scroll' />
        <FixedPosition label='AppBar with FixedPosition' title='FixedPosition - first exercise' />
        <WithNavigation label='Appbar with Navigation'/>
        <AppbarIntegration label='AppbarIntegration' />
      </AppbarIntegrationWithChildren>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
