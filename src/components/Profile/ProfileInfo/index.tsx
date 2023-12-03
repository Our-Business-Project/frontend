import { useState } from 'react';
import { Container, Typography, styled, Tabs, Tab } from '@mui/material';
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
    <ContainerStyled maxWidth="xl">
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
    </ContainerStyled>
  );
}

const ContainerStyled = styled(Container)(() => ({
  padding: '64px 0',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  margin: '4.375rem 0 3.125rem',

  [theme.breakpoints.down('sm')]: {
    margin: '1.375rem 0 2.125rem',
    paddingLeft: '0.625rem',
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '&.MuiTabs-root': {
    boxShadow: 'inset 0px -2px 0px 0px rgb(65 110 142 / 30%)',
    maxWidth: '935px',
    paddingLeft: '4.375rem',
    marginBottom: '4.375rem',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'rgb(65 110 142 / 100%)',
  },

  [theme.breakpoints.down('smmd')]: {
    '&.MuiTabs-root': {
      paddingLeft: '0',
    },
  },
}));

const StyledTab = styled(Tab)(() => ({
  color: '#2E2C34',
  '&.Mui-selected': {
    color: '#2E2C34',
  },
}));
