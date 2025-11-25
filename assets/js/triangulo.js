

// Área del triángulo
function calcularArea(base, altura) {
    return (base * altura) / 2;
}

//
// FUNCIONES QUE MUESTRAN RESULTADOS
//
// Mostrar área
function mostrarArea() {
    const base = Number(document.getElementById("base").value);
    const altura = Number(document.getElementById("altura").value);

    if (!base || !altura) {
        document.getElementById("resultadoArea").innerText =
            "Debes ingresar base y altura.";
        return;
    }

    const resultado = calcularArea(base, altura);
    document.getElementById("resultadoArea").innerText =
        "Área: " + resultado;
}
