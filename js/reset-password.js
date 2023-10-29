document.getElementById("reset-password-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usernameOrEmail = document.getElementById("username").value;
    const newPasswordSection = document.getElementById("reset-password-section");
    const errorMessage = document.getElementById("error-message");
  
    const storedUsers = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    const user = storedUsers.find((u) => u.username === usernameOrEmail || u.email === usernameOrEmail);
  
    if (user) {
      // Mostrar el formulario de cambio de contraseña
      newPasswordSection.style.display = "block";
      errorMessage.textContent = "";
    } else {
      // Usuario no encontrado
      newPasswordSection.style.display = "none";
      errorMessage.textContent = "Usuario no encontrado. Verifica tu nombre de usuario o correo electrónico.";
    }
  });
  
  document.getElementById("change-password-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const oldPassword = document.getElementById("old-password").value;
  
    const storedUsers = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    const usernameOrEmail = document.getElementById("username").value;
    const user = storedUsers.find((u) => u.username === usernameOrEmail || u.email === usernameOrEmail);
  
    if (user) {
      if (oldPassword === user.password) {
        if (newPassword === confirmPassword) {
          // Cambiar la contraseña
          user.password = newPassword;
          localStorage.setItem("usuariosRegistrados", JSON.stringify(storedUsers));
  
          alert("Contraseña cambiada exitosamente. Redirigiendo al inicio de sesión...");
          window.location.href = "login.html";
        } else {
          alert("Las contraseñas nuevas no coinciden. Inténtalo de nuevo.");
        }
      } else {
        alert("La contraseña anterior es incorrecta. Inténtalo de nuevo.");
      }
    } else {
      alert("Usuario no encontrado. Verifica tu nombre de usuario o correo electrónico.");
    }
  });
  