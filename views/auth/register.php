<?php
$base_url = "http://localhost/LabIntranet/";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - Laboratorio Intranet</title>
    <link rel="stylesheet" href="<?php echo $base_url; ?>assets/css/styles.css">
</head>
<body>
    <header>
        <div class="header-container">
            <img src="<?php echo $base_url; ?>assets/images/logo.png" alt="Logo Lab Química" class="logo">
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
                    <label for="nombres">Nombres</label>
                    <input type="text" id="nombres" name="nombres" placeholder="Tus nombres" required>
                </div>

                <div class="input-group">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" id="apellidos" name="apellidos" placeholder="Tus apellidos" required>
                </div>

                <div class="input-group">
                    <label for="dni">DNI</label>
                    <input type="text" id="dni" name="dni" placeholder="Tu número de DNI" required>
                </div>

                <div class="input-group">
                    <label for="telefono">Teléfono</label>
                    <input type="text" id="telefono" name="telefono" placeholder="Tu número de teléfono" required>
                </div>

                <div class="input-group">
                    <label for="fechaNacimiento">Fecha de nacimiento</label>
                    <input type="date" id="fechaNacimiento" name="fechaNacimiento" required>
                </div>

                <div class="input-group">
                    <label for="correo_electronico">Correo</label>
                    <input type="email" id="correo_electronico" name="correo_electronico" placeholder="Tu correo" required>
                </div>

                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="Crea una contraseña" required>
                </div>

                <div class="role-selection">
                    <label for="rol">Selecciona tu rol</label>
                    <select id="rol" name="rol" required>
                        <option value="Delegado">Delegado</option>
                        <option value="Instructor">Instructor</option>
                    </select>
                </div>
                
                <br>
                <button type="submit" class="btn-login">Registrarse</button>
            </form>

            <p class="register-text">
                ¿Ya tienes cuenta? <a href="<?php echo $base_url; ?>views/auth/login.php">Inicia sesión</a>
            </p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Laboratorio Intranet</p>
    </footer>
</body>
</html>
