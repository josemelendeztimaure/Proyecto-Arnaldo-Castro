

function validar() {

    

    const usuario = document.getElementById("usuario").value;

    const password = document.getElementById("password").value;
    
    if (usuario == "abcdwxyz" && password == "JulioHerrera1591" )
    {
      window.location="home.html";
    }
    else {   
        alert("Por favor, ingresa el usuario y/o contraseña correctamente.");
    }

}

