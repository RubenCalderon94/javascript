/*
2. Nos dan un array de frutas [“banana”, “naranja”, “mango”, “limon”]. Crear un script que pregunte al
usuario qué fruta quiere buscar en el array, si no existe dicha fruta mostrará “Esta fruta no existe en el
array” en caso contrario mostrará “Sí hay aguacate en el array”. La fruta se puede poner en mayúsculas y
minúsculas y la seguirá encontrando
*/

function buscaFruta() {
  let frutas = ["banana", "naranja", "mango", "limon"];
  let usuario = prompt("Escribe que fruta a buscar en el array");
  usuario = usuario.toLowerCase(); //me convierte todo a minusculas

  for (const fruta of frutas) {
    if (usuario == fruta) {
      alert("La fruta " + usuario + " si la hay en el array");
    } else alert("La fruta " + usuario + " no la hay en el array");
  }
}
