/*Ejercicio 8 
Recorre cada producto y muestra en consola: el nombre del producto, ID, precio y
stock.
Si el stock es cero, añadir a dicho producto la clase “sin-stock” para que se ponga en
rojo, añadir también el atributo “disponible” a false, para indicar que no está disponible
(true en caso contrario). Cambiar el texto del stock a AGOTADO.
Si el precio es menor a 500 es una oferta, por lo que hay que añadir la clase “oferta” y el
atributo esOferta a true.*/

function ejecutar() {
  //vamos a recorrer cada producto.
  // 1 Seleccionamos donde esta cada producto.

  const productos = document.querySelectorAll(".producto");

  //ahora recorremos cada producto
  productos.forEach((producto, index) => {
    console.log(`Producto ${index + 1}:`);
    console.log("ID:", producto.dataset.id);
    console.log("Nombre:", producto.dataset.nombre);
    console.log("Precio:", producto.dataset.precio);
    console.log("Stock:", producto.dataset.stock);
  });


  if (producto.dataset.stock == "0") {
    console.log("Sin stock ")
  }


}
