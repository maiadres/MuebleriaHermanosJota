const productos = [
  {
    id: 1,
    nombre: "Sillón Copacabana",
    categoria: "Sala",
    precio: 148000,
    imagen: "../imagenes/sillon-copacabana.png",
    descripcion:
      "Un refugio íntimo en madera de nogal y lino texturizado, pensado para reuniones largas y conversaciones pausadas.",
  },
  {
    id: 2,
    nombre: "Mesa de Centro Araucaria",
    categoria: "Mesa",
    precio: 98000,
    imagen: "../imagenes/mesa-centro-araucaria.png",
    descripcion:
      "Forma redonda, equilibrio visual y detalles tallados a mano para acompañar la vida cotidiana con un aire sereno.",
  },
  {
    id: 3,
    nombre: "Aparador Uspallata",
    categoria: "Almacenamiento",
    precio: 214000,
    imagen: "../imagenes/aparador-uspallata.png",
    descripcion:
      "Solidez y proporciones generosas con un acabado cálido que despierta la belleza de lo artesanal.",
  },
  {
    id: 4,
    nombre: "Biblioteca Recoleta",
    categoria: "Almacenamiento",
    precio: 236000,
    imagen: "../imagenes/biblioteca-recoleta.png",
    descripcion:
      "Estanterías abiertas con un gesto clásico y funcionalidad presente, ideales para libros, objetos y jardines interiores.",
  },
  {
    id: 5,
    nombre: "Butaca Mendoza",
    categoria: "Sala",
    precio: 122000,
    imagen: "../imagenes/butaca-mendoza.png",
    descripcion:
      "Una butaca de respaldo curvo, asiento cómodo y líneas suaves que aportan carácter a cualquier rincón.",
  },
  {
    id: 6,
    nombre: "Escritorio Costa",
    categoria: "Trabajo",
    precio: 174000,
    imagen: "../imagenes/escritorio-costa.png",
    descripcion:
      "Espacio de trabajo pensado para la creatividad con materiales durables y una presencia serena y moderna.",
  },
  {
    id: 7,
    nombre: "Mesa de Comedor Pampa",
    categoria: "Mesa",
    precio: 268000,
    imagen: "../imagenes/mesa-comedor-pampa.png",
    descripcion:
      "Una mesa de comedor de proporciones cálidas que invita a la reunión, el ritual de la comida y la conversación.",
  },
  {
    id: 8,
    nombre: "Mesa de Noche Aconcagua",
    categoria: "Dormitorio",
    precio: 76000,
    imagen: "../imagenes/mesa-noche-aconcagua.png",
    descripcion:
      "Diseño discreto y maduro, con un frente de almacenamiento sobrio y una silueta que se adapta a cualquier espacio.",
  },
  {
    id: 9,
    nombre: "Silla de Trabajo Belgrano",
    categoria: "Trabajo",
    precio: 91000,
    imagen: "../imagenes/silla-trabajo-belgrano.png",
    descripcion:
      "Ergonomía y materiales nobles para un asiento que acompaña horas de trabajo con presencia y confort.",
  },
  {
    id: 10,
    nombre: "Sillas Córdoba",
    categoria: "Comedor",
    precio: 142000,
    imagen: "../imagenes/sillas-cordoba.png",
    descripcion:
      "Un juego de sillas con un equilibrio perfecto entre tradición y contemporaneidad, pensadas para compartir.",
  },
  {
    id: 11,
    nombre: "Sofá Patagonia",
    categoria: "Sala",
    precio: 315000,
    imagen: "../imagenes/sofa-patagonia.png",
    descripcion:
      "Sofá de estructura sólida y líneas envolventes, ideal para crear un hogar con una calidez genuina.",
  },
];

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderProductGrid(items) {
  const grid = document.querySelector(".catalogo-grid");
  const emptyState = document.querySelector(".catalogo-empty");
  const count = document.querySelector("[data-product-count]");

  if (!grid) return;

  grid.innerHTML = items
    .map(
      (producto) => `
        <article class="product-card">
          <a href="producto.html?id=${producto.id}" class="product-card-link" aria-label="Ver detalle de ${producto.nombre}">
            <div class="product-image-wrap">
              <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
            </div>
            <div class="product-card-body">
              <span class="product-tag">${producto.categoria}</span>
              <h2>${producto.nombre}</h2>
              <p>${producto.descripcion}</p>
              <div class="product-meta">
                <span class="product-price">${formatPrice(producto.precio)}</span>
                <span class="product-cta">Ver pieza</span>
              </div>
            </div>
          </a>
        </article>
      `,
    )
    .join("");

  if (count) count.textContent = String(items.length);
  if (emptyState) emptyState.hidden = items.length > 0;
}

function setupCatalogSearch() {
  const input = document.querySelector(".catalogo-search");
  if (!input) return;

  input.addEventListener("input", (event) => {
    const term = normalizeText(event.target.value.trim());

    const filtered = productos.filter((producto) => {
      const nombre = normalizeText(producto.nombre);
      const categoria = normalizeText(producto.categoria);
      return nombre.includes(term) || categoria.includes(term);
    });

    renderProductGrid(filtered);
  });

  renderProductGrid(productos);
}

function setupDetailPage() {
  const image = document.querySelector("#detail-image");
  const category = document.querySelector("#detail-category");
  const name = document.querySelector("#detail-name");
  const price = document.querySelector("#detail-price");
  const description = document.querySelector("#detail-description");

  if (!image || !category || !name || !price || !description) return;

  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));
  const selectedProduct = productos.find(
    (producto) => producto.id === productId,
  );

  if (!selectedProduct) {
    name.textContent = "Producto no encontrado";
    category.textContent = "Catálogo";
    description.textContent =
      "La pieza que buscas no está disponible en este momento.";
    price.textContent = "—";
    image.src = "../imagenes/logo.svg";
    image.alt = "Logo de Hermanos Jota";
    return;
  }

  image.src = selectedProduct.imagen;
  image.alt = selectedProduct.nombre;
  category.textContent = selectedProduct.categoria;
  name.textContent = selectedProduct.nombre;
  price.textContent = formatPrice(selectedProduct.precio);
  description.textContent = selectedProduct.descripcion;
  document.title = `${selectedProduct.nombre} | Hermanos Jota`;
}

document.addEventListener("DOMContentLoaded", () => {
  setupCatalogSearch();
  setupDetailPage();
});
