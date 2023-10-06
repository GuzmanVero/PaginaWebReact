import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulario';
import ComFormStepper from './Formulario';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Citas() {
    return(
      <React.Fragment>
        <ComTitleCitas/>
        <Container>
        <Box sx={{ bgcolor: '#cfe8fc'}} style={{padding:"30px 30px 30px 30px"}}>
        <ComFormStepper/>
        </Box>
        </Container><br/><br/>
        <ComCuenta/>
      </React.Fragment>
    );
}

function ComTitleCitas(){
    return(
      <section className="titulocitas">
        <h1>Agenda tu cita aquí</h1>
        <br/><br/><br/>
      </section>
    );
  }

  function ComCuenta() {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/Cuenta');
    };
  
    return (
      <button onClick={handleButtonClick}>
        Cuenta
      </button>
    );
}
  
export default Citas;