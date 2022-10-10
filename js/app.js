
//INDEPENDIENTES

document.getElementById("formularioinde").addEventListener("submit", crear)
function crear(e){
    identifiacion = document.getElementById("identifiacion").value
    nombre = document.getElementById("nombre").value
    ciudad = document.getElementById("ciudad").value
    direccion = document.getElementById("direccion").value
    correo = document.getElementById("correo").value
    barrio = document.getElementById("barrio").value
    sede = document.getElementById("sede").value

    let inde =  {
        identifiacion, nombre, ciudad, direccion, correo, barrio, sede
    }
  
   if(localStorage.getItem("Independiente") === null){
        let indepe = [];
        indepe.push(inde);
        localStorage.setItem("Independiente", JSON.stringify(indepe))
    } else{
        let indepe = JSON.parse(localStorage.getItem("Independiente"))
        indepe.push(inde)
        localStorage.setItem("Independiente", JSON.stringify(indepe))
      
    }
    
    leer();
    document.getElementById("formularioinde").reset();
    e.preventDefault();
    alert("Usuario Guardado Correctamente")
}
function leer(){
    let indepe = JSON.parse(localStorage.getItem("Independiente"));
    document.getElementById("tbody").innerHTML ="";
    for(let i=0; i < indepe.length; i++){
    let identifiacion = indepe[i].identifiacion;
    let nombre = indepe[i].nombre;
    let ciudad = indepe[i].ciudad;
    let direccion = indepe[i].direccion;
    let correo = indepe[i].correo;
    let barrio = indepe[i].barrio;
    let sede = indepe[i].sede;
    document.getElementById("tbody").innerHTML +=
    `<tr>
    <td>${identifiacion}</td>
    <td>${nombre}</td>
    <td>${ciudad}</td>
    <td>${direccion}</td>
    <td>${correo}</td>
    <td>${barrio}</td>
    <td>${sede}</td>
    <td><button class="btn btn-success" onclick="Editar('${nombre}')"><i class="fa-sharp fa-solid fa-pen-to-square"></i> Edit</button>
    <button class="btn btn-danger" onclick="eliminar('${nombre}')"> <i class="fa-sharp fa-solid fa-trash"></i></input> Delete </button></td>
    `
    }
    }
    leer();
    function Editar(nombre){
        let indepe = JSON.parse(localStorage.getItem("Independiente"));
        for(let i= 0; i < indepe.length; i++){
            if(indepe[i].nombre === nombre){
                document.getElementById("body").innerHTML = `
                <div class="container mt-4" id="body">
                <div class="card offset-3 col-6 d-flex">
                    <div class="card-body">
                        <form id="formularioinde">
                <div class="row">       
                <h5 class="card-title" style="text-align: center;">Registro De independientes</h5>
                      <p class="card-text bg-secondary"></p>
                      <div class="mb-3 col-6">
                        <label for="nombre" class="form-label">Tipo Identifiacion</label>
                        <select class="form-select" aria-label="Default select example" id="tip">
                            <option selected>Elija tipo de indentificaion</option>
                            <option value="chevrolet 1">CEDULA DE CIUDADNIA</option>
                            <option value="chevrolet 2">CEDULA DE EXTRANJERIA</option>
                            <option value="chevrolet 3">TARJETA DE IDENTIDAD</option>
                            <option value="chevrolet 3">REGISTRO CIVIL</option>
                            <option value="chevrolet 3">OTRO</option>
                          </select>
                      </div>
                      <div class="mb-3 col-6">
                        <label for="apellido" class="form-label">No. Identifiacion</label>
                        <input type="number" class="form-control" id="nidentifiacion" value="${indepe[i].identifiacion}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nnombre" value="${indepe[i].nombre}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="nombre" class="form-label">Ciudad</label>
                        <select class="form-select" aria-label="Default select example" id="nciudad">
                            <option selected>Elija Ciudad</option>
                            <option value="Cartagena">Cartagena</option>
                            <option value="Barranquilla">Barranquilla</option>
                            <option value="Medellin">Medellin</option>
                            <option value="Bogota">Bogota</option>
                            <option value="Cali">Cali</option>
                          </select>
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="ndireccion" value="${indepe[i].direccion}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="ncorreo" value="${indepe[i].correo}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Barrio</label>
                        <input type="email" class="form-control" id="nbarrio" value="${indepe[i].barrio}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="nombre" class="form-label">Sede</label>
                        <select class="form-select" aria-label="Default select example" id="nsede">
                            <option selected>Elija Sede</option>
                            <option value="NORTE">NORTE</option>
                            <option value="SUR">SUR</option>
                            <option value="ESTE">ESTE</option>
                            <option value="OESTE">OESTE</option>
                            <option value="CENTRO">CENTRO</option>
                          </select>                   
                      </div>             
                      <div class="mb-3">
                      <td><button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button></td>
                      <td><button class="btn btn-danger">Cancelar</button></td> 
                      </div>
      
                    </form>
                    </div>
                  </div>
                </div>
         </div>
                `
                }
        }
        }
        function actualizar(i){
            debugger;
            let indepe = JSON.parse(localStorage.getItem("Independiente"));
            indepe[i].identifiacion = document.getElementById('nidentifiacion').value;
            indepe[i].nombre = document.getElementById('nnombre').value;
            indepe[i].ciudad = document.getElementById('nciudad').value;
            indepe[i].direccion = document.getElementById('ndireccion').value;
            indepe[i].correo = document.getElementById('ncorreo').value;
            indepe[i].barrio = document.getElementById('nbarrio').value;
            indepe[i].sede = document.getElementById('nsede').value;

            localStorage.setItem("Independiente", JSON.stringify(indepe));
        }
        function eliminar(nombre){
            let indepe = JSON.parse(localStorage.getItem("Independiente"));
            for(let i= 0; i < indepe.length; i++){
                if(indepe[i].nombre == nombre){
                    indepe.splice(i,1);
                    alert('Dato eliminado Correctamente')
                }
            } 
            localStorage.setItem("Independiente", JSON.stringify(indepe));
            leer();
        }


