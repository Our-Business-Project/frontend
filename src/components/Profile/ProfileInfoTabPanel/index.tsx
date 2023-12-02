import { styled } from '@mui/material';
import { TabPanel, TabPanelProps } from '@mui/lab';
import ProfileInfoForm from './ProfileInfoForm';
import ProfilePhotoUpload from './ProfilePhotoUpload';

export default function ProfileInfoTabPanel({ value, ...props }: TabPanelProps) {
  return (
    <StyledTabPanel value={value} {...props}>
      <ProfileInfoForm />
      <ProfilePhotoUpload />
    </StyledTabPanel>
  );
}

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: '0',
  display: 'flex',
  justifyContent: 'space-between',
}));
