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
      fontSize: '13px',
      fontWeight: 300,
    },
  },
  palette: {
    common: {
      black: '#031A20',
    },
    success: {
      main: '#24af7a',
      dark: '#21966A',
      light: '#46C292',
      contrastText: '#FFFFFF',
    },
    primary: {
      main: '#217793',
      light: 'rgba(86, 173, 193, 0.8)',
      dark: '#2A5B7E',
    },
    secondary: {
      main: '#4682AE',
      light: 'rgba(69, 127, 141, 0.3)',
      dark: '#416E8E',
    },
    background: {
      default: '#FFFFFF',
      primary: '#E8EBF2',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#0F4462',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.8)',
    },
    error: {
      main: '#e41749',
    },
  },
  shadows: [
    '0 0 5px #457F8D',
    '0 0 15px 0 #457F8D',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
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
