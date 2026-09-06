# Ecommerce Hermanos Jota

Sitio web para la mueblería **Hermanos Jota**. La página presenta la marca, su catálogo de productos y un formulario de contacto, siguiendo los lineamientos visuales definidos en el manual de marca.

---

## Integrantes

- Bauer, Gonzalo.
- Drescher, Maia.
- Huanca, Nick
- Hernandez, Wanda.
- Madrigal, Valentina.

---

## Descripción funcional

El proyecto consta de las siguientes páginas y funcionalidades:

### 🏠 Página de Inicio (`index.html`)
- Header con logo y navegación.
- Hero Banner principal.
- Sección de 3 productos destacados, cargados dinámicamente.
- Footer con información básica.

### 🛋️ Catálogo de Productos (`productos.html`)
- Grilla de tarjetas de productos.
- Datos obtenidos desde un archivo JavaScript local.
- Cada producto enlaza a su página de detalle.
- Campo de búsqueda.

### 🔍 Detalle de Producto (`producto.html`)
- Imagen grande y descripción completa del producto.
- Detalles de fabricación y precio.
- Botón "Añadir al Carrito".

### ✉️ Contacto (`contacto.html`)
- Formulario con campos de Nombre, Email y Mensaje.
- Validación del lado del cliente con JavaScript.
- Mensaje de éxito mostrado mediante manipulación del DOM.
- Carrito simulado, con contador visible en el header.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Etiquetas semánticas, código limpio e indentado |
| **CSS3** | Diseño 100% responsivo (mobile first), Flexbox y Grid para las secciones principales, estilos centralizados en un archivo externo (`style.css`) |
| **JavaScript** | Productos definidos como array de objetos (`.js`), renderizado dinámico vía DOM, carga asíncrona (`setTimeout` / `async-await`), interactividad mediante `addEventListener` |
| **Google Fonts** | Tipografías Inter y Playfair Display |
| **Material Symbols** | Ícono del carrito de compras |

---

## Decisiones de diseño

El diseño se desarrolló a partir del **manual de marca** de Hermanos Jota, que define la esencia, la voz y la identidad visual de la empresa: un mobiliario artesanal que combina la calidez del optimismo de los años 60 con la sustentabilidad actual. En base a esos lineamientos, tomamos las siguientes decisiones:

### Paleta de colores
Se respetó estrictamente la paleta oficial de la marca:

 Nombre | Código | Uso en el sitio |
---|---|---|
Siena Tostado | `#A0522D` | Títulos, botones primarios, footer, marca |
Verde Salvia | `#87A96B` | Acento en etiquetas (sustentabilidad) |
Alabastro Cálido | `#F5E6D3` | Fondo general del sitio |
Vara de Oro | `#D4A437` | Detalles, bordes, líneas divisorias |
Rosa Polvoriento | `#C47A6D` | Acentos suaves |

### Tipografía
Siguiendo la guía de uso tipográfico del manual:
- **Playfair Display**, en mayúsculas y con espaciado amplio (`letter-spacing: 0.1em`), para todos los títulos (`h1`, `h2`, `h3`), reforzando la identidad editorial y atemporal de la marca.
- **Inter**, en sus variantes Regular y Medium, para el texto de cuerpo, la navegación y los botones, priorizando la legibilidad en pantalla.

### Layout y estructura
- **Header fijo (`sticky`)**, con logo, navegación y carrito siempre visibles al hacer scroll.
- **Hero Banner** con estructura en dos columnas (imagen + texto) en escritorio, que colapsa a una sola columna en mobile para evitar recortes en la imagen.
- **Grilla de productos** con Flexbox/Grid autoajustable (`repeat(auto-fit, minmax(...))`), para que las tarjetas se acomoden según el ancho de pantalla.
- Tarjetas de producto con **efecto hover de zoom suave** sobre la imagen, buscando transmitir la calidez y el detalle artesanal que menciona el manual, sin caer en interacciones bruscas.
- Diseño **mobile first**, ajustando la disposición del header (logo, nav y carrito) mediante media queries para que el carrito se mantenga siempre visible y accesible en pantallas chicas.

### Tono y voz
Los textos del sitio (botones, descripciones, mensajes) se redactaron siguiendo el tono definido en el manual: cálido pero no empalagoso, cercano pero con autoridad, evitando un lenguaje publicitario genérico y priorizando frases que cuenten la historia detrás de cada pieza.

---

## Estructura del proyecto

```
├── .vscode/
├── catalogo/
│   ├── producto.html
│   ├── productos.html
│   └── productos.js
├── css/
│   ├── catalogo.css
│   ├── contacto.css
│   └── style.css
├── imagenes/
├── js/
├   ├── carrito.js
│   ├── contacto.js
│   └── index.js
├── .gitignore
├── contacto.html
└── index.html
```

---

## Cómo ejecutar el proyecto

1. Cloná o descargá el repositorio.
2. Abrí el archivo `index.html` en tu navegador (o usá una extensión tipo *Live Server* en VSCode para evitar problemas de carga de archivos locales).
3. Navegá entre las secciones desde el header.

## Deployed en Github Pages 
- Link: https://maiadres.github.io/MuebleriaHermanosJota/
---


