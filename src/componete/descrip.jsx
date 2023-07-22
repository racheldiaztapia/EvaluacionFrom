import React from 'react'

const descrip = () => {
  return (
    <div>
      <center>
      
       <form class="registro">
            <h1>Registre aqui </h1>

           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Nombre  Apellido:</label>
              <input type="text" class="form-control" id="nomUser" />
           </div>
           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email :</label>
              <input type="text"  class="form-control" id="staticEmail2" />
           </div>
           <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Region:</label>
              <input type="password" class="form-control" id="region"/>
              
            
           
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contacto :</label>
              <input type="text"  class="form-control" id="staticEmail2" value=""/>
           </div>

           
          
         <div class="mb-3">
             <button type="submit" class="btn btn-primary mb-3">Reguistar</button>
         </div>
       </form>
     </center>
    </div>
  


  )
}

export default descrip