'use client';
import { Box, Container } from '@mui/material';
import Intro from '@/components/HomeComponents/Intro';
import CalcTabs from '@/components/HomeComponents/CalcTabs';

import * as React from 'react';
import BackgroundBox from '@/components/ui/BoxComponents/BackgroundBox';

const bgImage = 'https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2';

export default function HomePage() {
  return (
    <BackgroundBox imageUrl={bgImage}>
      <Intro />
      <Box sx={{ p: '50px 0', bgcolor: 'background.default' }}>
        <Container>
          <CalcTabs />
        </Container>
      </Box>
    </BackgroundBox>
  );
}
