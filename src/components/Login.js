import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';




const Login = () => {
  return (
   
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
       

            <Grid container spacing={2} >
          

  <Grid item xs={4}>
 
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h3" textAlign={'center'} marginTop={'5px'} color={''}>
 CRUD 
</Typography>
  <form >
   
    <Box display="flex" 
    flexDirection="column"
        alignItems={"center"}
      justifyContent={"center"}
       margin={"auto"}
       marginTop={5}
       padding={3}
       borderRadius={5}
       boxShadow={"5px 5px 10px #ccc"}
        sx={{ bgcolor: '#cfe8fc', height: '100%'}} 
        
        >
 
     
        <Typography variant="h3" textAlign={'center'} marginTop={'10px'}>
  Login
</Typography>
<br/>
<TextField
          required
         id="standard-required"
       
         placeholder='Email'
          variant="standard"
          height='20px'
          
          
        />
        <br/>
        <TextField
      
          id="standard-password-input"
      
          placeholder='Password'
          type="password"
          autoComplete="current-password"
         variant="standard"
        />
        <br/>
  <Button color="primary" size="small"variant="contained">Login</Button>
<br/>
<Typography variant="p" textAlign={'center'} marginTop={'10px'}>
  Don't have an account?
 <Button color='warning'>Register</Button></Typography>
    </Box>
  
      
    
      </form>
 
  </Grid>
  <Grid item xs={4}>
  
  </Grid>
</Grid>
          </Container>
        </React.Fragment>
      );
    }
  


export default Login