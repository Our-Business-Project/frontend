'use client';
import { Box, Container, Typography } from '@mui/material';
import Intro from '@/components/HomeComponents/Intro';
import FormFields from '@/components/HomeComponents/FormFields';

import * as React from 'react';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function HomePage() {
  return (
    <BackgroundBox imageUrl={bgImage}>
      <Intro />
      <Box sx={{ p: '50px 0', bgcolor: 'background.default' }}>
        <Container>
          <FormFields />
        </Container>
      </Box>
    </BackgroundBox>
  );
}
