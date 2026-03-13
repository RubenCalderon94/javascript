const propiedades = [
    {
        nombre: "Villa Mediterránea",
        descripcion: "Espectacular villa con vistas al mar, 4 habitaciones, piscina privada y jardín.",
        precio: 350000,
        ciudad: "Málaga",
        vendida: true,
        imagen: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop"
    },
    {
        nombre: "Piso Centro Histórico",
        descripcion: "Amplio piso reformado en pleno centro, 3 habitaciones y terraza con vistas.",
        precio: 220000,
        ciudad: "Sevilla",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop"
    },
    {
        nombre: "Chalet Sierra Norte",
        descripcion: "Chalet independiente en la sierra, 5 habitaciones, chimenea y garaje doble.",
        precio: 410000,
        ciudad: "Madrid",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop"
    },
    {
        nombre: "Apartamento Playa",
        descripcion: "Apartamento a 100 metros de la playa, 2 habitaciones, recién reformado.",
        precio: 185000,
        ciudad: "Valencia",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop"
    },
    {
        nombre: "Ático Luminoso",
        descripcion: "Ático dúplex con terraza panorámica de 50m², 3 habitaciones y solarium.",
        precio: 295000,
        ciudad: "Barcelona",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop"
    },
    {
        nombre: "Casa Rural Encanto",
        descripcion: "Casa rural restaurada con encanto, 4 habitaciones, huerto y bodega.",
        precio: 175000,
        ciudad: "Asturias",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&h=400&fit=crop"
    },
    {
        nombre: "Loft Industrial",
        descripcion: "Loft de diseño en antigua fábrica, espacios abiertos, techos altos de 5 metros.",
        precio: 260000,
        ciudad: "Bilbao",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop"
    },
    {
        nombre: "Adosado Familiar",
        descripcion: "Adosado en urbanización con piscina comunitaria, 4 habitaciones y trastero.",
        precio: 230000,
        ciudad: "Zaragoza",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=400&fit=crop"
    },
    {
        nombre: "Mansión Colonial",
        descripcion: "Impresionante mansión de estilo colonial, 6 habitaciones, piscina y cancha de tenis.",
        precio: 520000,
        ciudad: "Marbella",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=400&fit=crop"
    },
    {
        nombre: "Estudio Moderno",
        descripcion: "Estudio completamente equipado en zona universitaria, ideal como inversión.",
        precio: 95000,
        ciudad: "Granada",
        vendida: false,
        imagen: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop"
    }
];
const nombresMeses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

let propiedadSeleccionada = null;

function cargarGaleria() {
    const galeria = document.querySelector("#galeria");
    galeria.innerHTML = "";


    propiedades.forEach(function (propiedad, indice) {
        const template = document.querySelector("#template-casa");
        const clon = template.content.cloneNode(true);

        const contenedor = clon.querySelector(".casa-img-container");

        const ciudad = clon.querySelector(".casa-ciudad");
        ciudad.textContent = propiedad.ciudad;

        const img = clon.querySelector(".casa-img");
        img.src = propiedad.imagen;
        img.dataset.indice = indice;

        const precio = clon.querySelector(".casa-precio");
        precio.textContent = propiedad.precio.toLocaleString("es-ES") + " €";

        img.addEventListener("click", function (e) {
            if (propiedad.vendida) {
                alert("Esta propiedad ya ha sido vendida.");
                return;
            };
            // seleccionarPropiedad(e.target.dataset.indice, e.target);
            seleccionarPropiedad(indice, e.target);
        });

        if (propiedad.vendida) {
            const overlay = document.createElement("div");
            overlay.classList.add("vendida-overlay");
            overlay.textContent = "VENDIDA";
            contenedor.appendChild(overlay);
        }

        galeria.appendChild(clon);
    });
}

function seleccionarPropiedad(indice, elementoImagen) {
    propiedadSeleccionada = indice;
    const propiedad = propiedades[indice];

    // Quitar seleccion anterior
    const imagenes = document.querySelectorAll(".casa-img");
    imagenes.forEach(function (img) {
        img.classList.remove("seleccionada");
    });

    // Marcar la seleccionada
    elementoImagen.classList.add("seleccionada");

    // Mostrar detalle
    document.querySelector("#detalle-nombre").textContent = propiedad.nombre;
    document.querySelector("#detalle-descripcion").textContent = propiedad.descripcion;
    document.querySelector("#detalle-precio").textContent = propiedad.precio.toLocaleString("es-ES");
    document.querySelector("#detalle").classList.remove("oculto");

    // Ocultar hipoteca al cambiar de propiedad
    document.querySelector("#hipoteca").classList.add("oculto");
    document.querySelector("#resultado-anual").textContent = "-- €/año";
}

document.querySelector("#btn-calcular-hipoteca").addEventListener("click", function () {
    // if (propiedadSeleccionada === null) return;

    const propiedad = propiedades[propiedadSeleccionada];
    document.querySelector("#hipoteca-precio").value = propiedad.precio.toLocaleString("es-ES") + " €";
    document.querySelector("#hipoteca-entrada").value = "";
    document.querySelector("#hipoteca-anios").value = "";
    document.querySelector("#resultado-anual").textContent = "-- €/año";
    document.querySelector("#hipoteca").classList.remove("oculto");
});

document.querySelector("#btn-calcular").addEventListener("click", function () {
    const propiedad = propiedades[propiedadSeleccionada];
    const porcentaje = parseFloat(document.querySelector("#hipoteca-porcentaje").value);
    const entrada = parseFloat(document.querySelector("#hipoteca-entrada").value);
    const anios = parseInt(document.querySelector("#hipoteca-anios").value);

    if (!anios || anios <= 0) {
        alert("Introduce un número de años válido.");
        return;
    }

    if (entrada < 0) {
        alert("La entrada no puede ser negativa.");
        return;
    }

    // Calculo simple: (precio - entrada + porcentaje sobre precio) / años
    const intereses = (propiedad.precio * porcentaje) / 100;
    const pagoAnual = (propiedad.precio - entrada + intereses) / anios;

    document.querySelector("#resultado-anual").textContent = pagoAnual.toFixed(2).toLocaleString("es-ES") + " €/año";
});

document.querySelector("#btn-comprar").addEventListener("click", function () {
    mostrarMensajeFinDePago()

    propiedades[propiedadSeleccionada].vendida = true;

    // Recargar galeria para mostrar overlay VENDIDA
    cargarGaleria();

    // Ocultar secciones
    document.querySelector("#detalle").classList.add("oculto");
    document.querySelector("#hipoteca").classList.add("oculto");

    propiedadSeleccionada = null;
});

function mostrarMensajeFinDePago() {
    const anios = parseInt(document.querySelector("#hipoteca-anios").value);
    const meses = anios * 12;

    const hoy = new Date();
    hoy.setMonth(hoy.getMonth() + (meses - 1));

    const mesUltimoPago = nombresMeses[hoy.getMonth()];
    const anioUltimoPago = hoy.getFullYear();
    alert("¡Enhorabuena! La vivienda ha sido marcada como vendida. Acabarás de pagarla en " + mesUltimoPago + " de " + anioUltimoPago + ".");
}

// Cargar galeria al iniciar
cargarGaleria();




