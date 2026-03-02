<?php
//Para depurar errores
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
require_once 'conexion.php';

// Obtener conexión a la base de datos
$conn = obtenerConexion();

//Coger todas las filas
$sql="SELECT * FROM usuarios";
$stmt = $conn->prepare($sql);
// Ejecutar la consulta
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    //Usar fetch_assoc cuando devuelve una sola fila y fetch_all cuando devuelve varias filas
    $usuarios = $result->fetch_all(MYSQLI_ASSOC); //fetch_assoc() ó fetch_all(MYSQLI_ASSOC)
    enviarRespuesta($conn, [
                'success' => true,
                'datos' => $usuarios,
                'total' => count($usuarios)
            ]);
} else {
    enviarError(500, 'Error al buscar usuarios', $conn);
}
?>