const URL_API_ARTISTAS = "api/artistas.php";
const URL_API_ENTRADAS = "api/entradas.php";
const rutas = {
  artistas: "vistas/artistas.html",
  "entradas-vendidas": "vistas/entradas-vendidas.html",
  administracion: "vistas/administracion.html",
};

// ===== CARRITO =====

let carrito = [];

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

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("activo", link.dataset.vista == nombre);
  });

  if (nombre == "artistas") initArtistas();
  else if (nombre == "entradas-vendidas") initEntradasVendidas();
  else if (nombre == "administracion") initAdministracion();
}

//VISTA Artistas
async function initArtistas() {
  const galeria = document.querySelector("#galeria");
  const template = document.querySelector("#tarjeta-template");

  try {
    const res = await fetch(URL_API_ARTISTAS);
    const artistas = await res.json();

    galeria.innerHTML = ""; // Limpiamos por si acaso

    artistas.forEach((artista) => {
      const clon = template.content.cloneNode(true);

      // Rellenamos los datos del clon
      clon.querySelector("img").src = `img/${artista.imagen}`;
      clon.querySelector(".tarjeta-nombre").textContent = artista.nombre;
      // Forzamos 2 decimales para el precio
      clon.querySelector(".tarjeta-precio").textContent =
        `${parseFloat(artista.precio).toFixed(2)}€`;

      // EVENTO 1: Clic en la tarjeta para abrir el MODAL
      clon.querySelector(".tarjeta").addEventListener("click", (e) => {
        // Si el clic fue en el botón "+ Cesta", no abrimos el modal
        if (e.target.classList.contains("btn-cesta")) return;

        abrirModal(artista);
      });

      // EVENTO 2: Clic en "+ Cesta"
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

  modal.classList.add("visible"); // Asegúrate de que en CSS .visible tenga display: block o similar
}

// Cerrar el modal al darle a la X
document.querySelector("#modal-cerrar").addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("visible");
});

// VISTA ENTRADAS VENDIDAS

async function initEntradasVendidas() {}

// VISTA ADMINISTRACIÓN
function initAdministracion() {
  // Esto es lo que ya tenías (Previsualización)
  document.querySelector("#input-imagen").addEventListener("change", (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;
    const preview = document.querySelector("#preview-imagen");
    const url = URL.createObjectURL(archivo);
    preview.innerHTML = `<img src="${url}" alt="Vista previa">`;
  });

  // NUEVO: Lógica de guardado
  const btnGuardar = document.querySelector("#btn-guardar");
  const formulario = document.querySelector("#form-artista");

  btnGuardar.addEventListener("click", async () => {
    // Recogemos todos los campos del formulario automáticamente
    const datos = new FormData(formulario);

    try {
      const res = await fetch(URL_API_ARTISTAS, {
        method: "POST",
        body: datos,
      });
      const resultado = await res.json();

      if (resultado.success || resultado.mensaje) {
        alert("¡Artista guardado con éxito!");
        cargarVista("artistas"); // Redirigimos a la galería
      } else {
        alert("Error al guardar: " + resultado.error);
      }
    } catch (error) {
      console.error("Error en el POST:", error);
    }
  });
}

// Al cargar la página por primera vez
document.addEventListener("DOMContentLoaded", () => {
  cargarVista("artistas");

  // Configurar los botones de navegación
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const vista = e.target.dataset.vista;
      cargarVista(vista);
    });
  });
});
