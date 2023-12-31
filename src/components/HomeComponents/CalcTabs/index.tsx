import * as React from 'react';
import { Box, Breadcrumbs, Tab, Tabs, Typography, styled, tabsClasses } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import MainCalcLayout from '@/components/MainCalcLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import FixedCostsCalcTable from '@/components/FixedCostsCalcComponent';
import GreenCustomButton from '@/components/ui/GreenCustomButton';
import PopupLayoutWithoutActions from '@/components/ui/PopUpLayout/PopupLayoutWithoutActions';
import PopUpContent from '@/components/PopUpComponents/PopUpContent';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalculations } from '@/core/hooks/useCalculations';
import { FieldName, isCalculationsData } from '@/core/models/Calculations.model';
import { HelpButton } from '@/components/HelpButton';
import SyncIcon from '@mui/icons-material/Sync';
import { useCalcData } from '@/core/hooks/useCalcData';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CalcTabs() {
  const [value, setValue] = React.useState('1');
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const { token } = useAuth();
  const { calculations, updateCalcData } = useCalculations(token);
  const { calcFolders } = useCalcFolders(token);
  const { patchData } = useCalcData(token);

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSaveCalcInfo = () => {
    setOpenPopUp(true);
  };

  const handleSyncCalcInfo = () => {
    if (isCalculationsData(calculations.data)) {
      const { parentFolderId, id, name, data, fixedCosts } = calculations.data;
      patchData(parentFolderId, id, name, data, fixedCosts);
    }
  };

  const showBreadcrumbs = () => {
    if (calcFolders.data && isCalculationsData(calculations.data))
      for (const folder of calcFolders.data) {
        if (folder.id === calculations.data.parentFolderId) {
          return (
            <Breadcrumbs sx={{ margin: '0 0 30px 15px' }} separator={<NavigateNextIcon fontSize="small" />}>
              <Typography>{folder.name}</Typography>
              <Typography>{calculations.data.name}</Typography>
            </Breadcrumbs>
          );
        }
      }
    return null;
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {showBreadcrumbs()}
      <TabContext value={value}>
        <StyledWrapperBox>
          <CustomTabs onChange={handleChange} value={value} variant="scrollable" allowScrollButtonsMobile>
            <Tab label="Калькулятор бізнесу" value="1" />
            <Tab label="Калькулятор постійних витрат" value="2" />
          </CustomTabs>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HelpButton />
            <StyledTypography color="text.secondary">Потрібна допомога?</StyledTypography>
          </Box>
        </StyledWrapperBox>
        <TabPanel value="1">
          {calculations.data && (
            <MainCalcLayout>
              {Object.keys(calculations.data.data).map((key) => (
                <CalcInput
                  key={key}
                  {...calculations.data.data[key as FieldName]}
                  disallowNegativeNumbers={key === 'DesiredProductionPlan'}
                  defaultText={'Не реально'}
                  updateCalcData={updateCalcData}
                  name={key as FieldName}
                />
              ))}
            </MainCalcLayout>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
            <GreenCustomButton handleClick={handleSaveCalcInfo}>Зберегти нові розрахунки</GreenCustomButton>
            {isCalculationsData(calculations.data) && (
              <GreenCustomButton handleClick={handleSyncCalcInfo}>
                <ButtonStyledTypography>
                  Синхронізувати <SyncIcon sx={{ ml: '5px' }} />
                </ButtonStyledTypography>
              </GreenCustomButton>
            )}
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <FixedCostsCalcTable />
        </TabPanel>
      </TabContext>
      <PopupLayoutWithoutActions
        handleClose={handleClosePopUp}
        open={openPopUp}
        title="Збереження розрахунків"
        isPending={calculations.pending}
      >
        <PopUpContent />
      </PopupLayoutWithoutActions>
    </Box>
  );
}

const CustomTabs = styled(Tabs)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: '100%',
  [`& .${tabsClasses.scrollButtons}`]: {
    '&.Mui-disabled': { opacity: 0.3 },
  },
}));

const StyledWrapperBox = styled(Box)(({ theme }) => ({
  borderBottom: 1,
  borderColor: 'divider',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: ' column-reverse',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const ButtonStyledTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    svg: {
      transform: 'rotate(360deg)',
    },
  },
  '& svg': {
    transition: 'transform 0.8s ease-in-out',
    transform: 'rotate(0deg)',
  },
}));
