
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [dataset,setData]=useState([]);
  useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
    setData(res.data);
  })
  },[])

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'aqua' }}>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {dataset.map((row) => (
              <TableRow 
               key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ backgroundColor: 'lightblue' }}>
                  {row.id}
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: 'lightblue' }}>{row.name}</TableCell>
                <TableCell align="right"sx={{ backgroundColor: 'lightblue' }} >{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
   
  );
};


export default Home