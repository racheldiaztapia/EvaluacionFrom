import React from 'react'
import { Link } from "react-router-dom";

const sobre = () => {
  return (
    <div>
     <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
        <div class="col">
          <div class="card">
            <img src="./imgcar1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">El Amor de Dios</h5>
              <p class="card-text">Dios es nuestro amparo y fortaleza.</p>
              
            </div>
            <center>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary mb-3">Mas Informacion</button>
              </div>
            </center>
          </div>
        </div>
        <div class="col">
          <div class="card">
             <img src="./imgcar3.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">EL Amor de Dios</h5>
              <p class="card-text"> EL amor es Dios es ifinito y misericordioso.</p>
               
            </div>
            <center>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary mb-3">Mas Informacion</button>
              </div>
            </center>

          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="./imgcar2.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Amando a Dios</h5>
              <p class="card-text">El amar a Dios es lo mas lindo que podemos persivir en nuestras vidas.</p>
              <center>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary mb-3">Mas Informacion</button>
                </div>
              </center>
               
            </div>
            
          </div>
        </div>
        
        <div class="col">
          <div class="card">
            <img src="./imgcar4.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Luz del Mundo</h5>
              <p class="card-text">Dios es quien nos fortalese cada dia independiente de las pruebas que vamos viviendo.</p>
              <center>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary mb-3">Mas Informacion</button>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
     
     

    </div>
    

     
  )
}

export default sobre
