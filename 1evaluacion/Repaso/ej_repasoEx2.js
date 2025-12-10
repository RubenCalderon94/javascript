// Ejercicio 1
function funcion1() {
  let min = 6;
  let max = 21;
  let contador = 0;
  let suma = 0;
  do {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    suma += num;
    contador++;
    alert(`Tirada ${contador}. Ha salido el numero ${num}`);
  } while (confirm('¿Quieres seguir jugando?'));
  let media = suma / contador;

  alert(
    `Has acabado. Has tirado ${contador} veces y la media ha sido ${media}`
  );
}

function funcion2() {
  let a_deudas = [
    'Pedro:21/01/2024',
    'Luis:15/02/2024',
    'Antonio:04/04/2024',
    'Maria:05/06/2024',
    'Rafael:16/07/2024',
  ];
  let diasSumar = 15;
  let mesSumar = 1;
  let salida = '';

  let diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  for (let i = 0; i < a_deudas.length; i++) {
    let partes = a_deudas[i].split(':');
    let nombre = partes[0];
    let fechaPartes = partes[1].split('/');

    let dia = parseInt(fechaPartes[0]);
    let mes = parseInt(fechaPartes[1]) - 1; // en JS los meses van de 0 a 11
    let año = parseInt(fechaPartes[2]);

    let fecha = new Date(año, mes, dia);

    fecha.setDate(fecha.getDate() + diasSumar);
    fecha.setMonth(fecha.getMonth() + mesSumar);

    if (fecha.getDay() == 0) {
      fecha.setDate(fecha.getDate() + 1);
    }

    let diaSemana = diasSemana[fecha.getDay()];
    let fechaFormato =
      fecha.getDate() +
      '/' +
      (fecha.getMonth() + 1) +
      '/' +
      fecha.getFullYear();

    salida +=
      '<p>' +
      nombre +
      ' le caduca la deuda el ' +
      fechaFormato +
      ' que cae en ' +
      diaSemana +
      '</p>';
  }

  document.getElementById('resultado').innerHTML = salida;
}

let listaTelefonos = '<ol>'; // Dejamos la etiqueta sin cerrar y la cerramos al final cuando vamos a mostrar todos los telefonos
// Dado que es una variable global, cuando volvamos a ejecutar 'funcion3', lo concatenado en la linea 66 se ha guardado en dicha variable

function funcion3() {
  let min = 0;
  let max = 99;
  let minPrimerNum = 6;
  let maxPrimerNum = 7;
  let numTelefono = '';
  let num = Math.floor(
    Math.random() * (maxPrimerNum - minPrimerNum + 1) + minPrimerNum
  );
  numTelefono += num;

  while (numTelefono.length < 8) {
    // 9 - 1
    num = Math.floor(Math.random() * (max - min + 1) + min);
    num = num.toString().padStart(2, '0');
    numTelefono += num;
  }
  alert(`El numero de telefono es ${numTelefono}`);
  listaTelefonos += `<li>${numTelefono}</li>`;
  document.getElementById('resultado').innerHTML = listaTelefonos + '</ol>';
}

function funcion4() {
  let palabras = [
    'elefante',
    'lavadora',
    'mariposa',
    'colorear',
    'cielo',
    'montaña',
    'río',
    'estrella',
    'jardín',
    'libro',
    'sonrisa',
  ];
  let letras_palabras = []; // Asociativo
  for (const palabra of palabras) {
    let letra = palabra[0];
    if (letras_palabras[letra] == undefined) {
      let array = [];
      array.push(palabra);
      letras_palabras[letra] = array;
    } else {
      letras_palabras[letra].push(palabra);
    }
  }

  let salida = '';
  for (let letra in letras_palabras) {
    salida += `<p>Letra: ${letra.toUpperCase()}. Palabras: ${letras_palabras[
      letra
    ].join(' - ')}</p>`;
  }
  document.getElementById('resultado').innerHTML = salida;
}

function funcion5() {
  let minutosSumar = 30;
  let horasSumar = 7;
  let fecha = new Date();

  alert(`Has fichado a las ${fecha.toLocaleTimeString()}`);
  fecha.setMinutes(fecha.getMinutes() + minutosSumar);
  fecha.setHours(fecha.getHours() + horasSumar);
  alert(`El proximo fichaje es a las ${fecha.toLocaleTimeString()}`);
}

function mostrarDescripción(array) {
  let salida = '';
  for (const entrenamiento of array) {
    salida += entrenamiento.descripcion() + '\n';
  }
  alert(salida);
}

// ================== REPASO ==================

function repasoObjetosLiterales() {
  // Recorrer array y crear objeto literal (nombres, pais, precio). Metodo descripcion() que muestre: Nombre: escapada (España) Precio: 100€.
  // Almacenamos le array literal en un array de escapadas, recorremos el array de escapadas y mostramos su resultado en un alert() (llamar al metodo descripcion)
  let escapadasArray = [
    'Cena bajo las estrellas - España - 120€',
    'Fin de semana en París - Francia - 350€',
    'Aventura en la selva - Brasil - 500€',
    'Crucero por el Caribe - Estados Unidos - 1000€',
    'Cata de vinos en Toscana - Italia - 200€',
    'Descargarme ejercicios de JS de Classroom - España - 0€',
  ];

  let a_obj_esc = [];
  for (const s_escapada of escapadasArray) {
    let [s_nombre, s_pais, s_precio] = s_escapada.split(' - ');
    let escapada = {
      nombre: s_nombre,
      pais: s_pais,
      precio: s_precio,
      descripcion() {
        // No hace falta especifica que es una funcion: descripcion: function() {
        return `Nombre: ${this.nombre} (${this.pais}) Precio: ${this.precio}€.`;
      },
    };

    a_obj_esc.push(escapada);
  }

  let salida = '';
  for (const obj_esc of a_obj_esc) {
    salida += obj_esc.descripcion + '\n';
  }
  alert(salida);
}

let contactos = [
  'Pedro-612345678',
  'Lucía-623456789',
  'Javier-634567890',
  'Ana-645678901',
  'Carlos-656789012',
  'María-667890123',
  'Sofía-678901234',
  'Diego-689012345',
  'Claudia-690123456',
  'Luis-601234567',
];

let a_PersTelefono = []; // Asociativo

//function repasoArrayAsociativo() {
// Mediante un array asociativo, crear una agenda de contactos donde el indice sera el nombre de la persona y el valor sera el telefono.
// Hacer una funcion crearArrayAsociativo que cree una agenda con varios contactos
// Hacer una funcion mostrarTodaLaAgenda que muestre toda la agenda en un alert de la forma: Nombre: X Teléfono: X
// Hacer una funcion mostrarAgenda que pida el nombre de una persona y muestre su telefono. Si inserta la palabra TODOS, llamará a la funcion mostrarTodaLaAgenda, si no existe el contacto informa al usuario de ello
// Hacer un boton llamado actualizar que añada un '+34' a todos los telefonos

function crearArrayAsociativo() {
  for (let nom_telefono of contactos) {
    let [nombre, telefono] = nom_telefono.split('-');
    if (a_PersTelefono[nombre] == undefined) {
      a_PersTelefono[nombre] = telefono;
    }
  }
  alert('Se ha creado el array asociativo-Agenda');
}

function mostrarTodaLaAgenda() {
  let salida = '';
  for (let claveNombre in a_PersTelefono) {
    salida += `Nombre: ${claveNombre} Teléfono: ${a_PersTelefono[claveNombre]}\n`;
  }
  alert(salida);
}

function mostrarAgenda() {
  let n_Usuario = prompt(
    'Introduzca el nombre de la persona a consultar o la palabra TODOS'
  ).toUpperCase();
  if (n_Usuario == 'TODOS') {
    mostrarTodaLaAgenda();
  } else {
    n_Usuario = n_Usuario[0] + n_Usuario.slice(1).toLowerCase();
    if (a_PersTelefono[n_Usuario] == undefined) {
      alert(
        'El parametro introducido ni es el nombre de una persona de la agenda o la palabra TODOS'
      );
      return;
    }
    alert(a_PersTelefono[n_Usuario]);
  }
}

function actualizar() {
  for (let nombre in a_PersTelefono) {
    a_PersTelefono[nombre] = `+34 ${a_PersTelefono[nombre]}`;
  }
  alert('Telefonos actualizados');
}

//}
