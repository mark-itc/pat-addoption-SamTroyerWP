import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const  Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position='sticky'>
        <Toolbar>
        <NavLink to='/' sx={{color: '#fff'}}>
        <Typography>
            <PetsIcon/>
            </Typography>
        </NavLink>
            <Tabs 
                sx={{ ml: "auto" }}
                textColor='inherit' 
                indicatorColor='primary' 
                value={value} 
                onChange={(e, val) => 
                    setValue(val)}
            >
                <Tab LinkComponent={NavLink} to='/add' label='Add Pet' />
                <Tab LinkComponent={NavLink} to='/pets' label='Pets' />
                <Tab LinkComponent={NavLink} to='/about' label='About Us' />
                { isLoggedIn && <Tab LinkComponent={NavLink} to='/' label='Logout' />
                }
            </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;