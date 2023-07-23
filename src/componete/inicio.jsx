import React from 'react'
import { Link } from "react-router-dom";

const inicio = () => {
  return (
      <div>
          <center>
            <h1>Tu mejor eleccion de un buen viaje</h1><br/>
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src="./img3.png" className="d-block w-100" alt="..."/>
                     <div class="carousel-caption d-none d-md-block">
                        <h5 class="fs-1 text-dark">Bienvenido!</h5>
                        <p class="text-dark fs-4">Las hermosuras de la naturalesa</p>
                      </div>
                  </div>
                  <div className="carousel-item">
                    <img src="./img1.png" className="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>San Pedro de Atacama</h5>
                        <p>Las maravillas del Decierto.</p>
                    </div>
                     
                  </div>
                  <div className="carousel-item">
                    <img src="./img2.png" className="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                       <h5>Parque Nacional Torres del Paine</h5>
                    </div>
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
             </div><br/>
             
         </center>
          
       </div>
      
  )
}

export default inicio