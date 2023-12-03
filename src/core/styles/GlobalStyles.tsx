import { GlobalStyles as GS } from '@mui/material';

const GlobalStyles = () => {
  return (
    <GS
      styles={{
        '*': {
          outline: 'none',
        },
        a: {
          color: '#FFFFFF',
        },
      }}
    />
  );
};

export default GlobalStyles;
