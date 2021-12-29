import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './styles.css'
import logo from '../images/zoomcar-logo.png'


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Typography style={{ flex: 1 }} >
            <img src={logo} alt="logo here" height={80} width={160} />
          </Typography>
          <div className='host'>
            <h3>Become a host</h3>
          </div>
          <div className='zms'>
            <h3>ZMS</h3>
          </div>
          <div className='rightside'>
            <Button color="inherit">Login/Signup</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar;
