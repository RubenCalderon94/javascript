<?php
require_once 'conexion.php';
$conexion = obtenerConexion();
$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo == 'GET') {
    // Tarea 2.8: Consultar artistas y sumar sus entradas vendidas
    $sql = "SELECT a.id, a.nombre, a.imagen, 
            COALESCE(SUM(e.cantidad), 0) AS total_entradas 
            FROM artistas a 
            LEFT JOIN entradas e ON a.id = e.artista_id 
            GROUP BY a.id, a.nombre, a.imagen 
            ORDER BY total_entradas DESC";
    
    $res = $conexion->query($sql);
    $datos = $res->fetch_all(MYSQLI_ASSOC);
    
    enviarRespuesta($conexion, $datos);

} elseif ($metodo == 'POST') {
    // Tarea 2.7: Registrar una venta
    $artista_id = $_POST['id'];
    $cantidad = $_POST['cantidad'];

    $stmt = $conexion->prepare("INSERT INTO entradas (artista_id, cantidad) VALUES (?, ?)");
    $stmt->bind_param("ii", $artista_id, $cantidad);

    if ($stmt->execute()) {
        enviarRespuesta($conexion, ["success" => true]);
    } else {
        enviarError(500, "Error al guardar la venta", $conexion);
    }
    $stmt->close();
}