/* Ejercicio 6
Dado este HTML:
<div id="contenedor-lista"></div>
Y este array en JavaScript:
const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla"];
Tareas:
1. Crea un título h2 que diga "Ciudades de España".
2. Crea una lista <ul> con todos los elementos del array.
3. Inserta todo en el div usando innerHTML.
4. Muestra un alert que diga “Lista creada con X ciudades”*/

function ejecutar() {
  //1. Crea un título h2 que diga "Ciudades de España".

  //creamos la variable donde escribimos la frase, y luego
  //a añadir en el contenedor
  let resultado = "<h2>Ciudades de España</h2>";

  //creamos la variable donde seleccionamos el div por id  "#contenedor-lista"
  let contenedor = document.getElementById("contenedor-lista");

  //añadimos al div selecionado con id  ("#contenedor-lista") y con
  //  (contenedor.innerHTML) estamos ubicando donde se añadira la
  // variable resultado (que sera Ciudades de España ).
  



  // 2. Crea una lista <ul> con todos los elementos del array
  const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla"];

 
  let mostrarCiudades = "<ul>";
  resultado += mostrarCiudades;

  for (const ciudad of ciudades) {
    mostrarCiudades += `<li>${ciudad}</li>`;
  }

  mostrarCiudades += "</ul>";

  resultado += mostrarCiudades;

  //AQUI AL USAR CONTENEDOR LO QUE ESTAMOS HACIENDO ES METER DENTRO 
  //AL SER SELECCIONADO ANTERIORMENTE, AHORA CON innerHTML = resultado
  //lo que hacemos es añadir al resultado lo obtenido anteriormente
  contenedor.innerHTML = resultado;

  // 3.

  // 4.Muestra un alert que diga “Lista creada con X ciudades”*/
  alert("Lista creada con "+`${ciudades.length}`+ " ciudades")


}
