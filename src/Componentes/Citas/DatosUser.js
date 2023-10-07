import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Citas.css';

export default function ComFormUser() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='FormUSer'>
      <br/><br/>
      <TextField
          required
          id="outlined-required"
          label="Nombre Required"
          defaultValue=""
        /><br/>
        <TextField
          required
          id="outlined-required"
          label="Apellido Required"
          defaultValue=""
        /><br/>
        <TextField
          id="outlined-number"
          label="Cellphone Number"
          type=""
          InputLabelProps={{
            shrink: true,
          }}
        /><br/>
        <TextField
          required
          id="outlined-required"
          label="Dirreccion Required"
          defaultValue=""
        /><br/>
       <TextField
          id="outlined-required"
          label="Correo Electronico"
          defaultValue=""
        />  <br/>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue=""
        /> <br/><br/> 
      </div>
    </Box>
  );
}
