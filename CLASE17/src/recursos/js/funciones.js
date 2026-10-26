 const productosMascotas = [
    {
        nombre: "Collar Ajustable de Nylon",
        imagen: "./recursos/imagenes/productos/correa-perro.jpg",
        descripcion: "Resistente collar de nylon con broche de seguridad para perros.",
        talles: ["S", "M", "L"],
        precio: 12.50
    },
    {
        nombre: "Arnés Reflectivo Ergonómico",
        imagen: "https://ejemplo.com/imagenes/arnes-reflectivo.jpg",
        descripcion: "Arnés cómodo con tiras reflectivas para paseos nocturnos seguros.",
        talles: ["S", "M", "L"],
        precio: 24.99
    },
    {
        nombre: "Cama Suave Térmica",
        imagen: "https://ejemplo.com/imagenes/cama-suave.jpg",
        descripcion: "Cama acojinada lavable para el máximo descanso de tu mascota.",
        talles: ["S", "M", "L"],
        precio: 45.00
    },
    {
        nombre: "Capota Impermeable para Lluvia",
        imagen: "https://ejemplo.com/imagenes/capota-lluvia.jpg",
        descripcion: "Chaqueta impermeable ligera que protege a tu perro del agua.",
        talles: ["S", "M", "L"],
        precio: 18.75
    },
    {
        nombre: "Chaleco de Lana Tejido",
        imagen: "https://ejemplo.com/imagenes/chaleco-lana.jpg",
        descripcion: "Abrigo de lana suave y cálido ideal para días fríos.",
        talles: ["S", "M", "L"],
        precio: 15.30
    },
    {
        nombre: "Bozal de Malla Transpirable",
        imagen: "https://ejemplo.com/imagenes/bozal-malla.jpg",
        descripcion: "Bozal de diseño ajustado que permite respirar y beber libremente.",
        talles: ["S", "M", "L"],
        precio: 10.99
    },
    {
        nombre: "Camiseta de Algodón Fresca",
        imagen: "https://ejemplo.com/imagenes/camiseta-algodon.jpg",
        descripcion: "Ropa ligera de algodón con diseños divertidos para uso diario.",
        talles: ["S", "M", "L"],
        precio: 11.20
    },
    {
        nombre: "Zapatos Antideslizantes de Neopreno",
        imagen: "https://ejemplo.com/imagenes/zapatos-neopreno.jpg",
        descripcion: "Botas protectoras para patas contra el calor y pisos resbaladizos.",
        talles: ["S", "M", "L"],
        precio: 22.00
    },
    {
        nombre: "Disfraz Temático de Temporada",
        imagen: "https://ejemplo.com/imagenes/disfraz-tematico.jpg",
        descripcion: "Disfraz cómodo y divertido perfecto para fiestas y fotos especiales.",
        talles: ["S", "M", "L"],
        precio: 29.90
    },
    {
        nombre: "Pañuelo Bandana de Tela",
        imagen: "https://ejemplo.com/imagenes/panuelo-bandana.jpg",
        descripcion: "Accesorio elegante y lavable que se ajusta fácilmente al cuello.",
        talles: ["S", "M", "L"],
        precio: 8.50
    }
];

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos");

/**
 * Función para generar el HTML de los productos.
 * @param {HTMLElement} contenedor - Referencia al contenedor del DOM (Nota: se puede usar para actualizarlo directamente o dejar que la función solo devuelva el string).
 * @param {Array} arrProductos - El arreglo de objetos con los productos.
 * @returns {string} El string con todo el código HTML generado.
 */
function renderizarProductos(contenedor, arrProductos) {
    let productosHTML = '';

    arrProductos.forEach((producto) => {
        // Opcional: Si quieres mostrar todos los talles separados por coma puedes usar .join(', ')
        productosHTML += `
        <article class="producto">
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>
                ${producto.descripcion}
            </p>
            <ul>
                <li>
                    Talles: ${producto.talles.join(', ')}
                </li>
                <li>
                    Precio: $ ${producto.precio.toFixed(2)}
                </li>
            </ul>
            <button>Agregar al carro</button>
        </article>
        `;
    });

    // Retornamos el string de HTML como pide la tarea
    return productosHTML;
}

// Ejecutamos la función pasando los parámetros correspondientes
const htmlGenerado = renderizarProductos(contenedorProductos, productosMascotas);

// Inyectamos el HTML resultante en el contenedor del DOM
contenedorProductos.innerHTML = htmlGenerado;


function renderizarCatalogo(contenedor /* es la referencia del DOM */, productos /* es el arreglo */) {
    let productosHTML = ''

    productos.forEach((producto) => {
        productosHTML += `
        <article class="producto">
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>
                ${producto.descripcion}
            </p>
            <ul>
                <li>
                    Talles ${producto.talles[0]}
                </li>
                <li>
                    Precio $ ${producto.precio}
                </li>
            </ul>
            <button>Agregar al carro</button>
        </article>
        `
    })

    contenedor.innerHTML = productosHTML

    ///
    return productosHTML
}


// Funcion de filtrado
function filtrarPorTalle(arreglo, talle){
    // .filter -> solo dejar pasar al nuevo arreglo, si en el arreglo talles tiene el talle buscado
    // Arreglo con una cadena
    // return arreglo.filter((producto)->{
    //      const talles = producto.talles.filter((talleEncontrado)=>{
    //          return talleEncontrado === talle
    //      })
    //      return talles.length > 0
    // })
    // indexOf ->
    // includes()
    // Este return es de la funcion filtrarPorTalle
    return arreglo.filter((producto)=>{
        // debe ser verdadero o falso -> es del filter
        
        return producto.talles.includes(talle)
    })
    // Retornar un arreglo filtrado
}






















