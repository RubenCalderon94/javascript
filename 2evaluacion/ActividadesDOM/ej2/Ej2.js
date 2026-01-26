/*Tareas:
1. Selecciona el h2 que está dentro del div con id "contenedor" y muestra el texto
que tiene dentro.
2. Selecciona todos los li con clase "oferta". Mostrar cada uno con el texto:
Oferta 1: X…
3. Selecciona todos los li (estén o no en oferta) y muestre cuántos hay.
4. Muestra en consola cuántos productos en oferta hay.
*/

function ejecutar() {
  //1. Selecciona el h2 que está dentro del div con id "contenedor" y muestra el texto que tiene dentro.
  let h2 = document.querySelector('h2');
  alert('Texto del h2: ' + h2.textContent);

  //2. Selecciona todos los li con clase "oferta". Mostrar cada uno con el texto: Oferta 1: X…
  let contador = 1;
  let todosLi = document.querySelectorAll('.oferta');

  for (const Li of todosLi) {
    console.log('Oferta ' + contador + ':' + Li.textContent);
    contador++;
  }

  //3. Selecciona todos los li (estén o no en oferta) y muestre cuántos hay.
  let li = document.querySelectorAll('ul li');
  console.log('Cuantos li hay: ' + li.length);

  //4.Muestra en consola cuántos productos en oferta hay.
  let oferta = document.querySelectorAll('.oferta');
  console.log('Cuantos productos hay en oferta: ' + oferta.length);
}
