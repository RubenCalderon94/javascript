let arrayTareas = [];
let contadorId = 1;

// Selección del DOM
const inputTarea = document.querySelector('#inputTarea');
const selectTipo = document.querySelector('#selectTipo');
const botonAniadir = document.querySelector('#btnAnadir');
const ul = document.querySelector('#listaTareas');
const templateTarea = document.querySelector('#templateTarea');
const divFiltros = document.querySelector('#filtros');

botonAniadir.addEventListener('click', () => {
  anadir(); //aqui añadimos lo que queremos que el evento ejecute
});

function anadir() {
  const descripcion = inputTarea.value;
  const tipo = selectTipo.value;

  if (descripcion === '') {
    alert('Debe rellenar descripción');
    return;
  }

  const nuevaTarea = {
    id: contadorId++,
    descripcion: descripcion,
    tipo: tipo,
  };

  arrayTareas.push(nuevaTarea);
  inputTarea.value = '';

  dibujar(arrayTareas); // dibujamos todas las tareas
  crearFiltros(); // actualizamos los filtros
}

function dibujar(tareas) {
  ul.innerHTML = ''; //limpiamos el uL

  if (tareas.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No hay tareas';
    ul.appendChild(li);
    return;
  }

  tareas.forEach((tarea) => {
    const clon = templateTarea.content.cloneNode(true);
    clon.querySelector('.tarea-desc').textContent = tarea.descripcion;
    clon.querySelector('.tarea-tipo').textContent = tarea.tipo;

    const btnEliminar = clon.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => {
      eliminar(tarea.id); //hay que pasarle el id, porque la funcion esta creada para pasarle el id
    });

    ul.appendChild(clon);
  });
}

function eliminar(id) {
  arrayTareas = arrayTareas.filter((t) => t.id !== id);
  dibujar(arrayTareas); //con la linea de arriba y esto, conseguimos eliminar
  crearFiltros(); //para ejecutar la funcion de abajo
}

// Crear filtros simples
function crearFiltros() {
  divFiltros.innerHTML = ''; //limpiamos

  // Botón "Todas"
  const btnTodas = document.createElement('button');
  btnTodas.textContent = 'Todas';

  btnTodas.addEventListener('click', () => dibujar(arrayTareas));
  divFiltros.appendChild(btnTodas); //añadimos al DOM

  // Botones para cada tipo único
  const tipos = [];
  arrayTareas.forEach((tarea) => {
    if (!tipos.includes(tarea.tipo)) {
      //SI NO EXISTE LA AÑADE
      tipos.push(tarea.tipo); //LA AÑADE AQUI

      const btn = document.createElement('button'); //creamos otro boton para cada tipo
      btn.textContent = tarea.tipo;
      btn.classList.add('tarea-tipo'); //aqui le añadimos el tipo
      btn.addEventListener('click', () => {
        const filtradas = arrayTareas.filter((t) => t.tipo === tarea.tipo);
        dibujar(filtradas); //dibuja de nuevo cada boton y el array filtrado
      });

      divFiltros.appendChild(btn);
    }
  });
}
