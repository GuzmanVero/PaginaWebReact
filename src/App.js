import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          aprendmos React
        </a>
      </header>
    </div>
  );
}

function Header() {
  return (
      <header>
          <div className="logo">
              <table border="1">
                  <tr>
                      <th><img width="110" height="117" src="Images/cropped-tweb.png" alt="LogoEmpresa" /></th>
                      <th>
                          <h2>Citas Medicas</h2><br />
                          Los mejores servicios y atenion medica
                      </th>        
                  </tr>
              </table>
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

export default App;
