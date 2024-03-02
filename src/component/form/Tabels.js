import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 function BasicTable({title,rows,titles}) {

  console.log('render')
   
  return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{title}</TableCell>
            {titles?.map((title)=>
            <TableCell key={title} align="right">{title}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (

            <TableRow
              key={row?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
    
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.tbien}</TableCell>
              <TableCell align="right">{row?.bien}</TableCell>
              <TableCell align="right">{row?.satisfaisant}</TableCell>
              <TableCell align="right">{row?.suffisant}</TableCell>
              <TableCell align="right">{row?.insuffisant}</TableCell>
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(BasicTable)