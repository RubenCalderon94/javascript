//1.Mostrar los elementos de un array del final al principio usando pop.

function ejercicioPop() {
  let array = [1, 2, 3, 4, 5];
  let longuitud = array.length;

  for (let i = 0; i <= longuitud; i++) {
    ultimo = array.pop();
    alert(ultimo);
  }
}
