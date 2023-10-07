import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulario';
import ComFormStepper from './Formulario';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Citas() {
    return(
      <div>
        <div>
        <React.Fragment>
          <ComTitleCitas/><br/>
          <Container>
          <Box sx={{ bgcolor: '#cfe8fc'}} style={{padding:"30px 30px 30px 30px"}}>
          <ComFormStepper/>
          </Box>
          </Container><br/><br/>
          
        </React.Fragment>
        </div>
        <div className='btn'>
          <ComCuenta/>
        </div>
      </div>
    );
}

function ComTitleCitas(){
    return(
      <section className="titulocitas">
       <br/> <h1>Agenda tu cita aquí</h1>
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
      <button onClick={handleButtonClick} className='btnCuenta'>
        Cuenta
      </button>
    );
}
  
export default Citas;