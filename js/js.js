let cant = parseInt(document.getElementById("cantidad").value);
let descuento = document.getElementById("categoria").value;
let estudiante = 0.2;
let trainee = 0.5;
let junior = 0.85;
let entrada = 200;

if(estudiante) {
    total = entrada * cant * estudiante;    
} else if (trainee) {
    total = entrada * cant * trainee;    
} else if (junior) {
    total = entrada * cant * estudiante;    
} else {
    total = entrada * cant;    
}
switch (descuento){
    case (descuento == estudiante): total = entrada * cant * estudiante;
    break;
    case (descuento == trainee): total = entrada * cant * trainee;
    break;
    case (descuento == junior): total = entrada * cant * junior;
    break;
    default: total = entrada * cant;
    break;
}