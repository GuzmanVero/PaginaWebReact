import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import face from './f.png';
function Footer(){
    return(
      <footer className="footer" style={{border: "1px solid"}}>
        <div className="contenedor">
          <div className="columna1">
            <table >
                <tr>
                    <th>
                        <p>Te ofrecemos los mejores servicios veterinarios. </p>
                        <p>Contamos con alta experiencia en la salud de los animales.</p>
                    </th>
                </tr>
                <tr><td>
                  <a href="https://www.facebook.com/profile.php?id=100095316981528">
                  <img className='face' src={face} alt=""/> 
                  </a>
                   </td></tr>
            </table>
        </div>
  
        <div className="columna2">
          <table >
              <tr><th><h3>Quick Links</h3></th></tr>
              <tr><td><Link to="/About" className="enlacefooter" style={{textDecoration:"none"}}>Hacerca de nosotros</Link></td></tr>
              <tr><td><Link to="/Policies" className="enlacefooter" style={{textDecoration:"none"}}>Politicas de privacidad</Link></td></tr>
              <tr><td><Link to="/Contact" className="enlacefooter" style={{textDecoration:"none"}}>Contactanos</Link></td></tr>
          </table>   
        </div>
  
        <div className="columna3">
            <table >
                <tr><th><h3>Services</h3></th></tr>
                <tr><td><Link to="/services" className="enlacefooter" style={{textDecoration:"none"}}>Vitaminas</Link></td></tr>
                <tr><td><Link to="/services" className="enlacefooter" style={{textDecoration:"none"}}>Todos los servicios</Link></td></tr>
                <tr><td><Link to="/services" className="enlacefooter" style={{textDecoration:"none"}}>Tratamientos</Link></td></tr>
            </table> 
        </div>
  
        <div className="columna4">
          <table >
            <tr><th><h3>Horarios de servicios</h3></th></tr>
            <tr><td>Lunes: 09.00 – 16.00</td></tr>
            <tr><td>Martes: 09.00 – 16.00</td></tr>
            <tr><td>Miercoles: 09.00 – 16.00</td></tr>
            <tr><td>Jueves: 09.00 – 16.00</td></tr>
            <tr><td>Viernes: 09.00 – 16.00</td></tr>
            <tr><td>Sabado: Cerrado</td></tr>
            <tr><td>Domingo: Cerrado</td></tr>
          </table>
        </div>
        </div>            
      </footer> 
    );
}

export default Footer;