import MainCalcLayout from '@/components/MainCalcLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import { CalcContext } from '@/core/contexts/Calc.context';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FixedCostsCalcTable from '@/components/FixedCostsCalcComponent';

export default function CalcTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const calcContext = useContext(CalcContext);

  if (!calcContext) {
    return <Typography title="Щось пішло не так..." />;
  }

  const { data } = calcContext;

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Калькулятор бізнесу" value="1" />
            <Tab label="Калькулятор постійних витрат" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MainCalcLayout>
            {Object.keys(data).map((key) => (
              <CalcInput key={key} {...data[key]} />
            ))}
          </MainCalcLayout>
        </TabPanel>
        <TabPanel value="2">
          <FixedCostsCalcTable />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
