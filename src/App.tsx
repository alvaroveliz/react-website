import React from 'react';
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import './styles/main.scss';
import Home from './pages/Home';
import Header from './components/Header';

declare module '@mui/material/styles' {
    interface DefaultTheme extends Theme {}
}

const App: React.FC = (): React.ReactElement => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        main: '#FD6300',
                    },
                },
                typography: {
                    fontFamily: ['"Poppins"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
                },
                components: {
                    MuiLink: {
                        defaultProps: {
                            underline: 'hover',
                        },
                    },
                },
            }),
        [prefersDarkMode],
    );

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Home />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
