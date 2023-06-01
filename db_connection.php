<?php
$servername = "localhost";
$username = "admin";
$password = "2023MyBD";
$database = "ecommerce";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}
?>
