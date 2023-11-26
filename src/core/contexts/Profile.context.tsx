import { createContext } from 'react';
import { UserResponse } from '../models/UserResponse.model';

type ProfileContextType = {
  data: UserResponse | null;
  error: string | null;
  pending: boolean;
};

export const ProfileContext = createContext<ProfileContextType>({ data: null, error: null, pending: false });

const ProfileContextElement = ({ profile, children }: { profile: ProfileContextType; children: React.ReactNode }) => {
  return <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>;
};

export default ProfileContextElement;
