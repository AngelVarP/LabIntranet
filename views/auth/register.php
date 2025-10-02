<?php
// views/auth/register.php
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - Laboratorio Intranet</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
</head>
<body>
    <header>
        <div class="header-container">
            <img src="/assets/images/logo.png" alt="Logo Lab Química" class="logo">
            <div class="user-info">
                <h2>Registro de Usuario</h2>
            </div>
        </div>
    </header>

    <main>
        <section class="login-container">
            <form id="register-form" class="login-form" method="POST" action="controllers/RegisterController.php">
                <h1>Crear Cuenta</h1>
                <div class="input-group">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre completo" required>
                </div>
                <div class="input-group">
                    <label for="email">Correo</label>
                    <input type="email" id="email" name="email" placeholder="Tu correo" required>
                </div>
                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="Crea una contraseña" required>
                </div>
                <div class="role-selection">
                    <label for="role">Selecciona tu rol</label>
                    <select id="role" name="role" required>
                        <option value="delegado">Delegado</option>
                        <option value="instructor">Instructor</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </div>
                <br>
                <button type="submit" class="btn-login">Registrarse</button>
            </form>

            <p class="register-text">
                ¿Ya tienes cuenta? <a href="/views/auth/login.php">Inicia sesión</a>
            </p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Laboratorio Intranet</p>
    </footer>
</body>
</html>
