/*Ejercicio 8 
Recorre cada producto y muestra en consola: el nombre del producto, ID, precio y
stock.
Si el stock es cero, añadir a dicho producto la clase “sin-stock” para que se ponga en
rojo, añadir también el atributo “disponible” a false, para indicar que no está disponible
(true en caso contrario). Cambiar el texto del stock a AGOTADO.
Si el precio es menor a 500 es una oferta, por lo que hay que añadir la clase “oferta” y el
atributo esOferta a true.*/

function ejecutar() {
  //primero seleccionamos todos los productos
  const productos = document.querySelectorAll('.producto');

  //el nuevo div que hemos creado para imprimir lo que vamos a cambiar
  const contenedor = document.querySelector('.resultado');

  let contenido = '<h2>Listado de productos:</h2>';

  //recorremos el nodelist creado con queryselectorall
  for (const producto of productos) {
    const id = producto.dataset.id;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    let stock = parseInt(producto.dataset.stock);

    // Revisamos si está agotado
    if (stock === 0) {
      producto.classList.add('sin-stock'); //añadimos nueva clase
      producto.dataset.disponible = 'false';
      stock = 'AGOTADO';
      producto.querySelector('.stock').textContent = stock;
    } else {
      producto.dataset.disponible = 'true';
    }

    // Revisamos si es oferta
    let esOferta = 'false';
    if (precio < 500) {
      producto.classList.add('oferta');
      esOferta = 'true';
    }
    producto.dataset.esOferta = esOferta;

    // Añadimos al contenido para mostrar en pantalla
    contenido += `
        <p>ID: ${id}</p>
        <p>Nombre: ${nombre}</p>
        <p>Precio: ${precio}€</p>
        <p>Stock: ${stock}</p>
        <p>En oferta: ${esOferta}</p>
      <hr>
    `;
  }

  // Mostramos todo en la página
  contenedor.innerHTML = contenido;
}
