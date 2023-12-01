import * as React from 'react';
import { Box, ListItemIcon, Tab, Tabs, styled, tabsClasses } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import MainCalcLayout from '@/components/MainCalcLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import { CalcContext } from '@/core/contexts/Calc.context';
import FixedCostsCalcTable from '@/components/FixedCostsCalcComponent';
import GreenCustomButton from '@/components/ui/GreenCustomButton';
import { redirect } from 'next/navigation';
import PopupLayout from '@/components/ui/PopUpLayout';
import PopUpFolders from '@/components/PopUpComponents/PopUpContent';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcData } from '@/core/hooks/useCalcData';

export default function CalcTabs() {
  const [value, setValue] = React.useState('1');
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const { token } = useAuth();
  const { calcFolders } = useCalcFolders(token);
  const { calcData } = useCalcData(token);

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setIsPending(calcFolders.pending || calcData.pending);
  }, [calcFolders]);

  const calcContext = React.useContext(CalcContext);

  if (!calcContext) {
    redirect('/404');
  }

  const { calcDataContext } = calcContext;

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
            {Object.keys(calcDataContext).map((key) => (
              <CalcInput key={key} {...calcDataContext[key]} name={key} />
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
        isPending={isPending}
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
