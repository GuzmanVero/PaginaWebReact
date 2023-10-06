import React from 'react';

import './Servicios.css';
import comodidad from './Images/comodidad.jpg';
import correas from './Images/correas-1.png';
import higiene from './Images/igiene.png';
import comida from './Images/can.png';
import medicina from './Images/medicina.jpg';
import dog from './Images/dog.png';
import per from './Images/per.jpg';
import perro2 from './Images/dog2.jpg';
import cat from './Images/cat.jpg';
import dog2 from './Images/perro.jpg';
import salud from './Images/salud-1.jpg';
import canino from './Images/can2.jpg';
import tigre from './Images/tigreee7.jpg';

function Services() {
  return(
    <React.Fragment>
        <ComTitleServices/>
        <ComBody1CAM/>
        <ComBody2IAP/>
        <ComCuadroFalto/>
        <ComCuadroTrigre/>
    </React.Fragment>
  );
}

function ComTitleServices(){
  return(
    <section>
    <table  className="tituloservicios">
        <tbody>
            <tr>
                <th>
                    <center>
                    <h1>Servicios</h1>
                    </center>
                </th>
            </tr>           
        </tbody>
    </table>

    <table className="titulobody" >
        <tbody>
            <tr>
                <td>
                    <p>
                        Resolvemos todas tus necesidades veterinarias en un solo lugar
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</section>

  );
}

function ComBody1CAM(){
  return(
  <div className="concomodidad">
    <div className="comodidad">
        <table >
            <tbody>
                <tr>
                    <td>
                        <img className='comodidad'src={comodidad} alt="" width="200" height="200" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Comodidad</p>
                        <p>
                            Ofrecemos calidad y confort en la comodidad de nuestras mascotas,
                            que su estadía en animals clinic se sienta como un segundo hogar.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img className='correas'src={correas} alt="" width="200" height="200" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="tratamientos">
    <table >
        <tbody>
            <tr>
                <td>
                    <img className='higiene'src={higiene} alt="" width="200" height="200" />
                </td>
            </tr>
            <tr>
                <td>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Tratamientos</p>
                    <p>
                        El medicamento es solo una forma de curar, sin embargo, también esta la higiene,
                        nos encargamos de todo tipo de tratamiento, hagamos su vida feliz.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <img className='comida' src={comida} alt="" width="200" height="200" />
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div className="medicamentos">
    <table >
      <tbody>
        <tr>
          <td>
              <img className='medicina'src={medicina} alt="" width="200" height="200" />
          </td>
        </tr>
        <tr>
          <td>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Medicamentos</p>
              <p>
                   Te proporcionamos al alcance de la mano todo tipo de medicamento básico de ayuda en enfermedades.
               </p>
           </td>
        </tr>
        <tr>
          <td>
              <img className='dog'src={dog} alt="" width="200" height="200" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  );
}

function ComBody2IAP(){
  return(
    <div className="conbody2">
    <div className="informacion">
        <table >
            <tbody>
                <tr><td><img className='per' src={per} alt="" width="200" height="200" /></td></tr>
                <tr>
                    <td>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Información sobre su cuido</p>
                        <p>Brindamos información sobre cuidados y todo tipo de información básica 
                            que ayude a comprender el comportamientos de nuestras mascotas.
                        </p>
                    </td>
                </tr>
                <tr><td><img className='perro2' src={perro2} alt="" width="200" height="200" /></td></tr>
            </tbody>
        </table>
    </div>
    <div className="alimentacion">
        <table >
            <tbody>
                <tr><td><img className='cat' src={cat} alt="" width="200" height="200" /></td></tr>
                <tr>
                    <td>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Alimentación</p>
                        <p>Le proporcionamos el tipo adecuado de alimentos a cada tipo de mascota,
                             productos con suficientes nutrientes que los ayudaran.
                        </p>
                    </td>
                </tr>
                <tr><td><img className='dog2'src={dog2} alt="" width="200" height="200" /></td></tr>
            </tbody>
        </table>
    </div>
    <div className="prevencion">
        <table >
            <tbody>
                <tr><td><img className='salud' src={salud} alt="" width="200" height="200" /></td></tr>
                <tr>
                    <td>
                        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Prevención de enfermedades</p>
                        <p>Encontraras todo tipo de exámenes, estudios y demás contenido que permita la salud 
                            y bienestar.
                        </p>
                    </td>
                </tr>
                <tr><td><img className='canico' src={canino} alt="" width="200" height="200" /></td></tr>
            </tbody>
        </table>
    </div>
</div>
  );
}

function ComCuadroFalto(){
  return(
    <div className="cuadro">
    <table className="cuadrofalto">
        <tbody>
            <tr>
               <td>
                   <p>¿No poseemos lo que tu mascota necesita?</p>
               </td>
           </tr>
           <tr>
               <td>
                   <p>Si en algún momento tu mascota necesita un tratamiento o medicamento diferente 
                    al que poseemos, se le pedirá al cliente lo necesario para el cuidado adecuado.</p>
               </td>
           </tr>
        </tbody>
    </table>
</div>
  );
}

function ComCuadroTrigre(){
  return(
    <div className="cuadrotigre"> 
       <img className='tigre' src={tigre} alt=""/>    
    </div>
  );
}
export default Services;