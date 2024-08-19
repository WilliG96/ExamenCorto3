function tresDigitos(numero) {
    if (numero >= 100 && numero <= 999) {
        console.log(numero, "Si tiene 3 digitos");
    } else {
        console.log(numero, "No tiene 3 digitos");
    }
}

tresDigitos(123);
tresDigitos(92);   
tresDigitos(1000);

