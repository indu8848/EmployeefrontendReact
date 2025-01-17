import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'purple' }}>
        <Toolbar>
          
          <Typography variant="h6" align='left' component="div" sx={{ flexGrow: 1 }}>
            Employee Dashboard
          </Typography>
          <Button color="inherit"><Link to={'/'} style={{textDecoration:"none", color:"white"}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/f'} style={{textDecoration:"none", color:"white"}}>Employee Form</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>



  )
}

export default Navbar