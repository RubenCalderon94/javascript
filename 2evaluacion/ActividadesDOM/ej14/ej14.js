/*1. Al hacer click en "Aplicar Filtros":
o Filtrar por categoría seleccionada (usando selectedIndex).
o Si el checkbox “solo disponibles” está marcado (usar :checked), mostrar
solo productos con stock > 0.
o Ocultar productos que no cumplan los filtros añadiendo clase "oculto".
2. Mostrar en consola cuántos productos se muestran
3. Si no hay productos que mostrar, mostrar mensaje "No hay productos"
*/

// Espera a que todo el HTML esté cargado antes de ejecutar el JS
window.addEventListener('DOMContentLoaded', () => {
  //primero seleccionamos
  const selectCategoria = document.querySelector('#categoria'); //esto es el select
  const checkbox = document.querySelector('#solo-disponibles'); //esto es el checkbox
  const boton = document.querySelector('#aplicar-filtros'); //esto es el boton
  const productos = document.querySelectorAll('.producto'); //todos los div, donde esta cada producto

  //hacer click en el boton(aplicar, filtros)
  boton.addEventListener('click', () => {
    //obtenemos el indice de la opcion seleccionada
    let indice = selectCategoria.selectedIndex;

    //con el indice sacamos el value de la opcion seleccionada
    let categoriaSeleccionada = selectCategoria.options[indice].value;

    //contador de productos que se van a mostrar
    let mostrados = 0;

    //recorremos los productos
    // Recorremos todos los productos uno a uno
    for (const producto of productos) {
      //  Leemos los datos del producto desde el HTML
      const categoria = producto.dataset.categoria; // data-categoria
      const stock = Number(producto.dataset.stock); // data-stock

      //  Suponemos que el producto se va a mostrar
      let mostrar = true;

      //  Filtro por categoría
      if (categoriaSeleccionada !== '' && categoria !== categoriaSeleccionada) {
        mostrar = false;
      }

      //  Filtro por stock
      if (checkbox.checked && stock <= 0) {
        mostrar = false;
      }

      //  Mostramos u ocultamos el producto
      if (mostrar) {
        producto.classList.remove('oculto'); // mostrar
        mostrados++; // sumamos
      } else {
        producto.classList.add('oculto'); // ocultar
      }
    }
  });
});
