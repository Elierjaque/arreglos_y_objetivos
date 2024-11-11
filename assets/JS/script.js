
//ARRIENDO
// gerenado arreglos de propiedades de alquiler o arriendo
const propiedades_alquiler = [
    { id: 1,
        imagen: 'https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci9hY2M0ZTA2Yi1jZDkxLTQ2MGQtYTdhZi0zNmEyZDIxM2M3ZDEvMTYwNjMyNDYzMjM1OF8xNTA5OTQ5NTA1LmpwZWciLCJicmFuZCI6IlJFU0VNIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4NDAsImhlaWdodCI6NjMwLCJmaXQiOiJjb3ZlciJ9fX0=',
        nombre: 'Arriendo comodo departamento',
        descripcion: 'Este elegante condominio moderno esta ubicado en una tranquila zona residencial',
        ubicacion: 'Coronel Elier 4400, San Alberto Hurtado, Estación Central, RM (Metropolitana)',
        habitaciones: 4,
        baño: 1,
        precio: 650000,
        smoke: false,
        pets: true
    },
    {   id: 2,
        imagen: 'https://info.inmobilia.mx/hs-fs/hubfs/Inmobilia/Yucatan_Country/harmonia/Harmonia-page/galeria/new%20renders/View-07_Sanz_Harmonia_Frontal-Gral_ed2mod.png?width=1896&name=View-07_Sanz_Harmonia_Frontal-Gral_ed2mod.png',
        nombre: 'Arriendo comodo departamento con vista al mar',
        descripcion: 'Este elegante condominio moderno esta ubicado en una tranquila zona residencial',
        ubicacion: 'Aqui Souper 4400, San Alberto Hurtado, Estación Central, RM (Metropolitana)',
        habitaciones: 3,
        baño: 1,
        precio: 450000,
        smoke: false,
        pets: true
    },
    {   id: 3,
        imagen: 'https://1557540.fs1.hubspotusercontent-na1.net/hub/1557540/hubfs/Inmobilia/Yucatan_Country/harmonia/Harmonia-page/galeria/new%20renders/View%2002_Sanz_Harmonia_ed3mod.png?width=2000&name=View%2002_Sanz_Harmonia_ed3mod.png',
        nombre: 'Arriendo comodo departamento',
        descripcion: 'Este elegante condominio moderno esta ubicado en una tranquila zona residencial',
        ubicacion: 'Quirariqui Souper 4400, San Alberto Hurtado, Estación Central, RM (Metropolitana)',
        habitaciones: 2,
        baño: 1,
        precio: 550000,
        smoke: true,
        pets: false
    }

    
    ];

    // Aqui llamo la clase o ID del contenedor en HTML

    const lista = document.querySelector('.arriendo-lista');

    let planilla = ""

    for(let alquiler of propiedades_alquiler){
        planilla += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${alquiler.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${alquiler.nombre}
                </h5>
                <p class="card-text">
                ${alquiler.descripcion}
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${alquiler.baño} Baño
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.precio}</p>

                <p id="fumar">
                  <i class="fas fa-smoking-ban"></i> ${alquiler.smoke ? 'Se permite fumar' : 'No se permite fumar'} 
                </p>
              
                <p id="mascota">
                  <i class="fa-solid fa-ban"></i> ${alquiler.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>  
          </div>`
    }
    
    lista ? lista.innerHTML = planilla : ""





    //VENTAS
// gerenado arreglos de propiedades de alquiler o arriendo
const propiedades_venta = [
    { id: 3,
        imagen: 'https://www.cosasdearquitectos.com/wp-content/uploads/ASTON2-1536x960.jpg',
        nombre: 'Arriendo comodo departamento',
        descripcion: 'Este elegante condominio moderno esta ubicado en una tranquila zona residencial',
        ubicacion: 'Coronel Elier 4400, San Alberto Hurtado, Estación Central, RM (Metropolitana)',
        habitaciones: 4,
        baño: 1,
        precio: 650000,
        smoke: false,
        pets: true
    },
    {   id: 3,
        imagen: 'https://www.cosasdearquitectos.com/wp-content/uploads/ASTON1.jpg',
        nombre: 'Arriendo comodo departamento con vista al mar',
        descripcion: 'Este elegante condominio moderno esta ubicado en una tranquila zona residencial',
        ubicacion: 'Aqui Souper 4400, San Alberto Hurtado, Estación Central, RM (Metropolitana)',
        habitaciones: 3,
        baño: 1,
        precio: 450000,
        smoke: false,
        pets: true
    },
   
    {   id: 3,
        imagen: 'https://i.pinimg.com/736x/dc/2e/cb/dc2ecb5c9349cc59c42a4fedd33895f1.jpg',
        nombre: 'Arriendo comodo departamento',
        descripcion: 'Este elegante condominio moderno esta ubicado en una tranquila zona residencial',
        ubicacion: 'Quirariqui Souper 4400, San Alberto Hurtado, Estación Central, RM (Metropolitana)',
        habitaciones: 2,
        baño: 1,
        precio: 550000,
        smoke: true,
        pets: false
    }
    ];

    // Aqui llamo la clase o ID del contenedor o lo que sea de mi HTML

    const lista_e = document.querySelector('.venta-lista');

    let planilla_e = ""

    for(let venta of propiedades_venta){
        planilla_e += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${venta.nombre}
                </h5>
                <p class="card-text">
                ${venta.descripcion}
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${venta.baño} Baño
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.precio}</p>

                <p id="fumar">
                  <i class="fas fa-smoking-ban"></i> ${venta.smoke ? 'Se permite fumar' : 'No se permite fumar'} 
                </p>
              
                <p id="mascota">
                  <i class="fa-solid fa-ban"></i> ${venta.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>  
          </div>`
    }

    lista_e ? lista_e.innerHTML = planilla_e :""

