const URL_API_ARTISTAS = "api/artistas.php";
const URL_API_ENTRADAS = "api/entradas.php";

const rutas = {
  artistas: "vistas/artistas.html",
  "entradas-vendidas": "vistas/entradas-vendidas.html",
  administracion: "vistas/administracion.html",
};

// ===== ESTADO GLOBAL =====
let carrito = [];

// ===== NAVEGACIÓN (SPA) =====
async function cargarVista(nombre) {
  const contenido = document.querySelector("#contenido-principal");

  try {
    const res = await fetch(rutas[nombre]);
    if (!res.ok) throw new Error("Vista no encontrada");
    const html = await res.text();
    contenido.innerHTML = html;
  } catch {
    contenido.innerHTML =
      '<p class="error-vista">No se pudo cargar la sección.</p>';
    return;
  }

  // Actualizar clase activa en el menú
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("activo", link.dataset.vista == nombre);
  });

  // Ejecutar lógica específica de cada sección
  if (nombre == "artistas") initArtistas();
  else if (nombre == "entradas-vendidas") initEntradasVendidas();
  else if (nombre == "administracion") initAdministracion();
}

// ===== VISTA ARTISTAS =====
async function initArtistas() {
  const galeria = document.querySelector("#galeria");
  const template = document.querySelector("#tarjeta-template");

  try {
    const res = await fetch(URL_API_ARTISTAS);
    const artistas = await res.json();

    galeria.innerHTML = "";

    artistas.forEach((artista) => {
      const clon = template.content.cloneNode(true);

      clon.querySelector("img").src = `img/${artista.imagen}`;
      clon.querySelector(".tarjeta-nombre").textContent = artista.nombre;
      clon.querySelector(".tarjeta-precio").textContent =
        `${parseFloat(artista.precio).toFixed(2)}€`;

      // Abrir modal (salvo si pulsa en el botón de cesta)
      clon.querySelector(".tarjeta").addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-cesta")) return;
        abrirModal(artista);
      });

      // Añadir al carrito
      clon.querySelector(".btn-cesta").addEventListener("click", () => {
        agregarAlCarrito(artista);
      });

      galeria.appendChild(clon);
    });
  } catch (error) {
    console.error("Error al cargar artistas:", error);
  }
}

function abrirModal(artista) {
  const modal = document.querySelector("#modal");
  modal.querySelector("#modal-img").src = `img/${artista.imagen}`;
  modal.querySelector("#modal-nombre").textContent = artista.nombre;
  modal.querySelector("#modal-descripcion").textContent = artista.descripcion;
  modal.classList.add("visible");
}

// ===== LÓGICA DEL CARRITO =====
function agregarAlCarrito(artista) {
  const encontrado = carrito.find((item) => item.id === artista.id);

  if (encontrado) {
    encontrado.cantidad++;
  } else {
    carrito.push({ ...artista, cantidad: 1 });
  }

  actualizarEstadoCarrito();

  // Si el panel ya está abierto, redibujamos para que se vea el cambio
  if (document.querySelector("#carrito-panel").classList.contains("abierto")) {
    renderizarCarrito();
  }
}

function renderizarCarrito() {
  const contenedor = document.querySelector("#carrito-items");
  const template = document.querySelector("#carrito-item-template");
  const totalDiv = document.querySelector("#carrito-total");
  const btnComprar = document.querySelector("#btn-comprar");

  contenedor.innerHTML = "";
  let totalAcumulado = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
    btnComprar.disabled = true;
    totalDiv.innerHTML = "<strong>Total: 0.00 €</strong>";
    return;
  }

  btnComprar.disabled = false;

  carrito.forEach((item, index) => {
    const clon = template.content.cloneNode(true);
    const subtotal = item.precio * item.cantidad;
    totalAcumulado += subtotal;

    clon.querySelector("img").src = `img/${item.imagen}`;
    clon.querySelector(".carrito-item-nombre").textContent = item.nombre;
    clon.querySelector(".carrito-item-precio").textContent =
      `${parseFloat(item.precio).toFixed(2)}€`;
    clon.querySelector(".carrito-item-cantidad-num").textContent =
      item.cantidad;
    clon.querySelector(".carrito-item-subtotal").textContent =
      `${subtotal.toFixed(2)}€`;

    clon.querySelector(".btn-restar").onclick = () => {
      item.cantidad--;
      if (item.cantidad <= 0) carrito.splice(index, 1);
      actualizarEstadoCarrito();
      renderizarCarrito();
    };

    clon.querySelector(".btn-sumar").onclick = () => {
      item.cantidad++;
      actualizarEstadoCarrito();
      renderizarCarrito();
    };

    contenedor.appendChild(clon);
  });

  totalDiv.innerHTML = `<strong>Total: ${totalAcumulado.toFixed(2)} €</strong>`;
}

function actualizarEstadoCarrito() {
  const contador = document.querySelector("#carrito-count");
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contador.textContent = totalItems;

  if (totalItems > 0) contador.classList.remove("oculto");
  else contador.classList.add("oculto");
}

// ===== VISTA ENTRADAS VENDIDAS =====
async function initEntradasVendidas() {
  const lista = document.querySelector("#entradas-lista");
  const tempTabla = document.querySelector("#template-tabla-entradas");
  const tempFila = document.querySelector("#template-fila-entrada");

  try {
    const res = await fetch(URL_API_ENTRADAS);
    const datos = await res.json();

    const tablaClon = tempTabla.content.cloneNode(true);
    const tbody = tablaClon.querySelector("tbody");

    datos.forEach((dato) => {
      const filaClon = tempFila.content.cloneNode(true);
      filaClon.querySelector("img").src = `img/${dato.imagen}`;
      filaClon.querySelector("span").textContent = dato.nombre;
      filaClon.querySelector(".td-entradas").textContent = dato.total_entradas;
      tbody.appendChild(filaClon);
    });

    lista.innerHTML = "";
    lista.appendChild(tablaClon);
  } catch (e) {
    console.error("Error al cargar ventas:", e);
    if (lista)
      lista.innerHTML = '<p class="error-vista">Error al cargar datos.</p>';
  }
}

// ===== VISTA ADMINISTRACIÓN =====
function initAdministracion() {
  const inputImg = document.querySelector("#input-imagen");
  const mensajeDiv = document.querySelector("#form-mensaje"); // 1. Capturamos el contenedor del mensaje

  if (inputImg) {
    inputImg.addEventListener("change", (e) => {
      const archivo = e.target.files[0];
      if (!archivo) return;
      const preview = document.querySelector("#preview-imagen");
      const url = URL.createObjectURL(archivo);
      preview.innerHTML = `<img src="${url}" alt="Vista previa">`;
    });
  }

  const btnGuardar = document.querySelector("#btn-guardar");
  const formulario = document.querySelector("#form-artista");

  if (btnGuardar) {
    btnGuardar.addEventListener("click", async () => {
      const datos = new FormData(formulario);

      // 2. Limpiamos estados previos del mensaje
      mensajeDiv.textContent = "";
      mensajeDiv.className = "";

      try {
        const res = await fetch(URL_API_ARTISTAS, {
          method: "POST",
          body: datos,
        });
        const resultado = await res.json();

        if (resultado.success) {
          // 3. ÉXITO: Mostramos el texto y aplicamos la clase verde de tu CSS
          mensajeDiv.textContent = "¡Artista añadido correctamente!";
          mensajeDiv.classList.add("exito");

          // 4. Opcional: Limpiar formulario tras el éxito
          formulario.reset();
          document.querySelector("#preview-imagen").innerHTML = "";

          // Redirigimos a la galería después de 2 segundos para que se vea el mensaje
          setTimeout(() => {
            cargarVista("artistas");
          }, 2000);
        } else {
          // 5. ERROR: Mostramos el error con la clase roja de tu CSS
          mensajeDiv.textContent = "Error: " + resultado.error;
          mensajeDiv.classList.add("error");
        }
      } catch (error) {
        console.error(error);
        mensajeDiv.textContent = "Error de conexión con el servidor.";
        mensajeDiv.classList.add("error");
      }
    });
  }
}

// ===== CONFIGURACIÓN DE EVENTOS INICIALES =====
document.addEventListener("DOMContentLoaded", () => {
  // Cargar vista por defecto
  cargarVista("artistas");

  // Navegación del menú
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      cargarVista(e.target.dataset.vista);
    });
  });

  // Cerrar Modal
  document.querySelector("#modal-cerrar").addEventListener("click", () => {
    document.querySelector("#modal").classList.remove("visible");
  });

  // ABRIR/CERRAR PANEL CARRITO (Basado en tu CSS)
  const panel = document.querySelector("#carrito-panel");
  const overlay = document.querySelector("#carrito-overlay");

  document.querySelector("#btn-carrito").addEventListener("click", () => {
    panel.classList.add("abierto");
    overlay.classList.add("activo"); // 'activo' según tu CSS
    renderizarCarrito();
  });

  document.querySelector("#carrito-cerrar").addEventListener("click", () => {
    panel.classList.remove("abierto");
    overlay.classList.remove("activo");
  });

  overlay.addEventListener("click", () => {
    panel.classList.remove("abierto");
    overlay.classList.remove("activo");
  });

  // BOTÓN FINALIZAR COMPRA
  document.querySelector("#btn-comprar").addEventListener("click", async () => {
    // Tarea 2.7: Enviar cada item del carrito a la base de datos
    for (const item of carrito) {
      const fd = new FormData();
      fd.append("id", item.id);
      fd.append("cantidad", item.cantidad);

      await fetch(URL_API_ENTRADAS, { method: "POST", body: fd });
    }

    carrito = [];
    actualizarEstadoCarrito();
    panel.classList.remove("abierto");
    overlay.classList.remove("activo");
  });
});
