import type { Metadata } from 'next';
import AppWrapper from '@/components/global/AppWrapper';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Your Business Adviser | Калькулятор для Вашого Успішного Бізнесу',
  description:
    'Отримайте професійні бізнес-консультації та скористайтеся унікальним калькулятором бізнесу для підвищення ефективності вашої компанії',
  };
  
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
