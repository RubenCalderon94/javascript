//1.Crear una función que pida una cadena por teclado y muestre su tamaño

function muestraCadena() {
  let array = new Array(); //Declaramos el array e instanciamos
  let cadena = prompt("Escribe una cadena");
  array.push(cadena);
  console.log(cadena.length);
}

//2. Crea una función que pida la clave Secreta por pantalla, si la introduce correctamente aparece el
//mensaje “Has acertado” (también serán válidas: secreta, SECRETA, SeCrEtA...)

function claveSecreta() {
  let clave = prompt("Escribe la clave secreta");

  if (clave.toLocaleLowerCase() == "secreta") {
    // transforma todos los caracteres en minúsculas:
    alert("Has acertado");
  } else {
    alert("Incorrecta");
  }
}

//3. Crea una función que recorra una cadena y separe los caracteres con un guión (Que no aparezca guión
//al final)

function recorreCadena() {
  let cadena = prompt("Escribe una cadena");

  let rdo = "";

  for (const caracter of cadena) {
    if (rdo == "") {
      rdo += caracter;
    } else {
      rdo += "-" + caracter;
    }
  }

  alert(rdo);
}
