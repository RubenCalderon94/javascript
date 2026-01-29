/** Crea una función “cargarTareasIniciales” que nada más cargar el HTML cree las
tareas:
- Estudiar Javascript.
- Practicar DOM.
- Hacer ejercicios.
Las 3 tareas son <li> que tendrán un <span> dentro con el nombre de la tarea y la clase
“texto”.

También un botón con la clase “btn-eliminar” y como texto “X”.

* Cuando se haga click en “btn-agregar” que cree una nueva tarea con el texto “Tarea
X” donde X es un contador que empieza en 1 y se irá incrementando.

* Al hacer click en “btn-eliminar”, eliminar el <li> entero. Indicar en consola “Tarea
eliminada: X” donde X es el texto de la tarea recién eliminada.

* Al hacer click encima del <li> que tendrá la clase “texto” hacer que se ponga la tarea
como completada usando la clase “completada” y si se vuelve a pulsar que se quite la
tarea como completada. Indicar en consola “tarea marcada como X” donde X es
completada o pendiente.*/

// Espera a que todo el HTML esté cargado antes de ejecutar el JS
window.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el <ul> donde irán las tareas
  let ul = document.querySelector('#lista-tareas');

  // Seleccionamos el botón de agregar tarea (es un ID)
  let btnAgregar = document.querySelector('#btn-agregar');

  // Array con las tareas iniciales
  let array = ['Estudiar JavaScript', 'Practicar DOM', 'Hacer ejercicios'];

  // Contador para las nuevas tareas
  let contador = 1;

  // Función que crea una tarea (li + span + botón eliminar)
  function cargarTareasIniciales(texto) {
    // Creamos el elemento <li>
    let li = document.createElement('li');

    // Creamos el <span> donde va el texto de la tarea
    let span = document.createElement('span');
    span.textContent = texto; // Texto de la tarea
    span.classList.add('texto'); // Clase texto (para CSS)

    // Creamos el botón de eliminar
    let btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn-eliminar'); // Clase del botón
    btnEliminar.textContent = 'X'; // Texto del botón

    // Metemos el span dentro del li
    li.appendChild(span);

    // Metemos el botón dentro del li
    li.appendChild(btnEliminar);

    // Metemos el li dentro del ul
    ul.appendChild(li);

    // Al hacer click en el TEXTO, marcar como completada o pendiente
    span.addEventListener('click', () => {
      span.classList.toggle('completada'); // Añade o quita la clase

      // Comprobamos el estado actual
      const estado = span.classList.contains('completada')
        ? 'completada'
        : 'pendiente';

      // Mostramos el estado en consola
      console.log(`tarea marcada como ${estado}`);
    });

    // Al hacer click en el botón eliminar
    btnEliminar.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que se marque como completada
      console.log(`Tarea eliminada: ${span.textContent}`); // Mensaje consola
      li.remove(); // Eliminamos el <li> completo
    });
  }

  //SON LAS TAREAS FIJAS DEL ARRAY
  // Creamos las tareas iniciales al cargar la página
  for (const tareas of array) {
    cargarTareasIniciales(tareas);
  }

  //AQUI AGREGA MAS ADICIONALES, TAREA1,TAREA2 ECT
  // Al hacer click en "Agregar Tarea"
  btnAgregar.addEventListener('click', () => {
    cargarTareasIniciales(`Tarea ${contador}`); // Nueva tarea
    contador++; // Aumentamos el contador
  });
});
