$(document).ready(function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('activate');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.add('activate');
    });
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
            alert('¡Inicio de sesión exitoso!');
            window.location.href = "index2.html";
        }
    });

    // Escucha el evento de cambio en la casilla de texto de correo
    var emailInput = document.querySelector('input[type="email"]');
    emailInput.addEventListener('input', function() {
        if (emailInput.value.length > 0) {
            emailInput.classList.add('has-value');
        } else {
            emailInput.classList.remove('has-value');
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
