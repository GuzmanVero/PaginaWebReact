import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Citas.css';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
        /><br/>
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
        <ComDatePet/>
        <br/><br/> 
        </div>
      </Box>
    );
  }

function ComDatePet() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} className='datepet'>
        <DemoContainer
          components={[
            'DatePicker',
          ]}
        >
          <DemoItem label="Fecha de nacimiento">
            <DatePicker defaultValue={dayjs('2023-10-01')} />
          </DemoItem>
  
        </DemoContainer>
      </LocalizationProvider>
    );
  }