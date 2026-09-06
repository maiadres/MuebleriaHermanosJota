let contador = 0;

function actualizarContadorCarrito() {
  const badge = document.querySelector('.carrito-contador');
  if (badge) {
    badge.textContent = contador;
    badge.hidden = contador === 0;
  }
}

function agregarProductoActual() {
  const productId = Number(new URLSearchParams(window.location.search).get('id'));
  if (!productId || typeof productos === 'undefined') return;

  const producto = productos.find((item) => item.id === productId);
  if (!producto) return;

  contador += 1;
  actualizarContadorCarrito();
}

function initCarrito() {
  const carritoHeader = document.querySelector('.carrito-header');
  const addButton = document.querySelector('.btn-primary');

  if (carritoHeader) {
    let badge = carritoHeader.querySelector('.carrito-contador');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'carrito-contador';
      badge.setAttribute('aria-label', 'Cantidad de productos en el carrito');
      carritoHeader.appendChild(badge);
    }
  }

  contador = 0;
  actualizarContadorCarrito();

  if (addButton) {
    addButton.addEventListener('click', agregarProductoActual);
  }
}

document.addEventListener('DOMContentLoaded', initCarrito);
