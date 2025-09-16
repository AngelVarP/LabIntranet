// delegado.js

// Mostrar el usuario en la interfaz
const usuario = localStorage.getItem("usuario");
const usuarioDiv = document.querySelector(".usuario b");

if (usuario) {
    usuarioDiv.textContent = usuario;
} else {
    // Si no hay usuario guardado, redirigir al login
    window.location.href = "../index.html";
}

// Lista de laboratorios
const laboratorios = [
    { id: 1, nombre: "Laboratorio 1" },
    { id: 2, nombre: "Laboratorio 2" }
];

// Lista de materiales
const materiales = ["Pipeta", "Probeta", "Guantes"];

// Contenedor en HTML
const listaLabos = document.getElementById("listaLabos");

// Generar dinámicamente los laboratorios
laboratorios.forEach(labo => {
    const div = document.createElement("div");
    div.classList.add("labo");

    div.innerHTML = `
        <h3 class="titulo-labo" data-id="${labo.id}">${labo.nombre}</h3>
        <div class="formulario" id="form${labo.id}" style="display:none;">
            ${materiales.map(mat => `
                <label>
                    ${mat}: 
                    <input type="number" min="0" class="cantidad" data-mat="${mat}">
                </label>
            `).join("")}
            <button onclick="enviar(${labo.id})">Recoger y Enviar</button>
        </div>
    `;
    listaLabos.appendChild(div);
});

// Asignar eventos SOLO a los títulos
document.querySelectorAll(".titulo-labo").forEach(titulo => {
    titulo.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        toggleForm(id);
    });
});

// Mostrar/ocultar formularios
function toggleForm(id) {
    const form = document.getElementById("form" + id);
    form.style.display = (form.style.display === "block") ? "none" : "block";
}

// Recoger selección de materiales con confirmación
function enviar(id) {
    const form = document.getElementById("form" + id);
    const inputs = form.querySelectorAll("input.cantidad");
    let seleccionados = [];

    inputs.forEach(input => {
        let cantidad = parseInt(input.value) || 0;
        if (cantidad > 0) {
            seleccionados.push(`${input.dataset.mat} (${cantidad})`);
        }
    });

    if (seleccionados.length === 0) {
        alert("No seleccionaste materiales en " + id);
    } else {
        // Mostrar confirmación
        const confirmar = confirm(
            "Vas a solicitar los siguientes materiales en " + 
            laboratorios.find(l => l.id == id).nombre + ":\n\n" + 
            seleccionados.join("\n") + 
            "\n\n¿Confirmas el envío?"
        );

        if (confirmar) {
            alert("Solicitud enviada correctamente.");
            // Aquí podrías limpiar los inputs si quieres:
            inputs.forEach(input => input.value = "");
        } else {
            alert("Solicitud cancelada.");
        }
    }
}

// Cerrar sesión
document.getElementById("cerrarSesion").addEventListener("click", () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("rol");
    window.location.href = "../index.html";
});
