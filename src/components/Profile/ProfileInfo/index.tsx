import { useState } from 'react';
import { Box, Typography, styled, Tabs, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import ProfileInfoTabPanel from '../ProfileInfoTabPanel';
import SavedDataTabPanel from '../SavedDataTabPanel';

const tabs = [
  { label: 'Особиста інформація', value: '0' },
  { label: 'Збережені данні', value: '1' },
];

export default function ProfileInfo() {
  const [value, setValue] = useState<string>('0');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue('' + newValue);
  };

  return (
    <BoxStyled>
      <StyledTitle variant="h4">Ваш профіль</StyledTitle>
      <TabContext value={value}>
        <StyledTabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
          value={+value}
          onChange={handleChange}
        >
          {tabs.map(({ label, value }) => (
            <StyledTab key={value} label={label} />
          ))}
        </StyledTabs>
        <ProfileInfoTabPanel value={'0'} />
        <SavedDataTabPanel value={'1'} />
      </TabContext>
    </BoxStyled>
  );
}

const BoxStyled = styled(Box)(() => ({
  paddingTop: '64px',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  margin: '4.375rem 3.125rem 3.125rem',
}));

const StyledTabs = styled(Tabs)(() => ({
  '&.MuiTabs-root': {
    boxShadow: 'inset 0px -2px 0px 0px rgb(65 110 142 / 30%)',
    maxWidth: '935px',
    paddingLeft: '4.375rem',
    marginBottom: '4.375rem',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'rgb(65 110 142 / 100%)',
  },
}));

const StyledTab = styled(Tab)(() => ({
  color: '#2E2C34',
  '&.Mui-selected': {
    color: '#2E2C34',
  },
}));
