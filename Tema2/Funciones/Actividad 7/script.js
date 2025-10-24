//1. Si tenemos una cadena en minúsculas “miel”. ¿Cómo podemos transformarla en una cadena con la
//primera letra en mayúsculas(Miel)?

function primeraMayuscula() {
  let cadena = "miel";
  let primerCaracter = cadena[0].toLocaleUpperCase();
  let resto = cadena.slice(1);
  alert(primerCaracter + resto);
}
