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
