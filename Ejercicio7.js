function unidadesNumero(numero) {
    if (numero >= 1000 && numero <= 9999) {
        const Millar = Math.floor(numero / 1000) * 1000;
        const centenas = Math.floor((numero % 1000) / 100) * 100;
        const decenas = Math.floor((numero % 100) / 10) * 10;
        const unidades = numero % 10;

        console.log(numero, `Millar: ${Millar}, Centena: ${centenas}, Decena: ${decenas}, Unidad: ${unidades}`);
    } else {
        console.log(numero, "El número no tiene 4 dígitos.");
    }
}

unidadesNumero(2530); 
unidadesNumero(26);  
unidadesNumero(8796); 
unidadesNumero(456);  

