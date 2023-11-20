import * as React from 'react';
import { Table, TableBody, TableContainer, Paper, Typography } from '@mui/material';
import { FixedCostsContext } from '@/core/contexts/FixedCosts.context';
import { Row } from './Row';

export default function FixedCostsCalcTable() {
  const fixedCostsContext = React.useContext(FixedCostsContext);

  if (!fixedCostsContext) {
    return <Typography title="Щось пішло не так..." />;
  }

  const { data } = fixedCostsContext;

  return (
    <TableContainer sx={{ bgcolor: 'secondary.main', padding: '50px' }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>{data && Object.values(data).map((row, index) => <Row key={index} row={row} />)}</TableBody>
      </Table>
    </TableContainer>
  );
}
