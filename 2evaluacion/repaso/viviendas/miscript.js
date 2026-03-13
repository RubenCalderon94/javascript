/* ==========================================
   VARIABLES Y DATOS (Tu estilo)
   ========================================== */
const propiedades = [
  {
    nombre: 'Villa Mediterránea',
    descripcion: 'Espectacular villa...',
    precio: 350000,
    ciudad: 'Málaga',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Piso Centro Histórico',
    descripcion: 'Amplio piso...',
    precio: 220000,
    ciudad: 'Sevilla',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Chalet Sierra Norte',
    descripcion: 'Chalet independiente...',
    precio: 410000,
    ciudad: 'Madrid',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Apartamento Playa',
    descripcion: 'Apartamento a 100 metros...',
    precio: 185000,
    ciudad: 'Valencia',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Ático Luminoso',
    descripcion: 'Ático dúplex...',
    precio: 295000,
    ciudad: 'Barcelona',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Casa Rural Encanto',
    descripcion: 'Casa rural restaurada...',
    precio: 175000,
    ciudad: 'Asturias',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Loft Industrial',
    descripcion: 'Loft de diseño...',
    precio: 260000,
    ciudad: 'Bilbao',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Adosado Familiar',
    descripcion: 'Adosado en...',
    precio: 230000,
    ciudad: 'Zaragoza',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Mansión Colonial',
    descripcion: 'Impresionante mansión...',
    precio: 520000,
    ciudad: 'Marbella',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Estudio Moderno',
    descripcion: 'Estudio equipado...',
    precio: 95000,
    ciudad: 'Granada',
    vendida: false,
    imagen:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop',
  },
];

const nombresMeses = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

//let imagenSeleccionada = '';
let propiedadSeleccionada = null; // Para saber qué casa estamos gestionando

// SELECCIÓN DEL DOM
const galeria = document.querySelector('#galeria');
const template = document.querySelector('#template-casa');

/* ==========================================
   EJERCICIO 1: DIBUJAR
   ========================================== */
function dibujar(lista) {
  galeria.innerHTML = '';

  lista.forEach((propiedad, indice) => {
    const clon = template.content.cloneNode(true);
    const contenedor = clon.querySelector('.casa-img-container');

    clon.querySelector('.casa-ciudad').textContent = propiedad.ciudad;
    clon.querySelector('.casa-precio').textContent =
      propiedad.precio.toLocaleString('es-ES') + ' €';

    const img = clon.querySelector('.casa-img');
    img.src = propiedad.imagen;

    // Aquí el famoso data-indice (Ejercicio 1 aconseja ponerlo)
    // Sirve para que la imagen "sepa" qué posición ocupa en el array
    img.dataset.indice = indice;

    // EJERCICIO 5: Si está vendida, creamos el overlay
    if (propiedad.vendida) {
      const divVendida = document.createElement('div');
      divVendida.classList.add('vendida-overlay');
      divVendida.textContent = 'VENDIDA';
      contenedor.appendChild(divVendida);
    }

    /* ==========================================
           EJERCICIO 2: CLICK EN IMAGEN
           ========================================== */
    img.addEventListener('click', (e) => {
      // Comprobamos si está vendida
      if (propiedad.vendida) {
        alert('Esta propiedad ya ha sido vendida');
        return;
      }
      //pintarImagen(arrayFormateado);
      const todas = galeria.querySelectorAll('.casa-img');
      todas.forEach(
        (
          imagenes, //borra las clases de todas, para no dejar el azul a todas
        ) => imagenes.classList.remove('seleccionada'),
      );

      // Poner borde solo a la seleccionada
      e.target.classList.add('seleccionada');

      //forma usando dataid
      propiedadSeleccionada = propiedad;

      /* ==========================================
               EJERCICIO 3: MOSTRAR DETALLE
               ========================================== */
      document.querySelector('#detalle').classList.remove('oculto');
      document.querySelector('#detalle-nombre').textContent = propiedad.nombre;
      document.querySelector('#detalle-descripcion').textContent =
        propiedad.descripcion;
      document.querySelector('#detalle-precio').textContent =
        propiedad.precio.toLocaleString('es-ES');

      // Ocultar hipoteca por si estaba abierta de antes
      document.querySelector('#hipoteca').classList.add('oculto');
    });

    galeria.appendChild(clon);
  });
}

dibujar(propiedades);

/* ==========================================
   EJERCICIO 4: CALCULAR HIPOTECA
   ========================================== */
const btnCalcularHipoteca = document.querySelector('#btn-calcular-hipoteca');
btnCalcularHipoteca.addEventListener('click', () => {
  document.querySelector('#hipoteca').classList.remove('oculto');

  // Rellenamos el precio y vaciamos el resto (Ejercicio 4 pide inicializar a vacío/defecto)
  document.querySelector('#hipoteca-precio').value =
    propiedadSeleccionada.precio;
  document.querySelector('#hipoteca-entrada').value = '';
  document.querySelector('#hipoteca-anios').value = '';
  document.querySelector('#resultado-anual').textContent = '-- €/año';
});

const btnCalcular = document.querySelector('#btn-calcular');
btnCalcular.addEventListener('click', () => {
  const precio = propiedadSeleccionada.precio;
  const porcentaje = parseFloat(
    document.querySelector('#hipoteca-porcentaje').value,
  );
  const entrada =
    parseFloat(document.querySelector('#hipoteca-entrada').value) || 0;
  const anios = parseInt(document.querySelector('#hipoteca-anios').value);

  // Validaciones Ejercicio 4
  if (isNaN(anios) || anios <= 0) {
    alert('Introduce un número de años válido');
    return;
  }
  if (entrada < 0) {
    alert('La entrada no puede ser negativa');
  }

  // Cálculo según examen
  const intereses = (precio * porcentaje) / 100;
  const pagoAnual = (precio - entrada + intereses) / anios;

  document.querySelector('#resultado-anual').textContent =
    pagoAnual.toFixed(2) + ' €/año';
});

/* ==========================================
   EJERCICIO 5 Y 6: ME LA QUEDO
   ========================================== */
const btnComprar = document.querySelector('#btn-comprar');
btnComprar.addEventListener('click', () => {
  const anios = parseInt(document.querySelector('#hipoteca-anios').value);

  // Validación mínima para que el Ejercicio 6 funcione
  if (isNaN(anios) || anios <= 0) {
    alert('Introduce los años para calcular cuándo terminarás de pagar.');
    return;
  }

  // Marcar como vendida
  propiedadSeleccionada.vendida = true;

  // Ejercicio 6: Fecha final
  const fecha = new Date(); // Empezamos hoy (Feb 2026)
  const mesesTotales = anios * 12 - 1;
  fecha.setMonth(fecha.getMonth() + mesesTotales);

  const mesFinal = nombresMeses[fecha.getMonth()];
  const anioFinal = fecha.getFullYear();

  // Ocultar secciones y redibujar galería
  document.querySelector('#detalle').classList.add('oculto');
  document.querySelector('#hipoteca').classList.add('oculto');
  dibujar(propiedades);

  alert(
    `¡Enhorabuena! La vivienda ha sido marcada como vendida. Acabarás de pagarla en ${mesFinal} de ${anioFinal}.`,
  );
});
