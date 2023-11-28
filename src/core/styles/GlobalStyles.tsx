import { GlobalStyles as GS } from '@mui/material';

const GlobalStyles = () => {
  return (
    <GS
      styles={{
        a: {
          color: '#FFFFFF',
        },
        'label.MuiFormLabel-root': {
          color: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    />
  );
};

export default GlobalStyles;
