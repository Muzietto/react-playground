import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';

import './Scss.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000'
        }
    }
});

const Scss = () => (
    <MuiThemeProvider theme={theme}>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <br />
        <Button classes={ { root: 'main' } }>button, classes root: main, injected</Button>
        <Button classes={ { root: 'jv2' } }>button, classes root: jv2, injected</Button>
        <div className="alphabetagamma">div, class alphabetagamma, from bundle</div>
        <div className="delta">div, class delta, from bundle</div>
        <div className="main">div, class main, injected</div>
    </MuiThemeProvider>
);

export default Scss;
