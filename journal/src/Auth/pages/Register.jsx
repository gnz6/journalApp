import React from 'react'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from '../layout/AuthLayout'

export const Register = () => {
  return (

    <AuthLayout title={"Register"}>

<form>

<Grid
  container
>
<Grid item>
    <TextField
      xs={12}
      sx={{ mt: 2 }}
      label="Name"
      type={"text"}
      placeholder="Full Name"
      fullWidth
      
    />
  </Grid>

  <Grid item>
    <TextField
      xs={12}
      sx={{ mt: 2 }}
      label="Correo"
      type={"email"}
      placeholder="email@google.com"
      fullWidth
      
    />
  </Grid>

  <Grid item>
    <TextField
      xs={12}
      sx={{ mt: 2 }}
      label="Password"
      type={"password"}
      placeholder="password"
      fullWidth
    />
  </Grid>
  </Grid>

  <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
    <Grid item xs={12} sm={6}>
      <Button variant='contained' fullWidth >
        Create Account
      </Button>
    </Grid>


  </Grid>

  <Grid container direction="row" justifyContent={"end"}>
    <Link component={RouterLink} color="inherit" to="/auth/login">
       <Typography>Have an account? Login here</Typography>
    </Link>
  </Grid>

</form>


    </AuthLayout>
      )
}
