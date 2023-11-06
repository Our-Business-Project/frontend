'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/core/hooks/useAuth';
import { useProfile } from '@/core/hooks/useProfile';

export default function ProfilePage() {
  const { userId, isAuthenticated, token, logout } = useAuth();
  const { profile, loadProfile } = useProfile(token);

  useEffect(() => {
    if (!isAuthenticated) {
      redirect('/sign-in');
    } else if (userId) loadProfile(userId);
  }, [isAuthenticated, loadProfile, userId]);

  useEffect(() => {
    if (profile.error !== 'Шось пішло не по плану :(') {
      logout();
    }
  }, [logout, profile.error]);

  return (
    <div>
      {isAuthenticated && profile.data ? (
        <ul>
          <li>{profile.data._id}</li>
          <li>{profile.data.email}</li>
          <li>{profile.data.firstName}</li>
          <li>{profile.data.lastName}</li>
          <li>{profile.data.phone}</li>
        </ul>
      ) : null}
    </div>
  );
}
