'use client';
import * as React from 'react';
import { Box, Container, styled } from '@mui/material';
import { useAuth } from '@/core/hooks/useAuth';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

export default function Footer() {
  const { isAuthenticated } = useAuth();

  const menu = [
    { name: 'Головна сторінка', href: '/' },
    { name: 'Калькулятор', href: '/#calculatorTabs' },
    isAuthenticated ? { name: 'Мій профіль', href: '/profile' } : { name: 'Реєстрація', href: '/sign-up' },
  ];

  return (
    <FooterBox component="footer">
      <StyledContainer maxWidth="xl">
        <LeftPart />
        <RightPart menu={menu} />
      </StyledContainer>
    </FooterBox>
  );
}

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',

    '&.MuiContainer-root': {
      padding: 0,
    },
  },
}));
