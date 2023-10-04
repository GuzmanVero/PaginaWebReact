import React from 'react';
import './Registro.css'
//import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

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

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Iniciar sesion</button>

};

function ComFormularioRegistro(){
  const [nameuser, setNameuser] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (nameuser && name && lastname && email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [nameuser, name, lastname, email, password]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { nameuser, name, lastname, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
  }

  return(
    <section>
    <div className="conForm">
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
                    className="input" /><br/><br/>

                  <label htmlFor="name">Nombre: </label><br/><br/>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="input" /><br/><br/>

                  <label htmlFor="lastname">Apellido: </label><br/><br/>
                  <input 
                    type="text"
                    id="lastname" 
                    name="lastname" 
                    className="input" /><br/><br/>

                  <label htmlFor="address">Direccion de correo electronico: </label><br/><br/>
                  <input 
                    type="email"
                    id="address" 
                    name="address" 
                    className="input"  /><br/><br/>

                  <label htmlFor="password">Contraseña: </label><br /><br />
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="input" /><br /><br />
                  
                  logo faces y google<br /><br />
                  
                  <input 
                    type="button" 
                    value="Registro" 
                    disabled={isButtonDisabled} 
                    onClick={() => {
                        if (isButtonDisabled) {
                            navigate('/Citas');}}} />

                  <LoginButton/>
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

export default SingUp;