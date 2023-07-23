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
             <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                       </button>
                   </h2>
                   <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                       <strong> This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                     </div>
                   </div>
                 </div>
                 <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                     </button>
                   </h2>
                   <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                     <div className="accordion-body">
                       <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                     </div>
                   </div>
                 </div>
            </div>
         </center>
          
       </div>
      
  )
}

export default inicio