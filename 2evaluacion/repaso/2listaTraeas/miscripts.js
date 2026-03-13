let arrayTareas = [];
let contadorId = 1;

//SELECION DEL DOM
const inputTarea = document.querySelector('#inputTarea');
const selectTipo = document.querySelector('#selectTipo');
const btnAnadir = document.querySelector('#btnAnadir');
const ul = document.querySelector('#listaTareas');
const template = document.querySelector('#templateTarea');
const filtros = document.querySelector('#filtros');

btnAnadir.addEventListener('click', () => {
  aniadirTareas(); //aqui añadimos lo que queremos que el evento ejecute
});

function aniadirTareas() {
  const descripcion = inputTarea.value;
  const tipo = selectTipo.value;

  if (!descripcion) {
    alert('Escribe una descripción para la tarea.');
    return;
  }

  const tarea = {
    id: ++contadorId,
    descripcion: descripcion,
    tipo: tipo,
    completada: false,
    fechaCompletada: null,
  };

  arrayTareas.push(tarea);
  inputTarea.value = '';
  dibujar(arrayTareas);
}

function dibujar(tareas) {
  ul.innerHTML = '';

  if (tareas.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No hay tareas';
    ul.appendChild(li);
    return;
  }

  tareas.forEach((tarea) => {
    const clon = template.content.cloneNode(true);
    clon.querySelector('.tarea-desc').textContent = tarea.descripcion;
    clon.querySelector('.tarea-tipo').textContent = tarea.tipo;
    const btnCompletar = clon.querySelector('.btn-completar');
    const btnEliminar = clon.querySelector('.btn-eliminar');

    btnCompletar.addEventListener('click', () => {
      //faltaria cosas completar
    });

    btnEliminar.addEventListener('click', () => {
      eliminar(tarea.id);
    });
    ul.appendChild(clon);
  });
  crearFiltros();
}

function eliminar(id) {
  arrayTareas = arrayTareas.filter((t) => t.id !== id);
  dibujar(arrayTareas); //con la linea de arriba y esto, conseguimos eliminar
}

function crearFiltros() {
  filtros.innerHTML = '';

  const btnTodas = document.createElement('button');
  btnTodas.textContent = 'Todas';

  btnTodas.addEventListener('click', () => dibujar(arrayTareas));
  filtros.appendChild(btnTodas); //añadimos al DOM

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

      filtros.appendChild(btn);
    }
  });
}
