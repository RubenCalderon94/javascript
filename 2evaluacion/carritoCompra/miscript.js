/**
 * Datos de entrada: Array de productos serializados (Simulando una fuente externa)
 * Formato: "IDProducto;Nombre;Precio;Descripción;URL_Imagen"
 */
const arrayProductos = [
  "123;Monitor UltraWide;349.99;Monitor curvo de 34 pulgadas ideal para programar.;https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  "245;Teclado Mecánico;120.50;Teclado RGB con switches blue para una escritura táctil.;https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  "367;Ratón Ergonómico;55.00;Ratón inalámbrico diseñado para largas jornadas de trabajo.;https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
  "423;Auriculares Studio;89.00;Cancelación de ruido activa y sonido de alta fidelidad.;https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  "518;Silla Gaming;199.00;Comodidad extrema para tus sesiones de código.;https://www.powerplanetonline.com/cdnassets/silla_gaming_813_blanco_negro_001v2_l.jpg",
  "696;Webcam 4K;75.25;Resolución Ultra HD para tus reuniones de equipo.;https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png?v=1",
];


//selecionamos el template
const template = document.querySelector("#plantillaTarjeta");

//seleccionamos donde insertaremos los productos DINAMICAMENTE
const insertar = document.querySelector("#productGrid");

//llamamos a la funcion de parchearArray para ejecutarla
parchearArray(arrayProductos);

//-Convierte el array de strings en un array de objetos con las propiedades: id (entero),
//nombre, precio (decimal), descripcion, imagen.

function parchearArray(arrayProductos) {
  const productosFormateados = arrayProductos.map((item) => {
    const [id, nombre, precio, descripcion, imagen] = item.split(";");
    return {
      id: parseInt(id),
      nombre: nombre,
      precio: parseFloat(precio),
      descripcion: descripcion,
      imagen: imagen,
    };
  });

  //AQUI DIBUJAMOS CADA PRODUCTO
  for (const producto of productosFormateados) {
    //recorremos el array ya parcheado
    dibujarProducto(producto);
  }
}

//- U%liza el <template> con id “plan%llaTarjeta” para dibujar cada producto en el grid
//(productGrid). Asigna el id del producto al atributo data-id del botón "Añadir".
function dibujarProducto(producto) {
  //clonamos la tarjeta
  const clon = template.content.cloneNode(true);

  const tarjeta = clon.querySelector(".product-card");
  const img = tarjeta.querySelector(".product-image");
  const titulo = tarjeta.querySelector(".product-title");
  const descripcion = tarjeta.querySelector(".product-desc");
  const precio = tarjeta.querySelector(".product-price");

  const boton = tarjeta.querySelector(".add-btn");

  img.src = producto.imagen;
  titulo.textContent = producto.nombre;
  descripcion.textContent = producto.descripcion;
  precio.textContent = producto.precio + " €";
  boton.dataset.id = producto.id;

  insertar.appendChild(clon);

}






