function calcularVolumen(r) {
    return (4/3) * Math.PI * Math.pow(r, 3);
}

function mostrarVolumen() {
    const r = parseFloat(document.getElementById("radio").value);

    if (isNaN(r) || r <= 0) {
        document.getElementById("resultadoVolumen").textContent =
            "Por favor ingresa un valor válido para el radio.";
        return;
    }

    const volumen = calcularVolumen(r);
    document.getElementById("resultadoVolumen").textContent =
        "El volumen de la esfera es: " + volumen.toFixed(2);
}
