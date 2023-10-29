'use client';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from '@/core/store';
import ThemeRegistry from '@/core/theme/ThemeRegistry';
import { AuthProvider } from '@/core/contexts/Auth.context';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

const metadata: Metadata = {
  title: 'Your Business Adviser | Калькулятор для Вашого Успішного Бізнесу',
  description:
    'Отримайте професійні бізнес-консультації та скористайтеся унікальним калькулятором бізнесу для підвищення ефективності вашої компанії',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AuthProvider>
            <ThemeRegistry options={{ key: 'mui' }}>
              <Header />
              {children}
              <Footer />
            </ThemeRegistry>
          </AuthProvider>
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
