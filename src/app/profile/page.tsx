'use client';

import { Box } from '@mui/material';

import ProfileInfo from '@/components/Profile/ProfileInfo';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <Box sx={{ backgroundColor: 'background.primary', flex: 1 }}>{isClient && <ProfileInfo />}</Box>;
}
