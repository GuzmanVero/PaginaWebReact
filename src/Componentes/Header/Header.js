import React from 'react';
import logoC from './cropped-tweb.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    return (
      <header>
        <div className="logo">
          <img width="110" height="117" className="logo" src={logoC} alt="LogoEmpresa" />
          <p><h2>Citas Medicas </h2>
          <br/>Los mejores servicios y atencion medica </p>      
        </div> 
        <div className="menuheader">
          <table className="menu" border="1" cellpadding="5">
            <tr>
            <td><Link to="/" className="enlaceheader" style={{textDecoration:"none"}}>Inicio</Link></td>
            <td><Link to="/About" className="enlaceheader" style={{textDecoration:"none"}}>Nosotros</Link></td>
            <td><Link to="/Services" className="enlaceheader" style={{textDecoration:"none"}}>Servicios</Link></td>
            <td><Link to="/Contact" className="enlaceheader" style={{textDecoration:"none"}}>Contacto</Link></td>
            {/*<td><Link to="/SignUp" className="enlaceheader" style={{textDecoration:"none"}}>Registro</Link></td>*/}
            <td><SigupButton/></td>
            <td><LoginButton/></td>
          </tr>
        </table>           
      </div>   
       
    </header>
  );
}

export const SigupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className='btnlogin' onClick={() => loginWithRedirect({ redirectUri: window.location.origin + '/Citas' })}>
      Registro
    </button>
  );
};
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className='btnlogin' onClick={() => loginWithRedirect({ redirectUri: window.location.origin + '/Citas' })}>
      Iniciar sesion
    </button>
  );
};

export default Header;