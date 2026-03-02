document.querySelector("#btnCargarTodos").addEventListener('click', function () {
    cargarTodos()
})

async function cargarTodos() {
    const URL = "ej0.php"
    const response = await fetch(URL);

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const { success, datos, total } = await response.json();

    if (success) {
        console.log(total)
        const resultados = document.querySelector('#resultados');
        resultados.innerHTML = '';
        datos.forEach(usuario => {
            resultados.innerHTML += `<p>${usuario.nombre} - ${usuario.email}</p>`;
        });
    }
}
