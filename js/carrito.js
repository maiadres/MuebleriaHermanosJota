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
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "carrito-vacio";
    emptyMessage.textContent = "Tu carrito está vacío.";
    items.replaceChildren(emptyMessage);
    resumen.querySelector(".carrito-total").textContent = formatPrice(0);
    resumen.hidden = true;
    actualizarContadorCarrito();
    return;
  }

  const fragmento = document.createDocumentFragment();
  carrito.forEach((producto) => {
    const article = document.createElement("article");
    article.className = "carrito-item";
    const image = document.createElement("img");
    image.src = producto.imagen;
    image.alt = producto.nombre;
    image.className = "carrito-item-imagen";
    const info = document.createElement("div");
    info.className = "carrito-item-info";
    const name = document.createElement("h3");
    name.textContent = producto.nombre;
    const price = document.createElement("p");
    price.textContent = `${producto.cantidad} × ${formatPrice(producto.precio)}`;
    const quantity = document.createElement("div");
    quantity.className = "carrito-cantidad";
    quantity.setAttribute("aria-label", `Cantidad de ${producto.nombre}`);
    const decrease = crearBotonCantidad(producto, -1, "−", `Quitar una unidad de ${producto.nombre}`);
    const amount = document.createElement("span");
    amount.textContent = producto.cantidad;
    const increase = crearBotonCantidad(producto, 1, "+", `Agregar una unidad de ${producto.nombre}`);
    quantity.append(decrease, amount, increase);
    info.append(name, price, quantity);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "carrito-eliminar";
    remove.dataset.productId = producto.id;
    remove.setAttribute("aria-label", `Eliminar ${producto.nombre}`);
    const removeIcon = document.createElement("span");
    removeIcon.setAttribute("aria-hidden", "true");
    removeIcon.textContent = "×";
    remove.appendChild(removeIcon);
    article.append(image, info, remove);
    fragmento.appendChild(article);
  });
  items.replaceChildren(fragmento);

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

function crearBotonCantidad(producto, cambio, texto, etiqueta) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "carrito-cantidad-btn";
  button.dataset.productId = producto.id;
  button.dataset.cantidadChange = cambio;
  button.setAttribute("aria-label", etiqueta);
  button.textContent = texto;
  return button;
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
  const header = document.createElement("div");
  header.className = "carrito-panel-header";
  const title = document.createElement("h2");
  title.textContent = "Tu carrito";
  const close = document.createElement("button");
  close.type = "button";
  close.className = "carrito-cerrar";
  close.setAttribute("aria-label", "Cerrar carrito");
  close.textContent = "×";
  header.append(title, close);
  const items = document.createElement("div");
  items.className = "carrito-items";
  const summary = document.createElement("div");
  summary.className = "carrito-resumen";
  summary.hidden = true;
  const totalLine = document.createElement("div");
  totalLine.className = "carrito-total-linea";
  const totalLabel = document.createElement("span");
  totalLabel.textContent = "Total";
  const total = document.createElement("strong");
  total.className = "carrito-total";
  totalLine.append(totalLabel, total);
  const finish = document.createElement("button");
  finish.type = "button";
  finish.className = "carrito-finalizar";
  finish.textContent = "Finalizar compra";
  summary.append(totalLine, finish);
  panel.append(header, items, summary);
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
