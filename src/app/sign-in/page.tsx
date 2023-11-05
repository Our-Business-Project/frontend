'use client';

import { Box, Typography, styled, useTheme } from '@mui/material';
import SignInForm from '../../components/AuthComponents/SignInForm';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';
import FormBox from '@/components/ui/BoxComponents/FormBox';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function SignInPage() {
  const theme = useTheme();

  return (
    <BackgroundBox imageUrl={bgImage} sx={{ padding: '2rem' }}>
      <FormBox>
        <Typography variant="h3">Вхід</Typography>
        <Container>
          <SignInForm sx={{ paddingTop: '9.0625rem' }} />
        </Container>
      </FormBox>
    </BackgroundBox>
  );
}

const Container = styled(Box)(() => ({ maxWidth: 350, margin: 'auto' }));
