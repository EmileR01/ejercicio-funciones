function mostrarVolumen() {
    const lado = parseFloat(document.getElementById("ladoCubo").value);

    if (isNaN(lado) || lado <= 0) {
        document.getElementById("resultadoVolumen").textContent =
            "Por favor ingresa un valor válido.";
        return;
    }

    const volumen = Math.pow(lado, 3);

    document.getElementById("resultadoVolumen").textContent =
        "El volumen del cubo es: " + volumen + " unidades cúbicas";
}
