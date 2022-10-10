
document.getElementById("formulario").addEventListener("submit", crear)
function crear(e){
    usuario = document.getElementById("usuario").value
    contrase = document.getElementById("contrase").value


    let reg =  {
        usuario, contrase
    }
  
   if(localStorage.getItem("Usuario") === null){
        let regis = [];
        regis.push(reg);
        localStorage.setItem("Usuario", JSON.stringify(regis))
    } else{
        let regis = JSON.parse(localStorage.getItem("Usuario"))
        regis.push(reg)
        localStorage.setItem("Usuario", JSON.stringify(regis))
      
    }
    
    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();
    alert("Usuario Guardado Correctamente")
}

function leer(){
    let regis = JSON.parse(localStorage.getItem("Usuario"));
    for(let i=0; i < regis.length; i++){
    let nombre = regis[i].usuario;
    let ciudad = regis[i].contrase;


    }
    }
    leer();


//----------------------------------------------------------------------------



function redireccionar(){window.location="inicio.html";}

function validar(){

  let regis = JSON.parse(localStorage.getItem("Usuario"));
  usuario = document.getElementById('usu').value;
  contraseña = document.getElementById('pass').value;
 
  const user = regis.find(user => user.usuario === usuario && user.contrase === contraseña); 
  if(user){
    redireccionar();
  }
  else{
    alert('El Usuario no existe! Por favor cree una cuenta')
  }
}