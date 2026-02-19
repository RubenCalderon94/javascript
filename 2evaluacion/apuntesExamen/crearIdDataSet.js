// ----------------------------
// 1️⃣ Array de productos
// ----------------------------
const productos = [
  { nombre: 'Monitor UltraWide', precio: 349.99 },
  { nombre: 'Teclado Mecánico', precio: 120.5 },
  { nombre: 'Ratón Inalámbrico', precio: 55.0 },
];

// ----------------------------
// 2️⃣ Selección de contenedores en DOM
// ----------------------------
const ulSinTemplate = document.querySelector('#listaProductos');
const ulConTemplate = document.querySelector('#listaProductosTemplate');
const template = document.querySelector('#templateProducto');

// ----------------------------
// 3️⃣ Opción 1: Crear <li> sin template
// ----------------------------
let contadorId1 = 1;

productos.forEach((producto) => {
  const li = document.createElement('li'); // Crear <li>
  li.classList.add('producto'); // Añadir clase CSS
  li.dataset.id = contadorId1++; // Asignar ID dinámico con dataset
  li.textContent = `${producto.nombre} - ${producto.precio}€`; // Texto del producto

  ulSinTemplate.appendChild(li); // Añadir al DOM
});

// Detectar clicks en la lista (sin template)
ulSinTemplate.addEventListener('click', (e) => {
  const li = e.target.closest('li'); // Buscar el <li> clicado
  if (li) {
    console.log('[Sin Template] Producto clicado ID:', li.dataset.id);
    console.log('[Sin Template] Contenido:', li.textContent);
  }
});

// ----------------------------
// 4️⃣ Opción 2: Usar <template>
// ----------------------------
let contadorId2 = 1;

productos.forEach((producto) => {
  const clone = template.content.cloneNode(true); // Clonar template
  const li = clone.querySelector('li'); // Seleccionar el <li> del clone

  li.dataset.id = contadorId2++; // Asignar ID dinámico
  li.querySelector('.nombre').textContent = producto.nombre; // Rellenar nombre
  li.querySelector('.precio').textContent = producto.precio; // Rellenar precio

  ulConTemplate.appendChild(clone); // Añadir al DOM
});

// Detectar clicks en la lista (con template)
ulConTemplate.addEventListener('click', (e) => {
  const li = e.target.closest('li'); // Buscar el <li> clicado
  if (li) {
    console.log('[Con Template] Producto clicado ID:', li.dataset.id);
    console.log(
      '[Con Template] Nombre:',
      li.querySelector('.nombre').textContent,
    );
  }
});
