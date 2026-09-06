const CLAVE_CARRITO = "carritoHermanosJota";
let carrito = [];

function leerCarrito() {
  try {
    const productosGuardados = JSON.parse(localStorage.getItem(CLAVE_CARRITO));
    return Array.isArray(productosGuardados) ? productosGuardados : [];
  } catch {
    return [];
  }
}

function guardarCarrito() {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

function cantidadTotal() {
  return carrito.reduce((total, producto) => total + producto.cantidad, 0);
}

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

function actualizarContadorCarrito() {
  const badge = document.querySelector(".carrito-contador");
  if (!badge) return;

  const total = cantidadTotal();
  badge.textContent = total;
  badge.hidden = false;
  badge.setAttribute("aria-label", `${total} productos en el carrito`);
}

function renderizarCarrito() {
  const items = document.querySelector(".carrito-items");
  const resumen = document.querySelector(".carrito-resumen");
  if (!items || !resumen) return;

  if (carrito.length === 0) {
    items.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
    resumen.querySelector(".carrito-total").textContent = formatPrice(0);
    resumen.hidden = true;
    actualizarContadorCarrito();
    return;
  }

  items.innerHTML = carrito
    .map(
      (producto) => `
    <article class="carrito-item">
      <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-item-imagen">
      <div class="carrito-item-info">
        <h3>${producto.nombre}</h3>
        <p>${producto.cantidad} × ${formatPrice(producto.precio)}</p>
        <div class="carrito-cantidad" aria-label="Cantidad de ${producto.nombre}">
          <button type="button" class="carrito-cantidad-btn" data-product-id="${producto.id}" data-cantidad-change="-1" aria-label="Quitar una unidad de ${producto.nombre}">−</button>
          <span>${producto.cantidad}</span>
          <button type="button" class="carrito-cantidad-btn" data-product-id="${producto.id}" data-cantidad-change="1" aria-label="Agregar una unidad de ${producto.nombre}">+</button>
        </div>
      </div>
      <button type="button" class="carrito-eliminar" data-product-id="${producto.id}" aria-label="Eliminar ${producto.nombre}">
        <span aria-hidden="true">&times;</span>
      </button>
    </article>
  `,
    )
    .join("");

  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0,
  );
  resumen.querySelector(".carrito-total").textContent = formatPrice(total);
  resumen.hidden = false;
  actualizarContadorCarrito();
}

function cambiarCantidad(productId, cambio) {
  const producto = carrito.find((item) => item.id === productId);
  if (!producto) return;

  producto.cantidad += cambio;
  if (producto.cantidad <= 0) {
    carrito = carrito.filter((item) => item.id !== productId);
  }

  guardarCarrito();
  renderizarCarrito();
}

function agregarProductoActual() {
  const productId = Number(
    new URLSearchParams(window.location.search).get("id"),
  );
  if (!productId || typeof productos === "undefined") return;

  const producto = productos.find((item) => item.id === productId);
  if (!producto) return;

  const existente = carrito.find((item) => item.id === producto.id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: new URL(producto.imagen, document.baseURI).href,
      cantidad: 1,
    });
  }

  guardarCarrito();
  renderizarCarrito();
  document.querySelector(".carrito-panel")?.classList.add("is-open");
}

function eliminarProducto(productId) {
  carrito = carrito.filter((producto) => producto.id !== productId);
  guardarCarrito();
  renderizarCarrito();
}

function crearPanelCarrito(carritoHeader) {
  let badge = carritoHeader.querySelector(".carrito-contador");
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "carrito-contador";
    carritoHeader.appendChild(badge);
  }

  const panel = document.createElement("aside");
  panel.className = "carrito-panel";
  panel.setAttribute("aria-label", "Carrito de compras");
  panel.innerHTML = `
    <div class="carrito-panel-header">
      <h2>Tu carrito</h2>
      <button type="button" class="carrito-cerrar" aria-label="Cerrar carrito">&times;</button>
    </div>
    <div class="carrito-items"></div>
    <div class="carrito-resumen" hidden>
      <div class="carrito-total-linea">
        <span>Total</span>
        <strong class="carrito-total"></strong>
      </div>
      <button type="button" class="carrito-finalizar">Finalizar compra</button>
    </div>
  `;
  document.body.appendChild(panel);

  carritoHeader.addEventListener("click", () => {
    panel.classList.toggle("is-open");
  });
  panel.querySelector(".carrito-cerrar").addEventListener("click", () => {
    panel.classList.remove("is-open");
  });
  panel.addEventListener("click", (event) => {
    event.stopPropagation();
    const quantityButton = event.target.closest(".carrito-cantidad-btn");
    const button = event.target.closest(".carrito-eliminar");
    if (quantityButton) {
      cambiarCantidad(
        Number(quantityButton.dataset.productId),
        Number(quantityButton.dataset.cantidadChange),
      );
      return;
    }
    if (button) eliminarProducto(Number(button.dataset.productId));
  });
  document.addEventListener("click", (event) => {
    if (
      !panel.contains(event.target) &&
      !carritoHeader.contains(event.target)
    ) {
      panel.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") panel.classList.remove("is-open");
  });
}

function initCarrito() {
  const carritoHeader = document.querySelector(".carrito-header");
  const addButton = document.querySelector(".btn-primary");
  if (!carritoHeader) return;

  carrito = leerCarrito();
  crearPanelCarrito(carritoHeader);
  renderizarCarrito();

  if (addButton) {
    addButton.addEventListener("click", (event) => {
      event.stopPropagation();
      agregarProductoActual();
    });
  }
}

document.addEventListener("DOMContentLoaded", initCarrito);
