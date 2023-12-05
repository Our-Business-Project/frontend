import * as React from 'react';
import { Table, TableBody, TableContainer, Paper, TableRow, TableCell, Box } from '@mui/material';
import { Row } from './Row';
import GreenCustomButton from '../ui/GreenCustomButton';
import { PieChartExample } from './PieChart';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalculations } from '@/core/hooks/useCalculations';

export default function FixedCostsCalcTable() {
  const { token } = useAuth();
  const { calculations, updateCalcData, updateFixedCosts } = useCalculations(token);

  const [fixedCostsSumm, setFixedCostsSumm] = React.useState(0);

  React.useEffect(() => {
    const newFixedCostsSumm = calculations.data.fixedCosts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );
    setFixedCostsSumm(newFixedCostsSumm);
  }, [calculations.data.fixedCosts]);

  return (
    <>
      <TableContainer sx={{ bgcolor: 'secondary.dark', padding: '50px' }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {Object.values(calculations.data.fixedCosts).map((row, index) => (
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
      {calculations.data.fixedCosts.some((item) => item.value > 1) && (
        <PieChartExample data={calculations.data.fixedCosts} />
      )}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <GreenCustomButton handleClick={() => updateCalcData('FixedCosts', fixedCostsSumm)}>
          Перенести розрахунки в калькулятор бізнесу
        </GreenCustomButton>
      </Box>
    </>
  );
}
