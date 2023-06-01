
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar los campos y mostrar mensajes de error correspondientes
  if (username.trim() === '' || password.trim() === '') {
    errorMessage.textContent = 'Por favor, completa todos los campos.';
    console.log("campo vacio");
  } else if (username !== 'admin' || password !== 'admin') {
    errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    console.log("error seña");
  } else {
    // Aquí puedes realizar otras acciones, como enviar el formulario o redireccionar a otra página
    // Por ejemplo:
    // form.submit();
    // window.location.href = 'dashboard.html';
    window.location.href = 'index.html';
    console.log(correcto);
  }
});