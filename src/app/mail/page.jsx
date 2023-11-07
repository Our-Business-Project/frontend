'use client';

import { useAuth } from '@/core/hooks/useAuth';
import { useMail } from '@/core/hooks/useMail';
import { useProfile } from '@/core/hooks/useProfile';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function EmailVerificationPage() {
  const params = useSearchParams();
  const verifyToken = params.get('verify');

  const { isAuthenticated, token, userId } = useAuth();
  const { profile, loadProfile } = useProfile(token);
  const { mailVerification, verifyMail } = useMail(token);

  useEffect(() => {
    if (!profile.data) {
      loadProfile(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!verifyToken || !isAuthenticated) {
      redirect('/sign-in');
    } else if (profile.data?.isEmailVerified) {
      redirect('/profile');
    } else if (profile.data?.isEmailVerified === false) {
      verifyMail(verifyToken);
    }
  }, [isAuthenticated, profile.data?.isEmailVerified, verifyMail, verifyToken]);

  useEffect(() => {
    if (mailVerification.data || mailVerification.error) {
      redirect('/profile');
    }
  }, [mailVerification.data, mailVerification.error]);

  return <div></div>;
}
