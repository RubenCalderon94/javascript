// ----------------------------
// DATOS
// ----------------------------
const arrayProductos = [
  '123;Monitor UltraWide;349.99;Monitor curvo de 34 pulgadas.;https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
  '245;Teclado Mecánico;120.50;Teclado RGB con switches blue.;https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
  '367;Ratón Ergonómico;55.00;Ratón inalámbrico.;https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
  '423;Auriculares Studio;89.00;Cancelación de ruido.;https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  '518;Silla Gaming;199.00;Comodidad extrema.;https://www.powerplanetonline.com/cdnassets/silla_gaming_813_blanco_negro_001v2_l.jpg',
  '696;Webcam 4K;75.25;Resolución Ultra HD.;https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png?v=1',
];

//Variable global productosFormateados
let productosFormateados = [];

//variable global carrito
let carrito = [];

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

//Selecionamos el DOM
const productGrid = document.querySelector('#productGrid');
const templateTarjeta = document.querySelector('#plantillaTarjeta');
const templateCarrito = document.querySelector('#elementoCarrito');
const cartItems = document.querySelector('#cartItems');
const totalValue = document.querySelector('#totalValue');
const cartBadge = document.querySelector('#cartBadge');
const sidebar = document.querySelector('#sidebar');
const iconoCarrito = document.querySelector('#iconoCarrito');
const closeCart = document.querySelector('#closeCart');
const clearCartBtn = document.querySelector('#clearCart');
const comprarBtn = document.querySelector('#comprarCarrito');

// ----------------------------
// DIBUJAR PRODUCTOS
// ----------------------------
//clonamos el tempalte tarjeta, y sus atributos
function dibujar(producto) {
  const clon = templateTarjeta.content.cloneNode(true);
  clon.querySelector('.product-image').src = producto.imagen;
  clon.querySelector('.product-title').textContent = producto.nombre;
  clon.querySelector('.product-desc').textContent = producto.descripcion;
  clon.querySelector('.product-price').textContent = producto.precio;
  ///selecinamos el boton
  const boton = clon.querySelector('.add-btn');
  boton.dataset.id = producto.id;
  //añadimos evento, cuando se haga click, se ejecuta la funcion aniadirAlCarrito
  boton.addEventListener('click', aniadirAlCarrito);

  //AÑADIMOS EL TODO EL CLON AL productGrid, que es donde se imprime en el html
  productGrid.appendChild(clon);
}

// ----------------------------
// AÑADIR AL CARRITO
// ----------------------------
function aniadirAlCarrito(event) {
  const id = parseInt(event.target.dataset.id); //DETECTA ESPECIFICO CON EVENT.TARGET(busca que id )
  const producto = productosFormateados.find((p) => p.id === id);
  const existe = carrito.find((p) => p.id === id);
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
  actualizarCarrito();
}

// ----------------------------
// ACTUALIZAR CARRITO
// ----------------------------
function actualizarCarrito() {
  // limpiar
  cartItems.innerHTML = '';

  let totalArticulos = 0;
  let totalPrecio = 0;

  //AÑADIMOS AL ARRAY CREA GLOBAL DE CARRITO
  carrito.forEach((producto, index) => {
    //-------------------------
    //CLONAMOS TEMPLATE CARRITO
    //-------------------------
    const clon = templateCarrito.content.cloneNode(true);
    clon.querySelector('.cart-item-img').src = producto.imagen;
    clon.querySelector('.cart-item-title').textContent = producto.nombre;
    clon.querySelector('.cart-item-price').textContent =
      producto.precio + ' € x ' + producto.cantidad;

    // botón eliminar
    clon.querySelector('.remove-btn').addEventListener('click', () => {
      carrito.splice(index, 1); // quitar del array
      actualizarCarrito();
    });

    cartItems.appendChild(clon);

    totalArticulos += producto.cantidad; //vamos sumando cada cantidad seleccionada del producto
    totalPrecio += producto.precio * producto.cantidad; //vamos sumando precios de cada producto
  });

  // actualizar badge y total
  cartBadge.textContent = totalArticulos;
  totalValue.textContent = totalPrecio.toFixed(2) + ' €';
}

// ----------------------------
// ABRIR Y CERRAR SIDEBAR
// ----------------------------
iconoCarrito.addEventListener('click', () => sidebar.classList.add('active'));
closeCart.addEventListener('click', () => sidebar.classList.remove('active'));

// ----------------------------
// VACIAR CARRITO
// ----------------------------
clearCartBtn.addEventListener('click', () => {
  carrito = [];
  actualizarCarrito();
});

// ----------------------------
// COMPRAR
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

// ----------------------------
// EJECUTAMOS FUNCIONES PARA INICIAR PROGRAMA
// ----------------------------
parchearArray(arrayProductos); //LE PASAMOS EL ARRAYPRODUCTOS A NEUSTRA FUNCION, Y NOS FORMATEA EL ARRAY PRINCIPAL
productosFormateados.forEach(dibujar); //YA CON EL ARRAY FORMATEADO RECORREMOS CADA ELEMENTO Y CON LA FUNCION DIBUJAR, QUE ESTA EL CLON DEL TEMPLATE, NO VA MOSTRANDO CADA ATRIBUTO Y YA MUESTRA TARJETA A TARJETA
