import { styled } from '@mui/material';
import { TabPanel, TabPanelProps } from '@mui/lab';
import ProfileInfoForm from './ProfileInfoForm';

export default function ProfileInfoTabPanel({ value, ...props }: TabPanelProps) {
  return (
    <StyledTabPanel value={value} {...props}>
      <ProfileInfoForm />
    </StyledTabPanel>
  );
}

const StyledTabPanel = styled(TabPanel)(() => ({
  paddingLeft: '3.125rem',
}));
