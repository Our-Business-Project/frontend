import { styled } from '@mui/material';
import { TabPanel, TabPanelProps } from '@mui/lab';
import ProfileInfoForm from './ProfileInfoForm';
import ProfilePhotoUpload from './ProfilePhotoUpload';
import { useAuth } from '@/core/hooks/useAuth';
import { useProfile } from '@/core/hooks/useProfile';
import { useEffect } from 'react';

export default function ProfileInfoTabPanel({ value, ...props }: TabPanelProps) {
  const { userId, token, logout } = useAuth();
  const { profile, loadProfile } = useProfile(token);

  useEffect(() => {
    if (!profile.data && userId) loadProfile(userId);
  }, [loadProfile, profile.data, userId]);

  useEffect(() => {
    if (profile.error && profile.error !== 'Щось пішло не по плану :(') {
      logout();
    }
  }, [logout, profile.error]);

  return (
    <StyledTabPanel value={value} {...props}>
      {profile.data && (
        <>
          <ProfileInfoForm />
          <ProfilePhotoUpload />
        </>
      )}
    </StyledTabPanel>
  );
}

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: '0',
  display: 'flex',
  justifyContent: 'space-between',
}));
