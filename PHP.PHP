<?php
    // Conexion base de datos
    $link = mysql_connect("localhost","root","") or die("<h2>No se encuentra servidor</h2>");
    $db = mysql_select_db("LOGIN_USUARIO", $link) or die("<h2>Error de conexion</h2>");

        // Verificar si se ha enviado el formulario
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    //Obtener datos del formulario
    $email=$_POST['Email'];
    $passwd=$_POST['Contraseña'];


    //Obtener la longitud del string
    $req = (strlen($email) * strlen($passwd)) or die("No se han llenado los campos");

    //Se encripta la contraseña
    $contraseñaUsuario = md5($passwd);

    //Ingresar la informacion a la tabla datos
    mysql_query("INSERT INTO DATOS VALUES ('$email','$contraseñaUsuario')", $link) or die("<h2>Error de envio</h2>");

    echo '
        <h2>Registro Completo</h2>
        <h5>Gracias por registrarte en nuestra página web, ya puedes ingresar</h5>
        <a href="index.html">Inicia Sesion</a>
        ';
    }
?>