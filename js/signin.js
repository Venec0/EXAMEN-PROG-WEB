// Definir un arreglo para almacenar usuarios registrados
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

// Definir una función para registrar un nuevo usuario
function registrarUsuario() {
  // Obtener los datos del formulario
  const newUsername = document.getElementById("new-username").value;
  const name = document.getElementById("name").value;
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Validar los datos del formulario
  if (newUsername === "" || name === "" || newPassword === "" || confirmPassword === "") {
    document.getElementById("registration-message").textContent = "Por favor, complete todos los campos.";
    return;
  }

  if (newPassword !== confirmPassword) {
    document.getElementById("registration-message").textContent = "Las contraseñas no coinciden. Inténtelo de nuevo.";
    return;
  }

  // Registrar al nuevo usuario en el arreglo de usuarios registrados
  usuariosRegistrados.push({
    username: newUsername,
    password: newPassword,
    name: name
  });

  // Almacenar usuarios registrados en el Local Storage
  localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

  // Redireccionar al usuario al login solo si el registro se realizó correctamente
  window.location.href = "login.html";
}

// Añadir un evento al botón de registro
document.getElementById("signin-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  registrarUsuario();
});