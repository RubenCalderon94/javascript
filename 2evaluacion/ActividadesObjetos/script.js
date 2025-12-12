/*1. Crea una clase llamada Persona. Esta clase deberá tener una propiedad "nombre", de tipo string.
También tendrá un método "Saludar", que escribirá en la pantalla "Hola, soy " seguido de su
nombre. Se crearán dos objetos de tipo Persona, se les asignará un nombre a cada uno y se les
pedirá que saluden.
*/

/*
	"getySet": {
		"scope": "javascript",
		"prefix": "getter",
		"body": [
			"get $1() {",
			"\treturn this.#$1;",
			"}",
			"set $1(nuevo) {",
			"\tthis.#$1 = nuevo;",
			"}"
		],
		"description": "getter y setter"
	},

	
	"crearClase":{
		"scope": "javascript",
		"prefix": "clase",
		"body": [
			"class $1{",
			"#$2;",
			"constructor($2) {",
			"\tthis.#$2 = $2;",
			"}",
			"}"
		],
		"description": "Crear clase"
	},*/

class Persona {
  // Declaramos la clase Persona
  #nombre; // Con (#) Propiedad privada, solo accesible dentro de la clase
  constructor(nombre) {
    this.nombre = nombre; // Llama al setter para asignar el nombre al crear el objeto
  }

  get nombre() {
    return this.#nombre; // Devuelve el valor de la propiedad privada #nombre
  }

  set nombre(nuevo) {
    this.#nombre = nuevo.toUpperCase(); // Asigna a #nombre el valor en mayúsculas
  }

  saludo() {
    // Método de la clase
    alert(`Hola soy ${this.nombre}`); // Muestra una alerta con el saludo y el nombre
  }
}

function ejercicio1() {
  // Función que ejecuta el ejemplo
  let persona1 = new Persona("Ruben"); // Crea un objeto persona1 con nombre "Ruben"
  let persona2 = new Persona("Carlos"); // Crea un objeto persona2 con nombre "Carlos"
  persona1.saludo(); // Llama al método saludo() de persona1
  persona2.saludo(); // Llama al método saludo() de persona2
}

/*2. Para guardar información sobre libros, vamos a comenzar por crear una clase "Libro", que
contendrá propiedades "autor", "titulo", "ubicacion" (todos ellos strings) y métodos Get y Set
adecuados para leer su valor y cambiarlo. Se creará un objeto de la clase Libro, le daremos valores
a sus tres propiedades (usando los set) y luego los mostrará por pantalla (usando los get).*/

class Libros {
  #autor;
  #titulo;
  #ubicacion;
  constructor(autor, titulo, ubicacion) {
    this.autor = autor;
    this.titulo = titulo;
    this.ubicacion = ubicacion;
  }

  get autor() {
    return this.#autor;
  }
  set autor(nuevo) {
    this.#autor = nuevo;
  }

  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevo) {
    this.#titulo = nuevo;
  }

  get ubicacion() {
    return this.#ubicacion;
  }
  set ubicacion(nuevo) {
    this.#ubicacion = nuevo;
  }

  mostrar() {
    alert(
      `Libro creado: Autor: ${this.autor}, Título: ${this.titulo}, Ubicación: ${this.ubicacion}`
    );
  }
}

function ejercicio2() {
  let libro1 = new Libros("azul", "asdasd", "sdfsdf");
  let libro2 = new Libros("ul", "dasd", "sdfsdf");
  libro1.mostrar();
  libro2.mostrar();
}

/*3. Crea una clase "Vehículo", con la propiedad "cilindrada" (número entero). Creamos los Get y Set
para las propiedades. También tendrá un método InfoCilindrada para mostrar la cilindrada por
pantalla.
Define otra clase “Coche” que será “hija” de la clase “Vehículo”, con las propiedades "marca"
(texto) y “modelo”, y un método InfoCompleta (que mostrará por pantalla la marca, el modelo y
la cilindrada).
El constructor de la clase “Coche”, recibirá como parámetros la marca, el modelo y la cilindrada.
Por último, crea un objeto Coche con los parámetros que prefieras y llama a los métodos
“InfoCilindrada” e “InfoCompleta”.*/

class Vehiculo {
  #cilindrada;
  constructor(cilindrada) {
    this.cilindrada = cilindrada;
  }

  get cilindrada() {
    return this.#cilindrada + "cc";
  }
  set cilindrada(nuevo) {
    this.#cilindrada = nuevo;
  }

  infoCilindrada() {
    return this.cilindrada;
  }
}

class Coche extends Vehiculo {
  #marcaModelo = parametros(marca, modelo);
  constructor(marcaModelo) {
    this.marcaModelo = marcaModelo;
  }

  mostrarTodo() {
    alert(
      `Mostramos Marca y Modelo: ${
        this.marcaModelo
      } Cilindrada: ${this.infoCilindrada()}`
    );
  }
}

function parametros() {
  let marca = prompt("Escribe una marca de coche");
  let modelo = prompt("Ahora el modelo");

  return marca, modelo;
}

function ejercicio3() {
  let coche1 = new Coche(1500);
  let coche2 = new Coche(2000);

  coche1.mostrarTodo();
  coche2.mostrarTodo();
}
