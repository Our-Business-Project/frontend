'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { Box, Typography, styled } from '@mui/material';
import SignUpForm from '@/components/AuthComponents/SignUpForm';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';
import FormBox from '@/components/ui/BoxComponents/FormBox';
import { useAuth } from '@/core/hooks/useAuth';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function SignUpPage() {
  const { isAuthenticated, register } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      redirect('/profile');
    }
  }, [isAuthenticated]);

  return (
    <StyledBgBox imageUrl={bgImage} sx={{ padding: '2rem' }}>
      <StyledFormBox>
        <Typography variant="h3">Реєстрація</Typography>
        <Container>
          <StyledSignUpForm register={register} />
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

const Container = styled(Box)(() => ({ maxWidth: 800, margin: 'auto' }));

const StyledSignUpForm = styled(SignUpForm)(() => ({
  paddingTop: '3.125rem',
  '@media (min-width: 900px)': { paddingTop: '9.0625rem' },
}));
