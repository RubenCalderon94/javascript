/*Tareas:
1. Selecciona todas las tarjetas y muestra cuántas hay.
2. Añade la clase "activa" solo a la primera tarjeta.
3. Añade la clase "grande" a todas las tarjetas usando un bucle. Y muestra cómo
van quedando las clases en cada tarjeta.
4. Verifica cuántas clases tiene la primera tarjeta. */

function ejecutar() {
  //1. Selecciona todas las tarjetas y muestra cuántas hay.
  let todas = document.querySelectorAll('.tarjeta');
  alert(todas.length);

  //2. Añade la clase "activa" solo a la primera tarjeta.
  let activa = document.querySelector('.tarjeta');
  activa.classList.add('activa');
  alert(activa.className);

  //3. Añade la clase "grande" a todas las tarjetas usando un bucle. Y muestra cómo
  //van quedando las clases en cada tarjeta.
  let tarjetas = document.querySelectorAll('.tarjeta');

  for (const tarjeta of tarjetas) {
    tarjeta.classList.add('grande');
    console.log(tarjeta.className);
  }

  //4. Verifica cuántas clases tiene la primera tarjeta.
  let verifica = document.querySelector('.tarjeta');
  console.log(verifica.classList.length);
  console.log(verifica.className);
}
