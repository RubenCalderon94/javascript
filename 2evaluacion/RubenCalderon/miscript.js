const prendas = [
  {
    id: 1,
    nombre: "Vaquero slim",
    tipo: "Pantalón",
    tallas: ["XS", "S", "M", "L", "XL"],
    color: "Azul",
    precio: 39.992,
    imagen:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    nombre: "Chándal cargo",
    tipo: "Pantalón",
    tallas: ["S", "M", "L", "XL"],
    color: "Gris",
    precio: 29.99,
    imagen:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    nombre: "Pantalón chino",
    tipo: "Pantalón",
    tallas: ["XS", "S", "M", "L", "XL"],
    color: "Beige",
    precio: 34.99,
    imagen:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    nombre: "Camiseta básica",
    tipo: "Camiseta",
    tallas: ["XS", "S", "M", "L", "XL", "XXL"],
    color: "Blanca",
    precio: 12.99,
    imagen:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    nombre: "Camiseta oversize",
    tipo: "Camiseta",
    tallas: ["S", "M", "L", "XL", "XXL"],
    color: "Negra",
    precio: 16.99,
    imagen:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
  },
  {
    id: 6,
    nombre: "Polo piqué",
    tipo: "Camiseta",
    tallas: ["XS", "S", "M", "L", "XL"],
    color: "Azul",
    precio: 22.99,
    imagen:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop",
  },
  {
    id: 7,
    nombre: "Sudadera con capucha",
    tipo: "Sudadera",
    tallas: ["S", "M", "L", "XL"],
    color: "Verde",
    precio: 44.99,
    imagen:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop",
  },
  {
    id: 8,
    nombre: "Sudadera cuello redondo",
    tipo: "Sudadera",
    tallas: ["XS", "S", "M", "L", "XL"],
    color: "Gris",
    precio: 38.99,
    imagen:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=400&h=500&fit=crop",
  },
  {
    id: 9,
    nombre: "Chaqueta vaquera",
    tipo: "Chaqueta",
    tallas: ["XS", "S", "M", "L", "XL"],
    color: "Azul",
    precio: 59.99,
    imagen: "https://loremflickr.com/400/500/denim,jacket?lock=901",
  },
  {
    id: 10,
    nombre: "Parka impermeable",
    tipo: "Chaqueta",
    tallas: ["S", "M", "L", "XL"],
    color: "Negra",
    precio: 89.99,
    imagen:
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400&h=500&fit=crop",
  },
  {
    id: 11,
    nombre: "Vestido floral",
    tipo: "Vestido",
    tallas: ["XS", "S", "M", "L"],
    color: "Rojo",
    precio: 34.99,
    imagen:
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&h=500&fit=crop",
  },
  {
    id: 12,
    nombre: "Vestido midi",
    tipo: "Vestido",
    tallas: ["XS", "S", "M", "L"],
    color: "Blanco",
    precio: 42.99,
    imagen:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
  },
];

let filtroActivo = "Todos";
let carrito = []; // acumula objetos prenda
let tallaSeleccionada = "";

//SELECCION DEL DOM
const filtros = document.querySelector("#filtros");
const catalogo = document.querySelector("#catalogo");
const templateTarjeta = document.querySelector("#template-tarjeta");
const templateFiltro = document.querySelector("#template-filtro");

dibujar(prendas);

function dibujar(array) {
  catalogo.innerHTML = "";

  array.forEach((prenda) => {
    const clon = templateTarjeta.content.cloneNode(true);

    clon.querySelector(".tarjeta-imagen").src = prenda.imagen;
    clon.querySelector(".tarjeta-badge").textContent = prenda.tipo;
    clon.querySelector(".tarjeta-nombre").textContent = prenda.nombre;
    clon.querySelector(".tag-color").textContent = prenda.color;
    clon.querySelector(".tallas-selector").textContent = prenda.tallas;
    clon.querySelector(".tarjeta-precio").textContent = prenda.precio;

    const btnAniadir = clon.querySelector(".btn-anadir");

    btnAniadir.addEventListener("click", (e) => {
      aniadirAlCarrito(prenda);
    });

    catalogo.appendChild(clon);
  });
  crearFiltros();
}
function aniadirAlCarrito(prenda) {
  carrito.push(prenda);
  const numArticulos = document.querySelector("#numArticulos");
  numArticulos.textContent = carrito.length;
}

// Crear filtros simples
function crearFiltros() {
  filtros.innerHTML = ""; //limpiamos

  // Botón "Todas"
  const btnTodas = document.createElement("button");
  btnTodas.classList.add("btn-filtro");
  btnTodas.textContent = "Todas";

  btnTodas.addEventListener("click", () => dibujar(prendas));
  filtros.appendChild(btnTodas); //añadimos al DOM

  // Botones para cada tipo único
  const tipos = ["todos"];
  prendas.forEach((tarea) => {
    if (!tipos.includes(tarea.tipo)) {
      //SI NO EXISTE LA AÑADE
      tipos.push(tarea.tipo); //LA AÑADE AQUI

      btn = document.createElement("button"); //creamos otro boton para cada tipo
      btn.textContent = tarea.tipo;
      btn.classList.add("btn-filtro"); //aqui le añadimos el tipo
      btn.addEventListener("click", () => {
        const filtradas = prendas.filter((t) => t.tipo === tarea.tipo);
        dibujar(filtradas); //dibuja de nuevo cada boton y el array filtrado
      });

      filtros.appendChild(btn);
      document.querySelector(".btn-filtro").classList.add("activo");
    }
  });
}

const formulario = document.querySelector("#formulario-nueva");
const btnNuevaPrenda = document.querySelector("#btn-nueva-prenda");

btnNuevaPrenda.addEventListener("click", () =>
  formulario.classList.remove("oculto"),
);

const inputNombre = document.querySelector("#inputNombre");
const inputTipo = document.querySelector("#inputTipo");
const inputColor = document.querySelector("#inputColor");
const inputTallas = document.querySelector("#inputTallas");
const inputPrecio = document.querySelector("#inputPrecio");

const btnAniadirPrenda = document.querySelector("#btn-anadir-prenda");

btnAniadirPrenda.addEventListener("click", () => {
  aniadir();
  formulario.classList.add("oculto");
});

function aniadir() {
  const nombre = inputNombre.value;
  const tipo = inputTipo.value;
  const color = inputColor.value;
  const tallas = inputTallas.value;
  const precio = inputPrecio.value;

  const nuevaTarea = {
    id: prendas.length + 1,
    nombre: nombre,
    tipo: tipo,
    color: color,
    tallas: tallas,
    precio: precio,
    imagen:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop",
  };

  prendas.push(nuevaTarea);
  inputNombre.value = "";
  inputTipo.value = "";
  inputColor.value = "";
  inputTallas.value = "";
  inputPrecio.value = "";

  dibujar(prendas);
}

const btnComprar = document.querySelector("#btn-comprar");

btnComprar.addEventListener("click", () => {
  if (carrito.length == 0) {
    alert("El carrito esta vacio");
    return;
  }

  // Crear mensaje y total
  var mensaje = "RESUMEN DE COMPRA:\n";
  var total = 0;

  // Recorrer carrito usando for…in
  for (var i in carrito) {
    var producto = carrito[i];
    var subtotal = producto.precio;

    mensaje += producto.nombre + " = " + subtotal + " €\n";
    total += subtotal;
  }

  //  Añadir total al mensaje
  mensaje += "Total: " + total + " €";

  alert(mensaje);
  carrito = [];
  numArticulos.textContent = 0;
  actualizarCarrito();
});
