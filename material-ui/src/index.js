import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import UnderstandingBreakpoints from '@src/cookbook/5-grid/UnderstandingBreakpoints';
import FillingSpace from '@src/cookbook/5-grid/FillingSpace';
import FixedColumnLayout from '@src/cookbook/5-grid/FixedColumnLayout';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
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
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
