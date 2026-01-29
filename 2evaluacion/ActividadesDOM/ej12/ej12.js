/*Nos dan un array de productos:
// Array de productos
 const productos = [
 { nombre: "Portátil Gaming", precio: 999, stock: 5 },
 { nombre: "Teclado Mecánico", precio: 89, stock: 12 },
 { nombre: "Ratón Inalámbrico", precio: 29, stock: 20 },
 { nombre: "Monitor 27''", precio: 299, stock: 0 },
 { nombre: "Webcam HD", precio: 59, stock: 8 }
 ];
Recorre el array de productos y llama a una función llamada crearTarjetaProducto con
el objeto literal como parámetro. Esta función crea un div con la clase “tarjeta” que
tendrá como hijos:
- <h3> con el nombre del producto.
- <p> con <span> con la clase “precio” y el precio del producto con € al final.
- <p> con “Stock: X unidades” si hay stock y <p> con texto AGOTADO y color del
texto rojo y negrita en si no hay stock.
*/

window.addEventListener('DOMContentLoaded', () => {
  // PARA QUE FUNCIONE, HAY QUE PONER TODO EL CODIGO DENTRO DE AQUI
  //seleccionamos donde vamos a añadir
  let lista = document.querySelector('#contenedor-productos');

  // Array de productos
  const productos = [
    { nombre: 'Portátil Gaming', precio: 999, stock: 5 },
    { nombre: 'Teclado Mecánico', precio: 89, stock: 12 },
    { nombre: 'Ratón Inalámbrico', precio: 29, stock: 20 },
    { nombre: "Monitor 27''", precio: 299, stock: 0 },
    { nombre: 'Webcam HD', precio: 59, stock: 8 },
  ];

  //creamos lo que vamos a añadir
  function crearTarjetaProducto(texto) {
    //DIV PRINCIPAL
    let div = document.createElement('div');
    div.classList.add('tarjeta'); // Añadimos la clase "tarjeta"

    //NOMBRE
    let h3 = document.createElement('h3');
    h3.textContent = texto.nombre; //añdimos al h3 el nombre del texto

    //PRECIO
    let p = document.createElement('p');
    let span = document.createElement('span');
    span.classList.add('precio');
    span.textContent = texto.precio + '$';
    p.append(span);

    //STOCK
    let otroP = document.createElement('p');

    if (texto.stock > 0) {
      otroP.textContent = 'Stock:' + texto.stock + ' unidades';
    } else {
      otroP.textContent = 'Agotado';
      otroP.style.color = 'red';
      otroP.style.fontWeight = 'bold';
    }

    //AÑADIMOS TODO AL DIV
    div.append(h3);
    div.append(p);
    div.append(otroP);

    return div;
  }

  //recorrer el array y pasarle la funcion anterior
  for (const producto of productos) {
    let final = crearTarjetaProducto(producto);
    lista.append(final);
  }
});
