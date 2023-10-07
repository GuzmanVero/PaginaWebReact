import React, {useState} from 'react';
import logoC from './cropped-tweb.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
    return (
      <div className='nav'>
        <div className="logo">
          <img width="110" height="117" className="logo" src={logoC} alt="LogoEmpresa" />
          <p><h2>Citas Medicas </h2>
          <br/>Los mejores servicios y atencion medica </p>      
        </div> 
        <div className={`menuheader ${isOpen && "open"}`}>

          <Link to="/" className="enlaceheader" style={{textDecoration:"none"}}>Inicio</Link>

          <Link to="/About" className="enlaceheader" style={{textDecoration:"none"}}>Nosotros</Link>

          <Link to="/Services" className="enlaceheader" style={{textDecoration:"none"}}>Servicios</Link>

          <Link to="/Contact" className="enlaceheader" style={{textDecoration:"none"}}>Contacto</Link>

          {/*<td><Link to="/SignUp" className="enlaceheader" style={{textDecoration:"none"}}>Registro</Link></td>*/}
          <SigupButton/>
          <LoginButton/> 
      </div>
      <div className='nav_toggle' onClick={ () => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
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