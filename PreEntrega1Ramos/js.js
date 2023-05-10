

function calcular_prestamo( monto , cuotas ){
    monto = parseFloat( monto);
    cuotas = parseInt( cuotas );

    let prestamo = 0;

    if ( monto > 0 && cuotas == 1){
        prestamo = monto + (monto * 0.00);
        return prestamo
    }
    if ( monto > 0 && cuotas == 2){
        prestamo = monto + (monto * 0.05);
        return prestamo
    }
    if ( monto > 0 && cuotas == 3){
        prestamo = monto + (monto * 0.10);
        return prestamo
    }
    if ( monto > 0 && cuotas == 4){
        prestamo = monto + (monto * 0.15);
        return prestamo
    }
    if ( monto > 0 && cuotas == 5){
        prestamo = monto + (monto * 0.20);
        return prestamo
    }
    else if( monto > 0 && cuotas == 6){
        prestamo = monto + (monto * 0.25);
        return prestamo
    }
    if ( monto > 0 && cuotas == 7){
        prestamo = monto + (monto * 0.30);
        return prestamo
    }
    if ( monto > 0 && cuotas == 8){
        prestamo = monto + (monto * 0.35);
        return prestamo
    }
    if ( monto > 0 && cuotas == 9){
        prestamo = monto + (monto * 0.35);
        return prestamo
    }
    if ( monto > 0 && cuotas == 10){
        prestamo = monto + (monto * 0.35);
        return prestamo
    }
    if ( monto > 0 && cuotas == 11){
        prestamo = monto + (monto * 0.35);
        return prestamo
    }
    else if( monto > 0 && cuotas == 12){
        prestamo = monto + (monto * 0.35);
        return prestamo
    }
    else if( monto > 0 && cuotas == 1){
        return prestamo
    }
}

function es_socio( prestamo , estado_usuario ){
    if( estado_usuario == "SI"){
        let descuento = prestamo - ( prestamo * 0.020);
        return descuento;
    }
    else{
        return 0
    }
}

console.log("Bienbenido/a a prestamos al toke");

let monto = "";


while( monto != "FIN"){

    monto = prompt("ingrese el monto que desea o ingrese FIN para finalizar");
    
    if (monto !="FIN"){
        let estado_usuario = prompt("Es socio: SI o NO");
        let cuotas = prompt("ingrese la cantidad de cuotas 1,2,3,4,5,6,7,8,9,10,11 o 12");
    
        let resultado_prestamo = calcular_prestamo( monto, cuotas);
        let resultado_descuento = es_socio( resultado_prestamo , estado_usuario);
    
        console.log("Pediste: ", monto );
        console.log("cuotas: ", cuotas);
        console.log("devolveras ",  resultado_prestamo);

        if( resultado_descuento != 0){
            console.log("con el descuento de 20% por ser socio: ", resultado_descuento);
        }
    }

}










