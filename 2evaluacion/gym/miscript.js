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

const contenedor = document.querySelector('.ejercicios');
const templateEjercicio = document.querySelector('#templateEjercicio');

let imagenSeleccionada = null;

arrayDatos.forEach((ejercicio) => {
  const partes = ejercicio.split(';');
  const imagen = partes[4];

  const clon = templateEjercicio.content.cloneNode(true);
  const img = clon.querySelector('img');

  img.src = `imagenes/${imagen}`;

  img.addEventListener('click', () => {
    // quitamos borde de la anterior
    if (imagenSeleccionada) {
      imagenSeleccionada.classList.remove('bordeColor');
    }

    // ponemos borde azul a la imagen clicada
    img.classList.add('bordeColor');

    // guardamos la imagen seleccionada
    imagenSeleccionada = img;
  });

  contenedor.appendChild(clon);
});
