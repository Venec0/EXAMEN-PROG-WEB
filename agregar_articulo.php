<?php
    // Conexion base de datos
    $link = mysql_connect("localhost","root","") or die("<h2>No se encuentra servidor</h2>");
    $db = mysql_select_db("LOGIN_USUARIO", $link) or die("<h2>Error de conexion</h2>");

    // Verificar si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];

    $req = (strlen($nombre)*strlen($descripcion)*strlen($precio)) or die("No se han llenado los campos");
    // Aquí Se realizarán las acciones necesarias con los datos del formulario
    // Falta guardarlos en una tabla SQL
    mysql_query("INSERT INTO /*[Inserte nombre de tabla]*/ VALUES ('$nombre','$descripcion','$precio')", $link) or die("<h2>Error de envio</h2>");

    //Mostrar los datos
    echo "Nombre: " . $nombre . "<br>";
    echo "Descripción: " . $descripcion . "<br>";
    echo "Precio: $" . $precio;
    
}
?>