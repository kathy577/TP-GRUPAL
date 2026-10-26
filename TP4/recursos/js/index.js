import { productos } from "./productos.js";
import { renderizadoProductos } from "./funciones.js";

const formFiltros = document.getElementById("form-filtros");
const contenedorProductos = document.getElementById("contenedor-productos");

renderizadoProductos(contenedorProductos, productos);

formFiltros.addEventListener("submit", (event) => {
  event.preventDefault();
  const categoriaSeleccionada = document.getElementById("id-categoria").value;
  const precioSeleccionado = document.getElementById("id-precio").value;
  const talleSeleccionado = document.getElementById("id-talle").value;

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = categoriaSeleccionada === "todas" || producto.categoria === categoriaSeleccionada;

    let coincidePrecio = true;

    if (precioSeleccionado === "menor") {
      coincidePrecio = producto.precio <= 25000;
    } else if (precioSeleccionado === "medio") {
      coincidePrecio = producto.precio > 25000 && producto.precio <= 35000;
    } else if (precioSeleccionado === "mayor") {
      coincidePrecio = producto.precio > 35000;
    }

    const coincideTalle = talleSeleccionado === "todos" || producto.talles.includes(talleSeleccionado);
    return coincideCategoria && coincidePrecio && coincideTalle;
  });

  renderizadoProductos(contenedorProductos, productosFiltrados);
});


