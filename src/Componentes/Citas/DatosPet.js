import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Citas.css';

export default function ComFormPet() {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='FormPet'>
        <br/><br/>
        <TextField
            required
            id="outlined-required"
            label="Nombre Required"
            defaultValue=""
        />
          <TextField
            required
            id="outlined-required"
            label="Especie Required"
            defaultValue=""
        /><br/>
          <TextField
            required
            id="outlined-required"
            label="Raza Required"
            defaultValue=""
        />
        <TextField
            helperText="Formato dd/mm/yyyy"
            id="demo-helper-text-aligned"
            label="Fecha de nacimiento"
        />
        <br/><br/> 
        </div>
      </Box>
    );
  }