import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import UnderstandingBreakpoints from '@src/cookbook/1-grid/UnderstandingBreakpoints';
import FillingSpace from '@src/cookbook/1-grid/FillingSpace';
import FixedColumnLayout from '@src/cookbook/1-grid/FixedColumnLayout';
import ColumnDirection from '@src/cookbook/1-grid/ColumnDirection';
import FixedPosition from '@src/cookbook/2-appbar/FixedPosition';
import AppbarWithButtons from '@src/cookbook/2-appbar/AppbarWithButtons2';
import WithNavigation from '@src/cookbook/2-appbar/WithNavigation';
import AppbarIntegration from '@src/cookbook/4-tabs/AppbarIntegration';
import AppbarIntegrationWithChildren from '@src/cookbook/4-tabs/AppbarIntegrationWithChildren';
import StatefulExpansionPanels from '@src/cookbook/5-exppanels/StatefulExpansionPanels';
import StatefulExpansionPanelsWithIcons from '@src/cookbook/5-exppanels/StatefulExpansionPanelsWithIcons';
import LazyStatefulExpansionPanelsWithIcons from '@src/cookbook/5-exppanels/LazyStatefulExpansionPanelsWithIcons';
import UsingStateToRenderListItems from '@src/cookbook/6-list/StateRenderedListItems';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppbarIntegrationWithChildren style={{ height: '50vh' }}>
        <UsingStateToRenderListItems label='List Items' />
        <StatefulExpansionPanels label='Stateful ExpPanels' />
      </AppbarIntegrationWithChildren>
      <AppbarIntegrationWithChildren style={{ height: '50vh' }}>
        <StatefulExpansionPanels label='Stateful ExpPanels' />
        <StatefulExpansionPanelsWithIcons label='Stateful ExpPanels + Icons' />
        <LazyStatefulExpansionPanelsWithIcons label='Lazy ExpPanels + Icons' />
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
        <AppbarWithButtons label='Appbar + Buttons' title='AppbarWithButtons - fading on scroll' />
        <FixedPosition label='AppBar FixedPosition' title='FixedPosition - first exercise' />
        <WithNavigation label='Appbar + Navigation'/>
        <AppbarIntegration label='Appbar Integration' />
      </AppbarIntegrationWithChildren>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
