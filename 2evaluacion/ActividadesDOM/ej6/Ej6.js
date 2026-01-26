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

  let contenido = '<h2>Ciudades de España</h2>';

  let contenedorLista = document.querySelector('#contenedor-lista');

  //2. Crea una lista <ul> con todos los elementos del array.

  const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];

  for (const ciudad of ciudades) {
    contenido += `<ul><li>${ciudad}</li></ul>`;
  }

  //3. Inserta todo en el div usando innerHTML.
  //ES LO QUE USO, EL FINAL ES IR SUMANDO AL INNERHTML CON LA
  //VARIABLE CONTENIDO

  contenedorLista.innerHTML += contenido;

  //4. Muestra un alert que diga “Lista creada con X ciudades”

  alert('Lista Creada con: ' + ciudades.length + ' ciudades');
}
