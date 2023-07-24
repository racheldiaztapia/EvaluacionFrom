import React from 'react'

const descrip = () => {
  return (
    <div>
      <center>
        <h1>Necesitas de Ayudantia Espititual </h1><br/>

      
       <form class="registro">
            <h1>Registre aqui </h1>

           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
              <input type="text" class="form-control" id="nombre" />
           </div>
           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email :</label>
              <input type="text"  class="form-control" id="staticEmail2" />
           </div>
           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Region:</label>
              
              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>seleccione su region</option>
                <option value="1">Arica y Parinacota</option>
                <option value="2">Antofagasta</option>
                <option value="3">La Serene</option>
                <option value="3">Valparaiso</option>

              </select>
              
            
           
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Comuna:</label>
              <input type="text" class="form-control" id="nombre" />
           </div>
           
           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contacto :</label>
              <input type="text"  class="form-control" id='contacto'/>
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