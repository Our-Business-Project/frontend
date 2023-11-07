'use client';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Box } from '@mui/material';
import store from '@/core/store';
import ThemeRegistry from '@/core/theme/ThemeRegistry';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import { CalcProvider } from '@/core/contexts/Calc.context';

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <CalcProvider>
        <ThemeRegistry options={{ key: 'mui' }}>
          <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box component={'main'} sx={{ flex: '1' }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
        <ToastContainer />
      </CalcProvider>
    </Provider>
  );
}
