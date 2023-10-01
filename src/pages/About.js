import React from 'react';

import reu from './Images/reunion.jpg'
import './CSS/nosotros.css'

import { Link } from 'react-router-dom';

function About() {
  return(
    <React.Fragment>
        <Contenedor0TileBody/>
    </React.Fragment>
  );
}

function Contenedor0TileBody(){
    return(
        <section>
    <table className="titulo">
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

export default About;