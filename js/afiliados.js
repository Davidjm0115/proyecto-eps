


//AFILIADOS

document.getElementById("formulario").addEventListener("submit", crear)
function crear(e){
    identifiacion = document.getElementById("identifiacion").value
    nombre = document.getElementById("nombre").value
    fechahora = document.getElementById("fechahora").value
    especialidad = document.getElementById("especialidad").value

    let afi =  {
        identifiacion, nombre, fechahora, especialidad
    }
  
   if(localStorage.getItem("Afiliados") === null){
        let afilia = [];
        afilia.push(afi);
        localStorage.setItem("Afiliados", JSON.stringify(afilia))
    } else{
        let afilia = JSON.parse(localStorage.getItem("Afiliados"))
        afilia.push(afi)
        localStorage.setItem("Afiliados", JSON.stringify(afilia))
      
    }
    
    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();
    alert("Usuario Guardado Correctamente")
}
function leer(){
    let afilia = JSON.parse(localStorage.getItem("Afiliados"));
    document.getElementById("tbody").innerHTML ="";
    for(let i=0; i < afilia.length; i++){
    let identifiacion = afilia[i].identifiacion;
    let nombre = afilia[i].nombre;
    let fechahora = afilia[i].fechahora;
    let especialidad = afilia[i].especialidad;
    document.getElementById("tbody").innerHTML +=
    `<tr>
    <td>${identifiacion}</td>
    <td>${nombre}</td>
    <td>${fechahora}</td>
    <td>${especialidad}</td>
    <td><button class="btn btn-success" onclick="Editar('${nombre}')"><i class="fa-sharp fa-solid fa-pen-to-square"></i> Edit</button>
    <button class="btn btn-danger" onclick="eliminar('${nombre}')" <i class="fa-sharp fa-solid fa-trash"></i></input> >Delete</button></td>
    `
    }
    }
    leer();
    function Editar(nombre){
        let afilia = JSON.parse(localStorage.getItem("Afiliados"));
        for(let i= 0; i < afilia.length; i++){
            if(afilia[i].nombre === nombre){
                document.getElementById("body").innerHTML = `
                <div class="container mt-4" id="body" >
                <div class="card col-6 d-flex justify-content-center">
                    <div class="card-body">
                        <form id="formulario">
                <div class="row">       
                      <h5 class="card-title bg-secondary">Registro De Afiliados</h5>
                      <p class="card-text bg-secondary"></p>
                      <div class="mb-3">
                        <label for="nombre" class="form-label">Tipo Identifiacion</label>
                        <select class="form-select" aria-label="Default select example" id="tipo">
                            <option selected>Elija tipo de indentificaion</option>
                            <option value="chevrolet 1">CEDULA DE CIUDADNIA</option>
                            <option value="chevrolet 2">CEDULA DE EXTRANJERIA</option>
                            <option value="chevrolet 3">TARJETA DE IDENTIDAD</option>
                            <option value="chevrolet 3">REGISTRO CIVIL</option>
                            <option value="chevrolet 3">OTRO</option>
                          </select>
                      </div>
                      <div class="mb-3">
                        <label for="apellido" class="form-label">No. Identifiacion</label>
                        <input type="number" class="form-control" id="nidentifiacion" value="${afilia[i].identifiacion}">
                      </div>
                      <div class="mb-3">
                        <label for="edad" class="form-label">Nombre paciente</label>
                        <input type="text" class="form-control" id="nnombre" value="${afilia[i].nombre}">
                      </div>
                      <div class="mb-3">
                        <label for="fecha" class="form-label">Fecha y hora</label>
                        <input type="datetime" class="form-control" id="nfechahora" value="${afilia[i].fechahora}">
                      </div>
                      <div class="mb-3">
                        <label for="nombre" class="form-label">Especialidad</label>
                        <select class="form-select" aria-label="Default select example" id="nespecialidad">
                            <option selected>Elija Especialidad</option>
                            <option value="chevrolet 1">MEDICO GENERAL</option>
                            <option value="chevrolet 2">OFTALMOLOGIA</option>
                            <option value="chevrolet 3">PEDIATRIA</option>
                            <option value="chevrolet 3">GINECOLOGIA</option>
                            <option value="chevrolet 3">ODONTOLOGIA</option>
                          </select>
                      </div>               
                      <div class="mb-3 form-group col-3" style="margin-left: 155px ;">
                        <input type="submit" class="form-control  mb-3 btn btn-primary" value="Registrar">
                      </div>
                      <div class="mb-3 form-group col-3">
                        <input type="submit" class="form-control  mb-3 btn btn-danger" value="Cancelar">
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
            let afilia = JSON.parse(localStorage.getItem("Afiliados"));
            afilia[i].identifiacion = document.getElementById('nidentifiacion').value;
            afilia[i].nombre = document.getElementById('nnombre').value;
            afilia[i].fechahora = document.getElementById('nfechahora').value;
            afilia[i].especialidad = document.getElementById('nespecialidad').value;
            
            localStorage.setItem("Afiliados", JSON.stringify(afilia));
        }
        function eliminar(nombre){
            let afilia = JSON.parse(localStorage.getItem("Afiliados"));
            for(let i= 0; i < afilia.length; i++){
                if(afilia[i].nombre == nombre){
                    afilia.splice(i,1);
                    alert('Dato eliminado Correctamente')
                }
            } 
            localStorage.setItem("Afiliados", JSON.stringify(afilia));
            leer();
        }