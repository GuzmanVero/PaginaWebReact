import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cuenta.css';
import { Link } from 'react-router-dom';

function Cuenta(){
  return(
    <React.Fragment>
       <ComTitleCuenta/>
       <ComBodyCuenta/>
    </React.Fragment>
  );
}

function ComTitleCuenta(){
  return(
    <section className="titulocuenta">
      <h1>Cuenta</h1>
    </section>
  );
}

function ComBodyCuenta(){
  return(
    <section>
    <div className="conCuenta">
      <div className="formularioR">
        <table style={{ height: '300px', width: '300px' }}>
          <tbody>
            <tr>
              <td>
                <form action="">
                  <label htmlFor="nameuser">Nombre de usuario: </label><br/><br/>
                  <input 
                    type="text" 
                    id="nameuser" 
                    name="nameuser" 
                    className="inputC" /><br/><br/>

                  <label htmlFor="name">Nombre: </label><br/><br/>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="inputC" /><br/><br/>

                  <label htmlFor="lastname">Apellido: </label><br/><br/>
                  <input 
                    type="text"
                    id="lastname" 
                    name="lastname" 
                    className="inputC" /><br/><br/>

                  <label htmlFor="address">Direccion de correo electronico: </label><br/><br/>
                  <input 
                    type="email"
                    id="address" 
                    name="address" 
                    className="inputC"/><br/><br/>

                  
                  <button>
                  <Link to="/Citas" className="enlacebn" style={{textDecoration:"none"}}>Agendar cita</Link>
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br/><br/><br/>
  </section>
  );
}

export default Cuenta;
