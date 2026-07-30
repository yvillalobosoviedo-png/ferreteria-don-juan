require('dotenv').config();


console.log("Configuración cargada:");
console.log("PORT:", process.env.PORT);
console.log("DB_URI:", process.env.DB_URI);
console.log("API_KEY:", process.env.API_KEY);


// ===== HONEYPOT - Validación de formulario =====

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('formContacto');
  const mensaje = document.getElementById('mensajeResultado');

  if (formulario) {
    formulario.addEventListener('submit', function(evento) {
      evento.preventDefault();

      // Capturar datos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensajeTexto = document.getElementById('mensaje').value.trim();
      const campoTrampa = document.getElementById('segundo_apellido').value.trim();

      // Validar campo honeypot (si tiene texto, es un bot)
      if (campoTrampa !== "") {
        mensaje.textContent = "ACCESO BLOQUEADO: Actividad de bot detectada.";
        mensaje.className = "resultado error";
        console.warn("Honeypot detectó un bot.");
        return;
      }

      // Validar campos obligatorios
      if (!nombre || !email || !mensajeTexto) {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.className = "resultado error";
        return;
      }

      // Simular envío exitoso (aquí conectarías con un servidor)
      mensaje.textContent = `¡Gracias ${nombre}! Tu mensaje fue enviado correctamente.`;
      mensaje.className = "resultado exito";
      console.log("Mensaje enviado:", { nombre, email, mensaje: mensajeTexto });

      // Limpiar formulario
      formulario.reset();
    });
  }
});