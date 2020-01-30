import { createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';

export const baseTheme = createMuiTheme({
    palette: {
        primary: { main: blue[500] },
        secondary: { main: cyan[500] }
    },
});
