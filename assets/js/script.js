// Obtener el formulario de login
const loginForm = document.getElementById('login-form');

// Manejar el envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario (recargar página)

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validar el login (esto es solo un ejemplo, en un entorno real deberías hacer esto en el servidor)
    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        // Simular el acceso según el rol
        if (role === "admin") {
            alert("¡Bienvenido Administrador! Accediendo al sistema de inventario.");
        } else if (role === "maestro") {
            alert("¡Bienvenido Maestro! Accediendo a las herramientas del laboratorio.");
        } else if (role === "alumno") {
            alert("¡Bienvenido Alumno! Accediendo a tus recursos de laboratorio.");
        }
    }
});

// script.js - Login

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtener datos del formulario
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;

    // Guardar en localStorage
    localStorage.setItem("usuario", username);
    localStorage.setItem("rol", role);

    // Redirigir según el rol
    if(role === "delegado") {
        window.location.href = "delegado/delegado.html";
    } else if(role === "administrador") {
        window.location.href = "administrador/administrador.html";
    } else if(role === "instructor") {
        window.location.href = "instructor/instructor.html";
    } else {
        alert("Rol no soportado para esta demo");
    }
});