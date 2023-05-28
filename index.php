<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN & REGISTRATION | Memoriesdistro</title>
    <link rel="stylesheet" href="CSS/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous/">
</head>

<body>
    
    <header>
        <h2 class="logo">Logo</h2>
        <nav class="navigation">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Contacto</a>
            <button class="btnLogin-popup">Login</button>
        </nav>
    </header>

    <div class="fadein">
        <img id="f3" src="IMG/Queen_Background.jpg">
        <img id="f2" src="IMG/MJ_Background.jpg">
        <img id="f1" src="IMG/Daryl_Hall_John_Oates_Background.jpg">
        <div class="wrapper">
            <span class="icon-close">
                <ion-icon name="close-outline"></ion-icon>
            </span>

            <div class="form-box login">
                <h2>Login</h2>
                <?php
                    if (isset($_POST['submit'])) {
                        $email = $_POST['email'];
                        $password = $_POST['password'];
                        echo "<p>Bienvenido, $email. Tu contraseña es $password.</p>";
                    }
                ?>
                <form action="#" method="post">
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="mail-outline"></ion-icon>
                        </span>
                        <input type="email" name="email" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <input type="password" name="password" required>
                        <label>Contraseña</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox"> Recuérdame.</label>
                        <a href="#">Olvidé mi contraseña</a>
                    </div>
                    <button type="submit" name="submit" class="btnLOGIN">Login</button>
                </form>
            </div>
        </div>
