import React from 'react';

import reu from './OPERATORIOS_CIRUGIA.jpg'
import perrodibujo from './undraw_Good_doggy_re_eet7.png'
import './Nosotros.css'

function About() {
  return(
    <React.Fragment>
        <ComTitleAbout/>
        <ComTitleValores/>
        <ComBodyValores/>
        <ComTextRomanos/>
        <ComInfoLocal/>
    </React.Fragment>
  );
}

function ComTitleAbout(){
    return(
        <section>
    <table className="titulo">
        <tbody>
            <tr>
                <th><h1>Acerca de Nosotros</h1></th>
            </tr>
        </tbody>
    </table>

    <div className="conBodynosotros">
        <div>            
            <table className="imagen1">
                <tbody>
                    <tr>
                        <td style={{paddingTop: '20px', paddingBottom: '20px'}} colSpan={2}></td>
                    </tr>
                    <tr>
                        <th><img width="450" height="250" className='reu' src={reu} alt="imagenveterinaria" /></th>
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

function ComTitleValores(){
    return(
    <table className="titlevalores">
        <tr>
            <td>
                <div>
                    <p className='titleValores'>Nuestros valores</p>
                    <p lassName='bodyValores'>Nuestro trabajo se basa en gran medida en nuestros valores fundamentales</p>
                </div>
            </td>
        </tr>
    </table>
    );
}

function ComBodyValores(){
    return(
    <div className="conBodyValores">
        <div className="valores">   
            <table>
                <tr>
                    <td>
                        <p style={{ fontSize: '3', color: 'blue' }}>01.</p>
                        <h3>Compasión</h3>
                        <p>Nuestro objetivo es comprender y atender las necesidades y deseos de los pacientes y colegas, escuchando atentamente y poniéndonos en el lugar de las personas.</p>
                    </td>
                    <td>
                        <p style={{ fontSize: '3', color: 'blue' }}>02.</p>
                        <h3>Progresión</h3>
                        <p>Queremos seguir adaptándonos a las diferentes situaciones, con ganas de aprender y esforzándonos por ser mejores. Aprendizaje de nuevas tendencias y necesidades.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style={{ fontSize: '3', color: 'blue' }}>03.</p>
                        <h3>Respeto</h3>
                        <p>Respetar a todos los que conocemos y tratarlos como queremos ser tratados. Ya sea un colega o un paciente, la comprensión y el respeto son importantes.</p>
                    </td>
                    <td>
                        <p style={{ fontSize: '3', color: 'blue' }}>04.</p>
                        <h3>Coraje</h3>
                        <p>Somos los expertos en nuestro campo. Por lo tanto, es importante tener el coraje de hacer lo correcto sabiendo que es por el bien de la nuestros pequeños que están con nosotros</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    );
}

function ComTextRomanos(){
    return(
    <div className="conTexRoma">
    <div>            
        <table className=" imagenroma">
            <tbody>
                <tr>
                    <th>
                        <img width="500" height="350" className='perrodibujo'src={perrodibujo} alt="imagenveterinaria" />
                    </th>
                    <td>
                         <p>Pese a que los romanos sabían de la importancia de tener animales sanos para el buen
                            funcionamiento del ejército y de su economía, durante muchísimo tiempo no existió la
                            figura del veterinario especializado, y mucho menos una institución donde se formase a esos especialistas.</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
);
}

function ComInfoLocal(){
    return(
    <table className="coninfo">
    <tbody>
        <tr>
            <th>
                <p>Teléfono</p>
                <p>+503 7037-0932</p>
            </th>
            <th>
                <p>123 Fifth Ave, New York,</p>
                <p>NY 12004, USA</p>
            </th>
            <th>
                <p>Realiza tu cita en línea</p>
            </th>
        </tr>
    </tbody>
    </table>

    );
}

export default About;