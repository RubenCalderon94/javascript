let arrayDatos = [
  'Flexiones Brazos;4;10;-;ej1.png',
  'Flexiones con pelota;3;12;-;ej2.png',
  'Elevación barra;3;8;30;ej3.png',
  'Correr Cinta;-;-;-;ej4.png',
  'Curl mancuernas;3;10;10;ej5.png',
  'Oblicuos mancuerna;4;12;5;ej6.png',
  'Curl de bíceps;3;15;20;ej7.png',
  'Elevación rueda;3;12;40;ej8.png',
  'Press banca;4;15;40;ej9.png',
  'Crunch biceps alterno;4;12;5;ej10.png',
  'Lateral en pelota;4;15;-;ej11.png',
  'Press militar;4;10;30;ej12.png',
  'Elevaciones hombro;4;12;5;ej13.png',
  'Hombros pesas rusas;4;12;6;ej14.png',
];

let arrayFormateado = [];
let imagenSelecionada = '';

//SELECCIONAMOS EL DOM
const divEjercicios = document.querySelector('.ejercicios');
const templateImagenes = document.querySelector('#templateEjercicio');

parchearArray(arrayDatos);
dibujar(arrayFormateado);

function parchearArray(array) {
  // El map ahora sí llena arrayFormateado
  arrayFormateado = array.map((ejercicio) => {
    const partes = ejercicio.split(';');
    // IMPORTANTE: Añade 'imagenes/' antes del nombre del archivo
    const rutaCompleta = 'imagenes/' + partes[4];
    return { imagen: rutaCompleta };
  });
}

function dibujar(array) {
  divEjercicios.innerHTML = '';

  array.forEach((imagenes) => {
    const clon = templateImagenes.content.cloneNode(true);
    const img = clon.querySelector('img');
    img.src = imagenes.imagen;

    // Evento click que marca la imagen seleccionada
    img.addEventListener('click', (e) => {
      const todas = divEjercicios.querySelectorAll('img');
      todas.forEach(
        (
          imagenes, //borra las clases de todas, para no dejar el azul a todas
        ) => imagenes.classList.remove('border', 'border-4', 'border-primary'),
      );

      // Poner borde solo a la seleccionada
      e.target.classList.add('border', 'border-4', 'border-primary');

      imagenSeleccionada = e.target.src; // Guardar la imagen seleccionada
    });
    divEjercicios.appendChild(clon);
  });
}
