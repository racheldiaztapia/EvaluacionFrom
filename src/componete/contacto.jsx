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
         
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
        <div class="col">
          <div class="card">
            <img src="./imgcar1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">La Costa Valdiviana</h5>
              <p class="card-text">Existen 3 circuitos para disfrutar la compañía del mar, entre playas, castillos, bosques antiguos y gastronomía local.
              1. Niebla - Corral - Chaihuín: Cruza el auto en barcaza (localidad de Niebla) y visita el Castillo de Corral. Continúa al sur junto al mar para llegar a Chaihuín. Aquí tienes la posibilidad de ir a los senderos del Parque Nacional Alerce Costero, o la Reserva Costera Valdiviana: sendero Los Colmillos, Lobería de Huiro. Contrata un guía local (en vehículo 4x4) para ir a los hermosos senderos “Dunas de Colún” o “Los Alerces”.
              2. Niebla - Curiñanco - Oncol - Punucapa: Recorre esta ruta junto al mar, con playas solaneras y reservas naturales privadas como Punta Curiñanco, Pilunkura o el famoso Parque Oncol, con imponentes miradores en medio de la Selva Valdiviana. Conoce la pequeña localidad de Punucapa, en pleno Santuario de la Naturaleza, famosa por sus sidras y antigua iglesia. Puedes hacer el circuito al revés, comenzando en Punucapa.
              3. Mariquina - Mehuín: Destacamos aquí algunas ideas para descubrir: Sierra recién ahumada cerca de la Caleta de pescadores de Mehuín. Artesanía de fibra llamada boqui pilpil directo en casa de artesanos o en el mercadito. Encontrarás también una de las escuelas de surf más australes del país, liderada por la fundación GIVESURF. Y la posibilidad de recorrer caminos solitarios junto al mar. Esta ruta conecta con playa Cheuque y con la localidad de Queule.</p>
              <button type="button" class="btn btn-primary btn-lg">Buscar ayuda</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="./img/cardimg2.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Asistencia Familiar</h5>
              <p class="card-text">Para otorgar una justicia especializada para los conflictos de naturaleza familiar. Se enmarca dentro de la política de gobierno de modernizar la administración de justicia, entregar asesorias personalizadas y confiables para cada persona que nesesite del servicio, Dirección:Bartolomé Vivar 1701,Calama,Antofagasta .</p>
              <button type="button" class="btn btn-primary btn-lg">Buscar ayuda</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
             <img src="./img/cardimg3.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Mediacion</h5>
              <p class="card-text">medio de solución de controversias cualquiera que sea su denominación, en que dos o más partes intentan voluntariamente alcanzar por si mismas un acuerdo con la intervención de un mediador. Es un método alternativo de resolución de conflictos, para evitar llegar a los tribunales,  Direccion:Paula Jaraquemada 1435 con Anibal Pinto, Calama,mediacionfamiliarcalama@gmail.com</p>
              <button type="button" class="btn btn-primary btn-lg">Buscar ayuda</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="./img/cardimg4.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Asistencia Judicial</h5>
              <p class="card-text">Proporcionar orientación y asesoría jurídica a todas las personas que así lo requieran, y patrocinar judicialmente de manera profesional y gratuita a quienes no cuenten con los recursos para hacerlo.</p>
              <button type="button" class="btn btn-primary btn-lg">Buscar ayuda</button>
            </div>
          </div>
        </div>
      </div>


    </div>
    

  )
}

export default contacto
