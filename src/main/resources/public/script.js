// Obtener los elementos del DOM
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginBox = document.querySelector('.form-box.login');
const registerBox = document.querySelector('.form-box.register');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// Función para mostrar el formulario de registro
function showRegisterForm() {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
}

// Función para mostrar el formulario de inicio de sesión
function showLoginForm() {
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
}

// Evento para mostrar el formulario de registro cuando se hace clic en el enlace "Registrarse"
registerLink.addEventListener('click', showRegisterForm);

// Evento para mostrar el formulario de inicio de sesión cuando se hace clic en el enlace "Loguearse"
loginLink.addEventListener('click', showLoginForm);
