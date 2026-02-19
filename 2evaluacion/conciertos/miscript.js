// =========================== 1️⃣ DATOS
// ===========================
const imagenesConciertos = [
  'images/BigTime.webp',
  'images/GreenDay.webp',
  'images/Bunbury.webp',
  'images/Evanescence.webp',
  'images/Hans.webp',
];

let arrayFormateado = [];
let arrayReservarFinal = [];
let butacaSeleccionada = ''; // nueva variable para la butaca seleccionada
let imagenSeleccionada = ''; // Nueva variable para la imagen elegida
let contadorId = 1;

// =========================== 2️⃣ SELECCIÓN DEL DOM
// ===========================
const idReservas = document.querySelector('#reservas');
const divImagenes = document.querySelector('.conciertos');
const templateReserva = document.querySelector('#tmpl-reserva');

// Usamos clases únicas en los inputs
const inputNombre = document.querySelector('.nombre');
const inputApellidos = document.querySelector('.apellidos');
const inputButaca = document.querySelector('.butacaSeleccionada'); // span donde se mostrará la butaca
const btnReservar = document.querySelector('.botonReservar');
const asientos = document.querySelectorAll('.asiento');

// Crear contenedor de reservas dinámicamente
const contenedorReservas = document.createElement('div');
contenedorReservas.id = 'contenedorReservas';
idReservas.appendChild(contenedorReservas);

// =========================== 3️⃣ EJECUCIÓN INICIAL
// ===========================
parchearArray(imagenesConciertos);
dibujar(arrayFormateado);
parrafoSinReserva();
recorrerButacas();

// =========================== 4️⃣ EVENTO RESERVAR
// ===========================
btnReservar.addEventListener('click', () => {
  anadir();
  dibujarReservaFinal(arrayReservarFinal);
});

// =========================== 5️⃣ FUNCIONES
// ===========================

// 5️⃣1 Formateamos el array de imágenes
function parchearArray(array) {
  arrayFormateado = array.map((item) => {
    const [images, imagen] = item.split('/');
    return { images, imagen };
  });
}

// 5️⃣2 Dibujamos las imágenes de conciertos
function dibujar(arrayFormateado) {
  arrayFormateado.forEach((foto) => {
    const img = document.createElement('img');
    img.src = foto.images + '/' + foto.imagen;
    img.classList.add('img-fluid');

    // Evento click que marca la imagen seleccionada
    img.addEventListener('click', (e) => {
      const todas = divImagenes.querySelectorAll('img');
      todas.forEach(
        (
          imagenes, //borra las clases de todas, para no dejar el azul a todas
        ) => imagenes.classList.remove('border', 'border-4', 'border-primary'),
      );

      // Poner borde solo a la seleccionada
      e.target.classList.add('border', 'border-4', 'border-primary');

      imagenSeleccionada = e.target.src; // Guardar la imagen seleccionada
    });

    divImagenes.appendChild(img);
  });
}

// 5️⃣3 Mostramos mensaje cuando no hay reservas
function parrafoSinReserva() {
  const parrafo = document.createElement('h3');
  parrafo.textContent = 'No hay reservas todavia';
  parrafo.classList.add('text-center', 'text-secondary', 'fw-bold');
  contenedorReservas.appendChild(parrafo);
}

// 5️⃣4 Recorremos y manejamos la selección de butacas
function recorrerButacas() {
  asientos.forEach((asiento) => {
    //seleccionado en el DOM asientos
    asiento.addEventListener('click', () => {
      if (asiento.classList.contains('ocupado')) {
        alert('La butaca seleccionada ya está ocupada');
        return;
      }

      // Quitamos selección a todas
      asientos.forEach((a) => a.classList.remove('ocupado'));

      // Marcamos la pulsada
      asiento.classList.add('ocupado');

      // Guardamos número de butaca y lo mostramos en el span
      butacaSeleccionada = asiento.textContent;
      inputButaca.textContent = butacaSeleccionada;
    });
  });
}

// 5️⃣5 Añadimos la reserva al array
function anadir() {
  const imagen = imagenSeleccionada;
  const nombre = inputNombre.value;
  const apellidos = inputApellidos.value;
  const butaca = butacaSeleccionada;

  if (imagen === '' || nombre === '' || apellidos === '' || butaca === '') {
    alert(
      'Debe seleccionar una imagen, escribir un nombre y apellido y seleccionar una butaca antes de reservar',
    );
    return;
  }

  const nuevaReserva = {
    id: contadorId++,
    imagen,
    nombre,
    apellidos,
    butaca,
  };

  arrayReservarFinal.push(nuevaReserva);

  // Limpiar campos y deseleccionar
  inputNombre.value = '';
  inputApellidos.value = '';
  inputButaca.value = '';
  butacaSeleccionada = '';
  imagenSeleccionada = '';
  divImagenes
    .querySelectorAll('img')
    .forEach((img) =>
      img.classList.remove('border', 'border-4', 'border-primary'),
    );

  // Marcar la butaca como ocupada
  asientos.forEach((asiento) => {
    if (asiento.textContent === nuevaReserva.butaca) {
      asiento.classList.contains('.ocupado');
      asiento.classList.remove('seleccionado');
    }
  });
}

// 5️⃣6 Dibujar reservas en la sección
function dibujarReservaFinal(arrayReservarFinal) {
  contenedorReservas.innerHTML = ''; // Limpiar antes

  if (arrayReservarFinal.length === 0) {
    parrafoSinReserva();
    return;
  }

  arrayReservarFinal.forEach((reserva) => {
    const clon = templateReserva.content.cloneNode(true);
    const reservaId = clon.querySelector('.butacasReservadas');
    reservaId.dataset.id = reserva.id; // Guardamos el id en un atributo data-id
    clon.querySelector('.img-concierto').src = reserva.imagen;
    clon.querySelector('.span-nombre').textContent = reserva.nombre;
    clon.querySelector('.span-apellidos').textContent = reserva.apellidos;
    clon.querySelector('.span-butaca').textContent = reserva.butaca;

    // Botón borrar
    const btnBorrar = clon.querySelector('.papeleraBorrar');
    btnBorrar.addEventListener('click', () => {
      eliminar(reserva.id);
    });

    // Botón modificar
    const btnModificar = clon.querySelector('.modificarNombre');
    btnModificar.addEventListener('click', () => {
      // Abrimos un prompt para que el usuario escriba un nuevo nombre
      // El segundo parámetro muestra el nombre actual como valor inicial
      const nuevoNombre = prompt('Introduce nuevo nombre', reserva.nombre);
      // Abrimos un prompt para que el usuario escriba un nuevo nombre
      // El segundo parámetro muestra el nombre actual como valor inicial
      const nuevoApellido = prompt(
        'Introduce nuevo apellido',
        reserva.apellidos,
      );

      // Si el usuario escribió algo para el nombre (no dejó vacío ni canceló)
      if (nuevoNombre) reserva.nombre = nuevoNombre;
      // Si el usuario escribió algo para el apellido
      if (nuevoApellido) reserva.apellidos = nuevoApellido;

      // Buscamos la fila de la reserva correspondiente en el DOM
      // closest() busca el elemento padre más cercano con la clase '.butacasReservadas'
      const fila = btnModificar.closest('.butacasReservadas');
      // Seleccionamos el span que muestra el nombre y actualizamos su contenido
      fila.querySelector('.span-nombre').textContent = reserva.nombre;
      // Seleccionamos el span que muestra el apellido y actualizamos su contenido
      fila.querySelector('.span-apellidos').textContent = reserva.apellidos;
    });

    contenedorReservas.appendChild(clon);
  });
}

// 5️⃣7 Eliminar reserva
function eliminar(id) {
  arrayReservarFinal = arrayReservarFinal.filter((t) => t.id !== id);
  dibujarReservaFinal(arrayReservarFinal);
}
