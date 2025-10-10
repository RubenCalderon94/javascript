/*
8. Modificar el ejercicio anterior, de tal forma que muestra en la consola el número de veces que
aparece cada item en el array, pero ordenamos de mayor a menor.


Para esta actividad es probable que necesitéis saber cómo eliminar un elemento de un array
asociativo. Con el método “slice”, en array normales se puede hacer, pero, ¿funciona igual en
array asociativos? En caso de que no funcione, ¿se puede eliminar un elemento de un array
asociativo? ¿como?
*/

function ordenar() {
  //Creamos el array
  let array = ["verde", "verde", "verde", "azul", "amarillo"];
  //Creamos otro array para contar repeticiones
  let repeticiones = [];
  //Creamos

  for (const valor of array) {
    //Me recorre el array pero al ser OF, me da de resultado el valor. Si fuera IN me daria la posicion
    if (repeticones[valor] == undefined) {
      repeticones[valor] = 1;
    } else {
      repeticones[valor] += 1;
    }
  }
  console.log(repeticiones);

  for (const valor of repeticiones) {
  }
}
