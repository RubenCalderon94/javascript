/* Crea una función llamada “crearTarjetaProducto que reciba el objeto con los datos del
producto como parámetro de entrada, clone el template, rellene los datos de la tarjeta y
la devuelva. Si no hay stock mostrar AGOTADO, asignar la clase “sin-stock” y
deshabilitar el botón comprar.
Al pulsar el botón “Añadir al carrito” mostrar un mensaje: “Producto añadido al carrito:
[NOMBRE DEL PRODUCTO]. */

// Array de productos
const productos = [
  {
    nombre: 'Portátil Gaming',
    descripcion: 'Intel i7, 16GB RAM, RTX 3060',
    precio: 1299,
    stock: 5,
  },
  {
    nombre: 'Teclado Mecánico',
    descripcion: 'RGB, switches azules',
    precio: 89,
    stock: 15,
  },
  {
    nombre: 'Monitor 27"',
    descripcion: '4K, 144Hz, IPS',
    precio: 399,
    stock: 0,
  },
  {
    nombre: 'Ratón Gaming',
    descripcion: '16000 DPI, RGB',
    precio: 59,
    stock: 8,
  },
];

window.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('#contenedor-productos');
  const template = document.querySelector('#template-producto');

  function crearTarjetaProducto(producto) {
    const clon = template.content.cloneNode(true);
    const tarjeta = clon.querySelector('.tarjeta');

    const nombre = tarjeta.querySelector('.nombre');
    const descripcion = tarjeta.querySelector('.descripcion');
    const precio = tarjeta.querySelector('.precio');
    const stock = tarjeta.querySelector('.stock');
    const boton = tarjeta.querySelector('.btn-comprar');

    nombre.textContent = producto.nombre;
    descripcion.textContent = producto.descripcion;
    precio.textContent = producto.precio + ' €';

    if (producto.stock === 0) {
      stock.textContent = 'AGOTADO';
      stock.classList.add('sin-stock');
      boton.disabled = true;
    } else {
      stock.textContent = 'Stock disponible: ' + producto.stock;

      boton.addEventListener('click', () => {
        alert('Producto añadido al carrito: ' + producto.nombre);
      });
    }

    return tarjeta;
  }

  // Recorremos el array con for...of
  for (const producto of productos) {
    const tarjeta = crearTarjetaProducto(producto);
    contenedor.appendChild(tarjeta);
  }
});
