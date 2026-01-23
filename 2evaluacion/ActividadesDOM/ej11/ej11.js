/*Ejercicio 11 – Lista dinámica
Vamos a crear una aplicación que permite añadir y eliminar elementos de una lista.
Estilo y elementos HTML:
<style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            background-color: #f0f0f0;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        button {
            padding: 5px 10px;
            cursor: pointer;
        }

        .btn-eliminar {
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 3px;
        }
    </style>

<h1>Lista de Tareas</h1>
<ul id="lista"></ul>

Recorrer el array de tareas iniciales y crea elementos <li> y dentro <span> con el texto de cada tarea, añade un botón eliminar con la clase “btn-eliminar”. Crea una función “crearElementoLista” que tenga como parámetro de entrada un texto y devuelva el <li> a insertar:

// Array de tareas iniciales
    const tareasIniciales = [
        "Estudiar JavaScript",
        "Practicar DOM",
        "Hacer ejercicios"
    ];
*/

// ----------------------------
// Esperamos a que el DOM esté cargado
// ----------------------------
document.addEventListener('DOMContentLoaded', function () {
  // con esta linea evitamos errores al cargar o no antes de ejecutar
  // ----------------------------
  // Seleccionamos el <ul> donde pondremos los <li>
  // ----------------------------
  const lista = document.querySelector('#lista');

  // ----------------------------
  // Array con las tareas iniciales
  // ----------------------------
  const tareasIniciales = [
    'Estudiar JavaScript',
    'Practicar DOM',
    'Hacer ejercicios',
  ];

  // ----------------------------
  // Función para crear un <li> con span y botón eliminar
  // ----------------------------
  function crearElementoLista(texto) {
    // Crear el <li>
    const li = document.createElement('li');

    // Crear un <span> para contener el texto de la tarea
    const span = document.createElement('span');
    span.textContent = texto; // Añadir el texto dentro del span

    // Crear un botón para eliminar la tarea
    const boton = document.createElement('button');
    boton.textContent = 'Eliminar'; // Texto del botón
    boton.classList.add('btn-eliminar'); // Clase para estilo rojo

    // Añadimos evento click al botón para eliminar el <li>
    boton.addEventListener('click', function () {
      li.remove(); // Borra este <li> del DOM
    });

    // Metemos el span y el botón dentro del <li>
    li.append(span, boton);

    // Devolvemos el <li> ya completo
    return li;
  }

  // ----------------------------
  // Recorrer el array de tareas iniciales y añadirlas a la lista
  // ----------------------------
  for (let tarea of tareasIniciales) {
    const li = crearElementoLista(tarea); // Creamos el <li>
    lista.append(li); // Lo añadimos al <ul>
  }
});
