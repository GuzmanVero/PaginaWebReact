import React from 'react';

import lobo from './Images/lobo.jpg';
import imagen1 from './Images/AdobeStock_107432576-scaled-1.jpeg';
import medicina from './Images/medicamt3.jpg';
import medicamento from './Images/medicamto1.jpg';
import gato from './Images/gato-.jpg';
import reu from './Images/reunion.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <React.Fragment>
            <ComTitleVer/>
            <ComService/>
            <ComVetTitle/>
            <ComServiceBody/>
           <ComTitleLic/>
            <ComTitledoc/>
    <ComDoctors/>{/* */}
        </React.Fragment>
    );
}
function ComTitleVer(){
  return(
    <div>
    <section>
      <h1 className="titulohome">ANIMALS CLINIC</h1>

      <div className="verifica">
        <div >            
          <table  className="imagen1">
            <tr>
              <th style={{paddingTop: '5em'}}><img width="510" height="350" className='lobo' src={lobo} alt="imagenveterinaria" /></th>
              <th>
                Verifica:
                <p>Como veterinaria mi función principal es<br/>
                Diagnosticar, pronosticar, tratar y prevenir las <br/>
                enfermedades que afectan a los animales domésticos,<br/>
                de experimentación, exóticos, salvajes y ganaderos.<br/>
                ¿Quieres agendar una cita en línea?<br/>
                ¡Solo regístrate!</p>
                <br/><br/><br/>
                <button className="btingresar" disabled={true}>
                <Link to="/SignUp" className="btnregistro" style={{textDecoration:"none"}}>Registro</Link>
                </button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
  );
}

function ComService(){
  return(
    <section>  
      <br/>         
      <div className="imagen2"> 
        <table className="fooder1" >
          <tr>
            <td>
              <div>
                <div>
                  <h1 style={{fontSize: '2em'}}>Los mejores servicios de veterinaria en los que puede confiar.</h1>
                </div>
                <p>Si está buscando un veterinario confiable en la ciudad, estamos aquí para ayudarlo. Somos conocidos por los mejores tratamientos veterinarios asequibles con citas rápidas y soluciones oportunas.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img className='imagen3' src={imagen1} alt="" width="1024" height="683" />
            </td>
          </tr>
        </table>
      </div>     
    </section>
  );
}

function ComVetTitle(){
  return(
    <table className="titlevet" >
      <tr>
        <td>
          <div style={{color: 'blue'}}>COMO VETERINARIO</div>
          <h2 style={{fontSize: '1em'}}>NOS ESPECIALIZAMOS EN:</h2>
        </td>
      </tr>
      
    </table>
  );
}

function ComServiceBody(){
  return(
    <div>
    <div className="comservicebody">
      <div className="medicina">
        <table >
          <tr><td><img className='medicina' src={medicina} alt="" width="350" height="300" /></td></tr>
          <tr><th><h3>Medicina</h3></th></tr>
          <tr><td>Cada mascota es única y especial y así es como debe ser tratado, 
              se medica según sus necesidades y condiciones.</td></tr>
        </table>
      </div>

      <div className="prevencion">
        <table >
          <tr><td><img className='medicamento' src={medicamento} alt="" width="400" height="300"/></td></tr>
          <tr><th><h3>Prevención y control</h3></th></tr>
          <tr><td>El chequeo es necesario tus mascotas también necesitan un control, 
              nos encargamos de mantener su buena salud.</td></tr>
        </table>  
      </div>

      <div className="cuidados">
        <table >
          <tr><td><img className='gato' src={gato} alt="" width="350" height="300" /></td></tr>
          <tr><th><h3>Cuidados</h3></th></tr>
          <tr><td>Nos especializamos en los cuidados adecuados para cada tipo de mascota, 
              facilitando la estadía y su recuperación en el proceso.</td></tr>
        </table>
      </div>
    </div>
    <br/><br/><br/><br/>
    
  </div>
  );
}

function ComTitleLic(){
  return(     
  <div className="comtitlelic">
        <div>            
          <table className="reunion">
            <tr style={{paddingTop: '5em'}}>
              <th className="colorbodylic">
                <h1>Licenciatura en Médico Veterinario y Zootecnista</h1>
                <p>Los médicos veterinarios zootecnistas, son los profesionistas encargados 
                    de mantener la salud, así como de atender, prevenir y controlar las enfermedades de los animales.</p>
                <button className="btingresar" disabled={true}><a href="nosotrosl.html" style={{textDecoration:'none'}}>Conócenos</a></button>
              </th>
              <th>
                <img width="510" height="350" className='reu' src={reu} alt="imagenveterinaria" />
              </th>
            </tr>
          </table>
        </div>
        
    </div>
  );
}

function ComTitledoc(){
  return(
    <div>
      <br/><br/>
      <table className="titulodoc">
        <tr>
          <td>
            <div style={{fontSize: '1em', color: 'blue'}}>Su comodidad y bienestar es nuestra prioridad</div>
            <h2 style={{fontSize: '1.75em'}}>Te espera:</h2>
          </td>
        </tr>
      </table>
      <br/>
    </div>
  );
}

function ComDoctors(){
  return(
    <div className="doctors">
      <br/><br/>
        <div className="doctora1">
            <table >
                <tr>
                    <td colSpan="2">
                        <p>Estudiante en la Universidad Católica <br/>
                        de El Salvador, profesional veterinaria<br/>
                        especializada<br/>
                        según acuerdo al articulo de esta <br/>
                        pagina web en doctorado animal.</p>
                    </td>
                </tr>
                <tr>
                    <td className="ramos"></td>
                    <td><h3>Dra.Ramos</h3></td>
                </tr>
            </table>
        </div>

        <div className="doctora2">
            <table>
                <tr>
                    <td colSpan="2">
                        <p>
                            Licenciada en medicina veterinaria y <br/>
                            estudiante actual en UNICAES para seguir <br/>
                            con su progreso <br/>
                            en conocimiento animal de <br/>
                            acuerdo a esta pagina web.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td className="guzman" width="100" height="100"></td>
                    <td><h3>Miss. Guzmán</h3></td>
                </tr>
            </table>
        </div>

        <div className="doctora3">
            <table>
                <tr>
                    <td colSpan="2">
                        <p>Actualmente cursando especialización<br/>
                         en Universidad Católica de El Salvador, <br/>
                            Licenciada en ciencias de la salud <br/>
                            titulo otorgado según esta pagina web</p>
                    </td>
                </tr>
                <tr>
                    <td className="rodriguez" width="100" height="100"></td>
                    <td><h3>Miss Rodríguez</h3></td>
                </tr>
            </table>
        </div>   
    </div>
  );
}

export default Home;