/*
2. Nos dan la lista de la compra en un array([“Leche”, “Café”, “Té”, “Miel”). Crea un botón para añadir
“Carne” al principio de la lista de la compra y “Azúcar” al final de la lista. Si ya se ha añadido “Carne” o
“Azúcar” no se vuelve a añadir, se muestra el mensaje “Ya se ha añadido este producto a la lista de la
compra”.
Crea un botón “Alergias” que pida un producto al que eres alérgico y lo elimina de la lista de la compra,
indicando “He eliminado X producto de la cesta porque eres alérgico”, si no se encuentra el producto en
la cesta, mostrará “No existen alergias en la cesta”.
Crea un botón “Modificar” que pida un producto a buscar y si lo encuentra modifique su valor, por
ejemplo, que busque “Té” y te permita modificarlo a “Té verde”.
*/

let array = ['Leche', 'Café', 'Té', 'Miel']; //Declarado global si no, no funciona correctamente

function añadir() {
  let carne = 'Carne';
  let azucar = 'Azúcar';

  if (array.includes(azucar) || array.includes(carne)) {
    // para que me diga si el producto ya esta añadido
    //hay que declararlo fuera de la funcion el ARRAY
    alert('Ya se ha añadido este producto a la lista de la compra');
    return;
  }
  array.unshift('Carne');
  array.push('Azúcar');

  alert(array);
}

function alergias() {
  let usuario = prompt('Dime a que producto eres alergico');
  usuario = usuario.trim().toLowerCase(); // limpiamos espacios y minúsculas

  //CREAMOS UNA COPIA DEL ARRAY Y LO GUARDAMOS PARA GUARDAR EL ARRAY EN MINUSCULAS
  let arrayMinus = [];

  for (let producto of array) {
    arrayMinus.push(producto.toLowerCase()); //Se añaden al nuevo array pero todas en minusculas
  }

  if (arrayMinus.includes(usuario)) {
    let posicion = arrayMinus.indexOf(usuario); //vemos la posicion real y lo devolvemos
    let eliminado = array.splice(posicion, 1); // guardamos el nombre real (con mayúscula, tilde, etc.)
    // eliminamos del array original

    alert('Producto eliminado ' + eliminado);
    alert('Nueva lista: ' + array);
  } else {
    alert('No existen alergias en la cesta');
  }
}

function modificar() {
  let usuario = prompt('Dime que producto quieres modificar');
  if (array.includes(usuario)) {
    let usuar = prompt('Añadir modificacion');
    let posicion = array.indexOf(usuario); // obtenemos la posición del producto en el array
    array[posicion] = usuar; // modificamos el array con lo que el usuario ha introducido
    alert('Array modificado: ' + array);
  } else {
    alert('No se encontró el producto en la cesta');
  }
}
