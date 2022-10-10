document.getElementById("formularioemplea").addEventListener("submit", crear)
function crear(e){
    identifiacion = document.getElementById("identifiacion").value
    nombre = document.getElementById("nombre").value
    empresa = document.getElementById("empresa").value
    ciudad = document.getElementById("ciudad").value
    direccion = document.getElementById("direccion").value
    correo = document.getElementById("correo").value
    codigopostal = document.getElementById("codigopostal").value
    regimen = document.getElementById("regimen").value

    let empl =  {
        identifiacion, nombre,empresa, ciudad, direccion, correo, codigopostal, regimen
    }
  
   if(localStorage.getItem("Empleadores") === null){
        let emplea = [];
        emplea.push(empl);
        localStorage.setItem("Empleadores", JSON.stringify(emplea))
    } else{
        let emplea = JSON.parse(localStorage.getItem("Empleadores"))
        emplea.push(empl)
        localStorage.setItem("Empleadores", JSON.stringify(emplea))
      
    }
    
    leer();
    document.getElementById("formularioemplea").reset();
    e.preventDefault();
    alert("Usuario Guardado Correctamente")
}
function leer(){
    let emplea = JSON.parse(localStorage.getItem("Empleadores"));
    document.getElementById("tbody").innerHTML ="";
    for(let i=0; i < emplea.length; i++){
    let identifiacion = emplea[i].identifiacion;
    let nombre = emplea[i].nombre;
    let empresa = emplea[i].empresa;
    let ciudad = emplea[i].ciudad;
    let direccion = emplea[i].direccion;
    let correo = emplea[i].correo;
    let codigopostal = emplea[i].codigopostal;
    let regimen = emplea[i].regimen;
    document.getElementById("tbody").innerHTML +=
    `<tr>
    <td>${identifiacion}</td>
    <td>${nombre}</td>
    <td>${empresa}</td>
    <td>${ciudad}</td>
    <td>${direccion}</td>
    <td>${correo}</td>
    <td>${codigopostal}</td>
    <td>${regimen}</td>
    <td><button class="btn btn-success" onclick="Editar('${nombre}')"><i class="fa-sharp fa-solid fa-pen-to-square"></i> Edit</button>
    <button class="btn btn-danger" onclick="eliminar('${nombre}')"><i class="fa-sharp fa-solid fa-trash"></i> Delete</button></td>
    `
    }
    }
    leer();
    function Editar(nombre){
        let emplea = JSON.parse(localStorage.getItem("Empleadores"));
        for(let i= 0; i < emplea.length; i++){
            if(emplea[i].nombre === nombre){
                document.getElementById("body").innerHTML = `
                <div class="container mt-4" id="body">
                <div class="card col-6 d-flex justify-content-center">
                    <div class="card-body">
                        <form id="formularioemplea">
                <div class="row">       
                      <h5 class="card-title bg-secondary">Registro De Empleadores</h5>
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
                        <input type="number" class="form-control" id="nidentifiacion" value="${emplea[i].identifiacion}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Empresa</label>
                        <input type="text" class="form-control" id="nempresa" value="${emplea[i].empresa}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nnombre" value="${emplea[i].nombre}">
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
                        <input type="text" class="form-control" id="ndireccion" value="${emplea[i].direccion}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="ncorreo" value="${emplea[i].correo}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="edad" class="form-label">Codigo postal</label>
                        <input type="text" class="form-control" id="ncodigopostal" value="${emplea[i].codigopostal}">
                      </div>
                      <div class="mb-3 col-6">
                        <label for="nombre" class="form-label">Regimen</label>
                        <select class="form-select" aria-label="Default select example" id="nregimen">
                            <option selected>Elija regimen</option>
                            <option value="RESPONSABLE DE IVA">RESPONSABLE DE IVA</option>
                            <option value="PERSONA NATURAL RESPONSABLE DE IVA">PERSONA NATURAL RESPONSABLE DE IVA</option>
                            <option value="REGIMEN ESPECIAL">REGIMEN ESPECIAL</option>
                            <option value="PERSONA NATURAL NO RESPONSABLE DE IVA">PERSONA NATURAL NO RESPONSABLE DE IVA</option>
                          </select>                   
                      </div>   
                               
                      <div class="mb-3 form-group col-3" style="margin-left: 155px ;">
                        <input type="submit" class="form-control  mb-3 btn btn-primary" value="Registrar ">
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
            let indepe = JSON.parse(localStorage.getItem("Empleadores"));
            indepe[i].identifiacion = document.getElementById('nidentifiacion').value;
            indepe[i].nombre = document.getElementById('nnombre').value;
            indepe[i].empresa = document.getElementById('nempresa').value;
            indepe[i].ciudad = document.getElementById('nciudad').value;
            indepe[i].direccion = document.getElementById('ndireccion').value;
            indepe[i].correo = document.getElementById('ncorreo').value;
            indepe[i].codigopostal = document.getElementById('ncodigopostal').value;
            indepe[i].regimen = document.getElementById('nregimen').value;

            localStorage.setItem("Empleadores", JSON.stringify(indepe));
        }
        function eliminar(nombre){
            let indepe = JSON.parse(localStorage.getItem("Empleadores"));
            for(let i= 0; i < indepe.length; i++){
                if(indepe[i].nombre == nombre){
                    indepe.splice(i,1);
                    alert('Dato eliminado Correctamente')
                }
            } 
            localStorage.setItem("Empleadores", JSON.stringify(indepe));
            leer();
        }
