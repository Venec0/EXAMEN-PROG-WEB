$(document).ready(function() {
    $("#unico").click(function() {
        var email = $("input[type='email']").val();
        var password = $("input[type='contraseña']").val();
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
            // Aquí puedes agregar la lógica para enviar el formulario
        }
    });
});
