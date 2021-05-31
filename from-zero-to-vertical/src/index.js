import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
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
}

ReactDOM.render(<App />, document.getElementById('root'));
