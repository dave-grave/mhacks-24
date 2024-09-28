import React from "react";
import {AppBar, Typography, Toolbar, Button} from "@mui/material";
const navbar = () => {
    return (
      <>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" sx = {{flexgrow:1}}>Fitness APp</Typography>
            <Button variant="contained" to="/login">Login</Button>
            <Button variant="contained" to="/signup">Signup</Button>
            <Button variant="contained" to="/logout">Logout</Button>
          </Toolbar>
        </AppBar>
      </>
    );
};
