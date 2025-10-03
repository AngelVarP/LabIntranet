document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================
    // LÓGICA DE CERRAR SESIÓN (Para todas las páginas del Administrador)
    // ==========================================================
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Elimina cualquier dato de sesión guardado (como solicitaste)
            localStorage.clear(); 
            
            // Redirigir a la página de login (Ajusta la ruta si es necesario)
            window.location.href = "../../views/usuario/index.html"; 
        });
    }

    // ==========================================================
    // CHICA LÓGICA DE FILTRADO (Simulación de Backend)
    // Lee el parámetro de la URL para simular la aplicación de un filtro
    // ==========================================================
    const urlParams = new URLSearchParams(window.location.search);
    const filtro = urlParams.get('filtro');
    
    if (filtro) {
        
        const pageTitle = document.getElementById('pageTitle');

        // 1. Lógica para SOLICITUDES
        if (window.location.pathname.includes('solicitudes_admin.html')) {
            if (filtro === 'pendientes') {
                if(pageTitle) pageTitle.innerText = "Gestión de Solicitudes | 🚨 PENDIENTES (5)";
                
                const select = document.getElementById('filtroEstado');
                if (select) {
                    select.value = 'pendientes'; // Simula la selección del filtro
                }
            }
        }
        
        // 2. Lógica para INVENTARIO
        else if (window.location.pathname.includes('inventario_admin.html')) {
            if (filtro === 'critico') {
                if(pageTitle) pageTitle.innerText = "Inventario | 🔴 BAJO STOCK CRÍTICO (25 ítems)";
                
                const select = document.getElementById('filtroStock');
                if (select) {
                    select.value = 'critico'; // Simula la selección del filtro
                }
            }
        }

        // 3. Lógica para USUARIOS
        else if (window.location.pathname.includes('usuarios_admin.html')) {
            if (filtro === 'todos') {
                if(pageTitle) pageTitle.innerText = "Gestión de Usuarios | Total Activos (12)";
            }
        }
    }
});