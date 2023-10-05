import React from 'react';
import { useNavigate } from 'react-router-dom';

function Citas() {
    return(
      <React.Fragment>
         <ComTitleCitas/>
         <ComCuenta/>
      </React.Fragment>
    );
}

function ComTitleCitas(){
    return(
      <section className="titulocitas">
        <h1>Agenda tu cita aquí</h1>
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