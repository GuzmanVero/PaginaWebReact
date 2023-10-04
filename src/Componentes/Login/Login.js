import React from 'react';
import './Iniciarsesion.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  return (
    <React.Fragment>
      <ComTitleLogin/>
      <ComFormularioLogin/>
      {/* */}
    </React.Fragment>
  );
}

function ComTitleLogin(){
  return(
    <section className="titulologin">
      <h1>Inicio de sesion</h1>
    </section>
  );
}



function ComFormularioLogin(){
  const navigate = useNavigate();
  return(
    <section>
    <div className="conFormlogin">
      <div className="formulariologin">
        <table style={{ height: '300px', width: '300px' }}>
          <tbody>
            <tr>
              <td>
                <form action="">
                  <label htmlFor="nameuser">Nombre de usuario o correo electronico </label><br /><br />
                  <input 
                    type="text" 
                    id="nameuser" 
                    name="nameuser"
                    className='login'/><br/><br/>
                    
                  <label htmlFor="password">Contraseña </label><br/><br/>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className='login' /><br/><br/>

                  logo faces y google <br/> <br/>
                  <input 
                      type="button" 
                      value="Iniciar sesion" 
                      onClick={() => navigate('/Citas')} 
                      className="enlacebn" 
                      style={{textDecoration:"none"}}/>
                  <input 
                      type="button" 
                      value="Registro" 
                      onClick={() => navigate('/SignUp')} 
                      className="enlacebn" 
                      style={{textDecoration:"none"}}/>
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
export default Login;