// Función para calcular el área del cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}

// Muestra el área en pantalla
function mostrarArea() {
    let lado = parseFloat(document.getElementById("lado").value);

    if (isNaN(lado) || lado <= 0) {
        document.getElementById("resultadoArea").innerHTML = "Ingrese un lado válido.";
        return;
    }

    let area = areaCuadrado(lado);
    document.getElementById("resultadoArea").innerHTML = "Área: " + area;
}
