import React, { useRef } from 'react';
import './Contacto.css';
import mobil from './undraw_Mobile_search_jxq5.png';
import sing from './undraw_Sign_up_n6im.png';
import emailjs from '@emailjs/browser';
import whats from './what.png';

function Contact() {
  return (
    <React.Fragment>
      <ComTitleContact/>
      <ComBodyContact/>
      <ContactUs/>
      <ComFormularioContact/>
      <ComMapa/>
      {/**/}
  </React.Fragment>
);
}

function ComTitleContact(){
  return(
    <section className="tituloContacto">
      <h1>Contacto</h1>
    </section>
  );
}

function ComBodyContact(){
  return(
  <div className="conBodyContacto">
    <div className="mobile">
      <img className='mobil' src={mobil} alt="" width="300" height="300" />
    </div>

    <div className="textoc">
        <table >  
            <tbody>
                <tr>
                    <td>
                        <p className="textboduC"><strong>En caso de una emergencia </strong></p>
                        <p className="textboduC">Contactanos a nuestro numero de Whatsapp.</p>
                        <center>
                         <a href="https://web.whatsapp.com/">
                         <img className='whats' src={whats} alt=""/> 
                         </a>
                         </center>
                       <p className="textboduC"> Si no puedes comunicarte puedes llegar a la veterinaria
                        O a tu veterinaria mas cercana.</p>
                    </td>
                    </tr>
            </tbody>
        </table>
    </div>

    <div className="sing">
        <img className='sing' src={sing} alt="" width="390" height="300" />
    </div>
  </div>
  );
}

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kx61cyu', 'template_e0eg1fr', form.current, 'LyE4aLgOsMCXfH2To')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return(
    <div className="conFormulario">
    <div className="formulario">
      <form action=""  ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nombre: </label><br />
        <input type="text" placeholder="Nombre completo" id="name" name="user_name" className="inputG"/><br/><br/>
        <label htmlFor="address">Correo electronico: </label><br />
        <input type="email" placeholder="Correo electronico" id="address" name="user_email" className="inputG"/><br/><br/>
        <label htmlFor="telefono">Teléfono: </label><br />
        <input type="text" placeholder="Telefono" id="number" name="user_celphone" className="inputG"/><br/><br/>
        <label htmlFor="name">Mensaje: </label><br />
        <textarea type="text" placeholder="Mensaje" id="message" name="message" className="inputG"/><br/><br/>
        <input type="submit" value="Enviar mensaje" />
        
      </form>            
    </div>
  </div>
  );
}

function ComFormularioContact(){
  return(
    <div className="conFormulario">
    <div className="contacto">
        <table >
            <tbody>
                <tr>
                    <td>
                        <p className="textoc"><font size={10}><strong>
                            ¿Tiene alguna pregunta sobre nuestros servicios?​ </strong></font></p>
                        <p className="textoB"><font size={5}>¿Desea obtener más información sobre nuestro servicios de Veterinaria, 
                            y el tipo de tratamiento que necesita tu mascota? Envíanos un mensaje llenando el formulario aquí.</font></p>
                    </td>
                </tr>
                <tr>
                    <td><p><font size={5}><strong>+503 2456 7890​ </strong></font></p></td>
                </tr>
                <tr>
                    <td><p><font size={5}><strong>maryury@gmail.com​ </strong></font></p></td>
                </tr>
                <tr>
                    <td><p><font size={5}><strong>Animals Clinic, Santa Ana, El Salvador​ </strong></font></p></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  );
}
    
function ComMapa(){
  return(
    <iframe className='mapa'
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30972.15860311857!2d-89.58222066733934!3d13.987162929181972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ssv!4v1695148014497!5m2!1ses!2ssv" 
      width="1385" 
      height="400" 
      style={{border: "0"}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  );
} 

export default Contact;