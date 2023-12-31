'use client';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Box, styled } from '@mui/material';
import store from '@/core/store';
import ThemeRegistry from '@/core/theme/ThemeRegistry';
import Header from '@/components/global/Header';
import Main from '@/components/global/Main';
import Footer from '@/components/global/Footer';
import GlobalStyles from '@/core/styles/GlobalStyles';

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeRegistry options={{ key: 'mui' }}>
        <ContentContainer>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <GlobalStyles />
        </ContentContainer>
        <ToastContainer />
      </ThemeRegistry>
    </Provider>
  );
}

const ContentContainer = styled(Box)(() => ({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
}));
