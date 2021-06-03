import { hot } from 'react-hot-loader/root';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import VerticalHRPage from '@src/components/pages/VerticalHRPage/VerticalHRPage';

const App = () => <>
  <CssBaseline />
  <VerticalHRPage />
</>;

export default hot(App);
