'use client';

import { useSearchParams } from 'next/navigation';

export default function EmailVerificationPage() {
  const params = useSearchParams();
  const verifyToken = params.get('verify');

  return <div>{verifyToken}</div>;
}
