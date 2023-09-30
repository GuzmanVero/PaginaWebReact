import logo from './logo.svg';
import './App.css';
import logoC from './Images/cropped-tweb.png';
import lobo from './Images/lobo.jpg'
import imagen1 from './Images/AdobeStock_107432576-scaled-1.jpeg'
import './CSS/header.css';
import './CSS/index.css'
function App() {
  return (
    <div className="App">

      <Header/>
      <BodyIndex/>
      
      
    </div>
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
                      <th><a href="index.html" className="enlaceheader" style={{textDecoration: 'none'}}>Inicio</a></th>
                      <th><a href="nosotrosl.html" className="enlaceheader" style={{textDecoration: 'none'}}>Nosotros</a></th>
                      <th><a href="servicios.html" className="enlaceheader" style={{textDecoration: 'none'}}>Servicios</a></th>
                      <th><a href="Contacto.html" className="enlaceheader" style={{textDecoration: 'none'}}>Contacto</a></th>
                      <th><a href="Registro.html" className="enlaceheader" style={{textDecoration: 'none'}}>Registro</a></th>
                      <th><a href="iniciarsesion.html" className="enlaceheader" style={{textDecoration: 'none'}}>Inicio sesión</a></th>
                  </tr>
              </table>           
          </div>     
      </header>
  );
}

function BodyIndex(){
  return(
    <div>
    <section>
      <table  className="titulo">
        <tr>
          <th><h1>ANIMALS CLINIC</h1></th>
        </tr>
      </table>

      <div className="contenedor0">
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
                <button className="btingresar" disabled={true}><a href="Registro.html" style={{textDecoration: 'none'}}>Registrar</a></button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </section>

    <section>           
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
              <img className='imahen1' src={imagen1} alt="" width="1024" height="683" />
            </td>
          </tr>
        </table>
      </div>
    </section>

    <table className="titulo2" >
      <tr>
        <td>
          <div style={{color: 'blue'}}>COMO VETERINARIO</div>
          <h2 style={{fontSize: '1em'}}>NOS ESPECIALIZAMOS EN:</h2>
        </td>
      </tr>
    </table>
  </div>
  );
}

export default App;
