// Recuperar usuarios registrados del Local Storage
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

// Definir una función para iniciar sesión
function iniciarSesion() {
  // Obtener los datos del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Agregar mensajes de depuración
  console.log("Intento de inicio de sesión. Usuario:", username, "Contraseña:", password);

  // Buscar al usuario registrado en el arreglo de usuarios registrados
  const usuarioRegistrado = usuariosRegistrados.find(
    (user) => user.username === username && user.password === password
  );

  // Agregar mensaje de depuración
  console.log("Usuario encontrado:", usuarioRegistrado);

  // Si el usuario registrado existe, iniciar sesión
  if (usuarioRegistrado) {
    // Agregar mensaje de depuración
    console.log("Inicio de sesión exitoso. Redireccionando al usuario...");

    // Redireccionar al usuario a la página principal (asegúrate de que la ruta sea correcta)
    window.location.href = "index2.html";
  } else {
    // Agregar mensaje de depuración
    console.log("Usuario o contraseña incorrectos.");

    // Si el usuario registrado no existe, mostrar un mensaje de error
    document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
  }
}

// Añadir un evento al botón de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  iniciarSesion();
});
