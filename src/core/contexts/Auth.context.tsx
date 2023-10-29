'use client';

import { createContext, PropsWithChildren } from 'react';
import { useAuth, UseAuthReturn } from '../hooks/useAuth';

type AuthContextType = UseAuthReturn;

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: PropsWithChildren<{}>) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
