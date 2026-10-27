
import { renderizadoProductos } from "./funciones.js";

const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalCarrito = document.getElementById("total-carrito");


const productosEnCarrito = [
    {
        nombre: "Remera Gótica Estampada",
        imagen: "./recursos/imagenes/remeragoth.jpg",
        precio: 25000,
        categoria: "remeras"
    },
    {
        nombre: "Pollera Victoriana",
        imagen: "./recursos/imagenes/pollera.jpg",
        precio: 37000,
        categoria: "polleras"
    }
];

function mostrarCarrito(productos) {
    if (!contenedorCarrito) return;

    if (productos.length === 0) {
        contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        if (totalCarrito) totalCarrito.textContent = "$0";
        return;
    }

   
    renderizadoProductos(contenedorCarrito, productos);

  
    const total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    
    if (totalCarrito) {
        totalCarrito.textContent = `$${total}`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito(productosEnCarrito);
});

// Manejo del formulario de confirmación de compra
const formCarrito = document.getElementById("form-carrito");

if (formCarrito) {
    formCarrito.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el error 405 del servidor

        alert("¡Muchas gracias por tu compra en Nocturnal Lab! Tu pedido ha sido confirmado con éxito.");
        
        // Opcional: limpiar o vaciar el carrito si lo deseas
        formCarrito.reset();
    });
}