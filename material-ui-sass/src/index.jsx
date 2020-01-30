import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { baseTheme } from './themes/theme';

import Root from './components/Root/Root';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <MuiThemeProvider theme={baseTheme}>
            <Router>
                <Root store={{}} />
            </Router>
        </MuiThemeProvider>,
        document.getElementById('root')
    );
});
