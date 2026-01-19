/*Ejercicio 9
Dado este HTML:
<div id="caja" class="contenedor">Mi caja</div>
Tareas:
1. Añade la clase "destacado" a la caja.
2. Verifica si tiene la clase "contenedor" y muestra el resultado en consola.
3. Elimina la clase "contenedor".
4. Muestra todas las clases finales en consola.*/

function ejecutar() {
  //1. Añade la clase "destacado" a la caja.
  //seleccionamos primero el contenedor
  const destacado = document.querySelector("#caja");

  //una vez lo tenemos, lo modificamos
  destacado.classList.add("destacado");

  //mostramos ya modificado
  console.log(caja.className);

  // 2. Verifica si tiene la clase "contenedor" y muestra el resultado en consola.
  const tiene = destacado.classList.contains("contenedor");
  alert("Tiene contenedor " + tiene);

  // 3. Elimina la clase "contenedor".
  destacado.classList.remove("contenedor");

  //4. Muestra todas las clases finales en consola.
  console.log(destacado.classList.length);
}
