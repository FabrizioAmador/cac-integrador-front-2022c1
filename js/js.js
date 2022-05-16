function calcularPrecio(evt) {
    let cant = parseInt(document.getElementById("cantidad").value);
    let descuento = document.getElementById("categoria").value;
    let totalAPagar = document.getElementById("totalAPagar").innerHTML;
    let estudiante = 0.2;
    let trainee = 0.5;
    let junior = 0.85;
    let entrada = 200;
    let total;
    switch (descuento) {
        case (descuento == "estudiante"):
            total = entrada * cant * estudiante;
            break;
        case (descuento == "trainee"):
            total = entrada * cant * trainee;
            break;
        case (descuento == "junior"):
            total = entrada * cant * junior;
            break;
        default:
            total = entrada * cant;
    }
    totalAPagar = "Total a Pagar: $ " + total;
    console.log(total);
}

document.getElementById("resumen").onclick = calcularPrecio;