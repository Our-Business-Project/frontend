'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { Container } from '@mui/material';
import { useAuth } from '@/core/hooks/useAuth';
import { useProfile } from '@/core/hooks/useProfile';

import ProfileInfo from '@/components/Profile/ProfileInfo';

export default function ProfilePage() {
  const { userId, isAuthenticated, token, logout } = useAuth();
  const { profile, loadProfile } = useProfile(token);

  useEffect(() => {
    if (!isAuthenticated) {
      redirect('/sign-in');
    } else if (userId) loadProfile(userId);
  }, [isAuthenticated, loadProfile, userId]);

  useEffect(() => {
    if (profile.error && profile.error !== 'Щось пішло не по плану :(') {
      logout();
    }
  }, [logout, profile.error]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10, color: '#000' }}>
      {isAuthenticated && profile.data && <ProfileInfo profile={profile} />}
    </Container>
  );
}
