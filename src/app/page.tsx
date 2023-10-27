'use client';
import { Box, Container } from '@mui/material';
import Intro from '@/components/HomeComponents/Intro';
import FormFields from '@/components/HomeComponents/FormFields';
import * as React from 'react';
import PopupLayout from '@/components/PopUpComponents/PopupLayout';

export default function Home() {

  return (
    <Box
      sx={{
        padding: '0',
        margin: '0',
        backgroundImage: `url(https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2)`,
        backgroundSize: 'cover',
        backgroundPosition: ' center center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        backgroundAttachment: 'fixed',
      }}
    >
      <Intro />
      <Box sx={{ height: '1000px', bgcolor: 'background.default' }}>
        <Container>
          <FormFields />
        </Container>
      </Box>
    </Box>
  );
}
