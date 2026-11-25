// recursos/js/index.js
import { productos } from "./productos.js";
import { renderizadoProductos } from "./vista.js";
import { filtrarProductos } from "./filtros.js";

const formFiltros = document.getElementById("form-filtros");
const contenedorProductos = document.getElementById("contenedor-productos");

renderizadoProductos(contenedorProductos, productos);

formFiltros.addEventListener("submit", (event) => {
  event.preventDefault();

  const criterios = {
    categoria: document.getElementById("id-categoria").value,
    precio: document.getElementById("id-precio").value,
    talle: document.getElementById("id-talle").value
  };

  const productosFiltrados = filtrarProductos(productos, criterios);
  renderizadoProductos(contenedorProductos, productosFiltrados);
});
