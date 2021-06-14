import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '@src/main/Routes/Routes';

// import DictionaryProvider and wrap everything with it
const App = () => <BrowserRouter>
  <CssBaseline />
  <Routes />
</BrowserRouter>;

export default hot(App);
