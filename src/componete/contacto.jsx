import React from 'react'

const contacto = () => {
  return (
    <div >
      <center>
      <h2>Palabras de Aliento</h2>
      <div className="card">
        <img src="./imgcard1.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Busca de Dios </h5>
           <p className="card-text"></p>
           <a href="#" className="btn btn-primary">Buscar</a>
        </div>
        </div><br/>
        <div className="card">
          <img src="./imgcard2.png" className="card-img-top" alt="..."/>
          <div className="card-body">
           <h5 className="card-title">Promesas Fieles </h5>
           <p className="card-text"></p>
           <a href="#" className="btn btn-primary">Buscar</a>
          </div>
       </div><br/>
       <h2>¿quieres conoser mas?</h2>
        <p>Te contactaremos </p>

       <form className="registroI">
         <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="nombre" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email :</label>
            <input type="text"  className="form-control" id="staticEmail2" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Categoria :</label>
              
            <select className="form-select" selectmult>
              <option selected>selecione </option>
              <option value="1">Antiguo Testamento</option>
              <option value="2">Nuevo Testamento</option>
          
            </select>
              
            
           
            </div><br/>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary mb-3">Registare</button>
            </div>
       </form>
    
     

      </center>
      
      
     
       
    </div>
  


     
    

  )
}

export default contacto
