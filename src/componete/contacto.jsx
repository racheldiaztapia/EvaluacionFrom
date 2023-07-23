import React from 'react'

const contacto = () => {
  return (
    <div >
      <h2>Puntos Relevantes</h2>
      <div className="accordion" id="accordionExample">
         <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 ¿Quieres difrutar de la mejor Esperiencia?
             </button>
           </h2>
           <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Tips para preparar bien tu próximo viaje :</strong><br/> CONOCE LAS REGLAS.<br/> 
MANTENTE EN CONEXIÓN.<br/>
USA MAPAS.<br/>
OPTA POR LO LOCAL.<br/>
INVESTIGA.<br/>
EMPIEZA A HACER CONTACTOS.<br/>
APUNTA, DISPARA, GUARDA Y MUESTRA.<br/>
APRENDE LAS EXPRESIONES COLOQUIALES.
              </div>
           </div>
         </div>
         <div className="accordion-item">
            <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lugares mas visitados en Chile
             </button>
           </h2>
           <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Lugares Épicos en Chile Que Deberías Conocer :</strong><br/> San Pedro de Atacama.<br/>
Bahía Inglesa.<br/>
El Valle de Colchagua.<br/>
Parque Nacional Conguillío.<br/>
La Costa Valdiviana.<br/>
Isla Grande de Chiloé<br/>
Las Capillas de Mármol.<br/>
Parque Nacional Patagonia.
              </div>
           </div>
         </div>
         <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
             </button>
           </h2>
           <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
             <div className="accordion-body">
               <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
             </div>
           </div>
         </div>
      </div>


    </div>
    

  )
}

export default contacto
