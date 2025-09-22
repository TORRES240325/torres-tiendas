// Seleccionamos el formulario
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que la página se recargue

  // Tomar los valores de los inputs
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validar
  if (usuario === "" || password === "") {
    alert("⚠️ Por favor, llena todos los campos.");
  } else {
    alert("✅ Bienvenido, " + usuario + "!");
    
    // Opcional: redirigir a la página de productos
    // window.location.href = "productos.html";
  }
});
