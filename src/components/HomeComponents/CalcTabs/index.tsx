import * as React from 'react';
import { Box, Tab, Tabs, Typography, styled, tabsClasses } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import MainCalcLayout from '@/components/MainCalcLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import { CalcContext } from '@/core/contexts/Calc.context';
import FixedCostsCalcTable from '@/components/FixedCostsCalcComponent';
import GreenCustomButton from '@/components/ui/GreenCustomButton';
import { redirect } from 'next/navigation';
import PopupLayoutWithoutActions from '@/components/ui/PopUpLayout/PopupLayoutWithoutActions';
import PopUpFolders from '@/components/PopUpComponents/PopUpContent';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcData } from '@/core/hooks/useCalcData';
import { HelpButton } from '@/components/HelpButton';

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
        <StyledWrapperBox>
          <CustomTabs onChange={handleChange} value={value} variant="scrollable" allowScrollButtonsMobile>
            <Tab label="Калькулятор бізнесу" value="1" />
            <Tab label="Калькулятор постійних витрат" value="2" />
          </CustomTabs>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HelpButton />
            <StyledTypography color="text.secondary">
              Потрібна допомога?
            </StyledTypography>
          </Box>
        </StyledWrapperBox>
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
      <PopupLayoutWithoutActions
        handleClose={handleClosePopUp}
        open={openPopUp}
        title="Збереження розрахунків"
        isPending={isPending}
      >
        <PopUpFolders />
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
    display:'none'
  },
}));


