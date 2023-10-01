import React from 'react';
import './Registro.css'


function SingUp() {
  return(
    <React.Fragment>
      <ComTitleRegistro/>
      <ComFormularioRegistro/>
      {/**/}
  </React.Fragment>
  );
}

function ComTitleRegistro(){
  return(
    <section className="tituloregistro">
      <h1>Registro</h1>
    </section>
  );
}

function ComFormularioRegistro(){
  return(
    <section>
    <div className="conForm">
      <div className="formularioR">
        <table style={{ height: '300px', width: '300px' }}>
          <tbody>
            <tr>
              <td>
                <form action="">
                  <label htmlFor="nameuser">Nombre de usuario: </label><br /><br />
                  <input type="text" id="nameuser" name="nameuser" className="input" /><br /><br />
                  <label htmlFor="name">Nombre: </label><br /><br />
                  <input type="text" id="name" name="name" className="input" /><br /><br />
                  <label htmlFor="lastname">Apellido: </label><br /><br />
                  <input type="text" id="lastname" name="lastname" className="input" /><br /><br />
                  <label htmlFor="address">Direccion de correo electronico: </label><br /><br />
                  <input type="email" id="address" name="address" className="input"  /><br /><br />
                  <label htmlFor="password">Contraseña: </label><br /><br />
                  <input type="password" id="password" name="password" className="input" /><br /><br />
                  <label htmlFor="passwordconfirm">Confirmar contraseña: </label><br /><br />
                  <input type="password" id="passwordconfirm" name="passwordconfirm" className="input" /><br /><br />
                  logo faces y google<br /><br />
                  <input type="submit" /*onClick={registrase}*/ value="Registrar" />
                  <button>
                      <a href="iniciarsesion.html" className="btinicio" style={{ textDecoration: 'none' }}>iniciar sesion</a>
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  );
}

export default SingUp;