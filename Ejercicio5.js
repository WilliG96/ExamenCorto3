function dentrodeRango(numero1, numero2) {
    const enRango1 = (numero1 >= 0 && numero1 <= 50) || (numero1 >= 100 && numero1 <= 150);
    const enRango2 = (numero2 >= 0 && numero2 <= 50) || (numero2 >= 100 && numero2 <= 150);

    if (enRango1 && enRango2) {
        console.log("Si esta en el rango");
    } else {
        console.log("No esta en el rango");
    }
}

dentrodeRango(40, 130); 
dentrodeRango(70, 100); 
dentrodeRango(45, 150); 
dentrodeRango(20, 160); 
