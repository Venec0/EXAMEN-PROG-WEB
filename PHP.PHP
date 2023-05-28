<?php
    // Conexion base de datos
    $link = mysql_connect("localhost,"root","") or die("<h2>No se encuentra servidor</h2>");;
    $db = mysql_select_db("login usuario", $link) or die("<h2>Error de conexion</h2>");;

    //Obtenemos valores del formulario
    $email=$_POST['Email'];
    $passwd=$_POST['Contraseña'];

    //Obtiene la longitud del string
    $req = (strlen($email)*strlen($passwd)) or die("No se han llenado los campos <br><br><a href='registro.hmtl' >);

    //Se encripta la contraseña
    $contraseñaUsuario = md5($passwd);

    //Ingresar la inforomacion a la tabla datos
    mysql_query("INSERT INTO datos VALUES ("'$email','$passwd')"$link) or die("<h2>Error de envio</h2>");

    echo '
        <h2>Registro Completo</h2>
        <h5>Gracias por registrarte en nuestra pagina web, ya puede ingresar</h5>
        <a href="index.html">Logearse</a>
        ';