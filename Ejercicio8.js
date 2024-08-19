function sumaNumeros(numero1, numero2) {
    const suma = numero1 + numero2;

    if (suma > 100) {
        console.log("La suma de ", numero1, " + ", numero2, "Es ", suma, "Resultado mayor que 100");
    } else {
        console.log("La suma de ", numero1, " + ", numero2, "Es ", suma, "Resultado menor que 100");
    }
}

sumaNumeros(44, 60);
sumaNumeros(10, 40); 
sumaNumeros(100, 60); 
sumaNumeros(45, 70);
