// Muestra los primeros tres productos en la sección de destacados de Inicio.
import { productos } from "./productos.js";
import { renderizadoProductos } from "./vista.js";

const contenedorProductos = document.getElementById("contenedor-productos");

renderizadoProductos(contenedorProductos, productos.slice(0, 3));