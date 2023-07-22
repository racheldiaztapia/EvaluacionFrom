import logo from './logo.svg';
import './App.css';
import Inicio from './componete/inicio';
import Sobre from './componete/sobre';
import Contacto from './componete/contacto';
import Navbar from './componete/navbar';
import Descrip from './componete/descrip';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
   <>
   <Navbar/>
   <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="sobre-nosotros" element={ <Sobre/> } />
        <Route path="contacto" element={ <Contacto /> } />
        <Route path="descrip" element={ <Descrip /> } />

      </Routes>
    </div>
  


   </>
  );
}

export default App;
