import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
       <a className="navbar-brand" href="#">Bienvenidos</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          
            </li>
            <li className="nav-item">
             <Link to="sobre-nosotros" className='nav-link'><button> Te Ayudamos</button></Link><br/>
          
            </li>
            <li className="nav-item">
              <Link to="contacto" className='nav-link'><button>Informacion</button></Link><br/>
            </li>
            <li className="nav-item">
              <Link to="descrip" className='nav-link'><button> Registarse</button></Link>
            </li>
         </ul>
       </div>
     </div>
   </nav>







  )
}

export default navbar