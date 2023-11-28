'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { Box } from '@mui/material';
import { useAuth } from '@/core/hooks/useAuth';
import { useProfile } from '@/core/hooks/useProfile';

import ProfileInfo from '@/components/Profile/ProfileInfo';

export default function ProfilePage() {
  const { userId, isAuthenticated, token, logout } = useAuth();
  const { profile, loadProfile } = useProfile(token);

  useEffect(() => {
    if (!profile && userId) loadProfile(userId);
  }, [isAuthenticated, loadProfile, profile, userId]);

  useEffect(() => {
    if (profile.error && profile.error !== 'Щось пішло не по плану :(') {
      logout();
    }
  }, [logout, profile.error]);

  return <Box sx={{ backgroundColor: 'background.primary' }}>{isAuthenticated && profile.data && <ProfileInfo />}</Box>;
}
