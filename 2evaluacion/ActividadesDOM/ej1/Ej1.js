/*
Tareas (escribe el código JavaScript):
1. Selecciona el elemento h1 por su ID y muestra su contenido en consola.
2. Selecciona el primer párrafo con clase "intro" y muestra su texto.
3. Selecciona TODOS los párrafos con clase "intro"(Salida: Intro 1: “…”) y
muestra cuántos hay.
4. Selecciona TODOS los párrafos (sin importar la clase) y muestra cuántos hay.*/

function ejecutar() {
  //1. Selecciona el elemento h1 por su ID y muestra su contenido en consola.
  let titulo = document.querySelector('#titulo');
  alert('Contenido del h1:' + titulo.textContent);

  //2. Selecciona el primer párrafo con clase "intro" y muestra su texto.
  let primerParrafo = document.querySelector('.intro');
  alert('Contenido del parrafo , de clase intro:' + primerParrafo.textContent);

  //3.Selecciona TODOS los párrafos con clase "intro"(Salida: Intro 1: “…”) y muestra cuántos hay.
  let todosParrafosConIntro = document.querySelectorAll('.intro');

  for (const parrafo of todosParrafosConIntro) {
    console.log(parrafo);
  }

  console.log('Numero de parrafos: ' + todosParrafosConIntro.length);

  //4. Selecciona TODOS los párrafos (sin importar la clase) y muestra cuántos hay.*/
  let todos = document.querySelectorAll('p');
  console.log('Cuantos parrafos hay: ' + todos.length);
}
