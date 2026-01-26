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

  let aniadeDestacado = document.querySelector('#caja');

  aniadeDestacado.classList.add('destacado');

  //mostramos para ver si se ha añadido
  alert(aniadeDestacado.className);

  //2. Verifica si tiene la clase "contenedor" y muestra el resultado en consola.

  let verifica = aniadeDestacado.classList.contains('.contedor');

  alert(verifica);

  //3. Elimina la clase "contenedor".
  aniadeDestacado.classList.remove('.contenedor');

  //4. Muestra todas las clases finales en consola.*/
  console.log(aniadeDestacado.classList.length);
}
