// ===== VARIABLES DE ENTORNO =====
//require('dotenv').config();
/*
console.log("🔧 Configuración cargada:");
console.log("PORT:", process.env.PORT);
console.log("DB_URI:", process.env.DB_URI);
console.log("API_KEY:", process.env.API_KEY);
*/
// ============================================
// ===== HONEYPOT - Validación de formulario =====
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formContacto");
  const mensaje = document.getElementById("mensajeResultado");

  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      // Capturar datos
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensajeTexto = document.getElementById("mensaje").value.trim();
      const campoTrampa = document
        .getElementById("segundo_apellido")
        .value.trim();

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

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        mensaje.textContent =
          "Por favor, ingresa un correo electrónico válido.";
        mensaje.className = "resultado error";
        return;
      }

      // SIMULAR ENVÍO EXITOSO
      mensaje.textContent = "Enviando mensaje...";
      mensaje.className = "resultado exito";

      setTimeout(function () {
        const nuevoMensaje = {
          id: Date.now(),
          nombre: nombre,
          email: email,
          mensaje: mensajeTexto,
          fecha: new Date().toLocaleString("es-CR"),
        };

        let mensajesGuardados =
          JSON.parse(localStorage.getItem("mensajesDonJuan")) || [];
        mensajesGuardados.push(nuevoMensaje);
        localStorage.setItem(
          "mensajesDonJuan",
          JSON.stringify(mensajesGuardados)
        );

        mensaje.textContent =
          "¡Gracias " +
          nombre +
          "! Tu mensaje fue enviado correctamente. Te contactaremos pronto.";
        mensaje.className = "resultado exito";

        formulario.reset();

        console.log("Mensaje enviado:", nuevoMensaje);
        console.log("Total de mensajes:", mensajesGuardados.length);

        setTimeout(function () {
          mensaje.textContent = "";
          mensaje.className = "resultado";
        }, 6000);
      }, 1500);
    });
  }

  // ============================================
  // ===== BARRA DE PROGRESO DE LECTURA =====
  // ============================================

  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  }

  // ============================================
  // ===== ANIMACIONES FADE-IN AL SCROLL =====
  // ============================================

  const fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }


  
// Botón Volver Arriba
const btnTop = document.getElementById('btnVolverArriba');
if (btnTop) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      btnTop.classList.add('visible');
    } else {
      btnTop.classList.remove('visible');
    }
  });

  btnTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


});

// ============================================
// ===== FUNCIONES PARA CONSOLA =====
// ============================================

// Función para ver mensajes guardados
function verMensajes() {
  const mensajes = JSON.parse(localStorage.getItem("mensajesDonJuan")) || [];
  console.log("Mensajes guardados:", mensajes);
  return mensajes;
}

// Función para limpiar mensajes guardados
function limpiarMensajes() {
  localStorage.removeItem("mensajesDonJuan");
  console.log("Mensajes eliminados.");
}
