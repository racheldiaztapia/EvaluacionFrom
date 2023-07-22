import React from 'react'
import { Link } from "react-router-dom";

const inicio = () => {
  return (
      <div>
          <h1>Tu mejor eleccion de un buen viaje</h1><br/>
          <div id="carouselExample" className="carousel slide">
             <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./viaje.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
             </button>
             <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
             </button>
           </div>
       </div>
      
  )
}

export default inicio