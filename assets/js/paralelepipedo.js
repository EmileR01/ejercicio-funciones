function calcularVolumen(largo, ancho, altura) {
    return largo * ancho * altura;
}

function mostrarVolumen() {
    const L = parseFloat(document.getElementById("largo").value);
    const A = parseFloat(document.getElementById("ancho").value);
    const H = parseFloat(document.getElementById("altura").value);

    if (isNaN(L) || isNaN(A) || isNaN(H) || L <= 0 || A <= 0 || H <= 0) {
        document.getElementById("resultadoVolumen").textContent = 
            "Por favor ingresa valores válidos.";
        return;
    }

    const volumen = calcularVolumen(L, A, H);

    document.getElementById("resultadoVolumen").textContent =
        "El volumen del paralelepípedo es: " + volumen + " unidades³";
}
