import * as React from 'react';
import { Table, TableBody, TableContainer, Paper, TableRow, TableCell, Box } from '@mui/material';
import { Row } from './Row';
import GreenCustomButton from '../ui/GreenCustomButton';
import { PieChartExample } from './PieChart';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalculations } from '@/core/hooks/useCalculations';

export default function FixedCostsCalcTable() {
  const { token } = useAuth();
  const { fixedCostsData, updateCalcData, updateFixedCosts } = useCalculations(token);

  const [fixedCostsSumm, setFixedCostsSumm] = React.useState(0);

  React.useEffect(() => {
    const newFixedCostsSumm = fixedCostsData.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    setFixedCostsSumm(newFixedCostsSumm);
  }, [fixedCostsData]);

  return (
    <>
      <TableContainer sx={{ bgcolor: 'secondary.dark', padding: '50px' }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {fixedCostsData &&
              Object.values(fixedCostsData).map((row, index) => (
                <Row key={index} row={row} rowIndex={index} updateFixedCostsData={updateFixedCosts} />
              ))}
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
        <GreenCustomButton
          handleClick={() => updateCalcData('FixedCosts', fixedCostsSumm)}
          buttonText={'Перенести розрахунки в калькулятор бізнесу'}
        />
      </Box>
    </>
  );
}
