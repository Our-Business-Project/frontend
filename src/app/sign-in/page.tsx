'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { Box, Typography, styled, useTheme } from '@mui/material';
import SignInForm from '../../components/AuthComponents/SignInForm';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';
import FormBox from '@/components/ui/BoxComponents/FormBox';
import { useAuth } from '@/core/hooks/useAuth';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function SignInPage() {
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      redirect('/profile');
    }
  }, [isAuthenticated]);

  return (
    <BackgroundBox imageUrl={bgImage} sx={{ padding: '2rem' }}>
      <FormBox>
        <Typography variant="h3">Вхід</Typography>
        <Container>
          <SignInForm login={login} sx={{ paddingTop: '9.0625rem' }} />
        </Container>
      </FormBox>
    </BackgroundBox>
  );
}

const Container = styled(Box)(() => ({ maxWidth: 350, margin: 'auto' }));
