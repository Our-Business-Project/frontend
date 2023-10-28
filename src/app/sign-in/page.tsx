'use client';

import { Box, Typography, useTheme } from '@mui/material';
import SignInForm from '../../components/AuthComponents/SignInForm';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function SignInPage() {
  const theme = useTheme();

  return (
    <BackgroundBox imageUrl={bgImage} sx={{ padding: '2rem' }}>
      <Box
        sx={{
          margin: '2rem auto',
          padding: '3.75rem 3.125rem',
          bgcolor: theme.palette.primary.light,
          borderRadius: '15px',
          boxShadow: theme.shadows[0],
          maxWidth: 1000,
          minWidth: 320,
        }}
      >
        <Typography variant="h3">Вхід</Typography>
        <Box sx={{ maxWidth: 350, margin: 'auto' }}>
          <SignInForm sx={{ paddingTop: '145px' }} />
        </Box>
      </Box>
    </BackgroundBox>
  );
}
