// Array con los muebles y las rutas
const productosDestacados = [
    {
        imagen: "imagenes/sillon-copacabana.png",
        titulo: "Sillón Copacabana"
    },
    {
        imagen: "imagenes/mesa-centro-araucaria.png",
        titulo: "Mesa de Centro Araucaria",
    },
    {
        imagen: "imagenes/aparador-uspallata.png",
        titulo: "Aparador Uspallata",
    }    
];

// Lógica para inyectar las tarjetas 
const contenedor = document.querySelector('.lista-productos');
let tarjetasHTML = '';

productosDestacados.forEach(producto => {
    tarjetasHTML += `
        <article class="tarjeta-mueble">
            <div class="contenedor-imagen">
                <img src="${producto.imagen}" alt="${producto.titulo}" style="width: 100%; height: auto; border-radius: 4px;">
            </div>
            <h3>${producto.titulo}</h3>
        </article>
    `;
});

contenedor.innerHTML = tarjetasHTML;