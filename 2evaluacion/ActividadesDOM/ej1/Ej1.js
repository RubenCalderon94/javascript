/*
Tareas (escribe el código JavaScript):
1. Selecciona el elemento h1 por su ID y muestra su contenido en consola.
2. Selecciona el primer párrafo con clase "intro" y muestra su texto.
3. Selecciona TODOS los párrafos con clase "intro"(Salida: Intro 1: “…”) y
muestra cuántos hay.
4. Selecciona TODOS los párrafos (sin importar la clase) y muestra cuántos hay.*/


// Función que se ejecutará al hacer clic en el botón
function ejecutar() {
    // 1. Seleccionar el h1 por su ID y mostrar su contenido
    let titulo = document.getElementById("#titulo"); // selecciona por id  "document.getElementById"
    alert("Contenido del h1:" + titulo.textContent);

    // 2. Seleccionar el primer párrafo con clase "intro" y mostrar su texto
    let primerIntro = document.querySelector(".intro"); // querySelector devuelve el primero que encuentre
    alert("Primer párrafo con clase 'intro':"+ primerIntro.textContent);

    // 3. Seleccionar todos los párrafos con clase "intro" y mostrar cuántos hay
    let todosIntro = document.querySelectorAll(".intro"); // querySelectorAll devuelve todos
    todosIntro.forEach(function (p,indice){
        console.log(`Intro ${indice + 1}: "${p.textContent}"`);
    });
    alert("Cantidad de párrafos con clase 'intro':" + todosIntro.length);

    // 4. Seleccionar todos los párrafos sin importar la clase y mostrar cuántos hay
    let todosParrafos = document.querySelectorAll("p");
    alert("Cantidad total de párrafos:"+ todosParrafos.length); // .lenght porque queremos contar cuantos.
    
}

