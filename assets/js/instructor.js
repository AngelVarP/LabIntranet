document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================
    // LÓGICA DE CERRAR SESIÓN (Para el botón con ID 'logout-btn')
    // ==========================================================
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            console.log("Cerrando sesión del Instructor...");
            
            // Limpia todos los datos guardados en la sesión (usuario, rol, etc.)
            localStorage.clear(); 
            
            // Redirige al login. (Ruta: ../../views/auth/login.html)
            window.location.href = "../../views/usuario/index.html"; 
        });
    }

    // ==========================================================
    // LÓGICA DEL SIDEBAR (Resalta el enlace de la página actual)
    // ==========================================================
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    navLinks.forEach(link => {
        // Verifica si la URL actual termina con el href del enlace
        if (currentPath.endsWith(link.getAttribute('href'))) {
            // Elimina la clase 'active' de cualquier otro elemento
            document.querySelector('.sidebar ul li a.active')?.classList.remove('active');
            // Añade 'active' al enlace actual
            link.classList.add('active');
        }
    });

    // ==========================================================
    // LÓGICA DE NAVEGACIÓN DE TARJETAS (Duplicada aquí por si falla el script local)
    // ==========================================================
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.section;
            // Redirige a la página correspondiente (cursos.html, peticiones.html, etc.)
            if (section) {
                 window.location.href = `${section}.html`;
            }
        });
    });
});