import * as React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Typography,
  TableRow,
  TableCell,
  styled,
  Button,
  Box,
} from '@mui/material';
import { FixedCostsContext } from '@/core/contexts/FixedCosts.context';
import { Row } from './Row';
import { CalcContext } from '@/core/contexts/Calc.context';
import GreenCustomButton from '../ui/GreenCustomButton';
import { redirect } from 'next/navigation';

export default function FixedCostsCalcTable() {
  const fixedCostsContext = React.useContext(FixedCostsContext);
  const calcContext = React.useContext(CalcContext);
  const [fixedCostsSumm, setFixedCostsSumm] = React.useState(0);

  if (!fixedCostsContext || !calcContext) {
    redirect('/404');
  }

  const { data } = fixedCostsContext;
  const { updateContext } = calcContext;

  React.useEffect(() => {
    const newFixedCostsSumm = data.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    setFixedCostsSumm(newFixedCostsSumm);
  }, [data]);

  const handleSave = () => {
    updateContext('FixedCosts', fixedCostsSumm);
  };

  return (
    <>
      <TableContainer sx={{ bgcolor: 'secondary.dark', padding: '50px' }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {data && Object.values(data).map((row, index) => <Row key={index} row={row} />)}
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
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <GreenCustomButton handleClick={handleSave} buttonText={'Застосувати розрахунки'} />
      </Box>
    </>
  );
}
