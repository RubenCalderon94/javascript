/*Tareas:
1. Selecciona todas las tarjetas y muestra cuántas hay.
2. Añade la clase "activa" solo a la primera tarjeta.
3. Añade la clase "grande" a todas las tarjetas usando un bucle. Y muestra cómo
van quedando las clases en cada tarjeta.
4. Verifica cuántas clases tiene la primera tarjeta. */

function ejecutar() {
    //1. Selecciona todas las tarjetas y muestra cuántas hay.
    //seleccionamos todas
    const todas = document.querySelectorAll(".tarjeta");

    alert(todas.length);

    //2. Añade la clase "activa" solo a la primera tarjeta.
    //seleccinamos la primera tarjeta
    const primeraTarjeta = document.querySelector(".tarjeta");
    //añadimos "activa" a la clase
    primeraTarjeta.classList.add("activa");
    //imprimimos
    alert(primeraTarjeta.className);

    //3. Añade la clase "grande" a todas las tarjetas usando un bucle. Y muestra cómo
    //van quedando las clases en cada tarjeta.

    const grandeTodas = document.querySelectorAll(".tarjeta");

    for (const cambiar of grandeTodas) {
        cambiar.classList.add("grande")
    }

    alert(grandeTodas.className);

    


}