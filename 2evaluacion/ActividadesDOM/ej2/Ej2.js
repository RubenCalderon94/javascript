/*Tareas:
1. Selecciona el h2 que está dentro del div con id "contenedor" y muestra el texto
que tiene dentro.
2. Selecciona todos los li con clase "oferta". Mostrar cada uno con el texto:
Oferta 1: X…
3. Selecciona todos los li (estén o no en oferta) y muestre cuántos hay.
4. Muestra en consola cuántos productos en oferta hay.
*/

function ejecutar() {
  //1. Selecciona el h2 que está dentro del div con id "contenedor" y muestra el texto
  let h2 = document.querySelector('#contenedor h2');
  alert('Parrafo h2: ' + h2.textContent);

  //2. Selecciona todos los li con clase "oferta". Mostrar cada uno con el texto:
  //Oferta 1: X…

  let liOferta = document.querySelectorAll('li.oferta');
  for (const cadaLi of liOferta) {
    alert('Imprimimos cada li con la clase oferta: ' + cadaLi.textContent);
  }

  //3. Selecciona todos los li (estén o no en oferta) y muestre cuántos hay.
  let cuentaLi = document.querySelectorAll('ul li');

  alert('Todos los li: ' + cuentaLi.length);

  //4. Muestra en consola cuántos productos en oferta hay.
  let oferta = document.querySelectorAll('li.oferta');
  console.log(oferta);
}
