import React from 'react'

const descrip = () => {
  return (
    <div>
      <center>
      
       <form class="registro">
            <h1>Registre aqui </h1>

           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Nombre  Apellido:</label>
              <input type="text" class="form-control" id="nombre" />
           </div>
           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email :</label>
              <input type="text"  class="form-control" id="staticEmail2" />
           </div>
           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Edad:</label>
              
              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>seleccione su Edad</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              
            
           
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contacto :</label>
              <input type="text"  class="form-control" id="staticEmail2" value=""/>
           </div>

           
          
         <div class="mb-3">
             <button type="submit" class="btn btn-primary mb-3">Registare</button>
         </div>
       </form>
     </center>
    </div>
  


  )
}

export default descrip