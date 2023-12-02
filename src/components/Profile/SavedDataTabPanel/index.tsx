import { TabPanel, TabPanelProps } from '@mui/lab';

import FoldersList from './FoldersList';
import { styled } from '@mui/material';

export default function SavedDataTabPanel({ value, ...props }: TabPanelProps) {
  return (
    <StyledTabPanel value={value} {...props}>
      <FoldersList />
    </StyledTabPanel>
  );
}

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: '0',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '-1.25rem',
}));
