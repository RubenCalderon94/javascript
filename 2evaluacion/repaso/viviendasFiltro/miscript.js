/**
 * EXAMEN DESARROLLO WEB EN ENTORNO CLIENTE
 * Gestión de Inmobiliaria 2026
 */

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

// Variable global para conectar la casa elegida con el calculador
let propiedadSeleccionada = null;

const galeria = document.querySelector('#galeria');
const template = document.querySelector('#template-casa');

/* ==========================================
   EJERCICIO 1: DIBUJAR (Recibe una lista)
   ========================================== */
function dibujar(lista) {
  galeria.innerHTML = ''; // Limpiar antes de pintar

  lista.forEach((propiedad, indice) => {
    const clon = template.content.cloneNode(true);
    const contenedor = clon.querySelector('.casa-img-container');

    // Datos básicos
    clon.querySelector('.casa-ciudad').textContent = propiedad.ciudad;
    clon.querySelector('.casa-precio').textContent =
      propiedad.precio.toLocaleString('es-ES') + ' €';

    const img = clon.querySelector('.casa-img');
    img.src = propiedad.imagen;

    // Guardar el índice en el HTML (data-indice) como pide el examen
    img.dataset.indice = indice;

    // EJERCICIO 5: Cartel de Vendida
    if (propiedad.vendida) {
      const divVendida = document.createElement('div');
      divVendida.classList.add('vendida-overlay');
      divVendida.textContent = 'VENDIDA';
      contenedor.appendChild(divVendida);
    }

    /* ==========================================
       EJERCICIO 2 Y 3: CLICK EN IMAGEN
       ========================================== */
    img.addEventListener('click', (e) => {
      if (propiedad.vendida) {
        alert('Esta propiedad ya ha sido vendida');
        return;
      }

      // Gestionar clase seleccionada
      const todas = galeria.querySelectorAll('.casa-img');
      todas.forEach((i) => i.classList.remove('seleccionada'));
      e.target.classList.add('seleccionada');

      // ASIGNAR LA PROPIEDAD ACTUAL (Vital para que funcione la hipoteca)
      propiedadSeleccionada = propiedad;

      // Rellenar Detalle
      document.querySelector('#detalle').classList.remove('oculto');
      document.querySelector('#detalle-nombre').textContent = propiedad.nombre;
      document.querySelector('#detalle-descripcion').textContent =
        propiedad.descripcion;
      document.querySelector('#detalle-precio').textContent =
        propiedad.precio.toLocaleString('es-ES');

      // Ocultar hipoteca por si estaba abierta de otra casa
      document.querySelector('#hipoteca').classList.add('oculto');
    });

    galeria.appendChild(clon);
  });
}

/* ==========================================================
   FILTRO DE ARRAY (Antes de dibujar)
   Aquí es donde filtras si el profesor te lo pide.
   ========================================================== */

// Ejemplo: Filtrar casas de menos de 300.000€
const casasFiltradas = propiedades.filter((p) => p.precio > 300000);

// Llamamos a la función con el array filtrado
dibujar(casasFiltradas);

/* ==========================================
   EJERCICIO 4: CALCULAR HIPOTECA
   ========================================== */
const btnAbrirHipoteca = document.querySelector('#btn-calcular-hipoteca');
btnAbrirHipoteca.addEventListener('click', () => {
  if (!propiedadSeleccionada) return; // Seguridad

  document.querySelector('#hipoteca').classList.remove('oculto');

  // Inicializar campos
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

  if (isNaN(anios) || anios <= 0) {
    alert('Introduce años válidos');
    return;
  }

  // Fórmula Examen: (Precio - Entrada + Intereses) / Años
  const intereses = (precio * porcentaje) / 100;
  const pagoAnual = (precio - entrada + intereses) / anios;

  document.querySelector('#resultado-anual').textContent =
    pagoAnual.toFixed(2) + ' €/año';
});

/* ==========================================
   EJERCICIO 5 Y 6: COMPRAR Y FECHAS
   ========================================== */
const btnComprar = document.querySelector('#btn-comprar');
btnComprar.addEventListener('click', () => {
  const anios = parseInt(document.querySelector('#hipoteca-anios').value);

  if (isNaN(anios) || anios <= 0) {
    alert('Primero calcula la hipoteca para saber los años.');
    return;
  }

  // Marcar como vendida en el array original
  propiedadSeleccionada.vendida = true;

  // Cálculo de fecha (Ejercicio 6)
  const fecha = new Date();
  const mesesTotales = anios * 12 - 1;
  fecha.setMonth(fecha.getMonth() + mesesTotales);

  const mesFinal = nombresMeses[fecha.getMonth()];
  const anioFinal = fecha.getFullYear();

  // Reset Interfaz
  document.querySelector('#detalle').classList.add('oculto');
  document.querySelector('#hipoteca').classList.add('oculto');

  // Volvemos a dibujar para que se vea el cartel de "VENDIDA"
  // Aquí puedes decidir si dibujar(propiedades) o dibujar(casasFiltradas)
  dibujar(propiedades);

  alert(
    `¡Compra realizada! Terminarás de pagar en ${mesFinal} de ${anioFinal}.`,
  );
});
