

// Área del Rombo
function calcularArea(D, d) {
    return (D *d) / 2;
}

//
// FUNCIONES QUE MUESTRAN RESULTADOS
//
// Mostrar área
function mostrarArea() {
    const D = Number(document.getElementById("D").value);
    const d = Number(document.getElementById("d").value);

    if (!D || !d) {
        document.getElementById("resultadoArea").innerText =
            "Debes ingresar la diagonal mayor y la diagonal menor.";
        return;
    }

    const resultado = calcularArea(D, d);
    document.getElementById("resultadoArea").innerText =
        "Área: " + resultado;
}
