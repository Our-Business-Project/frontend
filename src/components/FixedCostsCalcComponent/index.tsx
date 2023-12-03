import * as React from 'react';
import { Table, TableBody, TableContainer, Paper, TableRow, TableCell, Box } from '@mui/material';
import { FixedCostsContext } from '@/core/contexts/FixedCosts.context';
import { Row } from './Row';
import { CalcContext } from '@/core/contexts/Calc.context';
import GreenCustomButton from '../ui/GreenCustomButton';
import { redirect } from 'next/navigation';
import { PieChartExample } from './PieChart';

export default function FixedCostsCalcTable() {
  const fixedCostsContext = React.useContext(FixedCostsContext);
  const calcContext = React.useContext(CalcContext);
  const [fixedCostsSumm, setFixedCostsSumm] = React.useState(0);

  if (!fixedCostsContext || !calcContext) {
    redirect('/404');
  }

  const { fixedCostsData } = fixedCostsContext;
  const { updateCalContextData } = calcContext;

  React.useEffect(() => {
    const newFixedCostsSumm = fixedCostsData.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    setFixedCostsSumm(newFixedCostsSumm);
  }, [fixedCostsData]);

  const handleSave = () => {
    updateCalContextData('FixedCosts', fixedCostsSumm);
  };

  return (
    <>
      <TableContainer sx={{ bgcolor: 'secondary.dark', padding: '50px' }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {fixedCostsData &&
              Object.values(fixedCostsData).map((row, index) => <Row key={index} row={row} rowIndex={index} />)}
            <TableRow>
              <TableCell component="th" scope="row">
                Загальні витрати
              </TableCell>
              <TableCell sx={{ paddingLeft: '27px', fontSize: '14px' }} align="left">
                {fixedCostsSumm}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {fixedCostsData.some((item) => item.value > 1) && <PieChartExample data={fixedCostsData} />}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <GreenCustomButton handleClick={handleSave} buttonText={'Перенести розрахунки в калькулятор бізнесу'} />
      </Box>
    </>
  );
}
