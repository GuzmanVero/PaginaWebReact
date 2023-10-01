import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Componentes/Index/Home';
import About from './Componentes/About/About';
import Services from './Componentes/Servicesp/Services';
import Contact from './Componentes/Contact/Contact';
import SignUp from './Componentes/SignUp/SignUp';
import Login from './Componentes/Login/Login';
import Policies from './Componentes/Policies/Policies';
import Header from './Componentes/Header/Header'
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <Router>
      <div>    
        <Header/>   
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Policies" element={<Policies />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
