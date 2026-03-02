<?php
//Configurar conexión a Base de Datos
$host = "localhost";
$username = "root";
$password = "";
$database = "cursoJS";
$conn=mysqli_connect($host,$username,$password,$database);

// Verificar conexión
if (!$conn) {
    echo json_encode(["error" => "Error de conexión: " . mysqli_connect_error()]);
    exit();
}

//Coger todas las filas
$sql="SELECT * FROM usuarios";
$stmt = $conn->prepare($sql);
// Ejecutar la consulta
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    //Usar fetch_assoc cuando devuelve una sola fila y fetch_all cuando devuelve varias filas
    $usuarios = $result->fetch_all(MYSQLI_ASSOC); //fetch_assoc() ó fetch_all(MYSQLI_ASSOC)
    //JSON_UNESCAPED_UNICODE para que muestre correctamente los caracteres especiales como la Ñ
    echo json_encode(["success" => $usuarios],JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["error" => []]);
}

// Cerrar la declaración preparada y la conexión
$stmt->close();
$conn->close();

?>