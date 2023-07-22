import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link to="sobre-nosotros" className='nav-link'>Haz clic para ver la página sobre nosotros</Link><br/>
          
        </li>
        <li className="nav-item">
            <Link to="contacto" className='nav-link'>Haz clic para ver la página de contacto</Link><br/>
        </li>
        <li className="nav-item">
          <Link to="descrip" className='nav-link'>Haz clic para ver la página de descrip</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navbar