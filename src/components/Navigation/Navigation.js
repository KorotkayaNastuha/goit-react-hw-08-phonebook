import { useAuth } from "hooks/useAuth"
import { NavLink } from 'react-router-dom';
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
 

    return (
        <nav>
            <Box sx={{ ml: 'auto' }}>
                <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <NavLink to="/">
                Home
            </NavLink>
          </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
                    </Toolbar>
                    
      </AppBar>
            </Box>  
        </nav>
    )
}