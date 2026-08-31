const CARRITO_KEY = 'hj_carrito_count';

function obtenerContadorCarrito() {
  return parseInt(localStorage.getItem(CARRITO_KEY), 10) || 0;
}

function actualizarContadorCarrito(cantidad) {
  localStorage.setItem(CARRITO_KEY, cantidad);
  const badge = document.querySelector('.carrito-contador');
  if (badge) {
    badge.textContent = cantidad;
    badge.hidden = cantidad === 0;
  }
}

function initCarrito() {
  const carritoHeader = document.querySelector('.carrito-header');
  if (!carritoHeader) return;

  let badge = carritoHeader.querySelector('.carrito-contador');
  if (!badge) {
    badge = document.createElement('span');
    badge.className = 'carrito-contador';
    badge.setAttribute('aria-label', 'Cantidad de productos en el carrito');
    carritoHeader.appendChild(badge);
  }

  const cantidad = obtenerContadorCarrito();
  badge.textContent = cantidad;
  badge.hidden = cantidad === 0;

  carritoHeader.addEventListener('click', () => {
    const nuevaCantidad = obtenerContadorCarrito() + 1;
    actualizarContadorCarrito(nuevaCantidad);
  });
}

document.addEventListener('DOMContentLoaded', initCarrito);
