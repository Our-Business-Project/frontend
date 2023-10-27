import { Box, Typography } from '@mui/material';

export default function CategoryLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          pt: '100px',
          color: 'text.secondary',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
