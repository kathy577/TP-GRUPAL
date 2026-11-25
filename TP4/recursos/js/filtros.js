function filtrarProductos(productos, { categoria, precio, talle }) {
  return productos.filter((producto) => {
    const coincideCategoria = categoria === "todas" || producto.categoria === categoria;

    let coincidePrecio = true;
    if (precio === "menor") {
      coincidePrecio = producto.precio <= 25000;
    } else if (precio === "medio") {
      coincidePrecio = producto.precio > 25000 && producto.precio <= 35000;
    } else if (precio === "mayor") {
      coincidePrecio = producto.precio > 35000;
    }

    const coincideTalle = talle === "todos" || producto.talles.includes(talle);

    return coincideCategoria && coincidePrecio && coincideTalle;
  });
}

export { filtrarProductos };