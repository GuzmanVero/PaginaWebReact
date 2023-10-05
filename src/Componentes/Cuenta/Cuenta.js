import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cuenta.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Cuenta(){
  return(
    <React.Fragment>
       <ComTitleCuenta/>

       <ComBodyCuenta/>
       <ComLogout/>
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

function ComCitas() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Citas');
  };

  return (
    <button onClick={handleButtonClick}>
      Agendar cita
    </button>
  );
}

function ComBodyCuenta(){
  const Profile = () => {
    const { user, isAuthenticated, isLoading} = useAuth0();
  
    if (isLoading){
      return <div>Cargando...</div>
    }
  
    return(
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name}/><br/><br/>
          <p>Nombre de usuario:</p>
          <input value={user.nickname}/> <br/><br/> 
          <p>Nombre:</p>
          <input value={user.name} /><br/><br/>
          <p>Apellido:</p>
          <input value={user.family_name} /><br/><br/>
          <p>Email:</p>
          <input value={user.email} /><br/><br/>
        </div>
      )
    )
  
  }
  return(
    <section>
    <div className="conCuenta">
      <div className="formularioR">  
        <Profile/><br/>    
        <ComCitas/>
        <br/>
      </div>
    </div>
    <br/><br/>
  </section>
  );
}


function ComLogout(){
  return(
    <section className="cerrar">
      <vid className=''>
      <Logout/>
    </vid>
    </section>
  );
} 

export const Logout = () => {
  const {logout } = useAuth0();
  
  return <button onClick={() => logout()}>Cerrar sesion</button>
}

export default Cuenta;
