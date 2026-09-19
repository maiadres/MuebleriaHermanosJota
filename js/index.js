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

if (contenedor) {
    const fragmento = document.createDocumentFragment();

    productosDestacados.forEach(producto => {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta-mueble';

        const contenedorImagen = document.createElement('div');
        contenedorImagen.className = 'contenedor-imagen';

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.titulo;
        contenedorImagen.appendChild(imagen);

        const titulo = document.createElement('h3');
        titulo.textContent = producto.titulo;

        tarjeta.append(contenedorImagen, titulo);
        fragmento.appendChild(tarjeta);
    });

    contenedor.replaceChildren(fragmento);
}