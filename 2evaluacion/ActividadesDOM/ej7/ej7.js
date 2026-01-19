/*Ejercicio 7
Dado este html:
<div class="producto" data-id="101" data-nombre="Teclado Mecánico" data-precio="79" data-stock="15">
 <h3>Teclado Mecánico</h3>
 <p>Precio: 79€</p>
 </div>
 <div class="producto" data-id="102" data-nombre="Ratón Gaming" data-precio="49" data-stock="23">
 <h3>Ratón Gaming</h3>
 <p>Precio: 49€</p>
 </div>
Recorre todos los productos y muestra en console.log:
Producto 1:
ID:
Nombre:
Precio:
Stock:
Modifica el primer producto y ponle un precio de 69 y añade un nuevo atributo llamado
“enOferta” con valor true. Mostrar el valor de las modificaciones.
*/

function ejecutar() {
  //primero hay que seleccionar donde estarian los productos. Como hay varios usamos "querySelectorAll"

  const productos = document.querySelectorAll(".producto"); // primero seleccionamos donde estarian los productos (hemos seleccionado por class)

  //recorremos todos los atributos
  productos.forEach((producto, index) => {
    console.log(`Producto ${index + 1}:`);
    console.log("ID:", producto.dataset.id);
    console.log("Nombre:", producto.dataset.nombre);
    console.log("Precio:", producto.dataset.precio);
    console.log("Stock:", producto.dataset.stock);
  });

  const primerProducto = document.querySelector(".producto");

  //Como es un solo producto no es necesario recorrer con foreach o lo que sea
  // Modificar y añadir atributos
  primerProducto.dataset.precio = "69";
  primerProducto.dataset.enOferta = "true";

  console.log("=== Primer producto modificado ===");
  console.log("ID:", primerProducto.dataset.id);
  console.log("Nombre:", primerProducto.dataset.nombre);
  console.log("Precio:", primerProducto.dataset.precio);
  console.log("En oferta:", primerProducto.dataset.enOferta);
}
