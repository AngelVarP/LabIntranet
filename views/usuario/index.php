<?php
    
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>LabIntranet</title>
    <link rel="stylesheet" href="/assets/css/usuario.css">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <div class="container">


            <div class="logo-wrapper">

                <div class="logo-box">
                    <img src="/assets/images/logo.png" alt="Logo" class="icono">
                </div>

                <span class="logo-text">LabIntranet</span>
            </div>


            <div class="acciones">
                <button class="btn-iniciar">Iniciar Sesión</button>
                <button class="btn-registrar">Registrarse</button>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>
            Laboratorio de <br/><span class="highlight">Química y Física</span>
        </h1>
    </section>

    <section class="cursos">
        <div class="contenedor-cursos">
            
            <!-- Curso 1 -->
            <div class="curso">
                <img src="/assets/images/quimica.png" alt="Curso Química" class="curso-logo">
                <h2 class="curso-nombre">Curso de Química</h2>
                <p class="curso-descripcion">
                    Aprende los fundamentos de la química moderna con prácticas en laboratorio.
                </p>
            </div>

            <!-- Curso 2 -->
            <div class="curso">
                <img src="/assets/images/fisica.png" alt="Curso Física" class="curso-logo">
                <h2 class="curso-nombre">Curso de Física</h2>
                <p class="curso-descripcion">
                    Explora los principios de la física clásica y experimental de manera aplicada.
                </p>
            </div>

        </div>
    </section>

    
</body>
</html>