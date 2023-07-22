import React from 'react'
import { Link } from "react-router-dom";

const inicio = () => {
  return (
    <div>
      <h1>Esta es la página de inicio</h1>
      <Link to="sobre-nosotros">Haz clic para ver la página sobre nosotros</Link><br/>
      <Link to="contacto">Haz clic para ver la página de contacto</Link><br/>
      <Link to="descrip">Haz clic para ver la página de descrip</Link>
    </div>
  )
}

export default inicio