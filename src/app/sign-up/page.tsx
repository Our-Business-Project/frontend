'use client';

import { Box, Typography, useTheme } from '@mui/material';
import SignInForm from '../../components/AuthComponents/SignInForm';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';
import FormBox from '@/components/ui/BoxComponents/FormBox';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function SignUpPage() {
  const theme = useTheme();

  return (
    <BackgroundBox imageUrl={bgImage} sx={{ padding: '2rem' }}>
      <FormBox>
        <Typography variant="h3">Вхід</Typography>
        <Box sx={{ maxWidth: 350, margin: 'auto' }}>
          <SignInForm sx={{ paddingTop: '145px' }} />
        </Box>
      </FormBox>
    </BackgroundBox>
  );
}
