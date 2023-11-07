'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { Box, Typography, styled } from '@mui/material';
import { useAuth } from '@/core/hooks/useAuth';
import SignInForm from '@/components/AuthComponents/SignInForm';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';
import FormBox from '@/components/ui/BoxComponents/FormBox';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function SignInPage() {
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      redirect('/profile');
    }
  }, [isAuthenticated]);

  return (
    <StyledBgBox imageUrl={bgImage}>
      <StyledFormBox>
        <Typography variant="h3">Вхід</Typography>
        <Container>
          <SignInForm login={login} sx={{ paddingTop: '9.0625rem' }} />
        </Container>
      </StyledFormBox>
    </StyledBgBox>
  );
}

const StyledBgBox = styled(BackgroundBox)(({ theme }) => ({
  padding: '6rem 2rem 2rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: 0,
  },
}));

const StyledFormBox = styled(FormBox)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginBottom: 0,
    borderRadius: 0,
  },
}));

const Container = styled(Box)(() => ({
  maxWidth: 350,
  margin: 'auto',
}));
