import * as React from 'react';
import { Box, Tab, Tabs, styled, tabsClasses } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import MainCalcLayout from '@/components/MainCalcLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import FixedCostsCalcTable from '@/components/FixedCostsCalcComponent';
import GreenCustomButton from '@/components/ui/GreenCustomButton';
import PopupLayoutWithoutActions from '@/components/ui/PopUpLayout/PopupLayoutWithoutActions';
import PopUpFolders from '@/components/PopUpComponents/PopUpContent';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalculations } from '@/core/hooks/useCalculations';
import { FieldName } from '@/core/models/Calculations.model';

export default function CalcTabs() {
  const [value, setValue] = React.useState('1');
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const { token } = useAuth();
  const { calculations, calcData: calculationData, updateCalcData } = useCalculations(token);

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSaveCalcInfo = () => {
    setOpenPopUp(true);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <CustomTabs onChange={handleChange} value={value} variant="scrollable" allowScrollButtonsMobile>
            <Tab label="Калькулятор бізнесу" value="1" />
            <Tab label="Калькулятор постійних витрат" value="2" />
          </CustomTabs>
        </Box>
        <TabPanel value="1">
          <MainCalcLayout>
            {Object.keys(calculationData).map((key) => (
              <CalcInput
                key={key}
                {...calculationData[key as FieldName]}
                updateCalcData={updateCalcData}
                name={key as FieldName}
              />
            ))}
          </MainCalcLayout>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
            <GreenCustomButton handleClick={handleSaveCalcInfo} buttonText={'Зберегти дані'} />
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
        <PopUpFolders />
      </PopupLayoutWithoutActions>
    </Box>
  );
}

const CustomTabs = styled(Tabs)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${tabsClasses.scrollButtons}`]: {
    '&.Mui-disabled': { opacity: 0.3 },
  },
}));
