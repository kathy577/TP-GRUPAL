function renderizadoProductos(contenedor, productos) {
  let productosHTML = "";

  productos.forEach((producto) => {
    productosHTML += `
      <article class="producto">
        <img
          src="${producto.imagen}"
          alt="${producto.nombre}"
          width="200"
        >
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Categoría: ${producto.categoria}</p>
      </article>
    `;
  });

  contenedor.innerHTML = productosHTML;
}

export { renderizadoProductos };