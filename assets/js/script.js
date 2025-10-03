// Obtener el formulario de login
const loginForm = document.getElementById('login-form');

// Manejar el envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar página)

    // Obtener datos del formulario
    // 💡 CAMBIO CRUCIAL: Usamos 'username' para coincidir con tu HTML
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validar que los campos no estén vacíos
    // 💡 CAMBIO CRUCIAL: Ahora validamos la variable 'username'
    if (username === "" || password === "" || role === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Ahora guardamos 'username'
    localStorage.setItem("username", username); 
    localStorage.setItem("rol", role);


    // Redirigir según el rol
    if (role === "delegado") { 
        window.location.href = "../delegado/delegado.html"; 
        alert("¡Bienvenido Delegado! Accediendo a la página del delegado.");
    } else if (role === "instructor") {
        window.location.href = "../instructor/instructor.html";
        alert("¡Bienvenido Instructor! Accediendo a la página del instructor.");
    } 
    else if (role === "administrador") {
        window.location.href = "../administrador/administrador.html";
        alert("¡Bienvenido Administrador! Accediendo a la página del administrador.");
    }
    else {
        alert("Rol no soportado para esta demo.");
    }
});