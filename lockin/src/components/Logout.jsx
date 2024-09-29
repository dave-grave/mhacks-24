import React from 'react'
import { Button } from '@mui/material';

const Logout = () => {
  return (
    <Button color="warning"variant="contained" to="/logout" component={Link}>Logout</Button>
  )
}

export default Logout