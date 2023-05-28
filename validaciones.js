$(document).ready(function() {
    $("#unico").click(function() {
        var email = $("input[type='email']").val();
        var password = $("input[type='password']").val();
        var error_message = "";
        
        if (email == "") {
            error_message += "El campo de correo electrónico es obligatorio.\n";
        }
        
        if (password == "") {
            error_message += "El campo de contraseña es obligatorio.\n";
        }
        
        if (error_message != "") {
            alert(error_message);
            return false;
        } else {
            alert('¡Inicio de sesión exitoso!')
            window.location.href = "index2.html";
        }
    });
    // Obtener referencia al elemento del checkbox
    var RecuerdameCheckbox = document.getElementById("RecuerdameCheckbox");

    // Obtener el valor almacenado en el Local Storage
    var RememberMeValue = localStorage.getItem("RememberMe");

    // Verificar el valor almacenado y establecer el estado del checkbox
    if (RememberMeValue === "true") {
        RecuerdameCheckbox.checked = true;
    }
    // Escuchar el evento de cambio del checkbox
    RecuerdameCheckbox.addEventListener("change", function() {
    // Guardar el estado del checkbox en el Local Storage
    localStorage.setItem("RememberMe", RecuerdameCheckbox.checked);
    });
});
