// Obtener el formulario de login
const loginForm = document.getElementById('login-form');

// Manejar el envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar página)

    // Obtener datos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validar que los campos no estén vacíos
    if (username === "" || password === "" || role === "") {
        alert("Por favor, completa todos los campos.");
        return; // Detiene la ejecución si los campos están vacíos
    }

    // Guardar en localStorage
    // Nota: Deberías validar credenciales reales en un servidor antes de guardar.
    localStorage.setItem("usuario", username);
    localStorage.setItem("rol", role);

    // Redirigir según el rol
    if (role === "delegado") { // Asegúrate que el valor sea 'Delegado' (mayúscula/minúscula)
        window.location.href = "../../views/delegado/delegado.html";
        alert("¡Bienvenido Delegado! Accediendo a la página del delegado.");
    } else if (role === "instructor") { // Usamos 'else if' para otra opción
        // La ruta debe ser a la página principal del Instructor
        window.location.href = "../../views/instructor/solicitudes_instructor.html";
        alert("¡Bienvenido Instructor! Accediendo a la página del instructor.");
    } else {
        alert("Rol no soportado para esta demo.");
    }
});