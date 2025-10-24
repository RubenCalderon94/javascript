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

function añadir() {
  let array = ["Leche", "Café", "Té", "Miel"];
  let productoInicio = "Carne";
  let productoFinal = "Azucar";

  if (array.includes(productoInicio) || array.includes(productoFinal)) {
    alert("Los productos ya existen");
    return;
  }

  array.unshift("Carne");
  array.push("Azucar");

  alert(array);
}

function alergias() {
  let usuario = prompt("Introduce el producto que te produce alergia");
  if (array.includes(usuario)) {
    let posicion = array.indexOf(usuario);
    posicion.splice(posicion, 1);
    alert(array);
  } else {
    alert("El producto no existe en la cesta");
  }
}

function modificar() {
  let usuario = prompt("Dime el producto a buscar");
  if (array.includes(usuario)) {
  } else {
    alert("El producto no existe");
  }
}
