function encontrarRango(numero1, numero2) {
    if ((numero1 >= 100 && numero1 <= 200) && (numero2 >= 100 && numero2 <= 200)) {
        console.log("Si esta en el rango");
    } else {
        console.log("No esta dentro del rango");
    }
}

encontrarRango(110, 190);
encontrarRango(50, 180); 
encontrarRango(190, 210);
