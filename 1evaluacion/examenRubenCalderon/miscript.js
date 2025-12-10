let animalesEnArca = [
  "Leon;carnívoro;macho",
  "Leon;carnívoro;hembra",
  "Elefante;herbívoro;macho",
  "Elefante;herbívoro;hembra",
  "Delfin;acuático;macho",
  "Delfin;acuático;hembra",
  "Tigre;carnívoro;macho",
  "Jirafa;herbívoro;hembra",
  "Cebra;herbívoro;macho",
  "Tiburon;acuático;hembra",
];

let curiosidades = [
  "Este animal será el encargado de dar la bienvenida hoy a los nuevos visitantes.",
  "¡Este animal ha ganado una ración extra de comida!",
  "Este animal será el primero en salir del arca cuando llegue el momento.",
  "Este animal tendrá el mejor camarote del arca hoy.",
  "Este animal liderará el paseo matutino por la cubierta.",
];

let posiblesFechasDiluvio = [
  "15/03/2026",
  "22/06/2026",
  "10/09/2026",
  "25/03/2026",
  "01/06/2026",
];

function mostrarResultado(mensaje) {
  document.getElementById("resultado").innerHTML =
    "<h2>Resultados:</h2>" + mensaje;
}

//Filtar por tipo de animal
function ejercicio1(array) {
  let usuario = prompt(
    "Ingrese el tipo de animal a filtrar (carnívoro(C), herbívoro(H), acuático(A))"
  );

  let rdo = "";
  for (const valor of array) {
    partes = valor.split(";");
    letras = partes[0];
    let posicion = letras.indexOf(usuario);
    if (letras == posicion) {
      rdo += valor;
    }
  }
  mostrarResultado(rdo);

  filtrarPorTipos(usuario);
}

function filtrarPorTipos(tipo) {
  let resultado = []; //array donde vamos a guardar los animales

  for (const valor of animalesEnArca) {
    partes = valor.split(";");
    let animal = partes[0];
    let tipos = partes[1];

    resultado[animal] = tipos;
  }

  let arrayFiltrado = [];

  if (resultado[tipos] == tipo) {
    arrayFiltrado.push(resultado[tipos]);
  }

  return arrayFiltrado;
}

// Ejercicio 2: Añadir Animal
/*Ejercicio 2(2 puntos)
Se le pedirá al usuario el nombre del nuevo animal, su tipo (carnívoro, herbívoro,
acuático) y su sexo (macho o hembra). No debemos controlar que se confunda al
poner el tipo o sexo, siempre lo pondrá bien.
Si ya hay un animal con el mismo nombre y del mismo sexo en el arca mostrar: "Ya
existe un animal con el mismo nombre y sexo en el arca.", en caso contrario, añadir el
nuevo animal en “animalesEnArca” respetando el formato que ya hay:
nombre;tipo;sexo.*/
function ejercicio2() {
  let nombre = prompt("Ingrese el nombre del animal");
  let tipo = prompt(
    "Ingrese el tipo de animal(carnivoro, herbiboro, acuatico)"
  );
  let sexo = prompt("Ingrese el sexo del animal");

  let texto = nombre + tipo + sexo;
  let completo = texto.split(";");

  if (completo == animalesEnArca[indice]) {
    alert("Animal repetido");
  } else {
    animalesEnArca.push(completo);
  }

  let rdo = "";
  for (const valor of animalesEnArca) {
    rdo += valor;
  }

  mostrarResultado(rdo);
}

//Contar por tipo de animal
/*Ejercicio 3(1.5 puntos)
En principio tenemos 3 tipos de animales, pero se pueden añadir más en un futuro, por
lo que usar un array asociativo para contar por tipo de animal y mostrar en
“Resultado” debajo del .html:
<h3>Conteo de Animales por Tipo:</h3>
Y posteriormente el tipo de animal, dos puntos y su cantidad. Ejemplo:
carnívoro: 3
herbívoro: 4  */
function ejercicio3() {
  let resultado = [];
  for (const valor of animalesEnArca) {
    partes = valor.split(";");
    let tipo = partes[1];
    if (resultado[tipo] === undefined) {
      //Comprobamos si la ciudad existe
      resultado[tipo] = 1;
    } else {
      resultado[tipo] += 1;
    }
  }

  //ahora recorrer el nuevo ARRAYASOCIATIVO llamado  resultado
  let texto = "<h3>Conteo de Animales por Tipo:</h3>";
  for (const indice in resultado) {
    texto += indice + " con una puntuacion de: " + resultado[indice] + "<br>";
  }

  mostrarResultado(texto);
}
//Animal aleatorio
/*Ejercicio 4 (1 punto)
Coger un animal aleatorio de “animalesEnArca”, coger una curiosidad aleatoria del
array “curiosidades” y mostrar en el cuadro “Resultados” del HTML (sustituir X por el
valor correcto):
<h3>🐾 Animal Aleatorio Seleccionado:</h3>
<p>Nombre: X </p>
<p>Tipo: X </p>
<p>Sexo: X </p>
<p>Curiosidad: X </p>*/
function ejercicio4() {
  let animalAleatorio = Math.floor(Math.random() * animalesEnArca.length);
  let frase = Math.floor(Math.random() * curiosidades.length);

  let rdo = "<h3>🐾 Animal Aleatorio Seleccionado:</h3>";
  let partes = animalAleatorio.split(";");
  rdo += "<p>Nombre: " + partes[0] + " </p>";
  rdo += "<p>Tipo: " + partes[1] + " </p>";
  rdo += "<p>Sexo: " + partes[2] + " </p>";
  rdo += "<p>Curiosidad: " + frase + " </p>";

  mostrarResultado(rdo);
}

/*Ejercicio 5(2 puntos)
Nos dan el array “posiblesFechasDiluvio” y habrá que comprobar si dentro de 146 días
alguna fecha cae en domingo, en cuyo caso, habrá que hacer que caiga en lunes.
Mostrar en el cuadro “Resultados” del .html las fechas que caen en domingo:
<h3>🌧 Preparándonos para el Próximo Diluvio:</h3>
<p>La fecha X de diluvio cae en domingo. Se ha ajustado al lunes siguiente</p>
Y en un alert mostrar(cada una en una línea), cómo quedarían las fechas una vez
corregidas las que caen en domingo.
Usa fecha.toLocaleDateString() para mostrar la fecha en formato dia/mes/año.*/
function ejercicio5() {}

/*Ejercicio 6(1 punto)
Mostrar en el cuadro “Resultados” del .html todos los animales del Arca y el número
total de animales que hay actualmente. El formato es:
<h3>🐾 Todos los Animales en el Arca:</h3>
Tiburon - Tipo: acuático, Sexo: hembra
Total de animales:*/
function mostrarTodosAnimales() {
  let contador = 0;
  let texto = "<h3>🐾 Todos los Animales en el Arca:</h3>";
  for (const valor of animalesEnArca) {
    partes = valor.split(";");
    texto +=
      partes[0] +
      "-" +
      "Tipo-" +
      partes[1] +
      "," +
      "Sexo:" +
      partes[2] +
      "<br>";
    contador++;
  }

  mostrarResultado(texto + "<br>" + "Total de animales" + contador);
}
