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
    localStorage.setItem("usuario", username);
    localStorage.setItem("rol", role);

    // Redirigir según el rol
    // Las rutas deben ser relativas a la página que carga el script (views/auth/login.php)
    if (role === "delegado") {
        window.location.href = "../../views/delegado/delegado.html";
        alert("¡Bienvenido Delegado! Accediendo a la página del delegado.");
    //AQUI AGREGUEN SUS ROLES QUE HARAN XDXDXD
    } else {
        alert("Rol no soportado para esta demo.");
    }
});