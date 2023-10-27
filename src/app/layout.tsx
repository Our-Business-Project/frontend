import type { Metadata } from 'next';
import ThemeRegistry from '../core/theme/ThemeRegistry';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

const metadata: Metadata = {
  title: 'Your Business Adviser | Калькулятор для Вашого Успішного Бізнесу',
  description:
    'Отримайте професійні бізнес-консультації та скористайтеся унікальним калькулятором бізнесу для підвищення ефективності вашої компанії',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeRegistry options={{ key: 'mui' }}>
        <Header />
        {children}
        <Footer />
      </ThemeRegistry>
    </>
  );
}
