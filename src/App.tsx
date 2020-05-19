import React from 'react';
import { CssBaseline } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './styles/main.scss';
import Home from './pages/Home';

const App: React.FC = (): React.ReactElement => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'light' : 'dark',
                    primary: {
                        main: '#FD6300',
                    },
                },
                typography: {
                    fontFamily: ['"Nunito Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    );
};

export default App;
