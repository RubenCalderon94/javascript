/*
1.- Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el
array y muestra por consola el resultado de aplicar las funciones parseInt, parseFloat, isNan, Number y
String, a cada uno de los elementos del array. ¿Hay algún resultado que no esperabas?
*/

let valores = [3, 3.5, '3', '3.5', '7aaa', 'aaa7', 'hola'];

for (let valor of valores) {
  console.log(`Valor original: ${valor}`);

  console.log('parseInt:', parseInt(valor));
  console.log('parseFloat:', parseFloat(valor));
  console.log('isNaN:', isNaN(valor));
  console.log('Number:', Number(valor));
  console.log('String:', String(valor));

  console.log('---------------------------');
}
