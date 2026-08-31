const formularioContacto = document.getElementById('formulario-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

const reglas = {
  nombre: {
    validar: (valor) => valor.trim().length >= 2,
    mensaje: 'Ingresá un nombre de al menos 2 caracteres.',
  },
  email: {
    validar: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim()),
    mensaje: 'Ingresá un email válido.',
  },
  mensaje: {
    validar: (valor) => valor.trim().length >= 10,
    mensaje: 'El mensaje debe tener al menos 10 caracteres.',
  },
};

function mostrarError(campo, texto) {
  const errorEl = document.getElementById(`error-${campo}`);
  const input = document.getElementById(campo);
  if (errorEl) errorEl.textContent = texto;
  if (input) input.classList.add('campo-invalido');
}

function limpiarError(campo) {
  const errorEl = document.getElementById(`error-${campo}`);
  const input = document.getElementById(campo);
  if (errorEl) errorEl.textContent = '';
  if (input) input.classList.remove('campo-invalido');
}

function validarCampo(campo) {
  const input = document.getElementById(campo);
  if (!input) return true;

  const valor = input.value;
  const regla = reglas[campo];

  if (!regla.validar(valor)) {
    mostrarError(campo, regla.mensaje);
    return false;
  }

  limpiarError(campo);
  return true;
}

function validarFormulario() {
  return Object.keys(reglas).every(validarCampo);
}

function mostrarExito() {
  if (mensajeExito) {
    mensajeExito.hidden = false;
    mensajeExito.focus();
  }
}

function ocultarExito() {
  if (mensajeExito) mensajeExito.hidden = true;
}

async function enviarFormulario(event) {
  event.preventDefault();
  ocultarExito();

  if (!validarFormulario()) return;

  const boton = formularioContacto.querySelector('button[type="submit"]');
  boton.disabled = true;
  boton.textContent = 'Enviando…';

  await new Promise((resolve) => setTimeout(resolve, 800));

  formularioContacto.reset();
  Object.keys(reglas).forEach(limpiarError);
  mostrarExito();

  boton.disabled = false;
  boton.textContent = 'Enviar mensaje';
}

if (formularioContacto) {
  formularioContacto.addEventListener('submit', enviarFormulario);

  Object.keys(reglas).forEach((campo) => {
    const input = document.getElementById(campo);
    if (input) {
      input.addEventListener('blur', () => validarCampo(campo));
      input.addEventListener('input', () => {
        if (input.classList.contains('campo-invalido')) validarCampo(campo);
      });
    }
  });
}
