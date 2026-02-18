//AQUI IRIA EL ARRAY A FORMATEAR

//Variable global productosFormateados
let productosFormateados = [];

// ----------------------------
// CONVERTIR ARRAY A OBJETOS
// ----------------------------
function parchearArray(array) {
  productosFormateados = array.map((item) => {
    const [id, nombre, precio, descripcion, imagen] = item.split(';');
    return {
      id: parseInt(id),
      nombre,
      precio: parseFloat(precio),
      descripcion,
      imagen,
    };
  });
}
