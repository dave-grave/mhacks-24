import React from 'react'
import  {AppBar, Typography, Toolbar, Button} from  "@mui/material";
import { Logout } from './Logout';
export const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography sx = {{flexgrow:1}}>Locking In</Typography>
          <Button color="error" variant="contained" to="/login" component={Link}>Login</Button>
          <Button color="success" variant="contained" to="/signup" component={Link}>Signup</Button>
          <Logout/>
        </Toolbar>
      </AppBar>
    </>
  );
}
