import type { Metadata } from 'next';
import { Box } from '@mui/material';
import AppWrapper from '@/components/global/AppWrapper';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';


export const metadata: Metadata = {
  title: 'Your Business Adviser | Калькулятор для Вашого Успішного Бізнесу',
  description:
    'Отримайте професійні бізнес-консультації та скористайтеся унікальним калькулятором бізнесу для підвищення ефективності вашої компанії',
};

const style = {
  height: '100%',
  margin: 0,
  padding: '0!important',
  scrollBehavior: 'smooth',
  scrollPaddingTop: '5rem',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Box lang="en" component={'html'} sx={style}>
        <Box component={'body'} sx={style}>
          <AppWrapper>{children}</AppWrapper>
        </Box>
      </Box>
    </>
  );
}
