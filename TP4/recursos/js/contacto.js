
document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("form-contacto");

    if (formContacto) {
        formContacto.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita que la página se recargue o dé error de servidor

            const nombreInput = document.getElementById("id-nombre");
            const emailInput = document.getElementById("id-email");
            const mensajeInput = document.getElementById("id-mensaje");

            const nombre = nombreInput ? nombreInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const mensaje = mensajeInput ? mensajeInput.value.trim() : "";

            if (nombre === "" || email === "" || mensaje === "") {
                alert("Por favor, completa todos los campos obligatorios.");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }

         
            alert(`¡Gracias por contactarnos, ${nombre}! Tu mensaje ha sido enviado con éxito.`);
            formContacto.reset();
        });
    }
});