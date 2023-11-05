'use client';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from '@/core/store';
import ThemeRegistry from '@/core/theme/ThemeRegistry';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import 'react-toastify/dist/ReactToastify.css';

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeRegistry options={{ key: 'mui' }}>
        <Header />
        {children}
        <Footer />
      </ThemeRegistry>
      <ToastContainer />
    </Provider>
  );
}
