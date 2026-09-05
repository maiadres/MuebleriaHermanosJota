const productos = [
  {
    id: 1,
    nombre: "Sillón Copacabana",
    categoria: "Sala",
    precio: 148000,
    imagen: "../imagenes/sillon-copacabana.png",
    descripcion:
      "Un refugio íntimo en madera de nogal y lino texturizado, pensado para reuniones largas y conversaciones pausadas.",
    descripcionLarga:
      "Inspirado en la serenidad y fluidez de las costas sudamericanas, el Sillón Copacabana combina una estructura ergonómica de ingeniería fina con tapizados de alta calidad. Diseñado para ofrecer una experiencia de descanso superior, su curvatura acompaña la postura natural del cuerpo, convirtiéndolo en la pieza central perfecta para cualquier sala de estar o espacio de lectura.",
    medidas: "90 × 85 × 95 cm",
    materiales: "Cuero curtido vegetal, acero pintado",
    acabado: "Cuero anilina premium",
    rotacion: "360° silenciosa y suave",
    garantia: "10 años en estructura"
  },
  {
    id: 2,
    nombre: "Mesa de Centro Araucaria",
    categoria: "Mesa",
    precio: 98000,
    imagen: "../imagenes/mesa-centro-araucaria.png",
    descripcion:
      "Forma redonda, equilibrio visual y detalles tallados a mano para acompañar la vida cotidiana con un aire sereno.",
    descripcionLarga:
      "La Mesa de Centro Araucaria destaca por su geometría armónica y el tratamiento artesanal de sus superficies. Cada veta de la madera y textura del mármol ha sido cuidadosamente preservada para garantizar una pieza única. Su presencia aporta calidez orgánica y equilibrio visual al centro del hogar.",
    medidas: "90 × 90 × 45 cm",
    materiales: "Sobre de mármol Patagonia, patas de nogal",
    acabado: "Mármol pulido, aceite natural en madera",
    peso: "42 kg",
    cargaMaxima: "25 kg distribuidos"
  },
  {
    id: 3,
    nombre: "Aparador Uspallata",
    categoria: "Almacenamiento",
    precio: 214000,
    imagen: "../imagenes/aparador-uspallata.png",
    descripcion:
      "Solidez y proporciones generosas con un acabado cálido que despierta la belleza de lo artesanal.",
    descripcionLarga:
      "Pensado para optimizar el espacio sin perder sofisticación, el Aparador Uspallata rinde homenaje a la arquitectura modular contemporánea. Sus frentes limpios y puertas de cierre suave esconden un espacio de guardado amplio y versátil, ideal para comedores o salones principales.",
    medidas: "180 × 45 × 75 cm",
    materiales: "Nogal macizo FSC®, herrajes de latón",
    acabado: "Aceite natural ecológico",
    peso: "68 kg",
    capacidad: "6 compartimentos interiores"
  },
  {
    id: 4,
    nombre: "Biblioteca Recoleta",
    categoria: "Almacenamiento",
    precio: 236000,
    imagen: "../imagenes/biblioteca-recoleta.png",
    descripcion:
      "Estanterías abiertas con un gesto clásico y funcionalidad presente, ideales para libros, objetos y jardines interiores.",
    descripcionLarga:
      "Una estructura estilizada e imponente que fusiona la resistencia del acero industrial con la calidez del roble natural. La Biblioteca Recoleta propone una solución de exhibición versátil, pensada para lucir libros, colecciones de arte o vegetación de interior con elegancia.",
    medidas: "100 × 35 × 200 cm",
    materiales: "Estructura de acero, estantes de roble",
    acabado: "Laca mate ecológica",
    capacidad: "45 kg por estante",
    modulares: "5 estantes ajustables"
  },
  {
    id: 5,
    nombre: "Butaca Mendoza",
    categoria: "Sala",
    precio: 122000,
    imagen: "../imagenes/butaca-mendoza.png",
    descripcion:
      "Una butaca de respaldo curvo, asiento cómodo y líneas suaves que aportan carácter a cualquier rincón.",
    descripcionLarga:
      "Con una silueta que abraza el cuerpo y un tapizado bouclé súper suave al tacto, la Butaca Mendoza reinterpreta los clásicos del diseño de mediados de siglo. Perfecta para rincones de lectura o como complemento distintivo en espacios de recepción.",
    medidas: "80 × 75 × 85 cm",
    materiales: "Guatambú macizo, tela bouclé",
    acabado: "Cera vegetal, tapizado premium",
    tapizado: "Repelente al agua y manchas",
    confort: "Espuma alta densidad"
  },
  {
    id: 6,
    nombre: "Escritorio Costa",
    categoria: "Trabajo",
    precio: 174000,
    imagen: "../imagenes/escritorio-costa.png",
    descripcion:
      "Espacio de trabajo pensado para la creatividad con materiales durables y una presencia serena y moderna.",
    medidas: "120 × 60 × 75 cm",
    descripcionLarga:
      "Diseñado para potenciar el enfoque y la productividad en ambientes de trabajo en casa o estudio. El Escritorio Costa integra líneas limpias, compartimentos discretos para organización de cables y un acabado al tacto suave que invita a crear diariamente.",
    materiales: "Bambú laminado, herrajes ocultos",
    acabado: "Laca mate resistente",
    almacenamiento: "1 cajón con organizador",
    cables: "Pasacables integrado"
  },
  {
    id: 7,
    nombre: "Mesa de Comedor Pampa",
    categoria: "Mesa",
    precio: 268000,
    imagen: "../imagenes/mesa-comedor-pampa.png",
    descripcion:
      "Una mesa de comedor de proporciones cálidas que invita a la reunión, el ritual de la comida y la conversación.",
    descripcionLarga:
      "El punto de encuentro por excelencia en la casa. La Mesa de Comedor Pampa combina maderas macizas seleccionadas con un inteligente sistema de extensión central, adaptándose fácilmente desde cenas íntimas hasta grandes reuniones familiares.",
    medidas: "160-240 × 90 × 75 cm",
    materiales: "Roble macizo FSC®, mecanismo alemán",
    acabado: "Aceite-cera natural",
    capacidad: "6-10 comensales",
    extension: "Sistema de mariposa central"
  },
  {
    id: 8,
    nombre: "Mesa de Noche Aconcagua",
    categoria: "Dormitorio",
    precio: 76000,
    imagen: "../imagenes/mesa-noche-aconcagua.png",
    descripcion:
      "Diseño discreto y maduro, con un frente de almacenamiento sobrio y una silueta que se adapta a cualquier espacio.",
    descripcionLarga:
      "Una pieza compacta de presencia serena. La Mesa de Noche Aconcagua cuenta con un cajón de cierre suave y una repisa inferior abierta, ofreciendo la proporción perfecta de almacenamiento para mantener el dormitorio libre de desorden.",
    medidas: "45 × 35 × 60 cm",
    materiales: "Roble macizo FSC®, herrajes soft-close",
    acabado: "Barniz mate de poliuretano",
    almacenamiento: "1 cajón + repisa inferior",
    caracteristicas: "Cajón con cierre suave"
  },
  {
    id: 9,
    nombre: "Silla de Trabajo Belgrano",
    categoria: "Trabajo",
    precio: 91000,
    imagen: "../imagenes/silla-trabajo-belgrano.png",
    descripcion:
      "Ergonomía y materiales nobles para un asiento que acompaña horas de trabajo con presencia y confort.",
    descripcionLarga:
      "Pensada para brindar soporte óptimo durante jornadas intensas de trabajo sin descuidar el valor estético. La Silla Belgrano combina malla respirable de alta calidad con ajustes ergonómicos precisos para adaptarse a las necesidades de cada usuario.",
    medidas: "60 × 60 × 90-100 cm",
    materiales: "Malla técnica, tejido reciclado",
    acabado: "Base cromada, tapizado premium",
    regulacion: "Altura + inclinación respaldo",
    certificacion: "Ergonomía europea EN 1335"
  },
  {
    id: 10,
    nombre: "Sillas Córdoba",
    categoria: "Comedor",
    precio: 142000,
    imagen: "../imagenes/sillas-cordoba.png",
    descripcion:
      "Un juego de sillas con un equilibrio perfecto entre tradición y contemporaneidad, pensadas para compartir.",
    descripcionLarga:
      "Diseñadas con un foco en la practicidad y el confort diario, el conjunto de Sillas Córdoba aporta un contraste visual sumamente atractivo. Su estructura ligera y apilable permite reorganizar los espacios de comedor rápidamente.",
    medidas: "45 × 52 × 80 cm (cada una)",
    materiales: "Contrachapado nogal, tubo de acero",
    acabado: "Laca mate, pintura epoxi",
    apilables: "Hasta 6 sillas",
    incluye: "Set de 4 sillas"
  },
  {
    id: 11,
    nombre: "Sofá Patagonia",
    categoria: "Sala",
    precio: 315000,
    imagen: "../imagenes/sofa-patagonia.png",
    descripcion:
      "Sofá de estructura sólida y líneas envolventes, ideal para crear un hogar con una calidez genuina.",
    descripcionLarga:
      "Máximo confort en dimensiones generosas. El Sofá Patagonia cuenta con almohadones mullidos de mezcla de plumón y espuma de alta resiliencia, tapizado en lino puro lavable. Una pieza concebida para durar generaciones manteniendo su comodidad intacta.",
    medidas: "220 × 90 × 80 cm",
    estructura: "Madera de eucalipto certificada FSC®",
    tapizado: "Lino 100% natural premium",
    relleno: "Espuma HR + plumón reciclado",
    sostenibilidad: "Materiales 100% reciclables"
  }
];

const diccionarioAtributos = {
  medidas: "Medidas",
  materiales: "Materiales",
  estructura: "Estructura",
  acabado: "Acabado",
  peso: "Peso",
  capacidad: "Capacidad",
  modulares: "Modulares",
  tapizado: "Tapizado",
  confort: "Confort",
  rotacion: "Rotación",
  garantia: "Garantía",
  cargaMaxima: "Carga máx.",
  almacenamiento: "Almacenamiento",
  caracteristicas: "Detalles",
  relleno: "Relleno",
  sostenibilidad: "Origen",
  extension: "Extensión",
  apilables: "Apilables",
  incluye: "Incluye",
  cables: "Cables",
  regulacion: "Regulación",
  certificacion: "Certificación"
};

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

function getSpecsHTML(producto) {
  const camposExcluidos = ["id", "nombre", "categoria", "precio", "imagen", "descripcion", "descripcionLarga"];
  let html = "";

  for (const [clave, valor] of Object.entries(producto)) {
    if (!camposExcluidos.includes(clave)) {
      const etiqueta = diccionarioAtributos[clave] || clave;
      html += `
        <div class="product-spec-row">
          <span class="spec-label">${etiqueta}</span>
          <span class="spec-value">${valor}</span>
        </div>
      `;
    }
  }
  return html;
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
              
              <div class="product-specs">
                ${getSpecsHTML(producto)}
              </div>

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
  const specsContainer = document.querySelector("#detail-specs");

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
    if (specsContainer) specsContainer.innerHTML = "";
    return;
  }

  image.src = selectedProduct.imagen;
  image.alt = selectedProduct.nombre;
  category.textContent = selectedProduct.categoria;
  name.textContent = selectedProduct.nombre;
  price.textContent = formatPrice(selectedProduct.precio);
  
  description.textContent = selectedProduct.descripcionLarga || selectedProduct.descripcion;

  if (specsContainer) {
    specsContainer.innerHTML = getSpecsHTML(selectedProduct);
  }

  document.title = `${selectedProduct.nombre} | Hermanos Jota`;
}

document.addEventListener("DOMContentLoaded", () => {
  setupCatalogSearch();
  setupDetailPage();
});