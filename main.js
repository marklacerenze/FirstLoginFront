function validar(){
    var nombre, apellido, email, password, expresion;
    nombre = document.getElementById('nombre').value; //guardo el valor que está en el campo de la variable
    apellido = document.getElementById('apellido').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    //expresion = document.getElementById("")

    if(nombre === ""){
        alert("Ingrese un nombre");
        return false; //false hace que permanezca en la pagina. 
    }
}

