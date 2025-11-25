function mostrarAreaTrapecio() {
    let B = parseFloat(document.getElementById("baseMayor").value);
    let b = parseFloat(document.getElementById("baseMenor").value);
    let h = parseFloat(document.getElementById("altura").value);

    if (isNaN(B) || isNaN(b) || isNaN(h)) {
        document.getElementById("resultadoAreaTrapecio").innerText = "Por favor ingresa todos los valores.";
        return;
    }

    let area = ((B + b) * h) / 2;

    document.getElementById("resultadoAreaTrapecio").innerText =
        "Área = " + area.toFixed(2);
}
