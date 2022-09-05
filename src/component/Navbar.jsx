import { AppBar, Toolbar,styled, Typography } from '@mui/material'
import TornadoIcon from '@mui/icons-material/Tornado';
import React from 'react'
const StyledToolbar=styled(Toolbar)(
    {
        display:'flex',
        justifyContent:'space-between',
    }
);
const Navbar = () => {
  return (
    <AppBar position='sticky'>
       <StyledToolbar>
        <TornadoIcon  />
        <Typography variant='h5'>To-Do App</Typography>
        <TornadoIcon />
       </StyledToolbar>
    </AppBar>
  ) 
}

export default Navbar