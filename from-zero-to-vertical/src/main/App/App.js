import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '@src/main/Routes/Routes';
import DictionaryProvider from '@src/components/others/Dictionary/Dictionary';
// import DictionaryProvider and wrap everything with it
const App = () => <DictionaryProvider>
  <BrowserRouter>
    <CssBaseline />
    <Routes />
  </BrowserRouter>
</DictionaryProvider>;

export default hot(App);
