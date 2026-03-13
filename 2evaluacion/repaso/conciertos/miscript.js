const imagenesConciertos = [
  'images/BigTime.webp',
  'images/GreenDay.webp',
  'images/Bunbury.webp',
  'images/Evanescence.webp',
  'images/Hans.webp',
];

let arrayFormateado = [];
let imagenSeleccionada = '';
let arrayReservarFinal = [];

//SELECCION DEL DOM
const idReservas = document.querySelector('#reservas');
const divImagenes = document.querySelector('.conciertos');
const inputNombre = document.querySelector('.nombre');
const inputApellidos = document.querySelector('.apellidos');
const inputButaca = document.querySelector('.butacaSeleccionada');

const contenedorReservas = document.createElement('div');
contenedorReservas.id = 'contenedorReservas';
idReservas.appendChild(contenedorReservas);

parchearArray(imagenesConciertos);
dibujar(arrayFormateado);

function parchearArray(array) {
  arrayFormateado = array.map((item) => {
    const [images, imagen] = item.split('/');
    return { images, imagen };
  });
}

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

function parrafoSinReserva() {
  const parrafo = document.createElement('h3');
  parrafo.textContent = 'No hay reservas todavia';
  parrafo.classList.add('text-center', 'text-secondary', 'fw-bold');
  contenedorReservas.appendChild(parrafo);
}
