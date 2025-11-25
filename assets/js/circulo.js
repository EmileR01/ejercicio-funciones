function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2); // A = πr²
}

function mostrarArea() {
    const r = parseFloat(document.getElementById("radio").value);

    if (isNaN(r) || r <= 0) {
        document.getElementById("resultadoArea").innerText =
            "Por favor ingresa un valor válido para el radio.";
        return;
    }

    const area = calcularArea(r);

    document.getElementById("resultadoArea").innerText =
        "Área del círculo: " + area.toFixed(2);
}
