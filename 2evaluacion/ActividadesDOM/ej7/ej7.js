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
  //primero seleccionamos por class los productos y generamos un nodeList
  let productos = document.querySelectorAll('.producto');

  //aqui modificaremos el producto 1 es la posicion 0 del nodeList
  nuevoPrecio = productos[0].dataset.precio = '69';
  enOferta = productos[0].dataset.enOferta = true;
  //declaramos variable que iremos añadiendo mas contenido despues,
  // que sera lo que vamos a imprimir
  let contenido = 'Listado de productos: <br>';
  let contador = 1;

  for (const producto of productos) {
    //recorremos el nodeList y ajustamos parametros que vamos a ir imprimiendo
    contenido += 'Producto ' + contador + ': <br> ';
    contenido += 'ID: ' + `${producto.dataset.id}` + '<br>';
    contenido += 'Nombre: ' + `${producto.dataset.nombre}` + '<br>';
    contenido += 'Precio: ' + `${producto.dataset.precio}` + '<br>';
    contenido += 'Stock: ' + `${producto.dataset.stock}` + '<br>';
    contenido += 'En oferta: ' + `${producto.dataset.enOferta}` + '<br><br>';
    contador++;
  }

  //creamos un div nuevo y lo seleccionamos, es donde vamos a
  // imprimir el contenido usando innerHTML
  let resultado = document.querySelector('.resultado');

  resultado.innerHTML += contenido;
}
