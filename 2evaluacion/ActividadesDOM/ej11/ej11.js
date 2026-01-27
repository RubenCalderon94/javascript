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
*/
// Array de tareas iniciales
const tareasIniciales = [
  'Estudiar JavaScript',
  'Practicar DOM',
  'Hacer ejercicios',
];

// ----------------------------
// Esperamos a que el DOM esté cargado
// con esta linea evitamos errores al cargar o no antes de ejecutar
document.addEventListener('DOMContentLoaded', function () {
  //seleccionamos donde vamos a añadir lo creado
  let lista = document.querySelector('#lista');

  //funcion completa para añadir li, span, button y A ESTA FUNCION SE LE
  //PASA EL TEXTO

  function crearElemetosLista(texto) {
    //creamos el elemento LI
    let li = document.createElement('li');
    //creamos el elemento span (que contendra el texto te la tarea)
    let span = document.createElement('span');
    span.textContent = texto;
    //creamos el elemento button, que ponga eliminar y con class "btn-eliminar" para usar css
    let boton = document.createElement('button');
    boton.textContent = 'eliminar';
    boton.classList.add('btn-eliminar');

    //CREAMOS UN EVENTO, que sera al clickcar ese botton
    // Evento click para eliminar la tarea(QUE BORRARA UN LI,
    //CADA LI LLEVA UN BOTON)
    boton.addEventListener('click', function () {
      li.remove(); // Elimina este <li> del DOM
    });

    //ahora para añadir usaremos APPEND
    li.append(span, boton);

    return li;
  }

  //recorremos el array de tareasIniciales
  for (const tarea of tareasIniciales) {
    //ahora con la otra funcion creada, solo al recorrer el array
    //se ira añadiendo y todo se guarda en este li
    const li = crearElemetosLista(tarea);

    //añadimos a la lista del html
    lista.append(li);
  }
});
