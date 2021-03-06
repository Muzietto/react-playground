import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import UnderstandingBreakpoints from '@src/cookbook/1-grid/UnderstandingBreakpoints';
import FillingSpace from '@src/cookbook/1-grid/FillingSpace';
import FixedColumnLayout from '@src/cookbook/1-grid/FixedColumnLayout';
import ColumnDirection from '@src/cookbook/1-grid/ColumnDirection';
import FixedPosition from '@src/cookbook/2-appbar/FixedPosition';
import AppbarWithButtons from '@src/cookbook/2-appbar/AppbarWithButtons2';
import AppbarWithComplexMenu from '@src/cookbook/2-appbar/AppbarWithComplexMenu';
import WithNavigation from '@src/cookbook/2-appbar/WithNavigation';
import AppbarIntegration from '@src/cookbook/4-tabs/AppbarIntegration';
import AppbarIntegrationWithChildren from '@src/cookbook/4-tabs/AppbarIntegrationWithChildren';
import StatefulExpansionPanels from '@src/cookbook/5-exppanels/StatefulExpansionPanels';
import StatefulExpansionPanelsWithIcons from '@src/cookbook/5-exppanels/StatefulExpansionPanelsWithIcons';
import LazyStatefulExpansionPanelsWithIcons from '@src/cookbook/5-exppanels/LazyStatefulExpansionPanelsWithIcons';
import UsingStateToRenderListItems from '@src/cookbook/6-list/StateRenderedListItems';
import StatefulTables from '@src/cookbook/7-tables/StatefulTables';
import SimpleSlide from '@src/cookbook/X-slides/SimpleSlide';
import ThreeStepWizard from '@src/cookbook/X-slides/ThreeStepWizard';
import PApp from '@src/components/atoms/PApp/PApp';
import PApp2 from '@src/components/atoms/PApp/PApp2';
import PApp3 from '@src/components/atoms/PApp/PApp3';
import PApp4 from '@src/components/atoms/PApp/PApp4';

export default function App() {

  return <>
        <CssBaseline />
        <PApp />
        <PApp2 />
        <PApp3 />
        <PApp4 />
  </>;

  // return (
  //   <React.Fragment>
  //     <CssBaseline />
  //     <AppbarIntegrationWithChildren style={{ height: '50vh' }}>
  //       <StatefulTables label='Stateful Tables' />
  //       <UsingStateToRenderListItems label='List Items' />
  //       <StatefulExpansionPanels label='Stateful ExpPanels' />
  //       <SimpleSlide label='Simple Slide' />
  //       <ThreeStepWizard label='3-step Wizard' />
  //     </AppbarIntegrationWithChildren>
  //     <AppbarIntegrationWithChildren style={{ height: '50vh' }}>
  //       <StatefulExpansionPanels label='Stateful ExpPanels' />
  //       <StatefulExpansionPanelsWithIcons label='Stateful ExpPanels + Icons' />
  //       <LazyStatefulExpansionPanelsWithIcons label='Lazy ExpPanels + Icons' />
  //       <div label='Layouts'>
  //         <h3>ColumnDirection</h3>
  //         <ColumnDirection />
  //         <hr />
  //         <h3>FixedColumnLayout</h3>
  //         <h5>Only xs (&gt; 0px) is specified.</h5>
  //         <h5>4 cols (xs=3/12)</h5>
  //         <FixedColumnLayout width={3} />
  //         <h5>2 cols (xs=6/12)</h5>
  //         <FixedColumnLayout width={6} />
  //         <h5>Header one col - rest is 2 cols</h5>
  //         <FixedColumnLayout width={6} singleHeader={true} />
  //         <hr />
  //         <h3>FillingSpace</h3>
  //         <FillingSpace justify='space-around' />
  //         <hr />
  //         <h3>UnderstandingBreakpoints</h3>
  //         <UnderstandingBreakpoints />
  //       </div>
  //     </AppbarIntegrationWithChildren>
  //     <AppbarIntegrationWithChildren style={{ height: '50vh' }}>
  //       <AppbarWithButtons label='Appbar + Buttons' title='AppbarWithButtons - fading on scroll' />
  //       <AppbarWithComplexMenu label='Appbar ComplexMenu' title='AppbarWithComplexMenu' />
  //       <FixedPosition label='AppBar FixedPosition' title='FixedPosition - first exercise' />
  //       <WithNavigation label='Appbar + Navigation'/>
  //       <AppbarIntegration label='Appbar w/h Tabs underneath' />
  //     </AppbarIntegrationWithChildren>
  //   </React.Fragment>
  // );
}

ReactDOM.render(<App />, document.getElementById('root'));
