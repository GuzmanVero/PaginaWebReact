import React from 'react';
import './Politicas.css'

function Policies() {
  return(
    <React.Fragment>
      <ComAbout/>
      <ComCookies/>
      <ComContenido/>
      <ComCompartir/>
      <ComConservar/>
      <ComDerechos/>
      <ComEnvio/>
      {/* */}
    </React.Fragment>
  );
}

function ComAbout(){
  return(
    <div className="connosotros">
    <h3 className='h3'>¿Qué somos?</h3>
    <p className='Conp'>
        Nuestro sitio web es: <a href="https://citasmedicasmaryury.com">https://citasmedicasmaryury.com</a>.<br /><br />
        Cuando los visitantes dejan comentarios en el sitio, recopilamos los datos que
        se muestran en el formulario de comentarios, y también la dirección IP del
        visitante y la cadena del agente de usuario del navegador para ayudar a la detección de spam.
    </p>
    </div> 
  );
}

function ComCookies(){
  return(
    <div className="connosotros">
    <h3 className='h3'>Cookies</h3>
    <div className='Conp' >
        <p>
            Si deja un comentario en nuestro sitio, puede optar por guardar su nombre,
            dirección de correo electrónico y sitio web en cookies. Estos son para su 
            comodidad, para que no tenga que volver a rellenar sus datos cuando deje otro 
            comentario. Estas cookies tendrán una duración de un año.
        </p>
    </div>
    <div className='Conp'>
        <p>
            Si visita nuestra página de inicio de sesión, estableceremos una cookie 
            temporal para determinar si su navegador acepta cookies. Esta cookie no 
            contiene datos personales y se descarta cuando cierra su navegador.
        </p>
    </div>
    <div className='Conp'>
        <p>
            Cuando inicie sesión, también configuraremos varias cookies para guardar su 
            información de inicio de sesión y sus opciones de visualización de pantalla. 
            Las cookies de inicio de sesión duran dos días y las cookies de opciones de 
            pantalla duran un año. Si selecciona "Recordarme", su inicio de sesión 
            persistirá durante dos semanas. Si cierra sesión en su cuenta, se eliminarán 
            las cookies de inicio de sesión.
        </p>
    </div>
    <div className='Conp'>
        <p>
            Si edita o publica un artículo, se guardará una cookie adicional en su 
            navegador. Esta cookie no incluye datos personales y simplemente indica el ID 
            de publicación del artículo que acaba de editar. Caduca después de 1 día.
        </p>
    </div>
  </div>
  );
}

function ComContenido(){
  return(
    <div className="connosotros">
    <h3 className='h3'>Contenido incrustado de otros sitios web</h3>
    <div className='Conp'>
        <p>
            Los artículos en este sitio pueden incluir contenido incrustado (por ejemplo, 
            videos, imágenes, artículos, etc.). El contenido incrustado de otros sitios web
            se muestran en el formulario de comentarios, y también la dirección IP del
            visitante y la cadena del agente de usuario del navegador para ayudar a la detección de spam.
        </p>
    </div>
  </div>
  );
}

function ComCompartir(){
  return(
    <div className="connosotros">
    <h3 className='h3'>Con quién compartimos sus datos</h3>
    <div className='Conp'>
        <p>Si solicita un restablecimiento de contraseña, su dirección
           IP se incluirá en el correo electrónico de restablecimiento.</p>
    </div>
  </div>
  );
}

function ComConservar(){
  return(
    <div className="connosotros">
    <h3 className='h3'>Cuánto tiempo conservamos sus datos</h3>
    <div className='Conp'>
        <p>
            Si deja un comentario, el comentario y sus metadatos se conservan 
            indefinidamente. Esto es para que podamos reconocer y aprobar cualquier 
            comentario de seguimiento automáticamente en lugar de mantenerlos en una cola 
            de moderación.
        </p>
    </div>
    <div className='Conp'>
        <p>
            Para los usuarios que se registran en nuestro sitio web (si los hay), también 
            almacenamos la información personal que proporcionan en su perfil de usuario. 
            Todos los usuarios pueden ver, editar o eliminar su información personal en 
            cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los 
            administradores del sitio web también pueden ver y editar esa información.
        </p>
    </div>
</div>
  );
}

function ComDerechos(){
  return(
    <div className="connosotros">
    <h3 className='h3'>Qué derechos tienes sobre tus datos?</h3>
    <div className='Conp'>
        <p>
            Si tiene una cuenta en este sitio o ha dejado comentarios, puede solicitar
            recibir un archivo exportado de los datos personales que tenemos sobre usted,
            incluidos los datos que nos haya proporcionado. También puede solicitar que 
            ningún dato que estemos obligados a conservar con fines administrativos, 
            legales o de seguridad.
        </p>
    </div>
</div>
  );
}

function ComEnvio(){
  return(
    <div className="connosotros">
    <h3 className='h3'>Dónde se envían sus datos</h3>
    <div className="Conp">
        <p>
            Los comentarios de los visitantes puede que los revise un servicio de detección 
            automática de spam.
        </p>
    </div>
  </div>
  );
}

export default Policies;