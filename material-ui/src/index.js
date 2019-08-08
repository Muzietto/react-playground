import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import UnderstandingBreakpoints from '@src/cookbook/5-grid/UnderstandingBreakpoints';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <h1>Hello World!!!</h1>
      <UnderstandingBreakpoints />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
