import { createTheme } from '@mui/material';
import '@fontsource/montserrat';

export const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    h1: {
      fontSize: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '34px',
    },
    h3: {
      fontSize: '32px',
      fontWeight: 500,
    },
    button: {
      // textTransform: 'none',
    },
    body2: {
      fontSize: '14px',
    },
  },
  palette: {
    common: {
      black: '#031A20',
    },
    primary: {
      main: '#217793',
      light: 'rgba(86, 173, 193, 0.8)',
    },
    secondary: {
      main: '#416E8E',
      light: 'rgba(69, 127, 141, 0.3)',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#00452B',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.8)',
    },
    error: {
      main: '#e41749',
    },
  },
  shadows: ['0 0 5px #457F8D', '0 0 15px 0 #457F8D', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: 'auto!important',
          padding: '64px 0 0 0!important',
        },
      },
    },
  },
});
