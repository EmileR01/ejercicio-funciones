function calcularVolumen() {
    const r = parseFloat(document.getElementById("radio").value);
    const h = parseFloat(document.getElementById("altura").value);

    if (isNaN(r) || isNaN(h)) {
        document.getElementById("resultadoVolumen").textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const volumen = Math.PI * Math.pow(r, 2) * h;

    document.getElementById("resultadoVolumen").textContent =
        "El volumen del cilindro es: " + volumen.toFixed(2) + " unidades cúbicas";
}
