import * as React from 'react';
import { Box, ListItemIcon, Tab, Tabs, styled, tabsClasses } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import MainCalcLayout from '@/components/MainCalcLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import { CalcContext } from '@/core/contexts/Calc.context';
import FixedCostsCalcTable from '@/components/FixedCostsCalcComponent';
import GreenCustomButton from '@/components/ui/GreenCustomButton';
import { redirect } from 'next/navigation';
import PopupLayout from '@/components/PopUpComponents/PopupLayout';
import PopUpFolders from '@/components/PopUpComponents/PopupLayout/PopUpFolders';

export default function CalcTabs() {
  const [value, setValue] = React.useState('1');
  const [openPopUp, setOpenPopUp] = React.useState(false);

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const calcContext = React.useContext(CalcContext);

  if (!calcContext) {
    redirect('/404');
  }

  const { data } = calcContext;

  const handleSaveCalcInfo = () => {
    setOpenPopUp(true);
    // функционал отправки на бек
    console.log(calcContext);
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
            {Object.keys(data).map((key) => (
              <CalcInput key={key} {...data[key]} />
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
      <PopupLayout
        handleClose={handleClosePopUp}
        open={openPopUp}
        title="Збереження розрахунків"
        successBtnText="Зберегти"
      >
        <PopUpFolders />
      </PopupLayout>
    </Box>
  );
}

const CustomTabs = styled(Tabs)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${tabsClasses.scrollButtons}`]: {
    '&.Mui-disabled': { opacity: 0.3 },
  },
}));
