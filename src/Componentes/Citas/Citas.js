import React from 'react';

function Citas() {
    return(
      <React.Fragment>
         <ComTitleCitas/>
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

export default Citas;