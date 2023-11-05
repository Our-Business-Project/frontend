import React from 'react'; // Добавьте этот импорт
import { Box, Typography } from '@mui/material';

export default function CategoryLayout({ children, title }: { children: React.ReactNode; title: string }) {
  const childrenArray = React.Children.toArray(children) as React.ReactNode[];

  return (
    <Box sx={{ borderRadius: '15px 100px 15px 100px' }}>
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
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {childrenArray[0]}
        {childrenArray[1]}
        {childrenArray[2]}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {childrenArray[3]}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {childrenArray[4]}
        {childrenArray[5]}
        {childrenArray[6]}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {childrenArray[7]}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {childrenArray[8]}
      </Box>
    </Box>
  );
}
