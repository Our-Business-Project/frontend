import { Box, Typography } from '@mui/material';

export default function CategoryLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          justifyItems: 'center',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          display: 'grid',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
