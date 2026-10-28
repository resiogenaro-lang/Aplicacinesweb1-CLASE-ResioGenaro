 import productos from './productos.js' // No nombrada
import {productosMascotas, categorias} from './productos.js' // Nombrada
import {renderizarCatalogo,filtrarPorTalle} from './funciones.js'
productos
// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")
const eventoboton = document.getElementById ('evento-boton ')
const dialogo = document.getElementById('dialogo')
//escuchador 
eventoboton.addEventListener('click ',()=>{
    dialogo.showmodal

})
// Select
/*
<select name="talle">
    <option value="S">S</option>
</select>
*/
// Filtramos el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)
const botonescarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')



botonesCarro.forEach((boton)=>{
    // Cuerpo for
    boton.addEventListener('click', (evento)=>{
         console.log ("click en el boton ")
    })
})
