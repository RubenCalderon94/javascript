/**
 * Datos de entrada: Array de productos serializados (Simulando una fuente externa)
 * Formato: "IDProducto;Nombre;Precio;Descripción;URL_Imagen"
 */

const arrayProductos = [
  '123;Monitor UltraWide;349.99;Monitor curvo de 34 pulgadas ideal para programar.;https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
  '245;Teclado Mecánico;120.50;Teclado RGB con switches blue para una escritura táctil.;https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
  '367;Ratón Ergonómico;55.00;Ratón inalámbrico diseñado para largas jornadas de trabajo.;https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
  '423;Auriculares Studio;89.00;Cancelación de ruido activa y sonido de alta fidelidad.;https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  '518;Silla Gaming;199.00;Comodidad extrema para tus sesiones de código.;https://www.powerplanetonline.com/cdnassets/silla_gaming_813_blanco_negro_001v2_l.jpg',
  '696;Webcam 4K;75.25;Resolución Ultra HD para tus reuniones de equipo.;https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png?v=1',
];

let arrayFormateado = [];
let carrito = [];

//SELECCIONAMOS EL DOM
const productGrid = document.querySelector('#productGrid');
const templatePrincipal = document.querySelector('#plantillaTarjeta');
const cartItems = document.querySelector('#cartItems');
const sidebar = document.querySelector('#sidebar');
const closeCart = document.querySelector('#closeCart');
const templateCarrito = document.querySelector('#elementoCarrito');
const iconoCarrito = document.querySelector('#iconoCarrito');
const cartBadge = document.querySelector('#cartBadge');
const totalValue = document.querySelector('#totalValue');
const comprarBtn = document.querySelector('#comprarCarrito');
const clearCartBtn = document.querySelector('#clearCart');

parchearArray(arrayProductos);
dibujarTarjetas(arrayFormateado);

//FORMATEAMOS ARRAY Y LO PASAMOS A OBJETO
// CONVERTIR ARRAY A OBJETOS
// ----------------------------
function parchearArray(array) {
  arrayFormateado = array.map((item) => {
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

function dibujarTarjetas(array) {
  productGrid.innerHTML = '';

  array.forEach((producto) => {
    const clon = templatePrincipal.content.cloneNode(true);
    //REVISAR Y PROBAR LA C QUE ESTA EN MINUSCULA EN TEXTCONTENT
    clon.querySelector('.product-image').src = producto.imagen;
    clon.querySelector('.product-title').textcontent = producto.nombre;
    clon.querySelector('.product-desc').textcontent = producto.descripcion;
    clon.querySelector('.product-price').textcontent = producto.precio;
    const btnAniadir = clon.querySelector('.add-btn');

    btnAniadir.addEventListener('click', () => {
      aniadirAlCarrito(producto);
    });

    productGrid.appendChild(clon);
  });
}

function aniadirAlCarrito(producto) {
  const existe = carrito.find((p) => p.id === producto.id);
  //VAMOS AÑADIENDO SI NO EXISTE, Y SI EXISTE SUMA
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      imagen: producto.imagen,
      cantidad: 1,
    });
  }
  actualizarCarrito(carrito);
}

function actualizarCarrito() {
  cartItems.innerHTML = '';
  let totalArticulos = 0;
  let totalPrecio = 0;

  carrito.forEach((producto) => {
    const clon = templateCarrito.content.cloneNode(true);

    clon.querySelector('.cart-item-img').src = producto.imagen;
    clon.querySelector('.cart-item-title').textContent = producto.nombre;
    clon.querySelector('.cart-item-price').textContent =
      producto.precio + ' € x ' + producto.cantidad;

    const btnRemove = clon.querySelector('.remove-btn');

    btnRemove.addEventListener('click', () => {
      carrito = carrito.filter((p) => p.id !== producto.id);
      actualizarCarrito();
    });
    cartItems.appendChild(clon);
    totalArticulos += producto.cantidad;
    totalPrecio += producto.precio * producto.cantidad;
  });

  cartBadge.textContent = totalArticulos;
  totalValue.textContent = totalPrecio;
}

iconoCarrito.addEventListener('click', () => sidebar.classList.add('active'));
closeCart.addEventListener('click', () => sidebar.classList.remove('active'));

clearCartBtn.addEventListener('click', () => {
  carrito = [];
  totalValue.textContent = 0;
  actualizarCarrito();
});

// ----------------------------
//      COMPRAR
//-----------------------------
comprarBtn.addEventListener('click', function () {
  // 1️⃣ Comprobar si el carrito está vacío
  if (carrito.length === 0) {
    alert('No hay productos en el carrito.');
    return;
  }

  // 2️⃣ Crear mensaje y total
  var mensaje = 'Has comprado:\n';
  var total = 0;

  // 3️⃣ Recorrer carrito usando for…in
  for (var i in carrito) {
    var producto = carrito[i];
    var subtotal = producto.precio * producto.cantidad;

    mensaje +=
      producto.nombre + ' x ' + producto.cantidad + ' = ' + subtotal + ' €\n';
    total += subtotal;
  }

  // 4️⃣ Añadir total al mensaje
  mensaje += 'Total: ' + total + ' €';

  // 5️⃣ Mostrar mensaje
  alert(mensaje);

  // 6️⃣ Vaciar carrito y actualizar vista
  carrito = [];
  actualizarCarrito();
});
