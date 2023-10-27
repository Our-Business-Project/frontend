import { Box, Typography } from '@mui/material';
import RootLayout from '../../app/layout';
import SignInForm from '../../components/AuthComponents/SignInForm';

export default function SignInPage() {
  return (
    <RootLayout>
      <Box
        sx={{
          margin: '2rem auto',
          padding: '3.75rem 3.125rem',
          bgcolor: 'primary.main',
          maxWidth: 1000,
          minWidth: 320,
        }}
      >
        <Typography variant="h3">Вхід</Typography>
        <Box sx={{ maxWidth: 350, margin: 'auto' }}>
          <SignInForm />
        </Box>
      </Box>
    </RootLayout>
  );
}
