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
    primary: {
      main: 'rgba(36, 175, 122, 1)',
      light: 'rgba(36, 175, 122, 0.8)',
    },
    background: {
      default: '#E4F1EC',
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: '#00452B',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.8)',
    },
    error: {
      main: '#e41749',
    },
  },
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
