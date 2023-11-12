import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography, styled } from '@mui/material';
import { FixedCostsContext } from '@/core/contexts/FixedCosts.context';
import { FixedCostsData } from '@/core/models/FixedCosts.model';

function Row(props: { row: FixedCostsData }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.name}
        </TableCell>
        <TableCell component="th" align="right">
          {row.value}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2} sx={{ borderBottom: 'none', margin: 0, padding: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: '15px 0 15px 60px' }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {row.columnNames.map((columnName, index) => (
                      <TableCellHead align={index == 0 ? 'left' : 'right'} key={index}>
                        {columnName}
                      </TableCellHead>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.data.map((historyRow, index) => (
                    <TableRow key={index}>
                      {row.columnNames.map((columnName, colIndex) => (
                        <TableCell align={colIndex == 0 ? 'left' : 'right'} key={colIndex}>
                          {historyRow[columnName]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function FixedCostsCalaTable() {
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


const TableCellHead = styled(TableCell)`
  border-bottom: 14px;
  opacity: 50%;
`;
