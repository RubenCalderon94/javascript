<?php
require_once 'conexion.php';

$metodo = $_SERVER['REQUEST_METHOD'];
$conn = obtenerConexion(); // Obtenemos la conexión al principio

if ($metodo === 'GET') {
    // 1. Consultar artistas
    $sql = "SELECT * FROM artistas";
    $resultado = mysqli_query($conn, $sql);

    if (!$resultado) {
        enviarError(500, 'Error al obtener los artistas', $conn);
    }

    $artistas = [];
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $artistas[] = $fila;
    }

    // 2. Enviar respuesta con tus funciones
    enviarRespuesta($conn, $artistas);

} elseif ($metodo === 'POST') {
    // 1. Validar parámetros obligatorios (usando tu función de conexion.php)
    // Asumimos que el formulario envía 'nombre', 'descripcion' y 'precio'
    validarParametros(['nombre', 'descripcion', 'precio'], $_POST, $conn);

    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];

    // 2. Gestión de la imagen (lo que ya tenías)
    if (!isset($_FILES['imagen']) || $_FILES['imagen']['error'] !== UPLOAD_ERR_OK) {
        enviarError(400, 'La imagen es obligatoria', $conn);
    }

    $extension = strtolower(pathinfo($_FILES['imagen']['name'], PATHINFO_EXTENSION));
    $nombreArchivo = uniqid('artista_') . '.' . $extension;
    $rutaDestino = __DIR__ . '/../img/' . $nombreArchivo;

    if (!move_uploaded_file($_FILES['imagen']['tmp_name'], $rutaDestino)) {
        enviarError(500, 'Error al guardar la imagen en el servidor', $conn);
    }

    // 3. Insertar en la Base de Datos
    // Usamos sentencias preparadas para evitar Inyección SQL
    $sql = "INSERT INTO artistas (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $sql);
    
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ssds", $nombre, $descripcion, $precio, $nombreArchivo);
        
        if (mysqli_stmt_execute($stmt)) {
            enviarRespuesta($conn, ['success' => true, 'mensaje' => 'Artista añadido correctamente'], 201);
        } else {
            enviarError(500, 'Error al insertar en la base de datos', $conn);
        }
    } else {
        enviarError(500, 'Error en la preparación de la consulta', $conn);
    }
}