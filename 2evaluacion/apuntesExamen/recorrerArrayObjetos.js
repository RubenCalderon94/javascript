///array de objetos
const arrayProductos = [
  {
    id: 123,
    nombre: 'Monitor UltraWide',
    precio: 349.99,
    descripcion: 'Monitor curvo de 34 pulgadas.',
    imagen:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
  },
  {
    id: 245,
    nombre: 'Teclado Mecánico',
    precio: 120.5,
    descripcion: 'Teclado RGB con switches blue.',
    imagen:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
  },
];

let arrayFormateado = [];
parchearArray(arrayProductos);

//recorrer array
function parchearArray(array) {
  arrayFormateado = array.map((producto) => {
    return {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      imagen: producto.imagen,
    };
  });
}
