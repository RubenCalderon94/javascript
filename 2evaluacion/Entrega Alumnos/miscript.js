//--------------//
//CREAMOS ARRAY//
//-------------//
// El array vacío
let listaDeTareas = []; //con llaves en vez de corchetes, guardamos objetos, que es lo que queremos
let contadorId = 0;


function dibujarTareas() {
  const templateTarea = document.querySelector("#templateTarea");
  const ul = document.querySelector("#listaTareas");
  const li = document.querySelector(".tarea");

  // limpiamos antes de dibujar
  ul.innerHTML = "";

  listaDeTareas.forEach((tarea) => {
    const clon = templateTarea.content.cloneNode(true);

    clon.querySelector(".tarea-desc").textContent = tarea.descripcion;
    clon.querySelector(".tarea-tipo").textContent = tarea.tipo;

    // fecha
    clon.querySelector(".tarea-fecha").textContent = tarea.fechaCompletada
      ? tarea.fechaCompletada.toLocaleDateString("es-ES")
      : "";
    clon.querySelector(".btn-completar").dataset.id = tarea.id
    ul.appendChild(clon);

  });
}

const boton = document.querySelector("#btnAnadir");
boton.addEventListener("click", () => {
 let descripcion=document.querySelector("#inputTarea").value  
 let tipo = document.querySelector("#selectTipo").value
 let nuevaTarea = {
    id: contadorId++,
    descripcion: descripcion,
    tipo: tipo,
    completada: false,
    fechaCompletada: null,
  };

listaDeTareas.push(nuevaTarea);
dibujarTareas()
})

const listaTareas = document.querySelector("#listaTareas");
listaTareas.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-completar")) {
        alert("Completar" + e.target.dataset.id)
    }
     if (e.target.classList.contains("btn-eliminar")) {
        alert("eliminar")
    }
})
listaTareas


