<?php
    $base_url = "http://localhost/mi_proyecto/";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>LabIntranet</title>
    <link rel="stylesheet" href="<?php echo $base_url; ?>assets/css/usuario.css">
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

            <!-- Botón hamburguesa -->
            <button class="menu-toggle" id="menu-toggle">
                &#9776; <!-- símbolo ☰ -->
            </button>

            <!-- Menú de acciones -->
            <div class="acciones" id="acciones">
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
            
            <div class="curso">
                <img src="/assets/images/usuario/flask-round.svg" alt="Curso Química" class="curso-logo">
                <h2 class="curso-nombre">Química</h2>
                <p class="curso-descripcion">
                    Reactivos, solventes y equipos especializados para experimentos de química orgánica e inorgánica.
                </p>
            </div>

            <div class="curso">
                <img src="/assets/images/usuario/atom.svg" alt="Curso Física" class="curso-logo">
                <h2 class="curso-nombre">Física</h2>
                <p class="curso-descripcion">
                    Instrumentos de medición, equipos ópticos y materiales para física experimental.
                </p>
            </div>

        </div>
    </section>

    <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo">
                <img src="/assets/images/logo.png" alt="Logo" class="footer-icon">
                <span class="footer-text">LabIntranet</span>
            </div>

            
        </div>
        <div class="footer-copy">
            &copy; 2025 LabIntranet. Todos los derechos reservados.
        </div>
    </footer>


    <script>
        const toggleBtn = document.querySelector(".menu-toggle");
        const acciones = document.querySelector(".acciones");

        toggleBtn.addEventListener("click", () => {
            acciones.classList.toggle("active"); 
        });
    </script>
    
    
</body>

</html>