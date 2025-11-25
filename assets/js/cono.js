function calcularVolumen(r, h) {
    return (Math.PI * r * r * h) / 3;
}

function mostrarVolumen() {
    const r = parseFloat(document.getElementById("radio").value);
    const h = parseFloat(document.getElementById("altura").value);

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
        document.getElementById("resultadoVolumen").textContent =
            "Por favor ingresa valores válidos.";
        return;
    }

    const volumen = calcularVolumen(r, h);

    document.getElementById("resultadoVolumen").textContent =
        "Volumen: " + volumen.toFixed(2) + " unidades³";
}
