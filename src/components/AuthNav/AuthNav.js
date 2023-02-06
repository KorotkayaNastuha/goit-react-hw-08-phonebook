import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuth } from "hooks/useAuth"


import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export const AuthNav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { isLoggedIn } = useAuth();
    

   const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
   

     const handleClose = () => {
    setAnchorEl(null);
  };
    return (
      
        <div>
            
            {!isLoggedIn &&(
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle/>
                    
                </IconButton>
            )}
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> <NavLink to="/register">
                            Register
                        </NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/login">
                            Log In
                        </NavLink></MenuItem>
              </Menu>
            
            </div >
        )
                }
    

