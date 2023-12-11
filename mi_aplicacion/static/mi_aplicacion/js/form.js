function validarFormulario() {
    var nombre = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("phone").value;
    var asunto = document.getElementById("affair").value;
    

    
    if (nombre === "" || email === "" || telefono === "" || asunto === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    
    var telefonoRegex = /^\d{10}$/; 
    if (!telefono.match(telefonoRegex)) {
        alert("Por favor, ingrese un número de teléfono válido.");
        return false;
    }

    

    return true; 
}



