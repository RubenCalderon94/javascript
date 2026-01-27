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


//seleccionamos donde vamos a añadir
let lista = document.querySelector("#contenedor-productos");

// Array de productos
 const productos = [
 { nombre: "Portátil Gaming", precio: 999, stock: 5 },
 { nombre: "Teclado Mecánico", precio: 89, stock: 12 },
 { nombre: "Ratón Inalámbrico", precio: 29, stock: 20 },
 { nombre: "Monitor 27''", precio: 299, stock: 0 },
 { nombre: "Webcam HD", precio: 59, stock: 8 }
 ];


//creamos lo que vamos a añadir
 function crearTarjetaProducto(texto) {
    let div = document.createElement("div");
    div.classList.add("tarjeta"); // Añadimos la clase "tarjeta"

    let h3 = document.createElement("h3");
    h3.textContent=texto.nombre;//añdimos al h3 el nombre del texto

    let p = document.createElement("p");
    

    let span = document.createElement("span");

 }




 //recorrer el array y pasarle la funcion anterior
 for (const producto of productos) {
    let final = crearTarjetaProducto(producto)
    lista.append(final)
 }

 


