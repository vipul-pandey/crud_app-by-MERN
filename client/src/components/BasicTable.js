import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    table: {
      minWidth: 370,
    },
    mainTable:{
      margin:'10px auto',
      width:'70%'
    }
  });

function BasicTable({field, handleDelete, render }) {
    const classes = useStyles();

    return (
      <TableContainer component={Paper} className
      ={classes.mainTable}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className='table-head'>
            <TableRow className='table-row' >
              {/* <TableCell>ID</TableCell> */}
              <TableCell className='table-head-row' align="left">Name</TableCell>
              <TableCell className='table-head-row' align="left">Email</TableCell>
              <TableCell className='table-head-row' align="left">Phone</TableCell>
              <TableCell className='table-head-row' align="left">Gender</TableCell>
              {/* <TableCell className='table-head-row' align="left">Password</TableCell> */}
              <TableCell className='table-head-row' align="center" colSpan="2">Action</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody className='table-body'>
            {field.map((value) => (
              <TableRow key={value._id}>
                {/* <TableCell component="th" scope="row">{value._id}</TableCell> */}
                <TableCell className='data-row' align="left">{value.name}</TableCell>
                <TableCell align="left">{value.email}</TableCell>
                <TableCell align="left">{value.phone}</TableCell>
                <TableCell className='data-row' align="left">{value.gender}</TableCell>
                {/* <TableCell align="left">{value.password}</TableCell> */}
                <TableCell align="left"><Link to={`/update/${value._id}`} > <EditIcon /> </Link></TableCell>
                <TableCell align="right"><Link onClick={(e) => {handleDelete(value._id, e) }} > <DeleteIcon /></Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  export default BasicTable;