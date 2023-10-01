import React from 'react';

import logoC from './Images/cropped-tweb.png';
import reu from './Images/reunion.jpg'
import './CSS/header.css';
import './CSS/footer.css'
import './CSS/contacto.css'

import { Link } from 'react-router-dom';

function About() {
  return(
    <React.Fragment>
        <Header/>
        <Contenedor0TileBody/>
        <FooterContenedor/>
    </React.Fragment>
  );
}

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
            <td><Link to="/" className="enlacefooter" style={{textDecoration:"none"}}>Inicio</Link></td>
            <td><Link to="/About" className="enlacefooter" style={{textDecoration:"none"}}>Nosotros</Link></td>
            <td><Link to="/Services" className="enlacefooter" style={{textDecoration:"none"}}>Servicios</Link></td>
            <td><Link to="/Contact" className="enlacefooter" style={{textDecoration:"none"}}>Contacto</Link></td>
            <td><Link to="/SignUp" className="enlacefooter" style={{textDecoration:"none"}}>Registro</Link></td>
            <td><Link to="/Login" className="enlacefooter" style={{textDecoration:"none"}}>Inicio sesion</Link></td>
          </tr>
        </table>           
      </div>   
       
    </header>
  );
}

function Contenedor0TileBody(){
    return(
        <section>
    <table border="1" className="titulo">
        <tbody>
            <tr>
                <th><h1>Acerca de Nosotros</h1></th>
            </tr>
        </tbody>
    </table>

    <div className="contenedor0">
        <div>            
            <table className="imagen1">
                <tbody>
                    <tr>
                        <td style={{paddingTop: '20px', paddingBottom: '20px'}} colSpan={2}></td>
                    </tr>
                    <tr>
                        <th><img width="350" height="250" className='reu' src={reu} alt="imagenveterinaria" /></th>
                        <td>
                            <h3><font color="blue">Estamos</font></h3>
                            <h2><strong>Comprometidas con la excelencia</strong></h2>
                            <p><strong>Somos un equipo de 3 veterinarios profesionales con amplia experiencia con las últimas 
                            tendencias y tecnologías en la industria de tratamientos para cada tipo de animal.
                            </strong></p> 
                            <p>Somos conocidos por los tratamientos veterinario más asequibles y eficientes que nuestros clientes han adorado durante años. Ya sea que se trate de tratamientos, medicamentos, vitaminas, aseguramos la mejor ayuda en un ambiente cómodo y amigable. 
                            Hemos construido relaciones con miles de clientes para consultas y cirugías simples también.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
    );
}

function FooterContenedor(){
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
                <tr><td>logoface</td></tr>
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

export default About;