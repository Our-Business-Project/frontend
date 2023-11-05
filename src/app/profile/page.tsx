'use client';

import { useEffect } from 'react';
import { useAuth } from '@/core/hooks/useAuth';
import { useProfile } from '@/core/hooks/useProfile';

export default function ProfilePage() {
  const { userId, isAuthenticated, token } = useAuth();
  const { profile, loadProfile } = useProfile(token);

  useEffect(() => {
    if (!profile.data && userId) loadProfile(userId);
  }, [loadProfile, profile.data, userId]);

  return (
    <div>
      {isAuthenticated ? (
        <ul>
          <li>{profile.data?._id}</li>
          <li>{profile.data?.email}</li>
          <li>{profile.data?.firstName}</li>
          <li>{profile.data?.lastName}</li>
          <li>{profile.data?.phone}</li>
        </ul>
      ) : null}
    </div>
  );
}
