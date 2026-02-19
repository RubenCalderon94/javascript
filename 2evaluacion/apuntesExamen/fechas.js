/*
<!-- HTML -->
<p id="mostrarFecha"></p>

<script>
// ==========================================
// 1️⃣ FECHA INICIAL  
// 
************************************* SI QUEREMOS LA ACTUAL, DEJAR VACIO LOS PARENTESIS DE NEW DARE*****************
// ==========================================
let fecha = new Date(2026, 1, 19); // 19 Febrero 2026 (mes=1 porque enero=0)

// Guardamos los valores iniciales en variables
let dia = fecha.getDate();        // 19
let mes = fecha.getMonth() + 1;   // 2 → sumamos 1 porque getMonth() empieza en 0
let anio = fecha.getFullYear();   // 2026

// ==========================================
// 2️⃣ MODIFICAR DÍA, MES Y AÑO
// ==========================================
fecha.setDate(25);    // cambiamos el día a 25
fecha.setMonth(5);    // cambiamos el mes a junio (0=enero, 5=junio)
fecha.setFullYear(2030); // cambiamos el año a 2030

// Actualizamos las variables para reflejar la fecha modificada
dia = fecha.getDate();        // 25
mes = fecha.getMonth() + 1;   // 6
anio = fecha.getFullYear();   // 2030

// ==========================================
// 3️⃣ GUARDAR EL RESULTADO EN UNA VARIABLE
// ==========================================
let fechaTexto = dia + '/' + mes + '/' + anio; 
// fechaTexto → "25/6/2030"

// ==========================================
// 4️⃣ MOSTRAR EN EL DOM
// ==========================================
document.getElementById('mostrarFecha').textContent = fechaTexto;

// Ahora en la página verás: 25/6/2030
</script>
*/

// 1️⃣ Crear un objeto Date con fecha específica
// Formato: new Date(año, mes, día, hora, minuto, segundo)
// OJO: los meses empiezan en 0 → 0 = enero, 1 = febrero, etc.
const fechaEspecifica = new Date(2026, 1, 19); // 19 febrero 2026
console.log('Fecha específica:', fechaEspecifica.toDateString()); // muestra: "Thu Feb 19 2026"

// 2️⃣ Obtener la fecha actual
const fechaActual = new Date();
console.log('Fecha actual:', fechaActual.toDateString());

// 3️⃣ Modificar días, semanas o meses
// Vamos a crear un clon de la fecha actual para no modificar la original
const fechaModificada = new Date(fechaActual);

// ✅ Agregar días
fechaModificada.setDate(fechaModificada.getDate() + 5); // suma 5 días
console.log('Fecha +5 días:', fechaModificada.toDateString());

// ✅ Restar días
fechaModificada.setDate(fechaModificada.getDate() - 10); // resta 10 días
console.log('Fecha -10 días:', fechaModificada.toDateString());

// ✅ Agregar semanas
// 1 semana = 7 días
fechaModificada.setDate(fechaModificada.getDate() + 2 * 7); // suma 2 semanas
console.log('Fecha +2 semanas:', fechaModificada.toDateString());

// ✅ Agregar meses
// Usamos setMonth
fechaModificada.setMonth(fechaModificada.getMonth() + 1); // suma 1 mes
console.log('Fecha +1 mes:', fechaModificada.toDateString());

// ✅ Restar meses
fechaModificada.setMonth(fechaModificada.getMonth() - 3); // resta 3 meses
console.log('Fecha -3 meses:', fechaModificada.toDateString());

// 4️⃣ Obtener componentes individuales
console.log('Día del mes:', fechaModificada.getDate()); // 1-31
console.log('Mes (0-11):', fechaModificada.getMonth()); // 0 = enero
console.log('Año:', fechaModificada.getFullYear()); // 2026
console.log('Día de la semana (0-dom, 6-sáb):', fechaModificada.getDay());
