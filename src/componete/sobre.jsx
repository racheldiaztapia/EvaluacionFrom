import React from 'react'
import { Link } from "react-router-dom";

const sobre = () => {
  return (
    <div>
      <center>
       <h2>Lugares Maravillosos </h2><br/>
       <div className="card">
         <img src="./imgcad1.png" className="card-img-top" alt="..."/>
         <div className="card-body"> 
           <h5 className="card-title">San Pedro de Atacama</h5>
           <p className="card-text">el Salar de Uyuni, el salar más grande del mundo,no son tantos los que saben que esa ruta por el altiplano boliviano está repleta de atractivos únicos, maravillas </p>
           <a href="#" className="btn btn-primary">Optener mas informacion</a>
         </div>
       </div><br/>
       <div className="card">
         <img src="./imgcad2.png" className="card-img-top" alt="..."/>
         <div className="card-body"> 
           <h5 className="card-title">Parque Nacional Torres del Paine</h5>
           <p className="card-text">En el sur de Chile, este espacio protegido es un destino soñado por los amantes de la naturaleza, que encuentran en esta tierra virgen alguno de los mejores senderos del mundo. Además es uno de los parques nacionales mejor preparados para una visita confortable y segura para todos los viajeros.</p>
           <a href="#" className="btn btn-primary">Optener mas informacion</a>
         </div>
       </div><br/>
       <div className="card">
         <img src="./imgcad3.png" className="card-img-top" alt="..."/>
         <div className="card-body"> 
           <h5 className="card-title">Isla de Pascua</h5>
           <p className="card-text">Comencemos por uno de los encantos y particularidades más grandes de Chile. La Isla de Pascua, denominado el segundo territorio poblado más distante en el mundo, estando ubicado en el océano Pacifico, por lo que se considera parte del continente Oceanía a pesar de ser territorio chileno. </p>
           <a href="#" className="btn btn-primary">Optener mas informacion</a>
         </div>
       </div>
      </center>
     
     

    </div>
    

     
  )
}

export default sobre
