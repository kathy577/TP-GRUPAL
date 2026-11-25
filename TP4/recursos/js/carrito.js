import { renderizadoProductos } from "./vista.js";

const contenedorCarrito = document.getElementById("contenedor-carrito");
const subtotalCarrito = document.getElementById("subtotal-carrito");
const envioCarrito = document.getElementById("envio-carrito");
const totalCarrito = document.getElementById("total-carrito");
const selectEnvio = document.getElementById("id-envio");
const formCarrito = document.getElementById("form-carrito");

let productosEnCarrito = [
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

function obtenerCostoEnvio() {
    if (!selectEnvio || productosEnCarrito.length === 0) return 0;
    return selectEnvio.value === "envio" ? 5000 : 0;
}

function mostrarCarrito(productos) {
    if (!contenedorCarrito) return;

    if (productos.length === 0) {
        contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        if (subtotalCarrito) subtotalCarrito.textContent = "Subtotal: $0";
        if (envioCarrito) envioCarrito.textContent = "Envío: $0";
        if (totalCarrito) totalCarrito.textContent = "Total: $0";
        return;
    }

    renderizadoProductos(contenedorCarrito, productos);

    const subtotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    const envio = obtenerCostoEnvio();
    const total = subtotal + envio;

    if (subtotalCarrito) subtotalCarrito.textContent = `Subtotal: $${subtotal}`;
    if (envioCarrito) envioCarrito.textContent = `Envío: $${envio}`;
    if (totalCarrito) totalCarrito.textContent = `Total: $${total}`;
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito(productosEnCarrito);
});

if (selectEnvio) {
    selectEnvio.addEventListener("change", () => {
        mostrarCarrito(productosEnCarrito);
    });
}

if (formCarrito) {
    formCarrito.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("¡Muchas gracias por tu compra en Nocturnal Lab! Tu pedido ha sido confirmado con éxito.");
        productosEnCarrito = [];
        mostrarCarrito(productosEnCarrito);
        formCarrito.reset();
    });
}